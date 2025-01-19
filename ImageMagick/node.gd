extends Node


var _my_js_callback = JavaScriptBridge.create_callback(myCallback) # This reference must be kept
var console = JavaScriptBridge.get_interface("console")
var window = JavaScriptBridge.get_interface("window")

func _init():
	
	var buf = JavaScriptBridge.create_object("ArrayBuffer", 10) # new ArrayBuffer(10)
	print('ID: ', buf) # prints [JavaScriptObject:OBJECT_ID]
	var uint8arr = JavaScriptBridge.create_object("Uint8Array", buf) # new Uint8Array(buf)
	uint8arr[1] = 255
	prints("PRINTS: ",uint8arr[1], uint8arr.byteLength, uint8arr) # prints 255 10
	var s=String(uint8arr)
	console.log('LOG: ', uint8arr) # prints in browser console "Uint8Array(10) [ 0, 255, 0, 0, 0, 0, 0, 0, 0, 0 ]"
	prints('S: ',s)
	var view_int = uint8arr
	window.my_tre = 13
	prints('VIEW_INT: ',window.view_int)
	# Equivalent of JavaScriptBridge: Array.from(uint8arr).forEach(myCallback)
	JavaScriptBridge.get_interface("Array").from(uint8arr).forEach(_my_js_callback)

func myCallback(args):
	# Will be called with the parameters passed to the "forEach" callback
	# [0, 0, [JavaScriptObject:1173]]
	# [255, 1, [JavaScriptObject:1173]]
	# ...
	# [0, 9, [JavaScriptObject:1180]]
	prints(args)
	
func _ready() -> void:
	JavaScriptBridge.eval("console.log('The version: ', Magick.imageMagickVersion)")
	JavaScriptBridge.eval("""window.my_int = 13""", true)
	JavaScriptBridge.eval("""
		function teste(arr){
			console.log('TESTE(): ',arr);
		};
		teste([5,6,7])
		//window.teste = teste;
	""", true)
	var alist = [1,2,3,4]
	var buff = JavaScriptBridge.create_object("ArrayBuffer", 4)
	var _array = JavaScriptBridge.create_object('Array', buff)
	for i in range(0, len(alist)):
		_array[i]=alist[i]
	prints(_array)
	var arr = JavaScriptBridge.get_interface("Array").from(_array)
	window.teste(_array)
	window.my_array = _array
