import React from 'react';
import { ArrowRight, Sparkles, Star } from 'lucide-react';
import heroLearning from '../assets/hero_learning.png';

interface HeroProps {
  onNavClick: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavClick }) => {
  return (
    <section 
      id="home" 
      className="relative pt-[130px] pb-16 md:pt-[160px] md:pb-28 overflow-hidden bg-gradient-to-b from-brand-blue/5 via-brand-yellow/5 to-white"
    >
      {/* Decorative Floating Elements */}
      <div className="absolute top-24 left-10 text-brand-orange/20 animate-float">
        <Sparkles size={40} />
      </div>
      <div className="absolute top-48 right-16 text-brand-blue/20 animate-float" style={{ animationDelay: '1.5s' }}>
        <Star size={36} fill="currentColor" />
      </div>
      <div className="absolute bottom-24 left-1/4 text-brand-green/20 animate-bounce" style={{ animationDuration: '6s' }}>
        <div className="w-8 h-8 rounded-full border-4 border-current"></div>
      </div>
      <div className="absolute bottom-40 right-1/3 text-brand-yellow/20 animate-bounce" style={{ animationDuration: '4s', animationDelay: '2s' }}>
        <div className="w-6 h-6 rounded-md border-4 border-current rotate-45"></div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Left */}
          <div className="lg:col-span-7 flex flex-col text-center lg:text-left items-center lg:items-start">
            {/* Admissions tag */}
            <div className="inline-flex items-center gap-2 bg-brand-orange/10 text-brand-orange px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold mb-6 border border-brand-orange/20 animate-pulse-subtle">
              <Star size={14} fill="currentColor" />
              <span>Admissions Open for 2026-27</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-hand font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-brand-dark leading-tight mb-6 tracking-tight">
              We Help Kids Become <br className="hidden sm:inline" />
              <span className="text-brand-blue">Concept-Based</span> <br />
              <span className="text-brand-green">Learners</span>
            </h1>

            {/* Description */}
            <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-xl mb-8 leading-relaxed font-medium">
              At <strong className="text-brand-dark font-bold">Satya Concept School (SCS)</strong>, our concept-based learning replaces rote memorization with deep logical understanding, personalized care, and active Olympiad preparation for Nursery to Class 7.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button
                onClick={() => onNavClick('admissions')}
                className="bg-brand-orange hover:bg-brand-orange-dark text-white font-extrabold text-base px-8 py-4 rounded-2xl shadow-lg shadow-brand-orange/30 hover:shadow-xl hover:shadow-brand-orange/40 transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
              >
                Apply Online Now <ArrowRight size={18} />
              </button>
              <button
                onClick={() => onNavClick('about')}
                className="bg-white hover:bg-gray-50 text-gray-700 font-bold text-base px-8 py-4 rounded-2xl border-2 border-gray-200 hover:border-brand-blue hover:text-brand-blue transition-all duration-200 flex items-center justify-center gap-2 shadow-sm cursor-pointer"
              >
                Why Choose SCS?
              </button>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-3 gap-4 sm:gap-8 mt-12 border-t border-gray-200/60 pt-8 w-full">
              <div>
                <p className="font-hand font-extrabold text-2xl sm:text-3xl text-brand-orange">Nursery - 7</p>
                <p className="text-xs sm:text-sm text-gray-500 font-bold uppercase mt-1">Eligible Classes</p>
              </div>
              <div>
                <p className="font-hand font-extrabold text-2xl sm:text-3xl text-brand-blue">AP9023</p>
                <p className="text-xs sm:text-sm text-gray-500 font-bold uppercase mt-1">Registered Code</p>
              </div>
              <div>
                <p className="font-hand font-extrabold text-2xl sm:text-3xl text-brand-green">100%</p>
                <p className="text-xs sm:text-sm text-gray-500 font-bold uppercase mt-1">Concept Focus</p>
              </div>
            </div>
          </div>

          {/* Illustration Right */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="absolute inset-0 bg-brand-yellow/20 rounded-full filter blur-3xl -z-10 w-4/5 h-4/5 m-auto"></div>
            <div className="relative w-full max-w-[450px] transform hover:scale-102 transition-transform duration-300">
              <img 
                src={heroLearning} 
                alt="Teacher guiding a student in learning" 
                className="w-full h-auto drop-shadow-2xl rounded-3xl"
              />
              {/* Feature Badges */}
              <div className="absolute -bottom-4 -left-4 bg-white shadow-xl rounded-2xl p-3 flex items-center gap-2 border-2 border-brand-green animate-float">
                <div className="bg-brand-green/10 text-brand-green p-1.5 rounded-lg">
                  <Star size={16} fill="currentColor" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-800 leading-tight">Olympiad Training</p>
                  <p className="text-[10px] text-gray-400">IMO • NSO • IEO</p>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 bg-white shadow-xl rounded-2xl p-3 flex items-center gap-2 border-2 border-brand-blue animate-float" style={{ animationDelay: '1s' }}>
                <div className="bg-brand-blue/10 text-brand-blue p-1.5 rounded-lg">
                  <Sparkles size={16} />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-800 leading-tight">Individual Care</p>
                  <p className="text-[10px] text-gray-400">Max Attention</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-full h-[60px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" fill="#ffffff"></path>
        </svg>
      </div>
    </section>
  );
};
