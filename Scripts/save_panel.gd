extends Panel


func _on_exit_button_up():
	self.get_parent().visible = false
	self.queue_free()
