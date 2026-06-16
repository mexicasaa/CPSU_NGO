import React from 'react';
import { useLocation } from 'react-router-dom';
import { db } from '../utils/db';

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
  const location = useLocation();
  const isPreview = new URLSearchParams(location.search).get('preview') === 'true';

  const sectionOrder = db.getHomeSectionOrder(isPreview);

  // Helper to determine if a section is visible in the settings
  const getVisible = (secId) => {
    // Focus, programs, involved, donation, blog, gallery, interviews are always visible or managed via their lists
    if (['focus', 'programs', 'donation', 'blog', 'gallery', 'interviews'].includes(secId)) {
      return true;
    }
    const sec = db.getHomeSection(secId, isPreview);
    return sec && sec.visible !== undefined ? sec.visible : true;
  };

  const sectionMap = {
    hero: getVisible('hero') && <SlowFrameHero key="hero" isPreview={isPreview} />,
    about: getVisible('about') && <WhoWeAre key="about" isPreview={isPreview} />,
    focus: <FocusAreas key="focus" isPreview={isPreview} />,
    interviews: <Interviews key="interviews" />,
    testimonial: getVisible('testimonial') && <YouthSpotlight key="testimonial" isPreview={isPreview} />,
    programs: <Programmes key="programs" isPreview={isPreview} />,
    gallery: <Gallery key="gallery" isPreview={isPreview} />,
    involved: getVisible('involved') && <GetInvolved key="involved" isPreview={isPreview} />,
    donation: <Donation key="donation" />,
    blog: <Blog key="blog" isPreview={isPreview} />
  };

  return (
    <>
      {sectionOrder.map(secId => sectionMap[secId] || null)}
    </>
  );
}
