extends TextureRect


# Called when the node enters the scene tree for the first time.
func _on_CheckButton_Outline_toggled(button_pressed):
	if button_pressed == true:
		self.material.set_shader_parameter('outline_color' , Color('#303030'))
	else:
		self.material.set_shader_parameter('outline_color' , Color('#00303030'))


func _on_ColorPickerButton_color_changed(color):
	self.material.set_shader_parameter('inner_cicle_color' , color)


func _on_RingSize_value_changed(value):
	self.material.set_shader_parameter('inner_cicle_color' , ((50 - value)/100))
