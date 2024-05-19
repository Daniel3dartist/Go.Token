extends Sprite2D

@onready var timer:= $"Timer"

# Called when the node enters the scene tree for the first time.
func _ready():
	timer.start(0.1)


func _on_timer_timeout():
	if self.frame < 3:
		self.frame+=1
	else:
		self.frame=0
