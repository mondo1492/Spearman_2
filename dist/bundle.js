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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stickman__ = __webpack_require__(1);


document.addEventListener("DOMContentLoaded", function(){
  return loadGame();
});



const loadGame = (x, y) => {

      Object(__WEBPACK_IMPORTED_MODULE_0__stickman__["a" /* default */])(100,200, .4);
      document.addEventListener("click", function(){
        return test(0,0);
      });
};

const test = (x, y) => {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  ctx.save();
  ctx.clearRect(0,0,550,400);
  ctx.fillStyle = "rgba(0,200,0,1)";
  ctx.fillRect(x, 20, 50, 50);
  ctx.restore();
  x += 1;
  var looper = setTimeout(()=>test(x,y) , 10);
};


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const buildStickman = (x, y, scale) => {
  var canvas = document.getElementById("canvas");
  if (canvas.getContext("2d")) { // Check HTML5 canvas support
  let context = canvas.getContext("2d"); // get Canvas Context object

  context.beginPath();
  context.fillStyle = "bisque"; // #ffe4c4
  context.arc(scale * x, scale * y, scale * 30, 0, Math.PI * 2, true); // draw circle for head
  // (x,y) center, radius, start angle, end angle, anticlockwise
  context.fill();

  context.beginPath();
  context.strokeStyle = "black"; // color
  context.lineWidth = 3;
  context.arc(scale * x, scale * y, scale * 20, 0, Math.PI, false); // draw semicircle for smiling
  context.stroke();

  // eyes
  context.beginPath();
  context.fillStyle = "black"; // color
  context.arc(scale * (x-10), scale * (y-5), scale * 3, 0, Math.PI * 2, true); // draw left eye
  context.fill();
  context.arc(scale * (x+10), scale *(y-5), scale * 3, 0, Math.PI * 2, true); // draw right eye
  context.fill();

  // body
  context.beginPath();
  context.moveTo(scale * x, scale * (y+30));
  context.lineTo(scale * x, scale * (y+130));
  context.strokeStyle = "black";
  context.stroke();

  // arms
  context.beginPath();
  context.strokeStyle = "black"; // blue
  context.moveTo(scale * x, scale *(y+30));
  context.lineTo(scale * (x-50), scale * (y+80));
  context.moveTo(scale * x, scale * (y+30));
  context.lineTo(scale * (x+50), scale * (y+80));
  context.stroke();

  // legs
  context.beginPath();
  context.strokeStyle = "black";
  context.moveTo(scale * x, scale * (y+130));
  context.lineTo(scale * (x-50), scale * (y+230));
  context.moveTo(scale * x, scale * (y+130));
  context.lineTo(scale * (x+50), scale * (y+230));
  context.stroke();
  }
};

/* harmony default export */ __webpack_exports__["a"] = (buildStickman);


//
// const buildStickman = (x, y) => {
//   var canvas = document.getElementById("canvas");
//   if (canvas.getContext("2d")) { // Check HTML5 canvas support
//   let context = canvas.getContext("2d"); // get Canvas Context object
//
//   context.beginPath();
//   context.fillStyle = "bisque"; // #ffe4c4
//   context.arc(200, 50, 30, 0, Math.PI * 2, true); // draw circle for head
//   // (x,y) center, radius, start angle, end angle, anticlockwise
//   context.fill();
//
//   context.beginPath();
//   context.strokeStyle = "black"; // color
//   context.lineWidth = 3;
//   context.arc(200, 50, 20, 0, Math.PI, false); // draw semicircle for smiling
//   context.stroke();
//
//   // eyes
//   context.beginPath();
//   context.fillStyle = "black"; // color
//   context.arc(190, 45, 3, 0, Math.PI * 2, true); // draw left eye
//   context.fill();
//   context.arc(210, 45, 3, 0, Math.PI * 2, true); // draw right eye
//   context.fill();
//
//   // body
//   context.beginPath();
//   context.moveTo(200, 80);
//   context.lineTo(200, 180);
//   context.strokeStyle = "black";
//   context.stroke();
//
//   // arms
//   context.beginPath();
//   context.strokeStyle = "black"; // blue
//   context.moveTo(200, 80);
//   context.lineTo(150, 130);
//   context.moveTo(200, 80);
//   context.lineTo(250, 130);
//   context.stroke();
//
//   // legs
//   context.beginPath();
//   context.strokeStyle = "black";
//   context.moveTo(200, 180);
//   context.lineTo(150, 280);
//   context.moveTo(200, 180);
//   context.lineTo(250, 280);
//   context.stroke();
//   }
// };
//
// export default buildStickman;


/***/ })
/******/ ]);