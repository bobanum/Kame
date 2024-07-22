export default {
	'forward': {
		'keyword': 'VORWÄRTS',
		'abbr': 'VW',
		'description': 'Bewegt die Schildkröte um die angegebene Anzahl von Schritten vorwärts.',
		'example': 'VORWÄRTS 100'
	},
	'backward': {
		'keyword': 'RÜCKWÄRTS',
		'abbr': 'RW',
		'description': 'Bewegt die Schildkröte um die angegebene Anzahl von Schritten rückwärts.',
		'example': 'RÜCKWÄRTS 50'
	},
	'right': {
		'keyword': 'RECHTS',
		'abbr': 'RE',
		'description': 'Dreht die Schildkröte um den angegebenen Winkel nach rechts.',
		'example': 'RECHTS 90'
	},
	'left': {
		'keyword': 'LINKS',
		'abbr': 'LI',
		'description': 'Dreht die Schildkröte um den angegebenen Winkel nach links.',
		'example': 'LINKS 45'
	},
	'penUp': {
		'keyword': 'STIFT HOCH',
		'abbr': 'SH',
		'description': 'Hebt den Stift vom Papier ab, sodass die Schildkröte keine Linie mehr zeichnet.',
		'example': 'STIFT HOCH'
	},
	'penDown': {
		'keyword': 'STIFT RUNTER',
		'abbr': 'SR',
		'description': 'Senkt den Stift auf das Papier, sodass die Schildkröte eine Linie zeichnet.',
		'example': 'STIFT RUNTER'
	},
	'clearScreen': {
		'keyword': 'BILDSCHIRM LEEREN',
		'abbr': 'BL',
		'description': 'Leert den Bildschirm und bringt die Schildkröte in ihre Ausgangsposition zurück.',
		'example': 'BILDSCHIRM LEEREN'
	},
	'home': {
		'keyword': 'HEIM',
		'description': 'Bewegt die Schildkröte in ihre Ausgangsposition und richtet sie in die Standardrichtung aus.',
		'example': 'HEIM'
	},
	'repeat': {
		'keyword': 'WIEDERHOLE',
		'description': 'Wiederholt eine Gruppe von Befehlen eine angegebene Anzahl von Malen.',
		'example': 'WIEDERHOLE 4 [VORWÄRTS 100 RECHTS 90]'
	},
	'setPenColor': {
		'keyword': 'STIFTFARBE SETZEN',
		'abbr': 'SFS',
		'description': 'Setzt die Farbe des Stifts auf den angegebenen Wert.',
		'example': 'STIFTFARBE SETZEN "rot'
	},
	'setPenSize': {
		'keyword': 'STIFTGRÖSSE SETZEN',
		'abbr': 'SGS',
		'description': 'Setzt die Größe des Stifts auf den angegebenen Wert.',
		'example': 'STIFTGRÖSSE SETZEN 5'
	},
	'setPenShade': {
		'keyword': 'STIFTSCHATTIERUNG SETZEN',
		'abbr': 'SSS',
		'description': 'Setzt die Schattierung des Stifts auf den angegebenen Wert.',
		'example': 'STIFTSCHATTIERUNG SETZEN 50'
	},
	'fill': {
		'keyword': 'FÜLLEN',
		'abbr': 'FL',
		'description': 'Füllt den Bereich, der von den von der Schildkröte gezeichneten Linien eingeschlossen wird.',
		'example': 'FÜLLEN'
	},
	'endFill': {
		'keyword': 'FÜLLUNG BEENDEN',
		'abbr': 'FB',
		'description': 'Beendet den Füllvorgang.',
		'example': 'FÜLLUNG BEENDEN'
	},
	'circle': {
		'keyword': 'KREIS',
		'abbr': 'KR',
		'description': 'Zeichnet einen Kreis mit dem angegebenen Radius.',
		'example': 'KREIS 50'
	},
	'arc': {
		'keyword': 'BOGEN',
		'abbr': 'BO',
		'description': 'Zeichnet einen Bogen mit dem angegebenen Radius und Winkel.',
		'example': 'BOGEN 50 90'
	},
	'penSize': {
		'keyword': 'STIFTGRÖSSE',
		'abbr': 'SG',
		'description': 'Setzt die Größe des Stifts auf den angegebenen Wert.',
		'example': 'STIFTGRÖSSE 5'
	},
	'penShade': {
		'keyword': 'STIFTSCHATTIERUNG',
		'abbr': 'SS',
		'description': 'Setzt die Schattierung des Stifts auf den angegebenen Wert.',
		'example': 'STIFTSCHATTIERUNG 50'
	},
	'fillColor': {
		'keyword': 'FARBE FÜLLEN',
		'abbr': 'FF',
		'description': 'Setzt die Füllfarbe auf den angegebenen Wert.',
		'example': 'FARBE FÜLLEN "blau'
	},
	'setx': {
		'keyword': 'X SETZEN',
		'abbr': 'XS',
		'description': 'Setzt den x-Koordinate der Schildkröte auf den angegebenen Wert.',
		'example': 'X SETZEN 100'
	},
	'sety': {
		'keyword': 'Y SETZEN',
		'abbr': 'YS',
		'description': 'Setzt den y-Koordinate der Schildkröte auf den angegebenen Wert.',
		'example': 'Y SETZEN 100'
	},
	'goto': {
		'keyword': 'GEHE ZU',
		'abbr': 'GZ',
		'description': 'Bewegt die Schildkröte zu den angegebenen x- und y-Koordinaten.',
		'example': 'GEHE ZU 100 100'
	},
	'setHeading': {
		'keyword': 'RICHTUNG SETZEN',
		'abbr': 'RS',
		'description': 'Setzt die Richtung der Schildkröte auf den angegebenen Winkel in Grad.',
		'example': 'RICHTUNG SETZEN 0'
	},
	'heading': {
		'keyword': 'RICHTUNG',
		'abbr': 'RG',
		'description': 'Gibt die aktuelle Richtung der Schildkröte aus.',
		'example': 'RICHTUNG'
	},
	'xcor': {
		'keyword': 'XKORDINATE',
		'abbr': 'XK',
		'description': 'Gibt die aktuelle x-Koordinate der Schildkröte aus.',
		'example': 'XKORDINATE'
	},
	'ycor': {
		'keyword': 'YKORDINATE',
		'abbr': 'YK',
		'description': 'Gibt die aktuelle y-Koordinate der Schildkröte aus.',
		'example': 'YKORDINATE'
	},
	'penSize': {
		'keyword': 'STIFTGRÖSSE',
		'abbr': 'SG',
		'description': 'Gibt die Größe des Stifts aus.',
		'example': 'STIFTGRÖSSE'
	},
	'penShade': {
		'keyword': 'STIFTSCHATTIERUNG',
		'abbr': 'SS',
		'description': 'Gibt die Schattierung des Stifts aus.',
		'example': 'STIFTSCHATTIERUNG'
	},
	'penColor': {
		'keyword': 'STIFTFARBE',
		'abbr': 'SF',
		'description': 'Gibt die Farbe des Stifts aus.',
		'example': 'STIFTFARBE'
	},
	'fillColor': {
		'keyword': 'FARBE FÜLLEN',
		'abbr': 'FF',
		'description': 'Gibt die Füllfarbe aus.',
		'example': 'FARBE FÜLLEN'
	},
	'random': {
		'keyword': 'ZUFALLSZAHL',
		'abbr': 'ZZ',
		'description': 'Gibt eine Zufallszahl zwischen 0 und dem angegebenen Wert aus.',
		'example': 'ZUFALLSZAHL 100'
	},
	'wait': {
		'keyword': 'WARTEN',
		'abbr': 'WT',
		'description': 'Pausiert das Programm für die angegebene Anzahl von Millisekunden.',
		'example': 'WARTEN 1000'
	}
};
