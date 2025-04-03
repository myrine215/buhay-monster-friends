
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

const Donate = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <div className="container mx-auto py-16 px-4">
          <h1 className="text-3xl md:text-5xl font-cartoon font-bold text-bukal-primary text-center mb-8">
            Donate <span className="text-bukal-accent">Now</span>
          </h1>
          
          <div className="cartoon-card max-w-3xl mx-auto text-center">
            <div className="w-20 h-20 bg-bukal-primary rounded-full flex items-center justify-center mb-6 mx-auto">
              <Heart className="h-10 w-10 text-white" fill="white" />
            </div>
            <p className="text-xl mb-6">
              Your donation helps us provide care, education, and support for orphaned children in the Philippines.
            </p>
            <Button className="cartoon-button text-lg px-8 py-6">
              <span>Make a Donation</span>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Donate;
