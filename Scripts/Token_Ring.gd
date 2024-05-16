extends TextureRect


# Called when the node enters the scene tree for the first time.
func _on_CheckButton_Outline_toggled(button_pressed):
	if button_pressed == true:
		self.material.set_shader_parameter('shadow_color' , Color('#303030'))
	else:
		self.material.set_shader_parameter('shadow_color' , Color('#00303030'))
