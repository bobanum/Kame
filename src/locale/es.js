export default {
	'forward': {
		'keyword': 'ADELANTE',
		'abbr': 'AD',
		'description': 'Mueve la tortuga hacia adelante por el número de pasos especificado.',
		'example': 'ADELANTE 100'
	},
	'backward': {
		'keyword': 'ATRÁS',
		'abbr': 'AT',
		'description': 'Mueve la tortuga hacia atrás por el número de pasos especificado.',
		'example': 'ATRÁS 50'
	},
	'right': {
		'keyword': 'DERECHA',
		'abbr': 'DE',
		'description': 'Gira la tortuga a la derecha por el ángulo especificado en grados.',
		'example': 'DERECHA 90'
	},
	'left': {
		'keyword': 'IZQUIERDA',
		'abbr': 'IZ',
		'description': 'Gira la tortuga a la izquierda por el ángulo especificado en grados.',
		'example': 'IZQUIERDA 45'
	},
	'penUp': {
		'keyword': 'SUBIRLÁPIZ',
		'abbr': 'SL',
		'description': 'Levanta el lápiz del papel para que la tortuga no dibuje una línea.',
		'example': 'SUBIRLÁPIZ'
	},
	'penDown': {
		'keyword': 'BAJARLÁPIZ',
		'abbr': 'BL',
		'description': 'Baja el lápiz al papel para que la tortuga dibuje una línea.',
		'example': 'BAJARLÁPIZ'
	},
	'clearScreen': {
		'keyword': 'BORRARPANTALLA',
		'abbr': 'BP',
		'description': 'Borra la pantalla y devuelve la tortuga a su posición de inicio.',
		'example': 'BORRARPANTALLA'
	},
	'home': {
		'keyword': 'INICIO',
		'description': 'Mueve la tortuga a su posición de inicio y la apunta en la dirección predeterminada.',
		'example': 'INICIO'
	},
	'repeat': {
		'keyword': 'REPETIR',
		'description': 'Repite un conjunto de comandos un número especificado de veces.',
		'example': 'REPETIR 4 [ADELANTE 100 DERECHA 90]'
	},
	'setPenColor': {
		'keyword': 'ESTABLECERCOLORLÁPIZ',
		'abbr': 'ECL',
		'description': 'Establece el color del lápiz en el valor especificado.',
		'example': 'ESTABLECERCOLORLÁPIZ "rojo'
	},
		'setx': {
		'keyword': 'ESTABLECERX',
		'abbr': 'EX',
		'description': 'Establece la coordenada x de la tortuga en el valor especificado.',
		'example': 'ESTABLECERX 100'
	},
	'sety': {
		'keyword': 'ESTABLECERY',
		'abbr': 'EY',
		'description': 'Establece la coordenada y de la tortuga en el valor especificado.',
		'example': 'ESTABLECERY 100'
	},
	'goto': {
		'keyword': 'IR A',
		'abbr': 'IA',
		'description': 'Mueve la tortuga a las coordenadas x y y especificadas.',
		'example': 'IR A 100 100'
	},
	'setHeading': {
		'keyword': 'ESTABLECERRUMBO',
		'abbr': 'ER',
		'description': 'Establece el rumbo de la tortuga en el ángulo especificado en grados.',
		'example': 'ESTABLECERRUMBO 0'
	},
	'heading': {
		'keyword': 'RUMBO',
		'abbr': 'R',
		'description': 'Obtiene el rumbo actual de la tortuga.',
		'example': 'RUMBO'
	},
	'xcor': {
		'keyword': 'COORDX',
		'abbr': 'CX',
		'description': 'Obtiene la coordenada x actual de la tortuga.',
		'example': 'COORDX'
	},
	'ycor': {
		'keyword': 'COORDY',
		'abbr': 'CY',
		'description': 'Obtiene la coordenada y actual de la tortuga.',
		'example': 'COORDY'
	},
	'penSize': {
		'keyword': 'TAMAÑOLÁPIZ',
		'abbr': 'TL',
		'description': 'Establece el tamaño del lápiz en el valor especificado.',
		'example': 'TAMAÑOLÁPIZ 5'
	},
	'penShade': {
		'keyword': 'TONOLÁPIZ',
		'abbr': 'TN',
		'description': 'Establece el tono del lápiz en el valor especificado.',
		'example': 'TONOLÁPIZ 50'
	},
	'fillColor': {
		'keyword': 'COLORRELLENO',
		'abbr': 'CR',
		'description': 'Establece el color de relleno en el valor especificado.',
		'example': 'COLORRELLENO "azul'
	},
	'random': {
		'keyword': 'ALEATORIO',
		'abbr': 'AL',
		'description': 'Obtiene un número aleatorio entre 0 y el valor especificado.',
		'example': 'ALEATORIO 100'
	},
	'wait': {
		'keyword': 'ESPERA',
		'abbr': 'ES',
		'description': 'Pausa el programa durante el número de milisegundos especificado.',
		'example': 'ESPERA 1000'
	}
};