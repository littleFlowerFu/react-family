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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["e"] = increment;
/* harmony export (immutable) */ __webpack_exports__["d"] = decrement;
/* harmony export (immutable) */ __webpack_exports__["f"] = reset;
/*actions*/

const INCREMENT = "counter/INCREMENT";
/* harmony export (immutable) */ __webpack_exports__["b"] = INCREMENT;

const DECREMENT = "counter/DECREMENT";
/* harmony export (immutable) */ __webpack_exports__["a"] = DECREMENT;

const RESET = "counter/RESET";
/* harmony export (immutable) */ __webpack_exports__["c"] = RESET;


function increment () {
  return {type: INCREMENT}
}
function decrement() {
  return {type: DECREMENT}
}

function reset() {
  return {type:RESET}
}

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_counter__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store__ = __webpack_require__(2);




// 打印初始状态
console.log(__WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */].getState());

// 每次state更新时， 打印日志
// 注意subscribe()返回一个函数用来注销监听器

let unsubscribe = __WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */].subscribe(() => {
  console.log(__WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */].getState())
});

// 发起一系列action
__WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */].dispatch(Object(__WEBPACK_IMPORTED_MODULE_0__actions_counter__["e" /* increment */])());
__WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */].dispatch(Object(__WEBPACK_IMPORTED_MODULE_0__actions_counter__["d" /* decrement */])());
__WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */].dispatch(Object(__WEBPACK_IMPORTED_MODULE_0__actions_counter__["f" /* reset */])());

// 停止监听 state更新
unsubscribe();

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
throw new Error("Cannot find module \"redux\"");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reducers_js__ = __webpack_require__(3);



let store = Object(__WEBPACK_IMPORTED_MODULE_0_redux__["creatStore"])(__WEBPACK_IMPORTED_MODULE_1__reducers_js__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (store);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = combineReducers;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__reducers_counter__ = __webpack_require__(4);


function combineReducers(state = {}, action) {
  return {
    counter: Object(__WEBPACK_IMPORTED_MODULE_0__reducers_counter__["a" /* default */])(state.counter, action)
  }
}

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = reducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_counter__ = __webpack_require__(0);


/*初始化state*/

const initState = {
  count: 0
};

/* reducer*/

function reducer(state = initState, action) {
  switch(action.type) {
    case __WEBPACK_IMPORTED_MODULE_0__actions_counter__["b" /* INCREMENT */]:
      return {
        count: state.count + 1
      };
    case __WEBPACK_IMPORTED_MODULE_0__actions_counter__["a" /* DECREMENT */]:
      return {
        count: state.count - 1
      };
    case __WEBPACK_IMPORTED_MODULE_0__actions_counter__["c" /* RESET */]:
      return {count: 0};
    default: 
      return state
  }
}

/***/ })
/******/ ]);