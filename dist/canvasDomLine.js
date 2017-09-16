(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["canvasDomLine"] = factory();
	else
		root["canvasDomLine"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var canvas = void 0,
    context = void 0,
    rootDom = void 0;

//设置canvas样式
function setStyle() {
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.position = 'absolute';
  canvas.style.zIndex = '-1';

  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
}

//初始化
function init(container) {
  canvas = document.createElement('canvas');
  context = canvas.getContext('2d');
  container.appendChild(canvas);
  rootDom = container;
  setStyle();
}

//获取距离根节点left
function getOffsetLeft(node) {
  if (node.offsetParent === rootDom || node.offsetParent === document.body) {
    return node.offsetLeft;
  } else {
    return node.offsetLeft + getOffsetLeft(node.offsetParent);
  }
}

//获取距离根节点top
function getOffsetTop(node) {
  if (node.offsetParent === rootDom || node.offsetParent === document.body) {
    return node.offsetTop;
  } else {
    return node.offsetTop + getOffsetTop(node.offsetParent);
  }
}

//获取坐标
function getPoint(node) {
  var offsetWidth = node.offsetWidth,
      offsetHeight = node.offsetHeight;


  var offsetLeft = getOffsetLeft(node);
  var offsetTop = getOffsetTop(node);

  return {
    x: offsetLeft + offsetWidth / 2,
    y: offsetTop + offsetHeight / 2
  };
}

//画线
function drawLine(from, to) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  var fromNode = getPoint(from);
  var toNode = getPoint(to);

  context.strokeStyle = options.color || '#000000';
  context.lineWidth = options.width || 1;

  context.beginPath();
  context.moveTo(fromNode.x, fromNode.y);
  context.lineTo(toNode.x, toNode.y);
  context.stroke();
}

//清空画布
function clear() {
  context.clearRect(0, 0, canvas.width, canvas.height);
}

exports.default = {
  init: init,
  drawLine: drawLine,
  clear: clear
};

/***/ })
/******/ ]);
});