/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/modulos/animacao-maquina-escrever.js":
/*!*************************************************!*\
  !*** ./js/modulos/animacao-maquina-escrever.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return initAnimeMaquinaEscrever; });\n// animaçao maquina de escrever\r\nfunction initAnimeMaquinaEscrever() {\r\n  function typeWriter(elemento) {\r\n    const textoArray = elemento.innerHTML.split('');\r\n    elemento.innerHTML = '';\r\n    textoArray.forEach((letra, i) => {\r\n      setTimeout(() => {\r\n        elemento.innerHTML += letra;\r\n      }, 80 * i);\r\n    });\r\n  }\r\n  const titulo = document.querySelector('h1');\r\n  typeWriter(titulo);\r\n}\r\n\n\n//# sourceURL=webpack:///./js/modulos/animacao-maquina-escrever.js?");

/***/ }),

/***/ "./js/modulos/animacao-scroll-suave.js":
/*!*********************************************!*\
  !*** ./js/modulos/animacao-scroll-suave.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return initScrollSuave; });\n/*Scroll suave */\r\nfunction initScrollSuave() {\r\n  const menuItems = document.querySelectorAll('.menu a[href^=\"#\"]');\r\n\r\n  menuItems.forEach((item) => {\r\n    item.addEventListener('click', scrollToIdOnClick);\r\n  });\r\n\r\n  function getScrollTopByHref(element) {\r\n    const id = element.getAttribute('href');\r\n    return document.querySelector(id).offsetTop;\r\n  }\r\n\r\n  function scrollToIdOnClick(event) {\r\n    event.preventDefault();\r\n    const to = getScrollTopByHref(event.target) - 80;\r\n    scrollToPosition(to);\r\n  }\r\n\r\n  function scrollToPosition(to) {\r\n    // window.scroll({\r\n    //   top: to,\r\n    //   behavior: \"smooth\",\r\n    // });\r\n    smoothScrollTo(0, to);\r\n  }\r\n\r\n  /**\r\n   * Smooth scroll animation\r\n   * @param {int} endX: destination x coordinate\r\n   * @param {int} endY: destination y coordinate\r\n   * @param {int} duration: animation duration in ms\r\n   */\r\n  function smoothScrollTo(endX, endY, duration) {\r\n    const startX = window.scrollX || window.pageXOffset;\r\n    const startY = window.scrollY || window.pageYOffset;\r\n    const distanceX = endX - startX;\r\n    const distanceY = endY - startY;\r\n    const startTime = new Date().getTime();\r\n\r\n    duration = typeof duration !== 'undefined' ? duration : 1200;\r\n\r\n    // Easing function\r\n    const easeInOutQuart = (time, from, distance, duration) => {\r\n      if ((time /= duration / 2) < 1)\r\n        return (distance / 2) * time * time * time * time + from;\r\n      return (-distance / 2) * ((time -= 2) * time * time * time - 2) + from;\r\n    };\r\n\r\n    const timer = setInterval(() => {\r\n      const time = new Date().getTime() - startTime;\r\n      const newX = easeInOutQuart(time, startX, distanceX, duration);\r\n      const newY = easeInOutQuart(time, startY, distanceY, duration);\r\n      if (time >= duration) {\r\n        clearInterval(timer);\r\n      }\r\n      window.scroll(newX, newY);\r\n    }, 1000 / 60); // 60 fps\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./js/modulos/animacao-scroll-suave.js?");

/***/ }),

/***/ "./js/modulos/animacao-scroll.js":
/*!***************************************!*\
  !*** ./js/modulos/animacao-scroll.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return initScroll; });\nfunction initScroll() {\r\n  const alvo = document.querySelectorAll('[data-anime]');\r\n  const animacaoClass = 'animated';\r\n\r\n  function animeScroll() {\r\n    const windowTop = window.pageYOffset + (window.innerHeight * 2) / 3;\r\n    alvo.forEach(function (elemento) {\r\n      if (windowTop > elemento.offsetTop) {\r\n        elemento.classList.add(animacaoClass);\r\n      } else {\r\n        elemento.classList.remove(animacaoClass);\r\n      }\r\n    });\r\n  }\r\n  animeScroll();\r\n  window.addEventListener('scroll', function () {\r\n    animeScroll();\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack:///./js/modulos/animacao-scroll.js?");

/***/ }),

/***/ "./js/modulos/dropdown-menu.js":
/*!*************************************!*\
  !*** ./js/modulos/dropdown-menu.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return initDropdownMenu; });\n/* harmony import */ var _outsideClick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideClick.js */ \"./js/modulos/outsideClick.js\");\n\n\nfunction initDropdownMenu() {\n  const dropdownMenus = document.querySelectorAll('[data-dropdown]');\n  dropdownMenus.forEach((menu) => {\n    ['touchstart', 'click'].forEach((userEvent) => {\n      menu.addEventListener(userEvent, handleClick);\n    });\n  });\n\n  function handleClick(event) {\n    event.preventDefault();\n    this.classList.add('active');\n    Object(_outsideClick_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, ['touchstart', 'click'], () => {\n      this.classList.remove('active');\n    });\n  }\n}\n\n\n//# sourceURL=webpack:///./js/modulos/dropdown-menu.js?");

/***/ }),

