import React from 'react';
import { Phone, MapPin, GraduationCap, ChevronUp } from 'lucide-react';

interface FooterProps {
  onNavClick: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavClick }) => {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-dark text-gray-300 pt-16 pb-8 border-t-4 border-brand-orange relative z-10">
      
      {/* Decorative curves at bottom */}
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          
          {/* Brand Column */}
          <div className="md:col-span-4 space-y-4 text-center md:text-left">
            <div 
              onClick={() => onNavClick('home')} 
              className="flex items-center justify-center md:justify-start gap-2.5 cursor-pointer group"
            >
              <div className="w-9 h-9 rounded-2xl bg-brand-blue flex items-center justify-center text-white font-hand font-extrabold text-xl shadow-lg transform group-hover:rotate-12 transition-transform duration-300">
                S
              </div>
              <span className="font-hand font-bold text-lg text-white">
                Satya <span className="text-brand-orange">Concept</span> School
              </span>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed max-w-xs mx-auto md:mx-0">
              SCS is dedicated to active learning models, concept comprehension, and national competitive milestones from Nursery to Class 7.
            </p>
            <p className="text-xs text-brand-yellow font-semibold">Registered School Code: AP9023</p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 space-y-4 text-center md:text-left">
            <h4 className="font-hand font-bold text-white text-base">Quick Navigation</h4>
            <div className="grid grid-cols-2 gap-2 max-w-xs mx-auto md:mx-0 text-xs">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About Us' },
                { id: 'academics', label: 'Academics' },
                { id: 'olympiads', label: 'Olympiads' },
                { id: 'faculty', label: 'Faculty' },
                { id: 'gallery', label: 'Gallery' },
                { id: 'testimonials', label: 'Testimonials' },
                { id: 'admissions', label: 'Admissions' },
                { id: 'contact', label: 'Contact Us' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => onNavClick(item.id)}
                  className="hover:text-brand-orange text-left transition-colors duration-150 py-1 cursor-pointer font-medium"
                >
                  • {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4 space-y-4 text-center md:text-left">
            <h4 className="font-hand font-bold text-white text-base">Campus Contacts</h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-start justify-center md:justify-start gap-2 text-gray-400">
                <MapPin size={14} className="text-brand-blue shrink-0 mt-0.5" />
                <span>Jarajapupeta, Nellimarla, Vizianagaram, AP</span>
              </div>
              <div className="flex items-start justify-center md:justify-start gap-2 text-gray-400">
                <Phone size={14} className="text-brand-green shrink-0 mt-0.5" />
                <div>
                  <p>9059809228 (Secretary Correspondent)</p>
                  <p className="mt-1">6303975664 (Principal Office)</p>
                </div>
              </div>
              <div className="flex items-start justify-center md:justify-start gap-2 text-brand-yellow font-bold">
                <GraduationCap size={14} className="shrink-0 mt-0.5" />
                <span>Admissions Open for 2026-27</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-bold uppercase tracking-wider">
          <p>© {currentYear} Satya Concept School (SCS). All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <button
              onClick={handleScrollToTop}
              className="bg-gray-800 hover:bg-brand-orange hover:text-white p-2 rounded-xl text-gray-400 transition-colors cursor-pointer flex items-center gap-1"
              aria-label="Scroll to top"
            >
              Back to Top <ChevronUp size={16} />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
