import * as React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

const Footer = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    // Check on mount
    checkMobile();
    
    // Add listener for resize
    window.addEventListener('resize', checkMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  return (
    <footer className="bg-bukal-primary text-white py-12 rounded-t-3xl border-t-4 border-bukal-secondary relative overflow-hidden">
      {/* Animated Clouds - Only show on desktop for better performance */}
      {!isMobile && (
        <>
          <div className="footer-cloud" style={{ left: '10%', animationDuration: '25s', animationDelay: '0s' }}></div>
          <div className="footer-cloud" style={{ left: '35%', animationDuration: '22s', animationDelay: '2s' }}></div>
          <div className="footer-cloud" style={{ left: '70%', animationDuration: '24s', animationDelay: '4s' }}></div>
        </>
      )}
      
      <div className="container mx-auto px-4 relative z-10">
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
                <li><Link to="/donate" className="hover:text-bukal-accent transition-colors">Donate</Link></li>
              </ul>
            </div>
            
            <div className="text-center">
              <h3 className="font-cartoon font-bold text-xl mb-4">Contact</h3>
              <address className="not-italic">
                <p>#403, Brgy Malamig</p>
                <p>Bustos, Bulacan, Philippines</p>
                <p className="mt-2">menozaangelita693@gmail.com</p>
                <p>0917-822-1322</p>
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
