import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <div className="container mx-auto py-16 px-4">
          <h1 className="text-3xl md:text-5xl font-cartoon font-bold text-bukal-primary text-center mb-8 drop-shadow-[2px_2px_0px_rgba(0,0,0,0.3)]">
            Contact <span className="text-bukal-accent">Us</span>
          </h1>
          
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-center mb-16">
            We'd love to hear from you! Whether you have questions about our programs, want to volunteer, or need more information, our team is here to help.
          </p>

          {/* Contact Information */}
          <div className="overflow-hidden rounded-xl retro-box max-w-4xl mx-auto mb-16">
            <div className="bg-bukal-primary text-white py-3 px-6 font-cartoon">
              <h2 className="text-2xl font-bold">Get in Touch</h2>
            </div>
            <div className="p-6">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-bukal-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="h-8 w-8 text-bukal-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Email</h3>
                  <p className="text-bukal-muted">menozaangelita693@gmail.com</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-bukal-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="h-8 w-8 text-bukal-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Phone</h3>
                  <p className="text-bukal-muted">0917-822-1322</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-bukal-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="h-8 w-8 text-bukal-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Address</h3>
                  <p className="text-bukal-muted">#403, Brgy Malamig, Bustos, Bulacan, Philippines</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="overflow-hidden rounded-xl retro-box max-w-4xl mx-auto mb-16">
            <div className="bg-bukal-accent text-white py-3 px-6 font-cartoon">
              <h2 className="text-2xl font-bold">Send Us a Message</h2>
            </div>
            <div className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-bukal-muted mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border-2 border-bukal-primary focus:outline-none focus:ring-2 focus:ring-bukal-accent"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-bukal-muted mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border-2 border-bukal-primary focus:outline-none focus:ring-2 focus:ring-bukal-accent"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-bukal-muted mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border-2 border-bukal-primary focus:outline-none focus:ring-2 focus:ring-bukal-accent"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-bukal-muted mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg border-2 border-bukal-primary focus:outline-none focus:ring-2 focus:ring-bukal-accent"
                    required
                  ></textarea>
                </div>
                
                <div className="text-center">
                  <Button type="submit" className="cartoon-button">
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </div>
              </form>
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
                <p className="text-sm text-bukal-muted">
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
