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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../img/bg-headline.png */ \"./src/img/bg-headline.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../img/form_bg_mobile.svg */ \"./src/img/form_bg_mobile.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../img/header_bg_2x.png */ \"./src/img/header_bg_2x.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../img/contact-form-bg-d.svg */ \"./src/img/contact-form-bg-d.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* CSS variables */\\n\\n:root {\\n  --neutral-color: #172b4d;\\n  --primary-color: #7f8cff;\\n  --secondary-color: #2230d2;\\n  --grey-color: #7a869a;\\n  --gray-color: #ebebff;\\n  --works-color: #f7f7f9;\\n  --white-color: #fff;\\n  --button-color: #396df2;\\n  --contact-color: #6070ff;\\n  --font-sans: 'Poppins', sans-serif;\\n}\\n\\n/* Reset default styles */\\n* {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n}\\n\\n/* Setting font family and size */\\nhtml {\\n  font-family: var(--font-sans), sans-serif;\\n  font-size: 62.5%;\\n  scroll-behavior: smooth;\\n}\\n\\n/* Setting mobile first styles */\\nbody {\\n  width: 100vw;\\n  height: 100vh;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: flex-start;\\n  align-items: center;\\n  overflow-x: hidden;\\n}\\n\\n.overflow-hidden {\\n  overflow: hidden;\\n}\\n\\n.btn-transition {\\n  transition: all 0.3s ease-out;\\n}\\n\\nheader {\\n  width: 100%;\\n  position: sticky;\\n}\\n\\n.sticky {\\n  position: fixed;\\n  top: 0;\\n  left: 0;\\n  width: 100%;\\n  z-index: 9;\\n}\\n\\nheader nav .header__ul {\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: space-between;\\n  align-items: center;\\n  height: 44px;\\n  background-color: white;\\n  padding-top: 1rem;\\n  padding-bottom: 1rem;\\n  list-style-type: none;\\n}\\n\\nheader nav ul li .header__logo {\\n  font-size: 2rem;\\n  font-weight: 700;\\n  margin-left: 2.8rem;\\n  color: var(--primary-color);\\n  text-decoration: none;\\n}\\n\\nheader nav ul li .header__logo:hover {\\n  color: white;\\n  background-color: var(--primary-color);\\n}\\n\\nheader nav ul li .header__logo:active {\\n  color: white;\\n  background-color: var(--secondary-color);\\n}\\n\\nheader nav ul li .header__logo:disabled,\\nheader nav ul li .header__logo[disabled] {\\n  color: var(--neutral-color);\\n  background-color: white;\\n}\\n\\nheader .nav__button {\\n  width: 40px;\\n  height: 40px;\\n  margin-right: 3rem;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  color: var(--primary-color);\\n  background-color: white;\\n  border-style: none;\\n  text-decoration: none;\\n}\\n\\nheader .nav__button i {\\n  font-size: 2rem;\\n}\\n\\nheader .nav__button:hover {\\n  color: white;\\n  background-color: var(--primary-color);\\n}\\n\\nheader .nav__button:active {\\n  color: white;\\n  background-color: var(--secondary-color);\\n}\\n\\nheader .nav__button:disabled,\\nheader .nav__button[disabled] {\\n  color: var(--neutral-color);\\n  background-color: white;\\n}\\n\\nheader .desktop-menu-container {\\n  display: none;\\n}\\n\\n.menu-warp {\\n  width: 100vw;\\n  height: 100vh;\\n}\\n\\n.blurry {\\n  filter: blur(6px);\\n  -webkit-filter: blur(6px);\\n}\\n\\n.mobile-menu-container {\\n  position: fixed;\\n  inset: 0;\\n  background: rgba(96, 112, 2550, 0.8);\\n  display: none;\\n  width: 100%;\\n  height: 100%;\\n  z-index: 10;\\n  backdrop-filter: blur(0.5rem);\\n}\\n\\n.close-button {\\n  padding: 0.5rem;\\n  color: var(--white-color);\\n  background: none;\\n  border: none;\\n  font-size: 3rem;\\n  cursor: pointer;\\n  outline: inherit;\\n  display: flex;\\n  align-content: flex-end;\\n  margin-right: 1rem;\\n  margin-top: 3rem;\\n  margin-left: 12rem;\\n}\\n\\n.mobile-menu-ul {\\n  margin-top: 8rem;\\n  margin-left: 4rem;\\n}\\n\\n.mobile-menu-ul li {\\n  list-style: none;\\n  margin-bottom: 1.5rem;\\n}\\n\\n.mobile-menu-ul a {\\n  text-decoration: none;\\n  color: var(--white-color);\\n  font-size: 3rem;\\n  font-weight: 600;\\n}\\n\\n.visible {\\n  display: flex;\\n  flex-direction: row-reverse;\\n  justify-content: space-between;\\n}\\n\\nmain {\\n  width: 100%;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  align-content: center;\\n  background-color: var(--works-color);\\n}\\n\\nmain .headline {\\n  width: 100%;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  background-repeat: no-repeat;\\n  background-position: top center;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: flex-start;\\n  align-items: flex-start;\\n  padding-left: 4rem;\\n  padding-bottom: 14rem;\\n  background-color: var(--white-color);\\n  border-bottom-left-radius: 80px 80px;\\n  z-index: 1;\\n}\\n\\nh1 {\\n  width: 32.7rem;\\n  margin-top: 10rem;\\n  font-family: var(--font-sans);\\n  font-style: normal;\\n  font-weight: bold;\\n  font-size: 4rem;\\n  line-height: 5.2rem;\\n  color: var(--neutral-color);\\n}\\n\\np {\\n  color: var(--neutral-color);\\n  width: 30rem;\\n  margin-top: 1.2rem;\\n  font-family: var(--font-sans);\\n  font-style: normal;\\n  font-weight: normal;\\n  font-size: 1.5rem;\\n  line-height: 2.4rem;\\n}\\n\\n.h2-span {\\n  font-family: var(--font-sans);\\n  font-style: normal;\\n  font-weight: 500;\\n  font-size: 16px;\\n  line-height: 24px;\\n  color: var(--primary-color);\\n  margin-top: 1.2rem;\\n}\\n\\n.headline__social-media {\\n  color: var(--neutral-color);\\n  margin-top: 1.2rem;\\n  width: 100%;\\n  padding-bottom: 2rem;\\n}\\n\\n.social-media__ul {\\n  list-style-type: none;\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: flex-start;\\n}\\n\\n.headline__social-media a {\\n  margin-right: 2rem;\\n}\\n\\n/* works styles */\\n\\n.works {\\n  width: 100%;\\n  display: grid;\\n  grid-template-columns: auto;\\n  grid-row-gap: 10rem;\\n  justify-content: center;\\n  padding: 12rem 0 10rem 0;\\n  background-color: var(--works-color);\\n}\\n\\n.works__card {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  padding: 2rem 2rem 4rem 2rem;\\n  flex-direction: column;\\n  background: #fff;\\n  border: 1px solid #dfe1e6;\\n  border-radius: 16px;\\n}\\n\\n.snapshot {\\n  display: flex;\\n  justify-content: flex-end;\\n  width: 100%;\\n}\\n\\n.snapshot img {\\n  width: 29.5rem;\\n}\\n\\n.works__left-block {\\n  width: 100%;\\n}\\n\\n.works__left-block .works__primary-text {\\n  margin-bottom: 2rem;\\n}\\n\\n.works__left-block .works__project-title {\\n  font-family: var(--font-sans);\\n  font-style: normal;\\n  font-weight: bold;\\n  font-size: 32px;\\n  line-height: 44px;\\n  margin: 1rem 0;\\n  color: var(--neutral-color);\\n}\\n\\n.works__left-block .frame-2 {\\n  display: flex;\\n  align-items: center;\\n}\\n\\n.works__left-block .frame-2 .client {\\n  font-size: 1.3rem;\\n  font-weight: 600;\\n  color: var(--neutral-color);\\n  margin: 0;\\n}\\n\\n.works__left-block .frame-2 .counter {\\n  width: 0.8rem;\\n  height: 0.8rem;\\n  border-radius: 50%;\\n  background-color: silver;\\n  margin: 0 1rem;\\n}\\n\\n.works__left-block .frame-2 .role,\\n.year {\\n  font-family: var(--font-sans);\\n  font-style: normal;\\n  font-weight: 600;\\n  font-size: 1.3rem;\\n  color: var(--grey-color);\\n  margin: 0;\\n}\\n\\n.works__left-block .works__primary-par {\\n  font-family: var(--font-sans);\\n  width: 30rem;\\n  font-style: normal;\\n  font-weight: normal;\\n  font-size: 1.5rem;\\n  line-height: 2.4rem;\\n  color: var(--neutral-color);\\n}\\n\\n.works__left-block .works__tags {\\n  font-family: var(--font-sans);\\n  font-style: normal;\\n  font-weight: 500;\\n  font-size: 1.2rem;\\n  line-height: 1.6rem;\\n  color: var(--primary-color);\\n  margin: 2rem 0 4rem 0;\\n  display: flex;\\n  list-style-type: none;\\n  margin-top: 1rem;\\n}\\n\\n/* about myself styles */\\n\\n.about-myself .langguages-ul li {\\n  display: flex;\\n  flex-direction: row;\\n  align-items: center;\\n  margin-left: 1rem;\\n  background-color: var(--works-color);\\n  border-radius: 8px;\\n  padding: 1rem;\\n  width: 100%;\\n}\\n\\n.about-myself .langguages-ul li img {\\n  margin-right: 2rem;\\n}\\n\\n.works__left-block .works__tags li {\\n  font-style: normal;\\n  background-color: var(--gray-color);\\n  margin: 0 0.3rem;\\n  border-radius: 0.8rem;\\n  padding: 0.4rem 1rem;\\n}\\n\\n.works__action {\\n  color: var(--button-color);\\n  text-decoration: none;\\n  border: 1px solid var(--button-color);\\n  border-radius: 0.4rem;\\n  padding: 1rem 1rem;\\n  font-family: var(--font-sans);\\n  font-style: normal;\\n  font-weight: 500;\\n  font-size: 1.7rem;\\n}\\n\\n.works__action:hover {\\n  color: white;\\n  background-color: var(--primary-color);\\n}\\n\\n.works__action:active {\\n  color: white;\\n  background-color: var(--secondary-color);\\n}\\n\\n.works__action:disabled,\\n.works__action[disabled] {\\n  color: var(--neutral-color);\\n  background-color: white;\\n}\\n\\n.about-myself {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: flex-start;\\n  align-items: flex-start;\\n  padding-bottom: 8rem;\\n  border-top-right-radius: 80px 80px;\\n  background-color: var(--white-color);\\n  width: 100%;\\n  padding-left: 3rem;\\n}\\n\\n.about-myself__title {\\n  width: 50%;\\n}\\n\\n.works__resume {\\n  color: var(--button-color);\\n  text-decoration: none;\\n  border: 1px solid var(--button-color);\\n  border-radius: 0.4rem;\\n  padding: 1rem 1rem;\\n  font-family: var(--font-sans);\\n  font-style: normal;\\n  font-weight: 500;\\n  font-size: 1.7rem;\\n  display: inline-flex;\\n  margin: 2rem 0;\\n}\\n\\n.works__resume:hover {\\n  color: white;\\n  background-color: var(--primary-color);\\n}\\n\\n.works__resume:active {\\n  color: white;\\n  background-color: var(--secondary-color);\\n}\\n\\n.works__resume:disabled,\\n.works__resume[disabled] {\\n  color: var(--neutral-color);\\n  background-color: white;\\n}\\n\\n.about-myself .about-myself__menu {\\n  width: 80%;\\n}\\n\\n.about-myself .about-myself__menu .about-myself__ul {\\n  width: 100%;\\n  display: flex;\\n  flex-direction: column;\\n  list-style-type: none;\\n  margin-top: 1rem;\\n}\\n\\n.about-myself .about-myself__menu ul li {\\n  font-style: normal;\\n  font-weight: 500;\\n  font-size: 15px;\\n  line-height: 24px;\\n  margin-bottom: 2rem;\\n}\\n\\n.about-myself .about-myself__menu .about-myself__list-title {\\n  width: 100%;\\n  list-style-type: none;\\n  font-size: 20px;\\n  font-weight: 500;\\n  padding: 2rem;\\n}\\n\\n.form-container {\\n  width: 100%;\\n  background-color: var(--contact-color);\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  border-top-left-radius: 80px 80px;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\n  background-repeat: no-repeat;\\n  background-position: center right;\\n}\\n\\n.form-title {\\n  color: #fff;\\n  font-family: var(--font-sans);\\n  font-size: 4rem;\\n  font-weight: 700;\\n  line-height: 5.2rem;\\n  margin-top: 12rem;\\n}\\n\\n.form-p {\\n  color: #fff;\\n  font-family: var(--font-sans);\\n  font-size: 1.8rem;\\n  line-height: 2.8rem;\\n  font-weight: 400;\\n  text-align: center;\\n  margin-top: 2rem;\\n  margin-bottom: 3rem;\\n  animation-duration: 1s;\\n  animation-name: slidein;\\n}\\n\\n.form {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  margin-top: 2rem;\\n  margin-bottom: 4rem;\\n  width: 100%;\\n}\\n\\n.form .form-ul {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  width: 100%;\\n}\\n\\n.input {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: flex-start;\\n  width: 80%;\\n  list-style-type: none;\\n  margin-bottom: 1.4rem;\\n}\\n\\n.input input {\\n  width: 100%;\\n  height: 4.6rem;\\n  border-radius: 8px;\\n  border-style: none;\\n  padding: 1rem;\\n  font-family: var(--font-sans);\\n  font-weight: 400;\\n  font-size: 1.6rem;\\n}\\n\\n.input textarea {\\n  width: 100%;\\n  border-radius: 8px;\\n  border-style: none;\\n  padding: 1rem;\\n  font-family: var(--font-sans);\\n  font-weight: 400;\\n  font-size: 1.6rem;\\n}\\n\\n.form .contact-button {\\n  border-radius: 8px;\\n  border-style: none;\\n  padding: 1.2rem 2rem;\\n  background-color: #fff;\\n  color: var(--primary-color);\\n  font-size: 1.7rem;\\n  font-family: var(--font-sans);\\n  font-weight: 500;\\n  margin-top: 1rem;\\n  cursor: pointer;\\n}\\n\\n::placeholder {\\n  color: #b3bac5;\\n  font-family: var(--font-sans);\\n  font-weight: 400;\\n  font-size: 1.5rem;\\n}\\n\\n.contact-button:hover {\\n  color: white;\\n  background-color: var(--primary-color);\\n  box-shadow: 16px 56px 40px -22px rgba(96, 111, 255, 0.1);\\n}\\n\\n.contact-button:active {\\n  color: white;\\n  background-color: var(--secondary-color);\\n}\\n\\n.contact-button:disabled,\\n.contact-button[disabled] {\\n  color: var(--neutral-color);\\n  background-color: white;\\n}\\n\\n.errorMsg {\\n  color: #f00;\\n  background-color: #fff;\\n  border-radius: 6px;\\n  font-size: 1.5rem;\\n  padding: 2rem;\\n  display: none;\\n}\\n\\n.showError {\\n  display: block;\\n}\\n\\n/* animations */\\n\\n@keyframes slidein {\\n  from {\\n    margin-left: 100%;\\n    width: 300%;\\n  }\\n\\n  to {\\n    margin-left: 0%;\\n    width: 100%;\\n  }\\n}\\n\\n/* modal section */\\n\\n.modal-container {\\n  position: fixed;\\n  width: 100%;\\n  height: 100%;\\n  background: rgba(0, 0, 0, 0.5);\\n  inset: 0 0 0 0;\\n  display: none;\\n  justify-content: center;\\n  align-items: center;\\n  padding: 0 1rem;\\n  z-index: 1000;\\n}\\n\\n.show-modal {\\n  display: flex;\\n}\\n\\n.modal-card {\\n  background-color: #fff;\\n  width: 80%;\\n  height: 90%;\\n  overflow: auto;\\n  padding: 2rem;\\n}\\n\\n.close-button-2 {\\n  float: right;\\n  padding: 0.5rem;\\n  color: #67798e;\\n  background: none;\\n  border: none;\\n  font-size: 2rem;\\n  cursor: pointer;\\n  outline: inherit;\\n}\\n\\n.modal__project-title {\\n  font-family: var(--font-sans);\\n  font-style: normal;\\n  font-weight: bold;\\n  font-size: 3rem;\\n  line-height: 44px;\\n  color: var(--neutral-color);\\n  margin-bottom: 1rem;\\n}\\n\\n.snapshot-modal {\\n  width: 100%;\\n  height: 100%;\\n}\\n\\n.snapshot-modal .img-modal {\\n  width: 100%;\\n}\\n\\n.modal__primary-par {\\n  font-family: var(--font-sans);\\n  width: 28rem;\\n  width: 100%;\\n  font-style: normal;\\n  font-weight: normal;\\n  font-size: 1.4rem;\\n  line-height: 2.4rem;\\n  color: var(--neutral-color);\\n}\\n\\n.modal-buttons {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  gap: 12px;\\n}\\n\\n.modal-btn {\\n  font-size: 1.4rem;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\n.modal-icon {\\n  margin-left: 4px;\\n}\\n\\n/* media queries */\\n\\n/* Medium Devices, Desktops */\\n\\n@media (min-width: 992px) {\\n  header {\\n    padding-top: 2rem;\\n    background-color: var(--white-color);\\n  }\\n\\n  .header__ul li .header__logo {\\n    font-size: 1.6rem;\\n    font-weight: 700;\\n    margin-left: 10rem;\\n  }\\n\\n  nav {\\n    background-color: var(--white-color);\\n    padding-bottom: 2rem;\\n  }\\n\\n  header .nav__button {\\n    display: none;\\n  }\\n\\n  header .desktop-menu-container {\\n    display: flex;\\n  }\\n\\n  .desktop-menu {\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    padding-right: 10rem;\\n  }\\n\\n  .desktop-menu li {\\n    list-style-type: none;\\n  }\\n\\n  .desktop-menu li a {\\n    font-family: var(--font-sans);\\n    font-weight: 500;\\n    font-size: 1.5rem;\\n    line-height: 2rem;\\n    text-decoration: none;\\n    padding-right: 3rem;\\n    color: var(--neutral-color);\\n  }\\n\\n  main .headline {\\n    width: 80%;\\n    margin: 0 auto;\\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \");\\n    background-repeat: no-repeat;\\n    background-position: center center;\\n    background-size: contain;\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: flex-start;\\n    align-items: flex-start;\\n    padding-top: 8rem;\\n    padding-left: 15rem;\\n    padding-right: 15rem;\\n    padding-bottom: 18rem;\\n  }\\n\\n  h1 {\\n    width: 80%;\\n    margin-top: 10rem;\\n    font-size: 4rem;\\n    line-height: 5.2rem;\\n  }\\n\\n  .headline p {\\n    width: 100%;\\n    margin-top: 1.2rem;\\n    padding-bottom: 2rem;\\n    font-weight: 400;\\n    font-size: 1.8rem;\\n    line-height: 2.8rem;\\n  }\\n\\n  .works {\\n    width: 100%;\\n    justify-content: center;\\n    justify-items: center;\\n    margin: 0;\\n  }\\n\\n  .works__card {\\n    width: 90rem;\\n    height: 39.6rem;\\n    display: flex;\\n    flex-direction: row;\\n    justify-content: center;\\n    align-items: flex-start;\\n    padding: 0 2rem;\\n  }\\n\\n  .card2 {\\n    flex-direction: row-reverse;\\n  }\\n\\n  .snapshot {\\n    display: flex;\\n    flex-direction: row;\\n    justify-content: center;\\n    align-items: center;\\n    width: 54%;\\n    height: 100%;\\n  }\\n\\n  .snapshot img {\\n    width: 42rem;\\n  }\\n\\n  .works__left-block {\\n    width: 100%;\\n    padding-left: 4rem;\\n    padding-top: 2rem;\\n  }\\n\\n  .block2 {\\n    padding-left: 2rem;\\n    padding-right: 2rem;\\n  }\\n\\n  .works__left-block .works__project-title {\\n    font-size: 3rem;\\n  }\\n\\n  .works__left-block .works__primary-par {\\n    width: 100%;\\n    font-size: 1.3rem;\\n    line-height: 2.2rem;\\n    padding-right: 2rem;\\n  }\\n\\n  .about-myself {\\n    flex-direction: row;\\n    justify-content: center;\\n    align-items: center;\\n    padding-left: 13rem;\\n  }\\n\\n  .about-myself__block {\\n    width: 50%;\\n    margin-right: 4rem;\\n  }\\n\\n  .about-myself__ul .langguages-ul {\\n    display: flex;\\n    flex-direction: row;\\n  }\\n\\n  .about-myself__ul .langguages-ul .lang-tags {\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: center;\\n    align-items: flex-start;\\n    width: 24%;\\n  }\\n\\n  .about-myself__primary-par {\\n    width: 100%;\\n    font-family: var(--font-sans);\\n    font-weight: 400;\\n    font-size: 1.4rem;\\n    line-height: 2.4rem;\\n  }\\n\\n  .form-container {\\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_3___ + \");\\n    background-repeat: no-repeat;\\n    background-size: contain;\\n    background-position: center center;\\n  }\\n\\n  .form-p {\\n    width: 50%;\\n  }\\n\\n  .form {\\n    width: 50%;\\n  }\\n\\n  .i-button {\\n    align-items: center;\\n  }\\n\\n  .modal__description {\\n    display: flex;\\n    flex-direction: row;\\n    justify-content: center;\\n    align-items: center;\\n    margin-bottom: 2rem;\\n  }\\n\\n  .modal__primary-par {\\n    width: 64%;\\n  }\\n\\n  .block-r {\\n    width: 36%;\\n  }\\n\\n  .modal__description .block-r .modal__tags {\\n    margin-bottom: 2rem;\\n  }\\n\\n  .modal-buttons {\\n    justify-content: left;\\n  }\\n}\\n\\n/* Large Devices, Desktops */\\n\\n@media only screen and (min-width: 1100px) {\\n  body {\\n    margin: 0 auto;\\n  }\\n\\n  .about-myself__block {\\n    width: 60%;\\n  }\\n\\n  .about-myself {\\n    padding-left: 10rem;\\n  }\\n\\n  .modal__primary-par {\\n    width: 74%;\\n    margin-right: 4rem;\\n  }\\n\\n  .block-r {\\n    width: 26%;\\n  }\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://portfolio/./src/css/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://portfolio/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://portfolio/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://portfolio/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://portfolio/./src/css/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://portfolio/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://portfolio/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://portfolio/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://portfolio/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://portfolio/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://portfolio/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ \"./src/css/style.css\");\n// ***************\n// mobile menu\n// ***************\n\n\n\nconst pImage = __webpack_require__(/*! ./img/snapshot-Portfolio_mobile.png */ \"./src/img/snapshot-Portfolio_mobile.png\");\nconst githubIcon = __webpack_require__(/*! ./img/github_icon.svg */ \"./src/img/github_icon.svg\");\nconst liveIcon = __webpack_require__(/*! ./img/like_icon.svg */ \"./src/img/like_icon.svg\");\n\nconst menu = document.querySelector('#menu-container');\nconst closeButton = document.querySelector('.close-button');\nconst hamburguer = document.querySelector('#hamburguer-button');\nconst body = document.querySelector('body');\nconst anchors = document.querySelectorAll('.mobile-menu-ul li');\n\nfunction openMenu() {\n  menu.classList.add('visible');\n  body.classList.add('overflow-hidden');\n}\n\nfunction closeMenu() {\n  menu.classList.remove('visible');\n  body.classList.remove('overflow-hidden');\n}\n\nhamburguer.addEventListener('click', openMenu);\ncloseButton.addEventListener('click', closeMenu);\nanchors.forEach((link) => {\n  link.addEventListener('click', closeMenu);\n});\n\n//* **************\n// sticky menu\n//* **************\n\nconst header = document.getElementById('header');\nconst sticky = header.offsetTop;\n\nfunction stickMenu() {\n  if (window.pageYOffset > sticky) {\n    header.classList.add('sticky');\n  } else {\n    header.classList.remove('sticky');\n  }\n}\n\nwindow.onscroll = () => { stickMenu(); };\n\n// ***************\n// works-section\n// ***************\n\nconst dataProjects = [\n  {\n    name: 'Stock Performance',\n    description: 'Stock performance is a web application to check out performance by company to see which one performs the best, based on an external API provided by Financial Modeling Prep. Built with Ract, Redux, and SCSS.',\n    descriptionPopup: 'Stock performance is a web application to check out performance by company to see which one performs the best, based on an external API provided by Financial Modeling Prep. Built with Ract, Redux, and SCSS.',\n    image: 'https://raw.githubusercontent.com/andres-condezo/stock-performance/development/src/assets/screenshot-desktop.png',\n    year: '2022',\n    role: 'Front End',\n    technologies: ['HTML', 'CSS', 'SCSS', 'JavaScript', 'React', 'Redux'],\n    liveVersion: 'https://andres-condezo.github.io/stock-performance/',\n    source: 'https://github.com/andres-condezo/stock-performance',\n  },\n  {\n    name: 'Multi-Post Stories',\n    description: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',\n    descriptionPopup: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam quod nesciunt doloremque eveniet, recusandae esse voluptatibus sapiente optio totam! Aliquam deleniti necessitatibus debitis alias magnam mollitia culpa beatae totam qui?',\n    image: pImage,\n    technologies: ['html', 'Ruby on rails', 'css', 'javaScript'],\n    liveVersion: '#',\n    source: '#',\n  },\n];\n\nfunction createCard(el) {\n  return `\n<figure class=\"snapshot\">\n  <img src=\"${el.image}\" alt=\"${el.name} project image\">\n</figure>\n<section class=\"works__left-block\">\n  <div class=\"works__primary-text\">\n    <h3 class=\"works__project-title\">${el.name}</h3>\n    <div class=\"frame-2\">\n      <div class=\"counter\"></div>\n      <span class=\"role\">${el.role}</span>\n      <div class=\"counter\"></div>\n      <span class=\"year\">${el.year}</span>\n    </div>\n  </div>\n  <p class=\"works__primary-par\">${el.description}</p>\n  <ul class=\"works__tags\">\n    <li>${el.technologies[0]}</li>\n    <li>${el.technologies[1]}</li>\n    <li>${el.technologies[2]}</li>\n  </ul>\n  <a href=\"#works__card2\" class=\"btn-transition works__action\" id=\"showModal\">See Project</a>\n</section>\n`;\n}\n\nconst myProjects = dataProjects.map((el, index) => {\n  const article = document.createElement('article');\n  article.className = 'works__card';\n  if (index % 2 === 1) {\n    article.classList.add('card2');\n  }\n  article.innerHTML = createCard(el);\n  return article;\n});\n\nconst worksSection = document.getElementById('works');\n\nfor (let i = 0; i < myProjects.length; i += 1) {\n  worksSection.appendChild(myProjects[i]);\n}\n\n// ***************\n// modal section\n// ***************\n\nfunction createModal(el) {\n  return `\n    <button type=\"button\" class=\"close-button-2\" id=\"close-button-2\">x</button>\n    <section class=\"works__left-block modal__left-block\">\n      <div class=\"works__primary-text\">\n        <h3 class=\"modal__project-title\">${el.name}</h3>\n        <div class=\"frame-2\">\n          <div class=\"counter\"></div>\n          <span class=\"role\">${el.role}</span>\n          <div class=\"counter\"></div>\n          <span class=\"year\">${el.year}</span>\n        </div>\n      </div>\n      <figure class=\"snapshot-modal\">\n        <img class=\"img-modal\" src=\"${el.image}\" alt=\"${el.name} project image\">\n      </figure>\n      <div class=\"modal__description\">\n        <p class=\"modal__primary-par\">${el.descriptionPopup}</p>\n        <div class=\"block-r\">\n          <ul class=\"works__tags modal__tags\">\n            <li>${el.technologies[0]}</li>\n            <li>${el.technologies[1]}</li>\n            <li>${el.technologies[2]}</li>\n          </ul>\n          <div class=\"modal-buttons\">\n            <a href=\"${el.liveVersion}\" class=\"btn-transition works__action modal-btn\">\n              See Live\n              <img class=\"modal-icon\" src=${liveIcon} alt=\"live demo icon\"/>\n            </a>\n            <a href=\"${el.source}\" class=\"btn-transition works__action modal-btn\">\n              See Source\n              <img class=\"modal-icon git-modal\" src=${githubIcon} alt=\"github icon\"/>\n            </a>\n          </div>\n        </div>\n      </div>\n    </section>\n`;\n}\n\nconst modalBtn = document.querySelectorAll('#showModal');\nconst modalSection = document.getElementById('modal-container');\n\nfunction openModal() {\n  modalSection.classList.add('show-modal');\n  body.classList.add('overflow-hidden');\n}\n\nfunction closeModal() {\n  modalSection.classList.remove('show-modal');\n  body.classList.remove('overflow-hidden');\n  modalSection.innerHTML = '';\n}\n\nmodalBtn.forEach((el, index) => {\n  el.addEventListener('click', () => {\n    openModal();\n    const modalArticle = document.createElement('article');\n    modalArticle.className = 'modal-card';\n    modalArticle.innerHTML = createModal(dataProjects[index]);\n    modalSection.appendChild(modalArticle);\n    const closeModalBtn = document.querySelector('#close-button-2');\n    closeModalBtn.addEventListener('click', closeModal);\n  });\n});\n\n\n//# sourceURL=webpack://portfolio/./src/index.js?");

