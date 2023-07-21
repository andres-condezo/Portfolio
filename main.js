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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* CSS variables */\\n\\n:root {\\n  --primary-color: #0f3d3e;\\n  --secondary-color: #041c32;\\n  --secondary-darker-color: #222831;\\n  --accent-color: #ecb365;\\n  --accent-darker-color: #603601;\\n  --grey-color: #100f0f;\\n  --white-color: #e2dcc8;\\n  --font-sans: 'Poppins', sans-serif;\\n}\\n\\n/* Reset default styles */\\n\\n* {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n}\\n\\n/* global selectors */\\n\\nh1 {\\n  color: var(--accent-color);\\n  margin-bottom: 1.6rem;\\n  font-size: 4rem;\\n}\\n\\nh2 {\\n  margin-bottom: 2rem;\\n  color: var(--secondary-color);\\n}\\n\\nh3 {\\n  color: var(--primary-color);\\n  font-size: 2.4rem;\\n}\\n\\nh4 {\\n  color: var(--primary-color);\\n  font-weight: 500;\\n  margin: 2rem;\\n}\\n\\na,\\nbutton {\\n  all: unset;\\n  cursor: pointer;\\n}\\n\\nul {\\n  display: flex;\\n  gap: 1rem;\\n}\\n\\nli {\\n  list-style: none;\\n}\\n\\nsection {\\n  width: 100%;\\n  padding: 18rem 0 12rem 0;\\n  border-radius: 0 0 0 40px;\\n  margin-top: -6rem;\\n  box-shadow: 0 1rem 1rem -0.5rem rgba(0, 0, 0, 0.2);\\n}\\n\\narticle {\\n  width: 100%;\\n  background-color: white;\\n  border: 1px solid silver;\\n  border-radius: 1.4rem;\\n  padding: 2rem;\\n}\\n\\nfigure {\\n  width: 100%;\\n  height: 20rem;\\n  margin-bottom: 2rem;\\n}\\n\\nimg {\\n  width: 100%;\\n  height: 100%;\\n  border-radius: 1.4rem;\\n  object-fit: contain;\\n}\\n\\np {\\n  margin-bottom: 3rem;\\n  text-align: justify;\\n}\\n\\nform {\\n  width: 100%;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  gap: 1.6rem;\\n}\\n\\nform > input,\\nform > textarea {\\n  border: 1px solid silver;\\n  border-radius: 1.2rem;\\n  width: 100%;\\n  padding: 1.4rem;\\n  background-color: var(--white-color);\\n  font-size: 1.8rem;\\n  font-family: var(--font-sans);\\n}\\n\\n.bg-transition {\\n  -webkit-transition: background 0.3s; /* For Safari 3.0 to 6.0 */\\n  transition: background 0.3s; /* For modern browsers */\\n}\\n\\n.btn {\\n  display: inline-block;\\n  border: 1px solid;\\n  border-radius: 1.2rem;\\n  padding: 1rem 2rem;\\n  font-size: 1.6rem;\\n}\\n\\n.btn-white {\\n  color: var(--accent-color);\\n}\\n\\n.btn-white:hover {\\n  background-color: var(--accent-color);\\n  color: var(--secondary-color);\\n}\\n\\n.btn-white:active {\\n  background-color: var(--accent-darker-color);\\n}\\n\\n.btn-black:hover {\\n  background-color: var(--secondary-color);\\n  color: var(--white-color);\\n}\\n\\n.btn-black:active {\\n  background-color: var(--secondary-darker-color);\\n}\\n\\nhtml {\\n  font-family: var(--font-sans), sans-serif;\\n  font-size: 62.5%;\\n  scroll-behavior: smooth;\\n  transition: all 0.3s ease-out;\\n}\\n\\nbody {\\n  width: 100vw;\\n  height: 100vh;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: flex-start;\\n  align-items: center;\\n  overflow-x: hidden;\\n  font-size: 1.8rem;\\n  background-color: #eee;\\n}\\n\\nheader {\\n  width: 100%;\\n}\\n\\n/* menu */\\n\\nnav {\\n  width: 100%;\\n  height: 8rem;\\n  position: fixed;\\n  bottom: 0;\\n  color: var(--white-color);\\n  background-color: var(--secondary-color);\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  border-radius: 40px 40px 0 0;\\n  z-index: 90;\\n  box-shadow: 0 0 1rem 0.3rem rgba(0, 0, 0, 0.5);\\n}\\n\\nnav ul {\\n  width: 90%;\\n  height: 100%;\\n  display: flex;\\n  justify-content: space-around;\\n  align-items: center;\\n}\\n\\nnav li {\\n  height: 100%;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\nnav a {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\nnav i {\\n  font-size: 1.6rem;\\n  margin-bottom: 0.5rem;\\n}\\n\\nnav span {\\n  font-size: 1.2rem;\\n}\\n\\nmain {\\n  width: 100%;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\n/* social-media-ul */\\n\\n.media-span {\\n  display: block;\\n  font-weight: normal;\\n  margin-bottom: 2rem;\\n}\\n\\n.social-media-ul {\\n  margin-bottom: 4rem;\\n}\\n\\n.fa-brands {\\n  font-size: 2.6rem;\\n  margin-left: 1rem;\\n  color: var(--neutral-color);\\n  -webkit-transition: color 0.3s; /* For Safari 3.0 to 6.0 */\\n  transition: color 0.3s; /* For modern browsers */\\n}\\n\\n.fa-brands:hover {\\n  color: var(--accent-color);\\n}\\n\\n.fa-brands:active {\\n  color: var(--accent-darker-color);\\n}\\n\\n.about-myself .fa-brands:hover {\\n  color: var(--primary-color);\\n}\\n\\n.about-myself .fa-brands:active {\\n  color: var(--secondary-color);\\n}\\n\\n/* headline */\\n\\n.headline {\\n  color: white;\\n  padding: 14rem 4rem 8rem 4rem;\\n  background-color: var(--secondary-color);\\n  z-index: 40;\\n}\\n\\n.headline span {\\n  color: var(--accent-color);\\n}\\n\\n/* works */\\n\\n.works {\\n  background-color: var(--white-color);\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  gap: 3rem;\\n  z-index: 30;\\n}\\n\\n.span-container {\\n  display: flex;\\n  align-items: center;\\n  margin-bottom: 2rem;\\n  color: black;\\n  font-size: 1.4rem;\\n}\\n\\n.counter {\\n  width: 0.8rem;\\n  height: 0.8rem;\\n  border-radius: 50%;\\n  background-color: silver;\\n  margin: 0 1rem;\\n}\\n\\n.tags-container {\\n  flex-wrap: wrap;\\n  margin-bottom: 3rem;\\n}\\n\\n.tags-container li {\\n  font-size: 1.4rem;\\n  background-color: var(--white-color);\\n  padding: 1rem;\\n  border-radius: 1.2rem;\\n}\\n\\n/* about-myself */\\n\\n.about-myself {\\n  background-color: var(--white-color);\\n  padding: 15rem 1rem 12rem 1rem;\\n  z-index: 20;\\n}\\n\\n.about-myself span {\\n  color: var(--primary-color);\\n}\\n\\n.about-myself-skills {\\n  margin-top: 4rem;\\n}\\n\\n.about-myself details {\\n  margin: 0 auto;\\n  margin-bottom: 0.5rem;\\n  padding: 1rem;\\n  box-shadow: 0 0.1rem 1rem -0.5rem rgba(0, 0, 0, 0.8);\\n  border-radius: 5px;\\n  overflow: hidden;\\n}\\n\\n.about-myself summary {\\n  padding: 1rem;\\n  display: block;\\n  padding-left: 2.2rem;\\n  position: relative;\\n  cursor: pointer;\\n  color: var(--primary-color);\\n}\\n\\n.about-myself summary::before {\\n  content: '';\\n  font-size: 4rem;\\n  border-radius: 50%;\\n  border-width: 0.8rem;\\n  border-style: solid;\\n  border-color: transparent transparent transparent #000;\\n  position: absolute;\\n  top: 3.8rem;\\n  left: 1rem;\\n  transform: rotate(0);\\n  transform-origin: 0.2rem 50%;\\n  transition: 0.25s transform ease;\\n}\\n\\n.about-myself details[open] > summary::before {\\n  transform: rotate(90deg);\\n}\\n\\n.about-myself details summary::-webkit-details-marker {\\n  display: none;\\n}\\n\\n.about-myself details > ul {\\n  padding-bottom: 1rem;\\n  margin-bottom: 1rem;\\n  flex-direction: column;\\n}\\n\\n.about-myself details > ul > li {\\n  margin-left: 4rem;\\n}\\n\\n.about-myself details > ul > li::before {\\n  content: '>';\\n  color: var(--primary-color);\\n  margin-right: 1rem;\\n}\\n\\n/* contact */\\n\\n.contact {\\n  color: var(--white-color);\\n  background-color: var(--secondary-color);\\n  padding: 15rem 4rem 18rem 4rem;\\n  z-index: 10;\\n}\\n\\n.form-title,\\n.form-p {\\n  text-align: center;\\n}\\n\\n.form-title {\\n  color: var(--accent-color);\\n}\\n\\n.form-p {\\n  color: white;\\n  margin-bottom: 4rem;\\n}\\n\\nform .btn {\\n  margin-top: 2rem;\\n}\\n\\n/* modal */\\n\\n.modal-container {\\n  background-color: rgba(0, 0, 0, 0.5);\\n  width: 100vw;\\n  height: 100vh;\\n  top: 0;\\n  bottom: 0;\\n  right: 0;\\n  left: 0;\\n  z-index: 100;\\n  display: none;\\n  position: fixed;\\n}\\n\\n.show-modal {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\n.overflow-hidden {\\n  overflow: hidden;\\n}\\n\\n.modal-card {\\n  width: 94%;\\n  height: 94%;\\n  padding-top: 2rem;\\n  display: flex;\\n  flex-direction: column;\\n  overflow-y: scroll;\\n}\\n\\n.modal-wrap {\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n.modal-card p {\\n  margin-bottom: 3rem;\\n  justify-content: center;\\n  text-align: justify;\\n  padding: 1rem;\\n}\\n\\n.modal-header {\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n.modal-footer {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: space-between;\\n  height: 60%;\\n}\\n\\n.close-btn {\\n  align-self: flex-end;\\n}\\n\\n.modal-buttons {\\n  display: flex;\\n  justify-content: space-around;\\n}\\n\\n/* animations */\\n@keyframes slidein {\\n  from {\\n    opacity: 0;\\n  }\\n\\n  to {\\n    opacity: 1;\\n  }\\n}\\n/* media queries */\\n\\n@media only screen and (min-width: 281px) {\\n  .about-myself {\\n    background-color: var(--white-color);\\n    padding: 15rem 4rem 12rem 4rem;\\n    z-index: 20;\\n  }\\n\\n  section {\\n    width: 100%;\\n    padding: 18rem 3rem 12rem 3rem;\\n    border-radius: 0 0 0 40px;\\n    margin-top: -6rem;\\n    box-shadow: 0 1rem 1rem -0.5rem rgba(0, 0, 0, 0.2);\\n  }\\n}\\n\\n@media only screen and (min-width: 912px) {\\n  header {\\n    all: unset;\\n    width: 8rem;\\n  }\\n\\n  nav {\\n    all: unset;\\n    width: 8rem;\\n    height: 100%;\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: center;\\n    position: fixed;\\n    top: 0;\\n    left: 0;\\n    z-index: 90;\\n    background-color: var(--secondary-color);\\n    box-shadow: 11px 1px 11px -5px rgba(0, 0, 0, 0.38);\\n    -webkit-box-shadow: 11px 1px 11px -5px rgba(0, 0, 0, 0.38);\\n    -moz-box-shadow: 11px 1px 11px -5px rgba(0, 0, 0, 0.38);\\n  }\\n\\n  nav ul {\\n    all: unset;\\n    height: 28rem;\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: center;\\n    align-items: center;\\n  }\\n\\n  nav a {\\n    color: var(--white-color);\\n    -webkit-transition: color 0.3s; /* For Safari 3.0 to 6.0 */\\n    transition: color 0.3s; /* For modern browsers */\\n  }\\n\\n  nav a:hover {\\n    color: var(--accent-color);\\n  }\\n\\n  nav a:active {\\n    color: var(--accent-darker-color);\\n  }\\n\\n  nav span {\\n    all: unset;\\n    font-size: 1rem;\\n  }\\n\\n  main {\\n    margin-left: 6rem;\\n    width: calc(100% - 8rem);\\n  }\\n\\n  section {\\n    width: 100%;\\n    padding: 18rem 0 12rem 0 !important;\\n    border-radius: 0 0 40px 0 !important;\\n    margin-top: -6rem;\\n    box-shadow: 10px 10px 5px 0 rgba(0, 0, 0, 0.2) !important;\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: center;\\n    align-items: center;\\n  }\\n\\n  .headline h1 {\\n    text-align: center;\\n  }\\n\\n  .headline p {\\n    width: 50%;\\n    text-align: center;\\n  }\\n\\n  .headline p,\\n  .about-myself p {\\n    margin-bottom: 6rem;\\n  }\\n\\n  .works-card {\\n    width: 90%;\\n    display: flex;\\n    flex-direction: row;\\n    gap: 4rem;\\n    padding: 4rem;\\n  }\\n\\n  .works-card:nth-child(even) {\\n    flex-direction: row-reverse;\\n  }\\n\\n  .works-info {\\n    width: 50%;\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: space-between;\\n  }\\n\\n  h3 {\\n    font-size: 3rem;\\n  }\\n\\n  figure {\\n    width: 50%;\\n    height: 36rem;\\n    min-height: 36rem;\\n    margin: 0;\\n  }\\n\\n  .span-container {\\n    width: 50%;\\n  }\\n\\n  .about-myself {\\n    flex-direction: row;\\n    align-items: flex-start;\\n  }\\n\\n  .about-myself-info {\\n    width: 40%;\\n    padding: 4rem;\\n  }\\n\\n  .about-myself-skills {\\n    width: 40%;\\n    padding: 4rem;\\n  }\\n\\n  .contact {\\n    border-radius: 0 0 0 0 !important;\\n  }\\n\\n  form {\\n    width: 50%;\\n  }\\n\\n  .modal-card {\\n    width: 95%;\\n    padding: 8rem;\\n  }\\n\\n  .modal-card p {\\n    margin-top: 8rem;\\n  }\\n\\n  .modal-card figure {\\n    width: 86%;\\n  }\\n\\n  .close-btn {\\n    position: absolute;\\n    top: 40px;\\n    right: 70px;\\n    z-index: 110;\\n  }\\n\\n  .modal-wrap {\\n    flex-direction: row;\\n  }\\n\\n  .modal-header {\\n    width: 50%;\\n  }\\n\\n  .modal-footer {\\n    width: 50%;\\n    height: 100%;\\n  }\\n\\n  .modal-buttons {\\n    justify-content: flex-start;\\n    gap: 2rem;\\n  }\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://portfolio/./src/css/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://portfolio/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://portfolio/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://portfolio/./src/css/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://portfolio/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://portfolio/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://portfolio/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://portfolio/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://portfolio/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://portfolio/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/components/form.js":
/*!********************************!*\
  !*** ./src/components/form.js ***!
  \********************************/
/***/ (() => {

eval("//* **************\n// form section\n//* **************\n\nconst form = document.querySelector('#form');\nconst nameInput = document.querySelector('#name');\nconst emailInput = document.querySelector('#email');\nconst msgInput = document.querySelector('#msg');\nconst errorMsgContainer = document.querySelector('#errorMsg');\nconst errorMsg = '* Please enter a valid email.';\nconst regex = /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/;\n\n//* **************\n// form validation\n//* **************\n\nfunction isValidEmail(emailValue) {\n  return regex.test(emailValue);\n}\n\nfunction showError() {\n  errorMsgContainer.classList.add('showError');\n  errorMsgContainer.textContent = errorMsg;\n}\n\nfunction deleteErrorMessage() {\n  errorMsgContainer.classList.remove('showError');\n  errorMsgContainer.innerHTML = '';\n}\n\nform.addEventListener('submit', (event) => {\n  const emailValue = emailInput.value;\n\n  if (!isValidEmail(emailValue)) {\n    event.preventDefault();\n    showError();\n  } else {\n    deleteErrorMessage();\n  }\n});\n\n//* *****************\n// form local storage\n//* *****************\n\nconst saveData = () => {\n  const formData = {\n    name: nameInput.value,\n    email: emailInput.value,\n    msg: msgInput.value,\n  };\n  localStorage.setItem('formData', JSON.stringify(formData));\n};\n\nnameInput.addEventListener('input', saveData);\nemailInput.addEventListener('input', saveData);\nmsgInput.addEventListener('input', saveData);\n\nwindow.addEventListener('load', () => {\n  const formData = JSON.parse(localStorage.getItem('formData'));\n  nameInput.value = formData.name;\n  emailInput.value = formData.email;\n  msgInput.value = formData.msg;\n});\n\n\n//# sourceURL=webpack://portfolio/./src/components/form.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _components_form_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/form.js */ \"./src/components/form.js\");\n/* harmony import */ var _components_form_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_form_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _data_project_data_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data/project-data.json */ \"./src/data/project-data.json\");\n\n\n\n\n// ***************\n// tech-tags\n// ***************\n\nconst createTags = (container, i) => {\n  _data_project_data_json__WEBPACK_IMPORTED_MODULE_2__.projects[i].technologies.forEach((_el, index) => {\n    const liItem = document.createElement('li');\n    liItem.innerHTML = _data_project_data_json__WEBPACK_IMPORTED_MODULE_2__.projects[i].technologies[index];\n    container.appendChild(liItem);\n  });\n};\n\n// ***************\n// works-section\n// ***************\n\nfunction createCard(el) {\n  return `\n<figure><img src=\"${el.image}\" alt=\"${el.name} project image\"></figure>\n<div class=\"works-info\">\n  <div class=\"block-u\">\n    <h3>${el.name}</h3>\n    <div class=\"span-container\">\n      <span>${el.company}</span>\n      <div class=\"counter\"></div>\n      <span>${el.role}</span>\n      <div class=\"counter\"></div>\n      <span>${el.year}</span>\n    </div>\n    <p>${el.description}</p>\n  </div>\n  <div class=\"block-d\">\n    <ul class=\"tags-container\" id=\"${el.name}\"> </ul>\n    <a href=\"#works-card\" class=\"btn btn-black bg-transition\" id=\"showModal\">See Project</a>\n  </div>\n</div>\n`;\n}\n\nconst myProjects = _data_project_data_json__WEBPACK_IMPORTED_MODULE_2__.projects.map((el) => {\n  const article = document.createElement('article');\n  article.className = 'works-card';\n  article.innerHTML = createCard(el);\n  return article;\n});\n\nconst worksSection = document.getElementById('works');\n\nfor (let i = 0; i < myProjects.length; i += 1) {\n  worksSection.appendChild(myProjects[i]);\n  const ulTags = document.getElementById(_data_project_data_json__WEBPACK_IMPORTED_MODULE_2__.projects[i].name);\n  createTags(ulTags, i);\n}\n\n// ***************\n// modal section\n// ***************\n\nfunction createModal(el) {\n  return `\n    <button type=\"button\" class=\"close-btn\" id=\"close-btn\">\n      <i class=\"fa-solid fa-xmark\"></i>\n    </button>\n    <div class=\"modal-wrap\">\n      <div class=\"modal-header\">\n        <div class=\"section-a\">\n          <h3>${el.name}</h3>\n          <div class=\"span-container\">\n            <span>${el.company}</span>\n            <div class=\"counter\"></div>\n            <span>${el.role}</span>\n            <div class=\"counter\"></div>\n            <span>${el.year}</span>\n          </div>\n        </div>\n        <figure class=\"img-container\">\n          <img src=\"${el.image}\" alt=\"${el.name} project image\">\n        </figure>\n      </div>\n\n      <div class=\"modal-footer\">\n        <p class=\"modal-par\">${el.description}</p>\n        <div class=\"block-r\">\n          <ul class=\"tags-container\" id=\"modal-id\"> </ul>\n          <div class=\"modal-buttons\">\n            <a href=\"${el.liveVersion}\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"btn btn-black bg-transition\">\n              See Live\n            </a>\n            <a href=\"${el.source}\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"btn btn-black bg-transition\">\n              See Source\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n`;\n}\n\nconst modalBtn = document.querySelectorAll('#showModal');\nconst modalSection = document.getElementById('modal-container');\nconst body = document.querySelector('body');\n\nfunction openModal() {\n  modalSection.classList.add('show-modal');\n  body.classList.add('overflow-hidden');\n}\n\nfunction closeModal() {\n  modalSection.classList.remove('show-modal');\n  body.classList.remove('overflow-hidden');\n  modalSection.innerHTML = '';\n}\n\nmodalBtn.forEach((el, i) => {\n  el.addEventListener('click', () => {\n    openModal();\n    const modalArticle = document.createElement('article');\n    modalArticle.className = 'modal-card';\n    modalArticle.innerHTML = createModal(_data_project_data_json__WEBPACK_IMPORTED_MODULE_2__.projects[i]);\n    modalSection.appendChild(modalArticle);\n\n    const modalTags = document.getElementById('modal-id');\n    createTags(modalTags, i);\n\n    const closeModalBtn = document.querySelector('#close-btn');\n    closeModalBtn.addEventListener('click', closeModal);\n  });\n});\n\n\n//# sourceURL=webpack://portfolio/./src/index.js?");

/***/ }),

/***/ "./src/data/project-data.json":
/*!************************************!*\
  !*** ./src/data/project-data.json ***!
  \************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"projects\":[{\"name\":\"Stock Performance\",\"description\":\"Stock performance is a web application to check out performance by company to see which one performs the best, based on an external API provided by Financial Modeling Prep.\",\"image\":\"https://raw.githubusercontent.com/andres-condezo/Portfolio/dev/src/img/stock-performance-screenshot-responsive.jpeg\",\"company\":\"Freelancer\",\"year\":\"2022\",\"role\":\"Front End\",\"technologies\":[\"React\",\"JavaScript\",\"Redux\",\"HTML\",\"CSS\",\"SCSS\"],\"liveVersion\":\"https://andres-condezo.github.io/stock-performance/\",\"source\":\"https://github.com/andres-condezo/stock-performance\"},{\"name\":\"Space Travelers\",\"description\":\"Space Travelers is a web application for a company that provides commercial and scientific space travel services. The application will allow users to book rockets and join selected space missions.\",\"image\":\"https://raw.githubusercontent.com/andres-condezo/Portfolio/dev/src/img/space-travelers-screenshot-responsive.jpeg\",\"company\":\"Freelancer\",\"year\":\"2022\",\"role\":\"Front End\",\"technologies\":[\"React\",\"Redux\",\"JavaScript\",\"Rest Api\",\"SCSS\"],\"liveVersion\":\"https://space-travelers-az.netlify.app\",\"source\":\"https://github.com/zhadier/space-travelers\"},{\"name\":\"Taste Food\",\"description\":\"The Taste food web app is our JavaScript capstone project. Taste food is a web application based on an external food API, showing data about Italian foods and we used Used involvement API to record the different user interactions (likes, comments).\",\"image\":\"https://user-images.githubusercontent.com/69616245/189245414-5341c09f-c27d-4f03-bace-a9e5fb53ce13.png\",\"company\":\"Freelancer\",\"year\":\"2022\",\"role\":\"Front End\",\"technologies\":[\"JavaScript\",\"Webpack\",\"Jest\",\"HTML\",\"CSS\"],\"liveVersion\":\"http://kyrillos.me/Taste-Food/\",\"source\":\"https://github.com/Bondok6/Taste-Food\"},{\"name\":\"Rent a Car\",\"description\":\"This project is full stack website for renting cars. The main view of the app presents a list of different cars to the user, allowing the user to view the details of each car, rent the car, and see the user\\'s current rents.\",\"image\":\"https://user-images.githubusercontent.com/61361037/186997206-ad3751ce-8a7e-4341-bfed-b140f9a79e7b.png\",\"company\":\"Freelancer\",\"year\":\"2022\",\"role\":\"Front End\",\"technologies\":[\"React\",\"Redux\",\"Ruby\",\"Ruby on Rails\",\"Jest\",\"PostgreSQL\",\"HTML\",\"CSS\"],\"liveVersion\":\"https://rent-a-car-frontend.netlify.app\",\"source\":\"https://github.com/RaoAkif/RentACar-Frontend\"}]}');\n\n//# sourceURL=webpack://portfolio/./src/data/project-data.json?");

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
/******/ 				() => (module['default']) :
/******/ 				() => (module);
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
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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