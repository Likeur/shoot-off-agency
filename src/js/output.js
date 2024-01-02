/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/input.js":
/*!*************************!*\
  !*** ./src/js/input.js ***!
  \*************************/
/***/ (() => {

eval("\r\n// Mouse follower\r\n\r\nconst btnMenu = document.querySelector('#menubtn')\r\nconst barUn = document.querySelector('#bar-1')\r\nconst barDeux = document.querySelector('#bar-2')\r\nconst menu = document.querySelector('#menu')\r\n\r\nbtnMenu.addEventListener('click', () => {\r\n    menu.classList.toggle('scale-0')\r\n    barUn.classList.toggle('rotate-45')\r\n    barUn.classList.toggle('absolute')\r\n    barDeux.classList.toggle('mt-2')\r\n    barDeux.classList.toggle('-rotate-45')\r\n})\r\n\n\n//# sourceURL=webpack://shoot-off-website/./src/js/input.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/input.js"]();
/******/ 	
/******/ })()
;