import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Heart, Gift, Users, Calendar } from "lucide-react";

const Donate = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <div className="container mx-auto py-16 px-4">
          <h1 className="text-3xl md:text-5xl font-pixel font-bold text-bukal-primary text-center mb-8 drop-shadow-[2px_2px_0px_rgba(0,0,0,0.3)]">
            Donate <span className="text-bukal-accent">Now</span>
          </h1>
          
          <div className="retro-box max-w-3xl mx-auto text-center mb-16">
            <div className="w-20 h-20 bg-bukal-primary rounded-full flex items-center justify-center mb-6 mx-auto pixel-border">
              <Heart className="h-10 w-10 text-white" fill="white" />
            </div>
            <p className="text-xl mb-6 font-pixel">
              Support the foundation, support the children
            </p>
            <p className="text-lg mb-8">
              Financial contributions, food, clothes, school supplies, and other essentials are always needed. Individuals and businesses can also sponsor a child's education or daily needs. Your generosity makes a difference—100% of your donation goes toward helping orphans thrive.
            </p>
          </div>
          
          {/* Donation Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            {/* One-Time Donation */}
            <div className="retro-box h-full flex flex-col animate-float">
              <div className="bg-bukal-primary text-white py-3 px-6 rounded-t-xl font-pixel">
                <h2 className="text-xl font-bold">One-Time Donation</h2>
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <div className="w-16 h-16 bg-bukal-secondary/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Gift className="h-8 w-8 text-bukal-primary" />
                  </div>
                  <p className="text-lg mb-6">
                    Make an immediate impact with a one-time donation to help children in need.
                  </p>
                </div>
                <Button className="retro-button w-full mt-4 font-pixel">
                  Donate Now
                </Button>
              </div>
            </div>
            
            {/* Monthly Giving */}
            <div className="retro-box h-full flex flex-col animate-float" style={{ animationDelay: '0.2s' }}>
              <div className="bg-bukal-accent text-white py-3 px-6 rounded-t-xl font-pixel">
                <h2 className="text-xl font-bold">Monthly Giving</h2>
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <div className="w-16 h-16 bg-bukal-secondary/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Calendar className="h-8 w-8 text-bukal-accent" />
                  </div>
                  <p className="text-lg mb-6">
                    Become a monthly donor and provide consistent support for our children.
                  </p>
                </div>
                <Button className="retro-button w-full mt-4 font-pixel">
                  Become a Monthly Donor
                </Button>
              </div>
            </div>
            
            {/* Sponsor a Child */}
            <div className="retro-box h-full flex flex-col animate-float" style={{ animationDelay: '0.4s' }}>
              <div className="bg-bukal-primary text-white py-3 px-6 rounded-t-xl font-pixel">
                <h2 className="text-xl font-bold">Sponsor a Child</h2>
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <div className="w-16 h-16 bg-bukal-secondary/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Users className="h-8 w-8 text-bukal-primary" />
                  </div>
                  <p className="text-lg mb-6">
                    Transform a child's life through education, healthcare, and daily support.
                  </p>
                </div>
                <Button className="retro-button w-full mt-4 font-pixel">
                  Sponsor a Child
                </Button>
              </div>
            </div>
          </div>
          
          {/* Other Ways to Give */}
          <div className="retro-box max-w-4xl mx-auto mb-16">
            <div className="bg-bukal-primary text-white py-3 px-6 rounded-t-xl font-pixel">
              <h2 className="text-2xl font-bold">Other Ways to Give</h2>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="retro-box p-4 bg-white">
                  <h3 className="text-xl font-pixel font-bold text-bukal-primary mb-3">Donate Goods</h3>
                  <p className="text-gray-700 mb-4">
                    We welcome donations of food, clothing, school supplies, hygiene products, and other essentials. Please contact us for current needs and drop-off information.
                  </p>
                </div>
                
                <div className="retro-box p-4 bg-white">
                  <h3 className="text-xl font-pixel font-bold text-bukal-primary mb-3">Corporate Partnership</h3>
                  <p className="text-gray-700 mb-4">
                    Partner with us as a corporation to make a larger impact. We offer various partnership opportunities for businesses looking to fulfill their social responsibility.
                  </p>
                </div>
                
                <div className="retro-box p-4 bg-white">
                  <h3 className="text-xl font-pixel font-bold text-bukal-primary mb-3">Volunteer</h3>
                  <p className="text-gray-700 mb-4">
                    Share your time and talents with our children. We need volunteers for tutoring, mentoring, facility maintenance, and special events.
                  </p>
                </div>
              </div>
              
              <div className="text-center mt-8">
                <Button className="retro-button font-pixel">
                  Contact Us to Learn More
                </Button>
              </div>
            </div>
          </div>
          
          {/* Banking Information */}
          <div className="retro-box max-w-4xl mx-auto mb-16">
            <div className="bg-bukal-accent text-white py-3 px-6 rounded-t-xl font-pixel">
              <h2 className="text-2xl font-bold">Banking Information</h2>
            </div>
            <div className="p-6 text-center">
              <p className="text-lg mb-4">For direct bank transfers, please use the following information:</p>
              
              <div className="retro-box p-6 max-w-md mx-auto bg-white">
                <p className="mb-2 font-pixel"><strong>Bank Name:</strong> Example Bank</p>
                <p className="mb-2"><strong>Account Name:</strong> Bukal ng Buhay Foundation Inc.</p>
                <p className="mb-2"><strong>Account Number:</strong> 1234-5678-9012-3456</p>
                <p><strong>Branch:</strong> Bulacan Branch</p>
              </div>
            </div>
          </div>
          
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-xl italic mb-8 font-pixel pixel-border inline-block px-4 py-2">
              "God doesn't call you to help all 153,000,000 orphans worldwide. But you can help one. And for that one child, you can change the world."
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Donate;
