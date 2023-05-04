import React from 'react';
import VideoHero from '../assets/video1.mp4';

const Hero = () => {
  return (
    <section>
      <div></div>
      <video src={VideoHero} muted autoPlay loop type='video/mp4'></video>
    </section>
  );
};

export default Hero;
