import React from 'react';
import HeroSection from '../components/ui/HeroSection';
import AboutSection from '../components/ui/AboutSection';
import MissionVisionSection from '../components/ui/MissionVisionSection';
import ValuesSection from '../components/ui/ValuesSection';
import CTASection from '../components/ui/CTASection';

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <MissionVisionSection />
      <ValuesSection />
      <CTASection />
    </div>
  );
};

export default HomePage;
