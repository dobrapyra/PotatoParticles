# PotatoParticles
Particles effect by dobrapyra.

Demo: [https://dobrapyra.github.io/PotatoParticles/](https://dobrapyra.github.io/PotatoParticles/)

---

## Usage

### JS

#### Standalone library

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/pixi.js/5.2.0/pixi.min.js"></script>
<script src="./dist/potato-particles.min.js"></script>
```

#### ES6 module

##### Install
```bash
npm install --save potatoparticles
```

##### Import
```js
import PotatoParticles from 'potatoparticles';
```

---

#### Initialize
```js
new PotatoParticles({
  imageEl: document.getElementById('heroImage'),
  pixelSize: 4,
  particleSize: 2,
  mouseInteraction: true,
  pixelFilter: function(pixel) {
    return !(pixel.r > 0.95 || pixel.g > 0.95 || pixel.b > 0.95);
  },
  pixelMap: function(pixel) {
    return { a: 1 };
  },
  particleInit: function(particle, shared) {
    return {
      x: Math.random() * shared.width + (shared.avgX - shared.halfWidth),
      y: -shared.particleSize,
      delay: (
        ((shared.rangeY - (particle.y - shared.minY)) * (2 / shared.rangeY))
        + (Math.random() * shared.delayRand)
      ),
    };
  },
});
```

---

### HTML
Example HTML

```html
<div class="hero">
  <img id="heroImage" src="./public/git.png" />
</div>
```

---

### CSS
Example CSS

```css
.hero {
  position: relative;
  display: block;
  width: 100%;
  height: auto;
  border: 1px solid gray;
}

.hero > img {
  visibility: hidden;
}

.hero > img ,
.hero > canvas {
  display: block;
  width: 100%;
  height: auto;
}
```

---

> by dobrapyra
