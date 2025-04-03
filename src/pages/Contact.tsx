import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin, Facebook } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <div className="container mx-auto py-16 px-4">
          <h1 className="text-3xl md:text-5xl font-pixel font-bold text-bukal-primary text-center mb-8 drop-shadow-[2px_2px_0px_rgba(0,0,0,0.3)]">
            Contact <span className="text-bukal-accent">Us</span>
          </h1>
          
          <div className="retro-box max-w-4xl mx-auto mb-16">
            <div className="text-center p-6">
              <p className="text-2xl font-pixel text-bukal-primary mb-4">
                Please contact us any time!
              </p>
              <p className="text-xl mb-8">
                We would love to hear from you!
              </p>
              <p className="text-lg font-medium text-bukal-accent mb-8 font-pixel">
                For general inquiries, donations, and volunteer opportunities
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center retro-box">
                  <div className="w-16 h-16 bg-bukal-primary rounded-full flex items-center justify-center mb-4">
                    <Mail className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-pixel font-bold text-bukal-primary mb-2">Email Us</h3>
                  <a href="mailto:menozaangelita693@gmail.com" className="text-bukal-accent hover:underline">
                    menozaangelita693@gmail.com
                  </a>
                </div>
                
                <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center retro-box">
                  <div className="w-16 h-16 bg-bukal-accent rounded-full flex items-center justify-center mb-4">
                    <Phone className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-pixel font-bold text-bukal-primary mb-2">Call Us</h3>
                  <a href="tel:09178221322" className="text-bukal-accent hover:underline">
                    0917-822-1322
                  </a>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center retro-box">
                  <div className="w-16 h-16 bg-bukal-primary rounded-full flex items-center justify-center mb-4">
                    <Facebook className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-pixel font-bold text-bukal-primary mb-2">Follow Us</h3>
                  <p className="text-bukal-accent">Bukal ng Buhay Foundation</p>
                </div>
                
                <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center retro-box">
                  <div className="w-16 h-16 bg-bukal-accent rounded-full flex items-center justify-center mb-4">
                    <MapPin className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-pixel font-bold text-bukal-primary mb-2">Visit Us</h3>
                  <p className="text-bukal-accent text-center">
                    #403, Brgy Malamig, Bustos, Bulacan, Philippines
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Map Section */}
          <div className="overflow-hidden rounded-xl retro-box max-w-4xl mx-auto mb-16">
            <div className="bg-bukal-primary text-white py-3 px-6 font-pixel">
              <h2 className="text-2xl font-bold">Find Us</h2>
            </div>
            <div className="p-6">
              <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden">
                <iframe
                  className="w-full h-72"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3855.3975091013227!2d120.90896287569057!3d14.935522674833717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396520e85ac5e65%3A0xf7d23b3c49392932!2sBrgy%20Malamig%2C%20Bustos%2C%20Bulacan!5e0!3m2!1sen!2sph!4v1710175656989!5m2!1sen!2sph"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
