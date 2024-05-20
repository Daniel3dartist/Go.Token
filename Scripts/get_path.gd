extends Node

func get_dir_path():
	var root:String= ProjectSettings.globalize_path("res://")
	if root != null and root != "":
		return root
	else:
		return OS.get_executable_path()+"/"
