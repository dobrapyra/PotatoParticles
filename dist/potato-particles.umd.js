(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("pixi.js"));
	else if(typeof define === 'function' && define.amd)
		define("PotatoParticles", ["pixi.js"], factory);
	else if(typeof exports === 'object')
		exports["PotatoParticles"] = factory(require("pixi.js"));
	else
		root["PotatoParticles"] = factory(root["pixi.js"]);
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

/***/ "./src/js/imageHelper.js":
/*!*******************************!*\
  !*** ./src/js/imageHelper.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ImageHelper; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ImageHelper = /*#__PURE__*/function () {
  function ImageHelper() {
    _classCallCheck(this, ImageHelper);

    this.isImageLoaded = false;
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');
  }

  _createClass(ImageHelper, [{
    key: "load",
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
    key: "onImageLoaded",
    value: function onImageLoaded(image) {
      this.image = image;
      this.width = this.image.width;
      this.height = this.image.height;
      this.isImageLoaded = true;
    }
  }, {
    key: "checkImage",
    value: function checkImage() {
      if (this.isImageLoaded) return true; // console.warn('Image is not loaded yet');

      return false;
    }
  }, {
    key: "imageToDots",
    value: function imageToDots(props) {
      if (!this.checkImage()) return null;
      var image = this.image;
      var _props$width = props.width,
          width = _props$width === void 0 ? image.width : _props$width,
          _props$height = props.height,
          height = _props$height === void 0 ? image.height : _props$height,
          _props$pixelSize = props.pixelSize,
          pixelSize = _props$pixelSize === void 0 ? 1 : _props$pixelSize,
          _props$pixelFilter = props.pixelFilter,
          pixelFilter = _props$pixelFilter === void 0 ? function (pixel) {
        return pixel.a >= 0.4;
      } : _props$pixelFilter,
          _props$pixelMap = props.pixelMap,
          pixelMap = _props$pixelMap === void 0 ? function (pixel) {
        return pixel;
      } : _props$pixelMap;
      var canvasWidth = Math.ceil(width / pixelSize);
      var canvasHeight = Math.ceil(height / pixelSize);
      this.canvas.setAttribute('width', canvasWidth);
      this.canvas.setAttribute('height', canvasHeight);
      return this.imageToData(image, {
        canvasWidth: canvasWidth,
        canvasHeight: canvasHeight,
        pixelSize: pixelSize,
        pixelFilter: pixelFilter,
        pixelMap: pixelMap
      });
    }
  }, {
    key: "imageToData",
    value: function imageToData(image, props) {
      var canvasWidth = props.canvasWidth,
          canvasHeight = props.canvasHeight,
          pixelSize = props.pixelSize,
          pixelFilter = props.pixelFilter,
          pixelMap = props.pixelMap;
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
          Object.assign(pixel, pixelMap(pixel));
          data.push(pixel);
        }
      }

      return data;
    }
  }, {
    key: "drawImageCover",
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



/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PotatoParticles; });
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pixi.js */ "pixi.js");
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pixi_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _imageHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imageHelper.js */ "./src/js/imageHelper.js");
/* harmony import */ var _vector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vector.js */ "./src/js/vector.js");
/* harmony import */ var _particle_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./particle.js */ "./src/js/particle.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var PotatoParticles = /*#__PURE__*/function () {
  function PotatoParticles(_ref) {
    var _this = this;

    var imageEl = _ref.imageEl,
        _ref$pixelSize = _ref.pixelSize,
        pixelSize = _ref$pixelSize === void 0 ? 10 : _ref$pixelSize,
        _ref$particleSize = _ref.particleSize,
        particleSize = _ref$particleSize === void 0 ? 6 : _ref$particleSize,
        _ref$resistance = _ref.resistance,
        resistance = _ref$resistance === void 0 ? -0.7 : _ref$resistance,
        _ref$minMass = _ref.minMass,
        minMass = _ref$minMass === void 0 ? 4 : _ref$minMass,
        _ref$massRand = _ref.massRand,
        massRand = _ref$massRand === void 0 ? 2 : _ref$massRand,
        _ref$delayRand = _ref.delayRand,
        delayRand = _ref$delayRand === void 0 ? 0.4 : _ref$delayRand,
        pixelFilter = _ref.pixelFilter,
        pixelMap = _ref.pixelMap,
        particleInit = _ref.particleInit,
        _ref$mouseInteraction = _ref.mouseInteraction,
        mouseInteraction = _ref$mouseInteraction === void 0 ? true : _ref$mouseInteraction;

    _classCallCheck(this, PotatoParticles);

    this.imageEl = imageEl;
    this.pixelSize = pixelSize;
    this.particleSize = particleSize;
    this.resistance = resistance;
    this.minMass = minMass;
    this.massRand = massRand;
    this.delayRand = delayRand;
    this.pixelFilter = pixelFilter;
    this.pixelMap = pixelMap;
    this.particleInit = particleInit;
    this.mouseInteraction = mouseInteraction;
    var imagePromises = [];
    this.imageHelper = new _imageHelper_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
    imagePromises.push(this.imageHelper.load(imageEl.src));
    Promise.all(imagePromises).then(function () {
      _this.onLogoLoaded();
    });
  }

  _createClass(PotatoParticles, [{
    key: "onLogoLoaded",
    value: function onLogoLoaded() {
      this.width = this.imageEl.naturalWidth || this.imageEl.width;
      this.height = this.imageEl.naturalHeight || this.imageEl.height;
      this.particlesData = this.imageHelper.imageToDots({
        width: this.width,
        height: this.height,
        pixelSize: this.pixelSize,
        pixelFilter: this.pixelFilter,
        pixelMap: this.pixelMap
      });
      this.mouseVector = new _vector_js__WEBPACK_IMPORTED_MODULE_2__["default"](0, 0);
      this.initRenderer();
      this.initParticles();
      this.renderer.render(this.stage);
      this.startLoop();
      this.calculateScale();
      this.bindEvents();
      this.setParticlesTargets();
    }
  }, {
    key: "initRenderer",
    value: function initRenderer() {
      pixi_js__WEBPACK_IMPORTED_MODULE_0__["utils"].skipHello();
      this.renderer = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Renderer"]({
        width: this.width,
        height: this.height,
        transparent: true
      });
      this.renderer.context.mozImageSmoothingEnabled = false;
      this.renderer.context.webkitImageSmoothingEnabled = false;
      this.canvasEl = this.renderer.view;
      this.imageEl.style.display = 'none';
      this.imageEl.parentElement.appendChild(this.canvasEl);
      this.stage = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Container"]();
      this.particleContainer = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Container"]();
      this.stage.addChild(this.particleContainer);
      this.tick = this.tick.bind(this);
      this.ticker = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Ticker"]();
      this.ticker.add(this.tick);
    }
  }, {
    key: "initParticles",
    value: function initParticles() {
      this.particles = [];
      var particlesCount = this.particlesData.length;
      var shared = this.getShared();

      var particleInit = this.particleInit || function () {
        return {};
      };

      var texture = this.createCircleTexture(shared.particleSize / 2, 0xffffff, 1);

      for (var i = 0; i < particlesCount; i++) {
        var particle = this.particlesData[i];
        var color = pixi_js__WEBPACK_IMPORTED_MODULE_0__["utils"].rgb2hex([particle.r, particle.g, particle.b]);
        this.particles.push(new _particle_js__WEBPACK_IMPORTED_MODULE_3__["default"](this.particleContainer, Object.assign({
          x: shared.avgX,
          y: shared.avgY,
          mass: Math.random() * shared.massRand + shared.minMass,
          texture: texture,
          color: color,
          alpha: particle.a,
          delay: (shared.rangeY - (particle.y - shared.minY)) * (2 / shared.rangeY) + Math.random() * shared.delayRand
        }, particleInit(particle, shared))));
      }
    }
  }, {
    key: "getShared",
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
    key: "createCircleTexture",
    value: function createCircleTexture(radius, color, alpha) {
      var graphics = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Graphics"]();
      graphics.beginFill(color, alpha);
      graphics.drawCircle(0, 0, radius);
      graphics.endFill();
      var texture = this.renderer.generateTexture(graphics);
      graphics.clear();
      graphics.destroy();
      return texture;
    }
  }, {
    key: "calculateScale",
    value: function calculateScale() {
      var canvasRect = this.canvasEl.getBoundingClientRect();
      this.scale = this.width / canvasRect.width;
    }
  }, {
    key: "setParticlesTargets",
    value: function setParticlesTargets() {
      var l = this.particlesData.length;

      for (var i = 0; i < l; i++) {
        var particleData = this.particlesData[i];
        this.particles[i].setTarget(new _vector_js__WEBPACK_IMPORTED_MODULE_2__["default"](particleData.x, particleData.y));
      }
    }
  }, {
    key: "bindEvents",
    value: function bindEvents() {
      window.addEventListener('resize', this.onResize.bind(this));

      if (this.mouseInteraction) {
        window.addEventListener('mousemove', this.onMouseMove.bind(this));
      }
    }
  }, {
    key: "onResize",
    value: function onResize() {
      this.calculateScale();
    }
  }, {
    key: "onMouseMove",
    value: function onMouseMove(e) {
      var canvasRect = this.canvasEl.getBoundingClientRect();
      this.mouseVector.set(e.clientX - canvasRect.left, e.clientY - canvasRect.top);
      this.mouseVector.multiply(this.scale);
    }
  }, {
    key: "startLoop",
    value: function startLoop() {
      this.ticker.start();
    }
  }, {
    key: "stopLoop",
    value: function stopLoop() {
      this.ticker.stop();
    }
  }, {
    key: "tick",
    value: function tick(delta) {
      this.update(delta);
      this.render(1);
    }
  }, {
    key: "update",
    value: function update(delta) {
      var l = this.particles.length;

      for (var i = 0; i < l; i++) {
        var particle = this.particles[i];
        particle.addForce(particle.getForceToTarget());

        if (this.mouseInteraction) {
          particle.addForce(particle.getMouseForce(this.mouseVector));
        }

        particle.addForce(_vector_js__WEBPACK_IMPORTED_MODULE_2__["default"].multiply(particle.velocity, this.resistance));
        particle.update(delta);
      }
    }
  }, {
    key: "render",
    value: function render(interp) {
      var l = this.particles.length;

      for (var i = 0; i < l; i++) {
        this.particles[i].render(interp);
      }

      this.renderer.render(this.stage);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      if (this.ticker) {
        this.stopLoop();
        this.ticker.remove(this.tick);
        this.ticker.destroy();
      }

      var l = this.particles.length;

      for (var i = 0; i < l; i++) {
        this.particles[i].destroy();
      }

      if (this.stage) {
        this.stage.destroy({
          children: true,
          texture: true
        });
      }

      if (this.renderer) {
        this.renderer.destroy();
      }
    }
  }]);

  return PotatoParticles;
}();



/***/ }),

/***/ "./src/js/particle.js":
/*!****************************!*\
  !*** ./src/js/particle.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Particle; });
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pixi.js */ "pixi.js");
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pixi_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vector */ "./src/js/vector.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var Particle = /*#__PURE__*/function () {
  function Particle(container, _ref) {
    var x = _ref.x,
        y = _ref.y,
        _ref$mass = _ref.mass,
        mass = _ref$mass === void 0 ? 1 : _ref$mass,
        texture = _ref.texture,
        color = _ref.color,
        alpha = _ref.alpha,
        delay = _ref.delay;

    _classCallCheck(this, Particle);

    this.position = new _vector__WEBPACK_IMPORTED_MODULE_1__["default"](x, y);
    this.velocity = new _vector__WEBPACK_IMPORTED_MODULE_1__["default"](0, 0);
    this.acceleration = new _vector__WEBPACK_IMPORTED_MODULE_1__["default"](0, 0);
    this.force = new _vector__WEBPACK_IMPORTED_MODULE_1__["default"](0, 0);
    this.mass = mass;
    this.target = this.position.clone();
    this.waitFrames = delay * 60; // * FPS

    this.waiting = this.waitFrames > 0;
    if (!container) return;
    this.sprite = this.createSprite({
      texture: texture,
      color: color,
      alpha: alpha
    });
    container.addChild(this.sprite);
  }

  _createClass(Particle, [{
    key: "createSprite",
    value: function createSprite(_ref2) {
      var texture = _ref2.texture,
          color = _ref2.color,
          alpha = _ref2.alpha;
      var sprite = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Sprite"](texture);
      sprite.tint = color;
      sprite.alpha = alpha;
      sprite.anchor.set(0.5);
      sprite.position.set(this.position.x, this.position.y);
      return sprite;
    }
  }, {
    key: "addForce",
    value: function addForce(force) {
      if (!force) return;
      this.force.add(force);
    }
  }, {
    key: "setTarget",
    value: function setTarget(target) {
      this.target = target;
    }
  }, {
    key: "getForceToTarget",
    value: function getForceToTarget() {
      if (!this.target) return null;
      var force = _vector__WEBPACK_IMPORTED_MODULE_1__["default"].subtract(this.target, this.position);
      force.multiply(0.04);
      return force;
    }
  }, {
    key: "getMouseForce",
    value: function getMouseForce(mousePos) {
      var force = _vector__WEBPACK_IMPORTED_MODULE_1__["default"].subtract(mousePos, this.position);
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
    key: "update",
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
    key: "render",
    value: function render() {
      if (!this.sprite) return;
      this.sprite.position.set(this.position.x, this.position.y);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.sprite.destroy({
        texture: true
      });
    }
  }]);

  return Particle;
}();



/***/ }),

/***/ "./src/js/vector.js":
/*!**************************!*\
  !*** ./src/js/vector.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Vector; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Vector = /*#__PURE__*/function () {
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



/***/ }),

/***/ "pixi.js":
/*!**************************!*\
  !*** external "pixi.js" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_pixi_js__;

/***/ })

