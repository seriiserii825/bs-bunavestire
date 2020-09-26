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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_counter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/counter */ \"../bs-bunavestire/assets/js/modules/counter.js\");\n\n\nwindow.addEventListener('DOMContentLoaded', () => {\n\tObject(_modules_counter__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('some ocunter');\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vYnMtYnVuYXZlc3RpcmUvYXNzZXRzL2pzL21haW4uanM/MjdlMyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQXdDOztBQUV4QztBQUNBLENBQUMsZ0VBQU87QUFDUixDQUFDIiwiZmlsZSI6Ii4uL2JzLWJ1bmF2ZXN0aXJlL2Fzc2V0cy9qcy9tYWluLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvdW50ZXIgZnJvbSBcIi4vbW9kdWxlcy9jb3VudGVyXCI7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuXHRjb3VudGVyKCdzb21lIG9jdW50ZXInKTtcbn0pOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../bs-bunavestire/assets/js/main.js\n");

/***/ }),

/***/ "../bs-bunavestire/assets/js/modules/counter.js":
/*!******************************************************!*\
  !*** ../bs-bunavestire/assets/js/modules/counter.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\nfunction counter(counter){\n\tconsole.log(counter);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (counter);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vYnMtYnVuYXZlc3RpcmUvYXNzZXRzL2pzL21vZHVsZXMvY291bnRlci5qcz8wMThmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0E7QUFDQTtBQUNBOztBQUVlLHNFQUFPIiwiZmlsZSI6Ii4uL2JzLWJ1bmF2ZXN0aXJlL2Fzc2V0cy9qcy9tb2R1bGVzL2NvdW50ZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmZ1bmN0aW9uIGNvdW50ZXIoY291bnRlcil7XG5cdGNvbnNvbGUubG9nKGNvdW50ZXIpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjb3VudGVyOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../bs-bunavestire/assets/js/modules/counter.js\n");

/***/ })

/******/ });