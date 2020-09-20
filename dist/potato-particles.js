window["PotatoParticles"] =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/build.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/build.js":
/*!*************************!*\
  !*** ./src/js/build.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/js/index.js");
// import '../scss/index.scss';

/* harmony default export */ __webpack_exports__["default"] = (_index_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

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
/*!***********************!*\
  !*** external "PIXI" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["PIXI"]; }());

/***/ })

/******/ })["default"];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Qb3RhdG9QYXJ0aWNsZXMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vUG90YXRvUGFydGljbGVzLy4vc3JjL2pzL2J1aWxkLmpzIiwid2VicGFjazovL1BvdGF0b1BhcnRpY2xlcy8uL3NyYy9qcy9pbWFnZUhlbHBlci5qcyIsIndlYnBhY2s6Ly9Qb3RhdG9QYXJ0aWNsZXMvLi9zcmMvanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vUG90YXRvUGFydGljbGVzLy4vc3JjL2pzL3BhcnRpY2xlLmpzIiwid2VicGFjazovL1BvdGF0b1BhcnRpY2xlcy8uL3NyYy9qcy92ZWN0b3IuanMiLCJ3ZWJwYWNrOi8vUG90YXRvUGFydGljbGVzL2V4dGVybmFsIFwiUElYSVwiIl0sIm5hbWVzIjpbIlBvdGF0b1BhcnRpY2xlcyIsIkltYWdlSGVscGVyIiwiaXNJbWFnZUxvYWRlZCIsImNhbnZhcyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImN0eCIsImdldENvbnRleHQiLCJzcmMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInRtcEltYWdlRWwiLCJJbWFnZSIsIm9ubG9hZCIsImUiLCJpbWFnZUVsIiwidGFyZ2V0Iiwib25JbWFnZUxvYWRlZCIsImltYWdlIiwid2lkdGgiLCJoZWlnaHQiLCJwcm9wcyIsImNoZWNrSW1hZ2UiLCJwaXhlbFNpemUiLCJwaXhlbEZpbHRlciIsInBpeGVsIiwiYSIsInBpeGVsTWFwIiwiY2FudmFzV2lkdGgiLCJNYXRoIiwiY2VpbCIsImNhbnZhc0hlaWdodCIsInNldEF0dHJpYnV0ZSIsImltYWdlVG9EYXRhIiwiY2xlYXJSZWN0IiwiZHJhd0ltYWdlQ292ZXIiLCJpbWFnZURhdGEiLCJnZXRJbWFnZURhdGEiLCJkYXRhIiwieSIsIngiLCJpbmRleCIsInIiLCJnIiwiYiIsIk9iamVjdCIsImFzc2lnbiIsInB1c2giLCJpbWciLCJzY2FsZSIsIm1pbiIsInNpemUiLCJwb3MiLCJkcmF3SW1hZ2UiLCJwYXJ0aWNsZVNpemUiLCJyZXNpc3RhbmNlIiwibWluTWFzcyIsIm1hc3NSYW5kIiwiZGVsYXlSYW5kIiwicGFydGljbGVJbml0IiwibW91c2VJbnRlcmFjdGlvbiIsImltYWdlUHJvbWlzZXMiLCJpbWFnZUhlbHBlciIsImxvYWQiLCJhbGwiLCJ0aGVuIiwib25Mb2dvTG9hZGVkIiwibmF0dXJhbFdpZHRoIiwibmF0dXJhbEhlaWdodCIsInBhcnRpY2xlc0RhdGEiLCJpbWFnZVRvRG90cyIsIm1vdXNlVmVjdG9yIiwiVmVjdG9yIiwiaW5pdFJlbmRlcmVyIiwiaW5pdFBhcnRpY2xlcyIsInJlbmRlcmVyIiwicmVuZGVyIiwic3RhZ2UiLCJzdGFydExvb3AiLCJjYWxjdWxhdGVTY2FsZSIsImJpbmRFdmVudHMiLCJzZXRQYXJ0aWNsZXNUYXJnZXRzIiwiUElYSSIsInNraXBIZWxsbyIsInRyYW5zcGFyZW50IiwiY29udGV4dCIsIm1vekltYWdlU21vb3RoaW5nRW5hYmxlZCIsIndlYmtpdEltYWdlU21vb3RoaW5nRW5hYmxlZCIsImNhbnZhc0VsIiwidmlldyIsInN0eWxlIiwiZGlzcGxheSIsInBhcmVudEVsZW1lbnQiLCJhcHBlbmRDaGlsZCIsInBhcnRpY2xlQ29udGFpbmVyIiwiYWRkQ2hpbGQiLCJ0aWNrIiwiYmluZCIsInRpY2tlciIsImFkZCIsInBhcnRpY2xlcyIsInBhcnRpY2xlc0NvdW50IiwibGVuZ3RoIiwic2hhcmVkIiwiZ2V0U2hhcmVkIiwidGV4dHVyZSIsImNyZWF0ZUNpcmNsZVRleHR1cmUiLCJpIiwicGFydGljbGUiLCJjb2xvciIsInJnYjJoZXgiLCJQYXJ0aWNsZSIsImF2Z1giLCJhdmdZIiwibWFzcyIsInJhbmRvbSIsImFscGhhIiwiZGVsYXkiLCJyYW5nZVkiLCJtaW5ZIiwic3VtWCIsInN1bVkiLCJtaW5YIiwibWF4WCIsIm1heFkiLCJwYXJ0aWNsZURhdGEiLCJoYWxmV2lkdGgiLCJoYWxmSGVpZ2h0IiwicmFuZ2VYIiwicmFkaXVzIiwiZ3JhcGhpY3MiLCJiZWdpbkZpbGwiLCJkcmF3Q2lyY2xlIiwiZW5kRmlsbCIsImdlbmVyYXRlVGV4dHVyZSIsImNsZWFyIiwiZGVzdHJveSIsImNhbnZhc1JlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJsIiwic2V0VGFyZ2V0Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9uUmVzaXplIiwib25Nb3VzZU1vdmUiLCJzZXQiLCJjbGllbnRYIiwibGVmdCIsImNsaWVudFkiLCJ0b3AiLCJtdWx0aXBseSIsInN0YXJ0Iiwic3RvcCIsImRlbHRhIiwidXBkYXRlIiwiYWRkRm9yY2UiLCJnZXRGb3JjZVRvVGFyZ2V0IiwiZ2V0TW91c2VGb3JjZSIsInZlbG9jaXR5IiwiaW50ZXJwIiwic3RvcExvb3AiLCJyZW1vdmUiLCJjaGlsZHJlbiIsImNvbnRhaW5lciIsInBvc2l0aW9uIiwiYWNjZWxlcmF0aW9uIiwiZm9yY2UiLCJjbG9uZSIsIndhaXRGcmFtZXMiLCJ3YWl0aW5nIiwic3ByaXRlIiwiY3JlYXRlU3ByaXRlIiwidGludCIsImFuY2hvciIsInN1YnRyYWN0IiwibW91c2VQb3MiLCJkaXN0YW5jZSIsInZhbHVlIiwibm9ybWFsaXplIiwiaW52RGlzdCIsInF1YWREaXN0IiwibGVzc1F1YWREaXN0IiwibXVsdCIsImRpdmlkZSIsInZlY3RvciIsInJvdW5kQXhpcyIsIm4iLCJzcXJ0IiwidmVjdG9yQSIsInZlY3RvckIiLCJ2ZWN0b3JPdXQiLCJheGlzIiwicm91bmQiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUVBO0FBRWVBLGdIQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDSnFCQyxXO0FBQ25CLHlCQUFjO0FBQUE7O0FBQ1osU0FBS0MsYUFBTCxHQUFxQixLQUFyQjtBQUVBLFNBQUtDLE1BQUwsR0FBY0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLFFBQXZCLENBQWQ7QUFDQSxTQUFLQyxHQUFMLEdBQVcsS0FBS0gsTUFBTCxDQUFZSSxVQUFaLENBQXVCLElBQXZCLENBQVg7QUFDRDs7Ozt5QkFFSUMsRyxFQUFLO0FBQUE7O0FBQ1IsV0FBS04sYUFBTCxHQUFxQixLQUFyQjtBQUVBLGFBQU8sSUFBSU8sT0FBSixDQUFZLFVBQUFDLE9BQU8sRUFBSTtBQUM1QixZQUFNQyxVQUFVLEdBQUcsSUFBSUMsS0FBSixFQUFuQjs7QUFDQUQsa0JBQVUsQ0FBQ0UsTUFBWCxHQUFvQixVQUFDQyxDQUFELEVBQU87QUFDekIsY0FBTUMsT0FBTyxHQUFHRCxDQUFDLENBQUNFLE1BQWxCOztBQUNBLGVBQUksQ0FBQ0MsYUFBTCxDQUFtQkYsT0FBbkI7O0FBQ0FMLGlCQUFPLENBQUNLLE9BQUQsQ0FBUDtBQUNELFNBSkQ7O0FBS0FKLGtCQUFVLENBQUNILEdBQVgsR0FBaUJBLEdBQWpCO0FBQ0QsT0FSTSxDQUFQO0FBU0Q7OztrQ0FFYVUsSyxFQUFPO0FBQ25CLFdBQUtBLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFdBQUtDLEtBQUwsR0FBYSxLQUFLRCxLQUFMLENBQVdDLEtBQXhCO0FBQ0EsV0FBS0MsTUFBTCxHQUFjLEtBQUtGLEtBQUwsQ0FBV0UsTUFBekI7QUFFQSxXQUFLbEIsYUFBTCxHQUFxQixJQUFyQjtBQUNEOzs7aUNBRVk7QUFDWCxVQUFJLEtBQUtBLGFBQVQsRUFBd0IsT0FBTyxJQUFQLENBRGIsQ0FHWDs7QUFDQSxhQUFPLEtBQVA7QUFDRDs7O2dDQUVXbUIsSyxFQUFPO0FBQ2pCLFVBQUksQ0FBQyxLQUFLQyxVQUFMLEVBQUwsRUFBd0IsT0FBTyxJQUFQO0FBRXhCLFVBQU1KLEtBQUssR0FBRyxLQUFLQSxLQUFuQjtBQUhpQix5QkFVYkcsS0FWYSxDQUtmRixLQUxlO0FBQUEsVUFLZkEsS0FMZSw2QkFLUEQsS0FBSyxDQUFDQyxLQUxDO0FBQUEsMEJBVWJFLEtBVmEsQ0FNZkQsTUFOZTtBQUFBLFVBTWZBLE1BTmUsOEJBTU5GLEtBQUssQ0FBQ0UsTUFOQTtBQUFBLDZCQVViQyxLQVZhLENBT2ZFLFNBUGU7QUFBQSxVQU9mQSxTQVBlLGlDQU9ILENBUEc7QUFBQSwrQkFVYkYsS0FWYSxDQVFmRyxXQVJlO0FBQUEsVUFRZkEsV0FSZSxtQ0FRRCxVQUFBQyxLQUFLO0FBQUEsZUFBS0EsS0FBSyxDQUFDQyxDQUFOLElBQVcsR0FBaEI7QUFBQSxPQVJKO0FBQUEsNEJBVWJMLEtBVmEsQ0FTZk0sUUFUZTtBQUFBLFVBU2ZBLFFBVGUsZ0NBU0osVUFBQUYsS0FBSztBQUFBLGVBQUtBLEtBQUw7QUFBQSxPQVREO0FBWWpCLFVBQU1HLFdBQVcsR0FBR0MsSUFBSSxDQUFDQyxJQUFMLENBQVVYLEtBQUssR0FBR0ksU0FBbEIsQ0FBcEI7QUFDQSxVQUFNUSxZQUFZLEdBQUdGLElBQUksQ0FBQ0MsSUFBTCxDQUFVVixNQUFNLEdBQUdHLFNBQW5CLENBQXJCO0FBRUEsV0FBS3BCLE1BQUwsQ0FBWTZCLFlBQVosQ0FBeUIsT0FBekIsRUFBa0NKLFdBQWxDO0FBQ0EsV0FBS3pCLE1BQUwsQ0FBWTZCLFlBQVosQ0FBeUIsUUFBekIsRUFBbUNELFlBQW5DO0FBRUEsYUFBTyxLQUFLRSxXQUFMLENBQWlCZixLQUFqQixFQUF3QjtBQUM3QlUsbUJBQVcsRUFBWEEsV0FENkI7QUFDaEJHLG9CQUFZLEVBQVpBLFlBRGdCO0FBQ0ZSLGlCQUFTLEVBQVRBLFNBREU7QUFDU0MsbUJBQVcsRUFBWEEsV0FEVDtBQUNzQkcsZ0JBQVEsRUFBUkE7QUFEdEIsT0FBeEIsQ0FBUDtBQUdEOzs7Z0NBRVdULEssRUFBT0csSyxFQUFPO0FBQUEsVUFFdEJPLFdBRnNCLEdBT3BCUCxLQVBvQixDQUV0Qk8sV0FGc0I7QUFBQSxVQUd0QkcsWUFIc0IsR0FPcEJWLEtBUG9CLENBR3RCVSxZQUhzQjtBQUFBLFVBSXRCUixTQUpzQixHQU9wQkYsS0FQb0IsQ0FJdEJFLFNBSnNCO0FBQUEsVUFLdEJDLFdBTHNCLEdBT3BCSCxLQVBvQixDQUt0QkcsV0FMc0I7QUFBQSxVQU10QkcsUUFOc0IsR0FPcEJOLEtBUG9CLENBTXRCTSxRQU5zQjtBQVN4QixXQUFLckIsR0FBTCxDQUFTNEIsU0FBVCxDQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5Qk4sV0FBekIsRUFBc0NHLFlBQXRDO0FBQ0EsV0FBS0ksY0FBTCxDQUFvQmpCLEtBQXBCLEVBQTJCVSxXQUEzQixFQUF3Q0csWUFBeEM7QUFFQSxVQUFNSyxTQUFTLEdBQUcsS0FBSzlCLEdBQUwsQ0FBUytCLFlBQVQsQ0FBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEJULFdBQTVCLEVBQXlDRyxZQUF6QyxFQUF1RE8sSUFBekU7QUFFQSxVQUFNQSxJQUFJLEdBQUcsRUFBYjs7QUFDQSxXQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdSLFlBQXBCLEVBQWtDUSxDQUFDLEVBQW5DLEVBQXVDO0FBQ3JDLGFBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR1osV0FBcEIsRUFBaUNZLENBQUMsRUFBbEMsRUFBc0M7QUFDcEMsY0FBTUMsS0FBSyxHQUFHLENBQUNGLENBQUMsR0FBR1gsV0FBSixHQUFrQlksQ0FBbkIsSUFBd0IsQ0FBdEM7QUFFQSxjQUFNZixLQUFLLEdBQUc7QUFDWmUsYUFBQyxFQUFFQSxDQUFDLEdBQUdqQixTQURLO0FBRVpnQixhQUFDLEVBQUVBLENBQUMsR0FBR2hCLFNBRks7QUFHWm1CLGFBQUMsRUFBR04sU0FBUyxDQUFDSyxLQUFLLEdBQUcsQ0FBVCxDQUFULEdBQXVCLEdBSGY7QUFJWkUsYUFBQyxFQUFHUCxTQUFTLENBQUNLLEtBQUssR0FBRyxDQUFULENBQVQsR0FBdUIsR0FKZjtBQUtaRyxhQUFDLEVBQUdSLFNBQVMsQ0FBQ0ssS0FBSyxHQUFHLENBQVQsQ0FBVCxHQUF1QixHQUxmO0FBTVpmLGFBQUMsRUFBR1UsU0FBUyxDQUFDSyxLQUFLLEdBQUcsQ0FBVCxDQUFULEdBQXVCO0FBTmYsV0FBZDtBQVNBLGNBQUksQ0FBQ2pCLFdBQVcsQ0FBQ0MsS0FBRCxDQUFoQixFQUF5QjtBQUV6Qm9CLGdCQUFNLENBQUNDLE1BQVAsQ0FBY3JCLEtBQWQsRUFBcUJFLFFBQVEsQ0FBQ0YsS0FBRCxDQUE3QjtBQUVBYSxjQUFJLENBQUNTLElBQUwsQ0FBVXRCLEtBQVY7QUFDRDtBQUNGOztBQUVELGFBQU9hLElBQVA7QUFDRDs7O21DQUVjVSxHLEVBQUs3QixLLEVBQU9DLE0sRUFBUTtBQUNqQyxVQUFNNkIsS0FBSyxHQUFHcEIsSUFBSSxDQUFDcUIsR0FBTCxDQUFTL0IsS0FBSyxHQUFHNkIsR0FBRyxDQUFDN0IsS0FBckIsRUFBNEJDLE1BQU0sR0FBRzRCLEdBQUcsQ0FBQzVCLE1BQXpDLENBQWQ7QUFDQSxVQUFNK0IsSUFBSSxHQUFHO0FBQ1hoQyxhQUFLLEVBQUU2QixHQUFHLENBQUM3QixLQUFKLEdBQVk4QixLQURSO0FBRVg3QixjQUFNLEVBQUU0QixHQUFHLENBQUM1QixNQUFKLEdBQWE2QjtBQUZWLE9BQWI7QUFJQSxVQUFNRyxHQUFHLEdBQUc7QUFDVlosU0FBQyxFQUFFLENBQUNyQixLQUFLLEdBQUdnQyxJQUFJLENBQUNoQyxLQUFkLElBQXVCLENBRGhCO0FBRVZvQixTQUFDLEVBQUUsQ0FBQ25CLE1BQU0sR0FBRytCLElBQUksQ0FBQy9CLE1BQWYsSUFBeUI7QUFGbEIsT0FBWjtBQUlBLFdBQUtkLEdBQUwsQ0FBUytDLFNBQVQsQ0FBbUJMLEdBQW5CLEVBQXdCLENBQXhCLEVBQTJCLENBQTNCLEVBQThCQSxHQUFHLENBQUM3QixLQUFsQyxFQUF5QzZCLEdBQUcsQ0FBQzVCLE1BQTdDLEVBQXFEZ0MsR0FBRyxDQUFDWixDQUF6RCxFQUE0RFksR0FBRyxDQUFDYixDQUFoRSxFQUFtRVksSUFBSSxDQUFDaEMsS0FBeEUsRUFBK0VnQyxJQUFJLENBQUMvQixNQUFwRjtBQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUdIO0FBRUE7QUFDQTtBQUNBOztJQUVxQnBCLGU7QUFDbkIsaUNBWUc7QUFBQTs7QUFBQSxRQVhEZSxPQVdDLFFBWERBLE9BV0M7QUFBQSw4QkFWRFEsU0FVQztBQUFBLFFBVkRBLFNBVUMsK0JBVlcsRUFVWDtBQUFBLGlDQVREK0IsWUFTQztBQUFBLFFBVERBLFlBU0Msa0NBVGMsQ0FTZDtBQUFBLCtCQVJEQyxVQVFDO0FBQUEsUUFSREEsVUFRQyxnQ0FSWSxDQUFDLEdBUWI7QUFBQSw0QkFQREMsT0FPQztBQUFBLFFBUERBLE9BT0MsNkJBUFMsQ0FPVDtBQUFBLDZCQU5EQyxRQU1DO0FBQUEsUUFOREEsUUFNQyw4QkFOVSxDQU1WO0FBQUEsOEJBTERDLFNBS0M7QUFBQSxRQUxEQSxTQUtDLCtCQUxXLEdBS1g7QUFBQSxRQUpEbEMsV0FJQyxRQUpEQSxXQUlDO0FBQUEsUUFIREcsUUFHQyxRQUhEQSxRQUdDO0FBQUEsUUFGRGdDLFlBRUMsUUFGREEsWUFFQztBQUFBLHFDQUREQyxnQkFDQztBQUFBLFFBRERBLGdCQUNDLHNDQURrQixJQUNsQjs7QUFBQTs7QUFDRCxTQUFLN0MsT0FBTCxHQUFlQSxPQUFmO0FBRUEsU0FBS1EsU0FBTCxHQUFpQkEsU0FBakI7QUFDQSxTQUFLK0IsWUFBTCxHQUFvQkEsWUFBcEI7QUFDQSxTQUFLQyxVQUFMLEdBQWtCQSxVQUFsQjtBQUNBLFNBQUtDLE9BQUwsR0FBZUEsT0FBZjtBQUNBLFNBQUtDLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsU0FBS0MsU0FBTCxHQUFpQkEsU0FBakI7QUFDQSxTQUFLbEMsV0FBTCxHQUFtQkEsV0FBbkI7QUFDQSxTQUFLRyxRQUFMLEdBQWdCQSxRQUFoQjtBQUNBLFNBQUtnQyxZQUFMLEdBQW9CQSxZQUFwQjtBQUNBLFNBQUtDLGdCQUFMLEdBQXdCQSxnQkFBeEI7QUFFQSxRQUFNQyxhQUFhLEdBQUcsRUFBdEI7QUFFQSxTQUFLQyxXQUFMLEdBQW1CLElBQUk3RCx1REFBSixFQUFuQjtBQUNBNEQsaUJBQWEsQ0FBQ2QsSUFBZCxDQUFtQixLQUFLZSxXQUFMLENBQWlCQyxJQUFqQixDQUFzQmhELE9BQU8sQ0FBQ1AsR0FBOUIsQ0FBbkI7QUFFQUMsV0FBTyxDQUFDdUQsR0FBUixDQUFZSCxhQUFaLEVBQTJCSSxJQUEzQixDQUFnQyxZQUFNO0FBQ3BDLFdBQUksQ0FBQ0MsWUFBTDtBQUNELEtBRkQ7QUFHRDs7OzttQ0FFYztBQUNiLFdBQUsvQyxLQUFMLEdBQWEsS0FBS0osT0FBTCxDQUFhb0QsWUFBYixJQUE2QixLQUFLcEQsT0FBTCxDQUFhSSxLQUF2RDtBQUNBLFdBQUtDLE1BQUwsR0FBYyxLQUFLTCxPQUFMLENBQWFxRCxhQUFiLElBQThCLEtBQUtyRCxPQUFMLENBQWFLLE1BQXpEO0FBRUEsV0FBS2lELGFBQUwsR0FBcUIsS0FBS1AsV0FBTCxDQUFpQlEsV0FBakIsQ0FBNkI7QUFDaERuRCxhQUFLLEVBQUUsS0FBS0EsS0FEb0M7QUFFaERDLGNBQU0sRUFBRSxLQUFLQSxNQUZtQztBQUdoREcsaUJBQVMsRUFBRSxLQUFLQSxTQUhnQztBQUloREMsbUJBQVcsRUFBRSxLQUFLQSxXQUo4QjtBQUtoREcsZ0JBQVEsRUFBRSxLQUFLQTtBQUxpQyxPQUE3QixDQUFyQjtBQVFBLFdBQUs0QyxXQUFMLEdBQW1CLElBQUlDLGtEQUFKLENBQVcsQ0FBWCxFQUFjLENBQWQsQ0FBbkI7QUFFQSxXQUFLQyxZQUFMO0FBQ0EsV0FBS0MsYUFBTDtBQUNBLFdBQUtDLFFBQUwsQ0FBY0MsTUFBZCxDQUFxQixLQUFLQyxLQUExQjtBQUNBLFdBQUtDLFNBQUw7QUFFQSxXQUFLQyxjQUFMO0FBQ0EsV0FBS0MsVUFBTDtBQUVBLFdBQUtDLG1CQUFMO0FBQ0Q7OzttQ0FFYztBQUNiQyxtREFBQSxDQUFXQyxTQUFYO0FBQ0EsV0FBS1IsUUFBTCxHQUFnQixJQUFJTyxnREFBSixDQUFrQjtBQUNoQy9ELGFBQUssRUFBRSxLQUFLQSxLQURvQjtBQUVoQ0MsY0FBTSxFQUFFLEtBQUtBLE1BRm1CO0FBR2hDZ0UsbUJBQVcsRUFBRTtBQUhtQixPQUFsQixDQUFoQjtBQUtBLFdBQUtULFFBQUwsQ0FBY1UsT0FBZCxDQUFzQkMsd0JBQXRCLEdBQWlELEtBQWpEO0FBQ0EsV0FBS1gsUUFBTCxDQUFjVSxPQUFkLENBQXNCRSwyQkFBdEIsR0FBb0QsS0FBcEQ7QUFFQSxXQUFLQyxRQUFMLEdBQWdCLEtBQUtiLFFBQUwsQ0FBY2MsSUFBOUI7QUFFQSxXQUFLMUUsT0FBTCxDQUFhMkUsS0FBYixDQUFtQkMsT0FBbkIsR0FBNkIsTUFBN0I7QUFDQSxXQUFLNUUsT0FBTCxDQUFhNkUsYUFBYixDQUEyQkMsV0FBM0IsQ0FBdUMsS0FBS0wsUUFBNUM7QUFFQSxXQUFLWCxLQUFMLEdBQWEsSUFBSUssaURBQUosRUFBYjtBQUVBLFdBQUtZLGlCQUFMLEdBQXlCLElBQUlaLGlEQUFKLEVBQXpCO0FBQ0EsV0FBS0wsS0FBTCxDQUFXa0IsUUFBWCxDQUFvQixLQUFLRCxpQkFBekI7QUFFQSxXQUFLRSxJQUFMLEdBQVksS0FBS0EsSUFBTCxDQUFVQyxJQUFWLENBQWUsSUFBZixDQUFaO0FBQ0EsV0FBS0MsTUFBTCxHQUFjLElBQUloQiw4Q0FBSixFQUFkO0FBQ0EsV0FBS2dCLE1BQUwsQ0FBWUMsR0FBWixDQUFnQixLQUFLSCxJQUFyQjtBQUNEOzs7b0NBRWU7QUFDZCxXQUFLSSxTQUFMLEdBQWlCLEVBQWpCO0FBRUEsVUFBTUMsY0FBYyxHQUFHLEtBQUtoQyxhQUFMLENBQW1CaUMsTUFBMUM7QUFDQSxVQUFNQyxNQUFNLEdBQUcsS0FBS0MsU0FBTCxFQUFmOztBQUVBLFVBQU03QyxZQUFZLEdBQUcsS0FBS0EsWUFBTCxJQUFzQjtBQUFBLGVBQU8sRUFBUDtBQUFBLE9BQTNDOztBQUVBLFVBQU04QyxPQUFPLEdBQUcsS0FBS0MsbUJBQUwsQ0FBeUJILE1BQU0sQ0FBQ2pELFlBQVAsR0FBc0IsQ0FBL0MsRUFBa0QsUUFBbEQsRUFBNEQsQ0FBNUQsQ0FBaEI7O0FBRUEsV0FBSyxJQUFJcUQsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR04sY0FBcEIsRUFBb0NNLENBQUMsRUFBckMsRUFBeUM7QUFDdkMsWUFBTUMsUUFBUSxHQUFHLEtBQUt2QyxhQUFMLENBQW1Cc0MsQ0FBbkIsQ0FBakI7QUFFQSxZQUFNRSxLQUFLLEdBQUczQiw2Q0FBQSxDQUFXNEIsT0FBWCxDQUFtQixDQUFDRixRQUFRLENBQUNsRSxDQUFWLEVBQWFrRSxRQUFRLENBQUNqRSxDQUF0QixFQUF5QmlFLFFBQVEsQ0FBQ2hFLENBQWxDLENBQW5CLENBQWQ7QUFFQSxhQUFLd0QsU0FBTCxDQUFlckQsSUFBZixDQUFvQixJQUFJZ0Usb0RBQUosQ0FBYSxLQUFLakIsaUJBQWxCLEVBQXFDakQsTUFBTSxDQUFDQyxNQUFQLENBQWM7QUFDckVOLFdBQUMsRUFBRStELE1BQU0sQ0FBQ1MsSUFEMkQ7QUFFckV6RSxXQUFDLEVBQUVnRSxNQUFNLENBQUNVLElBRjJEO0FBR3JFQyxjQUFJLEVBQUVyRixJQUFJLENBQUNzRixNQUFMLEtBQWdCWixNQUFNLENBQUM5QyxRQUF2QixHQUFrQzhDLE1BQU0sQ0FBQy9DLE9BSHNCO0FBSXJFaUQsaUJBQU8sRUFBUEEsT0FKcUU7QUFLckVJLGVBQUssRUFBTEEsS0FMcUU7QUFNckVPLGVBQUssRUFBRVIsUUFBUSxDQUFDbEYsQ0FOcUQ7QUFPckUyRixlQUFLLEVBQ0YsQ0FBQ2QsTUFBTSxDQUFDZSxNQUFQLElBQWlCVixRQUFRLENBQUNyRSxDQUFULEdBQWFnRSxNQUFNLENBQUNnQixJQUFyQyxDQUFELEtBQWdELElBQUloQixNQUFNLENBQUNlLE1BQTNELENBQUQsR0FDR3pGLElBQUksQ0FBQ3NGLE1BQUwsS0FBZ0JaLE1BQU0sQ0FBQzdDO0FBVHlDLFNBQWQsRUFXdERDLFlBQVksQ0FBQ2lELFFBQUQsRUFBV0wsTUFBWCxDQVgwQyxDQUFyQyxDQUFwQjtBQVlEO0FBQ0Y7OztnQ0FFVztBQUNWLFVBQU1GLGNBQWMsR0FBRyxLQUFLaEMsYUFBTCxDQUFtQmlDLE1BQTFDO0FBQ0EsVUFBTWhELFlBQVksR0FBRyxLQUFLQSxZQUExQjtBQUNBLFVBQU1FLE9BQU8sR0FBRyxLQUFLQSxPQUFyQjtBQUNBLFVBQU1DLFFBQVEsR0FBRyxLQUFLQSxRQUF0QjtBQUNBLFVBQU1DLFNBQVMsR0FBRyxLQUFLQSxTQUF2QjtBQUVBLFVBQUk4RCxJQUFJLEdBQUcsQ0FBWDtBQUNBLFVBQUlDLElBQUksR0FBRyxDQUFYO0FBRUEsVUFBSUMsSUFBSSxHQUFHLEtBQUtyRCxhQUFMLENBQW1CLENBQW5CLEVBQXNCN0IsQ0FBakM7QUFDQSxVQUFJbUYsSUFBSSxHQUFHLENBQVg7QUFFQSxVQUFJSixJQUFJLEdBQUcsS0FBS2xELGFBQUwsQ0FBbUIsQ0FBbkIsRUFBc0I5QixDQUFqQztBQUNBLFVBQUlxRixJQUFJLEdBQUcsQ0FBWDs7QUFFQSxXQUFLLElBQUlqQixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHTixjQUFwQixFQUFvQ00sQ0FBQyxFQUFyQyxFQUF5QztBQUN2QyxZQUFNa0IsWUFBWSxHQUFHLEtBQUt4RCxhQUFMLENBQW1Cc0MsQ0FBbkIsQ0FBckI7QUFFQWEsWUFBSSxJQUFJSyxZQUFZLENBQUNyRixDQUFyQjtBQUNBaUYsWUFBSSxJQUFJSSxZQUFZLENBQUN0RixDQUFyQjtBQUVBLFlBQUlzRixZQUFZLENBQUNyRixDQUFiLEdBQWlCa0YsSUFBckIsRUFBMkJBLElBQUksR0FBR0csWUFBWSxDQUFDckYsQ0FBcEI7QUFDM0IsWUFBSXFGLFlBQVksQ0FBQ3JGLENBQWIsR0FBaUJtRixJQUFyQixFQUEyQkEsSUFBSSxHQUFHRSxZQUFZLENBQUNyRixDQUFwQjtBQUUzQixZQUFJcUYsWUFBWSxDQUFDdEYsQ0FBYixHQUFpQmdGLElBQXJCLEVBQTJCQSxJQUFJLEdBQUdNLFlBQVksQ0FBQ3RGLENBQXBCO0FBQzNCLFlBQUlzRixZQUFZLENBQUN0RixDQUFiLEdBQWlCcUYsSUFBckIsRUFBMkJBLElBQUksR0FBR0MsWUFBWSxDQUFDdEYsQ0FBcEI7QUFDNUI7O0FBRUQsYUFBTztBQUNMcEIsYUFBSyxFQUFFLEtBQUtBLEtBRFA7QUFFTEMsY0FBTSxFQUFFLEtBQUtBLE1BRlI7QUFHTDBHLGlCQUFTLEVBQUUsS0FBSzNHLEtBQUwsR0FBYSxDQUhuQjtBQUlMNEcsa0JBQVUsRUFBRSxLQUFLM0csTUFBTCxHQUFjLENBSnJCO0FBS0xpRixzQkFBYyxFQUFkQSxjQUxLO0FBTUwvQyxvQkFBWSxFQUFaQSxZQU5LO0FBT0xFLGVBQU8sRUFBUEEsT0FQSztBQVFMQyxnQkFBUSxFQUFSQSxRQVJLO0FBU0xDLGlCQUFTLEVBQVRBLFNBVEs7QUFVTGdFLFlBQUksRUFBSkEsSUFWSztBQVdMSCxZQUFJLEVBQUpBLElBWEs7QUFZTEksWUFBSSxFQUFKQSxJQVpLO0FBYUxDLFlBQUksRUFBSkEsSUFiSztBQWNMSixZQUFJLEVBQUpBLElBZEs7QUFlTEMsWUFBSSxFQUFKQSxJQWZLO0FBZ0JMVCxZQUFJLEVBQUdRLElBQUksR0FBR25CLGNBaEJUO0FBaUJMWSxZQUFJLEVBQUdRLElBQUksR0FBR3BCLGNBakJUO0FBa0JMMkIsY0FBTSxFQUFHTCxJQUFJLEdBQUdELElBbEJYO0FBbUJMSixjQUFNLEVBQUdNLElBQUksR0FBR0w7QUFuQlgsT0FBUDtBQXFCRDs7O3dDQUVtQlUsTSxFQUFRcEIsSyxFQUFPTyxLLEVBQU87QUFDeEMsVUFBTWMsUUFBUSxHQUFHLElBQUloRCxnREFBSixFQUFqQjtBQUNBZ0QsY0FBUSxDQUFDQyxTQUFULENBQW1CdEIsS0FBbkIsRUFBMEJPLEtBQTFCO0FBQ0FjLGNBQVEsQ0FBQ0UsVUFBVCxDQUFvQixDQUFwQixFQUF1QixDQUF2QixFQUEwQkgsTUFBMUI7QUFDQUMsY0FBUSxDQUFDRyxPQUFUO0FBQ0EsVUFBTTVCLE9BQU8sR0FBRyxLQUFLOUIsUUFBTCxDQUFjMkQsZUFBZCxDQUE4QkosUUFBOUIsQ0FBaEI7QUFDQUEsY0FBUSxDQUFDSyxLQUFUO0FBQ0FMLGNBQVEsQ0FBQ00sT0FBVDtBQUNBLGFBQU8vQixPQUFQO0FBQ0Q7OztxQ0FFZ0I7QUFDZixVQUFNZ0MsVUFBVSxHQUFHLEtBQUtqRCxRQUFMLENBQWNrRCxxQkFBZCxFQUFuQjtBQUNBLFdBQUt6RixLQUFMLEdBQWEsS0FBSzlCLEtBQUwsR0FBYXNILFVBQVUsQ0FBQ3RILEtBQXJDO0FBQ0Q7OzswQ0FFcUI7QUFDcEIsVUFBTXdILENBQUMsR0FBRyxLQUFLdEUsYUFBTCxDQUFtQmlDLE1BQTdCOztBQUNBLFdBQUssSUFBSUssQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR2dDLENBQXBCLEVBQXVCaEMsQ0FBQyxFQUF4QixFQUE0QjtBQUMxQixZQUFNa0IsWUFBWSxHQUFHLEtBQUt4RCxhQUFMLENBQW1Cc0MsQ0FBbkIsQ0FBckI7QUFDQSxhQUFLUCxTQUFMLENBQWVPLENBQWYsRUFBa0JpQyxTQUFsQixDQUE0QixJQUFJcEUsa0RBQUosQ0FBV3FELFlBQVksQ0FBQ3JGLENBQXhCLEVBQTJCcUYsWUFBWSxDQUFDdEYsQ0FBeEMsQ0FBNUI7QUFDRDtBQUNGOzs7aUNBRVk7QUFDWHNHLFlBQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0MsS0FBS0MsUUFBTCxDQUFjOUMsSUFBZCxDQUFtQixJQUFuQixDQUFsQzs7QUFDQSxVQUFJLEtBQUtyQyxnQkFBVCxFQUEyQjtBQUN6QmlGLGNBQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0IsV0FBeEIsRUFBcUMsS0FBS0UsV0FBTCxDQUFpQi9DLElBQWpCLENBQXNCLElBQXRCLENBQXJDO0FBQ0Q7QUFDRjs7OytCQUVVO0FBQ1QsV0FBS2xCLGNBQUw7QUFDRDs7O2dDQUVXakUsQyxFQUFHO0FBQ2IsVUFBTTJILFVBQVUsR0FBRyxLQUFLakQsUUFBTCxDQUFja0QscUJBQWQsRUFBbkI7QUFDQSxXQUFLbkUsV0FBTCxDQUFpQjBFLEdBQWpCLENBQXFCbkksQ0FBQyxDQUFDb0ksT0FBRixHQUFZVCxVQUFVLENBQUNVLElBQTVDLEVBQWtEckksQ0FBQyxDQUFDc0ksT0FBRixHQUFZWCxVQUFVLENBQUNZLEdBQXpFO0FBQ0EsV0FBSzlFLFdBQUwsQ0FBaUIrRSxRQUFqQixDQUEwQixLQUFLckcsS0FBL0I7QUFDRDs7O2dDQUVXO0FBQ1YsV0FBS2lELE1BQUwsQ0FBWXFELEtBQVo7QUFDRDs7OytCQUVVO0FBQ1QsV0FBS3JELE1BQUwsQ0FBWXNELElBQVo7QUFDRDs7O3lCQUVJQyxLLEVBQU87QUFDVixXQUFLQyxNQUFMLENBQVlELEtBQVo7QUFDQSxXQUFLN0UsTUFBTCxDQUFZLENBQVo7QUFDRDs7OzJCQUVNNkUsSyxFQUFPO0FBQ1osVUFBTWQsQ0FBQyxHQUFHLEtBQUt2QyxTQUFMLENBQWVFLE1BQXpCOztBQUNBLFdBQUssSUFBSUssQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR2dDLENBQXBCLEVBQXVCaEMsQ0FBQyxFQUF4QixFQUE0QjtBQUMxQixZQUFNQyxRQUFRLEdBQUcsS0FBS1IsU0FBTCxDQUFlTyxDQUFmLENBQWpCO0FBQ0FDLGdCQUFRLENBQUMrQyxRQUFULENBQWtCL0MsUUFBUSxDQUFDZ0QsZ0JBQVQsRUFBbEI7O0FBQ0EsWUFBSSxLQUFLaEcsZ0JBQVQsRUFBMkI7QUFDekJnRCxrQkFBUSxDQUFDK0MsUUFBVCxDQUFrQi9DLFFBQVEsQ0FBQ2lELGFBQVQsQ0FBdUIsS0FBS3RGLFdBQTVCLENBQWxCO0FBQ0Q7O0FBQ0RxQyxnQkFBUSxDQUFDK0MsUUFBVCxDQUFrQm5GLGtEQUFNLENBQUM4RSxRQUFQLENBQWdCMUMsUUFBUSxDQUFDa0QsUUFBekIsRUFBbUMsS0FBS3ZHLFVBQXhDLENBQWxCO0FBQ0FxRCxnQkFBUSxDQUFDOEMsTUFBVCxDQUFnQkQsS0FBaEI7QUFDRDtBQUNGOzs7MkJBRU1NLE0sRUFBUTtBQUNiLFVBQU1wQixDQUFDLEdBQUcsS0FBS3ZDLFNBQUwsQ0FBZUUsTUFBekI7O0FBQ0EsV0FBSyxJQUFJSyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHZ0MsQ0FBcEIsRUFBdUJoQyxDQUFDLEVBQXhCLEVBQTRCO0FBQzFCLGFBQUtQLFNBQUwsQ0FBZU8sQ0FBZixFQUFrQi9CLE1BQWxCLENBQXlCbUYsTUFBekI7QUFDRDs7QUFFRCxXQUFLcEYsUUFBTCxDQUFjQyxNQUFkLENBQXFCLEtBQUtDLEtBQTFCO0FBQ0Q7Ozs4QkFFUztBQUNSLFVBQUksS0FBS3FCLE1BQVQsRUFBaUI7QUFDZixhQUFLOEQsUUFBTDtBQUNBLGFBQUs5RCxNQUFMLENBQVkrRCxNQUFaLENBQW1CLEtBQUtqRSxJQUF4QjtBQUNBLGFBQUtFLE1BQUwsQ0FBWXNDLE9BQVo7QUFDRDs7QUFFRCxVQUFNRyxDQUFDLEdBQUcsS0FBS3ZDLFNBQUwsQ0FBZUUsTUFBekI7O0FBQ0EsV0FBSyxJQUFJSyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHZ0MsQ0FBcEIsRUFBdUJoQyxDQUFDLEVBQXhCLEVBQTRCO0FBQzFCLGFBQUtQLFNBQUwsQ0FBZU8sQ0FBZixFQUFrQjZCLE9BQWxCO0FBQ0Q7O0FBRUQsVUFBSSxLQUFLM0QsS0FBVCxFQUFnQjtBQUNkLGFBQUtBLEtBQUwsQ0FBVzJELE9BQVgsQ0FBbUI7QUFBRTBCLGtCQUFRLEVBQUUsSUFBWjtBQUFrQnpELGlCQUFPLEVBQUU7QUFBM0IsU0FBbkI7QUFDRDs7QUFFRCxVQUFJLEtBQUs5QixRQUFULEVBQW1CO0FBQ2pCLGFBQUtBLFFBQUwsQ0FBYzZELE9BQWQ7QUFDRDtBQUNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlRSDtBQUVBOztJQUVxQnpCLFE7QUFDbkIsb0JBQVlvRCxTQUFaLFFBRUc7QUFBQSxRQUREM0gsQ0FDQyxRQUREQSxDQUNDO0FBQUEsUUFERUQsQ0FDRixRQURFQSxDQUNGO0FBQUEseUJBREsyRSxJQUNMO0FBQUEsUUFES0EsSUFDTCwwQkFEWSxDQUNaO0FBQUEsUUFEZVQsT0FDZixRQURlQSxPQUNmO0FBQUEsUUFEd0JJLEtBQ3hCLFFBRHdCQSxLQUN4QjtBQUFBLFFBRCtCTyxLQUMvQixRQUQrQkEsS0FDL0I7QUFBQSxRQURzQ0MsS0FDdEMsUUFEc0NBLEtBQ3RDOztBQUFBOztBQUNELFNBQUsrQyxRQUFMLEdBQWdCLElBQUk1RiwrQ0FBSixDQUFXaEMsQ0FBWCxFQUFjRCxDQUFkLENBQWhCO0FBQ0EsU0FBS3VILFFBQUwsR0FBZ0IsSUFBSXRGLCtDQUFKLENBQVcsQ0FBWCxFQUFjLENBQWQsQ0FBaEI7QUFDQSxTQUFLNkYsWUFBTCxHQUFvQixJQUFJN0YsK0NBQUosQ0FBVyxDQUFYLEVBQWMsQ0FBZCxDQUFwQjtBQUNBLFNBQUs4RixLQUFMLEdBQWEsSUFBSTlGLCtDQUFKLENBQVcsQ0FBWCxFQUFjLENBQWQsQ0FBYjtBQUNBLFNBQUswQyxJQUFMLEdBQVlBLElBQVo7QUFDQSxTQUFLbEcsTUFBTCxHQUFjLEtBQUtvSixRQUFMLENBQWNHLEtBQWQsRUFBZDtBQUVBLFNBQUtDLFVBQUwsR0FBa0JuRCxLQUFLLEdBQUcsRUFBMUIsQ0FSQyxDQVE2Qjs7QUFDOUIsU0FBS29ELE9BQUwsR0FBZSxLQUFLRCxVQUFMLEdBQWtCLENBQWpDO0FBRUEsUUFBSSxDQUFDTCxTQUFMLEVBQWdCO0FBRWhCLFNBQUtPLE1BQUwsR0FBYyxLQUFLQyxZQUFMLENBQWtCO0FBQUVsRSxhQUFPLEVBQVBBLE9BQUY7QUFBV0ksV0FBSyxFQUFMQSxLQUFYO0FBQWtCTyxXQUFLLEVBQUxBO0FBQWxCLEtBQWxCLENBQWQ7QUFDQStDLGFBQVMsQ0FBQ3BFLFFBQVYsQ0FBbUIsS0FBSzJFLE1BQXhCO0FBQ0Q7Ozs7d0NBRXVDO0FBQUEsVUFBekJqRSxPQUF5QixTQUF6QkEsT0FBeUI7QUFBQSxVQUFoQkksS0FBZ0IsU0FBaEJBLEtBQWdCO0FBQUEsVUFBVE8sS0FBUyxTQUFUQSxLQUFTO0FBQ3RDLFVBQU1zRCxNQUFNLEdBQUcsSUFBSXhGLDhDQUFKLENBQWdCdUIsT0FBaEIsQ0FBZjtBQUNBaUUsWUFBTSxDQUFDRSxJQUFQLEdBQWMvRCxLQUFkO0FBQ0E2RCxZQUFNLENBQUN0RCxLQUFQLEdBQWVBLEtBQWY7QUFDQXNELFlBQU0sQ0FBQ0csTUFBUCxDQUFjNUIsR0FBZCxDQUFrQixHQUFsQjtBQUNBeUIsWUFBTSxDQUFDTixRQUFQLENBQWdCbkIsR0FBaEIsQ0FBb0IsS0FBS21CLFFBQUwsQ0FBYzVILENBQWxDLEVBQXFDLEtBQUs0SCxRQUFMLENBQWM3SCxDQUFuRDtBQUVBLGFBQU9tSSxNQUFQO0FBQ0Q7Ozs2QkFFUUosSyxFQUFPO0FBQ2QsVUFBSSxDQUFDQSxLQUFMLEVBQVk7QUFDWixXQUFLQSxLQUFMLENBQVduRSxHQUFYLENBQWVtRSxLQUFmO0FBQ0Q7Ozs4QkFFU3RKLE0sRUFBUTtBQUNoQixXQUFLQSxNQUFMLEdBQWNBLE1BQWQ7QUFDRDs7O3VDQUVrQjtBQUNqQixVQUFJLENBQUMsS0FBS0EsTUFBVixFQUFrQixPQUFPLElBQVA7QUFFbEIsVUFBTXNKLEtBQUssR0FBRzlGLCtDQUFNLENBQUNzRyxRQUFQLENBQWdCLEtBQUs5SixNQUFyQixFQUE2QixLQUFLb0osUUFBbEMsQ0FBZDtBQUNBRSxXQUFLLENBQUNoQixRQUFOLENBQWUsSUFBZjtBQUVBLGFBQU9nQixLQUFQO0FBQ0Q7OztrQ0FFYVMsUSxFQUFVO0FBQ3RCLFVBQU1ULEtBQUssR0FBRzlGLCtDQUFNLENBQUNzRyxRQUFQLENBQWdCQyxRQUFoQixFQUEwQixLQUFLWCxRQUEvQixDQUFkO0FBQ0EsVUFBTVksUUFBUSxHQUFHVixLQUFLLENBQUNXLEtBQU4sRUFBakI7QUFDQVgsV0FBSyxDQUFDWSxTQUFOO0FBQ0EsVUFBTUMsT0FBTyxHQUFJLE1BQU1ILFFBQXZCO0FBQ0EsVUFBTUksUUFBUSxHQUFJRCxPQUFPLEdBQUdBLE9BQTVCO0FBQ0EsVUFBTUUsWUFBWSxHQUFHRCxRQUFRLEdBQUcsSUFBaEM7QUFDQSxVQUFNRSxJQUFJLEdBQUdELFlBQVksR0FBRyxDQUFmLEdBQW1CLENBQW5CLEdBQXVCQSxZQUFZLEdBQUcsR0FBbkQ7QUFDQWYsV0FBSyxDQUFDaEIsUUFBTixDQUFlLENBQUNnQyxJQUFoQjtBQUVBLGFBQU9oQixLQUFQO0FBQ0Q7OzsyQkFFTWIsSyxFQUFPO0FBQ1osVUFBSSxLQUFLZ0IsT0FBVCxFQUFrQjtBQUNoQixhQUFLRCxVQUFMLElBQW1CZixLQUFuQjtBQUNBLFlBQUksS0FBS2UsVUFBTCxHQUFrQixDQUF0QixFQUF5QjtBQUV6QixhQUFLQSxVQUFMLEdBQWtCLENBQWxCO0FBQ0EsYUFBS0MsT0FBTCxHQUFlLEtBQWY7QUFDQSxhQUFLSCxLQUFMLENBQVdyQixHQUFYLENBQWUsQ0FBZixFQUFrQixDQUFsQjtBQUNBO0FBQ0Q7O0FBRUQsV0FBS29CLFlBQUwsQ0FBa0JwQixHQUFsQixDQUFzQixLQUFLcUIsS0FBTCxDQUFXOUgsQ0FBakMsRUFBb0MsS0FBSzhILEtBQUwsQ0FBVy9ILENBQS9DO0FBQ0EsV0FBSzhILFlBQUwsQ0FBa0JrQixNQUFsQixDQUF5QixLQUFLckUsSUFBOUI7QUFDQSxXQUFLNEMsUUFBTCxDQUFjM0QsR0FBZCxDQUFrQixLQUFLa0UsWUFBdkI7QUFDQSxXQUFLRCxRQUFMLENBQWNqRSxHQUFkLENBQWtCLEtBQUsyRCxRQUF2QjtBQUNBLFdBQUtRLEtBQUwsQ0FBV3JCLEdBQVgsQ0FBZSxDQUFmLEVBQWtCLENBQWxCO0FBQ0Q7Ozs2QkFFUTtBQUNQLFVBQUksQ0FBQyxLQUFLeUIsTUFBVixFQUFrQjtBQUNsQixXQUFLQSxNQUFMLENBQVlOLFFBQVosQ0FBcUJuQixHQUFyQixDQUF5QixLQUFLbUIsUUFBTCxDQUFjNUgsQ0FBdkMsRUFBMEMsS0FBSzRILFFBQUwsQ0FBYzdILENBQXhEO0FBQ0Q7Ozs4QkFFUztBQUNSLFdBQUttSSxNQUFMLENBQVlsQyxPQUFaLENBQW9CO0FBQUUvQixlQUFPLEVBQUU7QUFBWCxPQUFwQjtBQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQzFGa0JqQyxNO0FBQ25CLGtCQUFZaEMsQ0FBWixFQUFlRCxDQUFmLEVBQWtCO0FBQUE7O0FBQ2hCLFNBQUtDLENBQUwsR0FBU0EsQ0FBVDtBQUNBLFNBQUtELENBQUwsR0FBU0EsQ0FBVDtBQUNEOzs7O3dCQThCR0MsQyxFQUFHRCxDLEVBQUc7QUFDUixXQUFLQyxDQUFMLEdBQVNBLENBQVQ7QUFDQSxXQUFLRCxDQUFMLEdBQVNBLENBQVQ7QUFDRDs7O3lCQUVJQyxDLEVBQUc7QUFDTixXQUFLQSxDQUFMLEdBQVNBLENBQVQ7QUFDRDs7O3lCQUVJRCxDLEVBQUc7QUFDTixXQUFLQSxDQUFMLEdBQVNBLENBQVQ7QUFDRDs7O3dCQUVHaUosTSxFQUFRO0FBQ1YsV0FBS2hKLENBQUwsR0FBU2dDLE1BQU0sQ0FBQ2lILFNBQVAsQ0FBaUIsS0FBS2pKLENBQUwsR0FBU2dKLE1BQU0sQ0FBQ2hKLENBQWpDLENBQVQ7QUFDQSxXQUFLRCxDQUFMLEdBQVNpQyxNQUFNLENBQUNpSCxTQUFQLENBQWlCLEtBQUtsSixDQUFMLEdBQVNpSixNQUFNLENBQUNqSixDQUFqQyxDQUFUO0FBQ0Q7Ozs2QkFFUWlKLE0sRUFBUTtBQUNmLFdBQUtoSixDQUFMLEdBQVNnQyxNQUFNLENBQUNpSCxTQUFQLENBQWlCLEtBQUtqSixDQUFMLEdBQVNnSixNQUFNLENBQUNoSixDQUFqQyxDQUFUO0FBQ0EsV0FBS0QsQ0FBTCxHQUFTaUMsTUFBTSxDQUFDaUgsU0FBUCxDQUFpQixLQUFLbEosQ0FBTCxHQUFTaUosTUFBTSxDQUFDakosQ0FBakMsQ0FBVDtBQUNEOzs7NkJBRVFtSixDLEVBQUc7QUFDVixXQUFLbEosQ0FBTCxHQUFTZ0MsTUFBTSxDQUFDaUgsU0FBUCxDQUFpQixLQUFLakosQ0FBTCxHQUFTa0osQ0FBMUIsQ0FBVDtBQUNBLFdBQUtuSixDQUFMLEdBQVNpQyxNQUFNLENBQUNpSCxTQUFQLENBQWlCLEtBQUtsSixDQUFMLEdBQVNtSixDQUExQixDQUFUO0FBQ0Q7OzsyQkFFTUEsQyxFQUFHO0FBQ1IsV0FBS2xKLENBQUwsR0FBU2dDLE1BQU0sQ0FBQ2lILFNBQVAsQ0FBaUIsS0FBS2pKLENBQUwsR0FBU2tKLENBQTFCLENBQVQ7QUFDQSxXQUFLbkosQ0FBTCxHQUFTaUMsTUFBTSxDQUFDaUgsU0FBUCxDQUFpQixLQUFLbEosQ0FBTCxHQUFTbUosQ0FBMUIsQ0FBVDtBQUNEOzs7NEJBRU87QUFDTixhQUFPN0osSUFBSSxDQUFDOEosSUFBTCxDQUFVLFNBQUMsS0FBS25KLENBQU4sRUFBVyxDQUFYLGFBQWlCLEtBQUtELENBQXRCLEVBQTJCLENBQTNCLENBQVYsQ0FBUDtBQUNEOzs7Z0NBRVc7QUFDVixVQUFNMEksS0FBSyxHQUFHLEtBQUtBLEtBQUwsRUFBZDs7QUFFQSxVQUFJQSxLQUFLLEtBQUssQ0FBZCxFQUFpQjtBQUNmLGFBQUt6SSxDQUFMLElBQVV5SSxLQUFWO0FBQ0EsYUFBSzFJLENBQUwsSUFBVTBJLEtBQVY7QUFDRCxPQUhELE1BR087QUFDTCxhQUFLekksQ0FBTCxHQUFTLENBQVQ7QUFDQSxhQUFLRCxDQUFMLEdBQVMsQ0FBVDtBQUNEO0FBQ0Y7Ozs0QkFFTztBQUNOLGFBQU8sSUFBSWlDLE1BQUosQ0FBVyxLQUFLaEMsQ0FBaEIsRUFBbUIsS0FBS0QsQ0FBeEIsQ0FBUDtBQUNEOzs7d0JBL0VVcUosTyxFQUFTQyxPLEVBQVM7QUFDM0IsVUFBTUMsU0FBUyxHQUFHRixPQUFPLENBQUNyQixLQUFSLEVBQWxCO0FBQ0F1QixlQUFTLENBQUMzRixHQUFWLENBQWMwRixPQUFkO0FBQ0EsYUFBT0MsU0FBUDtBQUNEOzs7NkJBRWVGLE8sRUFBU0MsTyxFQUFTO0FBQ2hDLFVBQU1DLFNBQVMsR0FBR0YsT0FBTyxDQUFDckIsS0FBUixFQUFsQjtBQUNBdUIsZUFBUyxDQUFDaEIsUUFBVixDQUFtQmUsT0FBbkI7QUFDQSxhQUFPQyxTQUFQO0FBQ0Q7Ozs2QkFFZU4sTSxFQUFRRSxDLEVBQUc7QUFDekIsVUFBTUksU0FBUyxHQUFHTixNQUFNLENBQUNqQixLQUFQLEVBQWxCO0FBQ0F1QixlQUFTLENBQUN4QyxRQUFWLENBQW1Cb0MsQ0FBbkI7QUFDQSxhQUFPSSxTQUFQO0FBQ0Q7OzsyQkFFYU4sTSxFQUFRRSxDLEVBQUc7QUFDdkIsVUFBTUksU0FBUyxHQUFHTixNQUFNLENBQUNqQixLQUFQLEVBQWxCO0FBQ0F1QixlQUFTLENBQUNQLE1BQVYsQ0FBaUJHLENBQWpCO0FBQ0EsYUFBT0ksU0FBUDtBQUNEOzs7OEJBRWdCQyxJLEVBQU07QUFDckIsYUFBT2xLLElBQUksQ0FBQ21LLEtBQUwsQ0FBV0QsSUFBSSxHQUFHLEdBQWxCLElBQXlCLEdBQWhDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaENILGFBQWEsaUNBQWlDLEVBQUUsSSIsImZpbGUiOiJwb3RhdG8tcGFydGljbGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvanMvYnVpbGQuanNcIik7XG4iLCIvLyBpbXBvcnQgJy4uL3Njc3MvaW5kZXguc2Nzcyc7XG5cbmltcG9ydCBQb3RhdG9QYXJ0aWNsZXMgZnJvbSAnLi9pbmRleC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IFBvdGF0b1BhcnRpY2xlcztcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEltYWdlSGVscGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5pc0ltYWdlTG9hZGVkID0gZmFsc2U7XG5cbiAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgfVxuXG4gIGxvYWQoc3JjKSB7XG4gICAgdGhpcy5pc0ltYWdlTG9hZGVkID0gZmFsc2U7XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICBjb25zdCB0bXBJbWFnZUVsID0gbmV3IEltYWdlKCk7XG4gICAgICB0bXBJbWFnZUVsLm9ubG9hZCA9IChlKSA9PiB7XG4gICAgICAgIGNvbnN0IGltYWdlRWwgPSBlLnRhcmdldDtcbiAgICAgICAgdGhpcy5vbkltYWdlTG9hZGVkKGltYWdlRWwpO1xuICAgICAgICByZXNvbHZlKGltYWdlRWwpO1xuICAgICAgfTtcbiAgICAgIHRtcEltYWdlRWwuc3JjID0gc3JjO1xuICAgIH0pO1xuICB9XG5cbiAgb25JbWFnZUxvYWRlZChpbWFnZSkge1xuICAgIHRoaXMuaW1hZ2UgPSBpbWFnZTtcbiAgICB0aGlzLndpZHRoID0gdGhpcy5pbWFnZS53aWR0aDtcbiAgICB0aGlzLmhlaWdodCA9IHRoaXMuaW1hZ2UuaGVpZ2h0O1xuXG4gICAgdGhpcy5pc0ltYWdlTG9hZGVkID0gdHJ1ZTtcbiAgfVxuXG4gIGNoZWNrSW1hZ2UoKSB7XG4gICAgaWYgKHRoaXMuaXNJbWFnZUxvYWRlZCkgcmV0dXJuIHRydWU7XG5cbiAgICAvLyBjb25zb2xlLndhcm4oJ0ltYWdlIGlzIG5vdCBsb2FkZWQgeWV0Jyk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaW1hZ2VUb0RvdHMocHJvcHMpIHtcbiAgICBpZiAoIXRoaXMuY2hlY2tJbWFnZSgpKSByZXR1cm4gbnVsbDtcblxuICAgIGNvbnN0IGltYWdlID0gdGhpcy5pbWFnZTtcbiAgICBjb25zdCB7XG4gICAgICB3aWR0aCA9IGltYWdlLndpZHRoLFxuICAgICAgaGVpZ2h0ID0gaW1hZ2UuaGVpZ2h0LFxuICAgICAgcGl4ZWxTaXplID0gMSxcbiAgICAgIHBpeGVsRmlsdGVyID0gcGl4ZWwgPT4gKHBpeGVsLmEgPj0gMC40KSxcbiAgICAgIHBpeGVsTWFwID0gcGl4ZWwgPT4gKHBpeGVsKSxcbiAgICB9ID0gcHJvcHM7XG5cbiAgICBjb25zdCBjYW52YXNXaWR0aCA9IE1hdGguY2VpbCh3aWR0aCAvIHBpeGVsU2l6ZSk7XG4gICAgY29uc3QgY2FudmFzSGVpZ2h0ID0gTWF0aC5jZWlsKGhlaWdodCAvIHBpeGVsU2l6ZSk7XG5cbiAgICB0aGlzLmNhbnZhcy5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgY2FudmFzV2lkdGgpO1xuICAgIHRoaXMuY2FudmFzLnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgY2FudmFzSGVpZ2h0KTtcblxuICAgIHJldHVybiB0aGlzLmltYWdlVG9EYXRhKGltYWdlLCB7XG4gICAgICBjYW52YXNXaWR0aCwgY2FudmFzSGVpZ2h0LCBwaXhlbFNpemUsIHBpeGVsRmlsdGVyLCBwaXhlbE1hcCxcbiAgICB9KTtcbiAgfVxuXG4gIGltYWdlVG9EYXRhKGltYWdlLCBwcm9wcykge1xuICAgIGNvbnN0IHtcbiAgICAgIGNhbnZhc1dpZHRoLFxuICAgICAgY2FudmFzSGVpZ2h0LFxuICAgICAgcGl4ZWxTaXplLFxuICAgICAgcGl4ZWxGaWx0ZXIsXG4gICAgICBwaXhlbE1hcCxcbiAgICB9ID0gcHJvcHM7XG5cbiAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzV2lkdGgsIGNhbnZhc0hlaWdodCk7XG4gICAgdGhpcy5kcmF3SW1hZ2VDb3ZlcihpbWFnZSwgY2FudmFzV2lkdGgsIGNhbnZhc0hlaWdodCk7XG5cbiAgICBjb25zdCBpbWFnZURhdGEgPSB0aGlzLmN0eC5nZXRJbWFnZURhdGEoMCwgMCwgY2FudmFzV2lkdGgsIGNhbnZhc0hlaWdodCkuZGF0YTtcblxuICAgIGNvbnN0IGRhdGEgPSBbXTtcbiAgICBmb3IgKGxldCB5ID0gMDsgeSA8IGNhbnZhc0hlaWdodDsgeSsrKSB7XG4gICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IGNhbnZhc1dpZHRoOyB4KyspIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSAoeSAqIGNhbnZhc1dpZHRoICsgeCkgKiA0O1xuXG4gICAgICAgIGNvbnN0IHBpeGVsID0ge1xuICAgICAgICAgIHg6IHggKiBwaXhlbFNpemUsXG4gICAgICAgICAgeTogeSAqIHBpeGVsU2l6ZSxcbiAgICAgICAgICByOiAoaW1hZ2VEYXRhW2luZGV4ICsgMF0gLyAyNTUpLFxuICAgICAgICAgIGc6IChpbWFnZURhdGFbaW5kZXggKyAxXSAvIDI1NSksXG4gICAgICAgICAgYjogKGltYWdlRGF0YVtpbmRleCArIDJdIC8gMjU1KSxcbiAgICAgICAgICBhOiAoaW1hZ2VEYXRhW2luZGV4ICsgM10gLyAyNTUpLFxuICAgICAgICB9O1xuXG4gICAgICAgIGlmICghcGl4ZWxGaWx0ZXIocGl4ZWwpKSBjb250aW51ZTtcblxuICAgICAgICBPYmplY3QuYXNzaWduKHBpeGVsLCBwaXhlbE1hcChwaXhlbCkpO1xuXG4gICAgICAgIGRhdGEucHVzaChwaXhlbCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICBkcmF3SW1hZ2VDb3ZlcihpbWcsIHdpZHRoLCBoZWlnaHQpIHtcbiAgICBjb25zdCBzY2FsZSA9IE1hdGgubWluKHdpZHRoIC8gaW1nLndpZHRoLCBoZWlnaHQgLyBpbWcuaGVpZ2h0KTtcbiAgICBjb25zdCBzaXplID0ge1xuICAgICAgd2lkdGg6IGltZy53aWR0aCAqIHNjYWxlLFxuICAgICAgaGVpZ2h0OiBpbWcuaGVpZ2h0ICogc2NhbGUsXG4gICAgfTtcbiAgICBjb25zdCBwb3MgPSB7XG4gICAgICB4OiAod2lkdGggLSBzaXplLndpZHRoKSAvIDIsXG4gICAgICB5OiAoaGVpZ2h0IC0gc2l6ZS5oZWlnaHQpIC8gMixcbiAgICB9O1xuICAgIHRoaXMuY3R4LmRyYXdJbWFnZShpbWcsIDAsIDAsIGltZy53aWR0aCwgaW1nLmhlaWdodCwgcG9zLngsIHBvcy55LCBzaXplLndpZHRoLCBzaXplLmhlaWdodCk7XG4gIH1cbn1cbiIsImltcG9ydCAqIGFzIFBJWEkgZnJvbSAncGl4aS5qcyc7XG5cbmltcG9ydCBJbWFnZUhlbHBlciBmcm9tICcuL2ltYWdlSGVscGVyLmpzJztcbmltcG9ydCBWZWN0b3IgZnJvbSAnLi92ZWN0b3IuanMnO1xuaW1wb3J0IFBhcnRpY2xlIGZyb20gJy4vcGFydGljbGUuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3RhdG9QYXJ0aWNsZXMge1xuICBjb25zdHJ1Y3Rvcih7XG4gICAgaW1hZ2VFbCxcbiAgICBwaXhlbFNpemUgPSAxMCxcbiAgICBwYXJ0aWNsZVNpemUgPSA2LFxuICAgIHJlc2lzdGFuY2UgPSAtMC43LFxuICAgIG1pbk1hc3MgPSA0LFxuICAgIG1hc3NSYW5kID0gMixcbiAgICBkZWxheVJhbmQgPSAwLjQsXG4gICAgcGl4ZWxGaWx0ZXIsXG4gICAgcGl4ZWxNYXAsXG4gICAgcGFydGljbGVJbml0LFxuICAgIG1vdXNlSW50ZXJhY3Rpb24gPSB0cnVlLFxuICB9KSB7XG4gICAgdGhpcy5pbWFnZUVsID0gaW1hZ2VFbDtcblxuICAgIHRoaXMucGl4ZWxTaXplID0gcGl4ZWxTaXplO1xuICAgIHRoaXMucGFydGljbGVTaXplID0gcGFydGljbGVTaXplO1xuICAgIHRoaXMucmVzaXN0YW5jZSA9IHJlc2lzdGFuY2U7XG4gICAgdGhpcy5taW5NYXNzID0gbWluTWFzcztcbiAgICB0aGlzLm1hc3NSYW5kID0gbWFzc1JhbmQ7XG4gICAgdGhpcy5kZWxheVJhbmQgPSBkZWxheVJhbmQ7XG4gICAgdGhpcy5waXhlbEZpbHRlciA9IHBpeGVsRmlsdGVyO1xuICAgIHRoaXMucGl4ZWxNYXAgPSBwaXhlbE1hcDtcbiAgICB0aGlzLnBhcnRpY2xlSW5pdCA9IHBhcnRpY2xlSW5pdDtcbiAgICB0aGlzLm1vdXNlSW50ZXJhY3Rpb24gPSBtb3VzZUludGVyYWN0aW9uO1xuXG4gICAgY29uc3QgaW1hZ2VQcm9taXNlcyA9IFtdO1xuXG4gICAgdGhpcy5pbWFnZUhlbHBlciA9IG5ldyBJbWFnZUhlbHBlcigpO1xuICAgIGltYWdlUHJvbWlzZXMucHVzaCh0aGlzLmltYWdlSGVscGVyLmxvYWQoaW1hZ2VFbC5zcmMpKTtcblxuICAgIFByb21pc2UuYWxsKGltYWdlUHJvbWlzZXMpLnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy5vbkxvZ29Mb2FkZWQoKTtcbiAgICB9KTtcbiAgfVxuXG4gIG9uTG9nb0xvYWRlZCgpIHtcbiAgICB0aGlzLndpZHRoID0gdGhpcy5pbWFnZUVsLm5hdHVyYWxXaWR0aCB8fCB0aGlzLmltYWdlRWwud2lkdGg7XG4gICAgdGhpcy5oZWlnaHQgPSB0aGlzLmltYWdlRWwubmF0dXJhbEhlaWdodCB8fCB0aGlzLmltYWdlRWwuaGVpZ2h0O1xuXG4gICAgdGhpcy5wYXJ0aWNsZXNEYXRhID0gdGhpcy5pbWFnZUhlbHBlci5pbWFnZVRvRG90cyh7XG4gICAgICB3aWR0aDogdGhpcy53aWR0aCxcbiAgICAgIGhlaWdodDogdGhpcy5oZWlnaHQsXG4gICAgICBwaXhlbFNpemU6IHRoaXMucGl4ZWxTaXplLFxuICAgICAgcGl4ZWxGaWx0ZXI6IHRoaXMucGl4ZWxGaWx0ZXIsXG4gICAgICBwaXhlbE1hcDogdGhpcy5waXhlbE1hcCxcbiAgICB9KTtcblxuICAgIHRoaXMubW91c2VWZWN0b3IgPSBuZXcgVmVjdG9yKDAsIDApO1xuXG4gICAgdGhpcy5pbml0UmVuZGVyZXIoKTtcbiAgICB0aGlzLmluaXRQYXJ0aWNsZXMoKTtcbiAgICB0aGlzLnJlbmRlcmVyLnJlbmRlcih0aGlzLnN0YWdlKTtcbiAgICB0aGlzLnN0YXJ0TG9vcCgpO1xuXG4gICAgdGhpcy5jYWxjdWxhdGVTY2FsZSgpO1xuICAgIHRoaXMuYmluZEV2ZW50cygpO1xuXG4gICAgdGhpcy5zZXRQYXJ0aWNsZXNUYXJnZXRzKCk7XG4gIH1cblxuICBpbml0UmVuZGVyZXIoKSB7XG4gICAgUElYSS51dGlscy5za2lwSGVsbG8oKTtcbiAgICB0aGlzLnJlbmRlcmVyID0gbmV3IFBJWEkuUmVuZGVyZXIoe1xuICAgICAgd2lkdGg6IHRoaXMud2lkdGgsXG4gICAgICBoZWlnaHQ6IHRoaXMuaGVpZ2h0LFxuICAgICAgdHJhbnNwYXJlbnQ6IHRydWUsXG4gICAgfSk7XG4gICAgdGhpcy5yZW5kZXJlci5jb250ZXh0Lm1vekltYWdlU21vb3RoaW5nRW5hYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMucmVuZGVyZXIuY29udGV4dC53ZWJraXRJbWFnZVNtb290aGluZ0VuYWJsZWQgPSBmYWxzZTtcblxuICAgIHRoaXMuY2FudmFzRWwgPSB0aGlzLnJlbmRlcmVyLnZpZXc7XG5cbiAgICB0aGlzLmltYWdlRWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB0aGlzLmltYWdlRWwucGFyZW50RWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmNhbnZhc0VsKTtcblxuICAgIHRoaXMuc3RhZ2UgPSBuZXcgUElYSS5Db250YWluZXIoKTtcblxuICAgIHRoaXMucGFydGljbGVDb250YWluZXIgPSBuZXcgUElYSS5Db250YWluZXIoKTtcbiAgICB0aGlzLnN0YWdlLmFkZENoaWxkKHRoaXMucGFydGljbGVDb250YWluZXIpO1xuXG4gICAgdGhpcy50aWNrID0gdGhpcy50aWNrLmJpbmQodGhpcyk7XG4gICAgdGhpcy50aWNrZXIgPSBuZXcgUElYSS5UaWNrZXIoKTtcbiAgICB0aGlzLnRpY2tlci5hZGQodGhpcy50aWNrKTtcbiAgfVxuXG4gIGluaXRQYXJ0aWNsZXMoKSB7XG4gICAgdGhpcy5wYXJ0aWNsZXMgPSBbXTtcblxuICAgIGNvbnN0IHBhcnRpY2xlc0NvdW50ID0gdGhpcy5wYXJ0aWNsZXNEYXRhLmxlbmd0aDtcbiAgICBjb25zdCBzaGFyZWQgPSB0aGlzLmdldFNoYXJlZCgpO1xuXG4gICAgY29uc3QgcGFydGljbGVJbml0ID0gdGhpcy5wYXJ0aWNsZUluaXQgfHwgKCgpID0+ICh7fSkpO1xuXG4gICAgY29uc3QgdGV4dHVyZSA9IHRoaXMuY3JlYXRlQ2lyY2xlVGV4dHVyZShzaGFyZWQucGFydGljbGVTaXplIC8gMiwgMHhmZmZmZmYsIDEpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJ0aWNsZXNDb3VudDsgaSsrKSB7XG4gICAgICBjb25zdCBwYXJ0aWNsZSA9IHRoaXMucGFydGljbGVzRGF0YVtpXTtcblxuICAgICAgY29uc3QgY29sb3IgPSBQSVhJLnV0aWxzLnJnYjJoZXgoW3BhcnRpY2xlLnIsIHBhcnRpY2xlLmcsIHBhcnRpY2xlLmJdKTtcblxuICAgICAgdGhpcy5wYXJ0aWNsZXMucHVzaChuZXcgUGFydGljbGUodGhpcy5wYXJ0aWNsZUNvbnRhaW5lciwgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgIHg6IHNoYXJlZC5hdmdYLFxuICAgICAgICB5OiBzaGFyZWQuYXZnWSxcbiAgICAgICAgbWFzczogTWF0aC5yYW5kb20oKSAqIHNoYXJlZC5tYXNzUmFuZCArIHNoYXJlZC5taW5NYXNzLFxuICAgICAgICB0ZXh0dXJlLFxuICAgICAgICBjb2xvcixcbiAgICAgICAgYWxwaGE6IHBhcnRpY2xlLmEsXG4gICAgICAgIGRlbGF5OiAoXG4gICAgICAgICAgKChzaGFyZWQucmFuZ2VZIC0gKHBhcnRpY2xlLnkgLSBzaGFyZWQubWluWSkpICogKDIgLyBzaGFyZWQucmFuZ2VZKSlcbiAgICAgICAgICArIChNYXRoLnJhbmRvbSgpICogc2hhcmVkLmRlbGF5UmFuZClcbiAgICAgICAgKSxcbiAgICAgIH0sIHBhcnRpY2xlSW5pdChwYXJ0aWNsZSwgc2hhcmVkKSkpKTtcbiAgICB9XG4gIH1cblxuICBnZXRTaGFyZWQoKSB7XG4gICAgY29uc3QgcGFydGljbGVzQ291bnQgPSB0aGlzLnBhcnRpY2xlc0RhdGEubGVuZ3RoO1xuICAgIGNvbnN0IHBhcnRpY2xlU2l6ZSA9IHRoaXMucGFydGljbGVTaXplO1xuICAgIGNvbnN0IG1pbk1hc3MgPSB0aGlzLm1pbk1hc3M7XG4gICAgY29uc3QgbWFzc1JhbmQgPSB0aGlzLm1hc3NSYW5kO1xuICAgIGNvbnN0IGRlbGF5UmFuZCA9IHRoaXMuZGVsYXlSYW5kO1xuXG4gICAgbGV0IHN1bVggPSAwO1xuICAgIGxldCBzdW1ZID0gMDtcblxuICAgIGxldCBtaW5YID0gdGhpcy5wYXJ0aWNsZXNEYXRhWzBdLng7XG4gICAgbGV0IG1heFggPSAwO1xuXG4gICAgbGV0IG1pblkgPSB0aGlzLnBhcnRpY2xlc0RhdGFbMF0ueTtcbiAgICBsZXQgbWF4WSA9IDA7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcnRpY2xlc0NvdW50OyBpKyspIHtcbiAgICAgIGNvbnN0IHBhcnRpY2xlRGF0YSA9IHRoaXMucGFydGljbGVzRGF0YVtpXTtcblxuICAgICAgc3VtWCArPSBwYXJ0aWNsZURhdGEueDtcbiAgICAgIHN1bVkgKz0gcGFydGljbGVEYXRhLnk7XG5cbiAgICAgIGlmIChwYXJ0aWNsZURhdGEueCA8IG1pblgpIG1pblggPSBwYXJ0aWNsZURhdGEueDtcbiAgICAgIGlmIChwYXJ0aWNsZURhdGEueCA+IG1heFgpIG1heFggPSBwYXJ0aWNsZURhdGEueDtcblxuICAgICAgaWYgKHBhcnRpY2xlRGF0YS55IDwgbWluWSkgbWluWSA9IHBhcnRpY2xlRGF0YS55O1xuICAgICAgaWYgKHBhcnRpY2xlRGF0YS55ID4gbWF4WSkgbWF4WSA9IHBhcnRpY2xlRGF0YS55O1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICB3aWR0aDogdGhpcy53aWR0aCxcbiAgICAgIGhlaWdodDogdGhpcy5oZWlnaHQsXG4gICAgICBoYWxmV2lkdGg6IHRoaXMud2lkdGggLyAyLFxuICAgICAgaGFsZkhlaWdodDogdGhpcy5oZWlnaHQgLyAyLFxuICAgICAgcGFydGljbGVzQ291bnQsXG4gICAgICBwYXJ0aWNsZVNpemUsXG4gICAgICBtaW5NYXNzLFxuICAgICAgbWFzc1JhbmQsXG4gICAgICBkZWxheVJhbmQsXG4gICAgICBtaW5YLFxuICAgICAgbWluWSxcbiAgICAgIG1heFgsXG4gICAgICBtYXhZLFxuICAgICAgc3VtWCxcbiAgICAgIHN1bVksXG4gICAgICBhdmdYOiAoc3VtWCAvIHBhcnRpY2xlc0NvdW50KSxcbiAgICAgIGF2Z1k6IChzdW1ZIC8gcGFydGljbGVzQ291bnQpLFxuICAgICAgcmFuZ2VYOiAobWF4WCAtIG1pblgpLFxuICAgICAgcmFuZ2VZOiAobWF4WSAtIG1pblkpLFxuICAgIH07XG4gIH1cblxuICBjcmVhdGVDaXJjbGVUZXh0dXJlKHJhZGl1cywgY29sb3IsIGFscGhhKSB7XG4gICAgY29uc3QgZ3JhcGhpY3MgPSBuZXcgUElYSS5HcmFwaGljcygpO1xuICAgIGdyYXBoaWNzLmJlZ2luRmlsbChjb2xvciwgYWxwaGEpO1xuICAgIGdyYXBoaWNzLmRyYXdDaXJjbGUoMCwgMCwgcmFkaXVzKTtcbiAgICBncmFwaGljcy5lbmRGaWxsKCk7XG4gICAgY29uc3QgdGV4dHVyZSA9IHRoaXMucmVuZGVyZXIuZ2VuZXJhdGVUZXh0dXJlKGdyYXBoaWNzKTtcbiAgICBncmFwaGljcy5jbGVhcigpO1xuICAgIGdyYXBoaWNzLmRlc3Ryb3koKTtcbiAgICByZXR1cm4gdGV4dHVyZTtcbiAgfVxuXG4gIGNhbGN1bGF0ZVNjYWxlKCkge1xuICAgIGNvbnN0IGNhbnZhc1JlY3QgPSB0aGlzLmNhbnZhc0VsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHRoaXMuc2NhbGUgPSB0aGlzLndpZHRoIC8gY2FudmFzUmVjdC53aWR0aDtcbiAgfVxuXG4gIHNldFBhcnRpY2xlc1RhcmdldHMoKSB7XG4gICAgY29uc3QgbCA9IHRoaXMucGFydGljbGVzRGF0YS5sZW5ndGg7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsOyBpKyspIHtcbiAgICAgIGNvbnN0IHBhcnRpY2xlRGF0YSA9IHRoaXMucGFydGljbGVzRGF0YVtpXTtcbiAgICAgIHRoaXMucGFydGljbGVzW2ldLnNldFRhcmdldChuZXcgVmVjdG9yKHBhcnRpY2xlRGF0YS54LCBwYXJ0aWNsZURhdGEueSkpO1xuICAgIH1cbiAgfVxuXG4gIGJpbmRFdmVudHMoKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMub25SZXNpemUuYmluZCh0aGlzKSk7XG4gICAgaWYgKHRoaXMubW91c2VJbnRlcmFjdGlvbikge1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMub25Nb3VzZU1vdmUuYmluZCh0aGlzKSk7XG4gICAgfVxuICB9XG5cbiAgb25SZXNpemUoKSB7XG4gICAgdGhpcy5jYWxjdWxhdGVTY2FsZSgpO1xuICB9XG5cbiAgb25Nb3VzZU1vdmUoZSkge1xuICAgIGNvbnN0IGNhbnZhc1JlY3QgPSB0aGlzLmNhbnZhc0VsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHRoaXMubW91c2VWZWN0b3Iuc2V0KGUuY2xpZW50WCAtIGNhbnZhc1JlY3QubGVmdCwgZS5jbGllbnRZIC0gY2FudmFzUmVjdC50b3ApO1xuICAgIHRoaXMubW91c2VWZWN0b3IubXVsdGlwbHkodGhpcy5zY2FsZSk7XG4gIH1cblxuICBzdGFydExvb3AoKSB7XG4gICAgdGhpcy50aWNrZXIuc3RhcnQoKTtcbiAgfVxuXG4gIHN0b3BMb29wKCkge1xuICAgIHRoaXMudGlja2VyLnN0b3AoKTtcbiAgfVxuXG4gIHRpY2soZGVsdGEpIHtcbiAgICB0aGlzLnVwZGF0ZShkZWx0YSk7XG4gICAgdGhpcy5yZW5kZXIoMSk7XG4gIH1cblxuICB1cGRhdGUoZGVsdGEpIHtcbiAgICBjb25zdCBsID0gdGhpcy5wYXJ0aWNsZXMubGVuZ3RoO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbDsgaSsrKSB7XG4gICAgICBjb25zdCBwYXJ0aWNsZSA9IHRoaXMucGFydGljbGVzW2ldO1xuICAgICAgcGFydGljbGUuYWRkRm9yY2UocGFydGljbGUuZ2V0Rm9yY2VUb1RhcmdldCgpKTtcbiAgICAgIGlmICh0aGlzLm1vdXNlSW50ZXJhY3Rpb24pIHtcbiAgICAgICAgcGFydGljbGUuYWRkRm9yY2UocGFydGljbGUuZ2V0TW91c2VGb3JjZSh0aGlzLm1vdXNlVmVjdG9yKSk7XG4gICAgICB9XG4gICAgICBwYXJ0aWNsZS5hZGRGb3JjZShWZWN0b3IubXVsdGlwbHkocGFydGljbGUudmVsb2NpdHksIHRoaXMucmVzaXN0YW5jZSkpO1xuICAgICAgcGFydGljbGUudXBkYXRlKGRlbHRhKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoaW50ZXJwKSB7XG4gICAgY29uc3QgbCA9IHRoaXMucGFydGljbGVzLmxlbmd0aDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGw7IGkrKykge1xuICAgICAgdGhpcy5wYXJ0aWNsZXNbaV0ucmVuZGVyKGludGVycCk7XG4gICAgfVxuXG4gICAgdGhpcy5yZW5kZXJlci5yZW5kZXIodGhpcy5zdGFnZSk7XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIGlmICh0aGlzLnRpY2tlcikge1xuICAgICAgdGhpcy5zdG9wTG9vcCgpO1xuICAgICAgdGhpcy50aWNrZXIucmVtb3ZlKHRoaXMudGljayk7XG4gICAgICB0aGlzLnRpY2tlci5kZXN0cm95KCk7XG4gICAgfVxuXG4gICAgY29uc3QgbCA9IHRoaXMucGFydGljbGVzLmxlbmd0aDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGw7IGkrKykge1xuICAgICAgdGhpcy5wYXJ0aWNsZXNbaV0uZGVzdHJveSgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnN0YWdlKSB7XG4gICAgICB0aGlzLnN0YWdlLmRlc3Ryb3koeyBjaGlsZHJlbjogdHJ1ZSwgdGV4dHVyZTogdHJ1ZSB9KTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5yZW5kZXJlcikge1xuICAgICAgdGhpcy5yZW5kZXJlci5kZXN0cm95KCk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgKiBhcyBQSVhJIGZyb20gJ3BpeGkuanMnO1xuXG5pbXBvcnQgVmVjdG9yIGZyb20gJy4vdmVjdG9yJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFydGljbGUge1xuICBjb25zdHJ1Y3Rvcihjb250YWluZXIsIHtcbiAgICB4LCB5LCBtYXNzID0gMSwgdGV4dHVyZSwgY29sb3IsIGFscGhhLCBkZWxheSxcbiAgfSkge1xuICAgIHRoaXMucG9zaXRpb24gPSBuZXcgVmVjdG9yKHgsIHkpO1xuICAgIHRoaXMudmVsb2NpdHkgPSBuZXcgVmVjdG9yKDAsIDApO1xuICAgIHRoaXMuYWNjZWxlcmF0aW9uID0gbmV3IFZlY3RvcigwLCAwKTtcbiAgICB0aGlzLmZvcmNlID0gbmV3IFZlY3RvcigwLCAwKTtcbiAgICB0aGlzLm1hc3MgPSBtYXNzO1xuICAgIHRoaXMudGFyZ2V0ID0gdGhpcy5wb3NpdGlvbi5jbG9uZSgpO1xuXG4gICAgdGhpcy53YWl0RnJhbWVzID0gZGVsYXkgKiA2MDsgLy8gKiBGUFNcbiAgICB0aGlzLndhaXRpbmcgPSB0aGlzLndhaXRGcmFtZXMgPiAwO1xuXG4gICAgaWYgKCFjb250YWluZXIpIHJldHVybjtcblxuICAgIHRoaXMuc3ByaXRlID0gdGhpcy5jcmVhdGVTcHJpdGUoeyB0ZXh0dXJlLCBjb2xvciwgYWxwaGEgfSk7XG4gICAgY29udGFpbmVyLmFkZENoaWxkKHRoaXMuc3ByaXRlKTtcbiAgfVxuXG4gIGNyZWF0ZVNwcml0ZSh7IHRleHR1cmUsIGNvbG9yLCBhbHBoYSB9KSB7XG4gICAgY29uc3Qgc3ByaXRlID0gbmV3IFBJWEkuU3ByaXRlKHRleHR1cmUpO1xuICAgIHNwcml0ZS50aW50ID0gY29sb3I7XG4gICAgc3ByaXRlLmFscGhhID0gYWxwaGE7XG4gICAgc3ByaXRlLmFuY2hvci5zZXQoMC41KTtcbiAgICBzcHJpdGUucG9zaXRpb24uc2V0KHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55KTtcblxuICAgIHJldHVybiBzcHJpdGU7XG4gIH1cblxuICBhZGRGb3JjZShmb3JjZSkge1xuICAgIGlmICghZm9yY2UpIHJldHVybjtcbiAgICB0aGlzLmZvcmNlLmFkZChmb3JjZSk7XG4gIH1cblxuICBzZXRUYXJnZXQodGFyZ2V0KSB7XG4gICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XG4gIH1cblxuICBnZXRGb3JjZVRvVGFyZ2V0KCkge1xuICAgIGlmICghdGhpcy50YXJnZXQpIHJldHVybiBudWxsO1xuXG4gICAgY29uc3QgZm9yY2UgPSBWZWN0b3Iuc3VidHJhY3QodGhpcy50YXJnZXQsIHRoaXMucG9zaXRpb24pO1xuICAgIGZvcmNlLm11bHRpcGx5KDAuMDQpO1xuXG4gICAgcmV0dXJuIGZvcmNlO1xuICB9XG5cbiAgZ2V0TW91c2VGb3JjZShtb3VzZVBvcykge1xuICAgIGNvbnN0IGZvcmNlID0gVmVjdG9yLnN1YnRyYWN0KG1vdXNlUG9zLCB0aGlzLnBvc2l0aW9uKTtcbiAgICBjb25zdCBkaXN0YW5jZSA9IGZvcmNlLnZhbHVlKCk7XG4gICAgZm9yY2Uubm9ybWFsaXplKCk7XG4gICAgY29uc3QgaW52RGlzdCA9ICgxMjAgLyBkaXN0YW5jZSk7XG4gICAgY29uc3QgcXVhZERpc3QgPSAoaW52RGlzdCAqIGludkRpc3QpO1xuICAgIGNvbnN0IGxlc3NRdWFkRGlzdCA9IHF1YWREaXN0IC0gMC4wNDtcbiAgICBjb25zdCBtdWx0ID0gbGVzc1F1YWREaXN0IDwgMCA/IDAgOiBsZXNzUXVhZERpc3QgKiAwLjg7XG4gICAgZm9yY2UubXVsdGlwbHkoLW11bHQpO1xuXG4gICAgcmV0dXJuIGZvcmNlO1xuICB9XG5cbiAgdXBkYXRlKGRlbHRhKSB7XG4gICAgaWYgKHRoaXMud2FpdGluZykge1xuICAgICAgdGhpcy53YWl0RnJhbWVzIC09IGRlbHRhO1xuICAgICAgaWYgKHRoaXMud2FpdEZyYW1lcyA+IDApIHJldHVybjtcblxuICAgICAgdGhpcy53YWl0RnJhbWVzID0gMDtcbiAgICAgIHRoaXMud2FpdGluZyA9IGZhbHNlO1xuICAgICAgdGhpcy5mb3JjZS5zZXQoMCwgMCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5hY2NlbGVyYXRpb24uc2V0KHRoaXMuZm9yY2UueCwgdGhpcy5mb3JjZS55KTtcbiAgICB0aGlzLmFjY2VsZXJhdGlvbi5kaXZpZGUodGhpcy5tYXNzKTtcbiAgICB0aGlzLnZlbG9jaXR5LmFkZCh0aGlzLmFjY2VsZXJhdGlvbik7XG4gICAgdGhpcy5wb3NpdGlvbi5hZGQodGhpcy52ZWxvY2l0eSk7XG4gICAgdGhpcy5mb3JjZS5zZXQoMCwgMCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgaWYgKCF0aGlzLnNwcml0ZSkgcmV0dXJuO1xuICAgIHRoaXMuc3ByaXRlLnBvc2l0aW9uLnNldCh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSk7XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHRoaXMuc3ByaXRlLmRlc3Ryb3koeyB0ZXh0dXJlOiB0cnVlIH0pO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBWZWN0b3Ige1xuICBjb25zdHJ1Y3Rvcih4LCB5KSB7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICB9XG5cbiAgc3RhdGljIGFkZCh2ZWN0b3JBLCB2ZWN0b3JCKSB7XG4gICAgY29uc3QgdmVjdG9yT3V0ID0gdmVjdG9yQS5jbG9uZSgpO1xuICAgIHZlY3Rvck91dC5hZGQodmVjdG9yQik7XG4gICAgcmV0dXJuIHZlY3Rvck91dDtcbiAgfVxuXG4gIHN0YXRpYyBzdWJ0cmFjdCh2ZWN0b3JBLCB2ZWN0b3JCKSB7XG4gICAgY29uc3QgdmVjdG9yT3V0ID0gdmVjdG9yQS5jbG9uZSgpO1xuICAgIHZlY3Rvck91dC5zdWJ0cmFjdCh2ZWN0b3JCKTtcbiAgICByZXR1cm4gdmVjdG9yT3V0O1xuICB9XG5cbiAgc3RhdGljIG11bHRpcGx5KHZlY3Rvciwgbikge1xuICAgIGNvbnN0IHZlY3Rvck91dCA9IHZlY3Rvci5jbG9uZSgpO1xuICAgIHZlY3Rvck91dC5tdWx0aXBseShuKTtcbiAgICByZXR1cm4gdmVjdG9yT3V0O1xuICB9XG5cbiAgc3RhdGljIGRpdmlkZSh2ZWN0b3IsIG4pIHtcbiAgICBjb25zdCB2ZWN0b3JPdXQgPSB2ZWN0b3IuY2xvbmUoKTtcbiAgICB2ZWN0b3JPdXQuZGl2aWRlKG4pO1xuICAgIHJldHVybiB2ZWN0b3JPdXQ7XG4gIH1cblxuICBzdGF0aWMgcm91bmRBeGlzKGF4aXMpIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChheGlzICogMWU1KSAvIDFlNTtcbiAgfVxuXG4gIHNldCh4LCB5KSB7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICB9XG5cbiAgc2V0WCh4KSB7XG4gICAgdGhpcy54ID0geDtcbiAgfVxuXG4gIHNldFkoeSkge1xuICAgIHRoaXMueSA9IHk7XG4gIH1cblxuICBhZGQodmVjdG9yKSB7XG4gICAgdGhpcy54ID0gVmVjdG9yLnJvdW5kQXhpcyh0aGlzLnggKyB2ZWN0b3IueCk7XG4gICAgdGhpcy55ID0gVmVjdG9yLnJvdW5kQXhpcyh0aGlzLnkgKyB2ZWN0b3IueSk7XG4gIH1cblxuICBzdWJ0cmFjdCh2ZWN0b3IpIHtcbiAgICB0aGlzLnggPSBWZWN0b3Iucm91bmRBeGlzKHRoaXMueCAtIHZlY3Rvci54KTtcbiAgICB0aGlzLnkgPSBWZWN0b3Iucm91bmRBeGlzKHRoaXMueSAtIHZlY3Rvci55KTtcbiAgfVxuXG4gIG11bHRpcGx5KG4pIHtcbiAgICB0aGlzLnggPSBWZWN0b3Iucm91bmRBeGlzKHRoaXMueCAqIG4pO1xuICAgIHRoaXMueSA9IFZlY3Rvci5yb3VuZEF4aXModGhpcy55ICogbik7XG4gIH1cblxuICBkaXZpZGUobikge1xuICAgIHRoaXMueCA9IFZlY3Rvci5yb3VuZEF4aXModGhpcy54IC8gbik7XG4gICAgdGhpcy55ID0gVmVjdG9yLnJvdW5kQXhpcyh0aGlzLnkgLyBuKTtcbiAgfVxuXG4gIHZhbHVlKCkge1xuICAgIHJldHVybiBNYXRoLnNxcnQoKHRoaXMueCAqKiAyKSArICh0aGlzLnkgKiogMikpO1xuICB9XG5cbiAgbm9ybWFsaXplKCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy52YWx1ZSgpO1xuXG4gICAgaWYgKHZhbHVlICE9PSAwKSB7XG4gICAgICB0aGlzLnggLz0gdmFsdWU7XG4gICAgICB0aGlzLnkgLz0gdmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMueCA9IDA7XG4gICAgICB0aGlzLnkgPSAwO1xuICAgIH1cbiAgfVxuXG4gIGNsb25lKCkge1xuICAgIHJldHVybiBuZXcgVmVjdG9yKHRoaXMueCwgdGhpcy55KTtcbiAgfVxufVxuIiwiKGZ1bmN0aW9uKCkgeyBtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIlBJWElcIl07IH0oKSk7Il0sInNvdXJjZVJvb3QiOiIifQ==