/***/ "./js/modulos/funcionamento.js":
/*!*************************************!*\
  !*** ./js/modulos/funcionamento.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return initFuncionamento; });\nfunction initFuncionamento() {\r\n  const funcionamento = document.querySelector('[data-semana]');\r\n  const diasSemana = funcionamento.dataset.semana.split(',').map(Number);\r\n  const horarioSemana = funcionamento.dataset.horario.split(',').map(Number);\r\n\r\n  const dataAgora = new Date();\r\n  const diaAgora = dataAgora.getDay();\r\n  const horarioAgora = dataAgora.getHours();\r\n  const semanaAberto = diasSemana.indexOf(diaAgora) !== -1;\r\n\r\n  const horarioAberto =\r\n    horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1];\r\n\r\n  if (semanaAberto && horarioAberto) {\r\n    funcionamento.classList.add('aberto');\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./js/modulos/funcionamento.js?");

/***/ }),

/***/ "./js/modulos/menu-mobile.js":
/*!***********************************!*\
  !*** ./js/modulos/menu-mobile.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return initMenuMobile; });\n/* harmony import */ var _outsideClick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideClick.js */ \"./js/modulos/outsideClick.js\");\n\n\nfunction initMenuMobile() {\n  const menuButton = document.querySelector('[data-menu=\"button\"]');\n  const menuList = document.querySelector('[data-menu=\"list\"]');\n  const eventos = ['click', 'touchstart'];\n\n  function openMenu(event) {\n    menuList.classList.add('active');\n    menuButton.classList.add('active');\n    Object(_outsideClick_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(menuList, eventos, () => {\n      menuList.classList.remove('active');\n      menuButton.classList.remove('active');\n    });\n  }\n  eventos.forEach((evento) => {\n    menuButton.addEventListener('click', openMenu);\n  });\n}\nconst menuButton = document.querySelector('[data-menu=\"button\"]');\nconst menuList = document.querySelector('[data-menu=\"list\"]');\nconst eventos = ['click', 'touchstart'];\n\nif (menuButton) {\n  function openMenu(event) {\n    menuList.classList.add('active');\n    menuButton.classList.add('active');\n    Object(_outsideClick_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(menuList, eventos, () => {\n      menuList.classList.remove('active');\n      menuButton.classList.remove('active');\n    });\n  }\n  eventos.forEach((evento) => menuButton.addEventListener(evento, openMenu));\n}\n\n\n//# sourceURL=webpack:///./js/modulos/menu-mobile.js?");

/***/ }),

/***/ "./js/modulos/modal.js":
/*!*****************************!*\
  !*** ./js/modulos/modal.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return initModal; });\nfunction initModal() {\r\n  const botaoAbrir = document.querySelector('[data-modal=\"abrir\"]');\r\n  const botaoFechar = document.querySelector('[data-modal=\"fechar\"]');\r\n  const containerModal = document.querySelector('[data-modal=\"container\"]');\r\n\r\n  if (botaoAbrir && botaoFechar && containerModal) {\r\n    function toggleModal(event) {\r\n      event.preventDefault();\r\n      containerModal.classList.toggle('ativo');\r\n    }\r\n    function cliqueForaModal(event) {\r\n      if (event.target === this) {\r\n        toggleModal(event);\r\n      }\r\n    }\r\n\r\n    botaoAbrir.addEventListener('click', toggleModal);\r\n    botaoFechar.addEventListener('click', toggleModal);\r\n    containerModal.addEventListener('click', cliqueForaModal);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./js/modulos/modal.js?");

/***/ }),

/***/ "./js/modulos/outsideClick.js":
/*!************************************!*\
  !*** ./js/modulos/outsideClick.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return initOutsideClick; });\nfunction initOutsideClick(element, events, callback) {\n  const html = document.documentElement;\n  const outside = 'data-outside';\n\n  if (!element.hasAttribute(outside)) {\n    events.forEach((userEvent) => {\n      setTimeout(() => {\n        html.addEventListener(userEvent, handleOutsideClick);\n      });\n    });\n    element.setAttribute(outside, '');\n  }\n  function handleOutsideClick(event) {\n    if (!element.contains(event.target)) {\n      element.removeAttribute(outside);\n      events.forEach((userEvent) => {\n        html.removeEventListener(userEvent, handleOutsideClick);\n      });\n      callback();\n    }\n  }\n}\n\n\n//# sourceURL=webpack:///./js/modulos/outsideClick.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modulos_animacao_maquina_escrever_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modulos/animacao-maquina-escrever.js */ \"./js/modulos/animacao-maquina-escrever.js\");\n/* harmony import */ var _modulos_animacao_scroll_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modulos/animacao-scroll.js */ \"./js/modulos/animacao-scroll.js\");\n/* harmony import */ var _modulos_animacao_scroll_suave_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modulos/animacao-scroll-suave.js */ \"./js/modulos/animacao-scroll-suave.js\");\n/* harmony import */ var _modulos_modal_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modulos/modal.js */ \"./js/modulos/modal.js\");\n/* harmony import */ var _modulos_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modulos/dropdown-menu.js */ \"./js/modulos/dropdown-menu.js\");\n/* harmony import */ var _modulos_menu_mobile_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modulos/menu-mobile.js */ \"./js/modulos/menu-mobile.js\");\n/* harmony import */ var _modulos_funcionamento_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modulos/funcionamento.js */ \"./js/modulos/funcionamento.js\");\n\n\n\n\n\n\n\n\nObject(_modulos_animacao_maquina_escrever_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\nObject(_modulos_animacao_scroll_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\nObject(_modulos_animacao_scroll_suave_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\nObject(_modulos_modal_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\nObject(_modulos_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\nObject(_modulos_menu_mobile_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\nObject(_modulos_funcionamento_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n\n\n//# sourceURL=webpack:///./js/script.js?");

/***/ })

/******/ });