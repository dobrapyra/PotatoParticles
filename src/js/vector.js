export default class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static add(vectorA, vectorB) {
    const vectorOut = vectorA.clone();
    vectorOut.add(vectorB);
    return vectorOut;
  }

  static subtract(vectorA, vectorB) {
    const vectorOut = vectorA.clone();
    vectorOut.subtract(vectorB);
    return vectorOut;
  }

  static multiply(vector, n) {
    const vectorOut = vector.clone();
    vectorOut.multiply(n);
    return vectorOut;
  }

  static divide(vector, n) {
    const vectorOut = vector.clone();
    vectorOut.divide(n);
    return vectorOut;
  }

  static roundAxis(axis) {
    return Math.round(axis * 1e5) / 1e5;
  }

  set(x, y) {
    this.x = x;
    this.y = y;
  }

  setX(x) {
    this.x = x;
  }

  setY(y) {
    this.y = y;
  }

  add(vector) {
    this.x = Vector.roundAxis(this.x + vector.x);
    this.y = Vector.roundAxis(this.y + vector.y);
  }

  subtract(vector) {
    this.x = Vector.roundAxis(this.x - vector.x);
    this.y = Vector.roundAxis(this.y - vector.y);
  }

  multiply(n) {
    this.x = Vector.roundAxis(this.x * n);
    this.y = Vector.roundAxis(this.y * n);
  }

  divide(n) {
    this.x = Vector.roundAxis(this.x / n);
    this.y = Vector.roundAxis(this.y / n);
  }

  value() {
    return Math.sqrt((this.x ** 2) + (this.y ** 2));
  }

  normalize() {
    const value = this.value();

    if (value !== 0) {
      this.x /= value;
      this.y /= value;
    } else {
      this.x = 0;
      this.y = 0;
    }
  }

  clone() {
    return new Vector(this.x, this.y);
  }
}
