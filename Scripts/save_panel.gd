extends Panel

var is_index = OS.get_executable_path()

func _ready():
	var dir_open = $'VBoxContainer/HBoxContainer2/Dir_path'
	if is_index == 'index':
		dir_open.visible = false
	else:
		dir_open.visible = true

func _on_exit_button_up():
	self.get_parent().visible = false
	self.queue_free()
