
import React from 'react';
import { Heart, Users, Gift } from 'lucide-react';

const SupportSection = () => {
  return (
    <section className="py-16 px-4 bg-bukal-secondary/30">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-cartoon font-bold text-center text-bukal-primary mb-3">
          Partner with <span className="text-bukal-accent">Bukal ng Buhay</span> Foundation
        </h2>
        <p className="text-center text-xl mb-12">
          Together we can provide:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Orphan Care */}
          <div className="cartoon-card flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-bukal-primary rounded-full flex items-center justify-center mb-4">
              <Heart className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-2xl font-cartoon font-bold text-bukal-primary mb-3">Orphan Care</h3>
            <h4 className="text-xl text-bukal-accent font-semibold mb-4">Serve Children</h4>
            <p className="text-bukal-text">
              You can provide holistic, Gospel-centered daily care, education, and discipleship to orphaned 
              and vulnerable children throughout the Philippines, continuing to love and support them as they 
              transition into adult living.
            </p>
          </div>
          
          {/* Church Partnership */}
          <div className="cartoon-card flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-bukal-accent rounded-full flex items-center justify-center mb-4">
              <Users className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-2xl font-cartoon font-bold text-bukal-primary mb-3">Church Partnership</h3>
            <h4 className="text-xl text-bukal-accent font-semibold mb-4">Reach Orphans & Adoptive Families</h4>
            <p className="text-bukal-text">
              You can create financial solutions for adoptive families by starting a no-cost, personalized 
              adoption fund at your church. You can also engage in global orphan care projects through mission 
              teams and sponsorship.
            </p>
          </div>
          
          {/* Donations & Sponsorships */}
          <div className="cartoon-card flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-bukal-primary rounded-full flex items-center justify-center mb-4">
              <Gift className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-2xl font-cartoon font-bold text-bukal-primary mb-3">Donations or Sponsorships</h3>
            <h4 className="text-xl text-bukal-accent font-semibold mb-4">Support the foundation, support the children</h4>
            <p className="text-bukal-text">
              Financial contributions, food, clothes, school supplies, and other essentials are always needed. 
              Individuals and businesses can also sponsor a child's education or daily needs. Your generosity 
              makes a difference—100% of your donation goes toward helping orphans thrive.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
