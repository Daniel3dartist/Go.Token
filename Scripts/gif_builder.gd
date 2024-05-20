extends Object

var get_path = preload("res://Scripts/get_path.gd")
var PATH:String = get_path.new().get_dir_path()
var os = OS.get_name()

var path = PATH+"/dependency/ImageMagick/ImageMagick_{0}/".format([os])
var temp_dir = PATH+"data/temp/img/"

func shell_exec(command)->void:
	print(os)
	var output = []
	var exit_code = OS.execute("CMD.exe", ["/C", "cd %s && %s" % [path, command]], output)
	#return output

func split_frames(path, file_name):
	var is_formated = file_name.split('.')
	if len(is_formated) > 1 and is_formated[1] == ".gif":
		file_name=file_name.replace(".gif", "")
	var command = "convert {0} -coalesce {1}{2}%05d.png".format([path, temp_dir, file_name]) 
	print(command)
	shell_exec(command)
	#return [temp_dir, file.replace(".gif", ""), ".png"]

func join_frames(file)->String:
	var _path = temp_dir+file
	var command = "convert {0}*.png {1}".format([temp_dir, _path])
	shell_exec(command)
	return _path

func get_image_sequence():
	var dir = DirAccess.open(temp_dir)
	var files = dir.get_files()
	return [temp_dir, files]


func clean_cach()->void:
	var files = await get_image_sequence()[1]
	if len(files) > 0:
		var dir = DirAccess.open(temp_dir)
		for i in files:
			dir.remove(i)
