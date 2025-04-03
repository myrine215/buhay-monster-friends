import * as React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin, Facebook, Calendar, DollarSign, Users, Heart, BookOpen, Briefcase, Activity, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';

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
          
          {/* Community Services Section */}
          <div className="retro-box max-w-4xl mx-auto mb-16">
            <div className="bg-bukal-accent text-white py-3 px-6 font-cartoon">
              <h2 className="text-2xl font-bold">Services for Neighboring Communities</h2>
            </div>
            <div className="p-6">
              <p className="mb-6 text-lg">
                Beyond caring for orphaned children, Bukal ng Buhay Foundation extends support to our neighboring communities through various programs:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white rounded-xl shadow-md p-6 retro-box">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-bukal-primary rounded-full flex items-center justify-center mr-4">
                      <Briefcase className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-cartoon font-bold text-bukal-primary">Livelihood Programs</h3>
                  </div>
                  <p className="mb-3">
                    We provide skills training and micro-financing opportunities to help families establish sustainable sources of income.
                  </p>
                  <ul className="text-sm space-y-1">
                    <li>• Entrepreneurship workshops</li>
                    <li>• Skills development courses</li>
                    <li>• Small business start-up support</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-xl shadow-md p-6 retro-box">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-bukal-accent rounded-full flex items-center justify-center mr-4">
                      <Activity className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-cartoon font-bold text-bukal-primary">Medical Missions</h3>
                  </div>
                  <p className="mb-3">
                    Regular medical missions provide free check-ups, medicines, and healthcare services to those who need them most.
                  </p>
                  <ul className="text-sm space-y-1">
                    <li>• Quarterly medical check-ups</li>
                    <li>• Medicine distribution</li>
                    <li>• Health education seminars</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-xl shadow-md p-6 retro-box">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-bukal-primary rounded-full flex items-center justify-center mr-4">
                      <Heart className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-cartoon font-bold text-bukal-primary">Feeding Programs</h3>
                  </div>
                  <p className="mb-3">
                    Our regular feeding programs provide nutritious meals to malnourished children and families in need.
                  </p>
                  <ul className="text-sm space-y-1">
                    <li>• Weekly community feeding</li>
                    <li>• Nutrition education for parents</li>
                    <li>• Food package distribution</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-xl shadow-md p-6 retro-box">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-bukal-accent rounded-full flex items-center justify-center mr-4">
                      <BookOpen className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-cartoon font-bold text-bukal-primary">Educational Assistance</h3>
                  </div>
                  <p className="mb-3">
                    We provide scholarships, school supplies, and tutorials to underprivileged students in our community.
                  </p>
                  <ul className="text-sm space-y-1">
                    <li>• School supplies distribution</li>
                    <li>• After-school tutorial programs</li>
                    <li>• Scholarship opportunities</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-xl shadow-md p-6 retro-box md:col-span-2">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-bukal-primary rounded-full flex items-center justify-center mr-4">
                      <Lightbulb className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-cartoon font-bold text-bukal-primary">Values Formation & Community Empowerment</h3>
                  </div>
                  <p className="mb-3">
                    We promote spiritual growth, leadership training, and moral development through community-based programs that strengthen families and communities.
                  </p>
                  <ul className="text-sm space-y-1">
                    <li>• Family values workshops</li>
                    <li>• Leadership training for community leaders</li>
                    <li>• Community prayer gatherings</li>
                    <li>• Youth development activities</li>
                  </ul>
                </div>
              </div>
              
              <div className="text-center p-6 bg-bukal-primary/10 rounded-xl">
                <p className="text-lg font-cartoon text-bukal-primary mb-4">
                  "We believe that by strengthening communities, we create a better environment for all children to thrive."
                </p>
                <p className="mb-4">
                  If you would like to get involved or support any of these community programs, please contact us. Your generosity can make a significant impact in the lives of many families.
                </p>
                <Link to="/donate" className="inline-block">
                  <button className="bg-bukal-accent hover:bg-amber-400 text-white font-bold py-2 px-6 rounded-lg border-4 border-white/30 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] transform transition-all duration-300 hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.2)]">
                    <Heart className="inline-block mr-2 h-5 w-5" />
                    Support Our Community Programs
                  </button>
                </Link>
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
