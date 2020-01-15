import * as PIXI from 'pixi.js';

import ImageHelper from './ImageHelper.js';
import Vector from './vector.js';
import Particle from './Particle.js';

export default class Core {
  constructor({
    imageEl,
    pixelSize = 10,
    particleSize = 6,
    resistance = -0.7,
    minMass = 4,
    massRand = 2,
    delayRand = 0.4,
    pixelFilter,
    particleInit,
    mouseInteraction = true,
  }) {
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

    this.imageHelper = new ImageHelper();
    this.imageHelper.load(imageEl.src).then((image) => {
      this.onLogoLoaded(image);
    });
  }

  onLogoLoaded(image) {
    this.width = image.width;
    this.height = image.height;

    this.particlesData = this.imageHelper.imageToDots({
      width: this.width,
      height: this.height,
      pixelSize: this.pixelSize,
      pixelFilter: this.pixelFilter,
    });

    this.mouseVector = new Vector(0, 0);

    this.initRenderer();
    this.initParticles();
    this.renderer.render(this.stage);
    this.startLoop();

    this.calculateScale();
    this.bindEvents();

    this.setParticlesTargets();
  }

  initRenderer() {
    this.ticker = PIXI.Ticker.shared;

    this.renderer = new PIXI.Renderer({
      width: this.width,
      height: this.height,
      transparent: true,
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

  initParticles() {
    this.particles = [];

    const particlesCount = this.particlesData.length;
    const shared = this.getShared();

    const particleInit = this.particleInit || (() => ({}));

    for (let i = 0; i < particlesCount; i++) {
      const particle = this.particlesData[i];

      const color = PIXI.utils.rgb2hex([particle.r, particle.g, particle.b]);

      this.particles.push(new Particle(this.particleContainer, Object.assign({
        x: shared.avgX,
        y: shared.avgY,
        mass: Math.random() * shared.massRand + shared.minMass,
        texture: this.createCircleTexture(shared.particleSize / 2, color, 1),
        delay: (
          ((shared.rangeY - (particle.y - shared.minY)) * (2 / shared.rangeY))
          + (Math.random() * shared.delayRand)
        ),
      }, particleInit(particle, shared))));
    }
  }

  getShared() {
    const particlesCount = this.particlesData.length;
    const particleSize = this.particleSize;
    const minMass = this.minMass;
    const massRand = this.massRand;
    const delayRand = this.delayRand;

    let sumX = 0;
    let sumY = 0;

    let minX = this.particlesData[0].x;
    let maxX = 0;

    let minY = this.particlesData[0].y;
    let maxY = 0;

    for (let i = 0; i < particlesCount; i++) {
      const particleData = this.particlesData[i];

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
      particlesCount,
      particleSize,
      minMass,
      massRand,
      delayRand,
      minX,
      minY,
      maxX,
      maxY,
      sumX,
      sumY,
      avgX: (sumX / particlesCount),
      avgY: (sumY / particlesCount),
      rangeX: (maxX - minX),
      rangeY: (maxY - minY),
    };
  }

  createCircleTexture(radius, color, alpha) {
    const graphics = new PIXI.Graphics();
    graphics.beginFill(color, alpha);
    graphics.drawCircle(0, 0, radius);
    graphics.endFill();
    const texture = this.renderer.generateTexture(graphics);
    graphics.clear();
    graphics.destroy();
    return texture;
  }

  calculateScale() {
    const canvasRect = this.canvasEl.getBoundingClientRect();
    this.scale = this.width / canvasRect.width;
  }

  setParticlesTargets() {
    const l = this.particlesData.length;
    for (let i = 0; i < l; i++) {
      const particleData = this.particlesData[i];
      this.particles[i].setTarget(new Vector(particleData.x, particleData.y));
    }
  }

  bindEvents() {
    window.addEventListener('resize', this.onResize.bind(this));
    if (this.mouseInteraction) {
      window.addEventListener('mousemove', this.onMouseMove.bind(this));
    }
  }

  onResize() {
    this.calculateScale();
  }

  onMouseMove(e) {
    const canvasRect = this.canvasEl.getBoundingClientRect();
    this.mouseVector.set(e.clientX - canvasRect.left, e.clientY - canvasRect.top);
    this.mouseVector.multiply(this.scale);
  }

  startLoop() {
    this.ticker.add(this.tick.bind(this));
  }

  tick(delta) {
    this.update(delta);
    this.render(1);
  }

  update(delta) {
    const l = this.particles.length;
    for (let i = 0; i < l; i++) {
      const particle = this.particles[i];
      particle.addForce(particle.getForceToTarget());
      if (this.mouseInteraction) {
        particle.addForce(particle.getMouseForce(this.mouseVector));
      }
      particle.addForce(Vector.multiply(particle.velocity, this.resistance));
      particle.update(delta);
    }
  }

  render(interp) {
    const l = this.particles.length;
    for (let i = 0; i < l; i++) {
      this.particles[i].render(interp);
    }

    this.renderer.render(this.stage);
  }
}
