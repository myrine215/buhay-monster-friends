
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Home, Users, Phone, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-bukal-primary text-white py-4 rounded-b-3xl border-b-4 border-bukal-secondary shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-3 border-2 border-bukal-accent">
              <span className="text-bukal-primary text-2xl font-cartoon font-bold">B</span>
            </div>
            <span className="font-cartoon text-xl md:text-2xl font-bold">Bukal ng Buhay Foundation</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="flex items-center hover:text-bukal-accent transition-colors">
              <Home className="mr-1 h-4 w-4" />
              <span>Home</span>
            </Link>
            <Link to="/about" className="flex items-center hover:text-bukal-accent transition-colors">
              <Users className="mr-1 h-4 w-4" />
              <span>About Us</span>
            </Link>
            <Link to="/contact" className="flex items-center hover:text-bukal-accent transition-colors">
              <Phone className="mr-1 h-4 w-4" />
              <span>Contact Us</span>
            </Link>
            <Button className="cartoon-button flex items-center">
              <Heart className="mr-1 h-5 w-5" />
              <span>Donate</span>
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden focus:outline-none"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 bg-bukal-secondary rounded-xl p-4 animate-accordion-down">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="flex items-center p-2 rounded-lg hover:bg-bukal-primary hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <Home className="mr-2 h-5 w-5" />
                <span>Home</span>
              </Link>
              <Link 
                to="/about" 
                className="flex items-center p-2 rounded-lg hover:bg-bukal-primary hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <Users className="mr-2 h-5 w-5" />
                <span>About Us</span>
              </Link>
              <Link 
                to="/contact" 
                className="flex items-center p-2 rounded-lg hover:bg-bukal-primary hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <Phone className="mr-2 h-5 w-5" />
                <span>Contact Us</span>
              </Link>
              <Button 
                className="cartoon-button flex items-center justify-center"
                onClick={() => setIsOpen(false)}
              >
                <Heart className="mr-2 h-5 w-5" />
                <span>Donate</span>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
