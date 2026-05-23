import React from 'react';
import SlowFrameHero from '../components/SlowFrameHero';
import WhoWeAre from '../components/WhoWeAre';
import CinematicStory from '../components/CinematicStory';
import FocusAreas from '../components/FocusAreas';
import Impact from '../components/Impact';
import Programmes from '../components/Programmes';
import Gallery from '../components/Gallery';
import WhySupport from '../components/WhySupport';
import GetInvolved from '../components/GetInvolved';
import Donation from '../components/Donation';
import Blog from '../components/Blog';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <>
      <SlowFrameHero />
      <WhoWeAre />
      <CinematicStory />
      <FocusAreas />
      <Impact />
      <Programmes />
      <Gallery />
      <WhySupport />
      <GetInvolved />
      <Donation />
      <Blog />
      <Contact />
    </>
  );
}
