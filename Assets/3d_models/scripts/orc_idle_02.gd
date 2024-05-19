extends Node3D

@onready var anim = $AnimationPlayer2
# Called when the node enters the scene tree for the first time.
func _ready():
	anim.play("Armature|mixamo_com|Layer0") # Replace with function body.


# Called every frame. 'delta' is the elapsed time since the previous frame.
func _process(delta):
	if anim.is_playing() == false:
		anim.play("Armature|mixamo_com|Layer0")
