extends Control

signal img_sz(_size)

var BASE_PATH:String #= OS.get_executable_path().get_base_dir() #'user://'
var platform = OS.get_name()

var app_name = 'org.godotengine.gotoken'

@onready var TexRect = $'Panel/HBoxContainer/Panel/CenterContainer/Char_Image'
@onready var Token = $'Panel/HBoxContainer/Panel2/CenterContainer/Token/HBoxContainer/VBoxContainer/HBoxContainer2/CenterContainer/Token_TextureRect'
@onready var Token_Ring = $Panel/HBoxContainer/Panel2/CenterContainer/Token/HBoxContainer/VBoxContainer/HBoxContainer2/CenterContainer/Token_Ring
@onready var _Panel = $'Panel/HBoxContainer/Panel'

@onready var savepanel = preload("res://Scenes/save_panel.tscn")
@onready var GetPath = preload("res://Scripts/get_path.gd").new()
@onready var gif_builder=preload("res://Scripts/gif_builder.gd").new()

var is_safe:bool=false

#tmp_js_export
func _ready():
	BASE_PATH = GetPath.get_dir_path()
	if platform == 'Android':
		BASE_PATH = 'Pictures'
	elif platform == "Web":
		var label_suported_files:Label = $Panel/HBoxContainer/Panel/CenterContainer/Label
		label_suported_files.text="Drop your file here.\n( JPG, PNG, WEBP, TGA, BMP)"
	var dir_open = $'ColorRect/HBoxContainer/Dir'
	await init_setup()
	get_tree().get_root().connect("files_dropped", Callable(self, "_on_files_dropped"))
	await gif_builder.clean_cache()

func make_dir(dir_path):
	var dir : DirAccess = DirAccess.open(BASE_PATH)
	var _path = '{0}{1}'.format([BASE_PATH, dir_path])
	print("Make dir in path: "+_path)
	if dir.dir_exists(_path) == false:
			dir.make_dir(_path)


func init_setup():
	var dirs_to_setup: Array = ['tokens', 'data', 'temp', ['img','token_img']]
	var path_incremental: String
	for i in range(0,len(dirs_to_setup)):
		if i < 1:
			make_dir(dirs_to_setup[i])
		elif i < 3:
			path_incremental+=(dirs_to_setup[i]+"/")
			make_dir(path_incremental)
		else:
			for x in dirs_to_setup[3]:
				make_dir(path_incremental+x+'/')


func _on_files_dropped(files):
	var is_cleaned:bool = true
	if gif_builder.loaded_img_name != null:
		is_safe = false
		is_cleaned = false
		gif_builder.remove_conflict(gif_builder.loaded_img_name)
	is_cleaned=true
	if is_cleaned == true:
		is_safe=false
		var vx = _Panel.get_global_position().x + _Panel.size.x
		var vy = _Panel.get_global_position().y + _Panel.size.y
		if get_global_mouse_position().x <= vx and get_global_mouse_position().x >= vx - _Panel.size.x and get_global_mouse_position().y <= vy and get_global_mouse_position().x >= vy - _Panel.size.y:
			var PATH = files[0]
			print("\nPATH: %s\n" % PATH.replace("\\", "/"))
			var image_name
			image_name = PATH.split('\\')
			image_name = '/%s' % image_name[-1]
			print('\n\nImage_name\n\n', image_name, '\n\n')
			#gif_builder.remove_conflict(image_name.replace('/', '').split('.')[0])
			load_char_image(PATH)
	

func load_char_image(path):
	var img_tipe_label = $Panel/HBoxContainer/Panel/CenterContainer/Label
	print('PATH: ', path)
	var valid_image = load_external_tex(path)
	var tex = Texture2D.new()
	if valid_image[1] != false:
		print("IS A VALID IMAGE!")
		tex = valid_image[0]
		var self_div = tex.get_size()[0] - tex.get_size()[1]
		var ref_div = [(tex.get_size()[0]/500)*0.1, (500/tex.get_size()[1])*1.0]
		emit_signal('img_sz', tex.get_size())
		TexRect.texture = tex
		TexRect.material = null
		img_tipe_label.visible = false
		Token.material.set_shader_parameter('tex_frg_2' , valid_image)
	else:
		is_safe=true
		run_img_sequece(TexRect, img_tipe_label, valid_image, tex)
		
