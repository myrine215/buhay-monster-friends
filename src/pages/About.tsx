
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Users } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <div className="container mx-auto py-16 px-4">
          <h1 className="text-3xl md:text-5xl font-cartoon font-bold text-bukal-primary text-center mb-12">
            About <span className="text-bukal-accent">Us</span>
          </h1>
          
          {/* Mission & Vision Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="cartoon-card h-full">
              <div className="bg-bukal-primary text-white py-3 px-6 rounded-t-xl">
                <h2 className="text-2xl font-cartoon font-bold">MISSION</h2>
              </div>
              <div className="p-6">
                <p className="text-lg">
                  Our mission is to empower and guide children in their holistic development. We are committed to nurturing their physical, emotional, and intellectual growth while fostering a deep awareness of God's love and providence in their lives. Through dedicated care and mentorship, we aim to instill in them the intrinsic value of life and to assist in the formation of an upright conscience. Our holistic approach seeks to lay the foundation for resilient, compassionate individuals who are attuned to their potential and the positive impact they can make in the world.
                </p>
              </div>
            </div>
            
            <div className="cartoon-card h-full">
              <div className="bg-bukal-accent text-white py-3 px-6 rounded-t-xl">
                <h2 className="text-2xl font-cartoon font-bold">VISION</h2>
              </div>
              <div className="p-6">
                <p className="text-lg">
                  In our vision, we see a future where holistically formed children, thriving in all aspects of their being, stand as living testaments to productivity and resilience. They embody the hope of the future generation, equipped with the skills, values, and determination to contribute positively to society. At Bukal ng Buhay Foundation Inc., we aspire to foster a legacy where each child's holistic development serves as a beacon, illuminating a path toward a brighter and more promising future for generations to come.
                </p>
              </div>
            </div>
          </div>
          
          {/* Founder Section */}
          <div className="cartoon-card mb-16">
            <div className="bg-bukal-primary text-white py-3 px-6 rounded-t-xl">
              <h2 className="text-2xl font-cartoon font-bold">Our Founder</h2>
            </div>
            <div className="p-6">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-full md:w-1/3 flex flex-col items-center">
                  <div className="w-48 h-48 rounded-full bg-bukal-secondary/20 mb-4 flex items-center justify-center overflow-hidden">
                    <div className="w-40 h-40 bg-bukal-secondary/40 rounded-full flex items-center justify-center">
                      <Users className="w-24 h-24 text-bukal-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-cartoon font-bold text-bukal-primary">Nanay Letty</h3>
                  <p className="text-bukal-accent font-medium">Angelita Mendoza</p>
                </div>
                <div className="w-full md:w-2/3">
                  <p className="text-lg mb-4">
                    The mission of Bukal ng Buhay Foundation, Inc., began when a former nun, Angelita Mendoza, known as Nanay Letty, heard Jesus' teaching "If you love me, feed my lambs" during a church service in San Nicolas Parish in Quezon City. Three street children approached her afterward, begging for money but instead, she brought them to her home to feed and care for them.
                  </p>
                  <p className="text-lg mb-4">
                    Later, Letty discovered that the children were living in a squalid area and unable to attend school due to extreme poverty. She visited their families and offered to send the children to school and provide them with food. Months later, more children came to Bukal ng Buhay, including a widowed with five children struggling to feed them.
                  </p>
                  <p className="text-lg">
                    Eventually, Letty and other ex-nuns prayed for guidance and established the Bukal ng Buhay Foundation Inc., with support from friends and family. In 2004, they built Bahay Kalinga for the children, which was blessed by the priest in 2005. Bukal ng Buhay now provides residential homes and education for abandoned, indigent, and neglected children.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Our Wards Section */}
          <div className="cartoon-card mb-16">
            <div className="bg-bukal-primary text-white py-3 px-6 rounded-t-xl">
              <h2 className="text-2xl font-cartoon font-bold">Our Wards</h2>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                {[1, 2, 3].map((ward) => (
                  <div key={ward} className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center">
                    <div className="w-24 h-24 rounded-full bg-bukal-secondary/20 mb-4 flex items-center justify-center">
                      <Users className="w-12 h-12 text-bukal-primary" />
                    </div>
                    <h3 className="text-xl font-cartoon font-bold text-bukal-primary mb-2">Ward {ward}</h3>
                    <p className="text-bukal-accent">Ward</p>
                    <p className="text-gray-700">Name</p>
                  </div>
                ))}
              </div>
              
              <div className="text-center max-w-3xl mx-auto">
                <p className="text-lg mb-4">
                  Our goal at Bukal ng Buhay Foundation Inc. is to educate and cultivate productive, self-reliant children who embody respect for God, for others, and for themselves. We strive to empower them to realize their fullest potential, fostering a holistic development that enables them to attain the fullness of life.
                </p>
                <p className="text-lg">
                  Through comprehensive education, mentorship, and a values-driven approach, we aim to shape resilient individuals who contribute positively to society and embrace a meaningful, purposeful existence.
                </p>
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

export default About;
