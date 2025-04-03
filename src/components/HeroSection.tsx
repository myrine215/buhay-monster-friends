import * as React from 'react';
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-[calc(100vh-90px)] flex items-center justify-center py-0 px-4 overflow-hidden mt-0">
      {/* Game-style background - optimized for performance */}
      <div className="absolute inset-0 bg-bukal-background z-0">
        {/* Background patterns - simplified for better mobile performance */}
        <div className="absolute inset-0 bg-repeat opacity-10 hidden md:block" 
             style={{backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%234CAF50' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4z'/%3E%3C/g%3E%3C/svg%3E')"}}></div>
        
        {/* Background image - optimized loading strategy */}
        <div className="absolute inset-0 opacity-30 bg-center bg-cover" 
             style={{backgroundImage: "url('/media/Hero.png')"}}
             loading="lazy"></div>
        
        {/* Overlay grid - only shown on desktop for better mobile performance */}
        <div className="absolute inset-0 bg-repeat opacity-5 hidden md:block" 
             style={{backgroundImage: "url('data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M0 0h20v20H0V0z'/%3E%3C/g%3E%3C/svg%3E')"}}></div>
      </div>
      
      {/* Decorative elements - reduced for mobile */}
      <div className="absolute top-10 left-10 w-16 md:w-20 h-16 md:h-20 bg-bukal-secondary rounded-full opacity-60 animate-float hidden md:block"></div>
      <div className="absolute -bottom-5 right-10 w-12 md:w-16 h-12 md:h-16 bg-bukal-accent rounded-full opacity-40 animate-float hidden md:block" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mt-0">
          <div className="mb-4 md:mb-6 relative inline-block">
            <div className="w-20 h-20 md:w-32 md:h-32 overflow-hidden border-4 border-bukal-primary mx-auto relative rounded-full">
              <img 
                src="/media/media.jpg" 
                alt="Logo" 
                className="object-cover w-full h-full"
                loading="eager"
              />
              <div className="absolute inset-0 border-4 border-white/30 rounded-full"></div>
            </div>
            <div className="absolute -top-2 -right-2 md:-top-3 md:-right-3 bg-white rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center border-2 border-bukal-accent">
              <span className="text-bukal-primary text-lg md:text-xl font-bold">❤️</span>
            </div>
          </div>
          <h1 className="text-2xl md:text-5xl font-cartoon font-bold text-bukal-primary mb-4 md:mb-6 drop-shadow-[2px_2px_0px_rgba(0,0,0,0.3)]">
            Help Change <span className="text-bukal-accent">A Child's</span> World
          </h1>
          <div className="mb-6 md:mb-8 bg-white/90 mx-0 md:mx-auto backdrop-blur-sm p-4 md:p-6 rounded-xl retro-box">
            <p className="text-base md:text-xl font-cartoon">
              God doesn't call you to help all 153,000,000 orphans worldwide. But you can help one. 
              And for that one child, you can change the world.
            </p>
            <p className="mt-3 md:mt-4 text-base md:text-xl">
              Orphans are among the most vulnerable people in the world. 
              God calls us to care for these children who are close to His heart.
            </p>
          </div>
          <Link to="/donate">
            <Button className="retro-button font-cartoon text-base md:text-lg px-6 py-4 md:px-8 md:py-6 animate-bounce-slight w-full md:w-auto">
              <Heart className="mr-2 h-5 w-5 md:h-6 md:w-6" fill="white" />
              <span>Make a Difference Today</span>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