/***/ }),

/***/ "./src/img/bg-headline.png":
/*!*********************************!*\
  !*** ./src/img/bg-headline.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"29b14de9a73d2123cc7f.png\";\n\n//# sourceURL=webpack://portfolio/./src/img/bg-headline.png?");

/***/ }),

/***/ "./src/img/contact-form-bg-d.svg":
/*!***************************************!*\
  !*** ./src/img/contact-form-bg-d.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e170950d741461ccf60a.svg\";\n\n//# sourceURL=webpack://portfolio/./src/img/contact-form-bg-d.svg?");

/***/ }),

/***/ "./src/img/form_bg_mobile.svg":
/*!************************************!*\
  !*** ./src/img/form_bg_mobile.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"fcdade1555044ea16ec0.svg\";\n\n//# sourceURL=webpack://portfolio/./src/img/form_bg_mobile.svg?");

/***/ }),

/***/ "./src/img/github_icon.svg":
/*!*********************************!*\
  !*** ./src/img/github_icon.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0a6b454201b0ea66d3c7.svg\";\n\n//# sourceURL=webpack://portfolio/./src/img/github_icon.svg?");

/***/ }),

/***/ "./src/img/header_bg_2x.png":
/*!**********************************!*\
  !*** ./src/img/header_bg_2x.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7052dc758cd36e292625.png\";\n\n//# sourceURL=webpack://portfolio/./src/img/header_bg_2x.png?");

/***/ }),

/***/ "./src/img/like_icon.svg":
/*!*******************************!*\
  !*** ./src/img/like_icon.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"52c027ed3e7128fdbdad.svg\";\n\n//# sourceURL=webpack://portfolio/./src/img/like_icon.svg?");

/***/ }),

/***/ "./src/img/snapshot-Portfolio_mobile.png":
/*!***********************************************!*\
  !*** ./src/img/snapshot-Portfolio_mobile.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"868f9a05f2d16be4e9be.png\";\n\n//# sourceURL=webpack://portfolio/./src/img/snapshot-Portfolio_mobile.png?");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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