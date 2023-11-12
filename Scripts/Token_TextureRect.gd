extends TextureRect

@onready var check_box = self.get_parent().get_parent().get_node("CheckBox")
@onready var color_picker = self.get_parent().get_parent().get_parent().get_parent().get_node("VBoxContainer3/VBoxContainer/CenterContainer/ColorPickerButton")
@onready var main_root = $"../../../../../../../../../.."

@onready var x_scale = self.get_parent().get_parent().get_parent().get_node("X_Scale_Input/X_Scale_Input_HSlider")
@onready var y_scale = self.get_parent().get_parent().get_node("Y_Scale_Input/Y_Scale_Input_VSlider")
var x_scale_preview: float = 1.0
var y_scale_preview: float = 1.0
var slider_block

func _ready():
	main_root.connect("img_sz", Callable(self, "on_img_sz"))
	var base_color = Color('#596b6f')
	color_picker.color = base_color
	self.material.set_shader_parameter('outline_color' , base_color)
	self.material.set_shader_parameter('inner_circle' , 0.45)
	self.material.set_shader_parameter('shadow_color' ,Color('#00303030'))


func on_img_sz(_size):
	var x = _size[0]
	var y = _size[1]
	print('Size: : : ',_size)
	if x != y:
		x_scale.value = 1.0
		y_scale.value = 1.0
		check_box.button_pressed = false
		if x > y:
			print('x')
			x_scale.value = calc_scale(x)
			self.material.set_shader_parameter('uvs_x' , x_scale.value)
		else:
			print('Y')
			y_scale.value = calc_scale(y)
			self.material.set_shader_parameter('uvs_y' , y_scale.value)

func calc_scale(n):
	var value = (n/500)*0.1
	print('Value: ', value)
	print('Snapper: ', snappedf(1.0-value, 0.1))
	value =  1.0-value
	if value < 1.95:
		print('value 1.0')
		value = 1.0
	else:
		value = snappedf(value, 0.1)
	return value

func set_scale_diference(preview: float, new: float, vec_slider) -> float:
	var difference = (preview - new) * -1
	print('Difference: ' ,difference)
	vec_slider.value += difference
	return vec_slider.value

func _on_X_Scale_Input_HSlider_value_changed(value):
	print('X_Scale: ', value)
	if check_box.button_pressed == true and slider_block != x_scale.name:
		y_scale_preview = set_scale_diference(x_scale_preview, value, y_scale)
	
	self.material.set_shader_parameter('uvs_x' , value)
	x_scale_preview = value


func _on_Y_Scale_Input_VSlider_value_changed(value):
	print('Y_Scale: ', value)
	if check_box.button_pressed == true and slider_block != y_scale.name:
		x_scale_preview = set_scale_diference(y_scale_preview, value, x_scale)

	self.material.set_shader_parameter('uvs_y' , value)
	y_scale_preview = value


func _on_Y_Position_Input_VSlider_value_changed(value):
	self.material.set_shader_parameter('uvm_y' , value)


func _on_X_Position_Input_HSlider_value_changed(value):
	print(value)
	self.material.set_shader_parameter('uvm_x' , value)


func _on_ColorPickerButton_color_changed(color):
	self.material.set_shader_parameter('outline_color' , color)


func _on_RingSize_value_changed(value):
	self.material.set_shader_parameter('inner_circle' , ((50 - value)/100))


#func _on_ShadowSize_value_changed(value):
#	pass # Replace with function body.


func _on_CheckButton_Outline_toggled(button_pressed):
	if button_pressed == true:
		self.material.set_shader_parameter('shadow_color' , Color('#303030'))
	else:
		self.material.set_shader_parameter('shadow_color' , Color('#00303030'))


func _on_y_scale_input_v_slider_gui_input(event):
	slider_block = x_scale.name


func _on_x_scale_input_h_slider_gui_input(event):
	slider_block = y_scale.name
