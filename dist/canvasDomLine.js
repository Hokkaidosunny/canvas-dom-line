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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var style = {
  width: '100%',
  height: '100%',
  top: '0',
  left: '0',
  position: 'absolute',
  zIndex: '-1'
};

var CanvasDomLine = function () {
  function CanvasDomLine(container) {
    _classCallCheck(this, CanvasDomLine);

    this.rootDom = container;
    this.canvas = document.createElement('canvas');
    this.context = this.canvas.getContext('2d');

    this.rootDom.appendChild(this.canvas);
    this.setStyle();
  }

  //设置canvas样式


  _createClass(CanvasDomLine, [{
    key: 'setStyle',
    value: function setStyle() {
      var _this = this;

      Object.keys(style).forEach(function (e) {
        _this.canvas.style[e] = style[e];
      });

      this.canvas.width = this.canvas.offsetWidth;
      this.canvas.height = this.canvas.offsetHeight;
    }

    //获取距离根节点left, top

  }, {
    key: 'getOffset',
    value: function getOffset(node, offsetType) {
      if (node.offsetParent === this.rootDom || node.offsetParent === document.body) {
        return node[offsetType];
      } else {
        return node[offsetType] + this.getOffset(node.offsetParent, offsetType);
      }
    }

    //获取坐标

  }, {
    key: 'getPoint',
    value: function getPoint(node) {
      var offsetWidth = node.offsetWidth,
          offsetHeight = node.offsetHeight;


      var offsetLeft = this.getOffset(node, 'offsetLeft');
      var offsetTop = this.getOffset(node, 'offsetTop');

      return {
        x: offsetLeft + offsetWidth / 2,
        y: offsetTop + offsetHeight / 2
      };
    }

    //画线

  }, {
    key: 'drawLine',
    value: function drawLine(from, to) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      var fromNode = this.getPoint(from);
      var toNode = this.getPoint(to);

      this.context.strokeStyle = options.color || '#000000';
      this.context.lineWidth = (options.width || 1) * window.lib.flexible.dpr;

      this.context.beginPath();
      this.context.moveTo(fromNode.x, fromNode.y);
      this.context.lineTo(toNode.x, toNode.y);
      this.context.stroke();
    }

    //清空画布

  }, {
    key: 'clear',
    value: function clear() {
      this.context && this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }]);

  return CanvasDomLine;
}();

exports.default = CanvasDomLine;

/***/ })
/******/ ]);
});