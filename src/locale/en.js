export default {
	'forward': {
		'keyword': 'FORWARD',
		'abbr': 'FD',
		'description': 'Move the turtle forward by the specified number of steps.',
		'example': 'FORWARD 100'
	},
	'backward': {
		'keyword': 'BACK',
		'abbr': 'BK',
		'description': 'Move the turtle backward by the specified number of steps.',
		'example': 'BACK 50'
	},
	'right': {
		'keyword': 'RIGHT',
		'abbr': 'RT',
		'description': 'Turn the turtle to the right by the specified angle in degrees.',
		'example': 'RIGHT 90'
	},
	'left': {
		'keyword': 'LEFT',
		'abbr': 'LT',
		'description': 'Turn the turtle to the left by the specified angle in degrees.',
		'example': 'LEFT 45'
	},
	'penUp': {
		'keyword': 'PENUP',
		'abbr': 'PU',
		'description': 'Lift the pen from the paper so that the turtle no longer draws a line.',
		'example': 'PENUP'
	},
	'penDown': {
		'keyword': 'PENDOWN',
		'abbr': 'PD',
		'description': 'Lower the pen to the paper so that the turtle draws a line.',
		'example': 'PENDOWN'
	},
	'clearScreen': {
		'keyword': 'CLEARSCREEN',
		'abbr': 'CS',
		'description': 'Clear the screen and return the turtle to its starting position.',
		'example': 'CLEARSCREEN'
	},
	'home': {
		'keyword': 'HOME',
		'description': 'Move the turtle to its starting position and point it in the default direction.',
		'example': 'HOME'
	},
	'repeat': {
		'keyword': 'REPEAT',
		'description': 'Repeat a set of commands a specified number of times.',
		'example': 'REPEAT 4 [FORWARD 100 RIGHT 90]'
	},
	'setPenColor': {
		'keyword': 'SETPENCOLOR',
		'abbr': 'SETPC',
		'description': 'Set the color of the pen to the specified value.',
		'example': 'SETPENCOLOR "red'
	},
	'setPenSize': {
		'keyword': 'SETPENSIZE',
		'abbr': 'SETPS',
		'description': 'Set the size of the pen to the specified value.',
		'example': 'SETPENSIZE 5'
	},
	'setPenShade': {
		'keyword': 'SETPENSHADE',
		'abbr': 'SETPSH',
		'description': 'Set the shade of the pen to the specified value.',
		'example': 'SETPENSHADE 50'
	},
	'fill': {
		'keyword': 'FILL',
		'abbr': 'FL',
		'description': 'Fill the area enclosed by the lines drawn by the turtle.',
		'example': 'FILL'
	},
	'endFill': {
		'keyword': 'ENDFILL',
		'abbr': 'EF',
		'description': 'End the fill operation.',
		'example': 'ENDFILL'
	},
	'circle': {
		'keyword': 'CIRCLE',
		'abbr': 'CIR',
		'description': 'Draw a circle with the specified radius.',
		'example': 'CIRCLE 50'
	},
	'arc': {
		'keyword': 'ARC',
		'abbr': 'AR',
		'description': 'Draw an arc with the specified radius and angle.',
		'example': 'ARC 50 90'
	},
	'penSize': {
		'keyword': 'PENSIZE',
		'abbr': 'PS',
		'description': 'Set the size of the pen to the specified value.',
		'example': 'PENSIZE 5'
	},
	'penShade': {
		'keyword': 'PENSHADE',
		'abbr': 'PSH',
		'description': 'Set the shade of the pen to the specified value.',
		'example': 'PENSHADE 50'
	},
	'fillColor': {
		'keyword': 'FILLCOLOR',
		'abbr': 'FC',
		'description': 'Set the fill color to the specified value.',
		'example': 'FILLCOLOR "blue'
	},
	'setx': {
		'keyword': 'SETX',
		'abbr': 'SX',
		'description': 'Set the x-coordinate of the turtle to the specified value.',
		'example': 'SETX 100'
	},
	'sety': {
		'keyword': 'SETY',
		'abbr': 'SY',
		'description': 'Set the y-coordinate of the turtle to the specified value.',
		'example': 'SETY 100'
	},
	'goto': {
		'keyword': 'GOTO',
		'abbr': 'GT',
		'description': 'Move the turtle to the specified x and y coordinates.',
		'example': 'GOTO 100 100'
	},
	'setHeading': {
		'keyword': 'SETHEADING',
		'abbr': 'SH',
		'description': 'Set the heading of the turtle to the specified angle in degrees.',
		'example': 'SETHEADING 0'
	},
	'heading': {
		'keyword': 'HEADING',
		'abbr': 'HD',
		'description': 'Get the current heading of the turtle.',
		'example': 'HEADING'
	},
	'xcor': {
		'keyword': 'XCOR',
		'abbr': 'XC',
		'description': 'Get the current x-coordinate of the turtle.',
		'example': 'XCOR'
	},
	'ycor': {
		'keyword': 'YCOR',
		'abbr': 'YC',
		'description': 'Get the current y-coordinate of the turtle.',
		'example': 'YCOR'
	},
	'penSize': {
		'keyword': 'PENSIZE',
		'abbr': 'PS',
		'description': 'Get the size of the pen.',
		'example': 'PENSIZE'
	},
	'penShade': {
		'keyword': 'PENSHADE',
		'abbr': 'PSH',
		'description': 'Get the shade of the pen.',
		'example': 'PENSHADE'
	},
	'penColor': {
		'keyword': 'PENCOLOR',
		'abbr': 'PC',
		'description': 'Get the color of the pen.',
		'example': 'PENCOLOR'
	},
	'fillColor': {
		'keyword': 'FILLCOLOR',
		'abbr': 'FC',
		'description': 'Get the fill color.',
		'example': 'FILLCOLOR'
	},
	'random': {
		'keyword': 'RANDOM',
		'abbr': 'RD',
		'description': 'Get a random number between 0 and the specified value.',
		'example': 'RANDOM 100'
	},
	'wait': {
		'keyword': 'WAIT',
		'abbr': 'WT',
		'description': 'Pause the program for the specified number of milliseconds.',
		'example': 'WAIT 1000'
	}
};
