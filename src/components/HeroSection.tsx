
import React from 'react';
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="py-12 md:py-20 px-4 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-bukal-secondary rounded-full opacity-60 animate-float"></div>
      <div className="absolute bottom-10 right-10 w-16 h-16 bg-bukal-accent rounded-full opacity-40 animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-40 right-20 w-12 h-12 bg-bukal-primary rounded-full opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <div className="mb-6 relative inline-block">
            <img 
              src="https://images.unsplash.com/photo-1501854140801-50d01698950b" 
              alt="Green landscape" 
              className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-full border-4 border-bukal-primary mx-auto"
            />
            <div className="absolute -top-3 -right-3 bg-white rounded-full w-10 h-10 flex items-center justify-center border-2 border-bukal-accent">
              <span className="text-bukal-primary text-xl font-bold">❤️</span>
            </div>
          </div>
          <h1 className="text-3xl md:text-5xl font-cartoon font-bold text-bukal-primary mb-6">
            Help Change <span className="text-bukal-accent">A Child's</span> World
          </h1>
          <div className="mb-8 cartoon-card bg-white/90 mx-4 md:mx-auto backdrop-blur-sm">
            <p className="text-lg md:text-xl">
              God doesn't call you to help all 153,000,000 orphans worldwide. But you can help one. 
              And for that one child, you can change the world.
            </p>
            <p className="mt-4 text-lg md:text-xl">
              Orphans are among the most vulnerable people in the world. 
              God calls us to care for these children who are close to His heart.
            </p>
          </div>
          <Button className="cartoon-button text-lg px-8 py-6 animate-bounce-slight">
            <Heart className="mr-2 h-6 w-6" fill="white" />
            <span>Make a Difference Today</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
