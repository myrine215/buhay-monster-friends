import * as React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Heart, Gift, Calendar, Users } from "lucide-react";

const Donate = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <div className="container mx-auto py-16 px-4">
          <h1 className="text-3xl md:text-5xl font-cartoon font-bold text-bukal-primary text-center mb-8 drop-shadow-[2px_2px_0px_rgba(0,0,0,0.3)]">
            Donate <span className="text-bukal-accent">Now</span>
          </h1>
          
          <div className="retro-box max-w-4xl mx-auto text-center mb-16 rounded-xl p-6">
            <div className="w-20 h-20 bg-bukal-primary rounded-full flex items-center justify-center mb-6 mx-auto">
              <Heart className="h-10 w-10 text-white" fill="white" />
            </div>
            <p className="text-xl mb-6 font-cartoon">
              Support the foundation, support the children
            </p>
            <p className="text-lg mb-4">
              Financial contributions, food, clothes, school supplies, and other essentials are always needed. Individuals and businesses can also sponsor a child's education or daily needs. Your generosity makes a difference—100% of your donation goes toward helping orphans thrive.
            </p>
          </div>
          
          {/* Donation Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
            {/* One-Time Donation */}
            <div className="overflow-hidden rounded-xl retro-box h-full flex flex-col animate-float">
              <div className="bg-bukal-primary text-white py-3 px-6 font-cartoon">
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
                <Button className="retro-button w-full mt-4 font-cartoon">
                  Donate Now
                </Button>
              </div>
            </div>
            
            {/* Monthly Giving */}
            <div className="overflow-hidden rounded-xl retro-box h-full flex flex-col animate-float" style={{ animationDelay: '0.2s' }}>
              <div className="bg-bukal-accent text-white py-3 px-6 font-cartoon">
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
                <Button className="retro-button w-full mt-4 font-cartoon">
                  Become a Monthly Donor
                </Button>
              </div>
            </div>
            
            {/* Sponsor a Child */}
            <div className="overflow-hidden rounded-xl retro-box h-full flex flex-col animate-float" style={{ animationDelay: '0.4s' }}>
              <div className="bg-bukal-primary text-white py-3 px-6 font-cartoon">
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
                <Button className="retro-button w-full mt-4 font-cartoon">
                  Sponsor a Child
                </Button>
              </div>
            </div>
          </div>
          
          {/* Other Ways to Give */}
          <div className="overflow-hidden rounded-xl retro-box max-w-4xl mx-auto mb-16">
            <div className="bg-bukal-primary text-white py-3 px-6 font-cartoon">
              <h2 className="text-2xl font-bold">Other Ways to Give</h2>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="retro-box p-4 bg-white rounded-xl">
                  <h3 className="text-xl font-cartoon font-bold text-bukal-primary mb-3">Donate Goods</h3>
                  <p className="mb-4">
                    We welcome donations of food, clothing, school supplies, hygiene products, and other essentials. Please contact us for current needs and drop-off information.
                  </p>
                </div>
                
                <div className="retro-box p-4 bg-white rounded-xl">
                  <h3 className="text-xl font-cartoon font-bold text-bukal-primary mb-3">Corporate Partnership</h3>
                  <p className="mb-4">
                    Partner with us as a corporation to make a larger impact. We offer various partnership opportunities for businesses looking to fulfill their social responsibility.
                  </p>
                </div>
                
                <div className="retro-box p-4 bg-white rounded-xl">
                  <h3 className="text-xl font-cartoon font-bold text-bukal-primary mb-3">Volunteer</h3>
                  <p className="mb-4">
                    Share your time and talents with our children. We need volunteers for tutoring, mentoring, facility maintenance, and special events.
                  </p>
                </div>
              </div>
              
              <div className="text-center mt-8">
                <Button className="retro-button font-cartoon">
                  Contact Us to Learn More
                </Button>
              </div>
            </div>
          </div>
          
          {/* Banking Information */}
          <div className="overflow-hidden rounded-xl retro-box max-w-4xl mx-auto mb-16">
            <div className="bg-bukal-accent text-white py-3 px-6 font-cartoon">
              <h2 className="text-2xl font-bold">Donation Methods</h2>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Bank Transfer */}
                <div className="retro-box p-6 bg-white rounded-xl">
                  <h3 className="text-xl font-cartoon font-bold text-bukal-primary mb-4 text-center">Bank Transfer</h3>
                  <div className="mb-6">
                    <p className="mb-2 font-cartoon"><strong>Bank Name:</strong> BDO (Banco de Oro)</p>
                    <p className="mb-2"><strong>Account Name:</strong> Bukal ng Buhay Foundation Inc.</p>
                    <p className="mb-2"><strong>Account Number:</strong> 003840068391</p>
                    <p><strong>Branch:</strong> Bustos, Bulacan Branch</p>
                  </div>
                  <div className="bg-bukal-primary/10 p-3 rounded-md">
                    <p className="text-sm">Please email the transaction receipt to <span className="text-bukal-accent">menozaangelita693@gmail.com</span> with your name and contact details.</p>
                  </div>
                </div>

                {/* GCash */}
                <div className="retro-box p-6 bg-white rounded-xl">
                  <h3 className="text-xl font-cartoon font-bold text-bukal-primary mb-4 text-center">GCash</h3>
                  <div className="mb-6">
                    <p className="mb-2 font-cartoon"><strong>Account Name:</strong> Angelita Menoza</p>
                    <p className="mb-2"><strong>GCash Number:</strong> 0917-822-1322</p>
                    <p className="mb-2"><strong>Position:</strong> Foundation Director</p>
                  </div>
                  <div className="bg-bukal-primary/10 p-3 rounded-md">
                    <p className="text-sm">After sending your donation via GCash, please send a message to the same number with your name and details of your donation.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Tax Deduction Information */}
          <div className="overflow-hidden rounded-xl retro-box max-w-4xl mx-auto mb-16">
            <div className="bg-bukal-primary text-white py-3 px-6 font-cartoon">
              <h2 className="text-2xl font-bold">Tax Deductible Donations</h2>
            </div>
            <div className="p-6 text-center">
              <p className="text-lg mb-4">All donations to Bukal ng Buhay Foundation are tax-deductible.</p>
              <p className="mb-6">We will provide official receipts for all donations that can be used for tax purposes.</p>
              <p className="text-bukal-accent font-cartoon text-lg">100% of your donation goes directly to supporting the children in our care.</p>
              <div className="mt-6">
                <p className="text-sm text-gray-600">Bukal ng Buhay Foundation, Inc. is a registered non-profit organization with the Securities and Exchange Commission (SEC) and is accredited by the Department of Social Welfare and Development (DSWD).</p>
              </div>
            </div>
          </div>
          
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-xl italic mb-8 font-cartoon">
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
