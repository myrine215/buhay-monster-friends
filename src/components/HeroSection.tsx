
import React from 'react';
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative py-16 md:py-24 px-4 overflow-hidden">
      {/* Game-style background */}
      <div className="absolute inset-0 bg-bukal-background z-0">
        <div className="absolute inset-0 bg-repeat opacity-20" 
             style={{backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234CAF50' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"}}></div>
        
        {/* Background image - stylized to look like a 2008 game background */}
        <div className="absolute inset-0 opacity-30 bg-center bg-cover" 
             style={{backgroundImage: "url('https://images.unsplash.com/photo-1559668715-4b33346a9b3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')"}}></div>
        
        {/* Overlay grid pattern like old pixel games */}
        <div className="absolute inset-0 bg-repeat opacity-10" 
             style={{backgroundImage: "url('data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M0 0h20v20H0V0zm1 1h18v18H1V1z'/%3E%3C/g%3E%3C/svg%3E')"}}></div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-bukal-secondary rounded-full opacity-60 animate-float"></div>
      <div className="absolute -bottom-5 right-10 w-16 h-16 bg-bukal-accent rounded-full opacity-40 animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-40 right-20 w-12 h-12 bg-bukal-primary rounded-full opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-20 left-20 w-8 h-8 bg-bukal-primary opacity-30 pixel-border animate-pixel-pulse" style={{ animationDelay: '0.5s' }}></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <div className="mb-6 relative inline-block">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden border-4 border-bukal-primary mx-auto relative rounded-full">
              <img 
                src="https://images.unsplash.com/photo-1501854140801-50d01698950b" 
                alt="Green landscape" 
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 border-4 border-white/30 rounded-full pixelated"></div>
            </div>
            <div className="absolute -top-3 -right-3 bg-white rounded-full w-10 h-10 flex items-center justify-center border-2 border-bukal-accent pixel-border">
              <span className="text-bukal-primary text-xl font-bold">❤️</span>
            </div>
          </div>
          <h1 className="text-3xl md:text-5xl font-pixel font-bold text-bukal-primary mb-6 drop-shadow-[2px_2px_0px_rgba(0,0,0,0.3)]">
            Help Change <span className="text-bukal-accent">A Child's</span> World
          </h1>
          <div className="mb-8 retro-box bg-white/90 mx-4 md:mx-auto backdrop-blur-sm p-6">
            <p className="text-lg md:text-xl font-pixel">
              God doesn't call you to help all 153,000,000 orphans worldwide. But you can help one. 
              And for that one child, you can change the world.
            </p>
            <p className="mt-4 text-lg md:text-xl">
              Orphans are among the most vulnerable people in the world. 
              God calls us to care for these children who are close to His heart.
            </p>
          </div>
          <Button className="retro-button font-pixel text-lg px-8 py-6 animate-bounce-slight">
            <Heart className="mr-2 h-6 w-6" fill="white" />
            <span>Make a Difference Today</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
