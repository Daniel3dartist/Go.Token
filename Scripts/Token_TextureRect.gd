extends TextureRect

onready var check_box = self.get_parent().get_parent().get_parent().get_parent().get_node("CheckBox")


func _ready():
	var base_color = Color('#596b6f')
	self.get_parent().get_parent().get_parent().get_parent().get_parent().get_parent().get_node("VBoxContainer3/VBoxContainer/CenterContainer/ColorPickerButton").color = base_color
	self.material.set_shader_param('outline_color' , base_color)


func _on_X_Scale_Input_HSlider_value_changed(value):
	var y_scale = self.get_parent().get_parent().get_parent().get_parent().get_node("Y_Position_Input/Y_Position_Input_VSlider")
	#self.get_parent().get_parent().get_node("HBoxContainer2/Y_Scale_Input/Y_Scale_Input_VSlider")
	
	self.material.set_shader_param('uvs_x' , value)
	if check_box.pressed == true:
		self.material.set_shader_param('uvs_y' , value)
		y_scale.value = value


func _on_Y_Scale_Input_VSlider_value_changed(value):
	var x_scale = self.get_parent().get_parent().get_parent().get_parent().get_parent().get_node("X_Scale_Input/X_Scale_Input_HSlider")
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
