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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar sort_1 = __webpack_require__(/*! ./sort */ \"./src/sort.ts\");\nexports.mySort = sort_1.mySort;\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "./src/sort.ts":
/*!*********************!*\
  !*** ./src/sort.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar mySort = function (data, sortby) {\n    if (sortby === \"ID\") {\n        return data.sort(function (a, b) {\n            if (a.id > b.id)\n                return 1;\n            if (a.id < b.id)\n                return -1;\n            return 0;\n        });\n    }\n    if (sortby === \"FIRSTNAME\") {\n        return data.sort(function (a, b) {\n            if (a.first_name > b.first_name)\n                return 1;\n            if (a.first_name < b.first_name)\n                return -1;\n            return 0;\n        });\n    }\n    if (sortby === \"LASTNAME\") {\n        return data.sort(function (a, b) {\n            if (a.last_name > b.last_name)\n                return 1;\n            if (a.last_name < b.last_name)\n                return -1;\n            return 0;\n        });\n    }\n    if (sortby === \"COMPANY\") {\n        return data.sort(function (a, b) {\n            if (a.company_name > b.company_name)\n                return 1;\n            if (a.company_name < b.company_name)\n                return -1;\n            return 0;\n        });\n    }\n    if (sortby === \"CITY\") {\n        return data.sort(function (a, b) {\n            if (a.city > b.city)\n                return 1;\n            if (a.city < b.city)\n                return -1;\n            return 0;\n        });\n    }\n    if (sortby === \"EMAIL\") {\n        return data.sort(function (a, b) {\n            if (a.email > b.email)\n                return 1;\n            if (a.email < b.email)\n                return -1;\n            return 0;\n        });\n    }\n    if (sortby === \"ZIP\") {\n        return data.sort(function (a, b) {\n            if (a.zip > b.zip)\n                return 1;\n            if (a.zip < b.zip)\n                return -1;\n            return 0;\n        });\n    }\n    if (sortby === \"STATE\") {\n        return data.sort(function (a, b) {\n            if (a.state > b.state)\n                return 1;\n            if (a.state < b.state)\n                return -1;\n            return 0;\n        });\n    }\n    if (sortby === \"AGE\") {\n        return data.sort(function (a, b) {\n            if (a.age > b.age)\n                return 1;\n            if (a.age < b.age)\n                return -1;\n            return 0;\n        });\n    }\n    else {\n        return null;\n    }\n};\nexports.mySort = mySort;\n\n\n//# sourceURL=webpack:///./src/sort.ts?");

/***/ })

/******/ });