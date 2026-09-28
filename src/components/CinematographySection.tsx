import React, { useState } from 'react';
import { Camera, Aperture, Eye, Sparkles, Sliders } from 'lucide-react';
import { useScrollAnimations } from '../hooks/useScrollAnimations';

export const CinematographySection: React.FC = () => {
  const [aspectScope, setAspectScope] = useState<'2.39' | '16:9' | '4:3'>('2.39');
  const containerRef = useScrollAnimations<HTMLElement>({
    parallaxSpeed: 24,
    staggerDelay: 0.12,
  });

  return (
    <section
      ref={containerRef}
      id="cinema"
      className="py-24 md:py-36 bg-[#040404] text-[#F4F1EA] relative overflow-hidden"
    >
      {/* Dramatic Cinematic Lighting Backdrop - Parallax Glow Layers */}
      <div
        className="parallax-layer absolute top-1/4 left-0 w-[500px] h-[500px] bg-[#B40018]/15 rounded-full blur-[140px] pointer-events-none"
        data-parallax-speed="35"
      />
      <div
        className="parallax-layer absolute bottom-10 right-0 w-[600px] h-[400px] bg-[#B40018]/10 rounded-full blur-[160px] pointer-events-none"
        data-parallax-speed="20"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Lead-in & Editorial Heading with Staggered Reveal */}
        <div className="reveal-group">
          <div className="reveal-item flex items-center gap-3 text-xs md:text-sm font-mono tracking-widest text-[#B40018] uppercase mb-8">
            <span className="w-8 h-[1px] bg-[#B40018]" />
            <span>OPTICS · COMPOSITION · SHADOW</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 pb-8 border-b border-[#262626]">
            <div className="lg:col-span-8 space-y-4">
              <h2 className="reveal-item text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold uppercase font-display leading-[0.88] tracking-tight">
                I SEE
                <span className="block text-[#B40018]">IN FRAMES.</span>
              </h2>
              <p className="reveal-item font-mono text-sm tracking-widest text-[#A3A199] uppercase">
                CINEMATOGRAPHY &amp; VISUAL GRAMMAR
              </p>
            </div>

            <div className="lg:col-span-4 space-y-4">
              <blockquote className="reveal-item p-5 bg-[#0D0D0D] border-l-2 border-[#B40018] border-y border-r border-[#262626] text-sm md:text-base italic text-[#F4F1EA] leading-relaxed">
                &ldquo;In college, I came in as a student. Somewhere along the way, people started knowing
                me as the cinematographer.&rdquo;
              </blockquote>
              <p className="reveal-item text-xs text-[#A3A199] font-mono">
                / The camera stopped being an external tool and became the primary way I translate reality.
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Viewfinder Scope Frame with Parallax Image Shift */}
        <div className="reveal-group mb-20">
          <div className="reveal-item flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 font-mono text-xs text-[#A3A199]">
            <div className="flex items-center gap-3">
              <Camera className="w-4 h-4 text-[#B40018]" />
              <span className="text-[#F4F1EA]">DIRECTOR&apos;S VIEWFINDER SIMULATION</span>
              <span className="text-[#262626]">|</span>
              <span>LENS: 35MM ANAMORPHIC</span>
            </div>

            {/* Aspect Ratio Switcher */}
            <div className="flex items-center gap-2">
              <span className="text-[11px] uppercase tracking-wider text-[#A3A199]">Aspect Ratio:</span>
              <div className="flex items-center gap-1 bg-[#121212] p-1 border border-[#262626]">
                <button
                  type="button"
                  onClick={() => setAspectScope('2.39')}
                  className={`px-2.5 py-1 text-[11px] font-mono transition-colors ${
                    aspectScope === '2.39' ? 'bg-[#B40018] text-[#F4F1EA]' : 'text-[#A3A199] hover:text-[#F4F1EA]'
                  }`}
                >
                  2.39:1 (Scope)
                </button>
                <button
                  type="button"
                  onClick={() => setAspectScope('16:9')}
                  className={`px-2.5 py-1 text-[11px] font-mono transition-colors ${
                    aspectScope === '16:9' ? 'bg-[#B40018] text-[#F4F1EA]' : 'text-[#A3A199] hover:text-[#F4F1EA]'
                  }`}
                >
                  16:9 (HD)
                </button>
                <button
                  type="button"
                  onClick={() => setAspectScope('4:3')}
                  className={`px-2.5 py-1 text-[11px] font-mono transition-colors ${
                    aspectScope === '4:3' ? 'bg-[#B40018] text-[#F4F1EA]' : 'text-[#A3A199] hover:text-[#F4F1EA]'
                  }`}
                >
                  4:3 (Academy)
                </button>
              </div>
            </div>
          </div>

          {/* Frame Container with Parallax Internal Still */}
          <div
            className={`parallax-container reveal-item w-full bg-[#080808] border border-[#262626] relative overflow-hidden transition-all duration-500 mx-auto ${
              aspectScope === '2.39'
                ? 'aspect-[21/9]'
                : aspectScope === '16:9'
                ? 'aspect-video'
                : 'aspect-[4/3] max-w-2xl'
            }`}
          >
            {/* Viewfinder crosshairs */}
            <div className="viewfinder-corner viewfinder-tl viewfinder-tr viewfinder-bl viewfinder-br absolute inset-0 z-20 pointer-events-none" />

            {/* Authentic Cinematic Anamorphic Film Still Photo with Parallax & Grade */}
            <div className="parallax-img absolute -inset-y-16 inset-x-0 overflow-hidden pointer-events-none">
              <img
                src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=1920&q=85"
                alt="Cinematic 35mm anamorphic film still - chiaroscuro silhouette in atmospheric haze"
                className="w-full h-full object-cover object-center filter contrast-125 brightness-75 animate-project-kenburns scale-105"
              />
              {/* Cinematic Noir & Crimson Color Grade Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#040404] via-[#040404]/30 to-[#040404]/60" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#040404]/90 via-transparent to-[#040404]/90" />
              <div className="absolute inset-0 bg-[#B40018]/15 mix-blend-color" />
              {/* Anamorphic horizontal streak flare */}
              <div className="absolute top-1/2 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#F4F1EA]/30 to-transparent blur-[1px] opacity-40 pointer-events-none" />
            </div>

            {/* Viewfinder Compositional Reticle & Rule of Thirds Overlay */}
            <div className="absolute inset-0 z-10 flex flex-col justify-between p-6 pointer-events-none">
              {/* Rule of Thirds grid */}
              <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 opacity-20 pointer-events-none">
                <div className="border-r border-b border-[#F4F1EA]/40" />
                <div className="border-r border-b border-[#F4F1EA]/40" />
                <div className="border-b border-[#F4F1EA]/40" />
                <div className="border-r border-b border-[#F4F1EA]/40" />
                <div className="border-r border-b border-[#F4F1EA]/40" />
                <div className="border-b border-[#F4F1EA]/40" />
                <div className="border-r border-b border-[#F4F1EA]/40" />
                <div className="border-r border-b border-[#F4F1EA]/40" />
                <div />
              </div>

              {/* Top Viewfinder Metadata */}
              <div className="relative z-20 flex items-center justify-between text-[11px] font-mono text-[#F4F1EA]/90 bg-[#050505]/75 px-3 py-1.5 border border-[#262626] backdrop-blur-sm self-start">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#B40018] animate-ping" />
                  <span className="font-bold text-[#B40018]">LIVE MONITOR // ARRI ALEXA MINI LF</span>
                </span>
                <span className="ml-4 text-[#A3A199]">EI 800 · 3200K · 35MM T2.0</span>
              </div>

              {/* Center Cinematic Title / Reticle Focus */}
              <div className="relative z-20 text-center px-4 max-w-2xl mx-auto my-auto py-4 bg-[#050505]/60 backdrop-blur-[2px] border border-[#262626]/60">
                <span className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-[#B40018] font-bold block mb-1.5">
                  CINEMATOGRAPHY STILL // FRAME 1042
                </span>
                <p className="text-xl sm:text-3xl md:text-4xl font-extrabold uppercase font-display tracking-wide text-[#F4F1EA] drop-shadow-lg">
                  LIGHT SHAPES EMOTION BEFORE WORDS SPEAK.
                </p>
                <div className="mt-2 flex flex-wrap items-center justify-center gap-2 sm:gap-4 font-mono text-[10px] sm:text-xs text-[#A3A199]">
                  <span>24.00 FPS</span>
                  <span>·</span>
                  <span>180° SHUTTER</span>
                  <span>·</span>
                  <span>ANAMORPHIC 2.0x SQUEEZE</span>
                  <span>·</span>
                  <span className="text-[#B40018] font-bold">PSYCHO CREATIONS</span>
                </div>
              </div>

              {/* Safe Area Markers */}
              <div className="relative z-10 flex justify-end">
                <span className="text-[9px] font-mono text-[#A3A199] bg-[#050505]/80 px-2 py-0.5 border border-[#262626]">
                  90% SAFE TITLE BOUNDARY
                </span>
              </div>
            </div>

            {/* Bottom HUD bar */}
            <div className="absolute bottom-3 left-4 right-4 z-20 flex items-center justify-between text-[10px] font-mono text-[#F4F1EA]/80 bg-[#050505]/80 px-3 py-1 backdrop-blur-sm border border-[#262626]">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B40018] animate-ping" />
                <span>STANDBY · LIVE VIEWFINDER</span>
              </span>
              <span>AUDIO: -12dB · CH1 / CH2 OK</span>
              <span>COLOR: REC.709 NOIR CRIMSON</span>
            </div>
          </div>
        </div>

        {/* 3 Pillars of Adarsh's Cinematography with Staggered Card Reveals */}
        <div className="reveal-cards-grid grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="reveal-card p-6 bg-[#090909] border border-[#262626] hover:border-[#404040] transition-colors">
            <span className="font-mono text-xs text-[#B40018] font-bold block mb-2">PILLAR 01</span>
            <h4 className="text-xl font-bold uppercase font-display text-[#F4F1EA] mb-2">
              CHIAROSCURO &amp; MOTIVATED LIGHT
            </h4>
            <p className="text-xs sm:text-sm text-[#A3A199] leading-relaxed">
              Every shadow must have a reason to exist. Using directional rim lights and architectural
              frames to carve characters out of pitch darkness.
            </p>
          </div>

          <div className="reveal-card p-6 bg-[#090909] border border-[#262626] hover:border-[#404040] transition-colors">
            <span className="font-mono text-xs text-[#B40018] font-bold block mb-2">PILLAR 02</span>
            <h4 className="text-xl font-bold uppercase font-display text-[#F4F1EA] mb-2">
              SPATIAL TENSION &amp; LENSING
            </h4>
            <p className="text-xs sm:text-sm text-[#A3A199] leading-relaxed">
              Choosing focal lengths intentionally. Wide angles for isolating human claustrophobia;
              compressed telephoto primes for intimate psychological pressure.
            </p>
          </div>

          <div className="reveal-card p-6 bg-[#090909] border border-[#262626] hover:border-[#404040] transition-colors">
            <span className="font-mono text-xs text-[#B40018] font-bold block mb-2">PILLAR 03</span>
            <h4 className="text-xl font-bold uppercase font-display text-[#F4F1EA] mb-2">
              EDIT-FIRST CAMERA MOVEMENT
            </h4>
            <p className="text-xs sm:text-sm text-[#A3A199] leading-relaxed">
              Because I edit my own footage, every pan, push, and static hold is executed with the cut
              point in mind. No empty camera moves.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
