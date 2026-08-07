import React from 'react';
import SlowFrameHero from '../components/SlowFrameHero';
import WhoWeAre from '../components/WhoWeAre';

import FocusAreas from '../components/FocusAreas';

import Programmes from '../components/Programmes';
import Gallery from '../components/Gallery';

import GetInvolved from '../components/GetInvolved';
import Donation from '../components/Donation';
import Blog from '../components/Blog';
import Interviews from '../components/Interviews';
import YouthSpotlight from '../components/YouthSpotlight';

export default function Home() {
  return (
    <>
      <SlowFrameHero />
      <WhoWeAre />

      <FocusAreas />

      <Interviews />
      <YouthSpotlight />
      <Programmes />
      <Gallery />

      <GetInvolved />
      <Donation />
      <Blog />
    </>
  );
}
