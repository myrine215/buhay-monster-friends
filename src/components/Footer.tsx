
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-bukal-primary text-white py-12 rounded-t-3xl border-t-4 border-bukal-secondary">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mr-3 border-4 border-bukal-accent">
                <span className="text-bukal-primary text-3xl font-cartoon font-bold">B</span>
              </div>
            </div>
            <h2 className="text-2xl md:text-3xl font-cartoon font-bold">
              Bukal ng Buhay Foundation
            </h2>
            <div className="mt-4 bg-bukal-primary/40 p-4 rounded-xl backdrop-blur-sm">
              <p className="text-xl">Reaching Orphans for 21 Years</p>
              <p className="text-lg">Bringing Joy & Purpose for the future.</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl mb-8">
            <div className="text-center">
              <h3 className="font-cartoon font-bold text-xl mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="hover:text-bukal-accent transition-colors">Home</Link></li>
                <li><Link to="/about" className="hover:text-bukal-accent transition-colors">About Us</Link></li>
                <li><Link to="/contact" className="hover:text-bukal-accent transition-colors">Contact Us</Link></li>
              </ul>
            </div>
            
            <div className="text-center">
              <h3 className="font-cartoon font-bold text-xl mb-4">Contact</h3>
              <address className="not-italic">
                <p>123 Charity Lane</p>
                <p>Manila, Philippines</p>
                <p className="mt-2">contact@bukalbuhay.org</p>
                <p>+63 123 456 7890</p>
              </address>
            </div>
            
            <div className="text-center">
              <h3 className="font-cartoon font-bold text-xl mb-4">Follow Us</h3>
              <div className="flex justify-center space-x-4">
                <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/40 transition-colors">
                  <span className="text-xl">📱</span>
                </a>
                <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/40 transition-colors">
                  <span className="text-xl">📘</span>
                </a>
                <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/40 transition-colors">
                  <span className="text-xl">📸</span>
                </a>
              </div>
            </div>
          </div>
          
          <div className="flex items-center">
            <Heart className="text-bukal-accent h-5 w-5 mr-2" fill="#FFC107" />
            <p>&copy; 2023 Bukal ng Buhay Foundation. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
