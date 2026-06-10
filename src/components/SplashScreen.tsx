import React, { useState, useEffect, useCallback } from 'react';
import { GraduationCap, Sparkles, BookOpen, Star, Award } from 'lucide-react';

interface SplashScreenProps {
  onComplete: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const DURATION = 10000; // 10 seconds

  const dismiss = useCallback(() => {
    if (isExiting) return;
    setIsExiting(true);
    setTimeout(() => onComplete(), 700);
  }, [isExiting, onComplete]);

  useEffect(() => {
    // Stagger content entrance
    const t = setTimeout(() => setShowContent(true), 200);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min((elapsed / DURATION) * 100, 100);
      setProgress(pct);
      if (pct >= 100) {
        clearInterval(interval);
        dismiss();
      }
    }, 50);
    return () => clearInterval(interval);
  }, [dismiss]);

  const secondsLeft = Math.ceil(((100 - progress) / 100) * (DURATION / 1000));

  return (
    <div
      onClick={dismiss}
      className={`fixed inset-0 z-[9999] flex items-center justify-center cursor-pointer transition-all duration-700 ${
        isExiting ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
      }`}
      style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #0c1a3a 40%, #0369a1 100%)',
      }}
    >
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-96 h-96 rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, #0ea5e9, transparent)',
            top: '-5rem',
            left: '-5rem',
            animation: 'float 6s ease-in-out infinite',
          }}
        />
        <div
          className="absolute w-80 h-80 rounded-full opacity-15"
          style={{
            background: 'radial-gradient(circle, #ff6b4a, transparent)',
            bottom: '-4rem',
            right: '-4rem',
            animation: 'float 8s ease-in-out infinite reverse',
          }}
        />
        <div
          className="absolute w-64 h-64 rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, #10b981, transparent)',
            top: '40%',
            right: '20%',
            animation: 'float 5s ease-in-out infinite',
          }}
        />
        {/* Floating stars */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute text-white/20"
            style={{
              left: `${(i * 17 + 5) % 95}%`,
              top: `${(i * 23 + 10) % 90}%`,
              animation: `float ${3 + (i % 4)}s ease-in-out infinite`,
              animationDelay: `${i * 0.4}s`,
            }}
          >
            <Star size={i % 3 === 0 ? 20 : i % 3 === 1 ? 14 : 10} fill="currentColor" />
          </div>
        ))}
      </div>

      {/* Main content card */}
      <div
        className="relative z-10 flex flex-col items-center text-center px-8 max-w-lg w-full"
        style={{
          transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)',
          opacity: showContent ? 1 : 0,
          transform: showContent ? 'translateY(0)' : 'translateY(40px)',
        }}
      >
        {/* Animated logo ring */}
        <div className="relative mb-8">
          {/* Outer glowing ring */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: 'conic-gradient(from 0deg, #0ea5e9, #10b981, #ff6b4a, #fbbf24, #0ea5e9)',
              padding: '3px',
              borderRadius: '50%',
              width: '120px',
              height: '120px',
              margin: 'auto',
              animation: 'spin 4s linear infinite',
              boxShadow: '0 0 30px rgba(14, 165, 233, 0.5)',
            }}
          />
          <div
            className="relative flex items-center justify-center bg-brand-dark rounded-full z-10"
            style={{ width: '120px', height: '120px', margin: '0 auto' }}
          >
            <div className="flex flex-col items-center">
              <GraduationCap size={44} className="text-brand-blue mb-1" />
              <span className="font-hand font-extrabold text-white text-2xl leading-none">S</span>
            </div>
          </div>
          {/* Orbiting dots */}
          {[0, 120, 240].map((deg, i) => (
            <div
              key={i}
              className="absolute"
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                background: ['#0ea5e9', '#ff6b4a', '#10b981'][i],
                top: '50%',
                left: '50%',
                transform: `rotate(${deg}deg) translateX(68px) translateY(-50%)`,
                animation: 'spin 4s linear infinite',
                boxShadow: `0 0 8px ${['#0ea5e9', '#ff6b4a', '#10b981'][i]}`,
              }}
            />
          ))}
        </div>

        {/* School name */}
        <div
          className="mb-3"
          style={{
            transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s',
            opacity: showContent ? 1 : 0,
            transform: showContent ? 'translateY(0)' : 'translateY(20px)',
          }}
        >
          <h1 className="font-hand font-extrabold text-4xl sm:text-5xl text-white leading-tight mb-1">
            Satya <span className="text-brand-orange">Concept</span> School
          </h1>
          <p className="text-brand-blue text-sm sm:text-base font-bold tracking-widest uppercase">
            Quality Education... Bright Future...
          </p>
        </div>

        {/* Divider with icons */}
        <div
          className="flex items-center gap-4 my-6 w-full max-w-xs"
          style={{
            transition: 'all 0.8s ease 0.4s',
            opacity: showContent ? 1 : 0,
          }}
        >
          <div className="flex-1 h-px bg-white/20" />
          <div className="flex gap-3 text-white/40">
            <BookOpen size={16} />
            <Sparkles size={16} />
            <Award size={16} />
          </div>
          <div className="flex-1 h-px bg-white/20" />
        </div>

        {/* Tagline */}
        <div
          className="mb-10"
          style={{
            transition: 'all 0.8s ease 0.5s',
            opacity: showContent ? 1 : 0,
            transform: showContent ? 'translateY(0)' : 'translateY(10px)',
          }}
        >
          <p className="text-white/70 text-sm sm:text-base font-medium leading-relaxed">
            Concept-based learning · Olympiad Excellence · Individual Care
          </p>
          <p className="text-white/50 text-xs mt-2">
            Jarajapupeta, Vizianagaram, Andhra Pradesh · School Code: AP9023
          </p>
        </div>

        {/* Progress bar */}
        <div
          className="w-full max-w-xs"
          style={{
            transition: 'all 0.8s ease 0.6s',
            opacity: showContent ? 1 : 0,
          }}
        >
          <div className="flex justify-between items-center mb-2">
            <span className="text-white/40 text-xs font-medium">Loading...</span>
            <span className="text-white/60 text-xs font-bold">
              {secondsLeft > 0 ? `${secondsLeft}s` : 'Ready!'}
            </span>
          </div>
          <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-none"
              style={{
                width: `${progress}%`,
                background: 'linear-gradient(90deg, #0ea5e9, #10b981, #ff6b4a)',
                boxShadow: '0 0 8px rgba(14,165,233,0.6)',
              }}
            />
          </div>
          <p className="text-white/30 text-xs mt-4 text-center">
            Click anywhere to skip
          </p>
        </div>

        {/* Admissions badge */}
        <div
          className="mt-8 inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-bold border"
          style={{
            background: 'rgba(255, 107, 74, 0.15)',
            borderColor: 'rgba(255, 107, 74, 0.4)',
            color: '#ff9d86',
            transition: 'all 0.8s ease 0.8s',
            opacity: showContent ? 1 : 0,
            animation: 'pulse-subtle 2s ease-in-out infinite',
          }}
        >
          <GraduationCap size={16} />
          Admissions Open for 2026-27
        </div>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};
