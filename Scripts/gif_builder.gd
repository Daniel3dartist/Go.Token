extends Object

var get_path = preload("res://Scripts/get_path.gd")
var PATH:String = get_path.new().get_dir_path()
var os = OS.get_name()

var path = PATH+"/dependency/ImageMagick/ImageMagick_{0}/".format([os])
var temp_dir = PATH+"data/temp"

func shell_exec(command)->void:
	print(os)
	var output = []
	var exit_code = OS.execute("CMD.exe", ["/C", "cd %s && %s" % [path, command]], output)
	#return output

func split_frames(path, file_name):
	var is_formated = file_name.split('.')
	if len(is_formated) > 1 and is_formated[1] == ".gif":
		file_name=file_name.replace(".gif", "")
	var command = "magick {0} -coalesce {1}/img/{2}%0005d.png".format([path, temp_dir, file_name]) 
	print(command)
	shell_exec(command)
	#return [temp_dir, file.replace(".gif", ""), ".png"]

func join_frames(file)->String:
	var _path = PATH+'/tokens/'+file
	var command = "magick {0}*.png {1}.gif".format([(temp_dir+"/token_img/"), _path])
	shell_exec(command)
	return _path

func get_image_sequence(dir_name='img'):
	var _temp_dir = temp_dir+'/%s/'%dir_name
	var dir = DirAccess.open(_temp_dir)
	var files = dir.get_files()
	return [_temp_dir, files]


func clean_cache()->void:
	var dirs = ['img', 'token_img']
	for i in dirs:
		var files = await get_image_sequence(i)[1]
		if len(files) > 0:
			var dir = DirAccess.open(temp_dir+'/%s/'%i)
			for x in files:
				dir.remove(x)
