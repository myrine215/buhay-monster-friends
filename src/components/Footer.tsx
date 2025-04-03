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
      {/* Simple cloud shapes */}
      <div className="absolute inset-0">
        <div className="absolute w-32 h-16 bg-white/10 rounded-full" style={{ left: '10%', top: '20%' }}></div>
        <div className="absolute w-40 h-20 bg-white/10 rounded-full" style={{ left: '40%', top: '30%' }}></div>
        <div className="absolute w-28 h-14 bg-white/10 rounded-full" style={{ left: '70%', top: '25%' }}></div>
        <div className="absolute w-36 h-18 bg-white/10 rounded-full" style={{ left: '20%', top: '40%' }}></div>
        <div className="absolute w-24 h-12 bg-white/10 rounded-full" style={{ left: '60%', top: '35%' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 max-w-4xl mx-auto">
          <div className="text-center md:text-left">
            <h3 className="font-cartoon font-bold text-xl mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-bukal-accent transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-bukal-accent transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-bukal-accent transition-colors">Contact Us</Link></li>
              <li><Link to="/donate" className="hover:text-bukal-accent transition-colors">Donate</Link></li>
            </ul>
          </div>
          
          <div className="text-center md:text-left">
            <h3 className="font-cartoon font-bold text-xl mb-4">Contact</h3>
            <address className="not-italic">
              <p>#403, Brgy Malamig</p>
              <p>Bustos, Bulacan, Philippines</p>
              <p className="mt-2">menozaangelita693@gmail.com</p>
              <p>0917-822-1322</p>
            </address>
          </div>
          
          <div className="text-center md:text-left">
            <h3 className="font-cartoon font-bold text-xl mb-4">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-4">
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
        
        <div className="mt-8 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Bukal ng Buhay Foundation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
