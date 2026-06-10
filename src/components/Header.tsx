import React, { useState, useEffect } from 'react';
import { Phone, MapPin, GraduationCap, Menu, X, ArrowRight, Lock, ClipboardList } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  onNavClick: (sectionId: string) => void;
  onLoginClick: () => void;
  onApplyClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ activeSection, onNavClick, onLoginClick, onApplyClick }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'academics', label: 'Academics' },
    { id: 'olympiads', label: 'Olympiads' },
    { id: 'faculty', label: 'Faculty' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'admissions', label: 'Admissions' },
    { id: 'contact', label: 'Contact Us' },
  ];

  const handleNavItemClick = (id: string) => {
    onNavClick(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
      {/* Top Bar */}
      <div className="bg-brand-dark text-white text-xs sm:text-sm py-2 px-4 flex flex-wrap justify-between items-center border-b-4 border-gradient-to-r border-brand-orange transition-all duration-300">
        <div className="flex items-center gap-4 flex-wrap">
          <div className="flex items-center gap-1.5 hover:text-brand-orange transition-colors">
            <Phone size={14} className="text-brand-yellow" />
            <a href="tel:9059809228">9059809228</a>
            <span className="text-gray-500">|</span>
            <a href="tel:6303975664">6303975664</a>
          </div>
          <div className="hidden md:flex items-center gap-1.5 text-gray-300">
            <MapPin size={14} className="text-brand-blue" />
            <span>Jarajapupeta, Vizianagaram, AP</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="bg-brand-orange text-white text-[10px] sm:text-xs font-bold px-2.5 py-0.5 rounded-full animate-pulse flex items-center gap-1">
            <GraduationCap size={12} />
            <span>Admissions Open 2026-27</span>
          </div>
          <span className="hidden sm:inline text-brand-yellow font-medium">School Code: AP9023</span>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`w-full transition-all duration-300 px-4 py-3 md:px-8 flex justify-between items-center ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-gray-100 py-2.5' 
          : 'bg-white/80 backdrop-blur-sm'
      }`}>
        {/* Logo */}
        <div 
          onClick={() => handleNavItemClick('home')} 
          className="flex items-center gap-2.5 cursor-pointer group"
        >
          <div className="w-10 h-10 rounded-2xl bg-brand-blue flex items-center justify-center text-white font-hand font-extrabold text-2xl shadow-lg shadow-brand-blue/30 transform group-hover:rotate-12 transition-transform duration-300">
            S
          </div>
          <div className="flex flex-col">
            <span className="font-hand font-bold text-xl leading-none text-brand-dark flex items-center gap-1">
              Satya <span className="text-brand-orange">Concept</span> School
            </span>
            <span className="text-[10px] font-bold tracking-widest text-brand-green uppercase">
              Quality Education... Bright Future...
            </span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavItemClick(item.id)}
              className={`px-3 py-2 rounded-xl text-sm font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
                activeSection === item.id
                  ? 'bg-brand-blue/10 text-brand-blue font-bold'
                  : 'text-gray-600 hover:bg-gray-100 hover:text-brand-dark'
              }`}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={onApplyClick}
            className="ml-3 bg-brand-orange hover:bg-brand-orange-dark text-white font-bold text-sm px-4 py-2 rounded-2xl shadow-md shadow-brand-orange/20 hover:shadow-lg hover:shadow-brand-orange/30 transform hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-1"
          >
            Apply Now <ClipboardList size={14} />
          </button>
          <button
            onClick={onLoginClick}
            className="ml-2 bg-brand-dark hover:bg-gray-800 text-white font-bold text-sm px-4 py-2 rounded-2xl shadow-md transition-all duration-200 flex items-center gap-1 hover:-translate-y-0.5"
          >
            <Lock size={13} /> Login
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl hover:bg-gray-100 text-gray-700 transition-colors"
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      <div className={`fixed inset-0 top-[88px] sm:top-[92px] z-40 bg-white border-t border-gray-100 shadow-xl transition-all duration-300 lg:hidden flex flex-col ${
        isMobileMenuOpen 
          ? 'opacity-100 translate-x-0' 
          : 'opacity-0 translate-x-full pointer-events-none'
      }`}>
        <div className="flex-1 overflow-y-auto py-6 px-6 flex flex-col gap-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavItemClick(item.id)}
              className={`w-full text-left px-4 py-3.5 rounded-2xl font-bold transition-all duration-200 ${
                activeSection === item.id
                  ? 'bg-brand-blue text-white shadow-md shadow-brand-blue/20'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => { onApplyClick(); setIsMobileMenuOpen(false); }}
            className="w-full mt-4 bg-brand-orange text-white font-bold py-3.5 rounded-2xl shadow-lg shadow-brand-orange/20 flex items-center justify-center gap-2"
          >
            Apply Now <ClipboardList size={16} />
          </button>
          <button
            onClick={() => { onLoginClick(); setIsMobileMenuOpen(false); }}
            className="w-full mt-3 bg-brand-dark text-white font-bold py-3.5 rounded-2xl flex items-center justify-center gap-2"
          >
            <Lock size={16} /> Admin Login
          </button>
        </div>
        <div className="bg-gray-50 p-6 border-t border-gray-100 flex flex-col gap-3">
          <div className="flex items-center gap-2.5 text-gray-600 text-sm">
            <Phone size={16} className="text-brand-orange" />
            <div>
              <a href="tel:9059809228" className="hover:underline block font-semibold">9059809228</a>
              <a href="tel:6303975664" className="hover:underline block font-semibold">6303975664</a>
            </div>
          </div>
          <div className="flex items-center gap-2.5 text-gray-600 text-sm">
            <MapPin size={16} className="text-brand-blue" />
            <span className="font-medium">Jarajapupeta, Vizianagaram, AP</span>
          </div>
        </div>
      </div>
    </header>
  );
};
