extends Object

var get_path = preload("res://Scripts/get_path.gd")
var PATH:String = get_path.new().get_dir_path()
var os = OS.get_name().to_lower()

var path = PATH+"/dependency/ImageMagick/ImageMagick_{0}/".format([os])
var temp_dir = PATH+"data/temp"
var loaded_img_name:String
var fps:float


func shell_exec(command) -> Array:
	var shell:Array = ["/bin/bash", "-c"]
	if os == 'windows':
		shell = ["CMD.exe", "/C"]
	var output = []
	var exit_code = OS.execute(shell[0], [shell[1], "cd %s && %s" % [path, command]], output)
	return [output, exit_code]

func get_fps(path:String, file_name:String) -> float:
	print('ARGS: [',path, ',',file_name,']')
	var command:String = 'magick identify -verbose "{0}" | grep -F "Delay:" | nl -ba | grep "^\\s*1:"'.format([path])
	if os == 'windows':
		command = 'magick identify -verbose "{0}" | findstr "Delay:" | more +0 | findstr /R /N "^" | findstr "^1:"'.format([path])
	print(('get_fps command: '+command))
	var output = shell_exec(command)
	print('OUTPUT: ', output)
	var _fps = float(output[0][0].split('Delay: ')[1].split('x')[0])
	print("GIF FPS: ", 100/_fps)
	print('100/{0} = {1}'.format([(100/_fps), _fps]))
	print("{0}/100 = {1}".format([_fps, (_fps/100)]))
	return float(_fps)

func split_frames(path, file_name):
	fps=get_fps(path, file_name)
	var is_formated = file_name.split('.')
	if len(is_formated) > 1 and is_formated[1] == ".gif":
		file_name=file_name.replace(".gif", "")
	var command = "magick {0} -coalesce {1}/img/{2}%0005d.png".format([path, temp_dir, file_name]) 
	print('split_frames command: ', command)
	shell_exec(command)
	#return [temp_dir, file.replace(".gif", ""), ".png"]

func join_frames(file, frame_delay:float=(100/27))->String:
	if fps:
		frame_delay = fps
	#frame_delay = 3.703703703703704
	var _path = PATH+'/tokens/'+file
	var command = "magick -delay {0} {1}*.png {2}.gif".format([frame_delay, (temp_dir+"/token_img/"), _path])
	print('join_frames command: ', command)
	shell_exec(command)
	return _path

func get_image_sequence(dir_name='img'):
	var _temp_dir = temp_dir+'/%s/'%dir_name
	var dir = DirAccess.open(_temp_dir)
	var files = dir.get_files()
	return [_temp_dir, files]

func remove_conflict(file_name:String) -> void:
	var files = await get_image_sequence('img')
	print('FILES: ',files)
	if len(files[1]) > 0:
		var dir = DirAccess.open(files[0])
		for x in files[1]:
			print('X: ', x)
			dir.remove(x)
			if not file_name in x:
				dir.remove(x)

func clean_cache()->bool:
	var dirs = ['img', 'token_img']
	for i in dirs:
		var files = await get_image_sequence(i)[1]
		if len(files) > 0:
			var dir = DirAccess.open(temp_dir+'/%s/'%i)
			for x in files:
				dir.remove(x)
	return true
