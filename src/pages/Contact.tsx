import * as React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin, Facebook, Calendar, DollarSign, Users } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <div className="container mx-auto py-16 px-4">
          <h1 className="text-3xl md:text-5xl font-cartoon font-bold text-bukal-primary text-center mb-8 drop-shadow-[2px_2px_0px_rgba(0,0,0,0.3)]">
            Contact <span className="text-bukal-accent">Us</span>
          </h1>
          
          <div className="retro-box max-w-4xl mx-auto mb-16">
            <div className="text-center p-6">
              <p className="text-2xl font-cartoon text-bukal-primary mb-4">
                Please contact us any time!
              </p>
              <p className="text-xl mb-8">
                We would love to hear from you!
              </p>
              <p className="text-lg font-medium text-bukal-accent mb-8 font-cartoon">
                For general inquiries, donations, and volunteer opportunities
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center retro-box">
                  <div className="w-16 h-16 bg-bukal-primary rounded-full flex items-center justify-center mb-4">
                    <Mail className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-cartoon font-bold text-bukal-primary mb-2">Email Us</h3>
                  <a href="mailto:menozaangelita693@gmail.com" className="text-bukal-accent hover:underline">
                    menozaangelita693@gmail.com
                  </a>
                </div>
                
                <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center retro-box">
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
                <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center retro-box">
                  <div className="w-16 h-16 bg-bukal-primary rounded-full flex items-center justify-center mb-4">
                    <Facebook className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-cartoon font-bold text-bukal-primary mb-2">Follow Us</h3>
                  <p className="text-bukal-accent">Bukal ng Buhay Foundation</p>
                </div>
                
                <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center retro-box">
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
          
          {/* Programs and Rates Section */}
          <div className="retro-box max-w-4xl mx-auto mb-16">
            <div className="bg-bukal-primary text-white py-3 px-6 font-cartoon">
              <h2 className="text-2xl font-bold">Our Programs and Rates</h2>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {/* Recollections */}
                <div className="bg-white rounded-xl shadow-md p-6 retro-box">
                  <div className="w-16 h-16 bg-bukal-primary rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-cartoon font-bold text-bukal-primary mb-4 text-center">Recollections</h3>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start">
                      <span className="text-bukal-accent mr-2">•</span>
                      <span>Day-long programs: ₱300 per person</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-bukal-accent mr-2">•</span>
                      <span>Includes: meals, materials, and facilitator</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-bukal-accent mr-2">•</span>
                      <span>Perfect for schools and parish groups</span>
                    </li>
                  </ul>
                  <p className="text-sm text-gray-600 mt-4">Minimum of 30 participants required</p>
                </div>
                
                {/* Retreats */}
                <div className="bg-white rounded-xl shadow-md p-6 retro-box">
                  <div className="w-16 h-16 bg-bukal-accent rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Calendar className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-cartoon font-bold text-bukal-primary mb-4 text-center">Retreats</h3>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start">
                      <span className="text-bukal-accent mr-2">•</span>
                      <span>2-3 day programs: ₱1,500 per person</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-bukal-accent mr-2">•</span>
                      <span>Includes: accommodation, meals, materials, and facilitator</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-bukal-accent mr-2">•</span>
                      <span>Intensive spiritual formation</span>
                    </li>
                  </ul>
                  <p className="text-sm text-gray-600 mt-4">Minimum of 20 participants required</p>
                </div>
                
                {/* Seminars */}
                <div className="bg-white rounded-xl shadow-md p-6 retro-box">
                  <div className="w-16 h-16 bg-bukal-primary rounded-full flex items-center justify-center mb-4 mx-auto">
                    <DollarSign className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-cartoon font-bold text-bukal-primary mb-4 text-center">Seminars</h3>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start">
                      <span className="text-bukal-accent mr-2">•</span>
                      <span>Half-day programs: ₱200 per person</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-bukal-accent mr-2">•</span>
                      <span>Includes: snacks, materials, and speaker</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-bukal-accent mr-2">•</span>
                      <span>Focused on specific topics (leadership, values, etc.)</span>
                    </li>
                  </ul>
                  <p className="text-sm text-gray-600 mt-4">Minimum of 50 participants required</p>
                </div>
              </div>
              
              <div className="bg-bukal-primary/10 p-6 rounded-xl mt-8">
                <h3 className="text-xl font-cartoon font-bold text-bukal-primary mb-4">Booking Information</h3>
                <p className="mb-4">To secure your booking, we require:</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="text-bukal-accent mr-2">•</span>
                    <span>50% initial payment two weeks before the scheduled date</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bukal-accent mr-2">•</span>
                    <span>Full payment on or before the day of the event</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bukal-accent mr-2">•</span>
                    <span>Rescheduling must be done at least 7 days before the event</span>
                  </li>
                </ul>
                <p className="text-bukal-accent font-cartoon">Contact us for customized programs and special group rates!</p>
              </div>
            </div>
          </div>
          
          {/* Location Section */}
          <div className="overflow-hidden rounded-xl retro-box max-w-4xl mx-auto mb-16">
            <div className="bg-bukal-primary text-white py-3 px-6 font-cartoon">
              <h2 className="text-2xl font-bold">Find Us</h2>
            </div>
            <div className="p-6">
              <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden mb-6">
                <iframe
                  className="w-full h-72"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3855.3975091013227!2d120.90896287569057!3d14.935522674833717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396520e85ac5e65%3A0xf7d23b3c49392932!2sBrgy%20Malamig%2C%20Bustos%2C%20Bulacan!5e0!3m2!1sen!2sph!4v1710175656989!5m2!1sen!2sph"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              
              <div className="text-center">
                <h3 className="text-xl font-cartoon font-bold text-bukal-primary mb-4">Bukal ng Buhay Foundation, Inc.</h3>
                <p className="mb-2">#403, Brgy Malamig, Bustos, Bulacan, Philippines</p>
                <p className="mb-6">Just 1 hour from Metro Manila</p>
                <p className="text-sm text-gray-600">
                  Our foundation is located in a peaceful rural setting, perfect for reflection and spiritual growth. 
                  We have complete facilities for retreats and seminars, including a chapel, conference rooms, 
                  dining area, and dormitories.
                </p>
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
