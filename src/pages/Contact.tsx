
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin, Facebook, Instagram } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <div className="container mx-auto py-16 px-4">
          <h1 className="text-3xl md:text-5xl font-cartoon font-bold text-bukal-primary text-center mb-8">
            Contact <span className="text-bukal-accent">Us</span>
          </h1>
          
          <div className="cartoon-card max-w-4xl mx-auto mb-16">
            <div className="text-center p-6">
              <p className="text-2xl font-cartoon text-bukal-primary mb-4">
                Please contact us any time!
              </p>
              <p className="text-xl mb-8">
                We would love to hear from you!
              </p>
              <p className="text-lg font-medium text-bukal-accent mb-8">
                For general inquiries, donations, and volunteer opportunities
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center">
                  <div className="w-16 h-16 bg-bukal-primary rounded-full flex items-center justify-center mb-4">
                    <Mail className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-cartoon font-bold text-bukal-primary mb-2">Email Us</h3>
                  <a href="mailto:menozaangelita693@gmail.com" className="text-bukal-accent hover:underline">
                    menozaangelita693@gmail.com
                  </a>
                </div>
                
                <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center">
                  <div className="w-16 h-16 bg-bukal-accent rounded-full flex items-center justify-center mb-4">
                    <Phone className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-cartoon font-bold text-bukal-primary mb-2">Call Us</h3>
                  <a href="tel:09178221322" className="text-bukal-accent hover:underline">
                    0917-822-1322
                  </a>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center">
                  <div className="w-16 h-16 bg-bukal-primary rounded-full flex items-center justify-center mb-4">
                    <Facebook className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-cartoon font-bold text-bukal-primary mb-2">Follow Us</h3>
                  <p className="text-bukal-accent">Bukal ng Buhay Foundation</p>
                </div>
                
                <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center">
                  <div className="w-16 h-16 bg-bukal-accent rounded-full flex items-center justify-center mb-4">
                    <MapPin className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-cartoon font-bold text-bukal-primary mb-2">Visit Us</h3>
                  <p className="text-bukal-accent text-center">
                    #403, Brgy Malamig, Bustos, Bulacan, Philippines
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Map Section */}
          <div className="cartoon-card max-w-4xl mx-auto mb-16">
            <div className="bg-bukal-primary text-white py-3 px-6 rounded-t-xl">
              <h2 className="text-2xl font-cartoon font-bold">Find Us</h2>
            </div>
            <div className="p-6">
              <div className="bg-bukal-secondary/20 h-72 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-bukal-primary mx-auto mb-4" />
                  <p className="text-lg font-medium">Map placeholder</p>
                  <p className="text-sm text-bukal-accent">#403, Brgy Malamig, Bustos, Bulacan, Philippines</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center text-2xl font-cartoon text-bukal-accent mb-8">
            Bringing Joy & Purpose for the future.
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