/******/ })["default"];
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Qb3RhdG9QYXJ0aWNsZXMvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL1BvdGF0b1BhcnRpY2xlcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9Qb3RhdG9QYXJ0aWNsZXMvLi9zcmMvanMvaW1hZ2VIZWxwZXIuanMiLCJ3ZWJwYWNrOi8vUG90YXRvUGFydGljbGVzLy4vc3JjL2pzL2luZGV4LmpzIiwid2VicGFjazovL1BvdGF0b1BhcnRpY2xlcy8uL3NyYy9qcy9wYXJ0aWNsZS5qcyIsIndlYnBhY2s6Ly9Qb3RhdG9QYXJ0aWNsZXMvLi9zcmMvanMvdmVjdG9yLmpzIiwid2VicGFjazovL1BvdGF0b1BhcnRpY2xlcy9leHRlcm5hbCBcInBpeGkuanNcIiJdLCJuYW1lcyI6WyJJbWFnZUhlbHBlciIsImlzSW1hZ2VMb2FkZWQiLCJjYW52YXMiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjdHgiLCJnZXRDb250ZXh0Iiwic3JjIiwiUHJvbWlzZSIsInJlc29sdmUiLCJ0bXBJbWFnZUVsIiwiSW1hZ2UiLCJvbmxvYWQiLCJlIiwiaW1hZ2VFbCIsInRhcmdldCIsIm9uSW1hZ2VMb2FkZWQiLCJpbWFnZSIsIndpZHRoIiwiaGVpZ2h0IiwicHJvcHMiLCJjaGVja0ltYWdlIiwicGl4ZWxTaXplIiwicGl4ZWxGaWx0ZXIiLCJwaXhlbCIsImEiLCJwaXhlbE1hcCIsImNhbnZhc1dpZHRoIiwiTWF0aCIsImNlaWwiLCJjYW52YXNIZWlnaHQiLCJzZXRBdHRyaWJ1dGUiLCJpbWFnZVRvRGF0YSIsImNsZWFyUmVjdCIsImRyYXdJbWFnZUNvdmVyIiwiaW1hZ2VEYXRhIiwiZ2V0SW1hZ2VEYXRhIiwiZGF0YSIsInkiLCJ4IiwiaW5kZXgiLCJyIiwiZyIsImIiLCJPYmplY3QiLCJhc3NpZ24iLCJwdXNoIiwiaW1nIiwic2NhbGUiLCJtaW4iLCJzaXplIiwicG9zIiwiZHJhd0ltYWdlIiwiUG90YXRvUGFydGljbGVzIiwicGFydGljbGVTaXplIiwicmVzaXN0YW5jZSIsIm1pbk1hc3MiLCJtYXNzUmFuZCIsImRlbGF5UmFuZCIsInBhcnRpY2xlSW5pdCIsIm1vdXNlSW50ZXJhY3Rpb24iLCJpbWFnZVByb21pc2VzIiwiaW1hZ2VIZWxwZXIiLCJsb2FkIiwiYWxsIiwidGhlbiIsIm9uTG9nb0xvYWRlZCIsIm5hdHVyYWxXaWR0aCIsIm5hdHVyYWxIZWlnaHQiLCJwYXJ0aWNsZXNEYXRhIiwiaW1hZ2VUb0RvdHMiLCJtb3VzZVZlY3RvciIsIlZlY3RvciIsImluaXRSZW5kZXJlciIsImluaXRQYXJ0aWNsZXMiLCJyZW5kZXJlciIsInJlbmRlciIsInN0YWdlIiwic3RhcnRMb29wIiwiY2FsY3VsYXRlU2NhbGUiLCJiaW5kRXZlbnRzIiwic2V0UGFydGljbGVzVGFyZ2V0cyIsIlBJWEkiLCJza2lwSGVsbG8iLCJ0cmFuc3BhcmVudCIsImNvbnRleHQiLCJtb3pJbWFnZVNtb290aGluZ0VuYWJsZWQiLCJ3ZWJraXRJbWFnZVNtb290aGluZ0VuYWJsZWQiLCJjYW52YXNFbCIsInZpZXciLCJzdHlsZSIsImRpc3BsYXkiLCJwYXJlbnRFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJwYXJ0aWNsZUNvbnRhaW5lciIsImFkZENoaWxkIiwidGljayIsImJpbmQiLCJ0aWNrZXIiLCJhZGQiLCJwYXJ0aWNsZXMiLCJwYXJ0aWNsZXNDb3VudCIsImxlbmd0aCIsInNoYXJlZCIsImdldFNoYXJlZCIsInRleHR1cmUiLCJjcmVhdGVDaXJjbGVUZXh0dXJlIiwiaSIsInBhcnRpY2xlIiwiY29sb3IiLCJyZ2IyaGV4IiwiUGFydGljbGUiLCJhdmdYIiwiYXZnWSIsIm1hc3MiLCJyYW5kb20iLCJhbHBoYSIsImRlbGF5IiwicmFuZ2VZIiwibWluWSIsInN1bVgiLCJzdW1ZIiwibWluWCIsIm1heFgiLCJtYXhZIiwicGFydGljbGVEYXRhIiwiaGFsZldpZHRoIiwiaGFsZkhlaWdodCIsInJhbmdlWCIsInJhZGl1cyIsImdyYXBoaWNzIiwiYmVnaW5GaWxsIiwiZHJhd0NpcmNsZSIsImVuZEZpbGwiLCJnZW5lcmF0ZVRleHR1cmUiLCJjbGVhciIsImRlc3Ryb3kiLCJjYW52YXNSZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwibCIsInNldFRhcmdldCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJvblJlc2l6ZSIsIm9uTW91c2VNb3ZlIiwic2V0IiwiY2xpZW50WCIsImxlZnQiLCJjbGllbnRZIiwidG9wIiwibXVsdGlwbHkiLCJzdGFydCIsInN0b3AiLCJkZWx0YSIsInVwZGF0ZSIsImFkZEZvcmNlIiwiZ2V0Rm9yY2VUb1RhcmdldCIsImdldE1vdXNlRm9yY2UiLCJ2ZWxvY2l0eSIsImludGVycCIsInN0b3BMb29wIiwicmVtb3ZlIiwiY2hpbGRyZW4iLCJjb250YWluZXIiLCJwb3NpdGlvbiIsImFjY2VsZXJhdGlvbiIsImZvcmNlIiwiY2xvbmUiLCJ3YWl0RnJhbWVzIiwid2FpdGluZyIsInNwcml0ZSIsImNyZWF0ZVNwcml0ZSIsInRpbnQiLCJhbmNob3IiLCJzdWJ0cmFjdCIsIm1vdXNlUG9zIiwiZGlzdGFuY2UiLCJ2YWx1ZSIsIm5vcm1hbGl6ZSIsImludkRpc3QiLCJxdWFkRGlzdCIsImxlc3NRdWFkRGlzdCIsIm11bHQiLCJkaXZpZGUiLCJ2ZWN0b3IiLCJyb3VuZEF4aXMiLCJuIiwic3FydCIsInZlY3RvckEiLCJ2ZWN0b3JCIiwidmVjdG9yT3V0IiwiYXhpcyIsInJvdW5kIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDbEZxQkEsVztBQUNuQix5QkFBYztBQUFBOztBQUNaLFNBQUtDLGFBQUwsR0FBcUIsS0FBckI7QUFFQSxTQUFLQyxNQUFMLEdBQWNDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixRQUF2QixDQUFkO0FBQ0EsU0FBS0MsR0FBTCxHQUFXLEtBQUtILE1BQUwsQ0FBWUksVUFBWixDQUF1QixJQUF2QixDQUFYO0FBQ0Q7Ozs7eUJBRUlDLEcsRUFBSztBQUFBOztBQUNSLFdBQUtOLGFBQUwsR0FBcUIsS0FBckI7QUFFQSxhQUFPLElBQUlPLE9BQUosQ0FBWSxVQUFBQyxPQUFPLEVBQUk7QUFDNUIsWUFBTUMsVUFBVSxHQUFHLElBQUlDLEtBQUosRUFBbkI7O0FBQ0FELGtCQUFVLENBQUNFLE1BQVgsR0FBb0IsVUFBQ0MsQ0FBRCxFQUFPO0FBQ3pCLGNBQU1DLE9BQU8sR0FBR0QsQ0FBQyxDQUFDRSxNQUFsQjs7QUFDQSxlQUFJLENBQUNDLGFBQUwsQ0FBbUJGLE9BQW5COztBQUNBTCxpQkFBTyxDQUFDSyxPQUFELENBQVA7QUFDRCxTQUpEOztBQUtBSixrQkFBVSxDQUFDSCxHQUFYLEdBQWlCQSxHQUFqQjtBQUNELE9BUk0sQ0FBUDtBQVNEOzs7a0NBRWFVLEssRUFBTztBQUNuQixXQUFLQSxLQUFMLEdBQWFBLEtBQWI7QUFDQSxXQUFLQyxLQUFMLEdBQWEsS0FBS0QsS0FBTCxDQUFXQyxLQUF4QjtBQUNBLFdBQUtDLE1BQUwsR0FBYyxLQUFLRixLQUFMLENBQVdFLE1BQXpCO0FBRUEsV0FBS2xCLGFBQUwsR0FBcUIsSUFBckI7QUFDRDs7O2lDQUVZO0FBQ1gsVUFBSSxLQUFLQSxhQUFULEVBQXdCLE9BQU8sSUFBUCxDQURiLENBR1g7O0FBQ0EsYUFBTyxLQUFQO0FBQ0Q7OztnQ0FFV21CLEssRUFBTztBQUNqQixVQUFJLENBQUMsS0FBS0MsVUFBTCxFQUFMLEVBQXdCLE9BQU8sSUFBUDtBQUV4QixVQUFNSixLQUFLLEdBQUcsS0FBS0EsS0FBbkI7QUFIaUIseUJBVWJHLEtBVmEsQ0FLZkYsS0FMZTtBQUFBLFVBS2ZBLEtBTGUsNkJBS1BELEtBQUssQ0FBQ0MsS0FMQztBQUFBLDBCQVViRSxLQVZhLENBTWZELE1BTmU7QUFBQSxVQU1mQSxNQU5lLDhCQU1ORixLQUFLLENBQUNFLE1BTkE7QUFBQSw2QkFVYkMsS0FWYSxDQU9mRSxTQVBlO0FBQUEsVUFPZkEsU0FQZSxpQ0FPSCxDQVBHO0FBQUEsK0JBVWJGLEtBVmEsQ0FRZkcsV0FSZTtBQUFBLFVBUWZBLFdBUmUsbUNBUUQsVUFBQUMsS0FBSztBQUFBLGVBQUtBLEtBQUssQ0FBQ0MsQ0FBTixJQUFXLEdBQWhCO0FBQUEsT0FSSjtBQUFBLDRCQVViTCxLQVZhLENBU2ZNLFFBVGU7QUFBQSxVQVNmQSxRQVRlLGdDQVNKLFVBQUFGLEtBQUs7QUFBQSxlQUFLQSxLQUFMO0FBQUEsT0FURDtBQVlqQixVQUFNRyxXQUFXLEdBQUdDLElBQUksQ0FBQ0MsSUFBTCxDQUFVWCxLQUFLLEdBQUdJLFNBQWxCLENBQXBCO0FBQ0EsVUFBTVEsWUFBWSxHQUFHRixJQUFJLENBQUNDLElBQUwsQ0FBVVYsTUFBTSxHQUFHRyxTQUFuQixDQUFyQjtBQUVBLFdBQUtwQixNQUFMLENBQVk2QixZQUFaLENBQXlCLE9BQXpCLEVBQWtDSixXQUFsQztBQUNBLFdBQUt6QixNQUFMLENBQVk2QixZQUFaLENBQXlCLFFBQXpCLEVBQW1DRCxZQUFuQztBQUVBLGFBQU8sS0FBS0UsV0FBTCxDQUFpQmYsS0FBakIsRUFBd0I7QUFDN0JVLG1CQUFXLEVBQVhBLFdBRDZCO0FBQ2hCRyxvQkFBWSxFQUFaQSxZQURnQjtBQUNGUixpQkFBUyxFQUFUQSxTQURFO0FBQ1NDLG1CQUFXLEVBQVhBLFdBRFQ7QUFDc0JHLGdCQUFRLEVBQVJBO0FBRHRCLE9BQXhCLENBQVA7QUFHRDs7O2dDQUVXVCxLLEVBQU9HLEssRUFBTztBQUFBLFVBRXRCTyxXQUZzQixHQU9wQlAsS0FQb0IsQ0FFdEJPLFdBRnNCO0FBQUEsVUFHdEJHLFlBSHNCLEdBT3BCVixLQVBvQixDQUd0QlUsWUFIc0I7QUFBQSxVQUl0QlIsU0FKc0IsR0FPcEJGLEtBUG9CLENBSXRCRSxTQUpzQjtBQUFBLFVBS3RCQyxXQUxzQixHQU9wQkgsS0FQb0IsQ0FLdEJHLFdBTHNCO0FBQUEsVUFNdEJHLFFBTnNCLEdBT3BCTixLQVBvQixDQU10Qk0sUUFOc0I7QUFTeEIsV0FBS3JCLEdBQUwsQ0FBUzRCLFNBQVQsQ0FBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUJOLFdBQXpCLEVBQXNDRyxZQUF0QztBQUNBLFdBQUtJLGNBQUwsQ0FBb0JqQixLQUFwQixFQUEyQlUsV0FBM0IsRUFBd0NHLFlBQXhDO0FBRUEsVUFBTUssU0FBUyxHQUFHLEtBQUs5QixHQUFMLENBQVMrQixZQUFULENBQXNCLENBQXRCLEVBQXlCLENBQXpCLEVBQTRCVCxXQUE1QixFQUF5Q0csWUFBekMsRUFBdURPLElBQXpFO0FBRUEsVUFBTUEsSUFBSSxHQUFHLEVBQWI7O0FBQ0EsV0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHUixZQUFwQixFQUFrQ1EsQ0FBQyxFQUFuQyxFQUF1QztBQUNyQyxhQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdaLFdBQXBCLEVBQWlDWSxDQUFDLEVBQWxDLEVBQXNDO0FBQ3BDLGNBQU1DLEtBQUssR0FBRyxDQUFDRixDQUFDLEdBQUdYLFdBQUosR0FBa0JZLENBQW5CLElBQXdCLENBQXRDO0FBRUEsY0FBTWYsS0FBSyxHQUFHO0FBQ1plLGFBQUMsRUFBRUEsQ0FBQyxHQUFHakIsU0FESztBQUVaZ0IsYUFBQyxFQUFFQSxDQUFDLEdBQUdoQixTQUZLO0FBR1ptQixhQUFDLEVBQUdOLFNBQVMsQ0FBQ0ssS0FBSyxHQUFHLENBQVQsQ0FBVCxHQUF1QixHQUhmO0FBSVpFLGFBQUMsRUFBR1AsU0FBUyxDQUFDSyxLQUFLLEdBQUcsQ0FBVCxDQUFULEdBQXVCLEdBSmY7QUFLWkcsYUFBQyxFQUFHUixTQUFTLENBQUNLLEtBQUssR0FBRyxDQUFULENBQVQsR0FBdUIsR0FMZjtBQU1aZixhQUFDLEVBQUdVLFNBQVMsQ0FBQ0ssS0FBSyxHQUFHLENBQVQsQ0FBVCxHQUF1QjtBQU5mLFdBQWQ7QUFTQSxjQUFJLENBQUNqQixXQUFXLENBQUNDLEtBQUQsQ0FBaEIsRUFBeUI7QUFFekJvQixnQkFBTSxDQUFDQyxNQUFQLENBQWNyQixLQUFkLEVBQXFCRSxRQUFRLENBQUNGLEtBQUQsQ0FBN0I7QUFFQWEsY0FBSSxDQUFDUyxJQUFMLENBQVV0QixLQUFWO0FBQ0Q7QUFDRjs7QUFFRCxhQUFPYSxJQUFQO0FBQ0Q7OzttQ0FFY1UsRyxFQUFLN0IsSyxFQUFPQyxNLEVBQVE7QUFDakMsVUFBTTZCLEtBQUssR0FBR3BCLElBQUksQ0FBQ3FCLEdBQUwsQ0FBUy9CLEtBQUssR0FBRzZCLEdBQUcsQ0FBQzdCLEtBQXJCLEVBQTRCQyxNQUFNLEdBQUc0QixHQUFHLENBQUM1QixNQUF6QyxDQUFkO0FBQ0EsVUFBTStCLElBQUksR0FBRztBQUNYaEMsYUFBSyxFQUFFNkIsR0FBRyxDQUFDN0IsS0FBSixHQUFZOEIsS0FEUjtBQUVYN0IsY0FBTSxFQUFFNEIsR0FBRyxDQUFDNUIsTUFBSixHQUFhNkI7QUFGVixPQUFiO0FBSUEsVUFBTUcsR0FBRyxHQUFHO0FBQ1ZaLFNBQUMsRUFBRSxDQUFDckIsS0FBSyxHQUFHZ0MsSUFBSSxDQUFDaEMsS0FBZCxJQUF1QixDQURoQjtBQUVWb0IsU0FBQyxFQUFFLENBQUNuQixNQUFNLEdBQUcrQixJQUFJLENBQUMvQixNQUFmLElBQXlCO0FBRmxCLE9BQVo7QUFJQSxXQUFLZCxHQUFMLENBQVMrQyxTQUFULENBQW1CTCxHQUFuQixFQUF3QixDQUF4QixFQUEyQixDQUEzQixFQUE4QkEsR0FBRyxDQUFDN0IsS0FBbEMsRUFBeUM2QixHQUFHLENBQUM1QixNQUE3QyxFQUFxRGdDLEdBQUcsQ0FBQ1osQ0FBekQsRUFBNERZLEdBQUcsQ0FBQ2IsQ0FBaEUsRUFBbUVZLElBQUksQ0FBQ2hDLEtBQXhFLEVBQStFZ0MsSUFBSSxDQUFDL0IsTUFBcEY7QUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlHSDtBQUVBO0FBQ0E7QUFDQTs7SUFFcUJrQyxlO0FBQ25CLGlDQVlHO0FBQUE7O0FBQUEsUUFYRHZDLE9BV0MsUUFYREEsT0FXQztBQUFBLDhCQVZEUSxTQVVDO0FBQUEsUUFWREEsU0FVQywrQkFWVyxFQVVYO0FBQUEsaUNBVERnQyxZQVNDO0FBQUEsUUFUREEsWUFTQyxrQ0FUYyxDQVNkO0FBQUEsK0JBUkRDLFVBUUM7QUFBQSxRQVJEQSxVQVFDLGdDQVJZLENBQUMsR0FRYjtBQUFBLDRCQVBEQyxPQU9DO0FBQUEsUUFQREEsT0FPQyw2QkFQUyxDQU9UO0FBQUEsNkJBTkRDLFFBTUM7QUFBQSxRQU5EQSxRQU1DLDhCQU5VLENBTVY7QUFBQSw4QkFMREMsU0FLQztBQUFBLFFBTERBLFNBS0MsK0JBTFcsR0FLWDtBQUFBLFFBSkRuQyxXQUlDLFFBSkRBLFdBSUM7QUFBQSxRQUhERyxRQUdDLFFBSERBLFFBR0M7QUFBQSxRQUZEaUMsWUFFQyxRQUZEQSxZQUVDO0FBQUEscUNBRERDLGdCQUNDO0FBQUEsUUFEREEsZ0JBQ0Msc0NBRGtCLElBQ2xCOztBQUFBOztBQUNELFNBQUs5QyxPQUFMLEdBQWVBLE9BQWY7QUFFQSxTQUFLUSxTQUFMLEdBQWlCQSxTQUFqQjtBQUNBLFNBQUtnQyxZQUFMLEdBQW9CQSxZQUFwQjtBQUNBLFNBQUtDLFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0EsU0FBS0MsT0FBTCxHQUFlQSxPQUFmO0FBQ0EsU0FBS0MsUUFBTCxHQUFnQkEsUUFBaEI7QUFDQSxTQUFLQyxTQUFMLEdBQWlCQSxTQUFqQjtBQUNBLFNBQUtuQyxXQUFMLEdBQW1CQSxXQUFuQjtBQUNBLFNBQUtHLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsU0FBS2lDLFlBQUwsR0FBb0JBLFlBQXBCO0FBQ0EsU0FBS0MsZ0JBQUwsR0FBd0JBLGdCQUF4QjtBQUVBLFFBQU1DLGFBQWEsR0FBRyxFQUF0QjtBQUVBLFNBQUtDLFdBQUwsR0FBbUIsSUFBSTlELHVEQUFKLEVBQW5CO0FBQ0E2RCxpQkFBYSxDQUFDZixJQUFkLENBQW1CLEtBQUtnQixXQUFMLENBQWlCQyxJQUFqQixDQUFzQmpELE9BQU8sQ0FBQ1AsR0FBOUIsQ0FBbkI7QUFFQUMsV0FBTyxDQUFDd0QsR0FBUixDQUFZSCxhQUFaLEVBQTJCSSxJQUEzQixDQUFnQyxZQUFNO0FBQ3BDLFdBQUksQ0FBQ0MsWUFBTDtBQUNELEtBRkQ7QUFHRDs7OzttQ0FFYztBQUNiLFdBQUtoRCxLQUFMLEdBQWEsS0FBS0osT0FBTCxDQUFhcUQsWUFBYixJQUE2QixLQUFLckQsT0FBTCxDQUFhSSxLQUF2RDtBQUNBLFdBQUtDLE1BQUwsR0FBYyxLQUFLTCxPQUFMLENBQWFzRCxhQUFiLElBQThCLEtBQUt0RCxPQUFMLENBQWFLLE1BQXpEO0FBRUEsV0FBS2tELGFBQUwsR0FBcUIsS0FBS1AsV0FBTCxDQUFpQlEsV0FBakIsQ0FBNkI7QUFDaERwRCxhQUFLLEVBQUUsS0FBS0EsS0FEb0M7QUFFaERDLGNBQU0sRUFBRSxLQUFLQSxNQUZtQztBQUdoREcsaUJBQVMsRUFBRSxLQUFLQSxTQUhnQztBQUloREMsbUJBQVcsRUFBRSxLQUFLQSxXQUo4QjtBQUtoREcsZ0JBQVEsRUFBRSxLQUFLQTtBQUxpQyxPQUE3QixDQUFyQjtBQVFBLFdBQUs2QyxXQUFMLEdBQW1CLElBQUlDLGtEQUFKLENBQVcsQ0FBWCxFQUFjLENBQWQsQ0FBbkI7QUFFQSxXQUFLQyxZQUFMO0FBQ0EsV0FBS0MsYUFBTDtBQUNBLFdBQUtDLFFBQUwsQ0FBY0MsTUFBZCxDQUFxQixLQUFLQyxLQUExQjtBQUNBLFdBQUtDLFNBQUw7QUFFQSxXQUFLQyxjQUFMO0FBQ0EsV0FBS0MsVUFBTDtBQUVBLFdBQUtDLG1CQUFMO0FBQ0Q7OzttQ0FFYztBQUNiQyxtREFBQSxDQUFXQyxTQUFYO0FBQ0EsV0FBS1IsUUFBTCxHQUFnQixJQUFJTyxnREFBSixDQUFrQjtBQUNoQ2hFLGFBQUssRUFBRSxLQUFLQSxLQURvQjtBQUVoQ0MsY0FBTSxFQUFFLEtBQUtBLE1BRm1CO0FBR2hDaUUsbUJBQVcsRUFBRTtBQUhtQixPQUFsQixDQUFoQjtBQUtBLFdBQUtULFFBQUwsQ0FBY1UsT0FBZCxDQUFzQkMsd0JBQXRCLEdBQWlELEtBQWpEO0FBQ0EsV0FBS1gsUUFBTCxDQUFjVSxPQUFkLENBQXNCRSwyQkFBdEIsR0FBb0QsS0FBcEQ7QUFFQSxXQUFLQyxRQUFMLEdBQWdCLEtBQUtiLFFBQUwsQ0FBY2MsSUFBOUI7QUFFQSxXQUFLM0UsT0FBTCxDQUFhNEUsS0FBYixDQUFtQkMsT0FBbkIsR0FBNkIsTUFBN0I7QUFDQSxXQUFLN0UsT0FBTCxDQUFhOEUsYUFBYixDQUEyQkMsV0FBM0IsQ0FBdUMsS0FBS0wsUUFBNUM7QUFFQSxXQUFLWCxLQUFMLEdBQWEsSUFBSUssaURBQUosRUFBYjtBQUVBLFdBQUtZLGlCQUFMLEdBQXlCLElBQUlaLGlEQUFKLEVBQXpCO0FBQ0EsV0FBS0wsS0FBTCxDQUFXa0IsUUFBWCxDQUFvQixLQUFLRCxpQkFBekI7QUFFQSxXQUFLRSxJQUFMLEdBQVksS0FBS0EsSUFBTCxDQUFVQyxJQUFWLENBQWUsSUFBZixDQUFaO0FBQ0EsV0FBS0MsTUFBTCxHQUFjLElBQUloQiw4Q0FBSixFQUFkO0FBQ0EsV0FBS2dCLE1BQUwsQ0FBWUMsR0FBWixDQUFnQixLQUFLSCxJQUFyQjtBQUNEOzs7b0NBRWU7QUFDZCxXQUFLSSxTQUFMLEdBQWlCLEVBQWpCO0FBRUEsVUFBTUMsY0FBYyxHQUFHLEtBQUtoQyxhQUFMLENBQW1CaUMsTUFBMUM7QUFDQSxVQUFNQyxNQUFNLEdBQUcsS0FBS0MsU0FBTCxFQUFmOztBQUVBLFVBQU03QyxZQUFZLEdBQUcsS0FBS0EsWUFBTCxJQUFzQjtBQUFBLGVBQU8sRUFBUDtBQUFBLE9BQTNDOztBQUVBLFVBQU04QyxPQUFPLEdBQUcsS0FBS0MsbUJBQUwsQ0FBeUJILE1BQU0sQ0FBQ2pELFlBQVAsR0FBc0IsQ0FBL0MsRUFBa0QsUUFBbEQsRUFBNEQsQ0FBNUQsQ0FBaEI7O0FBRUEsV0FBSyxJQUFJcUQsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR04sY0FBcEIsRUFBb0NNLENBQUMsRUFBckMsRUFBeUM7QUFDdkMsWUFBTUMsUUFBUSxHQUFHLEtBQUt2QyxhQUFMLENBQW1Cc0MsQ0FBbkIsQ0FBakI7QUFFQSxZQUFNRSxLQUFLLEdBQUczQiw2Q0FBQSxDQUFXNEIsT0FBWCxDQUFtQixDQUFDRixRQUFRLENBQUNuRSxDQUFWLEVBQWFtRSxRQUFRLENBQUNsRSxDQUF0QixFQUF5QmtFLFFBQVEsQ0FBQ2pFLENBQWxDLENBQW5CLENBQWQ7QUFFQSxhQUFLeUQsU0FBTCxDQUFldEQsSUFBZixDQUFvQixJQUFJaUUsb0RBQUosQ0FBYSxLQUFLakIsaUJBQWxCLEVBQXFDbEQsTUFBTSxDQUFDQyxNQUFQLENBQWM7QUFDckVOLFdBQUMsRUFBRWdFLE1BQU0sQ0FBQ1MsSUFEMkQ7QUFFckUxRSxXQUFDLEVBQUVpRSxNQUFNLENBQUNVLElBRjJEO0FBR3JFQyxjQUFJLEVBQUV0RixJQUFJLENBQUN1RixNQUFMLEtBQWdCWixNQUFNLENBQUM5QyxRQUF2QixHQUFrQzhDLE1BQU0sQ0FBQy9DLE9BSHNCO0FBSXJFaUQsaUJBQU8sRUFBUEEsT0FKcUU7QUFLckVJLGVBQUssRUFBTEEsS0FMcUU7QUFNckVPLGVBQUssRUFBRVIsUUFBUSxDQUFDbkYsQ0FOcUQ7QUFPckU0RixlQUFLLEVBQ0YsQ0FBQ2QsTUFBTSxDQUFDZSxNQUFQLElBQWlCVixRQUFRLENBQUN0RSxDQUFULEdBQWFpRSxNQUFNLENBQUNnQixJQUFyQyxDQUFELEtBQWdELElBQUloQixNQUFNLENBQUNlLE1BQTNELENBQUQsR0FDRzFGLElBQUksQ0FBQ3VGLE1BQUwsS0FBZ0JaLE1BQU0sQ0FBQzdDO0FBVHlDLFNBQWQsRUFXdERDLFlBQVksQ0FBQ2lELFFBQUQsRUFBV0wsTUFBWCxDQVgwQyxDQUFyQyxDQUFwQjtBQVlEO0FBQ0Y7OztnQ0FFVztBQUNWLFVBQU1GLGNBQWMsR0FBRyxLQUFLaEMsYUFBTCxDQUFtQmlDLE1BQTFDO0FBQ0EsVUFBTWhELFlBQVksR0FBRyxLQUFLQSxZQUExQjtBQUNBLFVBQU1FLE9BQU8sR0FBRyxLQUFLQSxPQUFyQjtBQUNBLFVBQU1DLFFBQVEsR0FBRyxLQUFLQSxRQUF0QjtBQUNBLFVBQU1DLFNBQVMsR0FBRyxLQUFLQSxTQUF2QjtBQUVBLFVBQUk4RCxJQUFJLEdBQUcsQ0FBWDtBQUNBLFVBQUlDLElBQUksR0FBRyxDQUFYO0FBRUEsVUFBSUMsSUFBSSxHQUFHLEtBQUtyRCxhQUFMLENBQW1CLENBQW5CLEVBQXNCOUIsQ0FBakM7QUFDQSxVQUFJb0YsSUFBSSxHQUFHLENBQVg7QUFFQSxVQUFJSixJQUFJLEdBQUcsS0FBS2xELGFBQUwsQ0FBbUIsQ0FBbkIsRUFBc0IvQixDQUFqQztBQUNBLFVBQUlzRixJQUFJLEdBQUcsQ0FBWDs7QUFFQSxXQUFLLElBQUlqQixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHTixjQUFwQixFQUFvQ00sQ0FBQyxFQUFyQyxFQUF5QztBQUN2QyxZQUFNa0IsWUFBWSxHQUFHLEtBQUt4RCxhQUFMLENBQW1Cc0MsQ0FBbkIsQ0FBckI7QUFFQWEsWUFBSSxJQUFJSyxZQUFZLENBQUN0RixDQUFyQjtBQUNBa0YsWUFBSSxJQUFJSSxZQUFZLENBQUN2RixDQUFyQjtBQUVBLFlBQUl1RixZQUFZLENBQUN0RixDQUFiLEdBQWlCbUYsSUFBckIsRUFBMkJBLElBQUksR0FBR0csWUFBWSxDQUFDdEYsQ0FBcEI7QUFDM0IsWUFBSXNGLFlBQVksQ0FBQ3RGLENBQWIsR0FBaUJvRixJQUFyQixFQUEyQkEsSUFBSSxHQUFHRSxZQUFZLENBQUN0RixDQUFwQjtBQUUzQixZQUFJc0YsWUFBWSxDQUFDdkYsQ0FBYixHQUFpQmlGLElBQXJCLEVBQTJCQSxJQUFJLEdBQUdNLFlBQVksQ0FBQ3ZGLENBQXBCO0FBQzNCLFlBQUl1RixZQUFZLENBQUN2RixDQUFiLEdBQWlCc0YsSUFBckIsRUFBMkJBLElBQUksR0FBR0MsWUFBWSxDQUFDdkYsQ0FBcEI7QUFDNUI7O0FBRUQsYUFBTztBQUNMcEIsYUFBSyxFQUFFLEtBQUtBLEtBRFA7QUFFTEMsY0FBTSxFQUFFLEtBQUtBLE1BRlI7QUFHTDJHLGlCQUFTLEVBQUUsS0FBSzVHLEtBQUwsR0FBYSxDQUhuQjtBQUlMNkcsa0JBQVUsRUFBRSxLQUFLNUcsTUFBTCxHQUFjLENBSnJCO0FBS0xrRixzQkFBYyxFQUFkQSxjQUxLO0FBTUwvQyxvQkFBWSxFQUFaQSxZQU5LO0FBT0xFLGVBQU8sRUFBUEEsT0FQSztBQVFMQyxnQkFBUSxFQUFSQSxRQVJLO0FBU0xDLGlCQUFTLEVBQVRBLFNBVEs7QUFVTGdFLFlBQUksRUFBSkEsSUFWSztBQVdMSCxZQUFJLEVBQUpBLElBWEs7QUFZTEksWUFBSSxFQUFKQSxJQVpLO0FBYUxDLFlBQUksRUFBSkEsSUFiSztBQWNMSixZQUFJLEVBQUpBLElBZEs7QUFlTEMsWUFBSSxFQUFKQSxJQWZLO0FBZ0JMVCxZQUFJLEVBQUdRLElBQUksR0FBR25CLGNBaEJUO0FBaUJMWSxZQUFJLEVBQUdRLElBQUksR0FBR3BCLGNBakJUO0FBa0JMMkIsY0FBTSxFQUFHTCxJQUFJLEdBQUdELElBbEJYO0FBbUJMSixjQUFNLEVBQUdNLElBQUksR0FBR0w7QUFuQlgsT0FBUDtBQXFCRDs7O3dDQUVtQlUsTSxFQUFRcEIsSyxFQUFPTyxLLEVBQU87QUFDeEMsVUFBTWMsUUFBUSxHQUFHLElBQUloRCxnREFBSixFQUFqQjtBQUNBZ0QsY0FBUSxDQUFDQyxTQUFULENBQW1CdEIsS0FBbkIsRUFBMEJPLEtBQTFCO0FBQ0FjLGNBQVEsQ0FBQ0UsVUFBVCxDQUFvQixDQUFwQixFQUF1QixDQUF2QixFQUEwQkgsTUFBMUI7QUFDQUMsY0FBUSxDQUFDRyxPQUFUO0FBQ0EsVUFBTTVCLE9BQU8sR0FBRyxLQUFLOUIsUUFBTCxDQUFjMkQsZUFBZCxDQUE4QkosUUFBOUIsQ0FBaEI7QUFDQUEsY0FBUSxDQUFDSyxLQUFUO0FBQ0FMLGNBQVEsQ0FBQ00sT0FBVDtBQUNBLGFBQU8vQixPQUFQO0FBQ0Q7OztxQ0FFZ0I7QUFDZixVQUFNZ0MsVUFBVSxHQUFHLEtBQUtqRCxRQUFMLENBQWNrRCxxQkFBZCxFQUFuQjtBQUNBLFdBQUsxRixLQUFMLEdBQWEsS0FBSzlCLEtBQUwsR0FBYXVILFVBQVUsQ0FBQ3ZILEtBQXJDO0FBQ0Q7OzswQ0FFcUI7QUFDcEIsVUFBTXlILENBQUMsR0FBRyxLQUFLdEUsYUFBTCxDQUFtQmlDLE1BQTdCOztBQUNBLFdBQUssSUFBSUssQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR2dDLENBQXBCLEVBQXVCaEMsQ0FBQyxFQUF4QixFQUE0QjtBQUMxQixZQUFNa0IsWUFBWSxHQUFHLEtBQUt4RCxhQUFMLENBQW1Cc0MsQ0FBbkIsQ0FBckI7QUFDQSxhQUFLUCxTQUFMLENBQWVPLENBQWYsRUFBa0JpQyxTQUFsQixDQUE0QixJQUFJcEUsa0RBQUosQ0FBV3FELFlBQVksQ0FBQ3RGLENBQXhCLEVBQTJCc0YsWUFBWSxDQUFDdkYsQ0FBeEMsQ0FBNUI7QUFDRDtBQUNGOzs7aUNBRVk7QUFDWHVHLFlBQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0MsS0FBS0MsUUFBTCxDQUFjOUMsSUFBZCxDQUFtQixJQUFuQixDQUFsQzs7QUFDQSxVQUFJLEtBQUtyQyxnQkFBVCxFQUEyQjtBQUN6QmlGLGNBQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0IsV0FBeEIsRUFBcUMsS0FBS0UsV0FBTCxDQUFpQi9DLElBQWpCLENBQXNCLElBQXRCLENBQXJDO0FBQ0Q7QUFDRjs7OytCQUVVO0FBQ1QsV0FBS2xCLGNBQUw7QUFDRDs7O2dDQUVXbEUsQyxFQUFHO0FBQ2IsVUFBTTRILFVBQVUsR0FBRyxLQUFLakQsUUFBTCxDQUFja0QscUJBQWQsRUFBbkI7QUFDQSxXQUFLbkUsV0FBTCxDQUFpQjBFLEdBQWpCLENBQXFCcEksQ0FBQyxDQUFDcUksT0FBRixHQUFZVCxVQUFVLENBQUNVLElBQTVDLEVBQWtEdEksQ0FBQyxDQUFDdUksT0FBRixHQUFZWCxVQUFVLENBQUNZLEdBQXpFO0FBQ0EsV0FBSzlFLFdBQUwsQ0FBaUIrRSxRQUFqQixDQUEwQixLQUFLdEcsS0FBL0I7QUFDRDs7O2dDQUVXO0FBQ1YsV0FBS2tELE1BQUwsQ0FBWXFELEtBQVo7QUFDRDs7OytCQUVVO0FBQ1QsV0FBS3JELE1BQUwsQ0FBWXNELElBQVo7QUFDRDs7O3lCQUVJQyxLLEVBQU87QUFDVixXQUFLQyxNQUFMLENBQVlELEtBQVo7QUFDQSxXQUFLN0UsTUFBTCxDQUFZLENBQVo7QUFDRDs7OzJCQUVNNkUsSyxFQUFPO0FBQ1osVUFBTWQsQ0FBQyxHQUFHLEtBQUt2QyxTQUFMLENBQWVFLE1BQXpCOztBQUNBLFdBQUssSUFBSUssQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR2dDLENBQXBCLEVBQXVCaEMsQ0FBQyxFQUF4QixFQUE0QjtBQUMxQixZQUFNQyxRQUFRLEdBQUcsS0FBS1IsU0FBTCxDQUFlTyxDQUFmLENBQWpCO0FBQ0FDLGdCQUFRLENBQUMrQyxRQUFULENBQWtCL0MsUUFBUSxDQUFDZ0QsZ0JBQVQsRUFBbEI7O0FBQ0EsWUFBSSxLQUFLaEcsZ0JBQVQsRUFBMkI7QUFDekJnRCxrQkFBUSxDQUFDK0MsUUFBVCxDQUFrQi9DLFFBQVEsQ0FBQ2lELGFBQVQsQ0FBdUIsS0FBS3RGLFdBQTVCLENBQWxCO0FBQ0Q7O0FBQ0RxQyxnQkFBUSxDQUFDK0MsUUFBVCxDQUFrQm5GLGtEQUFNLENBQUM4RSxRQUFQLENBQWdCMUMsUUFBUSxDQUFDa0QsUUFBekIsRUFBbUMsS0FBS3ZHLFVBQXhDLENBQWxCO0FBQ0FxRCxnQkFBUSxDQUFDOEMsTUFBVCxDQUFnQkQsS0FBaEI7QUFDRDtBQUNGOzs7MkJBRU1NLE0sRUFBUTtBQUNiLFVBQU1wQixDQUFDLEdBQUcsS0FBS3ZDLFNBQUwsQ0FBZUUsTUFBekI7O0FBQ0EsV0FBSyxJQUFJSyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHZ0MsQ0FBcEIsRUFBdUJoQyxDQUFDLEVBQXhCLEVBQTRCO0FBQzFCLGFBQUtQLFNBQUwsQ0FBZU8sQ0FBZixFQUFrQi9CLE1BQWxCLENBQXlCbUYsTUFBekI7QUFDRDs7QUFFRCxXQUFLcEYsUUFBTCxDQUFjQyxNQUFkLENBQXFCLEtBQUtDLEtBQTFCO0FBQ0Q7Ozs4QkFFUztBQUNSLFVBQUksS0FBS3FCLE1BQVQsRUFBaUI7QUFDZixhQUFLOEQsUUFBTDtBQUNBLGFBQUs5RCxNQUFMLENBQVkrRCxNQUFaLENBQW1CLEtBQUtqRSxJQUF4QjtBQUNBLGFBQUtFLE1BQUwsQ0FBWXNDLE9BQVo7QUFDRDs7QUFFRCxVQUFNRyxDQUFDLEdBQUcsS0FBS3ZDLFNBQUwsQ0FBZUUsTUFBekI7O0FBQ0EsV0FBSyxJQUFJSyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHZ0MsQ0FBcEIsRUFBdUJoQyxDQUFDLEVBQXhCLEVBQTRCO0FBQzFCLGFBQUtQLFNBQUwsQ0FBZU8sQ0FBZixFQUFrQjZCLE9BQWxCO0FBQ0Q7O0FBRUQsVUFBSSxLQUFLM0QsS0FBVCxFQUFnQjtBQUNkLGFBQUtBLEtBQUwsQ0FBVzJELE9BQVgsQ0FBbUI7QUFBRTBCLGtCQUFRLEVBQUUsSUFBWjtBQUFrQnpELGlCQUFPLEVBQUU7QUFBM0IsU0FBbkI7QUFDRDs7QUFFRCxVQUFJLEtBQUs5QixRQUFULEVBQW1CO0FBQ2pCLGFBQUtBLFFBQUwsQ0FBYzZELE9BQWQ7QUFDRDtBQUNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlRSDtBQUVBOztJQUVxQnpCLFE7QUFDbkIsb0JBQVlvRCxTQUFaLFFBRUc7QUFBQSxRQURENUgsQ0FDQyxRQUREQSxDQUNDO0FBQUEsUUFERUQsQ0FDRixRQURFQSxDQUNGO0FBQUEseUJBREs0RSxJQUNMO0FBQUEsUUFES0EsSUFDTCwwQkFEWSxDQUNaO0FBQUEsUUFEZVQsT0FDZixRQURlQSxPQUNmO0FBQUEsUUFEd0JJLEtBQ3hCLFFBRHdCQSxLQUN4QjtBQUFBLFFBRCtCTyxLQUMvQixRQUQrQkEsS0FDL0I7QUFBQSxRQURzQ0MsS0FDdEMsUUFEc0NBLEtBQ3RDOztBQUFBOztBQUNELFNBQUsrQyxRQUFMLEdBQWdCLElBQUk1RiwrQ0FBSixDQUFXakMsQ0FBWCxFQUFjRCxDQUFkLENBQWhCO0FBQ0EsU0FBS3dILFFBQUwsR0FBZ0IsSUFBSXRGLCtDQUFKLENBQVcsQ0FBWCxFQUFjLENBQWQsQ0FBaEI7QUFDQSxTQUFLNkYsWUFBTCxHQUFvQixJQUFJN0YsK0NBQUosQ0FBVyxDQUFYLEVBQWMsQ0FBZCxDQUFwQjtBQUNBLFNBQUs4RixLQUFMLEdBQWEsSUFBSTlGLCtDQUFKLENBQVcsQ0FBWCxFQUFjLENBQWQsQ0FBYjtBQUNBLFNBQUswQyxJQUFMLEdBQVlBLElBQVo7QUFDQSxTQUFLbkcsTUFBTCxHQUFjLEtBQUtxSixRQUFMLENBQWNHLEtBQWQsRUFBZDtBQUVBLFNBQUtDLFVBQUwsR0FBa0JuRCxLQUFLLEdBQUcsRUFBMUIsQ0FSQyxDQVE2Qjs7QUFDOUIsU0FBS29ELE9BQUwsR0FBZSxLQUFLRCxVQUFMLEdBQWtCLENBQWpDO0FBRUEsUUFBSSxDQUFDTCxTQUFMLEVBQWdCO0FBRWhCLFNBQUtPLE1BQUwsR0FBYyxLQUFLQyxZQUFMLENBQWtCO0FBQUVsRSxhQUFPLEVBQVBBLE9BQUY7QUFBV0ksV0FBSyxFQUFMQSxLQUFYO0FBQWtCTyxXQUFLLEVBQUxBO0FBQWxCLEtBQWxCLENBQWQ7QUFDQStDLGFBQVMsQ0FBQ3BFLFFBQVYsQ0FBbUIsS0FBSzJFLE1BQXhCO0FBQ0Q7Ozs7d0NBRXVDO0FBQUEsVUFBekJqRSxPQUF5QixTQUF6QkEsT0FBeUI7QUFBQSxVQUFoQkksS0FBZ0IsU0FBaEJBLEtBQWdCO0FBQUEsVUFBVE8sS0FBUyxTQUFUQSxLQUFTO0FBQ3RDLFVBQU1zRCxNQUFNLEdBQUcsSUFBSXhGLDhDQUFKLENBQWdCdUIsT0FBaEIsQ0FBZjtBQUNBaUUsWUFBTSxDQUFDRSxJQUFQLEdBQWMvRCxLQUFkO0FBQ0E2RCxZQUFNLENBQUN0RCxLQUFQLEdBQWVBLEtBQWY7QUFDQXNELFlBQU0sQ0FBQ0csTUFBUCxDQUFjNUIsR0FBZCxDQUFrQixHQUFsQjtBQUNBeUIsWUFBTSxDQUFDTixRQUFQLENBQWdCbkIsR0FBaEIsQ0FBb0IsS0FBS21CLFFBQUwsQ0FBYzdILENBQWxDLEVBQXFDLEtBQUs2SCxRQUFMLENBQWM5SCxDQUFuRDtBQUVBLGFBQU9vSSxNQUFQO0FBQ0Q7Ozs2QkFFUUosSyxFQUFPO0FBQ2QsVUFBSSxDQUFDQSxLQUFMLEVBQVk7QUFDWixXQUFLQSxLQUFMLENBQVduRSxHQUFYLENBQWVtRSxLQUFmO0FBQ0Q7Ozs4QkFFU3ZKLE0sRUFBUTtBQUNoQixXQUFLQSxNQUFMLEdBQWNBLE1BQWQ7QUFDRDs7O3VDQUVrQjtBQUNqQixVQUFJLENBQUMsS0FBS0EsTUFBVixFQUFrQixPQUFPLElBQVA7QUFFbEIsVUFBTXVKLEtBQUssR0FBRzlGLCtDQUFNLENBQUNzRyxRQUFQLENBQWdCLEtBQUsvSixNQUFyQixFQUE2QixLQUFLcUosUUFBbEMsQ0FBZDtBQUNBRSxXQUFLLENBQUNoQixRQUFOLENBQWUsSUFBZjtBQUVBLGFBQU9nQixLQUFQO0FBQ0Q7OztrQ0FFYVMsUSxFQUFVO0FBQ3RCLFVBQU1ULEtBQUssR0FBRzlGLCtDQUFNLENBQUNzRyxRQUFQLENBQWdCQyxRQUFoQixFQUEwQixLQUFLWCxRQUEvQixDQUFkO0FBQ0EsVUFBTVksUUFBUSxHQUFHVixLQUFLLENBQUNXLEtBQU4sRUFBakI7QUFDQVgsV0FBSyxDQUFDWSxTQUFOO0FBQ0EsVUFBTUMsT0FBTyxHQUFJLE1BQU1ILFFBQXZCO0FBQ0EsVUFBTUksUUFBUSxHQUFJRCxPQUFPLEdBQUdBLE9BQTVCO0FBQ0EsVUFBTUUsWUFBWSxHQUFHRCxRQUFRLEdBQUcsSUFBaEM7QUFDQSxVQUFNRSxJQUFJLEdBQUdELFlBQVksR0FBRyxDQUFmLEdBQW1CLENBQW5CLEdBQXVCQSxZQUFZLEdBQUcsR0FBbkQ7QUFDQWYsV0FBSyxDQUFDaEIsUUFBTixDQUFlLENBQUNnQyxJQUFoQjtBQUVBLGFBQU9oQixLQUFQO0FBQ0Q7OzsyQkFFTWIsSyxFQUFPO0FBQ1osVUFBSSxLQUFLZ0IsT0FBVCxFQUFrQjtBQUNoQixhQUFLRCxVQUFMLElBQW1CZixLQUFuQjtBQUNBLFlBQUksS0FBS2UsVUFBTCxHQUFrQixDQUF0QixFQUF5QjtBQUV6QixhQUFLQSxVQUFMLEdBQWtCLENBQWxCO0FBQ0EsYUFBS0MsT0FBTCxHQUFlLEtBQWY7QUFDQSxhQUFLSCxLQUFMLENBQVdyQixHQUFYLENBQWUsQ0FBZixFQUFrQixDQUFsQjtBQUNBO0FBQ0Q7O0FBRUQsV0FBS29CLFlBQUwsQ0FBa0JwQixHQUFsQixDQUFzQixLQUFLcUIsS0FBTCxDQUFXL0gsQ0FBakMsRUFBb0MsS0FBSytILEtBQUwsQ0FBV2hJLENBQS9DO0FBQ0EsV0FBSytILFlBQUwsQ0FBa0JrQixNQUFsQixDQUF5QixLQUFLckUsSUFBOUI7QUFDQSxXQUFLNEMsUUFBTCxDQUFjM0QsR0FBZCxDQUFrQixLQUFLa0UsWUFBdkI7QUFDQSxXQUFLRCxRQUFMLENBQWNqRSxHQUFkLENBQWtCLEtBQUsyRCxRQUF2QjtBQUNBLFdBQUtRLEtBQUwsQ0FBV3JCLEdBQVgsQ0FBZSxDQUFmLEVBQWtCLENBQWxCO0FBQ0Q7Ozs2QkFFUTtBQUNQLFVBQUksQ0FBQyxLQUFLeUIsTUFBVixFQUFrQjtBQUNsQixXQUFLQSxNQUFMLENBQVlOLFFBQVosQ0FBcUJuQixHQUFyQixDQUF5QixLQUFLbUIsUUFBTCxDQUFjN0gsQ0FBdkMsRUFBMEMsS0FBSzZILFFBQUwsQ0FBYzlILENBQXhEO0FBQ0Q7Ozs4QkFFUztBQUNSLFdBQUtvSSxNQUFMLENBQVlsQyxPQUFaLENBQW9CO0FBQUUvQixlQUFPLEVBQUU7QUFBWCxPQUFwQjtBQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQzFGa0JqQyxNO0FBQ25CLGtCQUFZakMsQ0FBWixFQUFlRCxDQUFmLEVBQWtCO0FBQUE7O0FBQ2hCLFNBQUtDLENBQUwsR0FBU0EsQ0FBVDtBQUNBLFNBQUtELENBQUwsR0FBU0EsQ0FBVDtBQUNEOzs7O3dCQThCR0MsQyxFQUFHRCxDLEVBQUc7QUFDUixXQUFLQyxDQUFMLEdBQVNBLENBQVQ7QUFDQSxXQUFLRCxDQUFMLEdBQVNBLENBQVQ7QUFDRDs7O3lCQUVJQyxDLEVBQUc7QUFDTixXQUFLQSxDQUFMLEdBQVNBLENBQVQ7QUFDRDs7O3lCQUVJRCxDLEVBQUc7QUFDTixXQUFLQSxDQUFMLEdBQVNBLENBQVQ7QUFDRDs7O3dCQUVHa0osTSxFQUFRO0FBQ1YsV0FBS2pKLENBQUwsR0FBU2lDLE1BQU0sQ0FBQ2lILFNBQVAsQ0FBaUIsS0FBS2xKLENBQUwsR0FBU2lKLE1BQU0sQ0FBQ2pKLENBQWpDLENBQVQ7QUFDQSxXQUFLRCxDQUFMLEdBQVNrQyxNQUFNLENBQUNpSCxTQUFQLENBQWlCLEtBQUtuSixDQUFMLEdBQVNrSixNQUFNLENBQUNsSixDQUFqQyxDQUFUO0FBQ0Q7Ozs2QkFFUWtKLE0sRUFBUTtBQUNmLFdBQUtqSixDQUFMLEdBQVNpQyxNQUFNLENBQUNpSCxTQUFQLENBQWlCLEtBQUtsSixDQUFMLEdBQVNpSixNQUFNLENBQUNqSixDQUFqQyxDQUFUO0FBQ0EsV0FBS0QsQ0FBTCxHQUFTa0MsTUFBTSxDQUFDaUgsU0FBUCxDQUFpQixLQUFLbkosQ0FBTCxHQUFTa0osTUFBTSxDQUFDbEosQ0FBakMsQ0FBVDtBQUNEOzs7NkJBRVFvSixDLEVBQUc7QUFDVixXQUFLbkosQ0FBTCxHQUFTaUMsTUFBTSxDQUFDaUgsU0FBUCxDQUFpQixLQUFLbEosQ0FBTCxHQUFTbUosQ0FBMUIsQ0FBVDtBQUNBLFdBQUtwSixDQUFMLEdBQVNrQyxNQUFNLENBQUNpSCxTQUFQLENBQWlCLEtBQUtuSixDQUFMLEdBQVNvSixDQUExQixDQUFUO0FBQ0Q7OzsyQkFFTUEsQyxFQUFHO0FBQ1IsV0FBS25KLENBQUwsR0FBU2lDLE1BQU0sQ0FBQ2lILFNBQVAsQ0FBaUIsS0FBS2xKLENBQUwsR0FBU21KLENBQTFCLENBQVQ7QUFDQSxXQUFLcEosQ0FBTCxHQUFTa0MsTUFBTSxDQUFDaUgsU0FBUCxDQUFpQixLQUFLbkosQ0FBTCxHQUFTb0osQ0FBMUIsQ0FBVDtBQUNEOzs7NEJBRU87QUFDTixhQUFPOUosSUFBSSxDQUFDK0osSUFBTCxDQUFVLFNBQUMsS0FBS3BKLENBQU4sRUFBVyxDQUFYLGFBQWlCLEtBQUtELENBQXRCLEVBQTJCLENBQTNCLENBQVYsQ0FBUDtBQUNEOzs7Z0NBRVc7QUFDVixVQUFNMkksS0FBSyxHQUFHLEtBQUtBLEtBQUwsRUFBZDs7QUFFQSxVQUFJQSxLQUFLLEtBQUssQ0FBZCxFQUFpQjtBQUNmLGFBQUsxSSxDQUFMLElBQVUwSSxLQUFWO0FBQ0EsYUFBSzNJLENBQUwsSUFBVTJJLEtBQVY7QUFDRCxPQUhELE1BR087QUFDTCxhQUFLMUksQ0FBTCxHQUFTLENBQVQ7QUFDQSxhQUFLRCxDQUFMLEdBQVMsQ0FBVDtBQUNEO0FBQ0Y7Ozs0QkFFTztBQUNOLGFBQU8sSUFBSWtDLE1BQUosQ0FBVyxLQUFLakMsQ0FBaEIsRUFBbUIsS0FBS0QsQ0FBeEIsQ0FBUDtBQUNEOzs7d0JBL0VVc0osTyxFQUFTQyxPLEVBQVM7QUFDM0IsVUFBTUMsU0FBUyxHQUFHRixPQUFPLENBQUNyQixLQUFSLEVBQWxCO0FBQ0F1QixlQUFTLENBQUMzRixHQUFWLENBQWMwRixPQUFkO0FBQ0EsYUFBT0MsU0FBUDtBQUNEOzs7NkJBRWVGLE8sRUFBU0MsTyxFQUFTO0FBQ2hDLFVBQU1DLFNBQVMsR0FBR0YsT0FBTyxDQUFDckIsS0FBUixFQUFsQjtBQUNBdUIsZUFBUyxDQUFDaEIsUUFBVixDQUFtQmUsT0FBbkI7QUFDQSxhQUFPQyxTQUFQO0FBQ0Q7Ozs2QkFFZU4sTSxFQUFRRSxDLEVBQUc7QUFDekIsVUFBTUksU0FBUyxHQUFHTixNQUFNLENBQUNqQixLQUFQLEVBQWxCO0FBQ0F1QixlQUFTLENBQUN4QyxRQUFWLENBQW1Cb0MsQ0FBbkI7QUFDQSxhQUFPSSxTQUFQO0FBQ0Q7OzsyQkFFYU4sTSxFQUFRRSxDLEVBQUc7QUFDdkIsVUFBTUksU0FBUyxHQUFHTixNQUFNLENBQUNqQixLQUFQLEVBQWxCO0FBQ0F1QixlQUFTLENBQUNQLE1BQVYsQ0FBaUJHLENBQWpCO0FBQ0EsYUFBT0ksU0FBUDtBQUNEOzs7OEJBRWdCQyxJLEVBQU07QUFDckIsYUFBT25LLElBQUksQ0FBQ29LLEtBQUwsQ0FBV0QsSUFBSSxHQUFHLEdBQWxCLElBQXlCLEdBQWhDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaENILHFEIiwiZmlsZSI6InBvdGF0by1wYXJ0aWNsZXMudW1kLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwicGl4aS5qc1wiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIlBvdGF0b1BhcnRpY2xlc1wiLCBbXCJwaXhpLmpzXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIlBvdGF0b1BhcnRpY2xlc1wiXSA9IGZhY3RvcnkocmVxdWlyZShcInBpeGkuanNcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIlBvdGF0b1BhcnRpY2xlc1wiXSA9IGZhY3Rvcnkocm9vdFtcInBpeGkuanNcIl0pO1xufSkod2luZG93LCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3BpeGlfanNfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2pzL2luZGV4LmpzXCIpO1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW1hZ2VIZWxwZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmlzSW1hZ2VMb2FkZWQgPSBmYWxzZTtcblxuICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICB9XG5cbiAgbG9hZChzcmMpIHtcbiAgICB0aGlzLmlzSW1hZ2VMb2FkZWQgPSBmYWxzZTtcblxuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgIGNvbnN0IHRtcEltYWdlRWwgPSBuZXcgSW1hZ2UoKTtcbiAgICAgIHRtcEltYWdlRWwub25sb2FkID0gKGUpID0+IHtcbiAgICAgICAgY29uc3QgaW1hZ2VFbCA9IGUudGFyZ2V0O1xuICAgICAgICB0aGlzLm9uSW1hZ2VMb2FkZWQoaW1hZ2VFbCk7XG4gICAgICAgIHJlc29sdmUoaW1hZ2VFbCk7XG4gICAgICB9O1xuICAgICAgdG1wSW1hZ2VFbC5zcmMgPSBzcmM7XG4gICAgfSk7XG4gIH1cblxuICBvbkltYWdlTG9hZGVkKGltYWdlKSB7XG4gICAgdGhpcy5pbWFnZSA9IGltYWdlO1xuICAgIHRoaXMud2lkdGggPSB0aGlzLmltYWdlLndpZHRoO1xuICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5pbWFnZS5oZWlnaHQ7XG5cbiAgICB0aGlzLmlzSW1hZ2VMb2FkZWQgPSB0cnVlO1xuICB9XG5cbiAgY2hlY2tJbWFnZSgpIHtcbiAgICBpZiAodGhpcy5pc0ltYWdlTG9hZGVkKSByZXR1cm4gdHJ1ZTtcblxuICAgIC8vIGNvbnNvbGUud2FybignSW1hZ2UgaXMgbm90IGxvYWRlZCB5ZXQnKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpbWFnZVRvRG90cyhwcm9wcykge1xuICAgIGlmICghdGhpcy5jaGVja0ltYWdlKCkpIHJldHVybiBudWxsO1xuXG4gICAgY29uc3QgaW1hZ2UgPSB0aGlzLmltYWdlO1xuICAgIGNvbnN0IHtcbiAgICAgIHdpZHRoID0gaW1hZ2Uud2lkdGgsXG4gICAgICBoZWlnaHQgPSBpbWFnZS5oZWlnaHQsXG4gICAgICBwaXhlbFNpemUgPSAxLFxuICAgICAgcGl4ZWxGaWx0ZXIgPSBwaXhlbCA9PiAocGl4ZWwuYSA+PSAwLjQpLFxuICAgICAgcGl4ZWxNYXAgPSBwaXhlbCA9PiAocGl4ZWwpLFxuICAgIH0gPSBwcm9wcztcblxuICAgIGNvbnN0IGNhbnZhc1dpZHRoID0gTWF0aC5jZWlsKHdpZHRoIC8gcGl4ZWxTaXplKTtcbiAgICBjb25zdCBjYW52YXNIZWlnaHQgPSBNYXRoLmNlaWwoaGVpZ2h0IC8gcGl4ZWxTaXplKTtcblxuICAgIHRoaXMuY2FudmFzLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCBjYW52YXNXaWR0aCk7XG4gICAgdGhpcy5jYW52YXMuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCBjYW52YXNIZWlnaHQpO1xuXG4gICAgcmV0dXJuIHRoaXMuaW1hZ2VUb0RhdGEoaW1hZ2UsIHtcbiAgICAgIGNhbnZhc1dpZHRoLCBjYW52YXNIZWlnaHQsIHBpeGVsU2l6ZSwgcGl4ZWxGaWx0ZXIsIHBpeGVsTWFwLFxuICAgIH0pO1xuICB9XG5cbiAgaW1hZ2VUb0RhdGEoaW1hZ2UsIHByb3BzKSB7XG4gICAgY29uc3Qge1xuICAgICAgY2FudmFzV2lkdGgsXG4gICAgICBjYW52YXNIZWlnaHQsXG4gICAgICBwaXhlbFNpemUsXG4gICAgICBwaXhlbEZpbHRlcixcbiAgICAgIHBpeGVsTWFwLFxuICAgIH0gPSBwcm9wcztcblxuICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXNXaWR0aCwgY2FudmFzSGVpZ2h0KTtcbiAgICB0aGlzLmRyYXdJbWFnZUNvdmVyKGltYWdlLCBjYW52YXNXaWR0aCwgY2FudmFzSGVpZ2h0KTtcblxuICAgIGNvbnN0IGltYWdlRGF0YSA9IHRoaXMuY3R4LmdldEltYWdlRGF0YSgwLCAwLCBjYW52YXNXaWR0aCwgY2FudmFzSGVpZ2h0KS5kYXRhO1xuXG4gICAgY29uc3QgZGF0YSA9IFtdO1xuICAgIGZvciAobGV0IHkgPSAwOyB5IDwgY2FudmFzSGVpZ2h0OyB5KyspIHtcbiAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgY2FudmFzV2lkdGg7IHgrKykge1xuICAgICAgICBjb25zdCBpbmRleCA9ICh5ICogY2FudmFzV2lkdGggKyB4KSAqIDQ7XG5cbiAgICAgICAgY29uc3QgcGl4ZWwgPSB7XG4gICAgICAgICAgeDogeCAqIHBpeGVsU2l6ZSxcbiAgICAgICAgICB5OiB5ICogcGl4ZWxTaXplLFxuICAgICAgICAgIHI6IChpbWFnZURhdGFbaW5kZXggKyAwXSAvIDI1NSksXG4gICAgICAgICAgZzogKGltYWdlRGF0YVtpbmRleCArIDFdIC8gMjU1KSxcbiAgICAgICAgICBiOiAoaW1hZ2VEYXRhW2luZGV4ICsgMl0gLyAyNTUpLFxuICAgICAgICAgIGE6IChpbWFnZURhdGFbaW5kZXggKyAzXSAvIDI1NSksXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKCFwaXhlbEZpbHRlcihwaXhlbCkpIGNvbnRpbnVlO1xuXG4gICAgICAgIE9iamVjdC5hc3NpZ24ocGl4ZWwsIHBpeGVsTWFwKHBpeGVsKSk7XG5cbiAgICAgICAgZGF0YS5wdXNoKHBpeGVsKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIGRyYXdJbWFnZUNvdmVyKGltZywgd2lkdGgsIGhlaWdodCkge1xuICAgIGNvbnN0IHNjYWxlID0gTWF0aC5taW4od2lkdGggLyBpbWcud2lkdGgsIGhlaWdodCAvIGltZy5oZWlnaHQpO1xuICAgIGNvbnN0IHNpemUgPSB7XG4gICAgICB3aWR0aDogaW1nLndpZHRoICogc2NhbGUsXG4gICAgICBoZWlnaHQ6IGltZy5oZWlnaHQgKiBzY2FsZSxcbiAgICB9O1xuICAgIGNvbnN0IHBvcyA9IHtcbiAgICAgIHg6ICh3aWR0aCAtIHNpemUud2lkdGgpIC8gMixcbiAgICAgIHk6IChoZWlnaHQgLSBzaXplLmhlaWdodCkgLyAyLFxuICAgIH07XG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKGltZywgMCwgMCwgaW1nLndpZHRoLCBpbWcuaGVpZ2h0LCBwb3MueCwgcG9zLnksIHNpemUud2lkdGgsIHNpemUuaGVpZ2h0KTtcbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgUElYSSBmcm9tICdwaXhpLmpzJztcblxuaW1wb3J0IEltYWdlSGVscGVyIGZyb20gJy4vaW1hZ2VIZWxwZXIuanMnO1xuaW1wb3J0IFZlY3RvciBmcm9tICcuL3ZlY3Rvci5qcyc7XG5pbXBvcnQgUGFydGljbGUgZnJvbSAnLi9wYXJ0aWNsZS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvdGF0b1BhcnRpY2xlcyB7XG4gIGNvbnN0cnVjdG9yKHtcbiAgICBpbWFnZUVsLFxuICAgIHBpeGVsU2l6ZSA9IDEwLFxuICAgIHBhcnRpY2xlU2l6ZSA9IDYsXG4gICAgcmVzaXN0YW5jZSA9IC0wLjcsXG4gICAgbWluTWFzcyA9IDQsXG4gICAgbWFzc1JhbmQgPSAyLFxuICAgIGRlbGF5UmFuZCA9IDAuNCxcbiAgICBwaXhlbEZpbHRlcixcbiAgICBwaXhlbE1hcCxcbiAgICBwYXJ0aWNsZUluaXQsXG4gICAgbW91c2VJbnRlcmFjdGlvbiA9IHRydWUsXG4gIH0pIHtcbiAgICB0aGlzLmltYWdlRWwgPSBpbWFnZUVsO1xuXG4gICAgdGhpcy5waXhlbFNpemUgPSBwaXhlbFNpemU7XG4gICAgdGhpcy5wYXJ0aWNsZVNpemUgPSBwYXJ0aWNsZVNpemU7XG4gICAgdGhpcy5yZXNpc3RhbmNlID0gcmVzaXN0YW5jZTtcbiAgICB0aGlzLm1pbk1hc3MgPSBtaW5NYXNzO1xuICAgIHRoaXMubWFzc1JhbmQgPSBtYXNzUmFuZDtcbiAgICB0aGlzLmRlbGF5UmFuZCA9IGRlbGF5UmFuZDtcbiAgICB0aGlzLnBpeGVsRmlsdGVyID0gcGl4ZWxGaWx0ZXI7XG4gICAgdGhpcy5waXhlbE1hcCA9IHBpeGVsTWFwO1xuICAgIHRoaXMucGFydGljbGVJbml0ID0gcGFydGljbGVJbml0O1xuICAgIHRoaXMubW91c2VJbnRlcmFjdGlvbiA9IG1vdXNlSW50ZXJhY3Rpb247XG5cbiAgICBjb25zdCBpbWFnZVByb21pc2VzID0gW107XG5cbiAgICB0aGlzLmltYWdlSGVscGVyID0gbmV3IEltYWdlSGVscGVyKCk7XG4gICAgaW1hZ2VQcm9taXNlcy5wdXNoKHRoaXMuaW1hZ2VIZWxwZXIubG9hZChpbWFnZUVsLnNyYykpO1xuXG4gICAgUHJvbWlzZS5hbGwoaW1hZ2VQcm9taXNlcykudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLm9uTG9nb0xvYWRlZCgpO1xuICAgIH0pO1xuICB9XG5cbiAgb25Mb2dvTG9hZGVkKCkge1xuICAgIHRoaXMud2lkdGggPSB0aGlzLmltYWdlRWwubmF0dXJhbFdpZHRoIHx8IHRoaXMuaW1hZ2VFbC53aWR0aDtcbiAgICB0aGlzLmhlaWdodCA9IHRoaXMuaW1hZ2VFbC5uYXR1cmFsSGVpZ2h0IHx8IHRoaXMuaW1hZ2VFbC5oZWlnaHQ7XG5cbiAgICB0aGlzLnBhcnRpY2xlc0RhdGEgPSB0aGlzLmltYWdlSGVscGVyLmltYWdlVG9Eb3RzKHtcbiAgICAgIHdpZHRoOiB0aGlzLndpZHRoLFxuICAgICAgaGVpZ2h0OiB0aGlzLmhlaWdodCxcbiAgICAgIHBpeGVsU2l6ZTogdGhpcy5waXhlbFNpemUsXG4gICAgICBwaXhlbEZpbHRlcjogdGhpcy5waXhlbEZpbHRlcixcbiAgICAgIHBpeGVsTWFwOiB0aGlzLnBpeGVsTWFwLFxuICAgIH0pO1xuXG4gICAgdGhpcy5tb3VzZVZlY3RvciA9IG5ldyBWZWN0b3IoMCwgMCk7XG5cbiAgICB0aGlzLmluaXRSZW5kZXJlcigpO1xuICAgIHRoaXMuaW5pdFBhcnRpY2xlcygpO1xuICAgIHRoaXMucmVuZGVyZXIucmVuZGVyKHRoaXMuc3RhZ2UpO1xuICAgIHRoaXMuc3RhcnRMb29wKCk7XG5cbiAgICB0aGlzLmNhbGN1bGF0ZVNjYWxlKCk7XG4gICAgdGhpcy5iaW5kRXZlbnRzKCk7XG5cbiAgICB0aGlzLnNldFBhcnRpY2xlc1RhcmdldHMoKTtcbiAgfVxuXG4gIGluaXRSZW5kZXJlcigpIHtcbiAgICBQSVhJLnV0aWxzLnNraXBIZWxsbygpO1xuICAgIHRoaXMucmVuZGVyZXIgPSBuZXcgUElYSS5SZW5kZXJlcih7XG4gICAgICB3aWR0aDogdGhpcy53aWR0aCxcbiAgICAgIGhlaWdodDogdGhpcy5oZWlnaHQsXG4gICAgICB0cmFuc3BhcmVudDogdHJ1ZSxcbiAgICB9KTtcbiAgICB0aGlzLnJlbmRlcmVyLmNvbnRleHQubW96SW1hZ2VTbW9vdGhpbmdFbmFibGVkID0gZmFsc2U7XG4gICAgdGhpcy5yZW5kZXJlci5jb250ZXh0LndlYmtpdEltYWdlU21vb3RoaW5nRW5hYmxlZCA9IGZhbHNlO1xuXG4gICAgdGhpcy5jYW52YXNFbCA9IHRoaXMucmVuZGVyZXIudmlldztcblxuICAgIHRoaXMuaW1hZ2VFbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIHRoaXMuaW1hZ2VFbC5wYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuY2FudmFzRWwpO1xuXG4gICAgdGhpcy5zdGFnZSA9IG5ldyBQSVhJLkNvbnRhaW5lcigpO1xuXG4gICAgdGhpcy5wYXJ0aWNsZUNvbnRhaW5lciA9IG5ldyBQSVhJLkNvbnRhaW5lcigpO1xuICAgIHRoaXMuc3RhZ2UuYWRkQ2hpbGQodGhpcy5wYXJ0aWNsZUNvbnRhaW5lcik7XG5cbiAgICB0aGlzLnRpY2sgPSB0aGlzLnRpY2suYmluZCh0aGlzKTtcbiAgICB0aGlzLnRpY2tlciA9IG5ldyBQSVhJLlRpY2tlcigpO1xuICAgIHRoaXMudGlja2VyLmFkZCh0aGlzLnRpY2spO1xuICB9XG5cbiAgaW5pdFBhcnRpY2xlcygpIHtcbiAgICB0aGlzLnBhcnRpY2xlcyA9IFtdO1xuXG4gICAgY29uc3QgcGFydGljbGVzQ291bnQgPSB0aGlzLnBhcnRpY2xlc0RhdGEubGVuZ3RoO1xuICAgIGNvbnN0IHNoYXJlZCA9IHRoaXMuZ2V0U2hhcmVkKCk7XG5cbiAgICBjb25zdCBwYXJ0aWNsZUluaXQgPSB0aGlzLnBhcnRpY2xlSW5pdCB8fCAoKCkgPT4gKHt9KSk7XG5cbiAgICBjb25zdCB0ZXh0dXJlID0gdGhpcy5jcmVhdGVDaXJjbGVUZXh0dXJlKHNoYXJlZC5wYXJ0aWNsZVNpemUgLyAyLCAweGZmZmZmZiwgMSk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcnRpY2xlc0NvdW50OyBpKyspIHtcbiAgICAgIGNvbnN0IHBhcnRpY2xlID0gdGhpcy5wYXJ0aWNsZXNEYXRhW2ldO1xuXG4gICAgICBjb25zdCBjb2xvciA9IFBJWEkudXRpbHMucmdiMmhleChbcGFydGljbGUuciwgcGFydGljbGUuZywgcGFydGljbGUuYl0pO1xuXG4gICAgICB0aGlzLnBhcnRpY2xlcy5wdXNoKG5ldyBQYXJ0aWNsZSh0aGlzLnBhcnRpY2xlQ29udGFpbmVyLCBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgeDogc2hhcmVkLmF2Z1gsXG4gICAgICAgIHk6IHNoYXJlZC5hdmdZLFxuICAgICAgICBtYXNzOiBNYXRoLnJhbmRvbSgpICogc2hhcmVkLm1hc3NSYW5kICsgc2hhcmVkLm1pbk1hc3MsXG4gICAgICAgIHRleHR1cmUsXG4gICAgICAgIGNvbG9yLFxuICAgICAgICBhbHBoYTogcGFydGljbGUuYSxcbiAgICAgICAgZGVsYXk6IChcbiAgICAgICAgICAoKHNoYXJlZC5yYW5nZVkgLSAocGFydGljbGUueSAtIHNoYXJlZC5taW5ZKSkgKiAoMiAvIHNoYXJlZC5yYW5nZVkpKVxuICAgICAgICAgICsgKE1hdGgucmFuZG9tKCkgKiBzaGFyZWQuZGVsYXlSYW5kKVxuICAgICAgICApLFxuICAgICAgfSwgcGFydGljbGVJbml0KHBhcnRpY2xlLCBzaGFyZWQpKSkpO1xuICAgIH1cbiAgfVxuXG4gIGdldFNoYXJlZCgpIHtcbiAgICBjb25zdCBwYXJ0aWNsZXNDb3VudCA9IHRoaXMucGFydGljbGVzRGF0YS5sZW5ndGg7XG4gICAgY29uc3QgcGFydGljbGVTaXplID0gdGhpcy5wYXJ0aWNsZVNpemU7XG4gICAgY29uc3QgbWluTWFzcyA9IHRoaXMubWluTWFzcztcbiAgICBjb25zdCBtYXNzUmFuZCA9IHRoaXMubWFzc1JhbmQ7XG4gICAgY29uc3QgZGVsYXlSYW5kID0gdGhpcy5kZWxheVJhbmQ7XG5cbiAgICBsZXQgc3VtWCA9IDA7XG4gICAgbGV0IHN1bVkgPSAwO1xuXG4gICAgbGV0IG1pblggPSB0aGlzLnBhcnRpY2xlc0RhdGFbMF0ueDtcbiAgICBsZXQgbWF4WCA9IDA7XG5cbiAgICBsZXQgbWluWSA9IHRoaXMucGFydGljbGVzRGF0YVswXS55O1xuICAgIGxldCBtYXhZID0gMDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFydGljbGVzQ291bnQ7IGkrKykge1xuICAgICAgY29uc3QgcGFydGljbGVEYXRhID0gdGhpcy5wYXJ0aWNsZXNEYXRhW2ldO1xuXG4gICAgICBzdW1YICs9IHBhcnRpY2xlRGF0YS54O1xuICAgICAgc3VtWSArPSBwYXJ0aWNsZURhdGEueTtcblxuICAgICAgaWYgKHBhcnRpY2xlRGF0YS54IDwgbWluWCkgbWluWCA9IHBhcnRpY2xlRGF0YS54O1xuICAgICAgaWYgKHBhcnRpY2xlRGF0YS54ID4gbWF4WCkgbWF4WCA9IHBhcnRpY2xlRGF0YS54O1xuXG4gICAgICBpZiAocGFydGljbGVEYXRhLnkgPCBtaW5ZKSBtaW5ZID0gcGFydGljbGVEYXRhLnk7XG4gICAgICBpZiAocGFydGljbGVEYXRhLnkgPiBtYXhZKSBtYXhZID0gcGFydGljbGVEYXRhLnk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHdpZHRoOiB0aGlzLndpZHRoLFxuICAgICAgaGVpZ2h0OiB0aGlzLmhlaWdodCxcbiAgICAgIGhhbGZXaWR0aDogdGhpcy53aWR0aCAvIDIsXG4gICAgICBoYWxmSGVpZ2h0OiB0aGlzLmhlaWdodCAvIDIsXG4gICAgICBwYXJ0aWNsZXNDb3VudCxcbiAgICAgIHBhcnRpY2xlU2l6ZSxcbiAgICAgIG1pbk1hc3MsXG4gICAgICBtYXNzUmFuZCxcbiAgICAgIGRlbGF5UmFuZCxcbiAgICAgIG1pblgsXG4gICAgICBtaW5ZLFxuICAgICAgbWF4WCxcbiAgICAgIG1heFksXG4gICAgICBzdW1YLFxuICAgICAgc3VtWSxcbiAgICAgIGF2Z1g6IChzdW1YIC8gcGFydGljbGVzQ291bnQpLFxuICAgICAgYXZnWTogKHN1bVkgLyBwYXJ0aWNsZXNDb3VudCksXG4gICAgICByYW5nZVg6IChtYXhYIC0gbWluWCksXG4gICAgICByYW5nZVk6IChtYXhZIC0gbWluWSksXG4gICAgfTtcbiAgfVxuXG4gIGNyZWF0ZUNpcmNsZVRleHR1cmUocmFkaXVzLCBjb2xvciwgYWxwaGEpIHtcbiAgICBjb25zdCBncmFwaGljcyA9IG5ldyBQSVhJLkdyYXBoaWNzKCk7XG4gICAgZ3JhcGhpY3MuYmVnaW5GaWxsKGNvbG9yLCBhbHBoYSk7XG4gICAgZ3JhcGhpY3MuZHJhd0NpcmNsZSgwLCAwLCByYWRpdXMpO1xuICAgIGdyYXBoaWNzLmVuZEZpbGwoKTtcbiAgICBjb25zdCB0ZXh0dXJlID0gdGhpcy5yZW5kZXJlci5nZW5lcmF0ZVRleHR1cmUoZ3JhcGhpY3MpO1xuICAgIGdyYXBoaWNzLmNsZWFyKCk7XG4gICAgZ3JhcGhpY3MuZGVzdHJveSgpO1xuICAgIHJldHVybiB0ZXh0dXJlO1xuICB9XG5cbiAgY2FsY3VsYXRlU2NhbGUoKSB7XG4gICAgY29uc3QgY2FudmFzUmVjdCA9IHRoaXMuY2FudmFzRWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgdGhpcy5zY2FsZSA9IHRoaXMud2lkdGggLyBjYW52YXNSZWN0LndpZHRoO1xuICB9XG5cbiAgc2V0UGFydGljbGVzVGFyZ2V0cygpIHtcbiAgICBjb25zdCBsID0gdGhpcy5wYXJ0aWNsZXNEYXRhLmxlbmd0aDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGw7IGkrKykge1xuICAgICAgY29uc3QgcGFydGljbGVEYXRhID0gdGhpcy5wYXJ0aWNsZXNEYXRhW2ldO1xuICAgICAgdGhpcy5wYXJ0aWNsZXNbaV0uc2V0VGFyZ2V0KG5ldyBWZWN0b3IocGFydGljbGVEYXRhLngsIHBhcnRpY2xlRGF0YS55KSk7XG4gICAgfVxuICB9XG5cbiAgYmluZEV2ZW50cygpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5vblJlc2l6ZS5iaW5kKHRoaXMpKTtcbiAgICBpZiAodGhpcy5tb3VzZUludGVyYWN0aW9uKSB7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5vbk1vdXNlTW92ZS5iaW5kKHRoaXMpKTtcbiAgICB9XG4gIH1cblxuICBvblJlc2l6ZSgpIHtcbiAgICB0aGlzLmNhbGN1bGF0ZVNjYWxlKCk7XG4gIH1cblxuICBvbk1vdXNlTW92ZShlKSB7XG4gICAgY29uc3QgY2FudmFzUmVjdCA9IHRoaXMuY2FudmFzRWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgdGhpcy5tb3VzZVZlY3Rvci5zZXQoZS5jbGllbnRYIC0gY2FudmFzUmVjdC5sZWZ0LCBlLmNsaWVudFkgLSBjYW52YXNSZWN0LnRvcCk7XG4gICAgdGhpcy5tb3VzZVZlY3Rvci5tdWx0aXBseSh0aGlzLnNjYWxlKTtcbiAgfVxuXG4gIHN0YXJ0TG9vcCgpIHtcbiAgICB0aGlzLnRpY2tlci5zdGFydCgpO1xuICB9XG5cbiAgc3RvcExvb3AoKSB7XG4gICAgdGhpcy50aWNrZXIuc3RvcCgpO1xuICB9XG5cbiAgdGljayhkZWx0YSkge1xuICAgIHRoaXMudXBkYXRlKGRlbHRhKTtcbiAgICB0aGlzLnJlbmRlcigxKTtcbiAgfVxuXG4gIHVwZGF0ZShkZWx0YSkge1xuICAgIGNvbnN0IGwgPSB0aGlzLnBhcnRpY2xlcy5sZW5ndGg7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsOyBpKyspIHtcbiAgICAgIGNvbnN0IHBhcnRpY2xlID0gdGhpcy5wYXJ0aWNsZXNbaV07XG4gICAgICBwYXJ0aWNsZS5hZGRGb3JjZShwYXJ0aWNsZS5nZXRGb3JjZVRvVGFyZ2V0KCkpO1xuICAgICAgaWYgKHRoaXMubW91c2VJbnRlcmFjdGlvbikge1xuICAgICAgICBwYXJ0aWNsZS5hZGRGb3JjZShwYXJ0aWNsZS5nZXRNb3VzZUZvcmNlKHRoaXMubW91c2VWZWN0b3IpKTtcbiAgICAgIH1cbiAgICAgIHBhcnRpY2xlLmFkZEZvcmNlKFZlY3Rvci5tdWx0aXBseShwYXJ0aWNsZS52ZWxvY2l0eSwgdGhpcy5yZXNpc3RhbmNlKSk7XG4gICAgICBwYXJ0aWNsZS51cGRhdGUoZGVsdGEpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcihpbnRlcnApIHtcbiAgICBjb25zdCBsID0gdGhpcy5wYXJ0aWNsZXMubGVuZ3RoO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbDsgaSsrKSB7XG4gICAgICB0aGlzLnBhcnRpY2xlc1tpXS5yZW5kZXIoaW50ZXJwKTtcbiAgICB9XG5cbiAgICB0aGlzLnJlbmRlcmVyLnJlbmRlcih0aGlzLnN0YWdlKTtcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMudGlja2VyKSB7XG4gICAgICB0aGlzLnN0b3BMb29wKCk7XG4gICAgICB0aGlzLnRpY2tlci5yZW1vdmUodGhpcy50aWNrKTtcbiAgICAgIHRoaXMudGlja2VyLmRlc3Ryb3koKTtcbiAgICB9XG5cbiAgICBjb25zdCBsID0gdGhpcy5wYXJ0aWNsZXMubGVuZ3RoO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbDsgaSsrKSB7XG4gICAgICB0aGlzLnBhcnRpY2xlc1tpXS5kZXN0cm95KCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc3RhZ2UpIHtcbiAgICAgIHRoaXMuc3RhZ2UuZGVzdHJveSh7IGNoaWxkcmVuOiB0cnVlLCB0ZXh0dXJlOiB0cnVlIH0pO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnJlbmRlcmVyKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmRlc3Ryb3koKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCAqIGFzIFBJWEkgZnJvbSAncGl4aS5qcyc7XG5cbmltcG9ydCBWZWN0b3IgZnJvbSAnLi92ZWN0b3InO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXJ0aWNsZSB7XG4gIGNvbnN0cnVjdG9yKGNvbnRhaW5lciwge1xuICAgIHgsIHksIG1hc3MgPSAxLCB0ZXh0dXJlLCBjb2xvciwgYWxwaGEsIGRlbGF5LFxuICB9KSB7XG4gICAgdGhpcy5wb3NpdGlvbiA9IG5ldyBWZWN0b3IoeCwgeSk7XG4gICAgdGhpcy52ZWxvY2l0eSA9IG5ldyBWZWN0b3IoMCwgMCk7XG4gICAgdGhpcy5hY2NlbGVyYXRpb24gPSBuZXcgVmVjdG9yKDAsIDApO1xuICAgIHRoaXMuZm9yY2UgPSBuZXcgVmVjdG9yKDAsIDApO1xuICAgIHRoaXMubWFzcyA9IG1hc3M7XG4gICAgdGhpcy50YXJnZXQgPSB0aGlzLnBvc2l0aW9uLmNsb25lKCk7XG5cbiAgICB0aGlzLndhaXRGcmFtZXMgPSBkZWxheSAqIDYwOyAvLyAqIEZQU1xuICAgIHRoaXMud2FpdGluZyA9IHRoaXMud2FpdEZyYW1lcyA+IDA7XG5cbiAgICBpZiAoIWNvbnRhaW5lcikgcmV0dXJuO1xuXG4gICAgdGhpcy5zcHJpdGUgPSB0aGlzLmNyZWF0ZVNwcml0ZSh7IHRleHR1cmUsIGNvbG9yLCBhbHBoYSB9KTtcbiAgICBjb250YWluZXIuYWRkQ2hpbGQodGhpcy5zcHJpdGUpO1xuICB9XG5cbiAgY3JlYXRlU3ByaXRlKHsgdGV4dHVyZSwgY29sb3IsIGFscGhhIH0pIHtcbiAgICBjb25zdCBzcHJpdGUgPSBuZXcgUElYSS5TcHJpdGUodGV4dHVyZSk7XG4gICAgc3ByaXRlLnRpbnQgPSBjb2xvcjtcbiAgICBzcHJpdGUuYWxwaGEgPSBhbHBoYTtcbiAgICBzcHJpdGUuYW5jaG9yLnNldCgwLjUpO1xuICAgIHNwcml0ZS5wb3NpdGlvbi5zZXQodGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnkpO1xuXG4gICAgcmV0dXJuIHNwcml0ZTtcbiAgfVxuXG4gIGFkZEZvcmNlKGZvcmNlKSB7XG4gICAgaWYgKCFmb3JjZSkgcmV0dXJuO1xuICAgIHRoaXMuZm9yY2UuYWRkKGZvcmNlKTtcbiAgfVxuXG4gIHNldFRhcmdldCh0YXJnZXQpIHtcbiAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcbiAgfVxuXG4gIGdldEZvcmNlVG9UYXJnZXQoKSB7XG4gICAgaWYgKCF0aGlzLnRhcmdldCkgcmV0dXJuIG51bGw7XG5cbiAgICBjb25zdCBmb3JjZSA9IFZlY3Rvci5zdWJ0cmFjdCh0aGlzLnRhcmdldCwgdGhpcy5wb3NpdGlvbik7XG4gICAgZm9yY2UubXVsdGlwbHkoMC4wNCk7XG5cbiAgICByZXR1cm4gZm9yY2U7XG4gIH1cblxuICBnZXRNb3VzZUZvcmNlKG1vdXNlUG9zKSB7XG4gICAgY29uc3QgZm9yY2UgPSBWZWN0b3Iuc3VidHJhY3QobW91c2VQb3MsIHRoaXMucG9zaXRpb24pO1xuICAgIGNvbnN0IGRpc3RhbmNlID0gZm9yY2UudmFsdWUoKTtcbiAgICBmb3JjZS5ub3JtYWxpemUoKTtcbiAgICBjb25zdCBpbnZEaXN0ID0gKDEyMCAvIGRpc3RhbmNlKTtcbiAgICBjb25zdCBxdWFkRGlzdCA9IChpbnZEaXN0ICogaW52RGlzdCk7XG4gICAgY29uc3QgbGVzc1F1YWREaXN0ID0gcXVhZERpc3QgLSAwLjA0O1xuICAgIGNvbnN0IG11bHQgPSBsZXNzUXVhZERpc3QgPCAwID8gMCA6IGxlc3NRdWFkRGlzdCAqIDAuODtcbiAgICBmb3JjZS5tdWx0aXBseSgtbXVsdCk7XG5cbiAgICByZXR1cm4gZm9yY2U7XG4gIH1cblxuICB1cGRhdGUoZGVsdGEpIHtcbiAgICBpZiAodGhpcy53YWl0aW5nKSB7XG4gICAgICB0aGlzLndhaXRGcmFtZXMgLT0gZGVsdGE7XG4gICAgICBpZiAodGhpcy53YWl0RnJhbWVzID4gMCkgcmV0dXJuO1xuXG4gICAgICB0aGlzLndhaXRGcmFtZXMgPSAwO1xuICAgICAgdGhpcy53YWl0aW5nID0gZmFsc2U7XG4gICAgICB0aGlzLmZvcmNlLnNldCgwLCAwKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmFjY2VsZXJhdGlvbi5zZXQodGhpcy5mb3JjZS54LCB0aGlzLmZvcmNlLnkpO1xuICAgIHRoaXMuYWNjZWxlcmF0aW9uLmRpdmlkZSh0aGlzLm1hc3MpO1xuICAgIHRoaXMudmVsb2NpdHkuYWRkKHRoaXMuYWNjZWxlcmF0aW9uKTtcbiAgICB0aGlzLnBvc2l0aW9uLmFkZCh0aGlzLnZlbG9jaXR5KTtcbiAgICB0aGlzLmZvcmNlLnNldCgwLCAwKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBpZiAoIXRoaXMuc3ByaXRlKSByZXR1cm47XG4gICAgdGhpcy5zcHJpdGUucG9zaXRpb24uc2V0KHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55KTtcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5zcHJpdGUuZGVzdHJveSh7IHRleHR1cmU6IHRydWUgfSk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFZlY3RvciB7XG4gIGNvbnN0cnVjdG9yKHgsIHkpIHtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gIH1cblxuICBzdGF0aWMgYWRkKHZlY3RvckEsIHZlY3RvckIpIHtcbiAgICBjb25zdCB2ZWN0b3JPdXQgPSB2ZWN0b3JBLmNsb25lKCk7XG4gICAgdmVjdG9yT3V0LmFkZCh2ZWN0b3JCKTtcbiAgICByZXR1cm4gdmVjdG9yT3V0O1xuICB9XG5cbiAgc3RhdGljIHN1YnRyYWN0KHZlY3RvckEsIHZlY3RvckIpIHtcbiAgICBjb25zdCB2ZWN0b3JPdXQgPSB2ZWN0b3JBLmNsb25lKCk7XG4gICAgdmVjdG9yT3V0LnN1YnRyYWN0KHZlY3RvckIpO1xuICAgIHJldHVybiB2ZWN0b3JPdXQ7XG4gIH1cblxuICBzdGF0aWMgbXVsdGlwbHkodmVjdG9yLCBuKSB7XG4gICAgY29uc3QgdmVjdG9yT3V0ID0gdmVjdG9yLmNsb25lKCk7XG4gICAgdmVjdG9yT3V0Lm11bHRpcGx5KG4pO1xuICAgIHJldHVybiB2ZWN0b3JPdXQ7XG4gIH1cblxuICBzdGF0aWMgZGl2aWRlKHZlY3Rvciwgbikge1xuICAgIGNvbnN0IHZlY3Rvck91dCA9IHZlY3Rvci5jbG9uZSgpO1xuICAgIHZlY3Rvck91dC5kaXZpZGUobik7XG4gICAgcmV0dXJuIHZlY3Rvck91dDtcbiAgfVxuXG4gIHN0YXRpYyByb3VuZEF4aXMoYXhpcykge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKGF4aXMgKiAxZTUpIC8gMWU1O1xuICB9XG5cbiAgc2V0KHgsIHkpIHtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gIH1cblxuICBzZXRYKHgpIHtcbiAgICB0aGlzLnggPSB4O1xuICB9XG5cbiAgc2V0WSh5KSB7XG4gICAgdGhpcy55ID0geTtcbiAgfVxuXG4gIGFkZCh2ZWN0b3IpIHtcbiAgICB0aGlzLnggPSBWZWN0b3Iucm91bmRBeGlzKHRoaXMueCArIHZlY3Rvci54KTtcbiAgICB0aGlzLnkgPSBWZWN0b3Iucm91bmRBeGlzKHRoaXMueSArIHZlY3Rvci55KTtcbiAgfVxuXG4gIHN1YnRyYWN0KHZlY3Rvcikge1xuICAgIHRoaXMueCA9IFZlY3Rvci5yb3VuZEF4aXModGhpcy54IC0gdmVjdG9yLngpO1xuICAgIHRoaXMueSA9IFZlY3Rvci5yb3VuZEF4aXModGhpcy55IC0gdmVjdG9yLnkpO1xuICB9XG5cbiAgbXVsdGlwbHkobikge1xuICAgIHRoaXMueCA9IFZlY3Rvci5yb3VuZEF4aXModGhpcy54ICogbik7XG4gICAgdGhpcy55ID0gVmVjdG9yLnJvdW5kQXhpcyh0aGlzLnkgKiBuKTtcbiAgfVxuXG4gIGRpdmlkZShuKSB7XG4gICAgdGhpcy54ID0gVmVjdG9yLnJvdW5kQXhpcyh0aGlzLnggLyBuKTtcbiAgICB0aGlzLnkgPSBWZWN0b3Iucm91bmRBeGlzKHRoaXMueSAvIG4pO1xuICB9XG5cbiAgdmFsdWUoKSB7XG4gICAgcmV0dXJuIE1hdGguc3FydCgodGhpcy54ICoqIDIpICsgKHRoaXMueSAqKiAyKSk7XG4gIH1cblxuICBub3JtYWxpemUoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLnZhbHVlKCk7XG5cbiAgICBpZiAodmFsdWUgIT09IDApIHtcbiAgICAgIHRoaXMueCAvPSB2YWx1ZTtcbiAgICAgIHRoaXMueSAvPSB2YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy54ID0gMDtcbiAgICAgIHRoaXMueSA9IDA7XG4gICAgfVxuICB9XG5cbiAgY2xvbmUoKSB7XG4gICAgcmV0dXJuIG5ldyBWZWN0b3IodGhpcy54LCB0aGlzLnkpO1xuICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcGl4aV9qc19fOyJdLCJzb3VyY2VSb290IjoiIn0=