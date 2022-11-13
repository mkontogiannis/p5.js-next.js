import dynamic from 'next/dynamic';
import type P5 from 'p5';

const Sketch = dynamic(() => import('react-p5'), {
  ssr: false,
});

const logoWidth = 250;
const logoHeight = 114;
let logo: P5.Image;

const MySketch = () => {
  const drawImage = (p5: P5) => {
    p5.image(
      logo,
      p5.windowWidth / 2 - logoWidth / 2,
      p5.windowHeight / 2 - logoHeight / 2
    );
  };

  const preload = (p5: P5) => (logo = p5.loadImage('assets/p5js.svg'));

  const setup = (p5: P5, canvasParentRef: Element) => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
    drawImage(p5);
  };

  const draw = () => {};

  const windowResized = (p5: P5) => {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
    drawImage(p5);
  };

  return (
    <Sketch
      preload={preload}
      setup={setup}
      draw={draw}
      windowResized={windowResized}
    />
  );
};

export default MySketch;
