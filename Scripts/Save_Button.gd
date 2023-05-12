extends Button


var platform = OS.get_name()


func _ready():
	if platform == "HTML5":
		self.get_parent().get_node("Dir").visible = false
		self.icon = load("res://Base_Image/download-install-line-icon-White.png")
	else:
		self.icon = load("res://Base_Image/save-icon.png")
