extends Panel

@onready var menu_button = $VBoxContainer/HBoxContainer4/VBoxContainer/HBoxContainer2/Image_Type_Selector

var platform = OS.get_name()
var is_block : bool = false
var dragging: bool = false
var off_set: Vector2

func _ready():
	var dir_open = $VBoxContainer/HBoxContainer4/Dir_path
	if platform == 'Web':
		dir_open.visible = false
	else:
		dir_open.visible = true


func _input(event):
	# Drag-and-drop sheet
	if event is InputEventMouseButton and event.button_index == MOUSE_BUTTON_LEFT:
		off_set = position - get_global_mouse_position()
		if is_block == false:
			print('Is mouse position\n')
#			set_default_cursor_shape(13)
			dragging = true
	if Input.is_action_just_released("left_mouse"):
		dragging = false

func _process(delta):
	var mouse = get_global_mouse_position()
	if dragging == true and get_viewport().get_mouse_position().y > 0.0:
		var view = get_viewport().get_mouse_position()
		position = view + off_set


func _on_exit_button_up():
	self.get_parent().visible = false
	self.queue_free()


func _on_ColorRect_mouse_entered():
	is_block = false


func _on_ColorRect_mouse_exited():
	is_block = true


func _on_save_png_token_file_button_button_up():
	pass
	#var spaw_point = $save_panel/VBoxContainer/HBoxContainer/CenterContainer/HiddenViewport_spaw
	
	#spaw_point.add_child(viewport)
