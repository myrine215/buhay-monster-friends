
import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const GallerySection = () => {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
      alt: "Green landscape"
    },
    {
      src: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3",
      alt: "Children playing"
    },
    {
      src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      alt: "Foundation activities"
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-cartoon font-bold text-center text-bukal-primary mb-3">
          Our <span className="text-bukal-accent">Gallery</span>
        </h2>
        <p className="text-center text-xl mb-12 max-w-2xl mx-auto">
          Together, we can give orphaned children a brighter future
        </p>
        
        <div className="relative">
          <div className="flex overflow-x-auto pb-8 space-x-6 snap-x scrollbar-none">
            {images.map((image, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 snap-center"
              >
                <div className="cartoon-card overflow-hidden h-64 md:h-80">
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-full object-cover rounded-xl transform transition-transform hover:scale-110"
                  />
                </div>
                <div className="mt-4 flex justify-center">
                  <span className="w-4 h-4 mx-1 rounded-full bg-bukal-secondary"></span>
                  <span className="w-4 h-4 mx-1 rounded-full bg-bukal-primary"></span>
                  <span className="w-4 h-4 mx-1 rounded-full bg-bukal-accent"></span>
                </div>
              </div>
            ))}
          </div>
          
          <button className="absolute top-1/2 left-2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md">
            <ArrowLeft className="h-6 w-6 text-bukal-primary" />
          </button>
          <button className="absolute top-1/2 right-2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md">
            <ArrowRight className="h-6 w-6 text-bukal-primary" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
