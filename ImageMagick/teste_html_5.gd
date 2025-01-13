extends Control

#@onready var js_bridge = JavaScriptBridge

var img_path = "C:/Users/danie/Downloads"

func _ready():
	download_file()
	"""
	if !js_bridge.is_active():
		print("JavaScriptBridge não está ativo. Execute isso no HTML5.")
		return
	"""
	
	# Define a função para conversão e download
	JavaScriptBridge.eval("""
		// Define uma função global para processar a imagem
		window.convertJPGToPNG = async function(imageUrl) {
			// Importa a biblioteca wasm-imagemagick
			const Magick = await import('https://knicknic.github.io/wasm-imagemagick/magickApi.js');

			// Busca a imagem JPG
			const response = await fetch(imageUrl);
			const sourceBytes = new Uint8Array(await response.arrayBuffer());

			// Verifica se o arquivo é um JPG antes de converter
			if (imageUrl.endsWith('.jpg') || imageUrl.endsWith('.jpeg')) {
				// Converte para PNG usando ImageMagick
				const processedFiles = await Magick.Call(
					[{ 'name': 'srcFile.jpg', 'content': sourceBytes }],
					["convert", "srcFile.jpg", "out.png"]
				);

				if (processedFiles && processedFiles.length > 0) {
					const outputFile = processedFiles[0];

					// Cria um Blob para fazer o download
					const blob = new Blob([outputFile.content], { type: 'image/png' });
					const objectURL = URL.createObjectURL(blob);

					// Cria um link para download
					const link = document.createElement('a');
					link.href = objectURL;
					link.download = 'converted_image.png';
					link.click();

					console.log("Imagem convertida e pronta para download.");
				} else {
					console.error("Falha na conversão da imagem.");
				}
			} else {
				console.log("O arquivo fornecido não é um JPG. Nenhuma ação foi realizada.");
			}
		};
	""")
	print("Função de conversão adicionada ao ambiente JavaScript.")
	# Chama a função com a URL da imagem
	convert_image(img_path)

# Função para invocar a conversão
func convert_image(image_url: String):
	JavaScriptBridge.eval("convertJPGToPNG('%s');" % image_url)
	
func download_file():
	var file = FileAccess.open(img_path, FileAccess.READ)
	var buff=file.get_buffer(file.get_length())
	var img = Image.new()
	img.load_jpg_from_buffer(buff)
	JavaScriptBridge.download_buffer(img.save_jpg_to_buffer(), 'meu_arquivo.jpg')
