import { P5CanvasInstance, Sketch } from '@p5-wrapper/react';
import P5 from 'p5';

export const mySketch: Sketch = (p5: P5CanvasInstance) => {
  const logoWidth = 250;
  const logoHeight = 114;

  let logo: P5.Image;

  const drawImage = () => {
    p5.image(
      logo,
      p5.windowWidth / 2 - logoWidth / 2,
      p5.windowHeight / 2 - logoHeight / 2
    );
  };

  p5.preload = () => (logo = p5.loadImage('assets/p5js.svg'));

  p5.setup = () => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight);
    drawImage();
  };

  p5.draw = () => {};

  p5.windowResized = () => {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
    drawImage();
  };
};
