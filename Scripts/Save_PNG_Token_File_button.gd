extends Button


var platform = OS.get_name()


func _ready():
	if platform == "Web":
		self.icon = load("res://Assets/download-image-icon-White.png")
		self.get_parent().get_node("Dir").visible = false
	else:
		self.icon = load("res://Assets/save-icon.png")
