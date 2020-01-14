export default class ImageHelper {
  constructor() {
    this.isImageLoaded = false;

    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');
  }

  load(src) {
    this.isImageLoaded = false;

    return new Promise(resolve => {
      const tmpImageEl = new Image();
      tmpImageEl.onload = (e) => {
        const imageEl = e.target;
        this.onImageLoaded(imageEl);
        resolve(imageEl);
      };
      tmpImageEl.src = src;
    });
  }

  onImageLoaded(image) {
    this.image = image;
    this.width = this.image.width;
    this.height = this.image.height;

    this.isImageLoaded = true;
  }

  checkImage() {
    if (this.isImageLoaded) return true;

    // console.warn('Image is not loaded yet');
    return false;
  }

  imageToDots(props) {
    if (!this.checkImage()) return null;

    const image = this.image;
    const {
      width = image.width,
      height = image.height,
      pixelSize = 1,
      pixelFilter = pixel => (pixel.a >= 0.4),
    } = props;

    const canvasWidth = Math.ceil(width / pixelSize);
    const canvasHeight = Math.ceil(height / pixelSize);

    this.canvas.setAttribute('width', canvasWidth);
    this.canvas.setAttribute('height', canvasHeight);

    return this.imageToData(image, {
      canvasWidth, canvasHeight, pixelSize, pixelFilter,
    });
  }

  imageToData(image, props) {
    const {
      canvasWidth,
      canvasHeight,
      pixelSize,
      pixelFilter,
    } = props;

    this.ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    this.drawImageCover(image, canvasWidth, canvasHeight);

    const imageData = this.ctx.getImageData(0, 0, canvasWidth, canvasHeight).data;

    const maxChanVal = 255;
    const allChannels = 4;
    const chanR = 0;
    const chanG = 1;
    const chanB = 2;
    const chanA = 3;

    const data = [];
    for (let y = 0; y < canvasHeight; y++) {
      for (let x = 0; x < canvasWidth; x++) {
        const index = (y * canvasWidth + x) * allChannels;

        const pixel = {
          x: x * pixelSize,
          y: y * pixelSize,
          r: (imageData[index + chanR] / maxChanVal),
          g: (imageData[index + chanG] / maxChanVal),
          b: (imageData[index + chanB] / maxChanVal),
          a: (imageData[index + chanA] / maxChanVal),
        };

        if (!pixelFilter(pixel)) continue;

        data.push(pixel);
      }
    }

    return data;
  }

  drawImageCover(img, width, height) {
    const scale = Math.min(width / img.width, height / img.height);
    const size = {
      width: img.width * scale,
      height: img.height * scale,
    };
    const pos = {
      x: (width - size.width) / 2,
      y: (height - size.height) / 2,
    };
    this.ctx.drawImage(img, 0, 0, img.width, img.height, pos.x, pos.y, size.width, size.height);
  }
}
