import * as React from 'react';
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-[calc(100vh-90px)] flex items-center justify-center py-0 px-4 overflow-hidden mt-0">
      {/* Game-style background */}
      <div className="absolute inset-0 bg-bukal-background z-0">
        {/* Background patterns for game-like feel - simplified for better performance */}
        <div className="absolute inset-0 bg-repeat opacity-10" 
             style={{backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%234CAF50' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4z'/%3E%3C/g%3E%3C/svg%3E')"}}></div>
        
        {/* Background image - stylized to look like a 2008 game background */}
        <div className="absolute inset-0 opacity-30 bg-center bg-cover" 
             style={{backgroundImage: "url('/media/Hero.png')"}}></div>
        
        {/* Overlay grid pattern - simplified */}
        <div className="absolute inset-0 bg-repeat opacity-5" 
             style={{backgroundImage: "url('data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M0 0h20v20H0V0z'/%3E%3C/g%3E%3C/svg%3E')"}}></div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-bukal-secondary rounded-full opacity-60 animate-float"></div>
      <div className="absolute -bottom-5 right-10 w-16 h-16 bg-bukal-accent rounded-full opacity-40 animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-40 right-20 w-12 h-12 bg-bukal-primary rounded-full opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-20 left-20 w-8 h-8 bg-bukal-primary opacity-30 animate-pixel-pulse" style={{ animationDelay: '0.5s' }}></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mt-0">
          <div className="mb-6 relative inline-block">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden border-4 border-bukal-primary mx-auto relative rounded-full">
              <img 
                src="/media/media.jpg" 
                alt="Logo" 
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 border-4 border-white/30 rounded-full"></div>
            </div>
            <div className="absolute -top-3 -right-3 bg-white rounded-full w-10 h-10 flex items-center justify-center border-2 border-bukal-accent">
              <span className="text-bukal-primary text-xl font-bold">❤️</span>
            </div>
          </div>
          <h1 className="text-3xl md:text-5xl font-cartoon font-bold text-bukal-primary mb-6 drop-shadow-[2px_2px_0px_rgba(0,0,0,0.3)]">
            Help Change <span className="text-bukal-accent">A Child's</span> World
          </h1>
          <div className="mb-8 bg-white/90 mx-4 md:mx-auto backdrop-blur-sm p-6 rounded-xl retro-box">
            <p className="text-lg md:text-xl font-cartoon">
              God doesn't call you to help all 153,000,000 orphans worldwide. But you can help one. 
              And for that one child, you can change the world.
            </p>
            <p className="mt-4 text-lg md:text-xl">
              Orphans are among the most vulnerable people in the world. 
              God calls us to care for these children who are close to His heart.
            </p>
          </div>
          <Link to="/donate">
            <Button className="retro-button font-cartoon text-lg px-8 py-6 animate-bounce-slight">
              <Heart className="mr-2 h-6 w-6" fill="white" />
              <span>Make a Difference Today</span>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
