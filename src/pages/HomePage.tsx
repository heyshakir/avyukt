import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { LocationBar } from '../components/home/LocationBar';
import { CategoryScroller } from '../components/home/CategoryScroller';
import { PopularPicks } from '../components/home/PopularPicks';
import { WhyChooseUs } from '../components/home/WhyChooseUs';
import { SpecialOffers } from '../components/home/SpecialOffers';
import { AboutSection } from '../components/home/AboutSection';
import { GallerySection } from '../components/home/GallerySection';
import { Testimonials } from '../components/home/Testimonials';
import { QuickContact } from '../components/home/QuickContact';

export const HomePage: React.FC = () => {
  return (
    <div className="space-y-2 sm:space-y-4">
      <HeroSection />
      <LocationBar />
      <CategoryScroller />
      <PopularPicks />
      <WhyChooseUs />
      <SpecialOffers />
      <AboutSection />
      <GallerySection />
      <Testimonials />
      <QuickContact />
    </div>
  );
};
