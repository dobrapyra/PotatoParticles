(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("PIXI"));
	else if(typeof define === 'function' && define.amd)
		define("PotatoParticles", ["PIXI"], factory);
	else if(typeof exports === 'object')
		exports["PotatoParticles"] = factory(require("PIXI"));
	else
		root["PotatoParticles"] = factory(root["PIXI"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_pixi_js__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/ImageHelper.js":
/*!*******************************!*\
  !*** ./src/js/ImageHelper.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ImageHelper = function () {
  function ImageHelper() {
    _classCallCheck(this, ImageHelper);

    this.isImageLoaded = false;

    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');
  }

  _createClass(ImageHelper, [{
    key: 'load',
    value: function load(src) {
      var _this = this;

      this.isImageLoaded = false;

      return new Promise(function (resolve) {
        var tmpImageEl = new Image();
        tmpImageEl.onload = function (e) {
          var imageEl = e.target;
          _this.onImageLoaded(imageEl);
          resolve(imageEl);
        };
        tmpImageEl.src = src;
      });
    }
  }, {
    key: 'onImageLoaded',
    value: function onImageLoaded(image) {
      this.image = image;
      this.width = this.image.width;
      this.height = this.image.height;

      this.isImageLoaded = true;
    }
  }, {
    key: 'checkImage',
    value: function checkImage() {
      if (this.isImageLoaded) return true;

      // console.warn('Image is not loaded yet');
      return false;
    }
  }, {
    key: 'imageToDots',
    value: function imageToDots(props) {
      if (!this.checkImage()) return null;

      var image = this.image;
      var _props$width = props.width,
          width = _props$width === undefined ? image.width : _props$width,
          _props$height = props.height,
          height = _props$height === undefined ? image.height : _props$height,
          _props$pixelSize = props.pixelSize,
          pixelSize = _props$pixelSize === undefined ? 1 : _props$pixelSize,
          _props$pixelFilter = props.pixelFilter,
          pixelFilter = _props$pixelFilter === undefined ? function (pixel) {
        return pixel.a >= 0.4;
      } : _props$pixelFilter;


      var canvasWidth = Math.ceil(width / pixelSize);
      var canvasHeight = Math.ceil(height / pixelSize);

      this.canvas.setAttribute('width', canvasWidth);
      this.canvas.setAttribute('height', canvasHeight);

      return this.imageToData(image, {
        canvasWidth: canvasWidth, canvasHeight: canvasHeight, pixelSize: pixelSize, pixelFilter: pixelFilter
      });
    }
  }, {
    key: 'imageToData',
    value: function imageToData(image, props) {
      var canvasWidth = props.canvasWidth,
          canvasHeight = props.canvasHeight,
          pixelSize = props.pixelSize,
          pixelFilter = props.pixelFilter;


      this.ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      this.drawImageCover(image, canvasWidth, canvasHeight);

      var imageData = this.ctx.getImageData(0, 0, canvasWidth, canvasHeight).data;

      var data = [];
      for (var y = 0; y < canvasHeight; y++) {
        for (var x = 0; x < canvasWidth; x++) {
          var index = (y * canvasWidth + x) * 4;

          var pixel = {
            x: x * pixelSize,
            y: y * pixelSize,
            r: imageData[index + 0] / 255,
            g: imageData[index + 1] / 255,
            b: imageData[index + 2] / 255,
            a: imageData[index + 3] / 255
          };

          if (!pixelFilter(pixel)) continue;

          data.push(pixel);
        }
      }

      return data;
    }
  }, {
    key: 'drawImageCover',
    value: function drawImageCover(img, width, height) {
      var scale = Math.min(width / img.width, height / img.height);
      var size = {
        width: img.width * scale,
        height: img.height * scale
      };
      var pos = {
        x: (width - size.width) / 2,
        y: (height - size.height) / 2
      };
      this.ctx.drawImage(img, 0, 0, img.width, img.height, pos.x, pos.y, size.width, size.height);
    }
  }]);

  return ImageHelper;
}();

exports.default = ImageHelper;

/***/ }),

/***/ "./src/js/Particle.js":
/*!****************************!*\
  !*** ./src/js/Particle.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _pixi = __webpack_require__(/*! pixi.js */ "pixi.js");

var PIXI = _interopRequireWildcard(_pixi);

var _vector = __webpack_require__(/*! ./vector */ "./src/js/vector.js");

var _vector2 = _interopRequireDefault(_vector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Particle = function () {
  function Particle(container, _ref) {
    var x = _ref.x,
        y = _ref.y,
        _ref$mass = _ref.mass,
        mass = _ref$mass === undefined ? 1 : _ref$mass,
        texture = _ref.texture,
        delay = _ref.delay;

    _classCallCheck(this, Particle);

    this.position = new _vector2.default(x, y);
    this.velocity = new _vector2.default(0, 0);
    this.acceleration = new _vector2.default(0, 0);
    this.force = new _vector2.default(0, 0);
    this.mass = mass;
    this.target = this.position.clone();

    this.waitFrames = delay * 60; // * FPS
    this.waiting = this.waitFrames > 0;

    if (!container) return;
    this.createSprite(container, { texture: texture });
  }

  _createClass(Particle, [{
    key: 'createSprite',
    value: function createSprite(container, _ref2) {
      var texture = _ref2.texture;

      this.sprite = new PIXI.Sprite(texture);
      this.sprite.anchor.set(0.5);
      this.sprite.position.set(this.position.x, this.position.y);
      container.addChild(this.sprite);
    }
  }, {
    key: 'addForce',
    value: function addForce(force) {
      if (!force) return;
      this.force.add(force);
    }
  }, {
    key: 'setTarget',
    value: function setTarget(target) {
      this.target = target;
    }
  }, {
    key: 'getForceToTarget',
    value: function getForceToTarget() {
      if (!this.target) return null;

      var force = _vector2.default.subtract(this.target, this.position);
      force.multiply(0.04);

      return force;
    }
  }, {
    key: 'getMouseForce',
    value: function getMouseForce(mousePos) {
      var force = _vector2.default.subtract(mousePos, this.position);
      var distance = force.value();
      force.normalize();
      var invDist = 120 / distance;
      var quadDist = invDist * invDist;
      var lessQuadDist = quadDist - 0.04;
      var mult = lessQuadDist < 0 ? 0 : lessQuadDist * 0.8;
      force.multiply(-mult);

      return force;
    }
  }, {
    key: 'update',
    value: function update(delta) {
      if (this.waiting) {
        this.waitFrames -= delta;
        if (this.waitFrames > 0) return;

        this.waitFrames = 0;
        this.waiting = false;
        this.force.set(0, 0);
        return;
      }

      this.acceleration.set(this.force.x, this.force.y);
      this.acceleration.divide(this.mass);
      this.velocity.add(this.acceleration);
      this.position.add(this.velocity);
      this.force.set(0, 0);
    }
  }, {
    key: 'render',
    value: function render() {
      if (!this.sprite) return;
      this.sprite.position.set(this.position.x, this.position.y);
    }
  }]);

  return Particle;
}();

exports.default = Particle;

/***/ }),

/***/ "./src/js/core.js":
/*!************************!*\
  !*** ./src/js/core.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _pixi = __webpack_require__(/*! pixi.js */ "pixi.js");

var PIXI = _interopRequireWildcard(_pixi);

var _ImageHelper = __webpack_require__(/*! ./ImageHelper.js */ "./src/js/ImageHelper.js");

var _ImageHelper2 = _interopRequireDefault(_ImageHelper);

var _vector = __webpack_require__(/*! ./vector.js */ "./src/js/vector.js");

var _vector2 = _interopRequireDefault(_vector);

var _Particle = __webpack_require__(/*! ./Particle.js */ "./src/js/Particle.js");

