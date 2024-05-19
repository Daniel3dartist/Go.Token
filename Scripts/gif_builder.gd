extends Object

var get_path = preload("res://Scripts/get_path.gd")
var PATH:String = get_path.new().get_dir_path()
var os = OS.get_name()
var path = PATH+"/dependency/ImageMagick/ImageMagick_%s/" % os
var temp_dir = PATH+"data/temp/img/"

func shell_exec(command)->void:
	var output = []
	var exit_code = OS.execute("CMD.exe", ["/C", "cd %s && %s" % [path, command]], output)
	#return output

func split_frames(file)->Array:
	var command = "convert {0} {1}{2}%05d.png".format([file, temp_dir, file.replace(".gif", "")]) 
	print(command)
	shell_exec(command)
	return [temp_dir, file.replace(".gif", ""), ".png"]

func join_frames(file)->String:
	var _path = temp_dir+file
	var command = "convert {0}*.png {1}".format(temp_dir, _path)
	shell_exec(command)
	return _path

		
