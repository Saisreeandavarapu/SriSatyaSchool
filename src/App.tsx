import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutUs } from './components/AboutUs';
import { Academics } from './components/Academics';
import { Olympiads } from './components/Olympiads';
import { Faculty } from './components/Faculty';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { Admissions } from './components/Admissions';
import { ContactUs } from './components/ContactUs';
import { Footer } from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'academics', 'olympiads', 'faculty', 'gallery', 'testimonials', 'admissions', 'contact'];
      const scrollPosition = window.scrollY + 140; // offset to trigger slightly before center

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      // Offset for sticky navigation bar (approx 95px)
      const headerOffset = 95;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      // Manually set active state in case scroll listener hasn't fired yet
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-brand-light antialiased">
      {/* Sticky Header Navigation */}
      <Header activeSection={activeSection} onNavClick={handleNavClick} />

      {/* Main Sections */}
      <main className="flex-grow">
        <Hero onNavClick={handleNavClick} />
        <AboutUs />
        <Academics />
        <Olympiads />
        <Faculty />
        <Gallery />
        <Testimonials />
        <Admissions />
        <ContactUs />
      </main>

      {/* Footer */}
      <Footer onNavClick={handleNavClick} />
    </div>
  );
}

export default App;
