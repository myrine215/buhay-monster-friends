
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <div className="container mx-auto py-16 px-4">
          <h1 className="text-3xl md:text-5xl font-cartoon font-bold text-bukal-primary text-center mb-8">
            Contact <span className="text-bukal-accent">Us</span>
          </h1>
          
          <div className="cartoon-card max-w-3xl mx-auto">
            <p className="text-lg mb-4">
              This is the Contact Us page for Bukal ng Buhay Foundation. The content for this page will be added soon.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
