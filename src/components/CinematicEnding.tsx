import React, { useState, useEffect } from 'react';
import { PERSONAL_BRAND } from '../data/portfolioData';

export const CinematicEnding: React.FC = () => {
  const [phase, setPhase] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      // Trigger sequence when near bottom of page
      const scrollPos = window.innerHeight + window.scrollY;
      const threshold = document.documentElement.scrollHeight - 500;
      if (scrollPos >= threshold && phase === 0) {
        setPhase(1);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [phase]);

  // Phase stepping sequence
  useEffect(() => {
    if (phase >= 1 && phase < 4) {
      const timer = setTimeout(() => {
        setPhase((prev) => prev + 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [phase]);

  return (
    <footer className="bg-[#030303] text-[#F4F1EA] py-32 px-6 md:px-12 border-t border-[#1F1F1F] relative overflow-hidden flex flex-col justify-between min-h-[70vh]">
      {/* Subtle deep red ambient floor */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-[#B40018]/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Main Narrative Fadeout Sequence */}
      <div className="max-w-4xl mx-auto my-auto text-center space-y-10 relative z-10">
        {/* Sequence Phases: STILL LEARNING -> STILL BUILDING -> STILL CREATING */}
        <div className="h-16 flex items-center justify-center">
          <span
            className={`font-mono text-xs sm:text-sm tracking-[0.3em] uppercase transition-all duration-700 ${
              phase === 1
                ? 'opacity-100 text-[#A3A199]'
                : phase === 2
                ? 'opacity-100 text-[#F4F1EA]'
                : phase >= 3
                ? 'opacity-100 text-[#B40018] font-bold'
                : 'opacity-40 text-[#A3A199]'
            }`}
          >
            {phase <= 1
              ? 'STILL LEARNING.'
              : phase === 2
              ? 'STILL BUILDING.'
              : 'STILL CREATING.'}
          </span>
        </div>

        {/* Final Brand Monolith */}
        <div className="space-y-4">
          <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold uppercase font-display tracking-tight text-[#F4F1EA] cinema-text-glow">
            ADARSH MOHITHE
          </h2>

          <p className="text-lg sm:text-2xl font-bold uppercase tracking-tight text-[#F4F1EA]">
            {PERSONAL_BRAND.tagline}
          </p>

          <p className="text-sm sm:text-base font-serif italic text-[#A3A199]">
            &ldquo;{PERSONAL_BRAND.philosophy}&rdquo;
          </p>
        </div>

        {/* Quick return to top */}
        <div className="pt-6">
          <a
            href="#"
            className="inline-block font-mono text-xs tracking-widest text-[#A3A199] hover:text-[#B40018] transition-colors uppercase border-b border-[#262626] pb-1 hover:border-[#B40018]"
          >
            ↑ RETURN TO SURFACE
          </a>
        </div>
      </div>

      {/* Small Clean Footer Bar */}
      <div className="max-w-7xl mx-auto w-full pt-16 border-t border-[#1C1C1C] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#A3A199] relative z-10">
        <p>© 2026 ADARSH MOHITHE. ALL RIGHTS RESERVED.</p>

        <div className="flex items-center gap-4 text-[11px]">
          <span>REACT + VITE</span>
          <span className="text-[#262626]">·</span>
          <span>TAILWIND CSS</span>
          <span className="text-[#262626]">·</span>
          <span className="text-[#B40018]">CINEMATIC ART DIRECTION</span>
        </div>
      </div>
    </footer>
  );
};
