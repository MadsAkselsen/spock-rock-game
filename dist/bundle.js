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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css?family=Lato&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"html {\\n  box-sizing: border-box;\\n}\\n\\nbody {\\n  margin: 0;\\n  min-height: 100vh;\\n  background: whitesmoke;\\n  font-family: Lato, sans-serif;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\n.game-container {\\n  width: 530px;\\n  height: 600px;\\n  background: white;\\n  border-radius: 5px;\\n  box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.5);\\n}\\n\\n.header {\\n  background: dodgerblue;\\n  border-top-left-radius: 5px;\\n  border-top-right-radius: 5px;\\n  height: 100px;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\nh1 {\\n  color: white;\\n  font-size: 30px;\\n}\\n\\n.player-container {\\n  margin: 50px;\\n}\\n\\nh2 {\\n  margin-bottom: 20px;\\n}\\n\\n.far {\\n  font-size: 50px;\\n  margin-right: 40px;\\n  user-select: none;\\n}\\n\\n#player .far,\\n#player .choice {\\n  color: dodgerblue;\\n  cursor: pointer;\\n}\\n\\n#player .far:hover {\\n  transform: scale(1.1);\\n}\\n\\n#player .far:active {\\n  transform: scale(0.9);\\n}\\n\\n#computer .far,\\n#computer .choice {\\n  color: rgb(216, 27, 90);\\n}\\n\\n#player .far:last-of-type,\\n#computer .far:last-of-type {\\n  margin-right: 0;\\n}\\n\\n.selected {\\n  color: black !important;\\n}\\n\\n.reset-icon {\\n  font-size: 30px;\\n  cursor: pointer;\\n  margin-left: 50px;\\n}\\n.reset-icon:hover {\\n  transform: scale(1.1);\\n}\\n.reset-icon:active {\\n  transform: scale(0.9);\\n}\\n\\n.result-container {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\n.result-text {\\n  font-size: 40px;\\n  margin: unset;\\n  margin-top: 20px;\\n}\\n\\n/* Media Query: Large Smartphone (Vertical) */\\n@media screen and (max-width: 600px) {\\n  .game-container {\\n    width: 95%;\\n    height: 580px;\\n  }\\n\\n  h1 {\\n    font-size: 24px;\\n  }\\n\\n  .player-container {\\n    margin: 50px 0 25px 25px;\\n  }\\n\\n  .far {\\n    margin-right: 20px;\\n  }\\n\\n  .reset-icon {\\n    margin-top: 25px;\\n    margin-left: 25px;\\n  }\\n}\\n\\n/* Media Query: iPhone (Vertical) */\\n@media screen and (max-width: 376px) {\\n  .game-container {\\n    height: 550px;\\n  }\\n\\n  h1 {\\n    font-size: 22px;\\n  }\\n\\n  .player-container {\\n    margin: 43px 0 25px 20px;\\n  }\\n\\n  .far {\\n    font-size: 43px;\\n  }\\n\\n  .reset-icon {\\n    margin-top: 15px;\\n  }\\n\\n  .result-container {\\n    margin: 0 20px;\\n  }\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://spock-rock-game/./src/index.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://spock-rock-game/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./src/index.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://spock-rock-game/./src/index.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://spock-rock-game/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/domElements/agentElements.js":
/*!******************************************!*\
  !*** ./src/domElements/agentElements.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"agentElements\": () => /* binding */ agentElements\n/* harmony export */ });\nconst agentElements = {\n  player: {\n    icons: {\n      rock: document.getElementById('playerRock'),\n      paper: document.getElementById('playerPaper'),\n      scissors: document.getElementById('playerScissors'),\n      lizard: document.getElementById('playerLizard'),\n      spock: document.getElementById('playerSpock'),\n    },\n    choiceEl: document.getElementById('playerChoice'),\n    playerScoreEl: document.getElementById('playerScore'),\n  },\n  computer: {\n    icons: {\n      rock: document.getElementById('computerRock'),\n      paper: document.getElementById('computerPaper'),\n      scissors: document.getElementById('computerScissors'),\n      lizard: document.getElementById('computerLizard'),\n      spock: document.getElementById('computerSpock'),\n    },\n    choiceEl: document.getElementById('computerChoice'),\n    computerScoreEl: document.getElementById('computerScore'),\n  },\n};\n\n\n//# sourceURL=webpack://spock-rock-game/./src/domElements/agentElements.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _domElements_agentElements_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domElements/agentElements.js */ \"./src/domElements/agentElements.js\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ \"./src/index.css\");\n\r\n\r\nconst resultText = document.getElementById('resultText');\r\nconst resetEl = document.getElementById('reset');\r\n\r\nconst allGameIcons = document.querySelectorAll('.far');\r\nconst playerContainer = document.querySelectorAll('.player');\r\n\r\nconst choices = {\r\n  rock: { name: 'Rock', defeats: ['scissors', 'lizard'] },\r\n  paper: { name: 'Paper', defeats: ['rock', 'spock'] },\r\n  scissors: { name: 'Scissors', defeats: ['paper', 'lizard'] },\r\n  lizard: { name: 'Lizard', defeats: ['paper', 'spock'] },\r\n  spock: { name: 'Spock', defeats: ['scissors', 'rock'] },\r\n};\r\n\r\nlet state = {\r\n  player: { choice: '', points: 0 },\r\n  computer: { choice: '', points: 0 },\r\n};\r\n\r\n// Reset all 'selected' icons\r\nfunction resetSelectedIcons() {\r\n  allGameIcons.forEach((icon) => {\r\n    icon.classList.remove('selected');\r\n  });\r\n}\r\n\r\n// set player and computer choice\r\nfunction setChoice(agent, choice) {\r\n  _domElements_agentElements_js__WEBPACK_IMPORTED_MODULE_0__.agentElements[agent].icons[choice].classList.add('selected');\r\n  _domElements_agentElements_js__WEBPACK_IMPORTED_MODULE_0__.agentElements[agent].choiceEl.textContent = ` --- ${choice}'`;\r\n  state[agent].choice = choice;\r\n}\r\n\r\n// Random compuer choice\r\nfunction computerRandomChoice() {\r\n  const computerChoiceNumber = Math.random();\r\n  if (computerChoiceNumber < 0.2) {\r\n    setChoice('computer', 'rock');\r\n  } else if (computerChoiceNumber <= 0.4) {\r\n    setChoice('computer', 'paper');\r\n  } else if (computerChoiceNumber <= 0.6) {\r\n    setChoice('computer', 'scissors');\r\n  } else if (computerChoiceNumber <= 0.8) {\r\n    setChoice('computer', 'lizard');\r\n  } else {\r\n    setChoice('computer', 'spock');\r\n  }\r\n}\r\n\r\nfunction playerChoice(e) {\r\n  const playerChoiceIcon = e.target.id;\r\n\r\n  //Add 'selected' styling & playerchoice\r\n  switch (playerChoiceIcon) {\r\n    case 'playerRock':\r\n      setChoice('player', 'rock');\r\n      break;\r\n    case 'playerPaper':\r\n      setChoice('player', 'paper');\r\n      break;\r\n    case 'playerScissors':\r\n      setChoice('player', 'scissors');\r\n      break;\r\n    case 'playerLizard':\r\n      setChoice('player', 'lizard');\r\n      break;\r\n    case 'playerSpock':\r\n      setChoice('player', 'spock');\r\n      break;\r\n    default:\r\n      break;\r\n  }\r\n}\r\n\r\n// Call functions to process turn\r\nfunction determineWinner() {\r\n  let defeatedOptions = choices[state.player.choice].defeats;\r\n  if (defeatedOptions.includes(state.computer.choice)) {\r\n    state.player.points++;\r\n    _domElements_agentElements_js__WEBPACK_IMPORTED_MODULE_0__.agentElements.player.playerScoreEl.textContent = state.player.points;\r\n    resultText.textContent = 'You Won!';\r\n  } else if (state.player.choice === state.computer.choice) {\r\n    resultText.textContent = 'Draw!';\r\n  } else {\r\n    state.computer.points++;\r\n    _domElements_agentElements_js__WEBPACK_IMPORTED_MODULE_0__.agentElements.computer.computerScoreEl.textContent = state.computer.points;\r\n    resultText.textContent = 'Computer Won!';\r\n  }\r\n}\r\n\r\n// Passing player selection value and styling our icons\r\nfunction select(e) {\r\n  // only pick an icon if the clicked element is an icon tag\r\n  if (e.target.tagName === 'I') {\r\n    resetSelectedIcons();\r\n    computerRandomChoice();\r\n    playerChoice(e);\r\n    determineWinner();\r\n  }\r\n}\r\n\r\nfunction reset() {\r\n  resetSelectedIcons();\r\n  state.player.points = 0;\r\n  state.computer.points = 0;\r\n  _domElements_agentElements_js__WEBPACK_IMPORTED_MODULE_0__.agentElements.player.playerScoreEl.textContent = state.player.points;\r\n  _domElements_agentElements_js__WEBPACK_IMPORTED_MODULE_0__.agentElements.computer.computerScoreEl.textContent = state.computer.points;\r\n  resultText.textContent = '';\r\n}\r\n\r\nplayer.addEventListener('click', select);\r\nresetEl.addEventListener('click', reset);\r\n\n\n//# sourceURL=webpack://spock-rock-game/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;