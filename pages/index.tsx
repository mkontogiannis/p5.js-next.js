import Head from 'next/head';
import MySketch from '../components/MySketch';

export default function Index() {
  return (
    <>
      <Head>
        <title>A p5js Nextjs/React Boilerplate</title>
      </Head>
      <MySketch />;
    </>
  );
}
