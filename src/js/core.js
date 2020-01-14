import { Renderer, Ticker, Container, Graphics, utils as PIXIutils } from 'pixi.js';

import ImageHelper from './ImageHelper.js';
import Vector from './vector.js';
import Particle from './Particle.js';

export default class Core {
  constructor({
    rootEl,
    imageSrc,
    pixelSize = 10,
    particleSize = 6,
    resistance = -0.7,
    minMass = 4,
    massAmp = 2,
    delayRand = 0.4,
    pixelFilter,
    mouseInteraction = true,
  }) {
    this.rootEl = rootEl;

    this.pixelSize = pixelSize;
    this.particleSize = particleSize;
    this.resistance = resistance;
    this.minMass = minMass;
    this.massAmp = massAmp;
    this.delayRand = delayRand;
    this.pixelFilter = pixelFilter;
    this.mouseInteraction = mouseInteraction;

    this.imageHelper = new ImageHelper();
    this.imageHelper.load(imageSrc).then((image) => {
      this.onLogoLoaded(image);
      this.logoImage = image;
    });
  }

  onLogoLoaded(image) {
    this.logoImage = image;
    this.width = this.logoImage.width;
    this.height = this.logoImage.height;

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
    this.ticker = Ticker.shared;

    this.renderer = new Renderer({
      width: this.width,
      height: this.height,
      transparent: true,
    });
    this.renderer.context.mozImageSmoothingEnabled = false;
    this.renderer.context.webkitImageSmoothingEnabled = false;

    this.rootEl.appendChild(this.renderer.view);

    this.stage = new Container();

    this.particleContainer = new Container();
    this.stage.addChild(this.particleContainer);
  }

  initParticles() {
    this.particles = [];

    const l = this.particlesData.length;

    let sumX = 0;
    let minY = this.particlesData[0].y;
    let maxY = 0;
    for (let i = 0; i < l; i++) {
      sumX += this.particlesData[i].x;
      if (this.particlesData[i].y < minY) minY = this.particlesData[i].y;
      if (this.particlesData[i].y > maxY) maxY = this.particlesData[i].y;
    }

    const avgX = (sumX / l);
    const xOffset = avgX - (this.width / 2);
    const yRange = maxY - minY;
    const delayScale = 2 / yRange;

    const particleSize = this.particleSize;
    const minMass = this.minMass;
    const massAmp = this.massAmp;
    const delayRand = this.delayRand;

    for (let i = 0; i < l; i++) {
      const particleData = this.particlesData[i];

      const color = PIXIutils.rgb2hex([particleData.r, particleData.g, particleData.b]);

      this.particles.push(new Particle(this.particleContainer, {
        x: Math.random() * this.width + xOffset,
        y: -particleSize,
        mass: Math.random() * massAmp + minMass,
        texture: this.createCircleTexture(particleSize / 2, color, 1),
        delay: (yRange - (particleData.y - minY)) * delayScale + Math.random() * delayRand,
      }));
    }
  }

  createCircleTexture(radius, color, alpha) {
    const graphics = new Graphics();
    graphics.beginFill(color, alpha);
    graphics.drawCircle(0, 0, radius);
    graphics.endFill();
    const texture = this.renderer.generateTexture(graphics);
    graphics.clear();
    graphics.destroy();
    return texture;
  }

  calculateScale() {
    const rootRect = this.rootEl.getBoundingClientRect();
    this.scale = this.width / rootRect.width;
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
    const rootRect = this.rootEl.getBoundingClientRect();
    this.mouseVector.set(e.clientX - rootRect.left, e.clientY - rootRect.top);
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
