/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://rss-virtual-keyboard/./src/style.scss?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n\r\n\r\nconst LAYOUT = [\r\n\t[\r\n\t\t['Backquote', 'ё', 'Ё', '`', '~'],\r\n\t\t['Digit1', '1', '!', '1', '!'],\r\n\t\t['Digit2', '2', '\\'', '2', '@'],\r\n\t\t['Digit3', '3', '№', '3', '#'],\r\n\t\t['Digit4', '4', ';', '4', '$'],\r\n\t\t['Digit5', '5', '%', '5', '%'],\r\n\t\t['Digit6', '6', ':', '6', '^'],\r\n\t\t['Digit7', '7', '?', '7', '&'],\r\n\t\t['Digit8', '8', '*', '8', '*'],\r\n\t\t['Digit9', '9', '(', '9', '('],\r\n\t\t['Digit0', '0', ')', '0', ')'],\r\n\t\t['Minus', '-', '_', '-', '_'],\r\n\t\t['Equal', '=', '+', '=', '+'],\r\n\t\t['Backspace', 'Backspace', 'Backspace', 'Backspace', 'Backspace'],\r\n\t],\r\n\t[\r\n\t\t['Tab', 'Tab', 'Tab', 'Tab', 'Tab'],\r\n\t\t['KeyQ', 'й', 'Й', 'q', 'Q'],\r\n\t\t['KeyW', 'ц', 'Ц', 'w', 'W'],\r\n\t\t['KeyE', 'у', 'У', 'e', 'E'],\r\n\t\t['KeyR', 'к', 'К', 'r', 'R'],\r\n\t\t['KeyT', 'е', 'Е', 't', 'T'],\r\n\t\t['KeyY', 'н', 'Н', 'y', 'Y'],\r\n\t\t['KeyU', 'г', 'Г', 'u', 'U'],\r\n\t\t['KeyI', 'ш', 'Ш', 'i', 'I'],\r\n\t\t['KeyO', 'щ', 'Щ', 'o', 'O'],\r\n\t\t['KeyP', 'з', 'З', 'p', 'P'],\r\n\t\t['BracketLeft', 'х', 'Х', '[', '{'],\r\n\t\t['BracketRight', 'ъ', 'Ъ', ']', '}'],\r\n\t\t['Backslash', '\\\\', '/', '\\\\', '|'],\r\n\t\t['Delete', 'Del', 'Del', 'Del', 'Del'],\r\n\t],\r\n\t[\r\n\t\t['CapsLock', 'CapsLock', 'CapsLock', 'CapsLock', 'CapsLock', 'CapsLock'],\r\n\t\t['KeyA', 'ф', 'Ф', 'a', 'A'],\r\n\t\t['KeyS', 'ы', 'Ы', 's', 'S'],\r\n\t\t['KeyD', 'в', 'В', 'd', 'D'],\r\n\t\t['KeyF', 'а', 'А', 'f', 'F'],\r\n\t\t['KeyG', 'п', 'П', 'g', 'G'],\r\n\t\t['KeyH', 'р', 'Р', 'h', 'H'],\r\n\t\t['KeyJ', 'о', 'О', 'j', 'J'],\r\n\t\t['KeyK', 'л', 'Л', 'k', 'K'],\r\n\t\t['KeyL', 'д', 'Д', 'l', 'L'],\r\n\t\t['Semicolon', 'ж', 'Ж', ';', ':'],\r\n\t\t['Quote', 'э', 'Э', '\\'', '\\''],\r\n\t\t['Enter', 'Enter', 'Enter', 'Enter', 'Enter'],\r\n\t],\r\n\t[\r\n\t\t['ShiftLeft', 'Shift', 'Shift', 'Shift', 'Shift'],\r\n\t\t['KeyZ', 'я', 'Я', 'z', 'Z'],\r\n\t\t['KeyX', 'ч', 'Ч', 'x', 'X'],\r\n\t\t['KeyC', 'с', 'С', 'c', 'C'],\r\n\t\t['KeyV', 'м', 'М', 'v', 'V'],\r\n\t\t['KeyB', 'и', 'И', 'b', 'B'],\r\n\t\t['KeyN', 'т', 'Т', 'n', 'N'],\r\n\t\t['KeyM', 'ь', 'Ь', 'm', 'M'],\r\n\t\t['Comma', 'б', 'Б', '.', '<'],\r\n\t\t['Dot', 'ю', 'Ю', ',', '>'],\r\n\t\t['Slash', '.', ',', '/', '?'],\r\n\t\t['ArrowUp', '▲', '▲', '▲', '▲'],\r\n\t\t['ShiftRight', 'Shift', 'Shift', 'Shift', 'Shift'],\r\n\t],\r\n\t[\r\n\t\t['ControlLeft', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl'],\r\n\t\t['Win', 'Win', 'Win', 'Win', 'Win'],\r\n\t\t['AltLeft', 'Alt', 'Alt', 'Alt', 'Alt'],\r\n\t\t['Space', ' ', ' ', ' ', ' '],\r\n\t\t['AltRight', 'Alt', 'Alt', 'Alt', 'Alt'],\r\n\t\t['ArrowLeft', '◄', '◄', '◄', '◄'],\r\n\t\t['ArrowDown', '▼', '▼', '▼', '▼'],\r\n\t\t['ArrowRight', '►', '►', '►', '►'],\r\n\t\t['ControlRight', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl'],\r\n\t],\r\n];\r\n\r\nconst container = document.createElement('div');\r\nconst textArea = document.createElement('textarea');\r\nconst keyboard = document.createElement('div');\r\nconst description = document.createElement('p');\r\n\r\ncontainer.className = 'container';\r\ntextArea.id = 'textArea';\r\nkeyboard.className = 'keyboard';\r\ndescription.innerText = \"Для переключения языка - CTRL + ALT. Клавиатура создана на OS Windows\";\r\n\r\ndocument.body.append(container);\r\ncontainer.append(textArea);\r\ncontainer.append(keyboard);\r\ncontainer.append(description);\r\n\r\nfor (let i = 0; i < LAYOUT.length; i++) {\r\n\tconst row = document.createElement('div');\r\n\trow.className = 'row';\r\n\tfor (let j = 0; j < LAYOUT[i].length; j++) {\r\n\t\tconst key = document.createElement('div');\r\n\t\tkey.className = 'key';\r\n\t\tkey.classList.add(LAYOUT[i][j][0]);\r\n\r\n\t\tkey.insertAdjacentHTML('afterBegin',\r\n\t\t\t`<div class='rus'>\r\n            <span class='caseDown '>${LAYOUT[i][j][1]}</span>\r\n            <span class='caseUp hidden'>${LAYOUT[i][j][2]}</span>\r\n         </div>\r\n         <div class='eng hidden'>\r\n            <span class='caseDown hidden'>${LAYOUT[i][j][3]}</span>\r\n            <span class='caseUp hidden'>${LAYOUT[i][j][4]}</span>\r\n         </div>`);\r\n\t\trow.appendChild(key);\r\n\t}\r\n\r\n\tkeyboard.appendChild(row);\r\n}\r\n\r\nlet language = 'rus';\r\nlet capslock = false;\r\n\r\n\r\nfunction addActive(elem) {\r\n\telem.classList.add('active');\r\n}\r\nfunction removeActive(elem) {\r\n\telem.classList.remove('active');\r\n}\r\n\r\nconst changeLowerOrUpperCase = () => {\r\n\tconst languageElem = keyboard.querySelectorAll(`div > .${language}`);\r\n\tfor (let i = 0; i < languageElem.length; i++) {\r\n\t\tlanguageElem[i].querySelectorAll('span')[0].classList.toggle('hidden');\r\n\t\tlanguageElem[i].querySelectorAll('span')[1].classList.toggle('hidden');\r\n\t}\r\n};\r\nconst changeLanguage = () => {\r\n\tconst prevLanguage = keyboard.querySelectorAll(`div > .${language}`);\r\n\tfor (let i = 0; i < prevLanguage.length; i++) {\r\n\t\tprevLanguage[i].classList.toggle('hidden');\r\n\t\tprevLanguage[i].querySelectorAll('span')[0].classList.toggle('hidden');\r\n\t}\r\n\tif (language === 'rus') {\r\n\t\tlanguage = 'eng';\r\n\t\tlocalStorage.setItem('language', language);\r\n\t} else {\r\n\t\tlanguage = 'rus';\r\n\t\tlocalStorage.setItem('language', language);\r\n\t}\r\n\tconst nextLanguage = keyboard.querySelectorAll(`div > .${language}`);\r\n\tfor (let i = 0; i < nextLanguage.length; i++) {\r\n\t\tnextLanguage[i].classList.toggle('hidden');\r\n\t\tnextLanguage[i].querySelectorAll('span')[0].classList.toggle('hidden');\r\n\t}\r\n};\r\n\r\nif (localStorage.language === 'eng') {\r\n\tchangeLanguage();\r\n}\r\n\r\nkeyboard.addEventListener('mousedown', (e) => {\r\n\tconst element = e.target.closest('.key');\r\n\tswitch (element.classList[1]) {\r\n\t\tcase 'Win':\r\n\t\t\te.preventDefault();\r\n\t\t\taddActive(element);\r\n\t\t\tbreak;\r\n\t\tcase 'Tab':\r\n\t\t\taddActive(element);\r\n\t\t\ttextArea.value += '  ';\r\n\t\t\tbreak;\r\n\t\tcase 'Enter':\r\n\t\t\taddActive(element);\r\n\t\t\ttextArea.value += '\\n';\r\n\t\t\tbreak;\r\n\t\tcase 'Delete':\r\n\t\t\taddActive(element);\r\n\t\t\ttextArea.setRangeText('', textArea.selectionStart, textArea.selectionEnd + 1);\r\n\t\t\tbreak;\r\n\t\tcase 'Backspace':\r\n\t\t\taddActive(element);\r\n\t\t\tif (textArea.selectionStart && textArea.selectionStart === textArea.selectionEnd) {\r\n\t\t\t\ttextArea.setRangeText('', textArea.selectionStart - 1, textArea.selectionEnd);\r\n\t\t\t}\r\n\t\t\telse if (textArea.selectionStart !== textArea.selectionEnd) {\r\n\t\t\t\ttextArea.setRangeText('', textArea.selectionStart, textArea.selectionEnd);\r\n\t\t\t}\r\n\t\t\tbreak;\r\n\t\tcase 'CapsLock':\r\n\t\t\taddActive(element);\r\n\t\t\tif (capslock) {\r\n\t\t\t\tremoveActive(element);\r\n\t\t\t\tcapslock = false;\r\n\t\t\t} else {\r\n\t\t\t\taddActive(element);\r\n\t\t\t\tcapslock = true;\r\n\t\t\t}\r\n\t\t\tchangeLowerOrUpperCase();\r\n\t\t\tbreak;\r\n\t\tcase 'ShiftLeft':\r\n\t\tcase 'ShiftRight':\r\n\t\t\te.preventDefault();\r\n\t\t\taddActive(element);\r\n\t\t\tchangeLowerOrUpperCase();\r\n\t\t\tbreak;\r\n\t\tcase 'ControlLeft':\r\n\t\tcase 'ControlRight':\r\n\t\t\taddActive(element);\r\n\t\t\tbreak;\r\n\t\tcase 'AltLeft':\r\n\t\tcase 'AltRight':\r\n\t\t\te.preventDefault();\r\n\t\t\taddActive(element);\r\n\t\t\tbreak;\r\n\t\tdefault:\r\n\t\t\taddActive(element);\r\n\t\t\ttextArea.value += element.querySelectorAll(':not(.hidden)')[1].textContent;\r\n\t\t\tbreak;\r\n\t}\r\n});\r\n\r\ndocument.addEventListener('mouseup', (e) => {\r\n\tconst element = e.target.closest('.key');\r\n\tswitch (element.classList[1]) {\r\n\t\tcase 'ShiftLeft':\r\n\t\tcase 'ShiftRight':\r\n\t\t\tremoveActive(element);\r\n\t\t\tchangeLowerOrUpperCase();\r\n\t\t\tbreak;\r\n\t\tcase 'CapsLock':\r\n\t\t\tif (capslock !== true) {\r\n\t\t\t\tremoveActive(e.target.closest('.key'));\r\n\t\t\t} else {\r\n\t\t\t\taddActive(e.target.closest('.key'));\r\n\t\t\t}\r\n\t\t\tbreak;\r\n\t\tdefault:\r\n\t\t\tremoveActive(element);\r\n\t\t\tbreak;\r\n\t}\r\n});\r\n\r\n\r\ndocument.addEventListener('keydown', (e) => {\r\n\tconst element = keyboard.getElementsByClassName(e.code)[0];\r\n\r\n\tif (e.altKey && e.ctrlKey) {\r\n\t\taddActive(element);\r\n\t\tchangeLanguage();\r\n\t\treturn false;\r\n\t}\r\n\tswitch (e.code) {\r\n\t\tcase 'Win':\r\n\t\t\taddActive(element);\r\n\t\t\tbreak;\r\n\t\tcase 'Tab':\r\n\t\t\taddActive(element);\r\n\t\t\ttextArea.value += '    ';\r\n\t\t\tbreak;\r\n\t\tcase 'Enter':\r\n\t\t\taddActive(element);\r\n\t\t\ttextArea.value += '\\n';\r\n\t\t\tbreak;\r\n\t\tcase 'CapsLock':\r\n\t\t\tif (capslock) {\r\n\t\t\t\tremoveActive(element);\r\n\t\t\t\tcapslock = false;\r\n\t\t\t} else {\r\n\t\t\t\taddActive(element);\r\n\t\t\t\tcapslock = true;\r\n\t\t\t}\r\n\t\t\tchangeLowerOrUpperCase();\r\n\t\t\tbreak;\r\n\t\tcase 'Backspace':\r\n\t\t\ttextArea.value = textArea.value.slice(0, textArea.value.length - 1);\r\n\t\t\taddActive(element);\r\n\t\t\tbreak;\r\n\t\tcase 'Delete':\r\n\t\t\taddActive(element);\r\n\t\t\tbreak;\r\n\t\tcase 'AltLeft':\r\n\t\tcase 'AltRight':\r\n\t\t\te.preventDefault();\r\n\t\t\taddActive(element);\r\n\t\t\tbreak;\r\n\t\tcase 'ControlLeft':\r\n\t\tcase 'ControlRight':\r\n\t\t\taddActive(element);\r\n\t\t\tbreak;\r\n\t\tcase 'ShiftLeft':\r\n\t\tcase 'ShiftRight':\r\n\t\t\taddActive(element);\r\n\t\t\tchangeLowerOrUpperCase();\r\n\t\t\tbreak;\r\n\t\tdefault:\r\n\t\t\taddActive(element);\r\n\t\t\ttextArea.value += element.querySelectorAll(':not(.hidden)')[1].textContent;\r\n\t\t\tbreak;\r\n\t}\r\n});\r\ndocument.addEventListener('keyup', (e) => {\r\n\tconst element = keyboard.getElementsByClassName(e.code)[0];\r\n\tremoveActive(element);\r\n\r\n\tswitch (e.code) {\r\n\t\tcase 'ShiftLeft':\r\n\t\tcase 'ShiftRight':\r\n\t\t\tremoveActive(element);\r\n\t\t\tchangeLowerOrUpperCase();\r\n\t\t\tbreak;\r\n\t}\r\n});\n\n//# sourceURL=webpack://rss-virtual-keyboard/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;