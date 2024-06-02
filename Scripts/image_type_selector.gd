extends MenuButton


# Called when the node enters the scene tree for the first time.
func _ready():
	add_text(self.get_popup().get_item_text(0))
	self.get_popup().connect("index_pressed", Callable(self, "_on_popup_menu_index_pressed"))

func add_text(txt):
	var n = 41
	if "GIF" in txt:
		n+=4
	self.text = txt + " ".repeat(n) + "\\/"

func _on_popup_menu_index_pressed(index):
	add_text(self.get_popup().get_item_text(index))
