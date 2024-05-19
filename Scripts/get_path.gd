extends Node

func get_dir_path():
	var try_catch:String= ProjectSettings.globalize_path("res://")
	print('\n\nTry_Catch: ', try_catch,"\n\n")
	if try_catch != null and try_catch != "":
		return try_catch
	else:
		return OS.get_executable_path()+"/"
