import * as React from 'react';

/**
 * RetroGameEffects component to add nostalgic 2000s game elements to the site
 */
const RetroGameEffects: React.FC = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [bgMusicPlaying, setBgMusicPlaying] = React.useState(false);
  const audioRef = React.useRef<HTMLAudioElement | null>(null);
  
  // Add click sound effect function
  const playClickSound = React.useCallback(() => {
    try {
      const clickSound = new Audio();
      clickSound.volume = 0.2;
      // Short base64 encoded click sound
      clickSound.src = 'data:audio/wav;base64,UklGRlQFAABXQVZFZm10IBAAAAABAAEARKwAAESsAAABAAgAZGF0YTAFAACAgICAgICAgICAgICAgICAgICAgICBgYGBgoGCgoKDg4OEhISFhYWGhoaHh4eIiIiJiYmKioqLi4uMjIyNjY2Ojo6Pj4+QkJCRkZGSkpKTk5OUlJSVlZWWlpaXl5eYmJiZmZmampqbm5ucnJydnZ2enp6fn5+goKChoaGioqKjo6OkpKSlpaWmpqanp6eoqKipqamqqqqrq6usrKytra2urq6vr6+wsLCxsbGysrKzs7O0tLS1tbW2tra3t7e4uLi5ubm6urq7u7u8vLy9vb2+vr6/v7/AwMDBwcHCwsLDw8PExMTFxcXGxsbHx8fIyMjJycnKysrLy8vMzMzNzc3Ozs7Pz8/Q0NDR0dHS0tLT09PU1NTV1dXW1tbX19fY2NjZ2dna2trb29vc3Nzd3d3e3t7f39/g4ODh4eHi4uLj4+Pk5OTl5eXm5ubn5+fo6Ojp6enq6urr6+vs7Ozt7e3u7u7v7+/w8PDx8fHy8vLz8/P09PT19fX29vb39/f4+Pj5+fn6+vr7+/v8/Pz9/f3+/v7///+AgICAgICAgICAgICAgICAgICAgICBgYGBgoGCgoKDg4OEhISFhYWGhoaHh4eIiIiJiYmKioqLi4uMjIyNjY2Oj';
      clickSound.play().catch(error => {
        console.log("Browser blocked click sound autoplay");
      });
    } catch (error) {
      console.log("Browser doesn't support audio playback");
    }
  }, []);

  // Toggle background music function
  const toggleBackgroundMusic = React.useCallback(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio();
      // Short base64 encoded music loop
      audioRef.current.src = 'data:audio/mp3;base64,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BoZBoFAMAy8xpAoylpNqGQVQiMAhQQqLQAJQcYOhc2yN2BBQdGQJADCQ0FwFMLAwCKAcx4DkACALGAwcEQYDmEgKFgGPgwFB8GAgFC4IAgWFjAJBICXwTEBgETJAEIwHpBzIKCpeGAoUEBeGCRkBwAHgwdGFgCxhoFIAiGQCGgyVGxMLDoydA0AgbAYDCEQAMYNgcJDAASGAxEBQQiC6GDQDC4IBwxMi4MTTEUAAoKIwBMBAowODD+FACJRKHDpyCiYUGlGOpoZkgIHDDoEEJqYRAaAHgGYTCJgcOA8KmJQUZBIRoDHA8YLBIKDwGFB4BgUZGIxh2DAQcAgaYPAqMAcYZBQCBBcNCgBAQwzBDJoZAhEwADgQAGGAABAVTQtKwCYFgxeC3GDBPBQVMIgElRNSMAQSLDOYRCQqAQEFCowOCDIXKLAEAT///EAAYlDhSGgANCQBRIJmCwQaUCZZFRwSMMAQxP///+ypCEjTAIJgMAmsIgAjguZHARYDWBMnBAMIgILmKgeMQgIwcBUSOp5AQNPQcBDokAb8mAQGYUBAYQGhUIJAZNC0GGQQXAwJHQQKANuXEigoxPEP///zThEAAkBRAAsYRAFBYUJCoDGSoEGB46CBhECRgKBooEGrBCbr///0KAYDoA0ARgOA4YFgHAQQGYCgHiA4MtKiKm5hWjRlgC5gsCBgOARg6ExhkBZ0B6H////MAA2A5QBCqIE0wFgARBYCAKAphIFAwBmLIZGEYA//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+1GAAAA/8AAAIAAANIAAAAQAAAJFoAAAiAAAG+AAAACEAAANIAAAAQAAAaQAAAAgAAA0gAAABAAABpAAAACAAACAAAAAAAAA==';
      audioRef.current.volume = 0.15;
      audioRef.current.loop = true;
    }
    
    if (bgMusicPlaying) {
      audioRef.current.pause();
      setBgMusicPlaying(false);
    } else {
      audioRef.current.play().catch(() => {
        console.log("Browser blocked background music autoplay");
      });
      setBgMusicPlaying(true);
    }
  }, [bgMusicPlaying]);

  // Handle clicks to play sound
  React.useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      playClickSound();
      
      // Create click effect animation
      const clickEffect = document.createElement('div');
      clickEffect.className = 'pixel-click-effect';
      clickEffect.style.left = `${event.clientX}px`;
      clickEffect.style.top = `${event.clientY}px`;
      document.body.appendChild(clickEffect);
      
      // Remove the effect element after animation completes
      setTimeout(() => {
        if (document.body.contains(clickEffect)) {
          document.body.removeChild(clickEffect);
        }
      }, 1000);
    };
    
    document.addEventListener('click', handleClick);
    
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [playClickSound]);

  React.useEffect(() => {
    // Create cursor trail effect (typical of 2000s flash games)
    const cursorTrail = document.getElementById('cursor-trail');
    const dots: HTMLDivElement[] = [];
    const maxDots = 6; // Reduced max dots for faster movement
    
    if (cursorTrail) {
      const updateCursorTrail = (e: MouseEvent) => {
        const dot = document.createElement('div');
        dot.className = 'absolute w-2 h-2 bg-bukal-accent rounded-full transform -translate-x-1/2 -translate-y-1/2 opacity-80';
        dot.style.left = `${e.clientX}px`;
        dot.style.top = `${e.clientY}px`;
        cursorTrail.appendChild(dot);
        dots.push(dot);
        
        // Fade out and remove excess dots faster
        if (dots.length > maxDots) {
          const oldDot = dots.shift();
          if (oldDot) {
            oldDot.style.opacity = '0';
            setTimeout(() => {
              if (oldDot.parentNode === cursorTrail) {
                cursorTrail.removeChild(oldDot);
              }
            }, 150); // Reduced timeout for faster fading
          }
        }
        
        // Fade out remaining dots more quickly
        dots.forEach((d, i) => {
          d.style.opacity = (1 - i / maxDots * 1.5).toString(); // Faster opacity reduction
        });
      };
      
      window.addEventListener('mousemove', updateCursorTrail);
      
      // Clean up function
      return () => {
        window.removeEventListener('mousemove', updateCursorTrail);
        
        // Clean up any remaining dots
        while (cursorTrail.firstChild) {
          cursorTrail.removeChild(cursorTrail.firstChild);
        }
      };
    }
  }, []);
  
  // Simulate loading delay for the loading screen
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // Reduced from 2500ms to 1500ms for faster loading
    
    // Startup sound effect - load this only once the page is already visible
    try {
      // Only play the audio if the page is visible
      if (document.visibilityState === "visible") {
        const audio = new Audio();
        audio.volume = 0.2;
        // Shorter audio data for faster loading
        audio.src = 'data:audio/wav;base64,UklGRjoAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YRYAAAAAAP8MAhgBJAIQAfH+uvy++/76RPtm/Nv9j/9xAVIDEQVtBsQGMAbEBPoC6QCL/jX8FfpX+Fj3cvcx+In5WPvn/ZcAMQOsBUoHrAgRCVcIsAZMBIEBdf5e+277Y/qF+RH5Jvmv+Wj6a/u1/GD+KgARAyAGRQgnCvEKnQq0CJYFOwKd/kX7avl++J/3hfe++OX5u/rS/BH/cwGEA1sFvwZTBxUHGwY2BCICkP8Q/ZP7gfq0+VP6xPtK/Z3+7/9QAOUABwE2ATkBWwG1AAgAXf+3/Q==';
        audio.load(); // Preload the audio
        audio.play().catch(error => {
          console.log("Browser blocked audio autoplay, waiting for user interaction");
        });
      }
    } catch (error) {
      console.log("Browser doesn't support audio playback");
    }
    
    return () => clearTimeout(timer);
  }, []);
  
  // Window resize effect - flash the screen briefly
  React.useEffect(() => {
    const handleResize = () => {
      const flashOverlay = document.createElement('div');
      flashOverlay.className = 'screen-flash';
      document.body.appendChild(flashOverlay);
      
      setTimeout(() => {
        if (document.body.contains(flashOverlay)) {
          document.body.removeChild(flashOverlay);
        }
      }, 150);
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <React.Fragment>
      {/* Loading Screen */}
      {isLoading && (
        <div className="fixed inset-0 bg-bukal-primary z-[9999] flex flex-col items-center justify-center">
          <div className="mb-8">
            <div className="w-32 h-32 overflow-hidden border-4 border-bukal-accent rounded-xl relative pixelated">
              <img 
                src="/media/logo.png" 
                alt="Logo" 
                className="object-cover w-full h-full"
                onError={(e) => {
                  // Fallback if logo.png doesn't exist
                  const target = e.target as HTMLImageElement;
                  target.src = "/media/media.jpg";
                }}
              />
              <div className="absolute inset-0 border-4 border-white/30 rounded-xl"></div>
            </div>
          </div>
          <div className="text-white font-cartoon text-2xl mb-6">Bukal ng Buhay Foundation</div>
          <div className="w-64 h-5 bg-bukal-secondary/20 border-2 border-bukal-accent/70 rounded-md overflow-hidden mb-4">
            <div className="h-full animate-loading-progress bg-bukal-accent"></div>
          </div>
          <div className="flex space-x-2 mb-2">
            <div className="w-2 h-2 bg-white animate-ping delay-100"></div>
            <div className="w-2 h-2 bg-white animate-ping delay-200"></div>
            <div className="w-2 h-2 bg-white animate-ping delay-300"></div>
          </div>
          <div className="text-white font-mono text-sm animate-pulse mt-4">Press any key to continue...</div>
        </div>
      )}
      
      {/* Cursor effect */}
      <div id="cursor-trail" className="fixed top-0 left-0 pointer-events-none z-50" />
      
      {/* 2000s Decorative Elements - reduced number for better performance */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
        {/* Pixelated stars that twinkle occasionally - reduced to 3 */}
        <div className="absolute top-1/4 left-1/3 w-3 h-3 bg-yellow-300 opacity-70 animate-twinkle" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-3/4 left-1/5 w-2 h-2 bg-yellow-300 opacity-70 animate-twinkle" style={{ animationDelay: '0.7s' }} />
        <div className="absolute top-1/2 right-1/4 w-4 h-4 bg-yellow-300 opacity-70 animate-twinkle" style={{ animationDelay: '2.3s' }} />
        
        {/* Pixel clouds floating across the screen - reduced to 2 */}
        <div className="absolute top-20 -left-20 animate-float-slow">
          <div className="pixel-cloud w-24 h-16 bg-white opacity-20" />
        </div>
        <div className="absolute top-3/4 -right-20 animate-float-slow" style={{ animationDelay: '15s' }}>
          <div className="pixel-cloud w-32 h-20 bg-white opacity-20" />
        </div>
        
        {/* Retro game UI elements */}
        <div className="absolute top-4 left-4 p-1 bg-bukal-primary/30 border-2 border-white/20 rounded-lg hidden md:block">
          <div className="flex items-center">
            <div className="w-4 h-4 bg-bukal-accent rounded-sm animate-pixel-pulse mr-1" />
            <div className="w-12 h-2 bg-white/40 rounded-sm overflow-hidden">
              <div className="h-full w-8 bg-bukal-accent animate-health-bar" />
            </div>
          </div>
        </div>
        
        {/* Only keep one pixel corner decoration */}
        <div className="absolute top-0 right-0 w-20 h-20" style={{ 
          backgroundImage: "url('data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h4v4H0V0zm4 4h4v4H4V4zm4-4h4v4H8V0zm4 4h4v4h-4V4zm4-4h4v4h-4V0z' fill='%234CAF50' fill-opacity='0.2' fill-rule='evenodd'/%3E%3C/svg%3E')",
          backgroundRepeat: 'no-repeat'
        }} />
        
        {/* "Loading..." text that occasionally appears for nostalgia */}
        <div className="fixed bottom-8 right-8 bg-black/50 px-3 py-1 rounded-md border border-white/20 animate-loading-flash hidden md:block">
          <span className="text-sm text-green-400 font-mono">Loading...</span>
        </div>
      </div>
      
      {/* Add retro game-like sidebar navigation dots */}
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-3 z-40 hidden md:flex">
        <a href="#top" className="w-3 h-3 bg-bukal-primary rounded-sm opacity-60 hover:opacity-100 transition-opacity" />
        <a href="#about" className="w-3 h-3 bg-bukal-primary rounded-sm opacity-60 hover:opacity-100 transition-opacity" />
        <a href="#gallery" className="w-3 h-3 bg-bukal-primary rounded-sm opacity-60 hover:opacity-100 transition-opacity" />
        <a href="#video" className="w-3 h-3 bg-bukal-primary rounded-sm opacity-60 hover:opacity-100 transition-opacity" />
        <a href="#contact" className="w-3 h-3 bg-bukal-primary rounded-sm opacity-60 hover:opacity-100 transition-opacity" />
      </div>
      
      {/* Game status bar at the bottom */}
      <div className="fixed bottom-0 left-0 w-full h-6 bg-bukal-primary/20 backdrop-blur-sm border-t border-bukal-primary/30 hidden md:flex items-center px-4 justify-between z-30">
        <div className="text-xs font-mono text-bukal-primary/70">SCORE: 1337</div>
        <div className="text-xs font-mono text-bukal-primary/70">LIVES: 3</div>
        <div className="text-xs font-mono text-bukal-primary/70 animate-pixel-blink">PRESS SPACE TO CONTINUE</div>
      </div>
      
      {/* Music toggle button */}
      <button
        onClick={toggleBackgroundMusic}
        className="fixed bottom-16 right-4 z-40 bg-bukal-primary text-white rounded-full w-10 h-10 flex items-center justify-center border-2 border-white/30 hover:bg-bukal-accent transition-colors shadow-md"
        aria-label={bgMusicPlaying ? "Pause Music" : "Play Music"}
      >
        {bgMusicPlaying ? "🔊" : "🔈"}
      </button>
    </React.Fragment>
  );
};

export default RetroGameEffects; 