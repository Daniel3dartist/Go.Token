extends TextureRect

func  _ready():
	self.material.set_shader_parameter('inner_cicle_color' , Vector3(32,55,150))

func _input(event):
	if Input.is_action_just_released("right"):
		self.material.set_shader_parameter('inner_cicle_color' , Color('#3295fa'))


func set_color(color_to_set:Color):
	self.material.set_shader_parameter('inner_cicle_color' , '#f10a0a')

# Called when the node enters the scene tree for the first time.
func _on_CheckButton_Outline_toggled(button_pressed):
	if button_pressed == true:
		self.material.set_shader_parameter('outline_color' , '#ffff')
	else:
		self.material.set_shader_parameter('outline_color' , Color('#00303030'))





func _on_RingSize_value_changed(value):
	self.material.set_shader_parameter('inner_cicle_color' , ((50 - value)/100))
	


func _on_color_picker_button_color_changed(color):
	set_color(color)
