import * as PIXI from 'pixi.js';

import Vector from './vector';

export default class Particle {
  constructor(container, {
    x, y, mass = 1, texture, delay,
  }) {
    this.position = new Vector(x, y);
    this.velocity = new Vector(0, 0);
    this.acceleration = new Vector(0, 0);
    this.force = new Vector(0, 0);
    this.mass = mass;
    this.target = this.position.clone();

    this.waitFrames = delay * 60; // * FPS
    this.waiting = this.waitFrames > 0;

    if (!container) return;
    this.createSprite(container, { texture });
  }

  createSprite(container, { texture }) {
    this.sprite = new PIXI.Sprite(texture);
    this.sprite.anchor.set(0.5);
    this.sprite.position.set(this.position.x, this.position.y);
    container.addChild(this.sprite);
  }

  addForce(force) {
    if (!force) return;
    this.force.add(force);
  }

  setTarget(target) {
    this.target = target;
  }

  getForceToTarget() {
    if (!this.target) return null;

    const force = Vector.subtract(this.target, this.position);
    force.multiply(0.04);

    return force;
  }

  getMouseForce(mousePos) {
    const force = Vector.subtract(mousePos, this.position);
    const distance = force.value();
    force.normalize();
    const invDist = (120 / distance);
    const quadDist = (invDist * invDist);
    const lessQuadDist = quadDist - 0.04;
    const mult = lessQuadDist < 0 ? 0 : lessQuadDist * 0.8;
    force.multiply(-mult);

    return force;
  }

  update(delta) {
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

  render() {
    if (!this.sprite) return;
    this.sprite.position.set(this.position.x, this.position.y);
  }
}
