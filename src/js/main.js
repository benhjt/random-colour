/* eslint-disable no-bitwise */
import '../css/main.css';

function updateBackgroundColor(color) {
  document.querySelector('body').style.backgroundColor = color;
}

function convertHexToRGB(hexString) {
  let newHexStr = hexString;
  if (newHexStr.indexOf('#') === 0) {
    newHexStr = hexString.substring(1);
  }

  const hex = parseInt(newHexStr, 16);
  const r = hex >> 16;
  const g = (hex >> 8) & 0xff;
  const b = hex & 0xff;

  return [r, g, b];
}

function adjustTextColor(rgb) {
  const color = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
  const body = document.querySelector('body');
  if (color < 125) {
    body.classList.add('dark');
    body.classList.remove('light');
  } else {
    body.classList.add('light');
    body.classList.remove('dark');
  }
}

function getRandomColor() {
  const availableChars = '0123456789ABCDEF';
  let hexString = '#';
  for (let i = 0; i < 6; i += 1) {
    hexString += availableChars.charAt(Math.floor(Math.random() * 15) + 0);
  }

  return hexString;
}

function generateRandomColor() {
  const hexColor = getRandomColor();
  document.querySelector('.header').textContent = hexColor;
  updateBackgroundColor(hexColor);
  const rgb = convertHexToRGB(hexColor);
  document.querySelector('title').textContent = hexColor;
  adjustTextColor(rgb);
}

document.addEventListener('mousedown', generateRandomColor);
generateRandomColor();
