extends Button


var platform = OS.get_name()


func _ready():
	if platform == "HTML5":
		self.icon = load("res://Base_Image/download-image-icon-White.png")
		self.get_parent().get_node("Dir").visible = false
	else:
		self.icon = load("res://Base_Image/save-icon.png")