func run_img_sequece(TexRect, img_tipe_label, valid_image, tex):
	var files:Array = gif_builder.get_image_sequence()
	img_tipe_label.visible = false
	TexRect.material = null
	var img_sequence_texs:Array=[]
	for i in range(0 , len(files[1])):
		#valid_image = load_external_tex(files[0]+i)
		print(files[0]+files[1][i])
		if files[1][i].split('.')[-1] == "png":
			print('foi aqui que parou')
			print('file 0 : ',files[0], '\nfile 1: ',files[1][i])
			valid_image = load_external_tex(files[0]+files[1][i])
			img_sequence_texs.append(valid_image[0])
	print('img_sequence_tex: ',img_sequence_texs)
	while is_safe==true:
		var is_saving = self.get_node('CenterContainer').get_node('save_panel')
		if is_saving != null:
			break
		
				#var self_div = tex.get_size()[0] - tex.get_size()[1]
				#var ref_div = [(tex.get_size()[0]/500)*0.1, (500/tex.get_size()[1])*1.0]
				#emit_signal('img_sz', tex.get_size())
		for i in img_sequence_texs:
			TexRect.texture = i
			Token.material.set_shader_parameter('tex_frg_2' , i)
			await get_tree().create_timer(0.03).timeout

#$"."
func _Save_Token(file_name, type):
	var main_scene=$"."
	var saving_panel=load("res://Scenes/saving_panel.tscn")
	var saving_panel_instance=saving_panel.instantiate()
	main_scene.add_child(saving_panel_instance)
	saving_panel=main_scene.get_node('./Saving_Panel')
	saving_panel._progress_text()
	#$Label.text = platform
	var viewport = $'CenterContainer/save_panel/VBoxContainer/HBoxContainer/CenterContainer/ViewportContainer2/SubViewport'
	var _token = viewport.get_node("CenterContainer/Token_TextureRect")
	
	var img = viewport.get_viewport().get_texture().get_image()
#	img.flip_y()
	var path = BASE_PATH + 'tokens/'
	print(path + file_name)
#	img.save_png(str(path + save_path))
	
	match platform:
		'Web':
			var buf = img.save_png_to_buffer()
			JavaScriptBridge.download_buffer(buf, file_name)
		
		'Android':
	#		var mobile_path = 'sdcard/Android/data/%s/files/%s' % [app_name, 'tokens']
			var mobile_path = '%s/tokens' % BASE_PATH
			var dir : DirAccess
	#		if dir.dir_exists(mobile_path) == false:
	#			$Label.text = 'false dir'
	#			dir.make_dir(mobile_path)
			img.save_png(str(BASE_PATH + '/%s' % file_name))
			OS.shell_open(mobile_path)
		_:
			print("The Type IS: ", type)
			if type == "GIF":
				var tex:Array
				var img_sequece = gif_builder.get_image_sequence('img')
				var count: int=0
				for i in img_sequece[1]:
					#print("My I: ",img_sequece[0]+i)
					tex.append(load_external_tex(img_sequece[0]+i)[0])
				Engine.max_fps = 60
				for x in tex:
					#var hidden_viewport = load("res://Scenes/viewport_save_token.tscn").instantiate()
					#var spaw_point = $'CenterContainer/save_panel/VBoxContainer/HBoxContainer/CenterContainer/HiddenViewport_spaw'
					#spaw_point.add_child(hidden_viewport)
					#viewport = spaw_point.get_child(0).get_child(0)
					print("Is VIEWPORT? ", viewport)
					img = viewport.get_viewport().get_texture().get_image()
					#_token = spaw_point.get_node('ViewportContainer/SubViewport/CenterContainer/Token_TextureRect')
					_token.material.set_shader_parameter('tex_frg_2' , x)
					await get_tree().create_timer(2).timeout
					var zeros = '0'.repeat(5-len(str(count)))
					zeros+='%s'%count
					var temp_save_path = gif_builder.temp_dir+'/token_img/token%s.png'%zeros
					
					await img.save_png(temp_save_path)
					await get_tree().create_timer(1).timeout
					count+=1
					saving_panel._add_value()
					
					#spaw_point.get_child(0).queue_free()
				Engine.max_fps = 120
					
				
				gif_builder.join_frames(file_name)
			else:
				print('saving')
				img.save_png(str(path + file_name))
			gif_builder.clean_cache()

