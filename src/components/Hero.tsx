import React, { useState, useEffect } from 'react';
import { ArrowDown, ArrowUpRight, Camera, Film } from 'lucide-react';
import { PERSONAL_BRAND } from '../data/portfolioData';
import { useScrollAnimations } from '../hooks/useScrollAnimations';

interface HeroProps {
  onExploreClick?: () => void;
  onViewWorkClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onViewWorkClick }) => {
  const [initStage, setInitStage] = useState<number>(0);
  const [userPortrait, setUserPortrait] = useState<string | null>(null);
  const [, setIsHoveredFrame] = useState(false);

  const containerRef = useScrollAnimations<HTMLElement>({
    parallaxSpeed: 18,
    staggerDelay: 0.1,
  });

  // Load any previously saved portrait from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('adarsh_hero_portrait');
      if (saved) {
        setUserPortrait(saved);
      }
    } catch {
      // LocalStorage access handling
    }
  }, []);

  // Subtle terminal initialization sequence
  useEffect(() => {
    const timer1 = setTimeout(() => setInitStage(1), 350);
    const timer2 = setTimeout(() => setInitStage(2), 950);
    const timer3 = setTimeout(() => setInitStage(3), 1600);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex flex-col justify-between pt-24 pb-12 px-6 md:px-12 bg-[#050505] overflow-hidden">
      {/* Background cinematic atmosphere - red ambient glow with parallax */}
      <div className="parallax-layer absolute top-1/4 right-1/4 w-[450px] md:w-[650px] h-[450px] md:h-[650px] bg-[#B40018]/15 rounded-full blur-[140px] pointer-events-none -z-10" data-parallax-speed="25" />
      <div className="parallax-layer absolute bottom-10 left-10 w-[300px] h-[300px] bg-[#B40018]/10 rounded-full blur-[100px] pointer-events-none -z-10" data-parallax-speed="15" />

      {/* Subtle cinematic grid & noise */}
      <div className="absolute inset-0 film-grain opacity-60 pointer-events-none -z-10" />

      {/* Opening sequence indicator */}
      <div className="max-w-7xl mx-auto w-full pt-4">
        <div className="font-mono text-xs text-[#A3A199] flex items-center gap-3">
          <span className="inline-block w-2 h-2 rounded-full bg-[#B40018] animate-pulse" />
          {initStage === 0 && <span className="opacity-60">/ connecting...</span>}
          {initStage === 1 && <span className="opacity-80">/ initializing...</span>}
          {initStage >= 2 && (
            <span className="text-[#F4F1EA]/90 tracking-wider">
              / a mind with too many ideas
            </span>
          )}
          {initStage >= 3 && (
            <span className="hidden sm:inline text-[#A3A199]/60">
              · 7th Sem AI/ML · Cinematographer · Director
            </span>
          )}
        </div>
      </div>

      {/* Main Hero Grid Layout */}
      <div className="max-w-7xl mx-auto w-full my-auto py-8 lg:py-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Massive Editorial Typography & Identity */}
        <div
          className={`lg:col-span-7 transition-all duration-700 ${
            initStage >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          {/* Metadata Discipline: Clean unboxed text with subtle typographic separators */}
          <div className="flex items-center gap-2 text-xs md:text-sm font-mono tracking-widest text-[#A3A199] uppercase mb-4">
            <span className="text-[#B40018] font-bold">01</span>
            <span aria-hidden="true">/</span>
            <span>PORTFOLIO</span>
            <span aria-hidden="true">·</span>
            <span>2026 EDITION</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#F4F1EA]">BENGALURU</span>
          </div>

          {/* Oversized Name Typography */}
          <h1 className="text-6xl sm:text-7xl md:text-8xl xl:text-9xl font-extrabold tracking-tighter uppercase font-display leading-[0.88] text-[#F4F1EA] mb-6">
            <span className="block hover:text-[#B40018] transition-colors">ADARSH</span>
            <span className="block text-[#F4F1EA] relative">
              MOHITHE
              <span className="text-[#B40018] inline-block ml-1">.</span>
            </span>
          </h1>

          {/* Tagline */}
          <div className="space-y-4 max-w-xl">
            <p className="text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-tight text-[#F4F1EA]">
              Crafting stories through <span className="text-[#B40018]">code</span> &amp;{' '}
              <span className="text-[#B40018]">light</span>.
            </p>

            <p className="text-sm md:text-base text-[#A3A199] leading-relaxed font-sans">
              AI/ML student engineer with a cinema lens. Moving seamlessly between convolutional neural
              networks, modern web interfaces, and anamorphic 24fps psychological storytelling.
            </p>

            {/* Discipline ribbon */}
            <div className="pt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs md:text-sm font-mono text-[#F4F1EA]/80">
              <span className="text-[#B40018] font-semibold">AI</span>
              <span className="text-[#7A0010]">/</span>
              <span>CODE</span>
              <span className="text-[#7A0010]">/</span>
              <span className="text-[#B40018] font-semibold">CAMERA</span>
              <span className="text-[#7A0010]">/</span>
              <span>EDIT</span>
              <span className="text-[#7A0010]">/</span>
              <span className="text-[#B40018] font-semibold">STORY</span>
            </div>
          </div>

          {/* Primary Action Buttons */}
          <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#build"
              onClick={onExploreClick}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#B40018] hover:bg-[#7A0010] text-[#F4F1EA] text-xs md:text-sm font-bold tracking-wider uppercase transition-all duration-200 cinema-glow whitespace-nowrap"
            >
              <span>Explore My World</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href="#cinema"
              onClick={onViewWorkClick}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#171717] hover:bg-[#262626] text-[#F4F1EA] border border-[#262626] hover:border-[#F4F1EA]/40 text-xs md:text-sm font-semibold tracking-wider uppercase transition-all duration-200 whitespace-nowrap"
            >
              <Film className="w-4 h-4 text-[#B40018]" />
              <span>View Film Work</span>
            </a>
          </div>
        </div>

        {/* Right Column: Hero Portrait Frame with Cinematic Viewfinder & Red Architectural Mood */}
        <div
          className={`lg:col-span-5 transition-all duration-700 delay-200 ${
            initStage >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div
            className="parallax-container relative w-full max-w-md mx-auto aspect-[3/4] rounded-sm overflow-hidden bg-[#0A0A0A] border border-[#262626] shadow-2xl group"
            onMouseEnter={() => setIsHoveredFrame(true)}
            onMouseLeave={() => setIsHoveredFrame(false)}
            data-cursor="view"
            data-cursor-text="PORTRAIT"
          >
            {/* Viewfinder crosshairs and technical stamps */}
            <div className="viewfinder-corner viewfinder-tl viewfinder-tr viewfinder-bl viewfinder-br absolute inset-0 z-20 pointer-events-none" />

            {/* Viewfinder HUD Stamp */}
            <div className="absolute top-3 left-4 z-20 font-mono text-[10px] tracking-wider text-[#F4F1EA]/80 flex items-center gap-2 bg-[#050505]/70 px-2 py-0.5 backdrop-blur-sm border border-[#262626]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B40018] animate-ping" />
              <span>REC</span>
              <span className="text-[#A3A199]">·</span>
              <span>24FPS</span>
              <span className="text-[#A3A199]">·</span>
              <span>F/1.8</span>
            </div>

            <div className="absolute top-3 right-4 z-20 font-mono text-[10px] text-[#A3A199] bg-[#050505]/70 px-2 py-0.5 backdrop-blur-sm border border-[#262626]">
              <span>ISO 400 · 35MM</span>
            </div>

            {/* Central Viewfinder Reticle */}
            <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none opacity-40 group-hover:opacity-70 transition-opacity">
              <div className="w-12 h-12 border border-[#F4F1EA]/30 relative">
                <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-[#F4F1EA]/30" />
                <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-[#F4F1EA]/30" />
              </div>
            </div>

            {/* Image Layer: Either user uploaded portrait OR cinematic aesthetic homage to the reference image */}
            {userPortrait ? (
              <div className="relative w-full h-full">
                <img
                  src={userPortrait}
                  alt="Adarsh Mohithe Portrait"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center filter contrast-[1.05] brightness-95 transition-transform duration-700 group-hover:scale-105"
                />
                {/* Red ambient overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80" />
                <div className="absolute inset-0 bg-[#B40018]/10 mix-blend-color" />
              </div>
            ) : (
              /* Reference Aesthetic Placeholder: Dark Noir silhouette in front of red window lattice inspired by reference image */
              <div className="relative w-full h-full bg-[#080808] flex flex-col items-center justify-between p-6 overflow-hidden">
                {/* Red illuminated window frame motif */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#B40018]/60 via-[#7A0010]/30 to-[#050505] opacity-90" />

                {/* Window Lattice Grate Lines */}
                <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 opacity-25 pointer-events-none">
                  <div className="border-r border-b border-[#F4F1EA]/30" />
                  <div className="border-r border-b border-[#F4F1EA]/30" />
                  <div className="border-b border-[#F4F1EA]/30" />
                  <div className="border-r border-b border-[#F4F1EA]/30" />
                  <div className="border-r border-b border-[#F4F1EA]/30" />
                  <div className="border-b border-[#F4F1EA]/30" />
                  <div className="border-r border-[#F4F1EA]/30" />
                  <div className="border-r border-[#F4F1EA]/30" />
                  <div />
                </div>

                {/* Silhouette Composition */}
                <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center px-4">
                  {/* Silhouette icon / aesthetic */}
                  <div className="relative mb-6">
                    <div className="w-28 h-28 md:w-36 md:h-36 rounded-full bg-[#050505] border border-[#B40018] flex items-center justify-center shadow-2xl relative overflow-hidden group-hover:border-[#F4F1EA] transition-colors">
                      <div className="absolute inset-0 bg-gradient-to-b from-[#B40018]/30 to-transparent" />
                      <Camera className="w-12 h-12 text-[#F4F1EA]/80" />
                    </div>
                    <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-[#B40018] text-[#F4F1EA] font-mono text-[9px] px-2 py-0.5 tracking-widest uppercase font-bold whitespace-nowrap">
                      PORTRAIT SLOT
                    </span>
                  </div>

                  <p className="text-lg font-bold font-display uppercase tracking-wide text-[#F4F1EA]">
                    Adarsh Mohithe
                  </p>
                  <p className="text-xs text-[#A3A199] mt-1 max-w-[240px]">
                    Maroon hoodie photo / reference portrait will appear here
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Under-frame caption note */}
          <div className="mt-3 text-center lg:text-left">
            <p className="text-[11px] font-mono text-[#A3A199] flex items-center justify-center lg:justify-start gap-1.5">
              <span className="text-[#B40018]">●</span>
              <span>CINEMATIC ARCHITECTURAL FRAMING · PSYCHO CREATIONS</span>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="max-w-7xl mx-auto w-full pt-6 flex items-center justify-between border-t border-[#262626]/60 text-xs font-mono text-[#A3A199]">
        <div className="flex items-center gap-4">
          <span className="text-[#F4F1EA]">SCROLL TO EXPLORE</span>
          <span className="w-12 h-[1px] bg-[#B40018]" />
          <span className="hidden sm:inline">CODE · FRAME · EDIT · STORY</span>
        </div>

        <a
          href="#statement"
          className="flex items-center gap-2 text-[#F4F1EA] hover:text-[#B40018] transition-colors p-1"
          aria-label="Scroll down to hero statement"
        >
          <span>DISCOVER</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
