
import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import VideoSection from '@/components/VideoSection';
import GallerySection from '@/components/GallerySection';
import SupportSection from '@/components/SupportSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main>
        <HeroSection />
        <VideoSection />
        <GallerySection />
        <SupportSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
