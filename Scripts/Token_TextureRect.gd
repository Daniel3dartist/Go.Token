extends TextureRect

onready var check_box = self.get_parent().get_parent().get_node("CheckBox")
onready var color_picker = self.get_parent().get_parent().get_parent().get_parent().get_node("VBoxContainer3/VBoxContainer/CenterContainer/ColorPickerButton")

func _ready():
	var base_color = Color('#596b6f')
	color_picker.color = base_color
	self.material.set_shader_param('outline_color' , base_color)
	self.material.set_shader_param('inner_circle' , 0.45)
	self.material.set_shader_param('shadow_color' ,Color('#00303030'))

func _on_X_Scale_Input_HSlider_value_changed(value):
	var y_scale = self.get_parent().get_parent().get_node("Y_Scale_Input/Y_Scale_Input_VSlider")
	
	self.material.set_shader_param('uvs_x' , value)
	if check_box.pressed == true:
		self.material.set_shader_param('uvs_y' , value)
		y_scale.value = value


func _on_Y_Scale_Input_VSlider_value_changed(value):
	var x_scale = self.get_parent().get_parent().get_parent().get_node("X_Scale_Input/X_Scale_Input_HSlider")
	self.material.set_shader_param('uvs_y' , value)

	if check_box.pressed == true:
		self.material.set_shader_param('uvs_x' , value)
		x_scale.value = value


func _on_Y_Position_Input_VSlider_value_changed(value):
	self.material.set_shader_param('uvm_y' , value)


func _on_X_Position_Input_HSlider_value_changed(value):
	print(value)
	self.material.set_shader_param('uvm_x' , value)


func _on_ColorPickerButton_color_changed(color):
	self.material.set_shader_param('outline_color' , color)


func _on_RingSize_value_changed(value):
	self.material.set_shader_param('inner_circle' , ((50 - value)/100))


#func _on_ShadowSize_value_changed(value):
#	pass # Replace with function body.


func _on_CheckButton_Outline_toggled(button_pressed):
	if button_pressed == true:
		self.material.set_shader_param('shadow_color' , Color('#303030'))
	else:
		self.material.set_shader_param('shadow_color' , Color('#00303030'))
