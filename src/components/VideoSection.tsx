import React, { useState } from 'react';

const VideoSection = () => {
  const [playing, setPlaying] = useState(false);
  
  const handlePlayVideo = () => {
    setPlaying(true);
  };

  // Google Drive direct link - converted from share link
  // Original: https://drive.google.com/file/d/1geY0YsYIQ5xFwCVIh0o9LSQWKF67KSpe/view?usp=drive_link
  // Converted to direct embed link
  const videoUrl = "https://drive.google.com/file/d/1geY0YsYIQ5xFwCVIh0o9LSQWKF67KSpe/preview";

  return (
    <section className="py-16 bg-gradient-to-b from-bukal-background to-bukal-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-cartoon font-bold text-center text-bukal-primary mb-12">
          See Our <span className="text-bukal-accent">Mission</span> in Action
        </h2>
        
        <div className="relative max-w-3xl mx-auto cartoon-card overflow-hidden">
          {/* Video Player */}
          <div className="relative pt-[56.25%] bg-gray-800 rounded-xl overflow-hidden">
            {playing ? (
              <iframe 
                className="absolute inset-0 w-full h-full"
                src={videoUrl}
                allow="autoplay"
                allowFullScreen
              ></iframe>
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <div 
                  className="text-white text-center cursor-pointer"
                  onClick={handlePlayVideo}
                >
                  <div className="w-20 h-20 bg-bukal-primary/80 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-bukal-primary transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="white">
                      <polygon points="5,3 19,12 5,21" />
                    </svg>
                  </div>
                  <p className="font-cartoon text-xl">Click to watch our story</p>
                </div>
              </div>
            )}
          </div>
          
          {/* Cartoon decorative elements */}
          <div className="absolute -top-4 -left-4 w-16 h-16 bg-bukal-accent rounded-full border-4 border-white"></div>
          <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-bukal-primary rounded-full border-4 border-white"></div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
