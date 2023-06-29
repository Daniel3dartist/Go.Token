extends Control


var BASE_PATH = OS.get_executable_path().get_base_dir() #'user://'
var platform = OS.get_name()
#var is_mouse_in : bool = false

var app_name = 'org.godotengine.gotoken'

@onready var TexRect = $'Panel/HBoxContainer/Panel/CenterContainer/Char_Image'
@onready var Token = $'Panel/HBoxContainer/Panel2/CenterContainer/Token/HBoxContainer/VBoxContainer/HBoxContainer2/CenterContainer/Token_TextureRect'
@onready var _Panel = $'Panel/HBoxContainer/Panel'

@onready var savepanel = preload("res://Scenes/save_panel.tscn")

#tmp_js_export
func _ready():
	if platform == 'Android':
		BASE_PATH = 'Pictures'
	$'Label'.text = 'Base: %s\nSecond: %s' % [BASE_PATH, platform]
	var dir_open = $'ColorRect/HBoxContainer/Dir'	
	get_tree().get_root().connect("files_dropped", Callable(self, "_on_files_dropped"))
	init()





func init():
	var dir : DirAccess = DirAccess.open(BASE_PATH)
	if dir.dir_exists(BASE_PATH + '/tokens') == false:
		dir.make_dir(BASE_PATH + '/tokens')


func _on_files_dropped(files):
	var vx = _Panel.get_global_position().x + _Panel.size.x
	var vy = _Panel.get_global_position().y + _Panel.size.y
	if get_global_mouse_position().x <= vx and get_global_mouse_position().x >= vx - _Panel.size.x and get_global_mouse_position().y <= vy and get_global_mouse_position().x >= vy - _Panel.size.y:
		print("Mouse is here!\n")
		var PATH = files[0]
		print("\nPATH: %s\n" % PATH.replace("\\", "/"))
		var image_name
		image_name = PATH.split('\\')
		image_name = '/%s' % image_name[-1]
		print('\n\nImage_name\n\n', image_name, '\n\n')
		load_char_image(PATH)
	

func load_char_image(path):
	var valid_image = load_external_tex(path)
	var tex = Texture2D.new()
	
	tex = valid_image 
	TexRect.texture = tex
	TexRect.material = null
	$Panel/HBoxContainer/Panel/CenterContainer/Label.visible = false
	Token.material.set_shader_parameter('tex_frg_2' , valid_image)


func _Save_Token(save_path):
	$Label.text = platform
	var viewport = $'CenterContainer/save_panel/VBoxContainer/HBoxContainer/CenterContainer/ViewportContainer2/SubViewport'
	var img = viewport.get_viewport().get_texture().get_image()
#	img.flip_y()
	var path = BASE_PATH + '/tokens/'
	print(path + save_path)
	img.save_png(str(path + save_path))
	if platform == 'HTML5':
		var buf = img.save_png_to_buffer()
		JavaScriptBridge.download_buffer(buf, save_path)
	
	elif platform == 'Android':
#		var mobile_path = 'sdcard/Android/data/%s/files/%s' % [app_name, 'tokens']
		var mobile_path = '%s/tokens' % BASE_PATH
		var dir : DirAccess
#		if dir.dir_exists(mobile_path) == false:
#			$Label.text = 'false dir'
#			dir.make_dir(mobile_path)
		img.save_png(str(BASE_PATH + '/%s' % save_path))
		OS.shell_open(mobile_path)
	else:
		img.save_png(str(path + save_path))


func _Open_Dir():
	OS.shell_open(BASE_PATH + '/tokens')


func load_external_tex(path):
	var tex_file : FileAccess = FileAccess.open(path, FileAccess.READ)
	var bytes = tex_file.get_buffer(tex_file.get_length())
	var img = Image.new()
	var data 
	var file_type = path.split('.')
	var is_valid: bool = true
	
	if file_type[-1] == 'png':
		data = img.load_png_from_buffer(bytes)
	elif file_type[-1] == 'jpg' or  file_type[-1] == 'jpeg':
		data = img.load_jpg_from_buffer(bytes)
	elif file_type[-1] == 'bmp':
		data = img.load_bmp_from_buffer(bytes)
	elif file_type[-1] == 'tga':
		data = img.load_tga_from_buffer(bytes)
	elif file_type[-1] == 'webp':
		data = img.load_webp_from_buffer(bytes)
	else:
		is_valid = false
		print('\nErro to load character image file. \nUse a valid image file format\n')
	
	var imgtex : ImageTexture = ImageTexture.create_from_image(img)
	tex_file.close()
	return imgtex


func _on_Save_Button_button_up():
	var path = BASE_PATH + '/tokens/token.png'
	var save_panel = savepanel.instantiate()
	save_panel.get_node('VBoxContainer/HBoxContainer/CenterContainer/ViewportContainer2/SubViewport/CenterContainer/Token_TextureRect').material = Token.material
	self.get_node("CenterContainer").visible = true
	self.get_node("CenterContainer").add_child(save_panel)
	self.get_node("CenterContainer").get_node("save_panel/VBoxContainer/HBoxContainer2/LineEdit").text = 'token'
	save_panel.get_node("VBoxContainer/HBoxContainer2/Save_PNG_Token_File_button").connect("button_up", Callable(self, "_on_Save_PNG_Token_File_button_up"))
	save_panel.get_node("VBoxContainer/HBoxContainer2/Dir_path").connect("button_up", Callable(self, "_on_Dir_path_button_up"))
	#_Save_Token()


func _on_Dir_button_up():
	_Open_Dir()


func _on_Save_PNG_Token_File_button_up():
	var file_name = self.get_node("CenterContainer").get_node("save_panel/VBoxContainer/HBoxContainer2/LineEdit").text
	var save_path
	if file_name.substr(file_name.length() - 4, -1) == '.png':
		pass
	else:
		file_name = file_name + '.png'
	save_path = BASE_PATH + '/tokens/%s' % file_name
	_Save_Token(file_name)


func _on_Dir_path_button_up():
	_Open_Dir()



