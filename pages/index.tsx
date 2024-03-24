import { mySketch } from '../components/MySketch';
import { NextReactP5Wrapper } from '@p5-wrapper/next';

export default function Index() {
  return <NextReactP5Wrapper sketch={mySketch} />;
}