var _Particle2 = _interopRequireDefault(_Particle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Core = function () {
  function Core(_ref) {
    var _this = this;

    var imageEl = _ref.imageEl,
        _ref$pixelSize = _ref.pixelSize,
        pixelSize = _ref$pixelSize === undefined ? 10 : _ref$pixelSize,
        _ref$particleSize = _ref.particleSize,
        particleSize = _ref$particleSize === undefined ? 6 : _ref$particleSize,
        _ref$resistance = _ref.resistance,
        resistance = _ref$resistance === undefined ? -0.7 : _ref$resistance,
        _ref$minMass = _ref.minMass,
        minMass = _ref$minMass === undefined ? 4 : _ref$minMass,
        _ref$massRand = _ref.massRand,
        massRand = _ref$massRand === undefined ? 2 : _ref$massRand,
        _ref$delayRand = _ref.delayRand,
        delayRand = _ref$delayRand === undefined ? 0.4 : _ref$delayRand,
        pixelFilter = _ref.pixelFilter,
        particleInit = _ref.particleInit,
        _ref$mouseInteraction = _ref.mouseInteraction,
        mouseInteraction = _ref$mouseInteraction === undefined ? true : _ref$mouseInteraction;

    _classCallCheck(this, Core);

    this.imageEl = imageEl;

    this.pixelSize = pixelSize;
    this.particleSize = particleSize;
    this.resistance = resistance;
    this.minMass = minMass;
    this.massRand = massRand;
    this.delayRand = delayRand;
    this.pixelFilter = pixelFilter;
    this.particleInit = particleInit;
    this.mouseInteraction = mouseInteraction;

    this.imageHelper = new _ImageHelper2.default();
    this.imageHelper.load(imageEl.src).then(function (image) {
      _this.onLogoLoaded(image);
    });
  }

  _createClass(Core, [{
    key: 'onLogoLoaded',
    value: function onLogoLoaded(image) {
      this.width = image.width;
      this.height = image.height;

      this.particlesData = this.imageHelper.imageToDots({
        width: this.width,
        height: this.height,
        pixelSize: this.pixelSize,
        pixelFilter: this.pixelFilter
      });

      this.mouseVector = new _vector2.default(0, 0);

      this.initRenderer();
      this.initParticles();
      this.renderer.render(this.stage);
      this.startLoop();

      this.calculateScale();
      this.bindEvents();

      this.setParticlesTargets();
    }
  }, {
    key: 'initRenderer',
    value: function initRenderer() {
      this.ticker = PIXI.Ticker.shared;

      this.renderer = new PIXI.Renderer({
        width: this.width,
        height: this.height,
        transparent: true
      });
      this.renderer.context.mozImageSmoothingEnabled = false;
      this.renderer.context.webkitImageSmoothingEnabled = false;

      this.canvasEl = this.renderer.view;

      this.imageEl.style.display = 'none';
      this.imageEl.parentElement.appendChild(this.canvasEl);

      this.stage = new PIXI.Container();

      this.particleContainer = new PIXI.Container();
      this.stage.addChild(this.particleContainer);
    }
  }, {
    key: 'initParticles',
    value: function initParticles() {
      this.particles = [];

      var particlesCount = this.particlesData.length;
      var shared = this.getShared();

      var particleInit = this.particleInit || function () {
        return {};
      };

      for (var i = 0; i < particlesCount; i++) {
        var particle = this.particlesData[i];

        var color = PIXI.utils.rgb2hex([particle.r, particle.g, particle.b]);

        this.particles.push(new _Particle2.default(this.particleContainer, Object.assign({
          x: shared.avgX,
          y: shared.avgY,
          mass: Math.random() * shared.massRand + shared.minMass,
          texture: this.createCircleTexture(shared.particleSize / 2, color, 1),
          delay: (shared.rangeY - (particle.y - shared.minY)) * (2 / shared.rangeY) + Math.random() * shared.delayRand
        }, particleInit(particle, shared))));
      }
    }
  }, {
    key: 'getShared',
    value: function getShared() {
      var particlesCount = this.particlesData.length;
      var particleSize = this.particleSize;
      var minMass = this.minMass;
      var massRand = this.massRand;
      var delayRand = this.delayRand;

      var sumX = 0;
      var sumY = 0;

      var minX = this.particlesData[0].x;
      var maxX = 0;

      var minY = this.particlesData[0].y;
      var maxY = 0;

      for (var i = 0; i < particlesCount; i++) {
        var particleData = this.particlesData[i];

        sumX += particleData.x;
        sumY += particleData.y;

        if (particleData.x < minX) minX = particleData.x;
        if (particleData.x > maxX) maxX = particleData.x;

        if (particleData.y < minY) minY = particleData.y;
        if (particleData.y > maxY) maxY = particleData.y;
      }

      return {
        width: this.width,
        height: this.height,
        halfWidth: this.width / 2,
        halfHeight: this.height / 2,
        particlesCount: particlesCount,
        particleSize: particleSize,
        minMass: minMass,
        massRand: massRand,
        delayRand: delayRand,
        minX: minX,
        minY: minY,
        maxX: maxX,
        maxY: maxY,
        sumX: sumX,
        sumY: sumY,
        avgX: sumX / particlesCount,
        avgY: sumY / particlesCount,
        rangeX: maxX - minX,
        rangeY: maxY - minY
      };
    }
  }, {
    key: 'createCircleTexture',
    value: function createCircleTexture(radius, color, alpha) {
      var graphics = new PIXI.Graphics();
      graphics.beginFill(color, alpha);
      graphics.drawCircle(0, 0, radius);
      graphics.endFill();
      var texture = this.renderer.generateTexture(graphics);
      graphics.clear();
      graphics.destroy();
      return texture;
    }
  }, {
    key: 'calculateScale',
    value: function calculateScale() {
      var canvasRect = this.canvasEl.getBoundingClientRect();
      this.scale = this.width / canvasRect.width;
    }
  }, {
    key: 'setParticlesTargets',
    value: function setParticlesTargets() {
      var l = this.particlesData.length;
      for (var i = 0; i < l; i++) {
        var particleData = this.particlesData[i];
        this.particles[i].setTarget(new _vector2.default(particleData.x, particleData.y));
      }
    }
  }, {
    key: 'bindEvents',
    value: function bindEvents() {
      window.addEventListener('resize', this.onResize.bind(this));
      if (this.mouseInteraction) {
        window.addEventListener('mousemove', this.onMouseMove.bind(this));
      }
    }
  }, {
    key: 'onResize',
    value: function onResize() {
      this.calculateScale();
    }
  }, {
    key: 'onMouseMove',
    value: function onMouseMove(e) {
      var canvasRect = this.canvasEl.getBoundingClientRect();
      this.mouseVector.set(e.clientX - canvasRect.left, e.clientY - canvasRect.top);
      this.mouseVector.multiply(this.scale);
    }
  }, {
    key: 'startLoop',
    value: function startLoop() {
      this.ticker.add(this.tick.bind(this));
    }
  }, {
    key: 'tick',
    value: function tick(delta) {
      this.update(delta);
      this.render(1);
    }
  }, {
    key: 'update',
    value: function update(delta) {
      var l = this.particles.length;
      for (var i = 0; i < l; i++) {
        var particle = this.particles[i];
        particle.addForce(particle.getForceToTarget());
        if (this.mouseInteraction) {
          particle.addForce(particle.getMouseForce(this.mouseVector));
        }
        particle.addForce(_vector2.default.multiply(particle.velocity, this.resistance));
        particle.update(delta);
      }
    }
  }, {
    key: 'render',
    value: function render(interp) {
      var l = this.particles.length;
      for (var i = 0; i < l; i++) {
        this.particles[i].render(interp);
      }

      this.renderer.render(this.stage);
    }
  }]);

  return Core;
}();

exports.default = Core;

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(/*! ../scss/index.scss */ "./src/scss/index.scss");

var _core = __webpack_require__(/*! ./core.js */ "./src/js/core.js");

var _core2 = _interopRequireDefault(_core);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PotatoParticles = _core2.default;

exports.default = PotatoParticles;

/***/ }),

