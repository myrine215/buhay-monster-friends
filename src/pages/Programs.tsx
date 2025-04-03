import React from 'react';
import { Button } from "@/components/ui/button";
import { Calendar, Users, BookOpen, Heart, Briefcase, Stethoscope, Utensils, GraduationCap, Star } from "lucide-react";
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Programs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <div className="container mx-auto py-16 px-4">
          <h1 className="text-3xl md:text-5xl font-cartoon font-bold text-bukal-primary text-center mb-8 drop-shadow-[2px_2px_0px_rgba(0,0,0,0.3)]">
            Our <span className="text-bukal-accent">Programs</span>
          </h1>
          
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-center mb-16">
            Bukal ng Buhay Foundation offers a variety of programs and services to support orphaned children and neighboring communities. Our programs focus on holistic development and sustainable growth.
          </p>

          {/* Programs and Rates Section */}
          <div className="overflow-hidden rounded-xl retro-box max-w-4xl mx-auto mb-16">
            <div className="bg-bukal-primary text-white py-3 px-6 font-cartoon">
              <h2 className="text-2xl font-bold">Our Programs and Rates</h2>
            </div>
            <div className="p-6">
              <div className="grid md:grid-cols-3 gap-8">
                {/* Recollections */}
                <div className="cartoon-card">
                  <div className="flex items-center mb-4">
                    <Calendar className="h-6 w-6 mr-2 text-bukal-primary" />
                    <h3 className="text-xl font-cartoon">Recollections</h3>
                  </div>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start">
                      <span className="text-bukal-primary mr-2">•</span>
                      <span>Day-long programs: ₱300 per person</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-bukal-primary mr-2">•</span>
                      <span>Includes: meals, materials, and facilitator</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-bukal-primary mr-2">•</span>
                      <span>Perfect for schools and parish groups</span>
                    </li>
                  </ul>
                  <p className="text-sm text-bukal-muted">Minimum of 30 participants required</p>
                </div>

                {/* Retreats */}
                <div className="cartoon-card">
                  <div className="flex items-center mb-4">
                    <BookOpen className="h-6 w-6 mr-2 text-bukal-primary" />
                    <h3 className="text-xl font-cartoon">Retreats</h3>
                  </div>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start">
                      <span className="text-bukal-primary mr-2">•</span>
                      <span>2-3 day programs: ₱1,500 per person</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-bukal-primary mr-2">•</span>
                      <span>Includes: accommodation, meals, materials, and facilitator</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-bukal-primary mr-2">•</span>
                      <span>Intensive spiritual formation</span>
                    </li>
                  </ul>
                  <p className="text-sm text-bukal-muted">Minimum of 20 participants required</p>
                </div>

                {/* Seminars */}
                <div className="cartoon-card">
                  <div className="flex items-center mb-4">
                    <Users className="h-6 w-6 mr-2 text-bukal-primary" />
                    <h3 className="text-xl font-cartoon">Seminars</h3>
                  </div>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start">
                      <span className="text-bukal-primary mr-2">•</span>
                      <span>Half-day programs: ₱200 per person</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-bukal-primary mr-2">•</span>
                      <span>Includes: snacks, materials, and speaker</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-bukal-primary mr-2">•</span>
                      <span>Focused on specific topics (leadership, values, etc.)</span>
                    </li>
                  </ul>
                  <p className="text-sm text-bukal-muted">Minimum of 50 participants required</p>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Information */}
          <div className="overflow-hidden rounded-xl retro-box max-w-4xl mx-auto mb-16">
            <div className="bg-bukal-accent text-white py-3 px-6 font-cartoon">
              <h2 className="text-2xl font-bold">Booking Information</h2>
            </div>
            <div className="p-6">
              <p className="mb-4">To secure your booking, we require:</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-bukal-primary mr-2">•</span>
                  <span>50% initial payment two weeks before the scheduled date</span>
                </li>
                <li className="flex items-start">
                  <span className="text-bukal-primary mr-2">•</span>
                  <span>Full payment on or before the day of the event</span>
                </li>
                <li className="flex items-start">
                  <span className="text-bukal-primary mr-2">•</span>
                  <span>Rescheduling must be done at least 7 days before the event</span>
                </li>
              </ul>
              <p className="mb-6">Contact us for customized programs and special group rates!</p>
              <div className="text-center">
                <Button className="cartoon-button">
                  <Heart className="mr-2 h-5 w-5" />
                  Inquire Now
                </Button>
              </div>
            </div>
          </div>

          {/* Services for Neighboring Communities */}
          <div className="overflow-hidden rounded-xl retro-box max-w-4xl mx-auto mb-16">
            <div className="bg-bukal-primary text-white py-3 px-6 font-cartoon">
              <h2 className="text-2xl font-bold">Services for Neighboring Communities</h2>
            </div>
            <div className="p-6">
              <p className="text-center mb-8 max-w-3xl mx-auto">
                Beyond caring for orphaned children, Bukal ng Buhay Foundation extends support to our neighboring communities through various programs:
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Livelihood Programs */}
                <div className="cartoon-card">
                  <div className="flex items-center mb-4">
                    <Briefcase className="h-6 w-6 mr-2 text-bukal-primary" />
                    <h3 className="text-xl font-cartoon">Livelihood Programs</h3>
                  </div>
                  <p className="mb-4">We provide skills training and micro-financing opportunities to help families establish sustainable sources of income.</p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-bukal-primary mr-2">•</span>
                      <span>Entrepreneurship workshops</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-bukal-primary mr-2">•</span>
                      <span>Skills development courses</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-bukal-primary mr-2">•</span>
                      <span>Small business start-up support</span>
                    </li>
                  </ul>
                </div>

                {/* Medical Missions */}
                <div className="cartoon-card">
                  <div className="flex items-center mb-4">
                    <Stethoscope className="h-6 w-6 mr-2 text-bukal-primary" />
                    <h3 className="text-xl font-cartoon">Medical Missions</h3>
                  </div>
                  <p className="mb-4">Regular medical missions provide free check-ups, medicines, and healthcare services to those who need them most.</p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-bukal-primary mr-2">•</span>
                      <span>Quarterly medical check-ups</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-bukal-primary mr-2">•</span>
                      <span>Medicine distribution</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-bukal-primary mr-2">•</span>
                      <span>Health education seminars</span>
                    </li>
                  </ul>
                </div>

                {/* Feeding Programs */}
                <div className="cartoon-card">
                  <div className="flex items-center mb-4">
                    <Utensils className="h-6 w-6 mr-2 text-bukal-primary" />
                    <h3 className="text-xl font-cartoon">Feeding Programs</h3>
                  </div>
                  <p className="mb-4">Our regular feeding programs provide nutritious meals to malnourished children and families in need.</p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-bukal-primary mr-2">•</span>
                      <span>Weekly community feeding</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-bukal-primary mr-2">•</span>
                      <span>Nutrition education for parents</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-bukal-primary mr-2">•</span>
                      <span>Food package distribution</span>
                    </li>
                  </ul>
                </div>

                {/* Educational Assistance */}
                <div className="cartoon-card">
                  <div className="flex items-center mb-4">
                    <GraduationCap className="h-6 w-6 mr-2 text-bukal-primary" />
                    <h3 className="text-xl font-cartoon">Educational Assistance</h3>
                  </div>
                  <p className="mb-4">We provide scholarships, school supplies, and tutorials to underprivileged students in our community.</p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-bukal-primary mr-2">•</span>
                      <span>School supplies distribution</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-bukal-primary mr-2">•</span>
                      <span>After-school tutorial programs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-bukal-primary mr-2">•</span>
                      <span>Scholarship opportunities</span>
                    </li>
                  </ul>
                </div>

                {/* Values Formation */}
                <div className="cartoon-card">
                  <div className="flex items-center mb-4">
                    <Star className="h-6 w-6 mr-2 text-bukal-primary" />
                    <h3 className="text-xl font-cartoon">Values Formation & Community Empowerment</h3>
                  </div>
                  <p className="mb-4">We promote spiritual growth, leadership training, and moral development through community-based programs that strengthen families and communities.</p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-bukal-primary mr-2">•</span>
                      <span>Family values workshops</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-bukal-primary mr-2">•</span>
                      <span>Leadership training for community leaders</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-bukal-primary mr-2">•</span>
                      <span>Community prayer gatherings</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-bukal-primary mr-2">•</span>
                      <span>Youth development activities</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="overflow-hidden rounded-xl retro-box max-w-4xl mx-auto mb-16">
            <div className="bg-bukal-accent text-white py-3 px-6 font-cartoon">
              <h2 className="text-2xl font-bold">Get Involved</h2>
            </div>
            <div className="p-6 text-center">
              <p className="text-xl mb-6 italic">"We believe that by strengthening communities, we create a better environment for all children to thrive."</p>
              <p className="mb-8">If you would like to get involved or support any of these community programs, please contact us. Your generosity can make a significant impact in the lives of many families.</p>
              <Button className="cartoon-button">
                <Heart className="mr-2 h-5 w-5" />
                Support Our Community Programs
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Programs; 