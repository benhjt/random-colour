'use strict';

class RandomColorGenerator {
	constructor() {
		this.generateRandomColor = this.generateRandomColor.bind(this);

		this.addEventListeners();
	}

	addEventListeners() {
		document.addEventListener('mousedown', this.generateRandomColor);
	}

	generateRandomColor() {
		var hexColor = this.getRandomColor();
		document.querySelector('.header').textContent = hexColor;
		this.updateBackgroundColor(hexColor);
		var rgb = this.convertHexToRGB(hexColor);
		this.adjustTextColor(rgb);
	}

	getRandomColor() {
		const availableChars = '0123456789ABCDEF';
		var hexString = '#';
		for (var i = 0; i < 6; i++) {
			hexString += availableChars.charAt(Math.floor(Math.random() * 15) + 0);
		}

		return hexString;
	}

	updateBackgroundColor(color) {
		document.querySelector('body').style.backgroundColor = color;
	}

	convertHexToRGB(hexString) {
		if (hexString.indexOf('#') === 0) {
			hexString = hexString.substring(1);
		}

		var hex = parseInt(hexString, 16);
		var r = hex >> 16;
		var g = hex >> 8 & 0xFF;
		var b = hex & 0xFF;

		return [r, g, b];
	}

	adjustTextColor(rgb) {
		var color = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
		var body = document.querySelector('body');
		if (color < 125) {
			body.classList.add('dark');
			body.classList.remove('light');
		} else {
			body.classList.add('light');
			body.classList.remove('dark');
		}
	}
}

window.addEventListener('load', () => new RandomColorGenerator());
