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
import { SplashScreen } from './components/SplashScreen';
import { LoginModal } from './components/LoginModal';
import { AdmissionFormModal } from './components/AdmissionFormModal';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [showSplash, setShowSplash]       = useState(true);
  const [loginOpen,  setLoginOpen]        = useState(false);
  const [applyOpen,  setApplyOpen]        = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'academics', 'olympiads', 'faculty', 'gallery', 'testimonials', 'admissions', 'contact'];
      const scrollPosition = window.scrollY + 140;

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
      const headerOffset = 95;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <>
      {/* ── 10-second animated splash screen ── */}
      {showSplash && (
        <SplashScreen onComplete={() => setShowSplash(false)} />
      )}

      {/* ── Modals ── */}
      <LoginModal
        isOpen={loginOpen}
        onClose={() => setLoginOpen(false)}
      />
      <AdmissionFormModal
        isOpen={applyOpen}
        onClose={() => setApplyOpen(false)}
      />

      {/* ── Main Website ── */}
      <div className="min-h-screen flex flex-col bg-brand-light antialiased">
        <Header
          activeSection={activeSection}
          onNavClick={handleNavClick}
          onLoginClick={() => setLoginOpen(true)}
          onApplyClick={() => setApplyOpen(true)}
        />

        <main className="flex-grow">
          <Hero
            onNavClick={handleNavClick}
            onApplyClick={() => setApplyOpen(true)}
          />
          <AboutUs />
          <Academics />
          <Olympiads />
          <Faculty />
          <Gallery />
          <Testimonials />
          <Admissions />
          <ContactUs />
        </main>

        <Footer onNavClick={handleNavClick} />
      </div>
    </>
  );
}

export default App;

