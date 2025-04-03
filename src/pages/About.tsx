import * as React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Heart, BookOpen, Users, Lightbulb, HeartPulse, Star } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <div className="container mx-auto py-16 px-4">
          <h1 className="text-3xl md:text-5xl font-cartoon font-bold text-bukal-primary text-center mb-8 drop-shadow-[2px_2px_0px_rgba(0,0,0,0.3)]">
            About <span className="text-bukal-accent">Us</span>
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            {/* Mission */}
            <div className="retro-box bg-white/90 p-6 rounded-xl">
              <div className="bg-bukal-primary text-white py-2 px-4 rounded-lg mb-4 inline-block font-cartoon">
                <h2 className="text-2xl font-bold">MISSION</h2>
              </div>
              <p className="mb-4">
                Our mission is to empower and guide children in their holistic development. We are committed to nurturing their physical, emotional, and intellectual growth while fostering a deep awareness of God's love and providence in their lives.
              </p>
              <p>
                Through dedicated care and mentorship, we aim to instill in them the intrinsic value of life and to assist in the formation of an upright conscience. Our holistic approach seeks to lay the foundation for resilient, compassionate individuals who are attuned to their potential and the positive impact they can make in the world.
              </p>
            </div>
            
            {/* Vision */}
            <div className="retro-box bg-white/90 p-6 rounded-xl">
              <div className="bg-bukal-accent text-white py-2 px-4 rounded-lg mb-4 inline-block font-cartoon">
                <h2 className="text-2xl font-bold">VISION</h2>
              </div>
              <p className="mb-4">
                In our vision, we see a future where holistically formed children, thriving in all aspects of their being, stand as living testaments to productivity and resilience. They embody the hope of the future generation, equipped with the skills, values, and determination to contribute positively to society.
              </p>
              <p>
                At Bukal ng Buhay Foundation Inc., we aspire to foster a legacy where each child's holistic development serves as a beacon, illuminating a path toward a brighter and more promising future for generations to come.
              </p>
            </div>
          </div>
          
          {/* Our Programs */}
          <div className="overflow-hidden rounded-xl retro-box max-w-4xl mx-auto mb-16">
            <div className="bg-bukal-primary text-white py-3 px-6 font-cartoon">
              <h2 className="text-2xl font-bold">Our Programs</h2>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="flex flex-col space-y-2 bg-white p-5 rounded-lg border-2 border-bukal-primary/20 shadow-md">
                  <div className="flex items-center mb-2">
                    <Heart className="h-8 w-8 text-bukal-primary mr-3" />
                    <h3 className="text-xl font-bold text-bukal-primary font-cartoon">Orphanage and Child Care</h3>
                  </div>
                  <p>Providing a safe home, nutrition, healthcare, and emotional support for children in need. We create a loving environment where children can heal and grow.</p>
                </div>
                
                <div className="flex flex-col space-y-2 bg-white p-5 rounded-lg border-2 border-bukal-primary/20 shadow-md">
                  <div className="flex items-center mb-2">
                    <BookOpen className="h-8 w-8 text-bukal-accent mr-3" />
                    <h3 className="text-xl font-bold text-bukal-primary font-cartoon">Education & Scholarships</h3>
                  </div>
                  <p>Ensuring that children receive quality education, mentorship, and skills training to prepare them for a successful future and independence.</p>
                </div>
                
                <div className="flex flex-col space-y-2 bg-white p-5 rounded-lg border-2 border-bukal-primary/20 shadow-md">
                  <div className="flex items-center mb-2">
                    <Users className="h-8 w-8 text-bukal-primary mr-3" />
                    <h3 className="text-xl font-bold text-bukal-primary font-cartoon">Community Outreach</h3>
                  </div>
                  <p>Supporting families in underprivileged communities through training, employment assistance, and micro-financing opportunities.</p>
                </div>
                
                <div className="flex flex-col space-y-2 bg-white p-5 rounded-lg border-2 border-bukal-primary/20 shadow-md">
                  <div className="flex items-center mb-2">
                    <HeartPulse className="h-8 w-8 text-bukal-accent mr-3" />
                    <h3 className="text-xl font-bold text-bukal-primary font-cartoon">Health & Wellness</h3>
                  </div>
                  <p>Offering medical missions, feeding programs, and mental health support for children and partner communities to ensure overall wellbeing.</p>
                </div>
                
                <div className="flex flex-col space-y-2 bg-white p-5 rounded-lg border-2 border-bukal-primary/20 shadow-md md:col-span-2">
                  <div className="flex items-center mb-2">
                    <Star className="h-8 w-8 text-bukal-primary mr-3" />
                    <h3 className="text-xl font-bold text-bukal-primary font-cartoon">Spiritual & Values Formation</h3>
                  </div>
                  <p>Helping children grow with strong moral values through faith-based guidance and mentorship. We believe in nurturing not just the body and mind, but also the spirit.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* How Children Come to Us */}
          <div className="overflow-hidden rounded-xl retro-box max-w-4xl mx-auto mb-16">
            <div className="bg-bukal-accent text-white py-3 px-6 font-cartoon">
              <h2 className="text-2xl font-bold">How Children Come to Our Care</h2>
            </div>
            <div className="p-6 bg-white/90">
              <p className="mb-4">
                The children under our care come from different circumstances, with ages ranging from three to sixteen. Each child has a unique story, but they all share the need for love, care, and support.
              </p>
              <p className="mb-4">
                Some children are referred to us by government agencies like the Department of Social Welfare and Development (DSWD) after being abandoned, rescued from neglect, or surrendered due to extreme poverty.
              </p>
              <p className="mb-4">
                Others are brought to us through recommendations from concerned individuals or local organizations who recognize a child in need.
              </p>
              <p className="mb-4">
                Each child undergoes a thorough assessment to ensure they receive the appropriate care and intervention they need. Our goal is to provide not just a temporary shelter, but a true home where they can heal, grow, and thrive.
              </p>
              <div className="bg-bukal-primary/10 p-4 rounded-lg mt-6 border-l-4 border-bukal-primary">
                <p className="text-lg font-cartoon text-bukal-primary">
                  "At Bukal ng Buhay Foundation, we believe that every child deserves love, care, and a chance to dream. These children may have faced difficult pasts, but with the right support, they can build a bright future."
                </p>
              </div>
            </div>
          </div>
          
          {/* How You Can Help */}
          <div className="overflow-hidden rounded-xl retro-box max-w-4xl mx-auto mb-16">
            <div className="bg-bukal-primary text-white py-3 px-6 font-cartoon">
              <h2 className="text-2xl font-bold">How You Can Help</h2>
            </div>
            <div className="p-6 bg-white/90">
              <p className="mb-6">
                There are many ways people can support our mission to provide care and opportunities for children in need:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-bukal-secondary/10 p-4 rounded-lg">
                  <h3 className="text-xl font-bold text-bukal-primary mb-2 font-cartoon">Donations</h3>
                  <p>Financial contributions, food, clothes, school supplies, and other essentials are always needed.</p>
                </div>
                
                <div className="bg-bukal-secondary/10 p-4 rounded-lg">
                  <h3 className="text-xl font-bold text-bukal-primary mb-2 font-cartoon">Sponsorships</h3>
                  <p>Individuals and businesses can sponsor a child's education or daily needs, making a direct impact on their life.</p>
                </div>
                
                <div className="bg-bukal-secondary/10 p-4 rounded-lg">
                  <h3 className="text-xl font-bold text-bukal-primary mb-2 font-cartoon">Volunteering</h3>
                  <p>We welcome volunteers who can offer their time and expertise in teaching, mentoring, or assisting in our programs.</p>
                </div>
                
                <div className="bg-bukal-secondary/10 p-4 rounded-lg">
                  <h3 className="text-xl font-bold text-bukal-primary mb-2 font-cartoon">Fundraising</h3>
                  <p>Companies, schools, and organizations can collaborate with us for fundraising events and outreach projects.</p>
                </div>
              </div>
              
              <div className="text-center mt-8">
                <p className="text-lg mb-4">Every act of kindness counts. Every child matters. Let's make a difference, one life at a time.</p>
                <Link to="/donate" className="inline-block">
                  <button className="bg-bukal-accent hover:bg-amber-400 text-white font-bold py-3 px-8 rounded-lg border-4 border-white/30 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] transform transition-all duration-300 hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.2)] font-cartoon text-lg">
                    <Heart className="inline-block mr-2 h-5 w-5" />
                    Support Our Children
                  </button>
                </Link>
              </div>
            </div>
          </div>
          
          {/* Our Founder */}
          <div className="overflow-hidden rounded-xl retro-box max-w-4xl mx-auto mb-16">
            <div className="bg-bukal-primary text-white py-3 px-6 font-cartoon">
              <h2 className="text-2xl font-bold">Our Founder</h2>
            </div>
            <div className="p-6">
              <div className="flex flex-col md:flex-row items-center mb-8">
                <div className="mb-6 md:mb-0 md:mr-8">
                  <div className="w-40 h-40 rounded-full overflow-hidden mx-auto retro-box">
                    <img 
                      src="/media/Nanay.jpg"
                      alt="Nanay Letty" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-center mt-4 font-cartoon text-bukal-primary">Nanay Letty</h3>
                </div>
                <div className="flex-1">
                  <p className="mb-4">
                    The mission of Bukal ng Buhay Foundation, Inc., began when a former nun, Angelita Mendoza, known as Nanay Letty, heard Jesus' teaching "If you love me, feed my lambs" during a church service in San Nicolas Parish in Quezon City. Three street children approached her afterward, begging for money but instead, she brought them to her home to feed and care for them.
                  </p>
                  <p className="mb-4">
                    Later, Letty discovered that the children were living in a squalid area and unable to attend school due to extreme poverty. She visited their families and offered to send the children to school and provide them with food. Months later, more children came to Bukal ng Buhay, including a widowed with five children struggling to feed them.
                  </p>
                  <p>
                    Eventually, Letty and other ex-nuns prayed for guidance and established the Bukal ng Buhay Foundation Inc., with support from friends and family. In 2004, they built Bahay Kalinga for the children, which was blessed by the priest in 2005. Bukal ng Buhay now provides residential homes and education for abandoned, indigent, and neglected children.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Our Wards */}
          <div className="overflow-hidden rounded-xl retro-box max-w-4xl mx-auto mb-16">
            <div className="bg-bukal-accent text-white py-3 px-6 font-cartoon">
              <h2 className="text-2xl font-bold">Our Wards</h2>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[1, 2, 3].map((ward) => (
                  <div key={ward} className="retro-box p-4 bg-white text-center animate-float rounded-xl" style={{ animationDelay: `${ward * 0.2}s` }}>
                    <div className="w-24 h-24 mx-auto mb-4 bg-bukal-secondary/20 rounded-full flex items-center justify-center">
                      <span className="text-4xl font-cartoon text-bukal-primary">
                        {ward}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-bukal-primary mb-2 font-cartoon">Ward {ward}</h3>
                    <p>Ward Name</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <p className="text-lg">
                  Our goal at Bukal ng Buhay Foundation Inc. is to educate and cultivate productive, self-reliant children who embody respect for God, for others, and for themselves. We strive to empower them to realize their fullest potential, fostering a holistic development that enables them to attain the fullness of life.
                </p>
                <p className="text-lg mt-4">
                  Through comprehensive education, mentorship, and a values-driven approach, we aim to shape resilient individuals who contribute positively to society and embrace a meaningful, purposeful existence.
                </p>
              </div>
            </div>
          </div>
          
          {/* Message */}
          <div className="max-w-4xl mx-auto mb-16 p-8 bg-bukal-primary/10 rounded-xl border-4 border-bukal-primary/20">
            <h2 className="text-3xl font-cartoon font-bold text-bukal-primary text-center mb-6">Our Message to You</h2>
            <div className="p-6 bg-white rounded-xl shadow-lg">
              <p className="text-xl mb-4 font-cartoon text-bukal-primary">
                "At Bukal ng Buhay Foundation, we believe that every child deserves love, care, and a chance to dream. These children may have faced difficult pasts, but with the right support, they can build a bright future."
              </p>
              <p className="text-lg mb-4">
                We invite you to be part of this journey—whether through donations, volunteering, or simply sharing our mission. Together, we can make a lasting impact on these children's lives and create a future filled with hope and opportunity.
              </p>
              <p className="text-lg mb-4">
                Every act of kindness counts. Every child matters. Let's make a difference, one life at a time.
              </p>
              <p className="text-right font-cartoon text-bukal-accent text-xl">- Bukal ng Buhay Foundation</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