func _Open_Dir():
	OS.shell_open(BASE_PATH + '/tokens')


func load_external_tex(path):
	var split_key:String = "/"
	if not split_key in path:
		split_key = "\\"
	print("PATH", path)
	var file = path.split(split_key)[-1]
	file = file.split(".")
	print("MY FILE: ", file)
	var file_name = file[0]
	gif_builder.loaded_img_name=file_name
	var file_type = file[1].to_lower()
	var formats = ['png', 'jpg', 'jpeg', 'bmp', 'tga','webp']
	var is_valid: bool 
	if formats.has(file_type) == true:
		print("Format accepted!")
		var tex_file : FileAccess = FileAccess.open(path, FileAccess.READ)
		var bytes = tex_file.get_buffer(tex_file.get_length())
		var img = Image.new()
		var data 
		is_valid= true

		if file_type == 'png':
			print(file_type)
			data = img.load_png_from_buffer(bytes)
		elif file_type == 'jpg' or  file_type == 'jpeg':
			data = img.load_jpg_from_buffer(bytes)
		elif file_type == 'bmp':
			data = img.load_bmp_from_buffer(bytes)
		elif file_type == 'tga':
			data = img.load_tga_from_buffer(bytes)
		elif file_type == 'webp':
			data = img.load_webp_from_buffer(bytes)
		else:
			is_valid = false
			print('\nErro to load character image file. \nUse a valid image file format\n')
	
		var imgtex : ImageTexture = ImageTexture.create_from_image(img)
		tex_file.close()
		return [imgtex, is_valid]
	elif file_type == "gif":
		gif_builder.split_frames(path.replace("\\", "/"), file_name)
		return [null, false]
	else:
		is_valid = false
		print('\nErro to load character image file. \nUse a valid image file format\n')
		return [null, false]


func _on_Save_Button_button_up():
	var path = BASE_PATH + '/tokens/token.png'
	var save_panel = savepanel.instantiate()
	var centerc =  self.get_node('CenterContainer')
	var outline_color = Token_Ring.material.get_shader_parameter('outline_color')
	var inner_cicle_color = Token_Ring.material.get_shader_parameter('inner_cicle_color')
	var to_save_token = save_panel.get_node('VBoxContainer/HBoxContainer/CenterContainer/ViewportContainer2/SubViewport/CenterContainer/Token_TextureRect')
	to_save_token.material = Token.material
	to_save_token.material.set_shader_parameter('outline_color', outline_color)
	to_save_token.material.set_shader_parameter('inner_cicle_color', inner_cicle_color)
	centerc.visible = true
	centerc.add_child(save_panel)
	var dir_button = save_panel.get_node('VBoxContainer/HBoxContainer4/Dir_path')
	dir_button.connect("button_up", Callable(self, "_on_Dir_button_up"))
	dir_button.connect("button_up", Callable(self, "_on_Dir_path_button_up"))
	
	centerc.get_node("save_panel/VBoxContainer/HBoxContainer4/VBoxContainer/HBoxContainer/LineEdit").text = 'token'
	save_panel.get_node("VBoxContainer/HBoxContainer4/Save_PNG_Token_File_button").connect("button_up", Callable(self, "_on_Save_Token_File_button_up"))


func _on_Dir_button_up():
	_Open_Dir()


func _on_Save_Token_File_button_up():
	var file_type = self.get_node("CenterContainer").get_node("save_panel/VBoxContainer/HBoxContainer4/VBoxContainer/HBoxContainer2/Image_Type_Selector").text.substr(0,3)
	var file_name = self.get_node("CenterContainer").get_node("save_panel/VBoxContainer/HBoxContainer4/VBoxContainer/HBoxContainer/LineEdit").text
	if file_type != "GIF":
		var save_path
		if file_name.substr(file_name.length() - 4, -1) == '.png':
			pass
		else:
			file_name = file_name + '.png'
		save_path = BASE_PATH + '/tokens/%s' % file_name
		_Save_Token(file_name, file_type)
	else:
		_Save_Token(file_name, file_type)

	
