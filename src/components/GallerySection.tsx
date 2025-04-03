import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const GallerySection = () => {
  const [currentPage, setCurrentPage] = useState(0);
  
  // Using the IMG_5001-IMG_5009 images with correct file extensions
  const images = [
    {
      src: "/media/IMG_5001.JPG",
      alt: "Gallery Image 1"
    },
    {
      src: "/media/IMG_5002.JPG",
      alt: "Gallery Image 2"
    },
    {
      src: "/media/IMG_5003.JPG",
      alt: "Gallery Image 3"
    },
    {
      src: "/media/IMG_5004.JPG",
      alt: "Gallery Image 4"
    },
    {
      src: "/media/IMG_5005.JPG",
      alt: "Gallery Image 5"
    },
    {
      src: "/media/IMG_5006.JPG",
      alt: "Gallery Image 6"
    },
    {
      src: "/media/IMG_5007.JPG",
      alt: "Gallery Image 7"
    },
    {
      src: "/media/IMG_5008.JPG",
      alt: "Gallery Image 8"
    },
    {
      src: "/media/IMG_5009.JPG",
      alt: "Gallery Image 9"
    }
    // Removed IMG_50010.JPG as it doesn't exist in the media folder
  ];

  // Group images into pages of 3 for mobile, 9 for desktop
  const imagesPerPage = 9;
  const totalPages = Math.ceil(images.length / imagesPerPage);
  
  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };
  
  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  // Get current page of images
  const currentImages = images.slice(
    currentPage * imagesPerPage,
    (currentPage + 1) * imagesPerPage
  );

  return (
    <section className="py-16 px-4 relative" style={{
      backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%234CAF50' fill-opacity='0.15'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 20.83l2.83-2.83 1.41 1.41L1.41 22H0v-1.17zM0 3.07l2.83-2.83 1.41 1.41L1.41 4.24H0V3.07zM17.76 38.59l2.83-2.83 1.41 1.41-2.83 2.83h-1.41v-1.41zM17.76 20.83l2.83-2.83 1.41 1.41-2.83 2.83h-1.41v-1.41zM17.76 3.07l2.83-2.83 1.41 1.41-2.83 2.83h-1.41V3.07zM35.52 38.59l2.83-2.83 1.41 1.41-2.83 2.83h-1.41v-1.41zM35.52 20.83l2.83-2.83 1.41 1.41-2.83 2.83h-1.41v-1.41zM35.52 3.07l2.83-2.83 1.41 1.41-2.83 2.83h-1.41V3.07z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
    }}>
      <div className="container mx-auto">
        <div className="retro-box p-6 mb-12">
          <h2 className="text-3xl md:text-4xl font-cartoon font-bold text-center text-bukal-primary mb-3 pixelated drop-shadow-[2px_2px_0px_rgba(0,0,0,0.3)]">
            Our <span className="text-bukal-accent">Gallery</span>
          </h2>
          <p className="text-center text-xl mb-6 max-w-2xl mx-auto">
            Together, we can give orphaned children a brighter future
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-1">
            {currentImages.map((image, index) => (
              <div 
                key={index} 
                className="aspect-square relative group"
              >
                <div className="absolute inset-2 border-4 border-dashed border-bukal-primary opacity-0 group-hover:opacity-100 z-10 transition-opacity pointer-events-none"></div>
                <div className="retro-box p-2 aspect-square overflow-hidden h-full">
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-bukal-primary text-white p-2 opacity-0 group-hover:opacity-100 transition-opacity text-center truncate">
                  {image.alt}
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-6 space-x-4">
            <button 
              onClick={prevPage}
              className="retro-button flex items-center"
            >
              <ArrowLeft className="h-5 w-5 mr-1" />
              <span>Previous</span>
            </button>
            <div className="flex items-center space-x-2">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i)}
                  className={`w-4 h-4 rounded-full ${
                    i === currentPage ? "bg-bukal-accent" : "bg-bukal-secondary"
                  }`}
                />
              ))}
            </div>
            <button 
              onClick={nextPage}
              className="retro-button flex items-center"
            >
              <span>Next</span>
              <ArrowRight className="h-5 w-5 ml-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
