extends Button

var platform = OS.get_name()


func _ready():
	if platform == "Web":
		self.get_parent().get_node("Dir").visible = false
		self.icon = load("res://Assets/download-install-line-icon-White.png")
	else:
		self.icon = load("res://Assets/save-icon.png")
