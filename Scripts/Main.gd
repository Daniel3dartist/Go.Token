extends Control

var is_mouse_in : bool = false
onready var TexRect = $'Panel/HBoxContainer/Panel/Char_Image'
onready var Token = $'Panel/HBoxContainer/Panel2/VBoxContainer/HBoxContainer/CenterContainer/Token'
onready var _Panel = $'Panel/HBoxContainer/Panel'


func _ready():
	get_tree().connect('files_dropped', self, '_on_files_dropped')


func _on_files_dropped(files, screen):
	var vx = _Panel.get_global_position().x + _Panel.rect_size.x
	var vy = _Panel.get_global_position().y + _Panel.rect_size.y
	if get_global_mouse_position().x <= vx and get_global_mouse_position().x >= vx - _Panel.rect_size.x and get_global_mouse_position().y <= vy and get_global_mouse_position().x >= vy - _Panel.rect_size.y:
		var PATH = files[0]
		print(PATH)
		var image_name
		image_name = PATH.split('/')
		image_name = '/%s' % image_name[-1]
		print('\n\nImage_name\n\n', image_name, '\n\n')
		load_char_image(PATH)
	

func load_char_image(path):
	var valid_image = load_external_tex(path)
#	char_image = valid_image
	
#	$'ColorRect/SheetArea/Sheet_TabContainer/Background/HBoxContainer/CenterContainer/Label'.visible = false
	TexRect.texture = valid_image
#	TexRect.material.set_shader_param('tex_frg_7' , valid_image)
#	TexRect.material.set_shader_param('alpha', 1.000)
	Token.material.set_shader_param('tex_frg_2' , valid_image)
#	checkbox.pressed = true
#	_Update_Save()
#	print('\n\nChar_Image: ', char_image, '\n\n')
#	emit_signal('load_image_token', valid_image)


func load_external_tex(path):
	var tex_file = File.new()
	tex_file.open(path, File.READ)
	var bytes = tex_file.get_buffer(tex_file.get_len())
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
	
	var imgtex = ImageTexture.new()
	imgtex.create_from_image(img)
	tex_file.close()
	
	return imgtex

