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

      var maxChanVal = 255;
      var allChannels = 4;
      var chanR = 0;
      var chanG = 1;
      var chanB = 2;
      var chanA = 3;

      var data = [];
      for (var y = 0; y < canvasHeight; y++) {
        for (var x = 0; x < canvasWidth; x++) {
          var index = (y * canvasWidth + x) * allChannels;

          var pixel = {
            x: x * pixelSize,
            y: y * pixelSize,
            r: imageData[index + chanR] / maxChanVal,
            g: imageData[index + chanG] / maxChanVal,
            b: imageData[index + chanB] / maxChanVal,
            a: imageData[index + chanA] / maxChanVal
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

    var rootEl = _ref.rootEl,
        imageSrc = _ref.imageSrc,
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

    this.rootEl = rootEl;

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
    this.imageHelper.load(imageSrc).then(function (image) {
      _this.onLogoLoaded(image);
      _this.logoImage = image;
    });
  }

  _createClass(Core, [{
    key: 'onLogoLoaded',
    value: function onLogoLoaded(image) {
      this.logoImage = image;
      this.width = this.logoImage.width;
      this.height = this.logoImage.height;

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

      this.rootEl.appendChild(this.renderer.view);

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
      var rootRect = this.rootEl.getBoundingClientRect();
      this.scale = this.width / rootRect.width;
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
      var rootRect = this.rootEl.getBoundingClientRect();
      this.mouseVector.set(e.clientX - rootRect.left, e.clientY - rootRect.top);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Qb3RhdG9QYXJ0aWNsZXMvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL1BvdGF0b1BhcnRpY2xlcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9Qb3RhdG9QYXJ0aWNsZXMvLi9zcmMvanMvSW1hZ2VIZWxwZXIuanMiLCJ3ZWJwYWNrOi8vUG90YXRvUGFydGljbGVzLy4vc3JjL2pzL1BhcnRpY2xlLmpzIiwid2VicGFjazovL1BvdGF0b1BhcnRpY2xlcy8uL3NyYy9qcy9jb3JlLmpzIiwid2VicGFjazovL1BvdGF0b1BhcnRpY2xlcy8uL3NyYy9qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9Qb3RhdG9QYXJ0aWNsZXMvLi9zcmMvanMvdmVjdG9yLmpzIiwid2VicGFjazovL1BvdGF0b1BhcnRpY2xlcy8uL3NyYy9zY3NzL2luZGV4LnNjc3M/MDM1OCIsIndlYnBhY2s6Ly9Qb3RhdG9QYXJ0aWNsZXMvZXh0ZXJuYWwgXCJQSVhJXCIiXSwibmFtZXMiOlsiSW1hZ2VIZWxwZXIiLCJpc0ltYWdlTG9hZGVkIiwiY2FudmFzIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY3R4IiwiZ2V0Q29udGV4dCIsInNyYyIsIlByb21pc2UiLCJ0bXBJbWFnZUVsIiwiSW1hZ2UiLCJvbmxvYWQiLCJlIiwiaW1hZ2VFbCIsInRhcmdldCIsIm9uSW1hZ2VMb2FkZWQiLCJyZXNvbHZlIiwiaW1hZ2UiLCJ3aWR0aCIsImhlaWdodCIsInByb3BzIiwiY2hlY2tJbWFnZSIsInBpeGVsU2l6ZSIsInBpeGVsRmlsdGVyIiwicGl4ZWwiLCJhIiwiY2FudmFzV2lkdGgiLCJNYXRoIiwiY2VpbCIsImNhbnZhc0hlaWdodCIsInNldEF0dHJpYnV0ZSIsImltYWdlVG9EYXRhIiwiY2xlYXJSZWN0IiwiZHJhd0ltYWdlQ292ZXIiLCJpbWFnZURhdGEiLCJnZXRJbWFnZURhdGEiLCJkYXRhIiwibWF4Q2hhblZhbCIsImFsbENoYW5uZWxzIiwiY2hhblIiLCJjaGFuRyIsImNoYW5CIiwiY2hhbkEiLCJ5IiwieCIsImluZGV4IiwiciIsImciLCJiIiwicHVzaCIsImltZyIsInNjYWxlIiwibWluIiwic2l6ZSIsInBvcyIsImRyYXdJbWFnZSIsIlBJWEkiLCJQYXJ0aWNsZSIsImNvbnRhaW5lciIsIm1hc3MiLCJ0ZXh0dXJlIiwiZGVsYXkiLCJwb3NpdGlvbiIsIlZlY3RvciIsInZlbG9jaXR5IiwiYWNjZWxlcmF0aW9uIiwiZm9yY2UiLCJjbG9uZSIsIndhaXRGcmFtZXMiLCJ3YWl0aW5nIiwiY3JlYXRlU3ByaXRlIiwic3ByaXRlIiwiU3ByaXRlIiwiYW5jaG9yIiwic2V0IiwiYWRkQ2hpbGQiLCJhZGQiLCJzdWJ0cmFjdCIsIm11bHRpcGx5IiwibW91c2VQb3MiLCJkaXN0YW5jZSIsInZhbHVlIiwibm9ybWFsaXplIiwiaW52RGlzdCIsInF1YWREaXN0IiwibGVzc1F1YWREaXN0IiwibXVsdCIsImRlbHRhIiwiZGl2aWRlIiwiQ29yZSIsInJvb3RFbCIsImltYWdlU3JjIiwicGFydGljbGVTaXplIiwicmVzaXN0YW5jZSIsIm1pbk1hc3MiLCJtYXNzUmFuZCIsImRlbGF5UmFuZCIsInBhcnRpY2xlSW5pdCIsIm1vdXNlSW50ZXJhY3Rpb24iLCJpbWFnZUhlbHBlciIsImxvYWQiLCJ0aGVuIiwib25Mb2dvTG9hZGVkIiwibG9nb0ltYWdlIiwicGFydGljbGVzRGF0YSIsImltYWdlVG9Eb3RzIiwibW91c2VWZWN0b3IiLCJpbml0UmVuZGVyZXIiLCJpbml0UGFydGljbGVzIiwicmVuZGVyZXIiLCJyZW5kZXIiLCJzdGFnZSIsInN0YXJ0TG9vcCIsImNhbGN1bGF0ZVNjYWxlIiwiYmluZEV2ZW50cyIsInNldFBhcnRpY2xlc1RhcmdldHMiLCJ0aWNrZXIiLCJUaWNrZXIiLCJzaGFyZWQiLCJSZW5kZXJlciIsInRyYW5zcGFyZW50IiwiY29udGV4dCIsIm1vekltYWdlU21vb3RoaW5nRW5hYmxlZCIsIndlYmtpdEltYWdlU21vb3RoaW5nRW5hYmxlZCIsImFwcGVuZENoaWxkIiwidmlldyIsIkNvbnRhaW5lciIsInBhcnRpY2xlQ29udGFpbmVyIiwicGFydGljbGVzIiwicGFydGljbGVzQ291bnQiLCJsZW5ndGgiLCJnZXRTaGFyZWQiLCJpIiwicGFydGljbGUiLCJjb2xvciIsInV0aWxzIiwicmdiMmhleCIsIk9iamVjdCIsImFzc2lnbiIsImF2Z1giLCJhdmdZIiwicmFuZG9tIiwiY3JlYXRlQ2lyY2xlVGV4dHVyZSIsInJhbmdlWSIsIm1pblkiLCJzdW1YIiwic3VtWSIsIm1pblgiLCJtYXhYIiwibWF4WSIsInBhcnRpY2xlRGF0YSIsImhhbGZXaWR0aCIsImhhbGZIZWlnaHQiLCJyYW5nZVgiLCJyYWRpdXMiLCJhbHBoYSIsImdyYXBoaWNzIiwiR3JhcGhpY3MiLCJiZWdpbkZpbGwiLCJkcmF3Q2lyY2xlIiwiZW5kRmlsbCIsImdlbmVyYXRlVGV4dHVyZSIsImNsZWFyIiwiZGVzdHJveSIsInJvb3RSZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwibCIsInNldFRhcmdldCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJvblJlc2l6ZSIsImJpbmQiLCJvbk1vdXNlTW92ZSIsImNsaWVudFgiLCJsZWZ0IiwiY2xpZW50WSIsInRvcCIsInRpY2siLCJ1cGRhdGUiLCJhZGRGb3JjZSIsImdldEZvcmNlVG9UYXJnZXQiLCJnZXRNb3VzZUZvcmNlIiwiaW50ZXJwIiwiUG90YXRvUGFydGljbGVzIiwidmVjdG9yIiwicm91bmRBeGlzIiwibiIsInNxcnQiLCJ2ZWN0b3JBIiwidmVjdG9yQiIsInZlY3Rvck91dCIsImF4aXMiLCJyb3VuZCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDbEZxQkEsVztBQUNuQix5QkFBYztBQUFBOztBQUNaLFNBQUtDLGFBQUwsR0FBcUIsS0FBckI7O0FBRUEsU0FBS0MsTUFBTCxHQUFjQyxTQUFTQyxhQUFULENBQXVCLFFBQXZCLENBQWQ7QUFDQSxTQUFLQyxHQUFMLEdBQVcsS0FBS0gsTUFBTCxDQUFZSSxVQUFaLENBQXVCLElBQXZCLENBQVg7QUFDRDs7Ozt5QkFFSUMsRyxFQUFLO0FBQUE7O0FBQ1IsV0FBS04sYUFBTCxHQUFxQixLQUFyQjs7QUFFQSxhQUFPLElBQUlPLE9BQUosQ0FBWSxtQkFBVztBQUM1QixZQUFNQyxhQUFhLElBQUlDLEtBQUosRUFBbkI7QUFDQUQsbUJBQVdFLE1BQVgsR0FBb0IsVUFBQ0MsQ0FBRCxFQUFPO0FBQ3pCLGNBQU1DLFVBQVVELEVBQUVFLE1BQWxCO0FBQ0EsZ0JBQUtDLGFBQUwsQ0FBbUJGLE9BQW5CO0FBQ0FHLGtCQUFRSCxPQUFSO0FBQ0QsU0FKRDtBQUtBSixtQkFBV0YsR0FBWCxHQUFpQkEsR0FBakI7QUFDRCxPQVJNLENBQVA7QUFTRDs7O2tDQUVhVSxLLEVBQU87QUFDbkIsV0FBS0EsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsV0FBS0MsS0FBTCxHQUFhLEtBQUtELEtBQUwsQ0FBV0MsS0FBeEI7QUFDQSxXQUFLQyxNQUFMLEdBQWMsS0FBS0YsS0FBTCxDQUFXRSxNQUF6Qjs7QUFFQSxXQUFLbEIsYUFBTCxHQUFxQixJQUFyQjtBQUNEOzs7aUNBRVk7QUFDWCxVQUFJLEtBQUtBLGFBQVQsRUFBd0IsT0FBTyxJQUFQOztBQUV4QjtBQUNBLGFBQU8sS0FBUDtBQUNEOzs7Z0NBRVdtQixLLEVBQU87QUFDakIsVUFBSSxDQUFDLEtBQUtDLFVBQUwsRUFBTCxFQUF3QixPQUFPLElBQVA7O0FBRXhCLFVBQU1KLFFBQVEsS0FBS0EsS0FBbkI7QUFIaUIseUJBU2JHLEtBVGEsQ0FLZkYsS0FMZTtBQUFBLFVBS2ZBLEtBTGUsZ0NBS1BELE1BQU1DLEtBTEM7QUFBQSwwQkFTYkUsS0FUYSxDQU1mRCxNQU5lO0FBQUEsVUFNZkEsTUFOZSxpQ0FNTkYsTUFBTUUsTUFOQTtBQUFBLDZCQVNiQyxLQVRhLENBT2ZFLFNBUGU7QUFBQSxVQU9mQSxTQVBlLG9DQU9ILENBUEc7QUFBQSwrQkFTYkYsS0FUYSxDQVFmRyxXQVJlO0FBQUEsVUFRZkEsV0FSZSxzQ0FRRDtBQUFBLGVBQVVDLE1BQU1DLENBQU4sSUFBVyxHQUFyQjtBQUFBLE9BUkM7OztBQVdqQixVQUFNQyxjQUFjQyxLQUFLQyxJQUFMLENBQVVWLFFBQVFJLFNBQWxCLENBQXBCO0FBQ0EsVUFBTU8sZUFBZUYsS0FBS0MsSUFBTCxDQUFVVCxTQUFTRyxTQUFuQixDQUFyQjs7QUFFQSxXQUFLcEIsTUFBTCxDQUFZNEIsWUFBWixDQUF5QixPQUF6QixFQUFrQ0osV0FBbEM7QUFDQSxXQUFLeEIsTUFBTCxDQUFZNEIsWUFBWixDQUF5QixRQUF6QixFQUFtQ0QsWUFBbkM7O0FBRUEsYUFBTyxLQUFLRSxXQUFMLENBQWlCZCxLQUFqQixFQUF3QjtBQUM3QlMsZ0NBRDZCLEVBQ2hCRywwQkFEZ0IsRUFDRlAsb0JBREUsRUFDU0M7QUFEVCxPQUF4QixDQUFQO0FBR0Q7OztnQ0FFV04sSyxFQUFPRyxLLEVBQU87QUFBQSxVQUV0Qk0sV0FGc0IsR0FNcEJOLEtBTm9CLENBRXRCTSxXQUZzQjtBQUFBLFVBR3RCRyxZQUhzQixHQU1wQlQsS0FOb0IsQ0FHdEJTLFlBSHNCO0FBQUEsVUFJdEJQLFNBSnNCLEdBTXBCRixLQU5vQixDQUl0QkUsU0FKc0I7QUFBQSxVQUt0QkMsV0FMc0IsR0FNcEJILEtBTm9CLENBS3RCRyxXQUxzQjs7O0FBUXhCLFdBQUtsQixHQUFMLENBQVMyQixTQUFULENBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCTixXQUF6QixFQUFzQ0csWUFBdEM7QUFDQSxXQUFLSSxjQUFMLENBQW9CaEIsS0FBcEIsRUFBMkJTLFdBQTNCLEVBQXdDRyxZQUF4Qzs7QUFFQSxVQUFNSyxZQUFZLEtBQUs3QixHQUFMLENBQVM4QixZQUFULENBQXNCLENBQXRCLEVBQXlCLENBQXpCLEVBQTRCVCxXQUE1QixFQUF5Q0csWUFBekMsRUFBdURPLElBQXpFOztBQUVBLFVBQU1DLGFBQWEsR0FBbkI7QUFDQSxVQUFNQyxjQUFjLENBQXBCO0FBQ0EsVUFBTUMsUUFBUSxDQUFkO0FBQ0EsVUFBTUMsUUFBUSxDQUFkO0FBQ0EsVUFBTUMsUUFBUSxDQUFkO0FBQ0EsVUFBTUMsUUFBUSxDQUFkOztBQUVBLFVBQU1OLE9BQU8sRUFBYjtBQUNBLFdBQUssSUFBSU8sSUFBSSxDQUFiLEVBQWdCQSxJQUFJZCxZQUFwQixFQUFrQ2MsR0FBbEMsRUFBdUM7QUFDckMsYUFBSyxJQUFJQyxJQUFJLENBQWIsRUFBZ0JBLElBQUlsQixXQUFwQixFQUFpQ2tCLEdBQWpDLEVBQXNDO0FBQ3BDLGNBQU1DLFFBQVEsQ0FBQ0YsSUFBSWpCLFdBQUosR0FBa0JrQixDQUFuQixJQUF3Qk4sV0FBdEM7O0FBRUEsY0FBTWQsUUFBUTtBQUNab0IsZUFBR0EsSUFBSXRCLFNBREs7QUFFWnFCLGVBQUdBLElBQUlyQixTQUZLO0FBR1p3QixlQUFJWixVQUFVVyxRQUFRTixLQUFsQixJQUEyQkYsVUFIbkI7QUFJWlUsZUFBSWIsVUFBVVcsUUFBUUwsS0FBbEIsSUFBMkJILFVBSm5CO0FBS1pXLGVBQUlkLFVBQVVXLFFBQVFKLEtBQWxCLElBQTJCSixVQUxuQjtBQU1aWixlQUFJUyxVQUFVVyxRQUFRSCxLQUFsQixJQUEyQkw7QUFObkIsV0FBZDs7QUFTQSxjQUFJLENBQUNkLFlBQVlDLEtBQVosQ0FBTCxFQUF5Qjs7QUFFekJZLGVBQUthLElBQUwsQ0FBVXpCLEtBQVY7QUFDRDtBQUNGOztBQUVELGFBQU9ZLElBQVA7QUFDRDs7O21DQUVjYyxHLEVBQUtoQyxLLEVBQU9DLE0sRUFBUTtBQUNqQyxVQUFNZ0MsUUFBUXhCLEtBQUt5QixHQUFMLENBQVNsQyxRQUFRZ0MsSUFBSWhDLEtBQXJCLEVBQTRCQyxTQUFTK0IsSUFBSS9CLE1BQXpDLENBQWQ7QUFDQSxVQUFNa0MsT0FBTztBQUNYbkMsZUFBT2dDLElBQUloQyxLQUFKLEdBQVlpQyxLQURSO0FBRVhoQyxnQkFBUStCLElBQUkvQixNQUFKLEdBQWFnQztBQUZWLE9BQWI7QUFJQSxVQUFNRyxNQUFNO0FBQ1ZWLFdBQUcsQ0FBQzFCLFFBQVFtQyxLQUFLbkMsS0FBZCxJQUF1QixDQURoQjtBQUVWeUIsV0FBRyxDQUFDeEIsU0FBU2tDLEtBQUtsQyxNQUFmLElBQXlCO0FBRmxCLE9BQVo7QUFJQSxXQUFLZCxHQUFMLENBQVNrRCxTQUFULENBQW1CTCxHQUFuQixFQUF3QixDQUF4QixFQUEyQixDQUEzQixFQUE4QkEsSUFBSWhDLEtBQWxDLEVBQXlDZ0MsSUFBSS9CLE1BQTdDLEVBQXFEbUMsSUFBSVYsQ0FBekQsRUFBNERVLElBQUlYLENBQWhFLEVBQW1FVSxLQUFLbkMsS0FBeEUsRUFBK0VtQyxLQUFLbEMsTUFBcEY7QUFDRDs7Ozs7O2tCQWpIa0JuQixXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FyQjs7SUFBWXdELEk7O0FBRVo7Ozs7Ozs7Ozs7SUFFcUJDLFE7QUFDbkIsb0JBQVlDLFNBQVosUUFFRztBQUFBLFFBRERkLENBQ0MsUUFEREEsQ0FDQztBQUFBLFFBREVELENBQ0YsUUFERUEsQ0FDRjtBQUFBLHlCQURLZ0IsSUFDTDtBQUFBLFFBREtBLElBQ0wsNkJBRFksQ0FDWjtBQUFBLFFBRGVDLE9BQ2YsUUFEZUEsT0FDZjtBQUFBLFFBRHdCQyxLQUN4QixRQUR3QkEsS0FDeEI7O0FBQUE7O0FBQ0QsU0FBS0MsUUFBTCxHQUFnQixJQUFJQyxnQkFBSixDQUFXbkIsQ0FBWCxFQUFjRCxDQUFkLENBQWhCO0FBQ0EsU0FBS3FCLFFBQUwsR0FBZ0IsSUFBSUQsZ0JBQUosQ0FBVyxDQUFYLEVBQWMsQ0FBZCxDQUFoQjtBQUNBLFNBQUtFLFlBQUwsR0FBb0IsSUFBSUYsZ0JBQUosQ0FBVyxDQUFYLEVBQWMsQ0FBZCxDQUFwQjtBQUNBLFNBQUtHLEtBQUwsR0FBYSxJQUFJSCxnQkFBSixDQUFXLENBQVgsRUFBYyxDQUFkLENBQWI7QUFDQSxTQUFLSixJQUFMLEdBQVlBLElBQVo7QUFDQSxTQUFLN0MsTUFBTCxHQUFjLEtBQUtnRCxRQUFMLENBQWNLLEtBQWQsRUFBZDs7QUFFQSxTQUFLQyxVQUFMLEdBQWtCUCxRQUFRLEVBQTFCLENBUkMsQ0FRNkI7QUFDOUIsU0FBS1EsT0FBTCxHQUFlLEtBQUtELFVBQUwsR0FBa0IsQ0FBakM7O0FBRUEsUUFBSSxDQUFDVixTQUFMLEVBQWdCO0FBQ2hCLFNBQUtZLFlBQUwsQ0FBa0JaLFNBQWxCLEVBQTZCLEVBQUVFLGdCQUFGLEVBQTdCO0FBQ0Q7Ozs7aUNBRVlGLFMsU0FBd0I7QUFBQSxVQUFYRSxPQUFXLFNBQVhBLE9BQVc7O0FBQ25DLFdBQUtXLE1BQUwsR0FBYyxJQUFJZixLQUFLZ0IsTUFBVCxDQUFnQlosT0FBaEIsQ0FBZDtBQUNBLFdBQUtXLE1BQUwsQ0FBWUUsTUFBWixDQUFtQkMsR0FBbkIsQ0FBdUIsR0FBdkI7QUFDQSxXQUFLSCxNQUFMLENBQVlULFFBQVosQ0FBcUJZLEdBQXJCLENBQXlCLEtBQUtaLFFBQUwsQ0FBY2xCLENBQXZDLEVBQTBDLEtBQUtrQixRQUFMLENBQWNuQixDQUF4RDtBQUNBZSxnQkFBVWlCLFFBQVYsQ0FBbUIsS0FBS0osTUFBeEI7QUFDRDs7OzZCQUVRTCxLLEVBQU87QUFDZCxVQUFJLENBQUNBLEtBQUwsRUFBWTtBQUNaLFdBQUtBLEtBQUwsQ0FBV1UsR0FBWCxDQUFlVixLQUFmO0FBQ0Q7Ozs4QkFFU3BELE0sRUFBUTtBQUNoQixXQUFLQSxNQUFMLEdBQWNBLE1BQWQ7QUFDRDs7O3VDQUVrQjtBQUNqQixVQUFJLENBQUMsS0FBS0EsTUFBVixFQUFrQixPQUFPLElBQVA7O0FBRWxCLFVBQU1vRCxRQUFRSCxpQkFBT2MsUUFBUCxDQUFnQixLQUFLL0QsTUFBckIsRUFBNkIsS0FBS2dELFFBQWxDLENBQWQ7QUFDQUksWUFBTVksUUFBTixDQUFlLElBQWY7O0FBRUEsYUFBT1osS0FBUDtBQUNEOzs7a0NBRWFhLFEsRUFBVTtBQUN0QixVQUFNYixRQUFRSCxpQkFBT2MsUUFBUCxDQUFnQkUsUUFBaEIsRUFBMEIsS0FBS2pCLFFBQS9CLENBQWQ7QUFDQSxVQUFNa0IsV0FBV2QsTUFBTWUsS0FBTixFQUFqQjtBQUNBZixZQUFNZ0IsU0FBTjtBQUNBLFVBQU1DLFVBQVcsTUFBTUgsUUFBdkI7QUFDQSxVQUFNSSxXQUFZRCxVQUFVQSxPQUE1QjtBQUNBLFVBQU1FLGVBQWVELFdBQVcsSUFBaEM7QUFDQSxVQUFNRSxPQUFPRCxlQUFlLENBQWYsR0FBbUIsQ0FBbkIsR0FBdUJBLGVBQWUsR0FBbkQ7QUFDQW5CLFlBQU1ZLFFBQU4sQ0FBZSxDQUFDUSxJQUFoQjs7QUFFQSxhQUFPcEIsS0FBUDtBQUNEOzs7MkJBRU1xQixLLEVBQU87QUFDWixVQUFJLEtBQUtsQixPQUFULEVBQWtCO0FBQ2hCLGFBQUtELFVBQUwsSUFBbUJtQixLQUFuQjtBQUNBLFlBQUksS0FBS25CLFVBQUwsR0FBa0IsQ0FBdEIsRUFBeUI7O0FBRXpCLGFBQUtBLFVBQUwsR0FBa0IsQ0FBbEI7QUFDQSxhQUFLQyxPQUFMLEdBQWUsS0FBZjtBQUNBLGFBQUtILEtBQUwsQ0FBV1EsR0FBWCxDQUFlLENBQWYsRUFBa0IsQ0FBbEI7QUFDQTtBQUNEOztBQUVELFdBQUtULFlBQUwsQ0FBa0JTLEdBQWxCLENBQXNCLEtBQUtSLEtBQUwsQ0FBV3RCLENBQWpDLEVBQW9DLEtBQUtzQixLQUFMLENBQVd2QixDQUEvQztBQUNBLFdBQUtzQixZQUFMLENBQWtCdUIsTUFBbEIsQ0FBeUIsS0FBSzdCLElBQTlCO0FBQ0EsV0FBS0ssUUFBTCxDQUFjWSxHQUFkLENBQWtCLEtBQUtYLFlBQXZCO0FBQ0EsV0FBS0gsUUFBTCxDQUFjYyxHQUFkLENBQWtCLEtBQUtaLFFBQXZCO0FBQ0EsV0FBS0UsS0FBTCxDQUFXUSxHQUFYLENBQWUsQ0FBZixFQUFrQixDQUFsQjtBQUNEOzs7NkJBRVE7QUFDUCxVQUFJLENBQUMsS0FBS0gsTUFBVixFQUFrQjtBQUNsQixXQUFLQSxNQUFMLENBQVlULFFBQVosQ0FBcUJZLEdBQXJCLENBQXlCLEtBQUtaLFFBQUwsQ0FBY2xCLENBQXZDLEVBQTBDLEtBQUtrQixRQUFMLENBQWNuQixDQUF4RDtBQUNEOzs7Ozs7a0JBN0VrQmMsUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKckI7O0lBQVlELEk7O0FBRVo7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7O0lBRXFCaUMsSTtBQUNuQixzQkFZRztBQUFBOztBQUFBLFFBWERDLE1BV0MsUUFYREEsTUFXQztBQUFBLFFBVkRDLFFBVUMsUUFWREEsUUFVQztBQUFBLDhCQVREckUsU0FTQztBQUFBLFFBVERBLFNBU0Msa0NBVFcsRUFTWDtBQUFBLGlDQVJEc0UsWUFRQztBQUFBLFFBUkRBLFlBUUMscUNBUmMsQ0FRZDtBQUFBLCtCQVBEQyxVQU9DO0FBQUEsUUFQREEsVUFPQyxtQ0FQWSxDQUFDLEdBT2I7QUFBQSw0QkFOREMsT0FNQztBQUFBLFFBTkRBLE9BTUMsZ0NBTlMsQ0FNVDtBQUFBLDZCQUxEQyxRQUtDO0FBQUEsUUFMREEsUUFLQyxpQ0FMVSxDQUtWO0FBQUEsOEJBSkRDLFNBSUM7QUFBQSxRQUpEQSxTQUlDLGtDQUpXLEdBSVg7QUFBQSxRQUhEekUsV0FHQyxRQUhEQSxXQUdDO0FBQUEsUUFGRDBFLFlBRUMsUUFGREEsWUFFQztBQUFBLHFDQUREQyxnQkFDQztBQUFBLFFBRERBLGdCQUNDLHlDQURrQixJQUNsQjs7QUFBQTs7QUFDRCxTQUFLUixNQUFMLEdBQWNBLE1BQWQ7O0FBRUEsU0FBS3BFLFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0EsU0FBS3NFLFlBQUwsR0FBb0JBLFlBQXBCO0FBQ0EsU0FBS0MsVUFBTCxHQUFrQkEsVUFBbEI7QUFDQSxTQUFLQyxPQUFMLEdBQWVBLE9BQWY7QUFDQSxTQUFLQyxRQUFMLEdBQWdCQSxRQUFoQjtBQUNBLFNBQUtDLFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0EsU0FBS3pFLFdBQUwsR0FBbUJBLFdBQW5CO0FBQ0EsU0FBSzBFLFlBQUwsR0FBb0JBLFlBQXBCO0FBQ0EsU0FBS0MsZ0JBQUwsR0FBd0JBLGdCQUF4Qjs7QUFFQSxTQUFLQyxXQUFMLEdBQW1CLElBQUluRyxxQkFBSixFQUFuQjtBQUNBLFNBQUttRyxXQUFMLENBQWlCQyxJQUFqQixDQUFzQlQsUUFBdEIsRUFBZ0NVLElBQWhDLENBQXFDLFVBQUNwRixLQUFELEVBQVc7QUFDOUMsWUFBS3FGLFlBQUwsQ0FBa0JyRixLQUFsQjtBQUNBLFlBQUtzRixTQUFMLEdBQWlCdEYsS0FBakI7QUFDRCxLQUhEO0FBSUQ7Ozs7aUNBRVlBLEssRUFBTztBQUNsQixXQUFLc0YsU0FBTCxHQUFpQnRGLEtBQWpCO0FBQ0EsV0FBS0MsS0FBTCxHQUFhLEtBQUtxRixTQUFMLENBQWVyRixLQUE1QjtBQUNBLFdBQUtDLE1BQUwsR0FBYyxLQUFLb0YsU0FBTCxDQUFlcEYsTUFBN0I7O0FBRUEsV0FBS3FGLGFBQUwsR0FBcUIsS0FBS0wsV0FBTCxDQUFpQk0sV0FBakIsQ0FBNkI7QUFDaER2RixlQUFPLEtBQUtBLEtBRG9DO0FBRWhEQyxnQkFBUSxLQUFLQSxNQUZtQztBQUdoREcsbUJBQVcsS0FBS0EsU0FIZ0M7QUFJaERDLHFCQUFhLEtBQUtBO0FBSjhCLE9BQTdCLENBQXJCOztBQU9BLFdBQUttRixXQUFMLEdBQW1CLElBQUkzQyxnQkFBSixDQUFXLENBQVgsRUFBYyxDQUFkLENBQW5COztBQUVBLFdBQUs0QyxZQUFMO0FBQ0EsV0FBS0MsYUFBTDtBQUNBLFdBQUtDLFFBQUwsQ0FBY0MsTUFBZCxDQUFxQixLQUFLQyxLQUExQjtBQUNBLFdBQUtDLFNBQUw7O0FBRUEsV0FBS0MsY0FBTDtBQUNBLFdBQUtDLFVBQUw7O0FBRUEsV0FBS0MsbUJBQUw7QUFDRDs7O21DQUVjO0FBQ2IsV0FBS0MsTUFBTCxHQUFjNUQsS0FBSzZELE1BQUwsQ0FBWUMsTUFBMUI7O0FBRUEsV0FBS1QsUUFBTCxHQUFnQixJQUFJckQsS0FBSytELFFBQVQsQ0FBa0I7QUFDaENyRyxlQUFPLEtBQUtBLEtBRG9CO0FBRWhDQyxnQkFBUSxLQUFLQSxNQUZtQjtBQUdoQ3FHLHFCQUFhO0FBSG1CLE9BQWxCLENBQWhCO0FBS0EsV0FBS1gsUUFBTCxDQUFjWSxPQUFkLENBQXNCQyx3QkFBdEIsR0FBaUQsS0FBakQ7QUFDQSxXQUFLYixRQUFMLENBQWNZLE9BQWQsQ0FBc0JFLDJCQUF0QixHQUFvRCxLQUFwRDs7QUFFQSxXQUFLakMsTUFBTCxDQUFZa0MsV0FBWixDQUF3QixLQUFLZixRQUFMLENBQWNnQixJQUF0Qzs7QUFFQSxXQUFLZCxLQUFMLEdBQWEsSUFBSXZELEtBQUtzRSxTQUFULEVBQWI7O0FBRUEsV0FBS0MsaUJBQUwsR0FBeUIsSUFBSXZFLEtBQUtzRSxTQUFULEVBQXpCO0FBQ0EsV0FBS2YsS0FBTCxDQUFXcEMsUUFBWCxDQUFvQixLQUFLb0QsaUJBQXpCO0FBQ0Q7OztvQ0FFZTtBQUNkLFdBQUtDLFNBQUwsR0FBaUIsRUFBakI7O0FBRUEsVUFBTUMsaUJBQWlCLEtBQUt6QixhQUFMLENBQW1CMEIsTUFBMUM7QUFDQSxVQUFNWixTQUFTLEtBQUthLFNBQUwsRUFBZjs7QUFFQSxVQUFNbEMsZUFBZSxLQUFLQSxZQUFMLElBQXNCO0FBQUEsZUFBTyxFQUFQO0FBQUEsT0FBM0M7O0FBRUEsV0FBSyxJQUFJbUMsSUFBSSxDQUFiLEVBQWdCQSxJQUFJSCxjQUFwQixFQUFvQ0csR0FBcEMsRUFBeUM7QUFDdkMsWUFBTUMsV0FBVyxLQUFLN0IsYUFBTCxDQUFtQjRCLENBQW5CLENBQWpCOztBQUVBLFlBQU1FLFFBQVE5RSxLQUFLK0UsS0FBTCxDQUFXQyxPQUFYLENBQW1CLENBQUNILFNBQVN2RixDQUFWLEVBQWF1RixTQUFTdEYsQ0FBdEIsRUFBeUJzRixTQUFTckYsQ0FBbEMsQ0FBbkIsQ0FBZDs7QUFFQSxhQUFLZ0YsU0FBTCxDQUFlL0UsSUFBZixDQUFvQixJQUFJUSxrQkFBSixDQUFhLEtBQUtzRSxpQkFBbEIsRUFBcUNVLE9BQU9DLE1BQVAsQ0FBYztBQUNyRTlGLGFBQUcwRSxPQUFPcUIsSUFEMkQ7QUFFckVoRyxhQUFHMkUsT0FBT3NCLElBRjJEO0FBR3JFakYsZ0JBQU1oQyxLQUFLa0gsTUFBTCxLQUFnQnZCLE9BQU92QixRQUF2QixHQUFrQ3VCLE9BQU94QixPQUhzQjtBQUlyRWxDLG1CQUFTLEtBQUtrRixtQkFBTCxDQUF5QnhCLE9BQU8xQixZQUFQLEdBQXNCLENBQS9DLEVBQWtEMEMsS0FBbEQsRUFBeUQsQ0FBekQsQ0FKNEQ7QUFLckV6RSxpQkFDRyxDQUFDeUQsT0FBT3lCLE1BQVAsSUFBaUJWLFNBQVMxRixDQUFULEdBQWEyRSxPQUFPMEIsSUFBckMsQ0FBRCxLQUFnRCxJQUFJMUIsT0FBT3lCLE1BQTNELENBQUQsR0FDR3BILEtBQUtrSCxNQUFMLEtBQWdCdkIsT0FBT3RCO0FBUHlDLFNBQWQsRUFTdERDLGFBQWFvQyxRQUFiLEVBQXVCZixNQUF2QixDQVRzRCxDQUFyQyxDQUFwQjtBQVVEO0FBQ0Y7OztnQ0FFVztBQUNWLFVBQU1XLGlCQUFpQixLQUFLekIsYUFBTCxDQUFtQjBCLE1BQTFDO0FBQ0EsVUFBTXRDLGVBQWUsS0FBS0EsWUFBMUI7QUFDQSxVQUFNRSxVQUFVLEtBQUtBLE9BQXJCO0FBQ0EsVUFBTUMsV0FBVyxLQUFLQSxRQUF0QjtBQUNBLFVBQU1DLFlBQVksS0FBS0EsU0FBdkI7O0FBRUEsVUFBSWlELE9BQU8sQ0FBWDtBQUNBLFVBQUlDLE9BQU8sQ0FBWDs7QUFFQSxVQUFJQyxPQUFPLEtBQUszQyxhQUFMLENBQW1CLENBQW5CLEVBQXNCNUQsQ0FBakM7QUFDQSxVQUFJd0csT0FBTyxDQUFYOztBQUVBLFVBQUlKLE9BQU8sS0FBS3hDLGFBQUwsQ0FBbUIsQ0FBbkIsRUFBc0I3RCxDQUFqQztBQUNBLFVBQUkwRyxPQUFPLENBQVg7O0FBRUEsV0FBSyxJQUFJakIsSUFBSSxDQUFiLEVBQWdCQSxJQUFJSCxjQUFwQixFQUFvQ0csR0FBcEMsRUFBeUM7QUFDdkMsWUFBTWtCLGVBQWUsS0FBSzlDLGFBQUwsQ0FBbUI0QixDQUFuQixDQUFyQjs7QUFFQWEsZ0JBQVFLLGFBQWExRyxDQUFyQjtBQUNBc0csZ0JBQVFJLGFBQWEzRyxDQUFyQjs7QUFFQSxZQUFJMkcsYUFBYTFHLENBQWIsR0FBaUJ1RyxJQUFyQixFQUEyQkEsT0FBT0csYUFBYTFHLENBQXBCO0FBQzNCLFlBQUkwRyxhQUFhMUcsQ0FBYixHQUFpQndHLElBQXJCLEVBQTJCQSxPQUFPRSxhQUFhMUcsQ0FBcEI7O0FBRTNCLFlBQUkwRyxhQUFhM0csQ0FBYixHQUFpQnFHLElBQXJCLEVBQTJCQSxPQUFPTSxhQUFhM0csQ0FBcEI7QUFDM0IsWUFBSTJHLGFBQWEzRyxDQUFiLEdBQWlCMEcsSUFBckIsRUFBMkJBLE9BQU9DLGFBQWEzRyxDQUFwQjtBQUM1Qjs7QUFFRCxhQUFPO0FBQ0x6QixlQUFPLEtBQUtBLEtBRFA7QUFFTEMsZ0JBQVEsS0FBS0EsTUFGUjtBQUdMb0ksbUJBQVcsS0FBS3JJLEtBQUwsR0FBYSxDQUhuQjtBQUlMc0ksb0JBQVksS0FBS3JJLE1BQUwsR0FBYyxDQUpyQjtBQUtMOEcsc0NBTEs7QUFNTHJDLGtDQU5LO0FBT0xFLHdCQVBLO0FBUUxDLDBCQVJLO0FBU0xDLDRCQVRLO0FBVUxtRCxrQkFWSztBQVdMSCxrQkFYSztBQVlMSSxrQkFaSztBQWFMQyxrQkFiSztBQWNMSixrQkFkSztBQWVMQyxrQkFmSztBQWdCTFAsY0FBT00sT0FBT2hCLGNBaEJUO0FBaUJMVyxjQUFPTSxPQUFPakIsY0FqQlQ7QUFrQkx3QixnQkFBU0wsT0FBT0QsSUFsQlg7QUFtQkxKLGdCQUFTTSxPQUFPTDtBQW5CWCxPQUFQO0FBcUJEOzs7d0NBRW1CVSxNLEVBQVFwQixLLEVBQU9xQixLLEVBQU87QUFDeEMsVUFBTUMsV0FBVyxJQUFJcEcsS0FBS3FHLFFBQVQsRUFBakI7QUFDQUQsZUFBU0UsU0FBVCxDQUFtQnhCLEtBQW5CLEVBQTBCcUIsS0FBMUI7QUFDQUMsZUFBU0csVUFBVCxDQUFvQixDQUFwQixFQUF1QixDQUF2QixFQUEwQkwsTUFBMUI7QUFDQUUsZUFBU0ksT0FBVDtBQUNBLFVBQU1wRyxVQUFVLEtBQUtpRCxRQUFMLENBQWNvRCxlQUFkLENBQThCTCxRQUE5QixDQUFoQjtBQUNBQSxlQUFTTSxLQUFUO0FBQ0FOLGVBQVNPLE9BQVQ7QUFDQSxhQUFPdkcsT0FBUDtBQUNEOzs7cUNBRWdCO0FBQ2YsVUFBTXdHLFdBQVcsS0FBSzFFLE1BQUwsQ0FBWTJFLHFCQUFaLEVBQWpCO0FBQ0EsV0FBS2xILEtBQUwsR0FBYSxLQUFLakMsS0FBTCxHQUFha0osU0FBU2xKLEtBQW5DO0FBQ0Q7OzswQ0FFcUI7QUFDcEIsVUFBTW9KLElBQUksS0FBSzlELGFBQUwsQ0FBbUIwQixNQUE3QjtBQUNBLFdBQUssSUFBSUUsSUFBSSxDQUFiLEVBQWdCQSxJQUFJa0MsQ0FBcEIsRUFBdUJsQyxHQUF2QixFQUE0QjtBQUMxQixZQUFNa0IsZUFBZSxLQUFLOUMsYUFBTCxDQUFtQjRCLENBQW5CLENBQXJCO0FBQ0EsYUFBS0osU0FBTCxDQUFlSSxDQUFmLEVBQWtCbUMsU0FBbEIsQ0FBNEIsSUFBSXhHLGdCQUFKLENBQVd1RixhQUFhMUcsQ0FBeEIsRUFBMkIwRyxhQUFhM0csQ0FBeEMsQ0FBNUI7QUFDRDtBQUNGOzs7aUNBRVk7QUFDWDZILGFBQU9DLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDLEtBQUtDLFFBQUwsQ0FBY0MsSUFBZCxDQUFtQixJQUFuQixDQUFsQztBQUNBLFVBQUksS0FBS3pFLGdCQUFULEVBQTJCO0FBQ3pCc0UsZUFBT0MsZ0JBQVAsQ0FBd0IsV0FBeEIsRUFBcUMsS0FBS0csV0FBTCxDQUFpQkQsSUFBakIsQ0FBc0IsSUFBdEIsQ0FBckM7QUFDRDtBQUNGOzs7K0JBRVU7QUFDVCxXQUFLMUQsY0FBTDtBQUNEOzs7Z0NBRVdyRyxDLEVBQUc7QUFDYixVQUFNd0osV0FBVyxLQUFLMUUsTUFBTCxDQUFZMkUscUJBQVosRUFBakI7QUFDQSxXQUFLM0QsV0FBTCxDQUFpQmhDLEdBQWpCLENBQXFCOUQsRUFBRWlLLE9BQUYsR0FBWVQsU0FBU1UsSUFBMUMsRUFBZ0RsSyxFQUFFbUssT0FBRixHQUFZWCxTQUFTWSxHQUFyRTtBQUNBLFdBQUt0RSxXQUFMLENBQWlCNUIsUUFBakIsQ0FBMEIsS0FBSzNCLEtBQS9CO0FBQ0Q7OztnQ0FFVztBQUNWLFdBQUtpRSxNQUFMLENBQVl4QyxHQUFaLENBQWdCLEtBQUtxRyxJQUFMLENBQVVOLElBQVYsQ0FBZSxJQUFmLENBQWhCO0FBQ0Q7Ozt5QkFFSXBGLEssRUFBTztBQUNWLFdBQUsyRixNQUFMLENBQVkzRixLQUFaO0FBQ0EsV0FBS3VCLE1BQUwsQ0FBWSxDQUFaO0FBQ0Q7OzsyQkFFTXZCLEssRUFBTztBQUNaLFVBQU0rRSxJQUFJLEtBQUt0QyxTQUFMLENBQWVFLE1BQXpCO0FBQ0EsV0FBSyxJQUFJRSxJQUFJLENBQWIsRUFBZ0JBLElBQUlrQyxDQUFwQixFQUF1QmxDLEdBQXZCLEVBQTRCO0FBQzFCLFlBQU1DLFdBQVcsS0FBS0wsU0FBTCxDQUFlSSxDQUFmLENBQWpCO0FBQ0FDLGlCQUFTOEMsUUFBVCxDQUFrQjlDLFNBQVMrQyxnQkFBVCxFQUFsQjtBQUNBLFlBQUksS0FBS2xGLGdCQUFULEVBQTJCO0FBQ3pCbUMsbUJBQVM4QyxRQUFULENBQWtCOUMsU0FBU2dELGFBQVQsQ0FBdUIsS0FBSzNFLFdBQTVCLENBQWxCO0FBQ0Q7QUFDRDJCLGlCQUFTOEMsUUFBVCxDQUFrQnBILGlCQUFPZSxRQUFQLENBQWdCdUQsU0FBU3JFLFFBQXpCLEVBQW1DLEtBQUs2QixVQUF4QyxDQUFsQjtBQUNBd0MsaUJBQVM2QyxNQUFULENBQWdCM0YsS0FBaEI7QUFDRDtBQUNGOzs7MkJBRU0rRixNLEVBQVE7QUFDYixVQUFNaEIsSUFBSSxLQUFLdEMsU0FBTCxDQUFlRSxNQUF6QjtBQUNBLFdBQUssSUFBSUUsSUFBSSxDQUFiLEVBQWdCQSxJQUFJa0MsQ0FBcEIsRUFBdUJsQyxHQUF2QixFQUE0QjtBQUMxQixhQUFLSixTQUFMLENBQWVJLENBQWYsRUFBa0J0QixNQUFsQixDQUF5QndFLE1BQXpCO0FBQ0Q7O0FBRUQsV0FBS3pFLFFBQUwsQ0FBY0MsTUFBZCxDQUFxQixLQUFLQyxLQUExQjtBQUNEOzs7Ozs7a0JBak9rQnRCLEk7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05yQjs7QUFFQTs7Ozs7O0FBRUEsSUFBTThGLGtCQUFrQjlGLGNBQXhCOztrQkFFZThGLGU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNOTXhILE07QUFDbkIsa0JBQVluQixDQUFaLEVBQWVELENBQWYsRUFBa0I7QUFBQTs7QUFDaEIsU0FBS0MsQ0FBTCxHQUFTQSxDQUFUO0FBQ0EsU0FBS0QsQ0FBTCxHQUFTQSxDQUFUO0FBQ0Q7Ozs7d0JBOEJHQyxDLEVBQUdELEMsRUFBRztBQUNSLFdBQUtDLENBQUwsR0FBU0EsQ0FBVDtBQUNBLFdBQUtELENBQUwsR0FBU0EsQ0FBVDtBQUNEOzs7eUJBRUlDLEMsRUFBRztBQUNOLFdBQUtBLENBQUwsR0FBU0EsQ0FBVDtBQUNEOzs7eUJBRUlELEMsRUFBRztBQUNOLFdBQUtBLENBQUwsR0FBU0EsQ0FBVDtBQUNEOzs7d0JBRUc2SSxNLEVBQVE7QUFDVixXQUFLNUksQ0FBTCxHQUFTbUIsT0FBTzBILFNBQVAsQ0FBaUIsS0FBSzdJLENBQUwsR0FBUzRJLE9BQU81SSxDQUFqQyxDQUFUO0FBQ0EsV0FBS0QsQ0FBTCxHQUFTb0IsT0FBTzBILFNBQVAsQ0FBaUIsS0FBSzlJLENBQUwsR0FBUzZJLE9BQU83SSxDQUFqQyxDQUFUO0FBQ0Q7Ozs2QkFFUTZJLE0sRUFBUTtBQUNmLFdBQUs1SSxDQUFMLEdBQVNtQixPQUFPMEgsU0FBUCxDQUFpQixLQUFLN0ksQ0FBTCxHQUFTNEksT0FBTzVJLENBQWpDLENBQVQ7QUFDQSxXQUFLRCxDQUFMLEdBQVNvQixPQUFPMEgsU0FBUCxDQUFpQixLQUFLOUksQ0FBTCxHQUFTNkksT0FBTzdJLENBQWpDLENBQVQ7QUFDRDs7OzZCQUVRK0ksQyxFQUFHO0FBQ1YsV0FBSzlJLENBQUwsR0FBU21CLE9BQU8wSCxTQUFQLENBQWlCLEtBQUs3SSxDQUFMLEdBQVM4SSxDQUExQixDQUFUO0FBQ0EsV0FBSy9JLENBQUwsR0FBU29CLE9BQU8wSCxTQUFQLENBQWlCLEtBQUs5SSxDQUFMLEdBQVMrSSxDQUExQixDQUFUO0FBQ0Q7OzsyQkFFTUEsQyxFQUFHO0FBQ1IsV0FBSzlJLENBQUwsR0FBU21CLE9BQU8wSCxTQUFQLENBQWlCLEtBQUs3SSxDQUFMLEdBQVM4SSxDQUExQixDQUFUO0FBQ0EsV0FBSy9JLENBQUwsR0FBU29CLE9BQU8wSCxTQUFQLENBQWlCLEtBQUs5SSxDQUFMLEdBQVMrSSxDQUExQixDQUFUO0FBQ0Q7Ozs0QkFFTztBQUNOLGFBQU8vSixLQUFLZ0ssSUFBTCxDQUFVLFNBQUMsS0FBSy9JLENBQU4sRUFBVyxDQUFYLGFBQWlCLEtBQUtELENBQXRCLEVBQTJCLENBQTNCLENBQVYsQ0FBUDtBQUNEOzs7Z0NBRVc7QUFDVixVQUFNc0MsUUFBUSxLQUFLQSxLQUFMLEVBQWQ7O0FBRUEsVUFBSUEsVUFBVSxDQUFkLEVBQWlCO0FBQ2YsYUFBS3JDLENBQUwsSUFBVXFDLEtBQVY7QUFDQSxhQUFLdEMsQ0FBTCxJQUFVc0MsS0FBVjtBQUNELE9BSEQsTUFHTztBQUNMLGFBQUtyQyxDQUFMLEdBQVMsQ0FBVDtBQUNBLGFBQUtELENBQUwsR0FBUyxDQUFUO0FBQ0Q7QUFDRjs7OzRCQUVPO0FBQ04sYUFBTyxJQUFJb0IsTUFBSixDQUFXLEtBQUtuQixDQUFoQixFQUFtQixLQUFLRCxDQUF4QixDQUFQO0FBQ0Q7Ozt3QkEvRVVpSixPLEVBQVNDLE8sRUFBUztBQUMzQixVQUFNQyxZQUFZRixRQUFRekgsS0FBUixFQUFsQjtBQUNBMkgsZ0JBQVVsSCxHQUFWLENBQWNpSCxPQUFkO0FBQ0EsYUFBT0MsU0FBUDtBQUNEOzs7NkJBRWVGLE8sRUFBU0MsTyxFQUFTO0FBQ2hDLFVBQU1DLFlBQVlGLFFBQVF6SCxLQUFSLEVBQWxCO0FBQ0EySCxnQkFBVWpILFFBQVYsQ0FBbUJnSCxPQUFuQjtBQUNBLGFBQU9DLFNBQVA7QUFDRDs7OzZCQUVlTixNLEVBQVFFLEMsRUFBRztBQUN6QixVQUFNSSxZQUFZTixPQUFPckgsS0FBUCxFQUFsQjtBQUNBMkgsZ0JBQVVoSCxRQUFWLENBQW1CNEcsQ0FBbkI7QUFDQSxhQUFPSSxTQUFQO0FBQ0Q7OzsyQkFFYU4sTSxFQUFRRSxDLEVBQUc7QUFDdkIsVUFBTUksWUFBWU4sT0FBT3JILEtBQVAsRUFBbEI7QUFDQTJILGdCQUFVdEcsTUFBVixDQUFpQmtHLENBQWpCO0FBQ0EsYUFBT0ksU0FBUDtBQUNEOzs7OEJBRWdCQyxJLEVBQU07QUFDckIsYUFBT3BLLEtBQUtxSyxLQUFMLENBQVdELE9BQU8sR0FBbEIsSUFBeUIsR0FBaEM7QUFDRDs7Ozs7O2tCQWhDa0JoSSxNOzs7Ozs7Ozs7OztBQ0FyQix1Qzs7Ozs7Ozs7Ozs7QUNBQSxxRCIsImZpbGUiOiJwb3RhdG9wYXJ0aWNsZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJQSVhJXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiUG90YXRvUGFydGljbGVzXCIsIFtcIlBJWElcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiUG90YXRvUGFydGljbGVzXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiUElYSVwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiUG90YXRvUGFydGljbGVzXCJdID0gZmFjdG9yeShyb290W1wiUElYSVwiXSk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcGl4aV9qc19fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvanMvaW5kZXguanNcIik7XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBJbWFnZUhlbHBlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuaXNJbWFnZUxvYWRlZCA9IGZhbHNlO1xuXG4gICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gIH1cblxuICBsb2FkKHNyYykge1xuICAgIHRoaXMuaXNJbWFnZUxvYWRlZCA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgY29uc3QgdG1wSW1hZ2VFbCA9IG5ldyBJbWFnZSgpO1xuICAgICAgdG1wSW1hZ2VFbC5vbmxvYWQgPSAoZSkgPT4ge1xuICAgICAgICBjb25zdCBpbWFnZUVsID0gZS50YXJnZXQ7XG4gICAgICAgIHRoaXMub25JbWFnZUxvYWRlZChpbWFnZUVsKTtcbiAgICAgICAgcmVzb2x2ZShpbWFnZUVsKTtcbiAgICAgIH07XG4gICAgICB0bXBJbWFnZUVsLnNyYyA9IHNyYztcbiAgICB9KTtcbiAgfVxuXG4gIG9uSW1hZ2VMb2FkZWQoaW1hZ2UpIHtcbiAgICB0aGlzLmltYWdlID0gaW1hZ2U7XG4gICAgdGhpcy53aWR0aCA9IHRoaXMuaW1hZ2Uud2lkdGg7XG4gICAgdGhpcy5oZWlnaHQgPSB0aGlzLmltYWdlLmhlaWdodDtcblxuICAgIHRoaXMuaXNJbWFnZUxvYWRlZCA9IHRydWU7XG4gIH1cblxuICBjaGVja0ltYWdlKCkge1xuICAgIGlmICh0aGlzLmlzSW1hZ2VMb2FkZWQpIHJldHVybiB0cnVlO1xuXG4gICAgLy8gY29uc29sZS53YXJuKCdJbWFnZSBpcyBub3QgbG9hZGVkIHlldCcpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGltYWdlVG9Eb3RzKHByb3BzKSB7XG4gICAgaWYgKCF0aGlzLmNoZWNrSW1hZ2UoKSkgcmV0dXJuIG51bGw7XG5cbiAgICBjb25zdCBpbWFnZSA9IHRoaXMuaW1hZ2U7XG4gICAgY29uc3Qge1xuICAgICAgd2lkdGggPSBpbWFnZS53aWR0aCxcbiAgICAgIGhlaWdodCA9IGltYWdlLmhlaWdodCxcbiAgICAgIHBpeGVsU2l6ZSA9IDEsXG4gICAgICBwaXhlbEZpbHRlciA9IHBpeGVsID0+IChwaXhlbC5hID49IDAuNCksXG4gICAgfSA9IHByb3BzO1xuXG4gICAgY29uc3QgY2FudmFzV2lkdGggPSBNYXRoLmNlaWwod2lkdGggLyBwaXhlbFNpemUpO1xuICAgIGNvbnN0IGNhbnZhc0hlaWdodCA9IE1hdGguY2VpbChoZWlnaHQgLyBwaXhlbFNpemUpO1xuXG4gICAgdGhpcy5jYW52YXMuc2V0QXR0cmlidXRlKCd3aWR0aCcsIGNhbnZhc1dpZHRoKTtcbiAgICB0aGlzLmNhbnZhcy5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsIGNhbnZhc0hlaWdodCk7XG5cbiAgICByZXR1cm4gdGhpcy5pbWFnZVRvRGF0YShpbWFnZSwge1xuICAgICAgY2FudmFzV2lkdGgsIGNhbnZhc0hlaWdodCwgcGl4ZWxTaXplLCBwaXhlbEZpbHRlcixcbiAgICB9KTtcbiAgfVxuXG4gIGltYWdlVG9EYXRhKGltYWdlLCBwcm9wcykge1xuICAgIGNvbnN0IHtcbiAgICAgIGNhbnZhc1dpZHRoLFxuICAgICAgY2FudmFzSGVpZ2h0LFxuICAgICAgcGl4ZWxTaXplLFxuICAgICAgcGl4ZWxGaWx0ZXIsXG4gICAgfSA9IHByb3BzO1xuXG4gICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhc1dpZHRoLCBjYW52YXNIZWlnaHQpO1xuICAgIHRoaXMuZHJhd0ltYWdlQ292ZXIoaW1hZ2UsIGNhbnZhc1dpZHRoLCBjYW52YXNIZWlnaHQpO1xuXG4gICAgY29uc3QgaW1hZ2VEYXRhID0gdGhpcy5jdHguZ2V0SW1hZ2VEYXRhKDAsIDAsIGNhbnZhc1dpZHRoLCBjYW52YXNIZWlnaHQpLmRhdGE7XG5cbiAgICBjb25zdCBtYXhDaGFuVmFsID0gMjU1O1xuICAgIGNvbnN0IGFsbENoYW5uZWxzID0gNDtcbiAgICBjb25zdCBjaGFuUiA9IDA7XG4gICAgY29uc3QgY2hhbkcgPSAxO1xuICAgIGNvbnN0IGNoYW5CID0gMjtcbiAgICBjb25zdCBjaGFuQSA9IDM7XG5cbiAgICBjb25zdCBkYXRhID0gW107XG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPCBjYW52YXNIZWlnaHQ7IHkrKykge1xuICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBjYW52YXNXaWR0aDsgeCsrKSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gKHkgKiBjYW52YXNXaWR0aCArIHgpICogYWxsQ2hhbm5lbHM7XG5cbiAgICAgICAgY29uc3QgcGl4ZWwgPSB7XG4gICAgICAgICAgeDogeCAqIHBpeGVsU2l6ZSxcbiAgICAgICAgICB5OiB5ICogcGl4ZWxTaXplLFxuICAgICAgICAgIHI6IChpbWFnZURhdGFbaW5kZXggKyBjaGFuUl0gLyBtYXhDaGFuVmFsKSxcbiAgICAgICAgICBnOiAoaW1hZ2VEYXRhW2luZGV4ICsgY2hhbkddIC8gbWF4Q2hhblZhbCksXG4gICAgICAgICAgYjogKGltYWdlRGF0YVtpbmRleCArIGNoYW5CXSAvIG1heENoYW5WYWwpLFxuICAgICAgICAgIGE6IChpbWFnZURhdGFbaW5kZXggKyBjaGFuQV0gLyBtYXhDaGFuVmFsKSxcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoIXBpeGVsRmlsdGVyKHBpeGVsKSkgY29udGludWU7XG5cbiAgICAgICAgZGF0YS5wdXNoKHBpeGVsKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIGRyYXdJbWFnZUNvdmVyKGltZywgd2lkdGgsIGhlaWdodCkge1xuICAgIGNvbnN0IHNjYWxlID0gTWF0aC5taW4od2lkdGggLyBpbWcud2lkdGgsIGhlaWdodCAvIGltZy5oZWlnaHQpO1xuICAgIGNvbnN0IHNpemUgPSB7XG4gICAgICB3aWR0aDogaW1nLndpZHRoICogc2NhbGUsXG4gICAgICBoZWlnaHQ6IGltZy5oZWlnaHQgKiBzY2FsZSxcbiAgICB9O1xuICAgIGNvbnN0IHBvcyA9IHtcbiAgICAgIHg6ICh3aWR0aCAtIHNpemUud2lkdGgpIC8gMixcbiAgICAgIHk6IChoZWlnaHQgLSBzaXplLmhlaWdodCkgLyAyLFxuICAgIH07XG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKGltZywgMCwgMCwgaW1nLndpZHRoLCBpbWcuaGVpZ2h0LCBwb3MueCwgcG9zLnksIHNpemUud2lkdGgsIHNpemUuaGVpZ2h0KTtcbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgUElYSSBmcm9tICdwaXhpLmpzJztcblxuaW1wb3J0IFZlY3RvciBmcm9tICcuL3ZlY3Rvcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhcnRpY2xlIHtcbiAgY29uc3RydWN0b3IoY29udGFpbmVyLCB7XG4gICAgeCwgeSwgbWFzcyA9IDEsIHRleHR1cmUsIGRlbGF5LFxuICB9KSB7XG4gICAgdGhpcy5wb3NpdGlvbiA9IG5ldyBWZWN0b3IoeCwgeSk7XG4gICAgdGhpcy52ZWxvY2l0eSA9IG5ldyBWZWN0b3IoMCwgMCk7XG4gICAgdGhpcy5hY2NlbGVyYXRpb24gPSBuZXcgVmVjdG9yKDAsIDApO1xuICAgIHRoaXMuZm9yY2UgPSBuZXcgVmVjdG9yKDAsIDApO1xuICAgIHRoaXMubWFzcyA9IG1hc3M7XG4gICAgdGhpcy50YXJnZXQgPSB0aGlzLnBvc2l0aW9uLmNsb25lKCk7XG5cbiAgICB0aGlzLndhaXRGcmFtZXMgPSBkZWxheSAqIDYwOyAvLyAqIEZQU1xuICAgIHRoaXMud2FpdGluZyA9IHRoaXMud2FpdEZyYW1lcyA+IDA7XG5cbiAgICBpZiAoIWNvbnRhaW5lcikgcmV0dXJuO1xuICAgIHRoaXMuY3JlYXRlU3ByaXRlKGNvbnRhaW5lciwgeyB0ZXh0dXJlIH0pO1xuICB9XG5cbiAgY3JlYXRlU3ByaXRlKGNvbnRhaW5lciwgeyB0ZXh0dXJlIH0pIHtcbiAgICB0aGlzLnNwcml0ZSA9IG5ldyBQSVhJLlNwcml0ZSh0ZXh0dXJlKTtcbiAgICB0aGlzLnNwcml0ZS5hbmNob3Iuc2V0KDAuNSk7XG4gICAgdGhpcy5zcHJpdGUucG9zaXRpb24uc2V0KHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55KTtcbiAgICBjb250YWluZXIuYWRkQ2hpbGQodGhpcy5zcHJpdGUpO1xuICB9XG5cbiAgYWRkRm9yY2UoZm9yY2UpIHtcbiAgICBpZiAoIWZvcmNlKSByZXR1cm47XG4gICAgdGhpcy5mb3JjZS5hZGQoZm9yY2UpO1xuICB9XG5cbiAgc2V0VGFyZ2V0KHRhcmdldCkge1xuICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xuICB9XG5cbiAgZ2V0Rm9yY2VUb1RhcmdldCgpIHtcbiAgICBpZiAoIXRoaXMudGFyZ2V0KSByZXR1cm4gbnVsbDtcblxuICAgIGNvbnN0IGZvcmNlID0gVmVjdG9yLnN1YnRyYWN0KHRoaXMudGFyZ2V0LCB0aGlzLnBvc2l0aW9uKTtcbiAgICBmb3JjZS5tdWx0aXBseSgwLjA0KTtcblxuICAgIHJldHVybiBmb3JjZTtcbiAgfVxuXG4gIGdldE1vdXNlRm9yY2UobW91c2VQb3MpIHtcbiAgICBjb25zdCBmb3JjZSA9IFZlY3Rvci5zdWJ0cmFjdChtb3VzZVBvcywgdGhpcy5wb3NpdGlvbik7XG4gICAgY29uc3QgZGlzdGFuY2UgPSBmb3JjZS52YWx1ZSgpO1xuICAgIGZvcmNlLm5vcm1hbGl6ZSgpO1xuICAgIGNvbnN0IGludkRpc3QgPSAoMTIwIC8gZGlzdGFuY2UpO1xuICAgIGNvbnN0IHF1YWREaXN0ID0gKGludkRpc3QgKiBpbnZEaXN0KTtcbiAgICBjb25zdCBsZXNzUXVhZERpc3QgPSBxdWFkRGlzdCAtIDAuMDQ7XG4gICAgY29uc3QgbXVsdCA9IGxlc3NRdWFkRGlzdCA8IDAgPyAwIDogbGVzc1F1YWREaXN0ICogMC44O1xuICAgIGZvcmNlLm11bHRpcGx5KC1tdWx0KTtcblxuICAgIHJldHVybiBmb3JjZTtcbiAgfVxuXG4gIHVwZGF0ZShkZWx0YSkge1xuICAgIGlmICh0aGlzLndhaXRpbmcpIHtcbiAgICAgIHRoaXMud2FpdEZyYW1lcyAtPSBkZWx0YTtcbiAgICAgIGlmICh0aGlzLndhaXRGcmFtZXMgPiAwKSByZXR1cm47XG5cbiAgICAgIHRoaXMud2FpdEZyYW1lcyA9IDA7XG4gICAgICB0aGlzLndhaXRpbmcgPSBmYWxzZTtcbiAgICAgIHRoaXMuZm9yY2Uuc2V0KDAsIDApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuYWNjZWxlcmF0aW9uLnNldCh0aGlzLmZvcmNlLngsIHRoaXMuZm9yY2UueSk7XG4gICAgdGhpcy5hY2NlbGVyYXRpb24uZGl2aWRlKHRoaXMubWFzcyk7XG4gICAgdGhpcy52ZWxvY2l0eS5hZGQodGhpcy5hY2NlbGVyYXRpb24pO1xuICAgIHRoaXMucG9zaXRpb24uYWRkKHRoaXMudmVsb2NpdHkpO1xuICAgIHRoaXMuZm9yY2Uuc2V0KDAsIDApO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGlmICghdGhpcy5zcHJpdGUpIHJldHVybjtcbiAgICB0aGlzLnNwcml0ZS5wb3NpdGlvbi5zZXQodGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnkpO1xuICB9XG59XG4iLCJpbXBvcnQgKiBhcyBQSVhJIGZyb20gJ3BpeGkuanMnO1xuXG5pbXBvcnQgSW1hZ2VIZWxwZXIgZnJvbSAnLi9JbWFnZUhlbHBlci5qcyc7XG5pbXBvcnQgVmVjdG9yIGZyb20gJy4vdmVjdG9yLmpzJztcbmltcG9ydCBQYXJ0aWNsZSBmcm9tICcuL1BhcnRpY2xlLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29yZSB7XG4gIGNvbnN0cnVjdG9yKHtcbiAgICByb290RWwsXG4gICAgaW1hZ2VTcmMsXG4gICAgcGl4ZWxTaXplID0gMTAsXG4gICAgcGFydGljbGVTaXplID0gNixcbiAgICByZXNpc3RhbmNlID0gLTAuNyxcbiAgICBtaW5NYXNzID0gNCxcbiAgICBtYXNzUmFuZCA9IDIsXG4gICAgZGVsYXlSYW5kID0gMC40LFxuICAgIHBpeGVsRmlsdGVyLFxuICAgIHBhcnRpY2xlSW5pdCxcbiAgICBtb3VzZUludGVyYWN0aW9uID0gdHJ1ZSxcbiAgfSkge1xuICAgIHRoaXMucm9vdEVsID0gcm9vdEVsO1xuXG4gICAgdGhpcy5waXhlbFNpemUgPSBwaXhlbFNpemU7XG4gICAgdGhpcy5wYXJ0aWNsZVNpemUgPSBwYXJ0aWNsZVNpemU7XG4gICAgdGhpcy5yZXNpc3RhbmNlID0gcmVzaXN0YW5jZTtcbiAgICB0aGlzLm1pbk1hc3MgPSBtaW5NYXNzO1xuICAgIHRoaXMubWFzc1JhbmQgPSBtYXNzUmFuZDtcbiAgICB0aGlzLmRlbGF5UmFuZCA9IGRlbGF5UmFuZDtcbiAgICB0aGlzLnBpeGVsRmlsdGVyID0gcGl4ZWxGaWx0ZXI7XG4gICAgdGhpcy5wYXJ0aWNsZUluaXQgPSBwYXJ0aWNsZUluaXQ7XG4gICAgdGhpcy5tb3VzZUludGVyYWN0aW9uID0gbW91c2VJbnRlcmFjdGlvbjtcblxuICAgIHRoaXMuaW1hZ2VIZWxwZXIgPSBuZXcgSW1hZ2VIZWxwZXIoKTtcbiAgICB0aGlzLmltYWdlSGVscGVyLmxvYWQoaW1hZ2VTcmMpLnRoZW4oKGltYWdlKSA9PiB7XG4gICAgICB0aGlzLm9uTG9nb0xvYWRlZChpbWFnZSk7XG4gICAgICB0aGlzLmxvZ29JbWFnZSA9IGltYWdlO1xuICAgIH0pO1xuICB9XG5cbiAgb25Mb2dvTG9hZGVkKGltYWdlKSB7XG4gICAgdGhpcy5sb2dvSW1hZ2UgPSBpbWFnZTtcbiAgICB0aGlzLndpZHRoID0gdGhpcy5sb2dvSW1hZ2Uud2lkdGg7XG4gICAgdGhpcy5oZWlnaHQgPSB0aGlzLmxvZ29JbWFnZS5oZWlnaHQ7XG5cbiAgICB0aGlzLnBhcnRpY2xlc0RhdGEgPSB0aGlzLmltYWdlSGVscGVyLmltYWdlVG9Eb3RzKHtcbiAgICAgIHdpZHRoOiB0aGlzLndpZHRoLFxuICAgICAgaGVpZ2h0OiB0aGlzLmhlaWdodCxcbiAgICAgIHBpeGVsU2l6ZTogdGhpcy5waXhlbFNpemUsXG4gICAgICBwaXhlbEZpbHRlcjogdGhpcy5waXhlbEZpbHRlcixcbiAgICB9KTtcblxuICAgIHRoaXMubW91c2VWZWN0b3IgPSBuZXcgVmVjdG9yKDAsIDApO1xuXG4gICAgdGhpcy5pbml0UmVuZGVyZXIoKTtcbiAgICB0aGlzLmluaXRQYXJ0aWNsZXMoKTtcbiAgICB0aGlzLnJlbmRlcmVyLnJlbmRlcih0aGlzLnN0YWdlKTtcbiAgICB0aGlzLnN0YXJ0TG9vcCgpO1xuXG4gICAgdGhpcy5jYWxjdWxhdGVTY2FsZSgpO1xuICAgIHRoaXMuYmluZEV2ZW50cygpO1xuXG4gICAgdGhpcy5zZXRQYXJ0aWNsZXNUYXJnZXRzKCk7XG4gIH1cblxuICBpbml0UmVuZGVyZXIoKSB7XG4gICAgdGhpcy50aWNrZXIgPSBQSVhJLlRpY2tlci5zaGFyZWQ7XG5cbiAgICB0aGlzLnJlbmRlcmVyID0gbmV3IFBJWEkuUmVuZGVyZXIoe1xuICAgICAgd2lkdGg6IHRoaXMud2lkdGgsXG4gICAgICBoZWlnaHQ6IHRoaXMuaGVpZ2h0LFxuICAgICAgdHJhbnNwYXJlbnQ6IHRydWUsXG4gICAgfSk7XG4gICAgdGhpcy5yZW5kZXJlci5jb250ZXh0Lm1vekltYWdlU21vb3RoaW5nRW5hYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMucmVuZGVyZXIuY29udGV4dC53ZWJraXRJbWFnZVNtb290aGluZ0VuYWJsZWQgPSBmYWxzZTtcblxuICAgIHRoaXMucm9vdEVsLmFwcGVuZENoaWxkKHRoaXMucmVuZGVyZXIudmlldyk7XG5cbiAgICB0aGlzLnN0YWdlID0gbmV3IFBJWEkuQ29udGFpbmVyKCk7XG5cbiAgICB0aGlzLnBhcnRpY2xlQ29udGFpbmVyID0gbmV3IFBJWEkuQ29udGFpbmVyKCk7XG4gICAgdGhpcy5zdGFnZS5hZGRDaGlsZCh0aGlzLnBhcnRpY2xlQ29udGFpbmVyKTtcbiAgfVxuXG4gIGluaXRQYXJ0aWNsZXMoKSB7XG4gICAgdGhpcy5wYXJ0aWNsZXMgPSBbXTtcblxuICAgIGNvbnN0IHBhcnRpY2xlc0NvdW50ID0gdGhpcy5wYXJ0aWNsZXNEYXRhLmxlbmd0aDtcbiAgICBjb25zdCBzaGFyZWQgPSB0aGlzLmdldFNoYXJlZCgpO1xuXG4gICAgY29uc3QgcGFydGljbGVJbml0ID0gdGhpcy5wYXJ0aWNsZUluaXQgfHwgKCgpID0+ICh7fSkpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJ0aWNsZXNDb3VudDsgaSsrKSB7XG4gICAgICBjb25zdCBwYXJ0aWNsZSA9IHRoaXMucGFydGljbGVzRGF0YVtpXTtcblxuICAgICAgY29uc3QgY29sb3IgPSBQSVhJLnV0aWxzLnJnYjJoZXgoW3BhcnRpY2xlLnIsIHBhcnRpY2xlLmcsIHBhcnRpY2xlLmJdKTtcblxuICAgICAgdGhpcy5wYXJ0aWNsZXMucHVzaChuZXcgUGFydGljbGUodGhpcy5wYXJ0aWNsZUNvbnRhaW5lciwgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgIHg6IHNoYXJlZC5hdmdYLFxuICAgICAgICB5OiBzaGFyZWQuYXZnWSxcbiAgICAgICAgbWFzczogTWF0aC5yYW5kb20oKSAqIHNoYXJlZC5tYXNzUmFuZCArIHNoYXJlZC5taW5NYXNzLFxuICAgICAgICB0ZXh0dXJlOiB0aGlzLmNyZWF0ZUNpcmNsZVRleHR1cmUoc2hhcmVkLnBhcnRpY2xlU2l6ZSAvIDIsIGNvbG9yLCAxKSxcbiAgICAgICAgZGVsYXk6IChcbiAgICAgICAgICAoKHNoYXJlZC5yYW5nZVkgLSAocGFydGljbGUueSAtIHNoYXJlZC5taW5ZKSkgKiAoMiAvIHNoYXJlZC5yYW5nZVkpKVxuICAgICAgICAgICsgKE1hdGgucmFuZG9tKCkgKiBzaGFyZWQuZGVsYXlSYW5kKVxuICAgICAgICApLFxuICAgICAgfSwgcGFydGljbGVJbml0KHBhcnRpY2xlLCBzaGFyZWQpKSkpO1xuICAgIH1cbiAgfVxuXG4gIGdldFNoYXJlZCgpIHtcbiAgICBjb25zdCBwYXJ0aWNsZXNDb3VudCA9IHRoaXMucGFydGljbGVzRGF0YS5sZW5ndGg7XG4gICAgY29uc3QgcGFydGljbGVTaXplID0gdGhpcy5wYXJ0aWNsZVNpemU7XG4gICAgY29uc3QgbWluTWFzcyA9IHRoaXMubWluTWFzcztcbiAgICBjb25zdCBtYXNzUmFuZCA9IHRoaXMubWFzc1JhbmQ7XG4gICAgY29uc3QgZGVsYXlSYW5kID0gdGhpcy5kZWxheVJhbmQ7XG5cbiAgICBsZXQgc3VtWCA9IDA7XG4gICAgbGV0IHN1bVkgPSAwO1xuXG4gICAgbGV0IG1pblggPSB0aGlzLnBhcnRpY2xlc0RhdGFbMF0ueDtcbiAgICBsZXQgbWF4WCA9IDA7XG5cbiAgICBsZXQgbWluWSA9IHRoaXMucGFydGljbGVzRGF0YVswXS55O1xuICAgIGxldCBtYXhZID0gMDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFydGljbGVzQ291bnQ7IGkrKykge1xuICAgICAgY29uc3QgcGFydGljbGVEYXRhID0gdGhpcy5wYXJ0aWNsZXNEYXRhW2ldO1xuXG4gICAgICBzdW1YICs9IHBhcnRpY2xlRGF0YS54O1xuICAgICAgc3VtWSArPSBwYXJ0aWNsZURhdGEueTtcblxuICAgICAgaWYgKHBhcnRpY2xlRGF0YS54IDwgbWluWCkgbWluWCA9IHBhcnRpY2xlRGF0YS54O1xuICAgICAgaWYgKHBhcnRpY2xlRGF0YS54ID4gbWF4WCkgbWF4WCA9IHBhcnRpY2xlRGF0YS54O1xuXG4gICAgICBpZiAocGFydGljbGVEYXRhLnkgPCBtaW5ZKSBtaW5ZID0gcGFydGljbGVEYXRhLnk7XG4gICAgICBpZiAocGFydGljbGVEYXRhLnkgPiBtYXhZKSBtYXhZID0gcGFydGljbGVEYXRhLnk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHdpZHRoOiB0aGlzLndpZHRoLFxuICAgICAgaGVpZ2h0OiB0aGlzLmhlaWdodCxcbiAgICAgIGhhbGZXaWR0aDogdGhpcy53aWR0aCAvIDIsXG4gICAgICBoYWxmSGVpZ2h0OiB0aGlzLmhlaWdodCAvIDIsXG4gICAgICBwYXJ0aWNsZXNDb3VudCxcbiAgICAgIHBhcnRpY2xlU2l6ZSxcbiAgICAgIG1pbk1hc3MsXG4gICAgICBtYXNzUmFuZCxcbiAgICAgIGRlbGF5UmFuZCxcbiAgICAgIG1pblgsXG4gICAgICBtaW5ZLFxuICAgICAgbWF4WCxcbiAgICAgIG1heFksXG4gICAgICBzdW1YLFxuICAgICAgc3VtWSxcbiAgICAgIGF2Z1g6IChzdW1YIC8gcGFydGljbGVzQ291bnQpLFxuICAgICAgYXZnWTogKHN1bVkgLyBwYXJ0aWNsZXNDb3VudCksXG4gICAgICByYW5nZVg6IChtYXhYIC0gbWluWCksXG4gICAgICByYW5nZVk6IChtYXhZIC0gbWluWSksXG4gICAgfTtcbiAgfVxuXG4gIGNyZWF0ZUNpcmNsZVRleHR1cmUocmFkaXVzLCBjb2xvciwgYWxwaGEpIHtcbiAgICBjb25zdCBncmFwaGljcyA9IG5ldyBQSVhJLkdyYXBoaWNzKCk7XG4gICAgZ3JhcGhpY3MuYmVnaW5GaWxsKGNvbG9yLCBhbHBoYSk7XG4gICAgZ3JhcGhpY3MuZHJhd0NpcmNsZSgwLCAwLCByYWRpdXMpO1xuICAgIGdyYXBoaWNzLmVuZEZpbGwoKTtcbiAgICBjb25zdCB0ZXh0dXJlID0gdGhpcy5yZW5kZXJlci5nZW5lcmF0ZVRleHR1cmUoZ3JhcGhpY3MpO1xuICAgIGdyYXBoaWNzLmNsZWFyKCk7XG4gICAgZ3JhcGhpY3MuZGVzdHJveSgpO1xuICAgIHJldHVybiB0ZXh0dXJlO1xuICB9XG5cbiAgY2FsY3VsYXRlU2NhbGUoKSB7XG4gICAgY29uc3Qgcm9vdFJlY3QgPSB0aGlzLnJvb3RFbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICB0aGlzLnNjYWxlID0gdGhpcy53aWR0aCAvIHJvb3RSZWN0LndpZHRoO1xuICB9XG5cbiAgc2V0UGFydGljbGVzVGFyZ2V0cygpIHtcbiAgICBjb25zdCBsID0gdGhpcy5wYXJ0aWNsZXNEYXRhLmxlbmd0aDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGw7IGkrKykge1xuICAgICAgY29uc3QgcGFydGljbGVEYXRhID0gdGhpcy5wYXJ0aWNsZXNEYXRhW2ldO1xuICAgICAgdGhpcy5wYXJ0aWNsZXNbaV0uc2V0VGFyZ2V0KG5ldyBWZWN0b3IocGFydGljbGVEYXRhLngsIHBhcnRpY2xlRGF0YS55KSk7XG4gICAgfVxuICB9XG5cbiAgYmluZEV2ZW50cygpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5vblJlc2l6ZS5iaW5kKHRoaXMpKTtcbiAgICBpZiAodGhpcy5tb3VzZUludGVyYWN0aW9uKSB7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5vbk1vdXNlTW92ZS5iaW5kKHRoaXMpKTtcbiAgICB9XG4gIH1cblxuICBvblJlc2l6ZSgpIHtcbiAgICB0aGlzLmNhbGN1bGF0ZVNjYWxlKCk7XG4gIH1cblxuICBvbk1vdXNlTW92ZShlKSB7XG4gICAgY29uc3Qgcm9vdFJlY3QgPSB0aGlzLnJvb3RFbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICB0aGlzLm1vdXNlVmVjdG9yLnNldChlLmNsaWVudFggLSByb290UmVjdC5sZWZ0LCBlLmNsaWVudFkgLSByb290UmVjdC50b3ApO1xuICAgIHRoaXMubW91c2VWZWN0b3IubXVsdGlwbHkodGhpcy5zY2FsZSk7XG4gIH1cblxuICBzdGFydExvb3AoKSB7XG4gICAgdGhpcy50aWNrZXIuYWRkKHRoaXMudGljay5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIHRpY2soZGVsdGEpIHtcbiAgICB0aGlzLnVwZGF0ZShkZWx0YSk7XG4gICAgdGhpcy5yZW5kZXIoMSk7XG4gIH1cblxuICB1cGRhdGUoZGVsdGEpIHtcbiAgICBjb25zdCBsID0gdGhpcy5wYXJ0aWNsZXMubGVuZ3RoO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbDsgaSsrKSB7XG4gICAgICBjb25zdCBwYXJ0aWNsZSA9IHRoaXMucGFydGljbGVzW2ldO1xuICAgICAgcGFydGljbGUuYWRkRm9yY2UocGFydGljbGUuZ2V0Rm9yY2VUb1RhcmdldCgpKTtcbiAgICAgIGlmICh0aGlzLm1vdXNlSW50ZXJhY3Rpb24pIHtcbiAgICAgICAgcGFydGljbGUuYWRkRm9yY2UocGFydGljbGUuZ2V0TW91c2VGb3JjZSh0aGlzLm1vdXNlVmVjdG9yKSk7XG4gICAgICB9XG4gICAgICBwYXJ0aWNsZS5hZGRGb3JjZShWZWN0b3IubXVsdGlwbHkocGFydGljbGUudmVsb2NpdHksIHRoaXMucmVzaXN0YW5jZSkpO1xuICAgICAgcGFydGljbGUudXBkYXRlKGRlbHRhKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoaW50ZXJwKSB7XG4gICAgY29uc3QgbCA9IHRoaXMucGFydGljbGVzLmxlbmd0aDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGw7IGkrKykge1xuICAgICAgdGhpcy5wYXJ0aWNsZXNbaV0ucmVuZGVyKGludGVycCk7XG4gICAgfVxuXG4gICAgdGhpcy5yZW5kZXJlci5yZW5kZXIodGhpcy5zdGFnZSk7XG4gIH1cbn1cbiIsImltcG9ydCAnLi4vc2Nzcy9pbmRleC5zY3NzJztcblxuaW1wb3J0IENvcmUgZnJvbSAnLi9jb3JlLmpzJztcblxuY29uc3QgUG90YXRvUGFydGljbGVzID0gQ29yZTtcblxuZXhwb3J0IGRlZmF1bHQgUG90YXRvUGFydGljbGVzO1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmVjdG9yIHtcbiAgY29uc3RydWN0b3IoeCwgeSkge1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgfVxuXG4gIHN0YXRpYyBhZGQodmVjdG9yQSwgdmVjdG9yQikge1xuICAgIGNvbnN0IHZlY3Rvck91dCA9IHZlY3RvckEuY2xvbmUoKTtcbiAgICB2ZWN0b3JPdXQuYWRkKHZlY3RvckIpO1xuICAgIHJldHVybiB2ZWN0b3JPdXQ7XG4gIH1cblxuICBzdGF0aWMgc3VidHJhY3QodmVjdG9yQSwgdmVjdG9yQikge1xuICAgIGNvbnN0IHZlY3Rvck91dCA9IHZlY3RvckEuY2xvbmUoKTtcbiAgICB2ZWN0b3JPdXQuc3VidHJhY3QodmVjdG9yQik7XG4gICAgcmV0dXJuIHZlY3Rvck91dDtcbiAgfVxuXG4gIHN0YXRpYyBtdWx0aXBseSh2ZWN0b3IsIG4pIHtcbiAgICBjb25zdCB2ZWN0b3JPdXQgPSB2ZWN0b3IuY2xvbmUoKTtcbiAgICB2ZWN0b3JPdXQubXVsdGlwbHkobik7XG4gICAgcmV0dXJuIHZlY3Rvck91dDtcbiAgfVxuXG4gIHN0YXRpYyBkaXZpZGUodmVjdG9yLCBuKSB7XG4gICAgY29uc3QgdmVjdG9yT3V0ID0gdmVjdG9yLmNsb25lKCk7XG4gICAgdmVjdG9yT3V0LmRpdmlkZShuKTtcbiAgICByZXR1cm4gdmVjdG9yT3V0O1xuICB9XG5cbiAgc3RhdGljIHJvdW5kQXhpcyhheGlzKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQoYXhpcyAqIDFlNSkgLyAxZTU7XG4gIH1cblxuICBzZXQoeCwgeSkge1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgfVxuXG4gIHNldFgoeCkge1xuICAgIHRoaXMueCA9IHg7XG4gIH1cblxuICBzZXRZKHkpIHtcbiAgICB0aGlzLnkgPSB5O1xuICB9XG5cbiAgYWRkKHZlY3Rvcikge1xuICAgIHRoaXMueCA9IFZlY3Rvci5yb3VuZEF4aXModGhpcy54ICsgdmVjdG9yLngpO1xuICAgIHRoaXMueSA9IFZlY3Rvci5yb3VuZEF4aXModGhpcy55ICsgdmVjdG9yLnkpO1xuICB9XG5cbiAgc3VidHJhY3QodmVjdG9yKSB7XG4gICAgdGhpcy54ID0gVmVjdG9yLnJvdW5kQXhpcyh0aGlzLnggLSB2ZWN0b3IueCk7XG4gICAgdGhpcy55ID0gVmVjdG9yLnJvdW5kQXhpcyh0aGlzLnkgLSB2ZWN0b3IueSk7XG4gIH1cblxuICBtdWx0aXBseShuKSB7XG4gICAgdGhpcy54ID0gVmVjdG9yLnJvdW5kQXhpcyh0aGlzLnggKiBuKTtcbiAgICB0aGlzLnkgPSBWZWN0b3Iucm91bmRBeGlzKHRoaXMueSAqIG4pO1xuICB9XG5cbiAgZGl2aWRlKG4pIHtcbiAgICB0aGlzLnggPSBWZWN0b3Iucm91bmRBeGlzKHRoaXMueCAvIG4pO1xuICAgIHRoaXMueSA9IFZlY3Rvci5yb3VuZEF4aXModGhpcy55IC8gbik7XG4gIH1cblxuICB2YWx1ZSgpIHtcbiAgICByZXR1cm4gTWF0aC5zcXJ0KCh0aGlzLnggKiogMikgKyAodGhpcy55ICoqIDIpKTtcbiAgfVxuXG4gIG5vcm1hbGl6ZSgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMudmFsdWUoKTtcblxuICAgIGlmICh2YWx1ZSAhPT0gMCkge1xuICAgICAgdGhpcy54IC89IHZhbHVlO1xuICAgICAgdGhpcy55IC89IHZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnggPSAwO1xuICAgICAgdGhpcy55ID0gMDtcbiAgICB9XG4gIH1cblxuICBjbG9uZSgpIHtcbiAgICByZXR1cm4gbmV3IFZlY3Rvcih0aGlzLngsIHRoaXMueSk7XG4gIH1cbn1cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9waXhpX2pzX187Il0sInNvdXJjZVJvb3QiOiIifQ==