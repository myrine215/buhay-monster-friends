import * as React from 'react';

const RetroGameEffects = () => {
  React.useEffect(() => {
    // Create cursor trail effect (typical of 2000s flash games)
    const cursorTrail = document.getElementById('cursor-trail');
    const dots: HTMLDivElement[] = [];
    const maxDots = 10;
    
    if (cursorTrail) {
      const updateCursorTrail = (e: MouseEvent) => {
        const dot = document.createElement('div');
        dot.className = 'absolute w-2 h-2 bg-bukal-accent rounded-full transform -translate-x-1/2 -translate-y-1/2 opacity-80';
        dot.style.left = `${e.clientX}px`;
        dot.style.top = `${e.clientY}px`;
        cursorTrail.appendChild(dot);
        dots.push(dot);
        
        // Fade out and remove excess dots
        if (dots.length > maxDots) {
          const oldDot = dots.shift();
          if (oldDot) {
            oldDot.style.opacity = '0';
            setTimeout(() => {
              if (oldDot.parentNode === cursorTrail) {
                cursorTrail.removeChild(oldDot);
              }
            }, 300);
          }
        }
        
        // Fade out remaining dots gradually
        dots.forEach((d, i) => {
          d.style.opacity = (1 - i / maxDots).toString();
        });
      };
      
      window.addEventListener('mousemove', updateCursorTrail);
      
      return () => {
        window.removeEventListener('mousemove', updateCursorTrail);
        
        // Clean up any remaining dots
        while (cursorTrail.firstChild) {
          cursorTrail.removeChild(cursorTrail.firstChild);
        }
      };
    }
  }, []);
  
  return (
    <React.Fragment>
      {/* Cursor effect - a small pixelated trail that follows the mouse */}
      <div id="cursor-trail" className="fixed top-0 left-0 pointer-events-none z-50" />
      
      {/* 2000s Decorative Elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
        {/* Pixelated stars that twinkle occasionally */}
        <div className="absolute top-1/4 left-1/3 w-3 h-3 bg-yellow-300 opacity-70 animate-twinkle" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-3/4 left-1/5 w-2 h-2 bg-yellow-300 opacity-70 animate-twinkle" style={{ animationDelay: '0.7s' }} />
        <div className="absolute top-1/2 right-1/4 w-4 h-4 bg-yellow-300 opacity-70 animate-twinkle" style={{ animationDelay: '2.3s' }} />
        
        {/* Pixel clouds floating across the screen */}
        <div className="absolute top-20 -left-20 animate-float-slow">
          <div className="pixel-cloud w-24 h-16 bg-white opacity-20" />
        </div>
        <div className="absolute top-3/4 -right-20 animate-float-slow" style={{ animationDelay: '15s' }}>
          <div className="pixel-cloud w-32 h-20 bg-white opacity-20" />
        </div>
        
        {/* Retro menu-like element */}
        <div className="absolute bottom-4 left-4 bg-bukal-primary bg-opacity-30 border-2 border-white/20 rounded-lg p-2 hidden md:block">
          <div className="w-4 h-4 bg-white/70 rounded-full animate-pulse" />
        </div>
        
        {/* Corner pixel decorations like old Flash games */}
        <div className="absolute top-0 right-0 w-16 h-16" style={{ 
          backgroundImage: "url('data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h4v4H0V0zm4 4h4v4H4V4zm4-4h4v4H8V0zm4 4h4v4h-4V4zm-8 8h4v4H4v-4zm8 0h4v4h-4v-4z' fill='%234CAF50' fill-opacity='0.2' fill-rule='evenodd'/%3E%3C/svg%3E')",
          backgroundRepeat: 'no-repeat'
        }} />
        
        <div className="absolute bottom-0 left-0 w-16 h-16" style={{ 
          backgroundImage: "url('data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 12h4v4H0v-4zm4-4h4v4H4V8zm4 4h4v4H8v-4zm4-4h4v4h-4V8zM0 0h4v4H0V0zm8 0h4v4H8V0zm-4 4h4v4H4V4zm8 0h4v4h-4V4z' fill='%23F9A825' fill-opacity='0.2' fill-rule='evenodd'/%3E%3C/svg%3E')",
          backgroundRepeat: 'no-repeat'
        }} />
      </div>
      
      {/* Add retro game-like sidebar navigation dots */}
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-3 z-40 hidden md:flex">
        <a href="#top" className="w-3 h-3 bg-bukal-primary rounded-full opacity-60 hover:opacity-100 transition-opacity" />
        <a href="#about" className="w-3 h-3 bg-bukal-primary rounded-full opacity-60 hover:opacity-100 transition-opacity" />
        <a href="#gallery" className="w-3 h-3 bg-bukal-primary rounded-full opacity-60 hover:opacity-100 transition-opacity" />
        <a href="#video" className="w-3 h-3 bg-bukal-primary rounded-full opacity-60 hover:opacity-100 transition-opacity" />
        <a href="#contact" className="w-3 h-3 bg-bukal-primary rounded-full opacity-60 hover:opacity-100 transition-opacity" />
      </div>
    </React.Fragment>
  );
};

export default RetroGameEffects; 