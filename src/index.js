import "./style.scss";

const LAYOUT = [
	[
		['Backquote', 'ё', 'Ё', '`', '~'],
		['Digit1', '1', '!', '1', '!'],
		['Digit2', '2', '\'', '2', '@'],
		['Digit3', '3', '№', '3', '#'],
		['Digit4', '4', ';', '4', '$'],
		['Digit5', '5', '%', '5', '%'],
		['Digit6', '6', ':', '6', '^'],
		['Digit7', '7', '?', '7', '&'],
		['Digit8', '8', '*', '8', '*'],
		['Digit9', '9', '(', '9', '('],
		['Digit0', '0', ')', '0', ')'],
		['Minus', '-', '_', '-', '_'],
		['Equal', '=', '+', '=', '+'],
		['Backspace', 'Backspace', 'Backspace', 'Backspace', 'Backspace'],
	],
	[
		['Tab', 'Tab', 'Tab', 'Tab', 'Tab'],
		['KeyQ', 'й', 'Й', 'q', 'Q'],
		['KeyW', 'ц', 'Ц', 'w', 'W'],
		['KeyE', 'у', 'У', 'e', 'E'],
		['KeyR', 'к', 'К', 'r', 'R'],
		['KeyT', 'е', 'Е', 't', 'T'],
		['KeyY', 'н', 'Н', 'y', 'Y'],
		['KeyU', 'г', 'Г', 'u', 'U'],
		['KeyI', 'ш', 'Ш', 'i', 'I'],
		['KeyO', 'щ', 'Щ', 'o', 'O'],
		['KeyP', 'з', 'З', 'p', 'P'],
		['BracketLeft', 'х', 'Х', '[', '{'],
		['BracketRight', 'ъ', 'Ъ', ']', '}'],
		['Backslash', '\\', '/', '\\', '|'],
		['Delete', 'Del', 'Del', 'Del', 'Del'],
	],
	[
		['CapsLock', 'CapsLock', 'CapsLock', 'CapsLock', 'CapsLock', 'CapsLock'],
		['KeyA', 'ф', 'Ф', 'a', 'A'],
		['KeyS', 'ы', 'Ы', 's', 'S'],
		['KeyD', 'в', 'В', 'd', 'D'],
		['KeyF', 'а', 'А', 'f', 'F'],
		['KeyG', 'п', 'П', 'g', 'G'],
		['KeyH', 'р', 'Р', 'h', 'H'],
		['KeyJ', 'о', 'О', 'j', 'J'],
		['KeyK', 'л', 'Л', 'k', 'K'],
		['KeyL', 'д', 'Д', 'l', 'L'],
		['Semicolon', 'ж', 'Ж', ';', ':'],
		['Quote', 'э', 'Э', '\'', '\''],
		['Enter', 'Enter', 'Enter', 'Enter', 'Enter'],
	],
	[
		['ShiftLeft', 'Shift', 'Shift', 'Shift', 'Shift'],
		['KeyZ', 'я', 'Я', 'z', 'Z'],
		['KeyX', 'ч', 'Ч', 'x', 'X'],
		['KeyC', 'с', 'С', 'c', 'C'],
		['KeyV', 'м', 'М', 'v', 'V'],
		['KeyB', 'и', 'И', 'b', 'B'],
		['KeyN', 'т', 'Т', 'n', 'N'],
		['KeyM', 'ь', 'Ь', 'm', 'M'],
		['Comma', 'б', 'Б', '.', '<'],
		['Dot', 'ю', 'Ю', ',', '>'],
		['Slash', '.', ',', '/', '?'],
		['ArrowUp', '▲', '▲', '▲', '▲'],
		['ShiftRight', 'Shift', 'Shift', 'Shift', 'Shift'],
	],
	[
		['ControlLeft', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl'],
		['Win', 'Win', 'Win', 'Win', 'Win'],
		['AltLeft', 'Alt', 'Alt', 'Alt', 'Alt'],
		['Space', ' ', ' ', ' ', ' '],
		['AltRight', 'Alt', 'Alt', 'Alt', 'Alt'],
		['ArrowLeft', '◄', '◄', '◄', '◄'],
		['ArrowDown', '▼', '▼', '▼', '▼'],
		['ArrowRight', '►', '►', '►', '►'],
		['ControlRight', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl'],
	],
];

const container = document.createElement('div');
const textArea = document.createElement('textarea');
const keyboard = document.createElement('div');
const description = document.createElement('p');

container.className = 'container';
textArea.id = 'textArea';
keyboard.className = 'keyboard';
description.innerText = "Для переключения языка - CTRL + ALT. Клавиатура создана на OS Windows";

document.body.append(container);
container.append(textArea);
container.append(keyboard);
container.append(description);

for (let i = 0; i < LAYOUT.length; i++) {
	const row = document.createElement('div');
	row.className = 'row';
	for (let j = 0; j < LAYOUT[i].length; j++) {
		const key = document.createElement('div');
		key.className = 'key';
		key.classList.add(LAYOUT[i][j][0]);

		key.insertAdjacentHTML('afterBegin',
			`<div class='rus'>
            <span class='caseDown '>${LAYOUT[i][j][1]}</span>
            <span class='caseUp hidden'>${LAYOUT[i][j][2]}</span>
         </div>
         <div class='eng hidden'>
            <span class='caseDown hidden'>${LAYOUT[i][j][3]}</span>
            <span class='caseUp hidden'>${LAYOUT[i][j][4]}</span>
         </div>`);
		row.appendChild(key);
	}

	keyboard.appendChild(row);
}

let language = 'rus';
let capslock = false;


function addActive(elem) {
	elem.classList.add('active');
}
function removeActive(elem) {
	elem.classList.remove('active');
}

const changeLowerOrUpperCase = () => {
	const languageElem = keyboard.querySelectorAll(`div > .${language}`);
	for (let i = 0; i < languageElem.length; i++) {
		languageElem[i].querySelectorAll('span')[0].classList.toggle('hidden');
		languageElem[i].querySelectorAll('span')[1].classList.toggle('hidden');
	}
};
const changeLanguage = () => {
	const prevLanguage = keyboard.querySelectorAll(`div > .${language}`);
	for (let i = 0; i < prevLanguage.length; i++) {
		prevLanguage[i].classList.toggle('hidden');
		prevLanguage[i].querySelectorAll('span')[0].classList.toggle('hidden');
	}
	if (language === 'rus') {
		language = 'eng';
		localStorage.setItem('language', language);
	} else {
		language = 'rus';
		localStorage.setItem('language', language);
	}
	const nextLanguage = keyboard.querySelectorAll(`div > .${language}`);
	for (let i = 0; i < nextLanguage.length; i++) {
		nextLanguage[i].classList.toggle('hidden');
		nextLanguage[i].querySelectorAll('span')[0].classList.toggle('hidden');
	}
};

if (localStorage.language === 'eng') {
	changeLanguage();
}

keyboard.addEventListener('mousedown', (e) => {
	const element = e.target.closest('.key');
	switch (element.classList[1]) {
		case 'Win':
			e.preventDefault();
			addActive(element);
			break;
		case 'Tab':
			addActive(element);
			textArea.value += '\t';
			break;
		case 'Enter':
			addActive(element);
			textArea.value += '\n';
			break;
		case 'Delete':
			addActive(element);
			textArea.setRangeText('', textArea.selectionStart, textArea.selectionEnd + 1);
			break;
		case 'Backspace':
			addActive(element);
			if (textArea.selectionStart && textArea.selectionStart === textArea.selectionEnd) {
				textArea.setRangeText('', textArea.selectionStart - 1, textArea.selectionEnd);
			}
			else if (textArea.selectionStart !== textArea.selectionEnd) {
				textArea.setRangeText('', textArea.selectionStart, textArea.selectionEnd);
			}
			break;
		case 'CapsLock':
			addActive(element);
			if (capslock) {
				removeActive(element);
				capslock = false;
			} else {
				addActive(element);
				capslock = true;
			}
			changeLowerOrUpperCase();
			break;
		case 'ShiftLeft':
		case 'ShiftRight':
			e.preventDefault();
			addActive(element);
			changeLowerOrUpperCase();
			break;
		case 'ControlLeft':
		case 'ControlRight':
			addActive(element);
			break;
		case 'AltLeft':
		case 'AltRight':
			e.preventDefault();
			addActive(element);
			break;
		default:
			addActive(element);
			textArea.value += element.querySelectorAll(':not(.hidden)')[1].textContent;
			break;
	}
});

document.addEventListener('mouseup', (e) => {
	const element = e.target.closest('.key');
	switch (element.classList[1]) {
		case 'ShiftLeft':
		case 'ShiftRight':
			removeActive(element);
			changeLowerOrUpperCase();
			break;
		case 'Tab':
			removeActive(element);
			break;
		case 'CapsLock':
			if (capslock !== true) {
				removeActive(e.target.closest('.key'));
			} else {
				addActive(e.target.closest('.key'));
			}
			break;
		default:
			removeActive(element);
			break;
	}
});


document.addEventListener('keydown', (e) => {
	const element = keyboard.getElementsByClassName(e.code)[0];

	if (e.altKey && e.ctrlKey) {
		addActive(element);
		changeLanguage();
		return false;
	}
	switch (e.code) {
		case 'Win':
			addActive(element);
			break;
		case 'Tab':
			addActive(element);
			textArea.value += '\t';
			break;
		case 'Enter':
			addActive(element);
			textArea.value += '\n';
			break;
		case 'CapsLock':
			if (capslock) {
				removeActive(element);
				capslock = false;
			} else {
				addActive(element);
				capslock = true;
			}
			changeLowerOrUpperCase();
			break;
		case 'Backspace':
			textArea.value = textArea.value.slice(0, textArea.value.length - 1);
			addActive(element);
			break;
		case 'Delete':
			addActive(element);
			break;
		case 'AltLeft':
		case 'AltRight':
			e.preventDefault();
			addActive(element);
			break;
		case 'ControlLeft':
		case 'ControlRight':
			addActive(element);
			break;
		case 'ShiftLeft':
		case 'ShiftRight':
			addActive(element);
			changeLowerOrUpperCase();
			break;
		default:
			addActive(element);
			textArea.value += element.querySelectorAll(':not(.hidden)')[1].textContent;
			break;
	}
});
document.addEventListener('keyup', (e) => {
	const element = keyboard.getElementsByClassName(e.code)[0];
	removeActive(element);

	switch (e.code) {
		case 'ShiftLeft':
		case 'ShiftRight':
			removeActive(element);
			changeLowerOrUpperCase();
			break;
		case 'Tab':
			removeActive(element);
			break;
	}
});