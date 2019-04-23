(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app-shell/app-shell.component.css":
/*!***************************************************!*\
  !*** ./src/app/app-shell/app-shell.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".item {\r\n height: 300px;\r\n width: 400px;\r\n overflow: hidden;\r\n background-size: cover;\r\n}\r\n.item img {\r\n height: auto;\r\n width: auto;\r\n height: 100%;\r\n width: 100%;\r\n}\r\n.card {\r\n  width: 100%;\r\n  max-width: 300px;\r\n  min-width: 200px;\r\n  height: 400px;\r\n  margin: 10px;\r\n  border-radius: 10px;\r\n  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.24);\r\n  border: 2px solid rgba(7, 7, 7, 0.12);\r\n  font-size: 16px;\r\n  position: relative;\r\n}\r\n/*.content{\r\n  background: rgba(0,0,0,0.5);\r\n  width: 100%;\r\n  height: 100%;\r\n}*/\r\n.overlay{\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  -webkit-transform: translate( -50%, -50% );\r\n          transform: translate( -50%, -50% );\r\n  width: 100%;\r\n  height: 100%;\r\n  background: rgba(0,0,0,0.5);\r\n  opacity: 0.2;\r\n}\r\n.caption {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  -webkit-transform: translate( -50%, -50% );\r\n          transform: translate( -50%, -50% );\r\n  text-align: center;\r\n  color: white;\r\n  font-weight: bold;\r\n}\r\n/* copied from demo github - https://github.com/ganlanyuan/tiny-slider/tree/master/demo */\r\nbody { font-family: \"Helvetica Neue\", Arial, Helvetica, sans-serif; margin: 0; padding: 0; }\r\nli { list-style: none; }\r\nul, ol, li { margin: 0; padding: 0; }\r\n/*.container {\r\n  max-width: 900px;\r\n  margin: 0 auto;\r\n}*/\r\npre[class*=\"language-\"] > code[data-language] { overflow: auto !important; }\r\nsection { margin: 50px 0; }\r\nh1 { font-size: 45px; }\r\nh2 { \r\n  padding-top: 60px;\r\n  text-align: center; \r\n}\r\n@media (min-width: 300px) and (max-width: 799px) {\r\n  h2 { padding-top: 20%; }\r\n}\r\n@media (min-width: 800px) {\r\n  h2 { padding-top: 160px; }\r\n}\r\np { \r\n  margin: 0;\r\n  padding: 0.8em 0;\r\n  line-height: 1.4;\r\n  font-weight: 300;\r\n  text-align: center;\r\n}\r\na:focus {\r\n  outline: 1px solid red;\r\n}\r\nimg { max-width: 100%; }\r\nimg:not(.tns-lazy-img), .lazyload img { height: auto; }\r\n.autoWidth img { max-width: none; }\r\n.autoHeight img { width: 100%; }\r\n.img {\r\n  font-size: 100px;\r\n  font-weight: 100;\r\n  color: #fff;\r\n  text-align: center;\r\n}\r\n.img a {\r\n  display: block;\r\n  padding: 22% 0;\r\n  color: inherit;\r\n  text-decoration: none;\r\n}\r\n.visually-hidden {\r\n  position: fixed;\r\n  left: -10000px;\r\n  opacity: 0;\r\n}\r\n/* nav */\r\n.nav.active ul { left: 0; }\r\n.nav.active .nav-toggle-handle { left: 17em; }\r\n.nav.active .nav-toggle-handle:before { display: inline-block; }\r\n.nav.active .nav-toggle-handle:after { display: none; }\r\n.nav ul {\r\n  position: fixed;\r\n  top: 0;\r\n  left: -17em;\r\n  z-index: 100;\r\n  width: 17em;\r\n  height: 1000px;\r\n  height: 100vh;\r\n  background-color: #fff;\r\n  box-shadow: 2px 0 15px rgba(0, 0, 0, 0.15);\r\n  transition: left 0.25s;\r\n  overflow-y: auto;\r\n}\r\n.nav a {\r\n  display: block;\r\n  padding: 0.7em 1em;\r\n  color: inherit;\r\n  text-decoration: none;\r\n}\r\n.nav a:hover { background-color: #F3F3F3; }\r\n.nav .active {\r\n  color: #fff;\r\n  background-color: #af23ff !important;\r\n}\r\n.nav-toggle-handle {\r\n  position: fixed;\r\n  transition: left 0.25s;\r\n  left: 0;\r\n  top: 0;\r\n  z-index: 100;\r\n  padding: 10px;\r\n  color: #fff;\r\n  background-color: #af23ff;\r\n  cursor: pointer;\r\n}\r\n.nav-toggle-handle:before { \r\n  display: none;\r\n  padding-right: 5px;\r\n  content: '◄'; \r\n  font-size: 0.8em;\r\n}\r\n.nav-toggle-handle:after { \r\n  padding-left: 5px;\r\n  content: '►'; \r\n  font-size: 0.8em;\r\n}\r\n.img-1 { background: #D6D65B; background: hsl(60, 60%, 60%); }\r\n.img-2 { background: #5BD6AD; background: hsl(160, 60%, 60%); }\r\n.img-3 { background: #5B99D6; background: hsl(210, 60%, 60%); }\r\n.img-4 { background: #D65BC1; background: hsl(310, 60%, 60%); }\r\n.img-5 { background: #70D65B; background: hsl(110, 60%, 60%); }\r\n.img-6 { background: #D65B5B; background: hsl(0, 60%, 60%); }\r\n.img-7 { background: #D6995B; background: hsl(30, 60%, 60%); }\r\n.img-8 { background: #705BD6; background: hsl(250, 60%, 60%); }\r\n.customize-tools { position: relative; }\r\n.thumbnails { \r\n  margin: 20px 0;\r\n  text-align: center;\r\n}\r\n.thumbnails li {\r\n  display: inline-block;\r\n  cursor: pointer;\r\n  border: 5px solid #fff;\r\n}\r\n.thumbnails .tns-nav-active {\r\n  background: none;\r\n  border-color: #000;\r\n}\r\n.thumbnails li { width: 50px; }\r\n.thumbnails img { vertical-align: bottom; height: auto; max-height: 50px; }\r\n.controls { text-align: center; }\r\n.controls li {\r\n  display: block;\r\n  position: absolute;\r\n  top: 50%;\r\n  height: 60px;\r\n  line-height: 60px;\r\n  margin-top: -30px;\r\n  padding: 0 15px;\r\n  cursor: pointer;\r\n  transition: background 0.3s;\r\n}\r\n.controls li img { display: inline-block; vertical-align: middle; }\r\n.controls .prev { left: 0; }\r\n.controls .next { right: 0; }\r\n.controls li:hover { background: #f2f2f2; }\r\n.tns-controls { text-align: center; margin-bottom: 10px; }\r\n.tns-controls [aria-controls] {\r\n  font-size: 15px;\r\n  margin: 0 5px;\r\n  padding: 0 1em;\r\n  height: 2.5em;\r\n  color: #000;\r\n  background: #66CCFF;\r\n  border-radius: 3px;\r\n  border: 0;\r\n}\r\n.lt-ie9 .tns-controls > [aria-controls] {\r\n  line-height: 2.5em;\r\n}\r\n[data-action] {\r\n  display: block;\r\n  margin: 10px auto;\r\n  font-size: 17px;\r\n  min-width: 3em;\r\n  text-align: center;\r\n  background: transparent;\r\n  border: 0;\r\n}\r\n.tns-controls [disabled] { \r\n  color: #999999;\r\n  background: #B3B3B3; \r\n  cursor: not-allowed !important;\r\n}\r\n.tns-nav {\r\n  text-align: center;\r\n  margin: 10px 0;\r\n}\r\n.tns-nav > [aria-controls] {\r\n  width: 9px;\r\n  height: 9px;\r\n  padding: 0;\r\n  margin: 0 5px;\r\n  border-radius: 50%;\r\n  background: #ddd;\r\n  border: 0;\r\n}\r\n.tns-nav > .tns-nav-active { background: #999; }\r\n.playbutton-wrapper { text-align: center; }\r\n.playbutton-wrapper button { height: 34px; padding: 0 10px; font-size: 14px; background: #fff; border-radius: 3px; border: 1px solid  #ccc; cursor: pointer; }\r\n.wrapper { padding: 0 5em; }\r\n.suite-container .title, \r\n.suite-container .subtitle, \r\n.suite-container li { padding: 5px 10px; }\r\n.suite-container li {\r\n  font-size: 12px;\r\n  line-height: 1.4;\r\n  background: #f5f5f5;\r\n}\r\n.suite-container .title { font-size: 14px; font-weight: bold; background: #8acac6; text-transform: capitalize; }\r\n.suite-container .subtitle { font-size: 13px; font-weight: bold; background: #dedede; text-transform: capitalize; }\r\n.suite-container .fail { background: #FFADE2; }\r\n[class*=\"vertical\"] .img { padding: 30px 0; }\r\n[class*=\"vertical\"] .img:before { content: ''; display: inline-block; width: 1px; margin-right: -1px; height: 100%; vertical-align: middle; }\r\n[class*=\"vertical\"] .img a { display: inline-block; padding: 0; }\r\n[class*=\"vertical\"] .img-1 { height: 137px; }\r\n[class*=\"vertical\"] .img-2 { height: 122px; }\r\n[class*=\"vertical\"] .img-3 { height: 143px; }\r\n[class*=\"vertical\"] .img-4 { height: 325px; }\r\n[class*=\"vertical\"] .img-5 { height: 140px; }\r\n[class*=\"vertical\"] .img-6 { height: 119px; }\r\n[class*=\"vertical\"] .img-7 { height: 223px; }\r\n[class*=\"vertical\"] .img-8 { height: 164px; }\r\n/*[class*=\"vertical\"] p { display: none; }*/\r\n/*.animation .img-1 { height: 137px; }\r\n.animation .img-2 { height: 122px; }\r\n.animation .img-3 { height: 143px; }\r\n.animation .img-4 { height: 325px; }\r\n.animation .img-5 { height: 140px; }\r\n.animation .img-6 { height: 119px; }\r\n.animation .img-7 { height: 223px; }\r\n.animation .img-8 { height: 164px; }*/\r\n/* reset prism */\r\npre[class*=\"language-\"] { margin: 0; }\r\n/* test results */\r\n.test-results {\r\n  line-height: 1.4;\r\n  padding: 20px 10%;\r\n  background-color: #f2f2f2;\r\n}\r\n/* go to */\r\n.goto-controls {\r\n  margin-bottom: 10px;\r\n  text-align: center;\r\n}\r\n.goto-controls input,\r\n.goto-controls .button {\r\n  display: inline-block;\r\n  font-size: 14px;\r\n  height: 2.6em;\r\n  line-height: 2.6;\r\n  padding: 0 1em;\r\n  box-sizing: border-box;\r\n  vertical-align: middle;\r\n}\r\n.goto-controls input {\r\n  border: 1px solid  #ccc;\r\n}\r\n.goto-controls .button {\r\n  min-width: 4em;\r\n  border: none;\r\n  color: #fff;\r\n  background-color: #333;\r\n  cursor: pointer;\r\n}\r\n/* test results */\r\n.test-results { line-height: 1.6; }\r\n/*.test-results .title { font-weight: bold; text-transform: capitalize; }\r\n.test-results .title:nth-child(n+2) { margin-top: 1em; }\r\n.test-results [class*=\"item\"] { margin-left: 1em; font-size: 0.9em; }\r\n.test-results [class*=\"item\"] { font-weight: 300; }\r\n.test-results [class*=\"item\"]:after { margin-left: 0.5em; }\r\n.test-results .item-success { color: #0EB80E; }\r\n.test-results .item-success:after { content: '✓'; }\r\n.test-results .item-fail { color: #ED1E1E; }\r\n.test-results .item-fail:after { content: '✗'; }\r\n.test-results .item-comment { font-style: italic; color: #666; }\r\n.test-results .item-notsure:after { content: '？'; }\r\n.test-results .item-running:after { \r\n  display: inline-block;\r\n  height: 16px;\r\n  content: url('../images/pinwheel.svg'); \r\n  vertical-align: middle; \r\n}*/\r\n.customize-tools [hidden] { display: none; }\r\n/* https://daneden.github.io/animate.css/ */\r\n@-webkit-keyframes jello {\r\n  from,\r\n  11.1%,\r\n  to {\r\n    -webkit-transform: translate3d(0, 0, 0);\r\n    transform: translate3d(0, 0, 0);\r\n  }\r\n\r\n  22.2% {\r\n    -webkit-transform: skewX(-12.5deg) skewY(-12.5deg);\r\n    transform: skewX(-12.5deg) skewY(-12.5deg);\r\n  }\r\n\r\n  33.3% {\r\n    -webkit-transform: skewX(6.25deg) skewY(6.25deg);\r\n    transform: skewX(6.25deg) skewY(6.25deg);\r\n  }\r\n\r\n  44.4% {\r\n    -webkit-transform: skewX(-3.125deg) skewY(-3.125deg);\r\n    transform: skewX(-3.125deg) skewY(-3.125deg);\r\n  }\r\n\r\n  55.5% {\r\n    -webkit-transform: skewX(1.5625deg) skewY(1.5625deg);\r\n    transform: skewX(1.5625deg) skewY(1.5625deg);\r\n  }\r\n\r\n  66.6% {\r\n    -webkit-transform: skewX(-0.78125deg) skewY(-0.78125deg);\r\n    transform: skewX(-0.78125deg) skewY(-0.78125deg);\r\n  }\r\n\r\n  77.7% {\r\n    -webkit-transform: skewX(0.390625deg) skewY(0.390625deg);\r\n    transform: skewX(0.390625deg) skewY(0.390625deg);\r\n  }\r\n\r\n  88.8% {\r\n    -webkit-transform: skewX(-0.1953125deg) skewY(-0.1953125deg);\r\n    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);\r\n  }\r\n}\r\n@keyframes jello {\r\n  from,\r\n  11.1%,\r\n  to {\r\n    -webkit-transform: translate3d(0, 0, 0);\r\n    transform: translate3d(0, 0, 0);\r\n  }\r\n\r\n  22.2% {\r\n    -webkit-transform: skewX(-12.5deg) skewY(-12.5deg);\r\n    transform: skewX(-12.5deg) skewY(-12.5deg);\r\n  }\r\n\r\n  33.3% {\r\n    -webkit-transform: skewX(6.25deg) skewY(6.25deg);\r\n    transform: skewX(6.25deg) skewY(6.25deg);\r\n  }\r\n\r\n  44.4% {\r\n    -webkit-transform: skewX(-3.125deg) skewY(-3.125deg);\r\n    transform: skewX(-3.125deg) skewY(-3.125deg);\r\n  }\r\n\r\n  55.5% {\r\n    -webkit-transform: skewX(1.5625deg) skewY(1.5625deg);\r\n    transform: skewX(1.5625deg) skewY(1.5625deg);\r\n  }\r\n\r\n  66.6% {\r\n    -webkit-transform: skewX(-0.78125deg) skewY(-0.78125deg);\r\n    transform: skewX(-0.78125deg) skewY(-0.78125deg);\r\n  }\r\n\r\n  77.7% {\r\n    -webkit-transform: skewX(0.390625deg) skewY(0.390625deg);\r\n    transform: skewX(0.390625deg) skewY(0.390625deg);\r\n  }\r\n\r\n  88.8% {\r\n    -webkit-transform: skewX(-0.1953125deg) skewY(-0.1953125deg);\r\n    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);\r\n  }\r\n}\r\n.jello {\r\n  -webkit-animation-name: jello;\r\n  animation-name: jello;\r\n  -webkit-transform-origin: center;\r\n  transform-origin: center;\r\n}\r\n@-webkit-keyframes rollOut {\r\n  from {\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    -webkit-transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);\r\n    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);\r\n  }\r\n}\r\n@keyframes rollOut {\r\n  from {\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    -webkit-transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);\r\n    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);\r\n  }\r\n}\r\n.rollOut {\r\n  -webkit-animation-name: rollOut;\r\n  animation-name: rollOut;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLXNoZWxsL2FwcC1zaGVsbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsYUFBYTtDQUNiLFlBQVk7Q0FDWixnQkFBZ0I7Q0FDaEIsc0JBQXNCO0FBQ3ZCO0FBQ0E7Q0FDQyxZQUFZO0NBQ1osV0FBVztDQUNYLFlBQVk7Q0FDWixXQUFXO0FBQ1o7QUFFQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLDRDQUE0QztFQUM1QyxxQ0FBcUM7RUFDckMsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjtBQUVBOzs7O0VBSUU7QUFFRjtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULDBDQUFrQztVQUFsQyxrQ0FBa0M7RUFDbEMsV0FBVztFQUNYLFlBQVk7RUFDWiwyQkFBMkI7RUFDM0IsWUFBWTtBQUNkO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCwwQ0FBa0M7VUFBbEMsa0NBQWtDO0VBQ2xDLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osaUJBQWlCO0FBQ25CO0FBR0EseUZBQXlGO0FBRXpGLE9BQU8sMkRBQTJELEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRTtBQUMzRixLQUFLLGdCQUFnQixFQUFFO0FBQ3ZCLGFBQWEsU0FBUyxFQUFFLFVBQVUsRUFBRTtBQUNwQzs7O0VBR0U7QUFDRixnREFBZ0QseUJBQXlCLEVBQUU7QUFDM0UsVUFBVSxjQUFjLEVBQUU7QUFDMUIsS0FBSyxlQUFlLEVBQUU7QUFDdEI7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxLQUFLLGdCQUFnQixFQUFFO0FBQ3pCO0FBQ0E7RUFDRSxLQUFLLGtCQUFrQixFQUFFO0FBQzNCO0FBQ0E7RUFDRSxTQUFTO0VBQ1QsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixnQkFBZ0I7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QUVBO0lBQ0Usb0RBQW9EO0lBQ3BELDRDQUE0QztFQUM5Qzs7RUFFQTtJQUNFLHdEQUF3RDtJQUN4RCxnREFBZ0Q7RUFDbEQ7O0VBRUE7SUFDRSx3REFBd0Q7SUFDeEQsZ0RBQWdEO0VBQ2xEOztFQUVBO0lBQ0UsNERBQTREO0lBQzVELG9EQUFvRDtFQUN0RDtBQUNGO0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IscUJBQXFCO0VBQ3JCLGdDQUFnQztFQUNoQyx3QkFBd0I7QUFDMUI7QUFFQTtFQUNFO0lBQ0UsVUFBVTtFQUNaOztFQUVBO0lBQ0UsVUFBVTtJQUNWLG9FQUFvRTtJQUNwRSw0REFBNEQ7RUFDOUQ7QUFDRjtBQUVBO0VBQ0U7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxVQUFVO0lBQ1Ysb0VBQW9FO0lBQ3BFLDREQUE0RDtFQUM5RDtBQUNGO0FBRUE7RUFDRSwrQkFBK0I7RUFDL0IsdUJBQXVCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvYXBwLXNoZWxsL2FwcC1zaGVsbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLml0ZW0ge1xyXG4gaGVpZ2h0OiAzMDBweDtcclxuIHdpZHRoOiA0MDBweDtcclxuIG92ZXJmbG93OiBoaWRkZW47XHJcbiBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcbi5pdGVtIGltZyB7XHJcbiBoZWlnaHQ6IGF1dG87XHJcbiB3aWR0aDogYXV0bztcclxuIGhlaWdodDogMTAwJTtcclxuIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiAzMDBweDtcclxuICBtaW4td2lkdGg6IDIwMHB4O1xyXG4gIGhlaWdodDogNDAwcHg7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYm94LXNoYWRvdzogMHB4IDJweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yNCk7XHJcbiAgYm9yZGVyOiAycHggc29saWQgcmdiYSg3LCA3LCA3LCAwLjEyKTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4vKi5jb250ZW50e1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC41KTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn0qL1xyXG5cclxuLm92ZXJsYXl7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSggLTUwJSwgLTUwJSApO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuNSk7XHJcbiAgb3BhY2l0eTogMC4yO1xyXG59XHJcblxyXG4uY2FwdGlvbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSggLTUwJSwgLTUwJSApO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcblxyXG4vKiBjb3BpZWQgZnJvbSBkZW1vIGdpdGh1YiAtIGh0dHBzOi8vZ2l0aHViLmNvbS9nYW5sYW55dWFuL3Rpbnktc2xpZGVyL3RyZWUvbWFzdGVyL2RlbW8gKi9cclxuXHJcbmJvZHkgeyBmb250LWZhbWlseTogXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmOyBtYXJnaW46IDA7IHBhZGRpbmc6IDA7IH1cclxubGkgeyBsaXN0LXN0eWxlOiBub25lOyB9XHJcbnVsLCBvbCwgbGkgeyBtYXJnaW46IDA7IHBhZGRpbmc6IDA7IH1cclxuLyouY29udGFpbmVyIHtcclxuICBtYXgtd2lkdGg6IDkwMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59Ki9cclxucHJlW2NsYXNzKj1cImxhbmd1YWdlLVwiXSA+IGNvZGVbZGF0YS1sYW5ndWFnZV0geyBvdmVyZmxvdzogYXV0byAhaW1wb3J0YW50OyB9XHJcbnNlY3Rpb24geyBtYXJnaW46IDUwcHggMDsgfVxyXG5oMSB7IGZvbnQtc2l6ZTogNDVweDsgfVxyXG5oMiB7IFxyXG4gIHBhZGRpbmctdG9wOiA2MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgXHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDMwMHB4KSBhbmQgKG1heC13aWR0aDogNzk5cHgpIHtcclxuICBoMiB7IHBhZGRpbmctdG9wOiAyMCU7IH1cclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogODAwcHgpIHtcclxuICBoMiB7IHBhZGRpbmctdG9wOiAxNjBweDsgfVxyXG59XHJcbnAgeyBcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMC44ZW0gMDtcclxuICBsaW5lLWhlaWdodDogMS40O1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbmE6Zm9jdXMge1xyXG4gIG91dGxpbmU6IDFweCBzb2xpZCByZWQ7XHJcbn1cclxuaW1nIHsgbWF4LXdpZHRoOiAxMDAlOyB9XHJcbmltZzpub3QoLnRucy1sYXp5LWltZyksIC5sYXp5bG9hZCBpbWcgeyBoZWlnaHQ6IGF1dG87IH1cclxuLmF1dG9XaWR0aCBpbWcgeyBtYXgtd2lkdGg6IG5vbmU7IH1cclxuLmF1dG9IZWlnaHQgaW1nIHsgd2lkdGg6IDEwMCU7IH1cclxuLmltZyB7XHJcbiAgZm9udC1zaXplOiAxMDBweDtcclxuICBmb250LXdlaWdodDogMTAwO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uaW1nIGEge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBhZGRpbmc6IDIyJSAwO1xyXG4gIGNvbG9yOiBpbmhlcml0O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG4udmlzdWFsbHktaGlkZGVuIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgbGVmdDogLTEwMDAwcHg7XHJcbiAgb3BhY2l0eTogMDtcclxufVxyXG5cclxuLyogbmF2ICovXHJcbi5uYXYuYWN0aXZlIHVsIHsgbGVmdDogMDsgfVxyXG4ubmF2LmFjdGl2ZSAubmF2LXRvZ2dsZS1oYW5kbGUgeyBsZWZ0OiAxN2VtOyB9XHJcbi5uYXYuYWN0aXZlIC5uYXYtdG9nZ2xlLWhhbmRsZTpiZWZvcmUgeyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cclxuLm5hdi5hY3RpdmUgLm5hdi10b2dnbGUtaGFuZGxlOmFmdGVyIHsgZGlzcGxheTogbm9uZTsgfVxyXG4ubmF2IHVsIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IC0xN2VtO1xyXG4gIHotaW5kZXg6IDEwMDtcclxuICB3aWR0aDogMTdlbTtcclxuICBoZWlnaHQ6IDEwMDBweDtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAycHggMCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgYm94LXNoYWRvdzogMnB4IDAgMTVweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG4gIHRyYW5zaXRpb246IGxlZnQgMC4yNXM7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG4ubmF2IGEge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBhZGRpbmc6IDAuN2VtIDFlbTtcclxuICBjb2xvcjogaW5oZXJpdDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuLm5hdiBhOmhvdmVyIHsgYmFja2dyb3VuZC1jb2xvcjogI0YzRjNGMzsgfVxyXG4ubmF2IC5hY3RpdmUge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNhZjIzZmYgIWltcG9ydGFudDtcclxufVxyXG4ubmF2LXRvZ2dsZS1oYW5kbGUge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0cmFuc2l0aW9uOiBsZWZ0IDAuMjVzO1xyXG4gIGxlZnQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIHotaW5kZXg6IDEwMDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNhZjIzZmY7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5uYXYtdG9nZ2xlLWhhbmRsZTpiZWZvcmUgeyBcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICBjb250ZW50OiAn4peEJzsgXHJcbiAgZm9udC1zaXplOiAwLjhlbTtcclxufVxyXG4ubmF2LXRvZ2dsZS1oYW5kbGU6YWZ0ZXIgeyBcclxuICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICBjb250ZW50OiAn4pa6JzsgXHJcbiAgZm9udC1zaXplOiAwLjhlbTtcclxufVxyXG5cclxuLmltZy0xIHsgYmFja2dyb3VuZDogI0Q2RDY1QjsgYmFja2dyb3VuZDogaHNsKDYwLCA2MCUsIDYwJSk7IH1cclxuLmltZy0yIHsgYmFja2dyb3VuZDogIzVCRDZBRDsgYmFja2dyb3VuZDogaHNsKDE2MCwgNjAlLCA2MCUpOyB9XHJcbi5pbWctMyB7IGJhY2tncm91bmQ6ICM1Qjk5RDY7IGJhY2tncm91bmQ6IGhzbCgyMTAsIDYwJSwgNjAlKTsgfVxyXG4uaW1nLTQgeyBiYWNrZ3JvdW5kOiAjRDY1QkMxOyBiYWNrZ3JvdW5kOiBoc2woMzEwLCA2MCUsIDYwJSk7IH1cclxuLmltZy01IHsgYmFja2dyb3VuZDogIzcwRDY1QjsgYmFja2dyb3VuZDogaHNsKDExMCwgNjAlLCA2MCUpOyB9XHJcbi5pbWctNiB7IGJhY2tncm91bmQ6ICNENjVCNUI7IGJhY2tncm91bmQ6IGhzbCgwLCA2MCUsIDYwJSk7IH1cclxuLmltZy03IHsgYmFja2dyb3VuZDogI0Q2OTk1QjsgYmFja2dyb3VuZDogaHNsKDMwLCA2MCUsIDYwJSk7IH1cclxuLmltZy04IHsgYmFja2dyb3VuZDogIzcwNUJENjsgYmFja2dyb3VuZDogaHNsKDI1MCwgNjAlLCA2MCUpOyB9XHJcbi5jdXN0b21pemUtdG9vbHMgeyBwb3NpdGlvbjogcmVsYXRpdmU7IH1cclxuLnRodW1ibmFpbHMgeyBcclxuICBtYXJnaW46IDIwcHggMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnRodW1ibmFpbHMgbGkge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYm9yZGVyOiA1cHggc29saWQgI2ZmZjtcclxufVxyXG4udGh1bWJuYWlscyAudG5zLW5hdi1hY3RpdmUge1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMDAwO1xyXG59XHJcbi50aHVtYm5haWxzIGxpIHsgd2lkdGg6IDUwcHg7IH1cclxuLnRodW1ibmFpbHMgaW1nIHsgdmVydGljYWwtYWxpZ246IGJvdHRvbTsgaGVpZ2h0OiBhdXRvOyBtYXgtaGVpZ2h0OiA1MHB4OyB9XHJcbi5jb250cm9scyB7IHRleHQtYWxpZ246IGNlbnRlcjsgfVxyXG4uY29udHJvbHMgbGkge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDYwcHg7XHJcbiAgbWFyZ2luLXRvcDogLTMwcHg7XHJcbiAgcGFkZGluZzogMCAxNXB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuM3M7XHJcbn1cclxuLmNvbnRyb2xzIGxpIGltZyB7IGRpc3BsYXk6IGlubGluZS1ibG9jazsgdmVydGljYWwtYWxpZ246IG1pZGRsZTsgfVxyXG4uY29udHJvbHMgLnByZXYgeyBsZWZ0OiAwOyB9XHJcbi5jb250cm9scyAubmV4dCB7IHJpZ2h0OiAwOyB9XHJcbi5jb250cm9scyBsaTpob3ZlciB7IGJhY2tncm91bmQ6ICNmMmYyZjI7IH1cclxuXHJcbi50bnMtY29udHJvbHMgeyB0ZXh0LWFsaWduOiBjZW50ZXI7IG1hcmdpbi1ib3R0b206IDEwcHg7IH1cclxuLnRucy1jb250cm9scyBbYXJpYS1jb250cm9sc10ge1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBtYXJnaW46IDAgNXB4O1xyXG4gIHBhZGRpbmc6IDAgMWVtO1xyXG4gIGhlaWdodDogMi41ZW07XHJcbiAgY29sb3I6ICMwMDA7XHJcbiAgYmFja2dyb3VuZDogIzY2Q0NGRjtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgYm9yZGVyOiAwO1xyXG59XHJcbi5sdC1pZTkgLnRucy1jb250cm9scyA+IFthcmlhLWNvbnRyb2xzXSB7XHJcbiAgbGluZS1oZWlnaHQ6IDIuNWVtO1xyXG59XHJcbltkYXRhLWFjdGlvbl0ge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbjogMTBweCBhdXRvO1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxuICBtaW4td2lkdGg6IDNlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyOiAwO1xyXG59XHJcbi50bnMtY29udHJvbHMgW2Rpc2FibGVkXSB7IFxyXG4gIGNvbG9yOiAjOTk5OTk5O1xyXG4gIGJhY2tncm91bmQ6ICNCM0IzQjM7IFxyXG4gIGN1cnNvcjogbm90LWFsbG93ZWQgIWltcG9ydGFudDtcclxufVxyXG4udG5zLW5hdiB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogMTBweCAwO1xyXG59XHJcbi50bnMtbmF2ID4gW2FyaWEtY29udHJvbHNdIHtcclxuICB3aWR0aDogOXB4O1xyXG4gIGhlaWdodDogOXB4O1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwIDVweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYmFja2dyb3VuZDogI2RkZDtcclxuICBib3JkZXI6IDA7XHJcbn1cclxuLnRucy1uYXYgPiAudG5zLW5hdi1hY3RpdmUgeyBiYWNrZ3JvdW5kOiAjOTk5OyB9XHJcbi5wbGF5YnV0dG9uLXdyYXBwZXIgeyB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cclxuLnBsYXlidXR0b24td3JhcHBlciBidXR0b24geyBoZWlnaHQ6IDM0cHg7IHBhZGRpbmc6IDAgMTBweDsgZm9udC1zaXplOiAxNHB4OyBiYWNrZ3JvdW5kOiAjZmZmOyBib3JkZXItcmFkaXVzOiAzcHg7IGJvcmRlcjogMXB4IHNvbGlkICAjY2NjOyBjdXJzb3I6IHBvaW50ZXI7IH1cclxuLndyYXBwZXIgeyBwYWRkaW5nOiAwIDVlbTsgfVxyXG4uc3VpdGUtY29udGFpbmVyIC50aXRsZSwgXHJcbi5zdWl0ZS1jb250YWluZXIgLnN1YnRpdGxlLCBcclxuLnN1aXRlLWNvbnRhaW5lciBsaSB7IHBhZGRpbmc6IDVweCAxMHB4OyB9XHJcbi5zdWl0ZS1jb250YWluZXIgbGkge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBsaW5lLWhlaWdodDogMS40O1xyXG4gIGJhY2tncm91bmQ6ICNmNWY1ZjU7XHJcbn1cclxuLnN1aXRlLWNvbnRhaW5lciAudGl0bGUgeyBmb250LXNpemU6IDE0cHg7IGZvbnQtd2VpZ2h0OiBib2xkOyBiYWNrZ3JvdW5kOiAjOGFjYWM2OyB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTsgfVxyXG4uc3VpdGUtY29udGFpbmVyIC5zdWJ0aXRsZSB7IGZvbnQtc2l6ZTogMTNweDsgZm9udC13ZWlnaHQ6IGJvbGQ7IGJhY2tncm91bmQ6ICNkZWRlZGU7IHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplOyB9XHJcbi5zdWl0ZS1jb250YWluZXIgLmZhaWwgeyBiYWNrZ3JvdW5kOiAjRkZBREUyOyB9XHJcblxyXG5bY2xhc3MqPVwidmVydGljYWxcIl0gLmltZyB7IHBhZGRpbmc6IDMwcHggMDsgfVxyXG5bY2xhc3MqPVwidmVydGljYWxcIl0gLmltZzpiZWZvcmUgeyBjb250ZW50OiAnJzsgZGlzcGxheTogaW5saW5lLWJsb2NrOyB3aWR0aDogMXB4OyBtYXJnaW4tcmlnaHQ6IC0xcHg7IGhlaWdodDogMTAwJTsgdmVydGljYWwtYWxpZ246IG1pZGRsZTsgfVxyXG5bY2xhc3MqPVwidmVydGljYWxcIl0gLmltZyBhIHsgZGlzcGxheTogaW5saW5lLWJsb2NrOyBwYWRkaW5nOiAwOyB9XHJcbltjbGFzcyo9XCJ2ZXJ0aWNhbFwiXSAuaW1nLTEgeyBoZWlnaHQ6IDEzN3B4OyB9XHJcbltjbGFzcyo9XCJ2ZXJ0aWNhbFwiXSAuaW1nLTIgeyBoZWlnaHQ6IDEyMnB4OyB9XHJcbltjbGFzcyo9XCJ2ZXJ0aWNhbFwiXSAuaW1nLTMgeyBoZWlnaHQ6IDE0M3B4OyB9XHJcbltjbGFzcyo9XCJ2ZXJ0aWNhbFwiXSAuaW1nLTQgeyBoZWlnaHQ6IDMyNXB4OyB9XHJcbltjbGFzcyo9XCJ2ZXJ0aWNhbFwiXSAuaW1nLTUgeyBoZWlnaHQ6IDE0MHB4OyB9XHJcbltjbGFzcyo9XCJ2ZXJ0aWNhbFwiXSAuaW1nLTYgeyBoZWlnaHQ6IDExOXB4OyB9XHJcbltjbGFzcyo9XCJ2ZXJ0aWNhbFwiXSAuaW1nLTcgeyBoZWlnaHQ6IDIyM3B4OyB9XHJcbltjbGFzcyo9XCJ2ZXJ0aWNhbFwiXSAuaW1nLTggeyBoZWlnaHQ6IDE2NHB4OyB9XHJcbi8qW2NsYXNzKj1cInZlcnRpY2FsXCJdIHAgeyBkaXNwbGF5OiBub25lOyB9Ki9cclxuXHJcbi8qLmFuaW1hdGlvbiAuaW1nLTEgeyBoZWlnaHQ6IDEzN3B4OyB9XHJcbi5hbmltYXRpb24gLmltZy0yIHsgaGVpZ2h0OiAxMjJweDsgfVxyXG4uYW5pbWF0aW9uIC5pbWctMyB7IGhlaWdodDogMTQzcHg7IH1cclxuLmFuaW1hdGlvbiAuaW1nLTQgeyBoZWlnaHQ6IDMyNXB4OyB9XHJcbi5hbmltYXRpb24gLmltZy01IHsgaGVpZ2h0OiAxNDBweDsgfVxyXG4uYW5pbWF0aW9uIC5pbWctNiB7IGhlaWdodDogMTE5cHg7IH1cclxuLmFuaW1hdGlvbiAuaW1nLTcgeyBoZWlnaHQ6IDIyM3B4OyB9XHJcbi5hbmltYXRpb24gLmltZy04IHsgaGVpZ2h0OiAxNjRweDsgfSovXHJcblxyXG4vKiByZXNldCBwcmlzbSAqL1xyXG5wcmVbY2xhc3MqPVwibGFuZ3VhZ2UtXCJdIHsgbWFyZ2luOiAwOyB9XHJcblxyXG4vKiB0ZXN0IHJlc3VsdHMgKi9cclxuLnRlc3QtcmVzdWx0cyB7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNDtcclxuICBwYWRkaW5nOiAyMHB4IDEwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xyXG59XHJcblxyXG4vKiBnbyB0byAqL1xyXG4uZ290by1jb250cm9scyB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmdvdG8tY29udHJvbHMgaW5wdXQsXHJcbi5nb3RvLWNvbnRyb2xzIC5idXR0b24ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgaGVpZ2h0OiAyLjZlbTtcclxuICBsaW5lLWhlaWdodDogMi42O1xyXG4gIHBhZGRpbmc6IDAgMWVtO1xyXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcbi5nb3RvLWNvbnRyb2xzIGlucHV0IHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAgI2NjYztcclxufVxyXG4uZ290by1jb250cm9scyAuYnV0dG9uIHtcclxuICBtaW4td2lkdGg6IDRlbTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi8qIHRlc3QgcmVzdWx0cyAqL1xyXG4udGVzdC1yZXN1bHRzIHsgbGluZS1oZWlnaHQ6IDEuNjsgfVxyXG4vKi50ZXN0LXJlc3VsdHMgLnRpdGxlIHsgZm9udC13ZWlnaHQ6IGJvbGQ7IHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplOyB9XHJcbi50ZXN0LXJlc3VsdHMgLnRpdGxlOm50aC1jaGlsZChuKzIpIHsgbWFyZ2luLXRvcDogMWVtOyB9XHJcbi50ZXN0LXJlc3VsdHMgW2NsYXNzKj1cIml0ZW1cIl0geyBtYXJnaW4tbGVmdDogMWVtOyBmb250LXNpemU6IDAuOWVtOyB9XHJcbi50ZXN0LXJlc3VsdHMgW2NsYXNzKj1cIml0ZW1cIl0geyBmb250LXdlaWdodDogMzAwOyB9XHJcbi50ZXN0LXJlc3VsdHMgW2NsYXNzKj1cIml0ZW1cIl06YWZ0ZXIgeyBtYXJnaW4tbGVmdDogMC41ZW07IH1cclxuLnRlc3QtcmVzdWx0cyAuaXRlbS1zdWNjZXNzIHsgY29sb3I6ICMwRUI4MEU7IH1cclxuLnRlc3QtcmVzdWx0cyAuaXRlbS1zdWNjZXNzOmFmdGVyIHsgY29udGVudDogJ+Kckyc7IH1cclxuLnRlc3QtcmVzdWx0cyAuaXRlbS1mYWlsIHsgY29sb3I6ICNFRDFFMUU7IH1cclxuLnRlc3QtcmVzdWx0cyAuaXRlbS1mYWlsOmFmdGVyIHsgY29udGVudDogJ+Kclyc7IH1cclxuLnRlc3QtcmVzdWx0cyAuaXRlbS1jb21tZW50IHsgZm9udC1zdHlsZTogaXRhbGljOyBjb2xvcjogIzY2NjsgfVxyXG4udGVzdC1yZXN1bHRzIC5pdGVtLW5vdHN1cmU6YWZ0ZXIgeyBjb250ZW50OiAn77yfJzsgfVxyXG4udGVzdC1yZXN1bHRzIC5pdGVtLXJ1bm5pbmc6YWZ0ZXIgeyBcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgaGVpZ2h0OiAxNnB4O1xyXG4gIGNvbnRlbnQ6IHVybCgnLi4vaW1hZ2VzL3BpbndoZWVsLnN2ZycpOyBcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyBcclxufSovXHJcbi5jdXN0b21pemUtdG9vbHMgW2hpZGRlbl0geyBkaXNwbGF5OiBub25lOyB9XHJcblxyXG5cclxuLyogaHR0cHM6Ly9kYW5lZGVuLmdpdGh1Yi5pby9hbmltYXRlLmNzcy8gKi9cclxuQC13ZWJraXQta2V5ZnJhbWVzIGplbGxvIHtcclxuICBmcm9tLFxyXG4gIDExLjElLFxyXG4gIHRvIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XHJcbiAgfVxyXG5cclxuICAyMi4yJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2tld1goLTEyLjVkZWcpIHNrZXdZKC0xMi41ZGVnKTtcclxuICAgIHRyYW5zZm9ybTogc2tld1goLTEyLjVkZWcpIHNrZXdZKC0xMi41ZGVnKTtcclxuICB9XHJcblxyXG4gIDMzLjMlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBza2V3WCg2LjI1ZGVnKSBza2V3WSg2LjI1ZGVnKTtcclxuICAgIHRyYW5zZm9ybTogc2tld1goNi4yNWRlZykgc2tld1koNi4yNWRlZyk7XHJcbiAgfVxyXG5cclxuICA0NC40JSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2tld1goLTMuMTI1ZGVnKSBza2V3WSgtMy4xMjVkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiBza2V3WCgtMy4xMjVkZWcpIHNrZXdZKC0zLjEyNWRlZyk7XHJcbiAgfVxyXG5cclxuICA1NS41JSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2tld1goMS41NjI1ZGVnKSBza2V3WSgxLjU2MjVkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiBza2V3WCgxLjU2MjVkZWcpIHNrZXdZKDEuNTYyNWRlZyk7XHJcbiAgfVxyXG5cclxuICA2Ni42JSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2tld1goLTAuNzgxMjVkZWcpIHNrZXdZKC0wLjc4MTI1ZGVnKTtcclxuICAgIHRyYW5zZm9ybTogc2tld1goLTAuNzgxMjVkZWcpIHNrZXdZKC0wLjc4MTI1ZGVnKTtcclxuICB9XHJcblxyXG4gIDc3LjclIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBza2V3WCgwLjM5MDYyNWRlZykgc2tld1koMC4zOTA2MjVkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiBza2V3WCgwLjM5MDYyNWRlZykgc2tld1koMC4zOTA2MjVkZWcpO1xyXG4gIH1cclxuXHJcbiAgODguOCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNrZXdYKC0wLjE5NTMxMjVkZWcpIHNrZXdZKC0wLjE5NTMxMjVkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiBza2V3WCgtMC4xOTUzMTI1ZGVnKSBza2V3WSgtMC4xOTUzMTI1ZGVnKTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgamVsbG8ge1xyXG4gIGZyb20sXHJcbiAgMTEuMSUsXHJcbiAgdG8ge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcclxuICB9XHJcblxyXG4gIDIyLjIlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBza2V3WCgtMTIuNWRlZykgc2tld1koLTEyLjVkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiBza2V3WCgtMTIuNWRlZykgc2tld1koLTEyLjVkZWcpO1xyXG4gIH1cclxuXHJcbiAgMzMuMyUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNrZXdYKDYuMjVkZWcpIHNrZXdZKDYuMjVkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiBza2V3WCg2LjI1ZGVnKSBza2V3WSg2LjI1ZGVnKTtcclxuICB9XHJcblxyXG4gIDQ0LjQlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBza2V3WCgtMy4xMjVkZWcpIHNrZXdZKC0zLjEyNWRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHNrZXdYKC0zLjEyNWRlZykgc2tld1koLTMuMTI1ZGVnKTtcclxuICB9XHJcblxyXG4gIDU1LjUlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBza2V3WCgxLjU2MjVkZWcpIHNrZXdZKDEuNTYyNWRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHNrZXdYKDEuNTYyNWRlZykgc2tld1koMS41NjI1ZGVnKTtcclxuICB9XHJcblxyXG4gIDY2LjYlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBza2V3WCgtMC43ODEyNWRlZykgc2tld1koLTAuNzgxMjVkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiBza2V3WCgtMC43ODEyNWRlZykgc2tld1koLTAuNzgxMjVkZWcpO1xyXG4gIH1cclxuXHJcbiAgNzcuNyUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNrZXdYKDAuMzkwNjI1ZGVnKSBza2V3WSgwLjM5MDYyNWRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHNrZXdYKDAuMzkwNjI1ZGVnKSBza2V3WSgwLjM5MDYyNWRlZyk7XHJcbiAgfVxyXG5cclxuICA4OC44JSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2tld1goLTAuMTk1MzEyNWRlZykgc2tld1koLTAuMTk1MzEyNWRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHNrZXdYKC0wLjE5NTMxMjVkZWcpIHNrZXdZKC0wLjE5NTMxMjVkZWcpO1xyXG4gIH1cclxufVxyXG5cclxuLmplbGxvIHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBqZWxsbztcclxuICBhbmltYXRpb24tbmFtZTogamVsbG87XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XHJcbiAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgcm9sbE91dCB7XHJcbiAgZnJvbSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuXHJcbiAgdG8ge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwLCAwKSByb3RhdGUzZCgwLCAwLCAxLCAxMjBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwLCAwKSByb3RhdGUzZCgwLCAwLCAxLCAxMjBkZWcpO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyByb2xsT3V0IHtcclxuICBmcm9tIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG5cclxuICB0byB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApIHJvdGF0ZTNkKDAsIDAsIDEsIDEyMGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApIHJvdGF0ZTNkKDAsIDAsIDEsIDEyMGRlZyk7XHJcbiAgfVxyXG59XHJcblxyXG4ucm9sbE91dCB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogcm9sbE91dDtcclxuICBhbmltYXRpb24tbmFtZTogcm9sbE91dDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/app-shell/app-shell.component.html":
/*!****************************************************!*\
  !*** ./src/app/app-shell/app-shell.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n\tapp-shell works!\n</p>\n\n<!-- <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css\" integrity=\"sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm\" crossorigin=\"anonymous\">\n<script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js\" integrity=\"sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl\" crossorigin=\"anonymous\"></script> -->\n\n<!-- <script type=\"text/javascript\" src=\"https://cdn.jsdelivr.net/npm/bootstrap.native@2.0.26/dist/bootstrap-native.min.js\" charset=\"utf-8\"></script> -->\n<script type=\"text/javascript\" src=\"../../assets/styles/bootstrap-native-v4.min.js\"></script>\n\n<div class=\"alert alert-warning alert-dismissible fade show\" role=\"alert\">\n\t<button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n\t\t<span aria-hidden=\"true\">&times;</span>\n\t</button>\n\t<strong>Holy guacamole!</strong> You should check in on some of those fields below.\n</div>\n\n<div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\">\n  <ol class=\"carousel-indicators\">\n    <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\"></li>\n    <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li>\n    <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"2\"></li>\n  </ol>\n  <div class=\"carousel-inner\" role=\"listbox\">\n    <div class=\"carousel-item active\">\n      <img class=\"d-block img-fluid\" src=\"...\" alt=\"First slide\">\n    </div>\n    <div class=\"carousel-item\">\n      <img class=\"d-block img-fluid\" src=\"...\" alt=\"Second slide\">\n    </div>\n    <div class=\"carousel-item\">\n      <img class=\"d-block img-fluid\" src=\"...\" alt=\"Third slide\">\n    </div>\n  </div>\n  <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">\n    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Previous</span>\n  </a>\n  <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">\n    <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Next</span>\n  </a>\n</div>\n\n<!-- ng for -->\n<!-- <ngx-tiny-slider [config]=\"tinySliderConfig\">\n    <ng-container class=\"items\">\n      <div class=\"item\" *ngFor=\"let type of browse.types\">\n        <a target=\"_blank\" href=\"google.com\">\n          <img src=\"https://via.placeholder.com/150\">\n          {{type}}\n        </a>\n      </div>\n    </ng-container>\n</ngx-tiny-slider> -->\n\n<!-- pixar images -->\n<!-- <div class=\"card\">\n\t<ngx-tiny-slider [config]=\"tinySliderConfig\">\n\t\t<ng-container class=\"items\">\n\t\t\t<div class=\"item\" style=\"background-image: url('https://images.pexels.com/photos/584399/living-room-couch-interior-room-584399.jpeg')\">\n\n\t\t\t\t<div>\n\t\t\t\t\t<button (click)=\"clickedMe('rented')\" type=\"button\" class=\"btn btn-primary btn-lg\">Rent</button>\n\t\t\t\t\t<button (click)=\"clickedMe('buy-ed')\" type=\"button\" class=\"btn btn-primary btn-lg\">Buy</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"item\">\n\t\t\t\t<a target=\"_blank\" href=\"google.com\">\n\t\t\t\t\t<img src=\"http://thecodeplayer.com/uploads/media/3yiC6Yq.jpg\">\n\t\t\t\t</a>\n\t\t\t</div>\n\n\t\t\t<div class=\"item\">\n\t\t\t\t<a target=\"_blank\" href=\"google.com\">\n\t\t\t\t\t<img src=\"http://thecodeplayer.com/uploads/media/00kih8g.jpg\">\n\t\t\t\t</a>\n\t\t\t</div>\n\n\t\t\t<div class=\"item\">\n\t\t\t\t<a target=\"_blank\" href=\"google.com\">\n\t\t\t\t\t<img src=\"http://thecodeplayer.com/uploads/media/2rT2vdx.jpg\">\n\t\t\t\t</a>\n\t\t\t</div>\n\n\t\t\t<div class=\"item\">\n\t\t\t\t<a target=\"_blank\" href=\"google.com\">\n\t\t\t\t\t<img src=\"http://thecodeplayer.com/uploads/media/40Ly3VB.jpg\">\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t</ng-container>\n\t</ngx-tiny-slider>\n</div> -->\n\n<!-- original docs -->\n<!-- <ngx-tiny-slider [config]=\"tinySliderConfig\">\n    <ng-container class=\"items\">\n      <div class=\"item\">\n        <a target=\"_blank\" href=\"google.com\">\n          <img src=\"http://www.mattsorger.com/newsletterpics/gsw07_01.jpg\">\n        </a>\n      </div>\n \n      <div class=\"item\">\n        <a target=\"_blank\" href=\"google.com\">\n          <img src=\"http://www.mattsorger.com/newsletterpics/gsw07_01.jpg\">\n        </a>\n      </div>\n \n      <div class=\"item\">\n        <a target=\"_blank\" href=\"google.com\">\n          <img src=\"http://www.mattsorger.com/newsletterpics/gsw07_01.jpg\">\n        </a>\n      </div>\n \n      <div class=\"item\">\n        <a target=\"_blank\" href=\"google.com\">\n          <img src=\"http://www.mattsorger.com/newsletterpics/gsw07_01.jpg\">\n        </a>\n      </div>\n \n      <div class=\"item\">\n        <a target=\"_blank\" href=\"google.com\">\n          <img src=\"http://www.mattsorger.com/newsletterpics/gsw07_01.jpg\">\n        </a>\n      </div>\n    </ng-container>\n</ngx-tiny-slider> -->\n\n<!-- attempting thumbnails -->\n<!-- <div id=\"customize_wrapper\">\n\t<h2>\n\t\tCustomize\n\t</h2>\n\t<div class=\"customize\" id=\"customize\">\n\t\t<div>\n\t\t\t<div>\n\t\t\t\t<img src=\"https://source.unsplash.com/collection/993239/600x400\" alt=\"\" width=\"600\" height=\"400\">\n\t\t\t</div>\n\t\t\t<p>\n\t\t\t\tSunt dignissimos distinctio, veniam, tenetur aspernatur nulla!\n\t\t\t</p>\n\t\t</div>\n\t\t<div>\n\t\t\t<div>\n\t\t\t\t<img src=\"https://source.unsplash.com/collection/1673600/600x400\" alt=\"\" width=\"600\" height=\"400\">\n\t\t\t</div>\n\t\t\t<p>\n\t\t\t\tCorrupti, libero minima nihil expedita officiis? Quo.\n\t\t\t</p>\n\t\t</div>\n\t\t<div>\n\t\t\t<div>\n\t\t\t\t<img src=\"https://source.unsplash.com/collection/1513994/600x400\" alt=\"\" width=\"600\" height=\"400\">\n\t\t\t</div>\n\t\t\t<p>\n\t\t\t\tAlias rem, ab impedit recusandae repellat tempore.\n\t\t\t</p>\n\t\t</div>\n\t\t<div>\n\t\t\t<div>\n\t\t\t\t<img src=\"https://source.unsplash.com/collection/502925/600x400\" alt=\"\" width=\"600\" height=\"400\">\n\t\t\t</div>\n\t\t\t<p>\n\t\t\t\tNisi inventore quo delectus perspiciatis voluptatibus, quae.\n\t\t\t</p>\n\t\t</div>\n\t\t<div>\n\t\t\t<div>\n\t\t\t\t<img src=\"https://source.unsplash.com/collection/1891993/600x400\" alt=\"\" width=\"600\" height=\"400\">\n\t\t\t</div>\n\t\t\t<p>\n\t\t\t\tNisi harum earum consectetur laudantium iusto, laboriosam.\n\t\t\t</p>\n\t\t</div>\n\t</div>\n\t<div class=\"customize-tools\">\n\t\t<ul class=\"thumbnails\" id=\"customize-thumbnails\">\n\t\t\t<li>\n\t\t\t\t<img src=\"https://source.unsplash.com/collection/993239/600x400\" alt=\"\" width=\"600\" height=\"400\">\n\t\t\t</li>\n\t\t\t<li>\n\t\t\t\t<img src=\"https://source.unsplash.com/collection/1673600/600x400\" alt=\"\" width=\"600\" height=\"400\">\n\t\t\t</li>\n\t\t\t<li>\n\t\t\t\t<img src=\"https://source.unsplash.com/collection/1513994/600x400\" alt=\"\" width=\"600\" height=\"400\">\n\t\t\t</li>\n\t\t\t<li>\n\t\t\t\t<img src=\"https://source.unsplash.com/collection/502925/600x400\" alt=\"\" width=\"600\" height=\"400\">\n\t\t\t</li>\n\t\t\t<li>\n\t\t\t\t<img src=\"https://source.unsplash.com/collection/1891993/600x400\" alt=\"\" width=\"600\" height=\"400\">\n\t\t\t</li>\n\t\t</ul>\n\t\t<ul class=\"controls\" id=\"customize-controls\">\n\t\t\t<li class=\"prev\">\n\t\t\t\t<img src=\"images/angle-left.png\" alt=\"\">\n\t\t\t</li>\n\t\t\t<li class=\"next\">\n\t\t\t\t<img src=\"images/angle-right.png\" alt=\"\">\n\t\t\t</li>\n\t\t</ul>\n\t\t<div class=\"playbutton-wrapper\">\n\t\t\t<button id=\"customize-toggle\">Pause</button>\n\t\t</div>\n\t</div>\n</div> -->"

/***/ }),

