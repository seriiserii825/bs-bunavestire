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
/******/ 	return __webpack_require__(__webpack_require__.s = "../bs-bunavestire/assets/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../bs-bunavestire/assets/js/main.js":
/*!*******************************************!*\
  !*** ../bs-bunavestire/assets/js/main.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_counter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/counter */ \"../bs-bunavestire/assets/js/modules/counter.js\");\n\nwindow.addEventListener('DOMContentLoaded', function () {\n  Object(_modules_counter__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  Object(_modules_counter__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('custom');\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vYnMtYnVuYXZlc3RpcmUvYXNzZXRzL2pzL21haW4uanM/MjdlMyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiY291bnRlciJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBRUFBLE1BQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0Isa0JBQXhCLEVBQTRDLFlBQU07QUFDakRDLGtFQUFPO0FBQ1BBLGtFQUFPLENBQUMsUUFBRCxDQUFQO0FBQ0EsQ0FIRCIsImZpbGUiOiIuLi9icy1idW5hdmVzdGlyZS9hc3NldHMvanMvbWFpbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb3VudGVyIGZyb20gXCIuL21vZHVsZXMvY291bnRlclwiO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcblx0Y291bnRlcigpXG5cdGNvdW50ZXIoJ2N1c3RvbScpXG59KTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../bs-bunavestire/assets/js/main.js\n");

/***/ }),

/***/ "../bs-bunavestire/assets/js/modules/counter.js":
/*!******************************************************!*\
  !*** ../bs-bunavestire/assets/js/modules/counter.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return counter; });\nfunction counter() {\n  var counter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'new';\n  console.log(counter);\n  return counter;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vYnMtYnVuYXZlc3RpcmUvYXNzZXRzL2pzL21vZHVsZXMvY291bnRlci5qcz8wMThmIl0sIm5hbWVzIjpbImNvdW50ZXIiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQWUsU0FBU0EsT0FBVCxHQUErQjtBQUFBLE1BQWRBLE9BQWMsdUVBQU4sS0FBTTtBQUU3Q0MsU0FBTyxDQUFDQyxHQUFSLENBQVlGLE9BQVo7QUFDQSxTQUFPQSxPQUFQO0FBQ0EiLCJmaWxlIjoiLi4vYnMtYnVuYXZlc3RpcmUvYXNzZXRzL2pzL21vZHVsZXMvY291bnRlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvdW50ZXIoY291bnRlcj0nbmV3Jyl7XG5cblx0Y29uc29sZS5sb2coY291bnRlcik7XG5cdHJldHVybiBjb3VudGVyO1xufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../bs-bunavestire/assets/js/modules/counter.js\n");

/***/ })

/******/ });