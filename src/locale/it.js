export default {
	'forward': {
		'keyword': 'AVANTI',
		'abbr': 'AV',
		'description': 'Muove la tartaruga in avanti del numero di passi specificato.',
		'example': 'AVANTI 100'
	},
	'backward': {
		'keyword': 'INDIETRO',
		'abbr': 'ID',
		'description': 'Muove la tartaruga all\'indietro del numero di passi specificato.',
		'example': 'INDIETRO 50'
	},
	'right': {
		'keyword': 'DESTRA',
		'abbr': 'DS',
		'description': 'Gira la tartaruga a destra dell\'angolo specificato in gradi.',
		'example': 'DESTRA 90'
	},
	'left': {
		'keyword': 'SINISTRA',
		'abbr': 'SN',
		'description': 'Gira la tartaruga a sinistra dell\'angolo specificato in gradi.',
		'example': 'SINISTRA 45'
	},
	'penUp': {
		'keyword': 'ALZAPENNA',
		'abbr': 'AP',
		'description': 'Solleva la penna dal foglio in modo che la tartaruga non disegni più una linea.',
		'example': 'ALZAPENNA'
	},
	'penDown': {
		'keyword': 'ABBASSAPENNA',
		'abbr': 'BP',
		'description': 'Abbassa la penna sul foglio in modo che la tartaruga disegni una linea.',
		'example': 'ABBASSAPENNA'
	},
	'clearScreen': {
		'keyword': 'PULISCISCHERMO',
		'abbr': 'PS',
		'description': 'Cancella lo schermo e riporta la tartaruga alla sua posizione di partenza.',
		'example': 'PULISCISCHERMO'
	},
	'home': {
		'keyword': 'ORIGINE',
		'description': 'Muove la tartaruga alla sua posizione di partenza e la punta nella direzione predefinita.',
		'example': 'ORIGINE'
	},
	'repeat': {
		'keyword': 'RIPETI',
		'description': 'Ripete un insieme di comandi un numero specificato di volte.',
		'example': 'RIPETI 4 [AVANTI 100 DESTRA 90]'
	},
	'setPenColor': {
		'keyword': 'IMPOSTACOLOREPENNA',
		'abbr': 'ICP',
		'description': 'Imposta il colore della penna sul valore specificato.',
		'example': 'IMPOSTACOLOREPENNA "rosso'
	},
	'setx': {
		'keyword': 'IMPOSTAX',
		'abbr': 'IX',
		'description': 'Imposta la coordinata x della tartaruga sul valore specificato.',
		'example': 'IMPOSTAX 100'
	},
	'sety': {
		'keyword': 'IMPOSTAY',
		'abbr': 'IY',
		'description': 'Imposta la coordinata y della tartaruga sul valore specificato.',
		'example': 'IMPOSTAY 100'
	},
	'goto': {
		'keyword': 'VAI A',
		'abbr': 'VA',
		'description': 'Muove la tartaruga alle coordinate x e y specificate.',
		'example': 'VAI A 100 100'
	},
	'setHeading': {
		'keyword': 'IMPOSTADIREZIONE',
		'abbr': 'ID',
		'description': 'Imposta la direzione della tartaruga sull\'angolo specificato in gradi.',
		'example': 'IMPOSTADIREZIONE 0'
	},
	'heading': {
		'keyword': 'DIREZIONE',
		'abbr': 'DI',
		'description': 'Ottiene la direzione attuale della tartaruga.',
		'example': 'DIREZIONE'
	},
	'xcor': {
		'keyword': 'COORDX',
		'abbr': 'CX',
		'description': 'Ottiene la coordinata x attuale della tartaruga.',
		'example': 'COORDX'
	},
	'ycor': {
		'keyword': 'COORDY',
		'abbr': 'CY',
		'description': 'Ottiene la coordinata y attuale della tartaruga.',
		'example': 'COORDY'
	},
	'penSize': {
		'keyword': 'DIMENSIONEPENNA',
		'abbr': 'DP',
		'description': 'Imposta la dimensione della penna sul valore specificato.',
		'example': 'DIMENSIONEPENNA 5'
	},
	'penShade': {
		'keyword': 'OMBRA',
		'abbr': 'OM',
		'description': 'Imposta l\'ombra della penna sul valore specificato.',
		'example': 'OMBRA 50'
	},
	'fillColor': {
		'keyword': 'COLOREPIENO',
		'abbr': 'CP',
		'description': 'Imposta il colore di riempimento sul valore specificato.',
		'example': 'COLOREPIENO "blu'
	},
	'random': {
		'keyword': 'CASUALE',
		'abbr': 'CA',
		'description': 'Ottiene un numero casuale tra 0 e il valore specificato.',
		'example': 'CASUALE 100'
	},
	'wait': {
		'keyword': 'ASPETTA',
		'abbr': 'AS',
		'description': 'Mette in pausa il programma per il numero di millisecondi specificato.',
		'example': 'ASPETTA 1000'
	}
};