/***/ "./src/app/app-shell/app-shell.component.ts":
/*!**************************************************!*\
  !*** ./src/app/app-shell/app-shell.component.ts ***!
  \**************************************************/
/*! exports provided: AppShellComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppShellComponent", function() { return AppShellComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppShellComponent = /** @class */ (function () {
    function AppShellComponent() {
        this.browse = {
            types: ['Apartment, Studio, Loft, Home, Special Deals'],
            areas: ['Cambridge, Backbay, Somerville, North End']
        };
    }
    AppShellComponent.prototype.ngOnInit = function () {
        this.tinySliderConfig = {
            arrowKeys: true,
            autoWidth: true,
            gutter: 10,
            controlsText: ['<', '>'],
            navAsThumbnails: true
        };
        // this.tinySliderConfig = {
        // 	arrowKeys: true,
        // 	autoWidth: true,
        // 	gutter: 10,
        // 	controlsText: ['<', '>'],
        // 	  container: "#customize",
        // 	  items: 3,
        // 	  controlsContainer: "#customize-controls",
        // 	  navContainer: "#customize-thumbnails",
        // 	  navAsThumbnails: true,
        // 	  autoplay: true,
        // 	  autoplayTimeout: 1000,
        // 	  autoplayButton: "#customize-toggle",
        // 	  swipeAngle: false,
        // 	  speed: 400
        // };
    };
    AppShellComponent.prototype.clickedMe = function (btn) {
        console.log(btn);
    };
    AppShellComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-shell',
            template: __webpack_require__(/*! ./app-shell.component.html */ "./src/app/app-shell/app-shell.component.html"),
            styles: [__webpack_require__(/*! ./app-shell.component.css */ "./src/app/app-shell/app-shell.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppShellComponent);
    return AppShellComponent;
}());



/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'test-app';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: "\n    <app-shell></app-shell>\n    <router-outlet></router-outlet>\n  "
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_shell_app_shell_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-shell/app-shell.component */ "./src/app/app-shell/app-shell.component.ts");
/* harmony import */ var ngx_tiny_slider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-tiny-slider */ "./node_modules/ngx-tiny-slider/fesm5/ngx-tiny-slider.js");








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _app_shell_app_shell_component__WEBPACK_IMPORTED_MODULE_6__["AppShellComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"].withServerTransition({ appId: 'serverApp' }),
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                ngx_tiny_slider__WEBPACK_IMPORTED_MODULE_7__["NgxTinySliderModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]
            ],
            exports: [ngx_tiny_slider__WEBPACK_IMPORTED_MODULE_7__["NgxTinySliderModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
document.addEventListener('DOMContentLoaded', function () {
    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
        .catch(function (err) { return console.error(err); });
});


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Shamseen\Documents\Code\NewmanAWS\test-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map