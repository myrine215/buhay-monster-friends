import * as React from 'react';
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Home, Users, Phone, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  // Close mobile menu when window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  return (
    <nav className="bg-bukal-primary text-white py-2 md:py-3 px-3 md:px-4 rounded-b-xl border-4 border-bukal-accent shadow-md sticky top-0 z-50 relative overflow-visible h-auto min-h-[70px] flex items-center">
      {/* Pixel-style decorations - hidden on mobile for performance */}
      <div className="absolute top-0 right-0 w-12 h-12 bg-bukal-accent opacity-30 hidden md:block" style={{clipPath: "polygon(100% 0, 0 0, 100% 100%)"}}></div>
      <div className="absolute bottom-0 left-0 w-12 h-12 bg-bukal-accent opacity-30 hidden md:block" style={{clipPath: "polygon(0 100%, 0 0, 100% 100%)"}}></div>
      
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-lg border-4 border-bukal-accent flex items-center justify-center mr-2 md:mr-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]">
              <span className="text-bukal-primary text-xl md:text-2xl font-bold font-cartoon">B</span>
            </div>
            <span className="font-cartoon text-lg md:text-2xl font-bold drop-shadow-[2px_2px_0px_rgba(0,0,0,0.3)] truncate max-w-[120px] md:max-w-none">
              Bukal ng Buhay
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="flex items-center hover:text-bukal-accent bg-bukal-secondary/60 px-3 py-2 rounded-lg border-2 border-white/30 transition-all hover:scale-105">
              <Home className="mr-1 h-4 w-4" />
              <span>Home</span>
            </Link>
            <Link to="/about" className="flex items-center hover:text-bukal-accent bg-bukal-secondary/60 px-3 py-2 rounded-lg border-2 border-white/30 transition-all hover:scale-105">
              <Users className="mr-1 h-4 w-4" />
              <span>About</span>
            </Link>
            <Link to="/contact" className="flex items-center hover:text-bukal-accent bg-bukal-secondary/60 px-3 py-2 rounded-lg border-2 border-white/30 transition-all hover:scale-105">
              <Phone className="mr-1 h-4 w-4" />
              <span>Contact</span>
            </Link>
            <Link to="/donate">
              <Button className="bg-bukal-accent hover:bg-amber-400 text-white font-bold py-2 px-4 rounded-lg border-4 border-white/30 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] transform transition-all duration-300 hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.2)]">
                <Heart className="mr-1 h-5 w-5" />
                <span>Donate</span>
              </Button>
            </Link>
          </div>
          
          {/* Mobile Menu Button - improved touch target */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden focus:outline-none bg-bukal-secondary/80 p-2 rounded-lg border-2 border-white/30 w-10 h-10 flex items-center justify-center"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        
        {/* Mobile Navigation - Fixed positioning to ensure it stays visible */}
        {isOpen && (
          <div className="md:hidden mt-3 bg-bukal-secondary border-4 border-white/30 rounded-xl p-3 animate-accordion-down shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] fixed left-3 right-3 z-[100]">
            <div className="flex flex-col space-y-3">
              <Link 
                to="/" 
                className="flex items-center p-2 rounded-lg bg-bukal-primary/80 border-2 border-white/20 hover:bg-bukal-primary hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <Home className="mr-2 h-5 w-5" />
                <span>Home</span>
              </Link>
              <Link 
                to="/about" 
                className="flex items-center p-2 rounded-lg bg-bukal-primary/80 border-2 border-white/20 hover:bg-bukal-primary hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <Users className="mr-2 h-5 w-5" />
                <span>About Us</span>
              </Link>
              <Link 
                to="/contact" 
                className="flex items-center p-2 rounded-lg bg-bukal-primary/80 border-2 border-white/20 hover:bg-bukal-primary hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <Phone className="mr-2 h-5 w-5" />
                <span>Contact Us</span>
              </Link>
              <Link 
                to="/donate" 
                onClick={() => setIsOpen(false)}
                className="block"
              >
                <Button 
                  className="w-full bg-bukal-accent hover:bg-amber-400 text-white font-bold py-2 px-4 rounded-lg border-4 border-white/30 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] transform transition-all duration-300 hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.2)] text-center"
                >
                  <Heart className="mr-2 h-5 w-5 inline-block" />
                  <span>Donate</span>
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
