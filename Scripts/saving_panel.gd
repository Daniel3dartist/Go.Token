extends Panel


@onready var gif_builder = preload("res://Scripts/gif_builder.gd").new()
@onready var progress_bar = $VBoxContainer/HBoxContainer/VBoxContainer/ProgressBar
@onready var label = $VBoxContainer/HBoxContainer/VBoxContainer/Label

func _ready() -> void:
	var frames_count:int = len(gif_builder.get_image_sequence()[1])
	progress_bar.max_value = frames_count
	

func _on_exit_button_up():
	self.queue_free()

func _add_value():
	progress_bar.value+=1
	
func _clean_value():
	progress_bar.value=0
	
func _change_label(txt:String):
	label.text=txt
	
func _progress_text():
	while true:
		if progress_bar.value < progress_bar.max_value:
			if not '...' in label.text:
				label.text+='.'
			else:
				label.text=label.text.replace('...', '')
		await get_tree().create_timer(1.0).timeout