/***/ "./src/js/vector.js":
/*!**************************!*\
  !*** ./src/js/vector.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Vector = function () {
  function Vector(x, y) {
    _classCallCheck(this, Vector);

    this.x = x;
    this.y = y;
  }

  _createClass(Vector, [{
    key: "set",
    value: function set(x, y) {
      this.x = x;
      this.y = y;
    }
  }, {
    key: "setX",
    value: function setX(x) {
      this.x = x;
    }
  }, {
    key: "setY",
    value: function setY(y) {
      this.y = y;
    }
  }, {
    key: "add",
    value: function add(vector) {
      this.x = Vector.roundAxis(this.x + vector.x);
      this.y = Vector.roundAxis(this.y + vector.y);
    }
  }, {
    key: "subtract",
    value: function subtract(vector) {
      this.x = Vector.roundAxis(this.x - vector.x);
      this.y = Vector.roundAxis(this.y - vector.y);
    }
  }, {
    key: "multiply",
    value: function multiply(n) {
      this.x = Vector.roundAxis(this.x * n);
      this.y = Vector.roundAxis(this.y * n);
    }
  }, {
    key: "divide",
    value: function divide(n) {
      this.x = Vector.roundAxis(this.x / n);
      this.y = Vector.roundAxis(this.y / n);
    }
  }, {
    key: "value",
    value: function value() {
      return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    }
  }, {
    key: "normalize",
    value: function normalize() {
      var value = this.value();

      if (value !== 0) {
        this.x /= value;
        this.y /= value;
      } else {
        this.x = 0;
        this.y = 0;
      }
    }
  }, {
    key: "clone",
    value: function clone() {
      return new Vector(this.x, this.y);
    }
  }], [{
    key: "add",
    value: function add(vectorA, vectorB) {
      var vectorOut = vectorA.clone();
      vectorOut.add(vectorB);
      return vectorOut;
    }
  }, {
    key: "subtract",
    value: function subtract(vectorA, vectorB) {
      var vectorOut = vectorA.clone();
      vectorOut.subtract(vectorB);
      return vectorOut;
    }
  }, {
    key: "multiply",
    value: function multiply(vector, n) {
      var vectorOut = vector.clone();
      vectorOut.multiply(n);
      return vectorOut;
    }
  }, {
    key: "divide",
    value: function divide(vector, n) {
      var vectorOut = vector.clone();
      vectorOut.divide(n);
      return vectorOut;
    }
  }, {
    key: "roundAxis",
    value: function roundAxis(axis) {
      return Math.round(axis * 1e5) / 1e5;
    }
  }]);

  return Vector;
}();

exports.default = Vector;

/***/ }),

/***/ "./src/scss/index.scss":
/*!*****************************!*\
  !*** ./src/scss/index.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "pixi.js":
/*!***********************!*\
  !*** external "PIXI" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_pixi_js__;

/***/ })

/******/ })["default"];
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Qb3RhdG9QYXJ0aWNsZXMvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL1BvdGF0b1BhcnRpY2xlcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9Qb3RhdG9QYXJ0aWNsZXMvLi9zcmMvanMvSW1hZ2VIZWxwZXIuanMiLCJ3ZWJwYWNrOi8vUG90YXRvUGFydGljbGVzLy4vc3JjL2pzL1BhcnRpY2xlLmpzIiwid2VicGFjazovL1BvdGF0b1BhcnRpY2xlcy8uL3NyYy9qcy9jb3JlLmpzIiwid2VicGFjazovL1BvdGF0b1BhcnRpY2xlcy8uL3NyYy9qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9Qb3RhdG9QYXJ0aWNsZXMvLi9zcmMvanMvdmVjdG9yLmpzIiwid2VicGFjazovL1BvdGF0b1BhcnRpY2xlcy8uL3NyYy9zY3NzL2luZGV4LnNjc3M/MDM1OCIsIndlYnBhY2s6Ly9Qb3RhdG9QYXJ0aWNsZXMvZXh0ZXJuYWwgXCJQSVhJXCIiXSwibmFtZXMiOlsiSW1hZ2VIZWxwZXIiLCJpc0ltYWdlTG9hZGVkIiwiY2FudmFzIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY3R4IiwiZ2V0Q29udGV4dCIsInNyYyIsIlByb21pc2UiLCJ0bXBJbWFnZUVsIiwiSW1hZ2UiLCJvbmxvYWQiLCJlIiwiaW1hZ2VFbCIsInRhcmdldCIsIm9uSW1hZ2VMb2FkZWQiLCJyZXNvbHZlIiwiaW1hZ2UiLCJ3aWR0aCIsImhlaWdodCIsInByb3BzIiwiY2hlY2tJbWFnZSIsInBpeGVsU2l6ZSIsInBpeGVsRmlsdGVyIiwicGl4ZWwiLCJhIiwiY2FudmFzV2lkdGgiLCJNYXRoIiwiY2VpbCIsImNhbnZhc0hlaWdodCIsInNldEF0dHJpYnV0ZSIsImltYWdlVG9EYXRhIiwiY2xlYXJSZWN0IiwiZHJhd0ltYWdlQ292ZXIiLCJpbWFnZURhdGEiLCJnZXRJbWFnZURhdGEiLCJkYXRhIiwieSIsIngiLCJpbmRleCIsInIiLCJnIiwiYiIsInB1c2giLCJpbWciLCJzY2FsZSIsIm1pbiIsInNpemUiLCJwb3MiLCJkcmF3SW1hZ2UiLCJQSVhJIiwiUGFydGljbGUiLCJjb250YWluZXIiLCJtYXNzIiwidGV4dHVyZSIsImRlbGF5IiwicG9zaXRpb24iLCJWZWN0b3IiLCJ2ZWxvY2l0eSIsImFjY2VsZXJhdGlvbiIsImZvcmNlIiwiY2xvbmUiLCJ3YWl0RnJhbWVzIiwid2FpdGluZyIsImNyZWF0ZVNwcml0ZSIsInNwcml0ZSIsIlNwcml0ZSIsImFuY2hvciIsInNldCIsImFkZENoaWxkIiwiYWRkIiwic3VidHJhY3QiLCJtdWx0aXBseSIsIm1vdXNlUG9zIiwiZGlzdGFuY2UiLCJ2YWx1ZSIsIm5vcm1hbGl6ZSIsImludkRpc3QiLCJxdWFkRGlzdCIsImxlc3NRdWFkRGlzdCIsIm11bHQiLCJkZWx0YSIsImRpdmlkZSIsIkNvcmUiLCJwYXJ0aWNsZVNpemUiLCJyZXNpc3RhbmNlIiwibWluTWFzcyIsIm1hc3NSYW5kIiwiZGVsYXlSYW5kIiwicGFydGljbGVJbml0IiwibW91c2VJbnRlcmFjdGlvbiIsImltYWdlSGVscGVyIiwibG9hZCIsInRoZW4iLCJvbkxvZ29Mb2FkZWQiLCJwYXJ0aWNsZXNEYXRhIiwiaW1hZ2VUb0RvdHMiLCJtb3VzZVZlY3RvciIsImluaXRSZW5kZXJlciIsImluaXRQYXJ0aWNsZXMiLCJyZW5kZXJlciIsInJlbmRlciIsInN0YWdlIiwic3RhcnRMb29wIiwiY2FsY3VsYXRlU2NhbGUiLCJiaW5kRXZlbnRzIiwic2V0UGFydGljbGVzVGFyZ2V0cyIsInRpY2tlciIsIlRpY2tlciIsInNoYXJlZCIsIlJlbmRlcmVyIiwidHJhbnNwYXJlbnQiLCJjb250ZXh0IiwibW96SW1hZ2VTbW9vdGhpbmdFbmFibGVkIiwid2Via2l0SW1hZ2VTbW9vdGhpbmdFbmFibGVkIiwiY2FudmFzRWwiLCJ2aWV3Iiwic3R5bGUiLCJkaXNwbGF5IiwicGFyZW50RWxlbWVudCIsImFwcGVuZENoaWxkIiwiQ29udGFpbmVyIiwicGFydGljbGVDb250YWluZXIiLCJwYXJ0aWNsZXMiLCJwYXJ0aWNsZXNDb3VudCIsImxlbmd0aCIsImdldFNoYXJlZCIsImkiLCJwYXJ0aWNsZSIsImNvbG9yIiwidXRpbHMiLCJyZ2IyaGV4IiwiT2JqZWN0IiwiYXNzaWduIiwiYXZnWCIsImF2Z1kiLCJyYW5kb20iLCJjcmVhdGVDaXJjbGVUZXh0dXJlIiwicmFuZ2VZIiwibWluWSIsInN1bVgiLCJzdW1ZIiwibWluWCIsIm1heFgiLCJtYXhZIiwicGFydGljbGVEYXRhIiwiaGFsZldpZHRoIiwiaGFsZkhlaWdodCIsInJhbmdlWCIsInJhZGl1cyIsImFscGhhIiwiZ3JhcGhpY3MiLCJHcmFwaGljcyIsImJlZ2luRmlsbCIsImRyYXdDaXJjbGUiLCJlbmRGaWxsIiwiZ2VuZXJhdGVUZXh0dXJlIiwiY2xlYXIiLCJkZXN0cm95IiwiY2FudmFzUmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImwiLCJzZXRUYXJnZXQiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwib25SZXNpemUiLCJiaW5kIiwib25Nb3VzZU1vdmUiLCJjbGllbnRYIiwibGVmdCIsImNsaWVudFkiLCJ0b3AiLCJ0aWNrIiwidXBkYXRlIiwiYWRkRm9yY2UiLCJnZXRGb3JjZVRvVGFyZ2V0IiwiZ2V0TW91c2VGb3JjZSIsImludGVycCIsIlBvdGF0b1BhcnRpY2xlcyIsInZlY3RvciIsInJvdW5kQXhpcyIsIm4iLCJzcXJ0IiwidmVjdG9yQSIsInZlY3RvckIiLCJ2ZWN0b3JPdXQiLCJheGlzIiwicm91bmQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7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QUNBNEgsZ0JBQVVsSCxRQUFWLENBQW1CaUgsT0FBbkI7QUFDQSxhQUFPQyxTQUFQO0FBQ0Q7Ozs2QkFFZU4sTSxFQUFRRSxDLEVBQUc7QUFDekIsVUFBTUksWUFBWU4sT0FBT3RILEtBQVAsRUFBbEI7QUFDQTRILGdCQUFVakgsUUFBVixDQUFtQjZHLENBQW5CO0FBQ0EsYUFBT0ksU0FBUDtBQUNEOzs7MkJBRWFOLE0sRUFBUUUsQyxFQUFHO0FBQ3ZCLFVBQU1JLFlBQVlOLE9BQU90SCxLQUFQLEVBQWxCO0FBQ0E0SCxnQkFBVXZHLE1BQVYsQ0FBaUJtRyxDQUFqQjtBQUNBLGFBQU9JLFNBQVA7QUFDRDs7OzhCQUVnQkMsSSxFQUFNO0FBQ3JCLGFBQU8vSixLQUFLZ0ssS0FBTCxDQUFXRCxPQUFPLEdBQWxCLElBQXlCLEdBQWhDO0FBQ0Q7Ozs7OztrQkFoQ2tCakksTTs7Ozs7Ozs7Ozs7QUNBckIsdUM7Ozs7Ozs7Ozs7O0FDQUEscUQiLCJmaWxlIjoicG90YXRvcGFydGljbGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiUElYSVwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIlBvdGF0b1BhcnRpY2xlc1wiLCBbXCJQSVhJXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIlBvdGF0b1BhcnRpY2xlc1wiXSA9IGZhY3RvcnkocmVxdWlyZShcIlBJWElcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIlBvdGF0b1BhcnRpY2xlc1wiXSA9IGZhY3Rvcnkocm9vdFtcIlBJWElcIl0pO1xufSkod2luZG93LCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3BpeGlfanNfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2pzL2luZGV4LmpzXCIpO1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW1hZ2VIZWxwZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmlzSW1hZ2VMb2FkZWQgPSBmYWxzZTtcblxuICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICB9XG5cbiAgbG9hZChzcmMpIHtcbiAgICB0aGlzLmlzSW1hZ2VMb2FkZWQgPSBmYWxzZTtcblxuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgIGNvbnN0IHRtcEltYWdlRWwgPSBuZXcgSW1hZ2UoKTtcbiAgICAgIHRtcEltYWdlRWwub25sb2FkID0gKGUpID0+IHtcbiAgICAgICAgY29uc3QgaW1hZ2VFbCA9IGUudGFyZ2V0O1xuICAgICAgICB0aGlzLm9uSW1hZ2VMb2FkZWQoaW1hZ2VFbCk7XG4gICAgICAgIHJlc29sdmUoaW1hZ2VFbCk7XG4gICAgICB9O1xuICAgICAgdG1wSW1hZ2VFbC5zcmMgPSBzcmM7XG4gICAgfSk7XG4gIH1cblxuICBvbkltYWdlTG9hZGVkKGltYWdlKSB7XG4gICAgdGhpcy5pbWFnZSA9IGltYWdlO1xuICAgIHRoaXMud2lkdGggPSB0aGlzLmltYWdlLndpZHRoO1xuICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5pbWFnZS5oZWlnaHQ7XG5cbiAgICB0aGlzLmlzSW1hZ2VMb2FkZWQgPSB0cnVlO1xuICB9XG5cbiAgY2hlY2tJbWFnZSgpIHtcbiAgICBpZiAodGhpcy5pc0ltYWdlTG9hZGVkKSByZXR1cm4gdHJ1ZTtcblxuICAgIC8vIGNvbnNvbGUud2FybignSW1hZ2UgaXMgbm90IGxvYWRlZCB5ZXQnKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpbWFnZVRvRG90cyhwcm9wcykge1xuICAgIGlmICghdGhpcy5jaGVja0ltYWdlKCkpIHJldHVybiBudWxsO1xuXG4gICAgY29uc3QgaW1hZ2UgPSB0aGlzLmltYWdlO1xuICAgIGNvbnN0IHtcbiAgICAgIHdpZHRoID0gaW1hZ2Uud2lkdGgsXG4gICAgICBoZWlnaHQgPSBpbWFnZS5oZWlnaHQsXG4gICAgICBwaXhlbFNpemUgPSAxLFxuICAgICAgcGl4ZWxGaWx0ZXIgPSBwaXhlbCA9PiAocGl4ZWwuYSA+PSAwLjQpLFxuICAgIH0gPSBwcm9wcztcblxuICAgIGNvbnN0IGNhbnZhc1dpZHRoID0gTWF0aC5jZWlsKHdpZHRoIC8gcGl4ZWxTaXplKTtcbiAgICBjb25zdCBjYW52YXNIZWlnaHQgPSBNYXRoLmNlaWwoaGVpZ2h0IC8gcGl4ZWxTaXplKTtcblxuICAgIHRoaXMuY2FudmFzLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCBjYW52YXNXaWR0aCk7XG4gICAgdGhpcy5jYW52YXMuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCBjYW52YXNIZWlnaHQpO1xuXG4gICAgcmV0dXJuIHRoaXMuaW1hZ2VUb0RhdGEoaW1hZ2UsIHtcbiAgICAgIGNhbnZhc1dpZHRoLCBjYW52YXNIZWlnaHQsIHBpeGVsU2l6ZSwgcGl4ZWxGaWx0ZXIsXG4gICAgfSk7XG4gIH1cblxuICBpbWFnZVRvRGF0YShpbWFnZSwgcHJvcHMpIHtcbiAgICBjb25zdCB7XG4gICAgICBjYW52YXNXaWR0aCxcbiAgICAgIGNhbnZhc0hlaWdodCxcbiAgICAgIHBpeGVsU2l6ZSxcbiAgICAgIHBpeGVsRmlsdGVyLFxuICAgIH0gPSBwcm9wcztcblxuICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXNXaWR0aCwgY2FudmFzSGVpZ2h0KTtcbiAgICB0aGlzLmRyYXdJbWFnZUNvdmVyKGltYWdlLCBjYW52YXNXaWR0aCwgY2FudmFzSGVpZ2h0KTtcblxuICAgIGNvbnN0IGltYWdlRGF0YSA9IHRoaXMuY3R4LmdldEltYWdlRGF0YSgwLCAwLCBjYW52YXNXaWR0aCwgY2FudmFzSGVpZ2h0KS5kYXRhO1xuXG4gICAgY29uc3QgZGF0YSA9IFtdO1xuICAgIGZvciAobGV0IHkgPSAwOyB5IDwgY2FudmFzSGVpZ2h0OyB5KyspIHtcbiAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgY2FudmFzV2lkdGg7IHgrKykge1xuICAgICAgICBjb25zdCBpbmRleCA9ICh5ICogY2FudmFzV2lkdGggKyB4KSAqIDQ7XG5cbiAgICAgICAgY29uc3QgcGl4ZWwgPSB7XG4gICAgICAgICAgeDogeCAqIHBpeGVsU2l6ZSxcbiAgICAgICAgICB5OiB5ICogcGl4ZWxTaXplLFxuICAgICAgICAgIHI6IChpbWFnZURhdGFbaW5kZXggKyAwXSAvIDI1NSksXG4gICAgICAgICAgZzogKGltYWdlRGF0YVtpbmRleCArIDFdIC8gMjU1KSxcbiAgICAgICAgICBiOiAoaW1hZ2VEYXRhW2luZGV4ICsgMl0gLyAyNTUpLFxuICAgICAgICAgIGE6IChpbWFnZURhdGFbaW5kZXggKyAzXSAvIDI1NSksXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKCFwaXhlbEZpbHRlcihwaXhlbCkpIGNvbnRpbnVlO1xuXG4gICAgICAgIGRhdGEucHVzaChwaXhlbCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICBkcmF3SW1hZ2VDb3ZlcihpbWcsIHdpZHRoLCBoZWlnaHQpIHtcbiAgICBjb25zdCBzY2FsZSA9IE1hdGgubWluKHdpZHRoIC8gaW1nLndpZHRoLCBoZWlnaHQgLyBpbWcuaGVpZ2h0KTtcbiAgICBjb25zdCBzaXplID0ge1xuICAgICAgd2lkdGg6IGltZy53aWR0aCAqIHNjYWxlLFxuICAgICAgaGVpZ2h0OiBpbWcuaGVpZ2h0ICogc2NhbGUsXG4gICAgfTtcbiAgICBjb25zdCBwb3MgPSB7XG4gICAgICB4OiAod2lkdGggLSBzaXplLndpZHRoKSAvIDIsXG4gICAgICB5OiAoaGVpZ2h0IC0gc2l6ZS5oZWlnaHQpIC8gMixcbiAgICB9O1xuICAgIHRoaXMuY3R4LmRyYXdJbWFnZShpbWcsIDAsIDAsIGltZy53aWR0aCwgaW1nLmhlaWdodCwgcG9zLngsIHBvcy55LCBzaXplLndpZHRoLCBzaXplLmhlaWdodCk7XG4gIH1cbn1cbiIsImltcG9ydCAqIGFzIFBJWEkgZnJvbSAncGl4aS5qcyc7XG5cbmltcG9ydCBWZWN0b3IgZnJvbSAnLi92ZWN0b3InO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXJ0aWNsZSB7XG4gIGNvbnN0cnVjdG9yKGNvbnRhaW5lciwge1xuICAgIHgsIHksIG1hc3MgPSAxLCB0ZXh0dXJlLCBkZWxheSxcbiAgfSkge1xuICAgIHRoaXMucG9zaXRpb24gPSBuZXcgVmVjdG9yKHgsIHkpO1xuICAgIHRoaXMudmVsb2NpdHkgPSBuZXcgVmVjdG9yKDAsIDApO1xuICAgIHRoaXMuYWNjZWxlcmF0aW9uID0gbmV3IFZlY3RvcigwLCAwKTtcbiAgICB0aGlzLmZvcmNlID0gbmV3IFZlY3RvcigwLCAwKTtcbiAgICB0aGlzLm1hc3MgPSBtYXNzO1xuICAgIHRoaXMudGFyZ2V0ID0gdGhpcy5wb3NpdGlvbi5jbG9uZSgpO1xuXG4gICAgdGhpcy53YWl0RnJhbWVzID0gZGVsYXkgKiA2MDsgLy8gKiBGUFNcbiAgICB0aGlzLndhaXRpbmcgPSB0aGlzLndhaXRGcmFtZXMgPiAwO1xuXG4gICAgaWYgKCFjb250YWluZXIpIHJldHVybjtcbiAgICB0aGlzLmNyZWF0ZVNwcml0ZShjb250YWluZXIsIHsgdGV4dHVyZSB9KTtcbiAgfVxuXG4gIGNyZWF0ZVNwcml0ZShjb250YWluZXIsIHsgdGV4dHVyZSB9KSB7XG4gICAgdGhpcy5zcHJpdGUgPSBuZXcgUElYSS5TcHJpdGUodGV4dHVyZSk7XG4gICAgdGhpcy5zcHJpdGUuYW5jaG9yLnNldCgwLjUpO1xuICAgIHRoaXMuc3ByaXRlLnBvc2l0aW9uLnNldCh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSk7XG4gICAgY29udGFpbmVyLmFkZENoaWxkKHRoaXMuc3ByaXRlKTtcbiAgfVxuXG4gIGFkZEZvcmNlKGZvcmNlKSB7XG4gICAgaWYgKCFmb3JjZSkgcmV0dXJuO1xuICAgIHRoaXMuZm9yY2UuYWRkKGZvcmNlKTtcbiAgfVxuXG4gIHNldFRhcmdldCh0YXJnZXQpIHtcbiAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcbiAgfVxuXG4gIGdldEZvcmNlVG9UYXJnZXQoKSB7XG4gICAgaWYgKCF0aGlzLnRhcmdldCkgcmV0dXJuIG51bGw7XG5cbiAgICBjb25zdCBmb3JjZSA9IFZlY3Rvci5zdWJ0cmFjdCh0aGlzLnRhcmdldCwgdGhpcy5wb3NpdGlvbik7XG4gICAgZm9yY2UubXVsdGlwbHkoMC4wNCk7XG5cbiAgICByZXR1cm4gZm9yY2U7XG4gIH1cblxuICBnZXRNb3VzZUZvcmNlKG1vdXNlUG9zKSB7XG4gICAgY29uc3QgZm9yY2UgPSBWZWN0b3Iuc3VidHJhY3QobW91c2VQb3MsIHRoaXMucG9zaXRpb24pO1xuICAgIGNvbnN0IGRpc3RhbmNlID0gZm9yY2UudmFsdWUoKTtcbiAgICBmb3JjZS5ub3JtYWxpemUoKTtcbiAgICBjb25zdCBpbnZEaXN0ID0gKDEyMCAvIGRpc3RhbmNlKTtcbiAgICBjb25zdCBxdWFkRGlzdCA9IChpbnZEaXN0ICogaW52RGlzdCk7XG4gICAgY29uc3QgbGVzc1F1YWREaXN0ID0gcXVhZERpc3QgLSAwLjA0O1xuICAgIGNvbnN0IG11bHQgPSBsZXNzUXVhZERpc3QgPCAwID8gMCA6IGxlc3NRdWFkRGlzdCAqIDAuODtcbiAgICBmb3JjZS5tdWx0aXBseSgtbXVsdCk7XG5cbiAgICByZXR1cm4gZm9yY2U7XG4gIH1cblxuICB1cGRhdGUoZGVsdGEpIHtcbiAgICBpZiAodGhpcy53YWl0aW5nKSB7XG4gICAgICB0aGlzLndhaXRGcmFtZXMgLT0gZGVsdGE7XG4gICAgICBpZiAodGhpcy53YWl0RnJhbWVzID4gMCkgcmV0dXJuO1xuXG4gICAgICB0aGlzLndhaXRGcmFtZXMgPSAwO1xuICAgICAgdGhpcy53YWl0aW5nID0gZmFsc2U7XG4gICAgICB0aGlzLmZvcmNlLnNldCgwLCAwKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmFjY2VsZXJhdGlvbi5zZXQodGhpcy5mb3JjZS54LCB0aGlzLmZvcmNlLnkpO1xuICAgIHRoaXMuYWNjZWxlcmF0aW9uLmRpdmlkZSh0aGlzLm1hc3MpO1xuICAgIHRoaXMudmVsb2NpdHkuYWRkKHRoaXMuYWNjZWxlcmF0aW9uKTtcbiAgICB0aGlzLnBvc2l0aW9uLmFkZCh0aGlzLnZlbG9jaXR5KTtcbiAgICB0aGlzLmZvcmNlLnNldCgwLCAwKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBpZiAoIXRoaXMuc3ByaXRlKSByZXR1cm47XG4gICAgdGhpcy5zcHJpdGUucG9zaXRpb24uc2V0KHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55KTtcbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgUElYSSBmcm9tICdwaXhpLmpzJztcblxuaW1wb3J0IEltYWdlSGVscGVyIGZyb20gJy4vSW1hZ2VIZWxwZXIuanMnO1xuaW1wb3J0IFZlY3RvciBmcm9tICcuL3ZlY3Rvci5qcyc7XG5pbXBvcnQgUGFydGljbGUgZnJvbSAnLi9QYXJ0aWNsZS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvcmUge1xuICBjb25zdHJ1Y3Rvcih7XG4gICAgaW1hZ2VFbCxcbiAgICBwaXhlbFNpemUgPSAxMCxcbiAgICBwYXJ0aWNsZVNpemUgPSA2LFxuICAgIHJlc2lzdGFuY2UgPSAtMC43LFxuICAgIG1pbk1hc3MgPSA0LFxuICAgIG1hc3NSYW5kID0gMixcbiAgICBkZWxheVJhbmQgPSAwLjQsXG4gICAgcGl4ZWxGaWx0ZXIsXG4gICAgcGFydGljbGVJbml0LFxuICAgIG1vdXNlSW50ZXJhY3Rpb24gPSB0cnVlLFxuICB9KSB7XG4gICAgdGhpcy5pbWFnZUVsID0gaW1hZ2VFbDtcblxuICAgIHRoaXMucGl4ZWxTaXplID0gcGl4ZWxTaXplO1xuICAgIHRoaXMucGFydGljbGVTaXplID0gcGFydGljbGVTaXplO1xuICAgIHRoaXMucmVzaXN0YW5jZSA9IHJlc2lzdGFuY2U7XG4gICAgdGhpcy5taW5NYXNzID0gbWluTWFzcztcbiAgICB0aGlzLm1hc3NSYW5kID0gbWFzc1JhbmQ7XG4gICAgdGhpcy5kZWxheVJhbmQgPSBkZWxheVJhbmQ7XG4gICAgdGhpcy5waXhlbEZpbHRlciA9IHBpeGVsRmlsdGVyO1xuICAgIHRoaXMucGFydGljbGVJbml0ID0gcGFydGljbGVJbml0O1xuICAgIHRoaXMubW91c2VJbnRlcmFjdGlvbiA9IG1vdXNlSW50ZXJhY3Rpb247XG5cbiAgICB0aGlzLmltYWdlSGVscGVyID0gbmV3IEltYWdlSGVscGVyKCk7XG4gICAgdGhpcy5pbWFnZUhlbHBlci5sb2FkKGltYWdlRWwuc3JjKS50aGVuKChpbWFnZSkgPT4ge1xuICAgICAgdGhpcy5vbkxvZ29Mb2FkZWQoaW1hZ2UpO1xuICAgIH0pO1xuICB9XG5cbiAgb25Mb2dvTG9hZGVkKGltYWdlKSB7XG4gICAgdGhpcy53aWR0aCA9IGltYWdlLndpZHRoO1xuICAgIHRoaXMuaGVpZ2h0ID0gaW1hZ2UuaGVpZ2h0O1xuXG4gICAgdGhpcy5wYXJ0aWNsZXNEYXRhID0gdGhpcy5pbWFnZUhlbHBlci5pbWFnZVRvRG90cyh7XG4gICAgICB3aWR0aDogdGhpcy53aWR0aCxcbiAgICAgIGhlaWdodDogdGhpcy5oZWlnaHQsXG4gICAgICBwaXhlbFNpemU6IHRoaXMucGl4ZWxTaXplLFxuICAgICAgcGl4ZWxGaWx0ZXI6IHRoaXMucGl4ZWxGaWx0ZXIsXG4gICAgfSk7XG5cbiAgICB0aGlzLm1vdXNlVmVjdG9yID0gbmV3IFZlY3RvcigwLCAwKTtcblxuICAgIHRoaXMuaW5pdFJlbmRlcmVyKCk7XG4gICAgdGhpcy5pbml0UGFydGljbGVzKCk7XG4gICAgdGhpcy5yZW5kZXJlci5yZW5kZXIodGhpcy5zdGFnZSk7XG4gICAgdGhpcy5zdGFydExvb3AoKTtcblxuICAgIHRoaXMuY2FsY3VsYXRlU2NhbGUoKTtcbiAgICB0aGlzLmJpbmRFdmVudHMoKTtcblxuICAgIHRoaXMuc2V0UGFydGljbGVzVGFyZ2V0cygpO1xuICB9XG5cbiAgaW5pdFJlbmRlcmVyKCkge1xuICAgIHRoaXMudGlja2VyID0gUElYSS5UaWNrZXIuc2hhcmVkO1xuXG4gICAgdGhpcy5yZW5kZXJlciA9IG5ldyBQSVhJLlJlbmRlcmVyKHtcbiAgICAgIHdpZHRoOiB0aGlzLndpZHRoLFxuICAgICAgaGVpZ2h0OiB0aGlzLmhlaWdodCxcbiAgICAgIHRyYW5zcGFyZW50OiB0cnVlLFxuICAgIH0pO1xuICAgIHRoaXMucmVuZGVyZXIuY29udGV4dC5tb3pJbWFnZVNtb290aGluZ0VuYWJsZWQgPSBmYWxzZTtcbiAgICB0aGlzLnJlbmRlcmVyLmNvbnRleHQud2Via2l0SW1hZ2VTbW9vdGhpbmdFbmFibGVkID0gZmFsc2U7XG5cbiAgICB0aGlzLmNhbnZhc0VsID0gdGhpcy5yZW5kZXJlci52aWV3O1xuXG4gICAgdGhpcy5pbWFnZUVsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgdGhpcy5pbWFnZUVsLnBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5jYW52YXNFbCk7XG5cbiAgICB0aGlzLnN0YWdlID0gbmV3IFBJWEkuQ29udGFpbmVyKCk7XG5cbiAgICB0aGlzLnBhcnRpY2xlQ29udGFpbmVyID0gbmV3IFBJWEkuQ29udGFpbmVyKCk7XG4gICAgdGhpcy5zdGFnZS5hZGRDaGlsZCh0aGlzLnBhcnRpY2xlQ29udGFpbmVyKTtcbiAgfVxuXG4gIGluaXRQYXJ0aWNsZXMoKSB7XG4gICAgdGhpcy5wYXJ0aWNsZXMgPSBbXTtcblxuICAgIGNvbnN0IHBhcnRpY2xlc0NvdW50ID0gdGhpcy5wYXJ0aWNsZXNEYXRhLmxlbmd0aDtcbiAgICBjb25zdCBzaGFyZWQgPSB0aGlzLmdldFNoYXJlZCgpO1xuXG4gICAgY29uc3QgcGFydGljbGVJbml0ID0gdGhpcy5wYXJ0aWNsZUluaXQgfHwgKCgpID0+ICh7fSkpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJ0aWNsZXNDb3VudDsgaSsrKSB7XG4gICAgICBjb25zdCBwYXJ0aWNsZSA9IHRoaXMucGFydGljbGVzRGF0YVtpXTtcblxuICAgICAgY29uc3QgY29sb3IgPSBQSVhJLnV0aWxzLnJnYjJoZXgoW3BhcnRpY2xlLnIsIHBhcnRpY2xlLmcsIHBhcnRpY2xlLmJdKTtcblxuICAgICAgdGhpcy5wYXJ0aWNsZXMucHVzaChuZXcgUGFydGljbGUodGhpcy5wYXJ0aWNsZUNvbnRhaW5lciwgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgIHg6IHNoYXJlZC5hdmdYLFxuICAgICAgICB5OiBzaGFyZWQuYXZnWSxcbiAgICAgICAgbWFzczogTWF0aC5yYW5kb20oKSAqIHNoYXJlZC5tYXNzUmFuZCArIHNoYXJlZC5taW5NYXNzLFxuICAgICAgICB0ZXh0dXJlOiB0aGlzLmNyZWF0ZUNpcmNsZVRleHR1cmUoc2hhcmVkLnBhcnRpY2xlU2l6ZSAvIDIsIGNvbG9yLCAxKSxcbiAgICAgICAgZGVsYXk6IChcbiAgICAgICAgICAoKHNoYXJlZC5yYW5nZVkgLSAocGFydGljbGUueSAtIHNoYXJlZC5taW5ZKSkgKiAoMiAvIHNoYXJlZC5yYW5nZVkpKVxuICAgICAgICAgICsgKE1hdGgucmFuZG9tKCkgKiBzaGFyZWQuZGVsYXlSYW5kKVxuICAgICAgICApLFxuICAgICAgfSwgcGFydGljbGVJbml0KHBhcnRpY2xlLCBzaGFyZWQpKSkpO1xuICAgIH1cbiAgfVxuXG4gIGdldFNoYXJlZCgpIHtcbiAgICBjb25zdCBwYXJ0aWNsZXNDb3VudCA9IHRoaXMucGFydGljbGVzRGF0YS5sZW5ndGg7XG4gICAgY29uc3QgcGFydGljbGVTaXplID0gdGhpcy5wYXJ0aWNsZVNpemU7XG4gICAgY29uc3QgbWluTWFzcyA9IHRoaXMubWluTWFzcztcbiAgICBjb25zdCBtYXNzUmFuZCA9IHRoaXMubWFzc1JhbmQ7XG4gICAgY29uc3QgZGVsYXlSYW5kID0gdGhpcy5kZWxheVJhbmQ7XG5cbiAgICBsZXQgc3VtWCA9IDA7XG4gICAgbGV0IHN1bVkgPSAwO1xuXG4gICAgbGV0IG1pblggPSB0aGlzLnBhcnRpY2xlc0RhdGFbMF0ueDtcbiAgICBsZXQgbWF4WCA9IDA7XG5cbiAgICBsZXQgbWluWSA9IHRoaXMucGFydGljbGVzRGF0YVswXS55O1xuICAgIGxldCBtYXhZID0gMDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFydGljbGVzQ291bnQ7IGkrKykge1xuICAgICAgY29uc3QgcGFydGljbGVEYXRhID0gdGhpcy5wYXJ0aWNsZXNEYXRhW2ldO1xuXG4gICAgICBzdW1YICs9IHBhcnRpY2xlRGF0YS54O1xuICAgICAgc3VtWSArPSBwYXJ0aWNsZURhdGEueTtcblxuICAgICAgaWYgKHBhcnRpY2xlRGF0YS54IDwgbWluWCkgbWluWCA9IHBhcnRpY2xlRGF0YS54O1xuICAgICAgaWYgKHBhcnRpY2xlRGF0YS54ID4gbWF4WCkgbWF4WCA9IHBhcnRpY2xlRGF0YS54O1xuXG4gICAgICBpZiAocGFydGljbGVEYXRhLnkgPCBtaW5ZKSBtaW5ZID0gcGFydGljbGVEYXRhLnk7XG4gICAgICBpZiAocGFydGljbGVEYXRhLnkgPiBtYXhZKSBtYXhZID0gcGFydGljbGVEYXRhLnk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHdpZHRoOiB0aGlzLndpZHRoLFxuICAgICAgaGVpZ2h0OiB0aGlzLmhlaWdodCxcbiAgICAgIGhhbGZXaWR0aDogdGhpcy53aWR0aCAvIDIsXG4gICAgICBoYWxmSGVpZ2h0OiB0aGlzLmhlaWdodCAvIDIsXG4gICAgICBwYXJ0aWNsZXNDb3VudCxcbiAgICAgIHBhcnRpY2xlU2l6ZSxcbiAgICAgIG1pbk1hc3MsXG4gICAgICBtYXNzUmFuZCxcbiAgICAgIGRlbGF5UmFuZCxcbiAgICAgIG1pblgsXG4gICAgICBtaW5ZLFxuICAgICAgbWF4WCxcbiAgICAgIG1heFksXG4gICAgICBzdW1YLFxuICAgICAgc3VtWSxcbiAgICAgIGF2Z1g6IChzdW1YIC8gcGFydGljbGVzQ291bnQpLFxuICAgICAgYXZnWTogKHN1bVkgLyBwYXJ0aWNsZXNDb3VudCksXG4gICAgICByYW5nZVg6IChtYXhYIC0gbWluWCksXG4gICAgICByYW5nZVk6IChtYXhZIC0gbWluWSksXG4gICAgfTtcbiAgfVxuXG4gIGNyZWF0ZUNpcmNsZVRleHR1cmUocmFkaXVzLCBjb2xvciwgYWxwaGEpIHtcbiAgICBjb25zdCBncmFwaGljcyA9IG5ldyBQSVhJLkdyYXBoaWNzKCk7XG4gICAgZ3JhcGhpY3MuYmVnaW5GaWxsKGNvbG9yLCBhbHBoYSk7XG4gICAgZ3JhcGhpY3MuZHJhd0NpcmNsZSgwLCAwLCByYWRpdXMpO1xuICAgIGdyYXBoaWNzLmVuZEZpbGwoKTtcbiAgICBjb25zdCB0ZXh0dXJlID0gdGhpcy5yZW5kZXJlci5nZW5lcmF0ZVRleHR1cmUoZ3JhcGhpY3MpO1xuICAgIGdyYXBoaWNzLmNsZWFyKCk7XG4gICAgZ3JhcGhpY3MuZGVzdHJveSgpO1xuICAgIHJldHVybiB0ZXh0dXJlO1xuICB9XG5cbiAgY2FsY3VsYXRlU2NhbGUoKSB7XG4gICAgY29uc3QgY2FudmFzUmVjdCA9IHRoaXMuY2FudmFzRWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgdGhpcy5zY2FsZSA9IHRoaXMud2lkdGggLyBjYW52YXNSZWN0LndpZHRoO1xuICB9XG5cbiAgc2V0UGFydGljbGVzVGFyZ2V0cygpIHtcbiAgICBjb25zdCBsID0gdGhpcy5wYXJ0aWNsZXNEYXRhLmxlbmd0aDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGw7IGkrKykge1xuICAgICAgY29uc3QgcGFydGljbGVEYXRhID0gdGhpcy5wYXJ0aWNsZXNEYXRhW2ldO1xuICAgICAgdGhpcy5wYXJ0aWNsZXNbaV0uc2V0VGFyZ2V0KG5ldyBWZWN0b3IocGFydGljbGVEYXRhLngsIHBhcnRpY2xlRGF0YS55KSk7XG4gICAgfVxuICB9XG5cbiAgYmluZEV2ZW50cygpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5vblJlc2l6ZS5iaW5kKHRoaXMpKTtcbiAgICBpZiAodGhpcy5tb3VzZUludGVyYWN0aW9uKSB7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5vbk1vdXNlTW92ZS5iaW5kKHRoaXMpKTtcbiAgICB9XG4gIH1cblxuICBvblJlc2l6ZSgpIHtcbiAgICB0aGlzLmNhbGN1bGF0ZVNjYWxlKCk7XG4gIH1cblxuICBvbk1vdXNlTW92ZShlKSB7XG4gICAgY29uc3QgY2FudmFzUmVjdCA9IHRoaXMuY2FudmFzRWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgdGhpcy5tb3VzZVZlY3Rvci5zZXQoZS5jbGllbnRYIC0gY2FudmFzUmVjdC5sZWZ0LCBlLmNsaWVudFkgLSBjYW52YXNSZWN0LnRvcCk7XG4gICAgdGhpcy5tb3VzZVZlY3Rvci5tdWx0aXBseSh0aGlzLnNjYWxlKTtcbiAgfVxuXG4gIHN0YXJ0TG9vcCgpIHtcbiAgICB0aGlzLnRpY2tlci5hZGQodGhpcy50aWNrLmJpbmQodGhpcykpO1xuICB9XG5cbiAgdGljayhkZWx0YSkge1xuICAgIHRoaXMudXBkYXRlKGRlbHRhKTtcbiAgICB0aGlzLnJlbmRlcigxKTtcbiAgfVxuXG4gIHVwZGF0ZShkZWx0YSkge1xuICAgIGNvbnN0IGwgPSB0aGlzLnBhcnRpY2xlcy5sZW5ndGg7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsOyBpKyspIHtcbiAgICAgIGNvbnN0IHBhcnRpY2xlID0gdGhpcy5wYXJ0aWNsZXNbaV07XG4gICAgICBwYXJ0aWNsZS5hZGRGb3JjZShwYXJ0aWNsZS5nZXRGb3JjZVRvVGFyZ2V0KCkpO1xuICAgICAgaWYgKHRoaXMubW91c2VJbnRlcmFjdGlvbikge1xuICAgICAgICBwYXJ0aWNsZS5hZGRGb3JjZShwYXJ0aWNsZS5nZXRNb3VzZUZvcmNlKHRoaXMubW91c2VWZWN0b3IpKTtcbiAgICAgIH1cbiAgICAgIHBhcnRpY2xlLmFkZEZvcmNlKFZlY3Rvci5tdWx0aXBseShwYXJ0aWNsZS52ZWxvY2l0eSwgdGhpcy5yZXNpc3RhbmNlKSk7XG4gICAgICBwYXJ0aWNsZS51cGRhdGUoZGVsdGEpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcihpbnRlcnApIHtcbiAgICBjb25zdCBsID0gdGhpcy5wYXJ0aWNsZXMubGVuZ3RoO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbDsgaSsrKSB7XG4gICAgICB0aGlzLnBhcnRpY2xlc1tpXS5yZW5kZXIoaW50ZXJwKTtcbiAgICB9XG5cbiAgICB0aGlzLnJlbmRlcmVyLnJlbmRlcih0aGlzLnN0YWdlKTtcbiAgfVxufVxuIiwiaW1wb3J0ICcuLi9zY3NzL2luZGV4LnNjc3MnO1xuXG5pbXBvcnQgQ29yZSBmcm9tICcuL2NvcmUuanMnO1xuXG5jb25zdCBQb3RhdG9QYXJ0aWNsZXMgPSBDb3JlO1xuXG5leHBvcnQgZGVmYXVsdCBQb3RhdG9QYXJ0aWNsZXM7XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBWZWN0b3Ige1xuICBjb25zdHJ1Y3Rvcih4LCB5KSB7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICB9XG5cbiAgc3RhdGljIGFkZCh2ZWN0b3JBLCB2ZWN0b3JCKSB7XG4gICAgY29uc3QgdmVjdG9yT3V0ID0gdmVjdG9yQS5jbG9uZSgpO1xuICAgIHZlY3Rvck91dC5hZGQodmVjdG9yQik7XG4gICAgcmV0dXJuIHZlY3Rvck91dDtcbiAgfVxuXG4gIHN0YXRpYyBzdWJ0cmFjdCh2ZWN0b3JBLCB2ZWN0b3JCKSB7XG4gICAgY29uc3QgdmVjdG9yT3V0ID0gdmVjdG9yQS5jbG9uZSgpO1xuICAgIHZlY3Rvck91dC5zdWJ0cmFjdCh2ZWN0b3JCKTtcbiAgICByZXR1cm4gdmVjdG9yT3V0O1xuICB9XG5cbiAgc3RhdGljIG11bHRpcGx5KHZlY3Rvciwgbikge1xuICAgIGNvbnN0IHZlY3Rvck91dCA9IHZlY3Rvci5jbG9uZSgpO1xuICAgIHZlY3Rvck91dC5tdWx0aXBseShuKTtcbiAgICByZXR1cm4gdmVjdG9yT3V0O1xuICB9XG5cbiAgc3RhdGljIGRpdmlkZSh2ZWN0b3IsIG4pIHtcbiAgICBjb25zdCB2ZWN0b3JPdXQgPSB2ZWN0b3IuY2xvbmUoKTtcbiAgICB2ZWN0b3JPdXQuZGl2aWRlKG4pO1xuICAgIHJldHVybiB2ZWN0b3JPdXQ7XG4gIH1cblxuICBzdGF0aWMgcm91bmRBeGlzKGF4aXMpIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChheGlzICogMWU1KSAvIDFlNTtcbiAgfVxuXG4gIHNldCh4LCB5KSB7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICB9XG5cbiAgc2V0WCh4KSB7XG4gICAgdGhpcy54ID0geDtcbiAgfVxuXG4gIHNldFkoeSkge1xuICAgIHRoaXMueSA9IHk7XG4gIH1cblxuICBhZGQodmVjdG9yKSB7XG4gICAgdGhpcy54ID0gVmVjdG9yLnJvdW5kQXhpcyh0aGlzLnggKyB2ZWN0b3IueCk7XG4gICAgdGhpcy55ID0gVmVjdG9yLnJvdW5kQXhpcyh0aGlzLnkgKyB2ZWN0b3IueSk7XG4gIH1cblxuICBzdWJ0cmFjdCh2ZWN0b3IpIHtcbiAgICB0aGlzLnggPSBWZWN0b3Iucm91bmRBeGlzKHRoaXMueCAtIHZlY3Rvci54KTtcbiAgICB0aGlzLnkgPSBWZWN0b3Iucm91bmRBeGlzKHRoaXMueSAtIHZlY3Rvci55KTtcbiAgfVxuXG4gIG11bHRpcGx5KG4pIHtcbiAgICB0aGlzLnggPSBWZWN0b3Iucm91bmRBeGlzKHRoaXMueCAqIG4pO1xuICAgIHRoaXMueSA9IFZlY3Rvci5yb3VuZEF4aXModGhpcy55ICogbik7XG4gIH1cblxuICBkaXZpZGUobikge1xuICAgIHRoaXMueCA9IFZlY3Rvci5yb3VuZEF4aXModGhpcy54IC8gbik7XG4gICAgdGhpcy55ID0gVmVjdG9yLnJvdW5kQXhpcyh0aGlzLnkgLyBuKTtcbiAgfVxuXG4gIHZhbHVlKCkge1xuICAgIHJldHVybiBNYXRoLnNxcnQoKHRoaXMueCAqKiAyKSArICh0aGlzLnkgKiogMikpO1xuICB9XG5cbiAgbm9ybWFsaXplKCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy52YWx1ZSgpO1xuXG4gICAgaWYgKHZhbHVlICE9PSAwKSB7XG4gICAgICB0aGlzLnggLz0gdmFsdWU7XG4gICAgICB0aGlzLnkgLz0gdmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMueCA9IDA7XG4gICAgICB0aGlzLnkgPSAwO1xuICAgIH1cbiAgfVxuXG4gIGNsb25lKCkge1xuICAgIHJldHVybiBuZXcgVmVjdG9yKHRoaXMueCwgdGhpcy55KTtcbiAgfVxufVxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3BpeGlfanNfXzsiXSwic291cmNlUm9vdCI6IiJ9