import React, { useState, useRef, useEffect } from 'react';
import { Upload, Maximize2, X, Image as ImageIcon, Check } from 'lucide-react';
import {
  FILM_THE_SHADOW,
  FILM_NIYATI,
  FILM_GENRES_INTEREST,
} from '../data/portfolioData';
import { savePoster, getPoster } from '../utils/posterStorage';
import { useScrollAnimations } from '../hooks/useScrollAnimations';

export const FilmmakingSection: React.FC = () => {
  const containerRef = useScrollAnimations<HTMLElement>({
    enableParallax: false, // Keeping cinema slots strictly static as requested
    staggerDelay: 0.1,
  });

  const [activeTabShadow, setActiveTabShadow] = useState<
    'concept' | 'cinematography' | 'editing' | 'sound' | 'progress'
  >('concept');
  const [fullscreenPoster, setFullscreenPoster] = useState<{ src: string; title: string } | null>(null);

  // Original poster image states
  const [shadowPoster, setShadowPoster] = useState<string | null>(null);
  const [niyatiPoster, setNiyatiPoster] = useState<string | null>(null);

  const shadowInputRef = useRef<HTMLInputElement>(null);
  const niyatiInputRef = useRef<HTMLInputElement>(null);

  const [shadowDragging, setShadowDragging] = useState(false);
  const [niyatiDragging, setNiyatiDragging] = useState(false);

  // Load saved original posters on mount
  useEffect(() => {
    async function loadPosters() {
      const savedShadow = await getPoster('the_shadow');
      if (savedShadow) setShadowPoster(savedShadow);

      const savedNiyati = await getPoster('niyati');
      if (savedNiyati) setNiyatiPoster(savedNiyati);
    }
    loadPosters();
  }, []);

  const handleFile = async (file: File, type: 'shadow' | 'niyati') => {
    if (!file || !file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = async (e) => {
      const dataUrl = e.target?.result as string;
      if (type === 'shadow') {
        setShadowPoster(dataUrl);
        await savePoster('the_shadow', dataUrl);
      } else {
        setNiyatiPoster(dataUrl);
        await savePoster('niyati', dataUrl);
      }
    };
    reader.readAsDataURL(file);
  };

  const onDropFile = (e: React.DragEvent, type: 'shadow' | 'niyati') => {
    e.preventDefault();
    if (type === 'shadow') setShadowDragging(false);
    else setNiyatiDragging(false);

    const file = e.dataTransfer.files?.[0];
    if (file) handleFile(file, type);
  };

  return (
    <section ref={containerRef} id="films" className="py-24 md:py-36 bg-[#050505] text-[#F4F1EA] border-t border-[#262626] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header with Staggered Reveal */}
        <div className="reveal-group flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-[#262626]">
          <div>
            <span className="reveal-item text-xs font-mono uppercase tracking-widest text-[#B40018] block mb-2 font-bold">
              NARRATIVE &amp; PSYCHOLOGICAL CINEMA
            </span>
            <h2 className="reveal-item text-5xl sm:text-6xl md:text-7xl font-extrabold uppercase font-display tracking-tight text-[#F4F1EA]">
              I TELL
              <span className="block text-[#B40018]">STORIES.</span>
            </h2>
          </div>

          <div className="reveal-item max-w-md space-y-2">
            <p className="text-lg md:text-xl font-bold uppercase font-display text-[#F4F1EA]">
              &ldquo;I don’t want to make films people simply watch. I want to make films they
              remember.&rdquo;
            </p>
            <p className="text-xs text-[#A3A199] font-mono">
              / Directing, cutting, and scoring psychological thrillers under Psycho Creations.
            </p>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 1. THE SHADOW - OFFICIAL ORIGINAL POSTER SLOT (STATIC / NO ANIMATION)     */}
        {/* ========================================================================= */}
        <div className="mb-24 bg-[#0A0A0A] border-2 border-[#B40018]/60 p-6 md:p-10 lg:p-12 relative">
          {/* Ongoing Status Flag */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-[#262626]">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#B40018]" />
              <span className="font-mono text-xs uppercase tracking-widest text-[#B40018] font-bold">
                CURRENT ACTIVE FILM PRODUCTION
              </span>
              <span className="text-[#A3A199]">·</span>
              <span className="font-mono text-xs text-[#F4F1EA] uppercase">
                {FILM_THE_SHADOW.production}
              </span>
            </div>

            <div className="font-mono text-xs text-[#F4F1EA] bg-[#B40018] px-3 py-1 font-bold tracking-wider uppercase">
              {FILM_THE_SHADOW.status}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column: Official Poster Slot (Original Photo, Static, No Animation) */}
            <div className="lg:col-span-5">
              <div
                onDragOver={(e) => {
                  e.preventDefault();
                  setShadowDragging(true);
                }}
                onDragLeave={() => setShadowDragging(false)}
                onDrop={(e) => onDropFile(e, 'shadow')}
                className={`relative aspect-[2/3] w-full bg-[#050505] border transition-colors overflow-hidden ${
                  shadowDragging ? 'border-[#B40018] bg-[#140002]' : 'border-[#262626]'
                }`}
              >
                {/* If original photo has been loaded */}
                {shadowPoster ? (
                  <div className="w-full h-full relative">
                    <img
                      src={shadowPoster}
                      alt="THE SHADOW: HUNTING FROM THE DARK - Original Film Poster"
                      className="w-full h-full object-cover object-center select-none block"
                      onClick={() =>
                        setFullscreenPoster({
                          src: shadowPoster,
                          title: 'THE SHADOW: HUNTING FROM THE DARK',
                        })
                      }
                    />
                    {/* Minimal Fullscreen button */}
                    <button
                      type="button"
                      onClick={() =>
                        setFullscreenPoster({
                          src: shadowPoster,
                          title: 'THE SHADOW: HUNTING FROM THE DARK',
                        })
                      }
                      className="absolute bottom-3 right-3 p-2 bg-[#050505]/90 text-[#F4F1EA] hover:bg-[#B40018] border border-[#262626] text-xs font-mono flex items-center gap-1.5 transition-colors"
                      title="View Full Resolution"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span className="text-[10px] tracking-wider uppercase">Enlarge</span>
                    </button>
                  </div>
                ) : (
                  /* Initial Slot awaiting original photo: Ultra-clean upload zone for Adarsh's uploaded image */
                  <div
                    onClick={() => shadowInputRef.current?.click()}
                    className="w-full h-full flex flex-col items-center justify-center p-6 text-center cursor-pointer bg-[#0D0D0D] hover:bg-[#121212] transition-colors"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#171717] border border-[#B40018] flex items-center justify-center mb-4 text-[#B40018]">
                      <Upload className="w-7 h-7" />
                    </div>

                    <span className="font-mono text-xs text-[#B40018] font-bold tracking-widest uppercase mb-1">
                      THE SHADOW POSTER SLOT
                    </span>
                    <h4 className="text-xl font-bold uppercase font-display text-[#F4F1EA] mb-2">
                      Drop Original Photo Here
                    </h4>
                    <p className="text-xs text-[#A3A199] max-w-[240px] leading-relaxed">
                      Click or drag your original <strong>THE SHADOW</strong> image file (the red bloody hand poster) here to display it.
                    </p>

                    <button
                      type="button"
                      className="mt-6 px-4 py-2 bg-[#B40018] text-[#F4F1EA] text-xs font-mono font-bold uppercase tracking-wider"
                    >
                      Select Original Photo
                    </button>
                  </div>
                )}
              </div>

              {/* Hidden file input */}
              <input
                ref={shadowInputRef}
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const f = e.target.files?.[0];
                  if (f) handleFile(f, 'shadow');
                }}
                className="hidden"
              />

              {/* Actions footer */}
              <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-[#A3A199]">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B40018]" />
                  <span>ORIGINAL POSTER · STATIC VIEW</span>
                </span>
                <button
                  type="button"
                  onClick={() => shadowInputRef.current?.click()}
                  className="text-[#F4F1EA] hover:text-[#B40018] transition-colors underline"
                >
                  {shadowPoster ? 'Replace Original Photo' : 'Upload File'}
                </button>
              </div>
            </div>

            {/* Right: Production Dossier Tabs & Deep Dive */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="font-mono text-xs text-[#B40018] uppercase tracking-wider font-bold">
                  GENRE: {FILM_THE_SHADOW.genre.toUpperCase()}
                </span>
                <h3 className="text-3xl sm:text-4xl font-extrabold uppercase font-display text-[#F4F1EA] mt-1">
                  THE SHADOW: {FILM_THE_SHADOW.subtitle}
                </h3>
                <p className="text-base sm:text-lg text-[#F4F1EA]/90 font-serif italic mt-3">
                  &ldquo;SOME HUNTS ARE NOT ABOUT PREY... BUT ABOUT THE DARK.&rdquo;
                </p>
              </div>

              {/* Roles Badge List */}
              <div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#A3A199] block mb-2">
                  ADARSH&apos;S PRODUCTION ROLES:
                </span>
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                  {FILM_THE_SHADOW.roles.map((role, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-[#141414] border border-[#262626] text-[#F4F1EA] font-semibold"
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>

              {/* Cast & Crew Direct Verification from Poster */}
              <div className="p-4 bg-[#0E0E0E] border border-[#262626] space-y-2 text-xs font-mono text-[#A3A199]">
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                  <span>
                    DIRECTED BY: <strong className="text-[#F4F1EA]">{FILM_THE_SHADOW.director}</strong>
                  </span>
                  <span>·</span>
                  <span>
                    PRODUCED BY: <strong className="text-[#F4F1EA]">{FILM_THE_SHADOW.producer}</strong>
                  </span>
                </div>
                <p className="text-[11px] text-[#A3A199]/90 pt-1 border-t border-[#262626]">
                  ACTORS: {FILM_THE_SHADOW.cast?.join(' · ')}
                </p>
              </div>

              {/* Technical Specs Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-1">
                {FILM_THE_SHADOW.technicalSpecs.map((spec, i) => (
                  <div key={i} className="p-3 bg-[#111111] border border-[#262626] font-mono text-[11px]">
                    <span className="text-[#A3A199] block text-[9px] uppercase">{spec.label}</span>
                    <span className="text-[#F4F1EA] font-bold">{spec.value}</span>
                  </div>
                ))}
              </div>

              {/* Production Dossier Tabs */}
              <div className="pt-2">
                <div className="flex items-center gap-1 border-b border-[#262626] pb-1 overflow-x-auto text-xs font-mono scrollbar-none">
                  {(['concept', 'cinematography', 'editing', 'sound', 'progress'] as const).map(
                    (tab) => (
                      <button
                        key={tab}
                        type="button"
                        onClick={() => setActiveTabShadow(tab)}
                        className={`min-h-[44px] flex items-center px-4 py-2.5 uppercase tracking-wider transition-colors whitespace-nowrap active:scale-95 ${
                          activeTabShadow === tab
                            ? 'bg-[#B40018] text-[#F4F1EA] font-bold'
                            : 'text-[#A3A199] hover:text-[#F4F1EA]'
                        }`}
                      >
                        {tab}
                      </button>
                    )
                  )}
                </div>

                {/* Tab Content Box */}
                <div className="p-5 bg-[#0F0F0F] border-x border-b border-[#262626] text-sm text-[#A3A199] leading-relaxed">
                  {activeTabShadow === 'concept' && (
                    <p>{FILM_THE_SHADOW.productionNotes.concept}</p>
                  )}
                  {activeTabShadow === 'cinematography' && (
                    <p>{FILM_THE_SHADOW.productionNotes.cinematography}</p>
                  )}
                  {activeTabShadow === 'editing' && (
                    <p>{FILM_THE_SHADOW.productionNotes.editing}</p>
                  )}
                  {activeTabShadow === 'sound' && (
                    <p>{FILM_THE_SHADOW.productionNotes.sound}</p>
                  )}
                  {activeTabShadow === 'progress' && (
                    <div className="space-y-2">
                      <p className="text-[#F4F1EA] font-semibold">
                        {FILM_THE_SHADOW.productionNotes.progress}
                      </p>
                      <p className="text-xs text-[#A3A199]">
                        Official production under Psycho Creations. Cinematography and sound design
                        crafted by Adarsh R Mohithe.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 2. NIYATI - OFFICIAL ORIGINAL POSTER SLOT (STATIC / NO ANIMATION)         */}
        {/* ========================================================================= */}
        <div className="mb-20 bg-[#0B0B0B] border border-[#262626] p-6 md:p-10 relative">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-[#262626]">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#A3A199] block mb-1">
                A FILM BY ADARSH R MOHITHE
              </span>
              <h3 className="text-3xl sm:text-4xl font-extrabold uppercase font-display text-[#F4F1EA]">
                NIYATI
              </h3>
            </div>

            <div className="font-mono text-xs text-[#A3A199] border border-[#262626] px-3 py-1">
              STATUS: {FILM_NIYATI.status}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Official Poster Slot (Original Photo, Static, No Animation) */}
            <div className="lg:col-span-5">
              <div
                onDragOver={(e) => {
                  e.preventDefault();
                  setNiyatiDragging(true);
                }}
                onDragLeave={() => setNiyatiDragging(false)}
                onDrop={(e) => onDropFile(e, 'niyati')}
                className={`relative aspect-[2/3] w-full bg-[#050505] border transition-colors overflow-hidden ${
                  niyatiDragging ? 'border-[#B40018] bg-[#140002]' : 'border-[#262626]'
                }`}
              >
                {/* If original photo has been loaded */}
                {niyatiPoster ? (
                  <div className="w-full h-full relative">
                    <img
                      src={niyatiPoster}
                      alt="NIYATI: A PSYCHOLOGICAL THRILLER - Original Film Poster"
                      className="w-full h-full object-cover object-center select-none block"
                      onClick={() =>
                        setFullscreenPoster({
                          src: niyatiPoster,
                          title: 'NIYATI: A PSYCHOLOGICAL THRILLER',
                        })
                      }
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setFullscreenPoster({
                          src: niyatiPoster,
                          title: 'NIYATI: A PSYCHOLOGICAL THRILLER',
                        })
                      }
                      className="absolute bottom-3 right-3 p-2 bg-[#050505]/90 text-[#F4F1EA] hover:bg-[#B40018] border border-[#262626] text-xs font-mono flex items-center gap-1.5 transition-colors"
                      title="View Full Resolution"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span className="text-[10px] tracking-wider uppercase">Enlarge</span>
                    </button>
                  </div>
                ) : (
                  /* Initial Slot awaiting original photo */
                  <div
                    onClick={() => niyatiInputRef.current?.click()}
                    className="w-full h-full flex flex-col items-center justify-center p-6 text-center cursor-pointer bg-[#0D0D0D] hover:bg-[#121212] transition-colors"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#171717] border border-[#262626] flex items-center justify-center mb-4 text-[#F4F1EA]">
                      <Upload className="w-7 h-7" />
                    </div>

                    <span className="font-mono text-xs text-[#A3A199] font-bold tracking-widest uppercase mb-1">
                      NIYATI POSTER SLOT
                    </span>
                    <h4 className="text-xl font-bold uppercase font-display text-[#F4F1EA] mb-2">
                      Drop Original Photo Here
                    </h4>
                    <p className="text-xs text-[#A3A199] max-w-[240px] leading-relaxed">
                      Click or drag your original <strong>NIYATI</strong> image file (the silhouette corridor poster) here to display it.
                    </p>

                    <button
                      type="button"
                      className="mt-6 px-4 py-2 bg-[#171717] hover:bg-[#262626] text-[#F4F1EA] border border-[#262626] text-xs font-mono font-bold uppercase tracking-wider"
                    >
                      Select Original Photo
                    </button>
                  </div>
                )}
              </div>

              {/* Hidden file input */}
              <input
                ref={niyatiInputRef}
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const f = e.target.files?.[0];
                  if (f) handleFile(f, 'niyati');
                }}
                className="hidden"
              />

              {/* Actions footer */}
              <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-[#A3A199]">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B40018]" />
                  <span>ORIGINAL POSTER · STATIC VIEW</span>
                </span>
                <button
                  type="button"
                  onClick={() => niyatiInputRef.current?.click()}
                  className="text-[#F4F1EA] hover:text-[#B40018] transition-colors underline"
                >
                  {niyatiPoster ? 'Replace Original Photo' : 'Upload File'}
                </button>
              </div>
            </div>

            {/* Right Info */}
            <div className="lg:col-span-7 space-y-5">
              <div>
                <span className="font-mono text-xs text-[#B40018] font-bold block mb-1">
                  A PSYCHOLOGICAL THRILLER · PSYCHO CREATIONS
                </span>
                <p className="text-xl sm:text-2xl font-bold font-serif italic text-[#F4F1EA]">
                  &ldquo;WAS IT EVER YOUR CHOICE?&rdquo;
                </p>
                <p className="text-sm font-mono text-[#A3A199] mt-1">
                  &ldquo;SOME PEOPLE ARE NOT WHO THEY SEEM&rdquo;
                </p>
              </div>

              <p className="text-sm sm:text-base text-[#A3A199] leading-relaxed">
                Written and directed by Adarsh R Mohithe under Psycho Creations. An exploration of
                surveillance, guilt, duality (Expose / Understand), and the psychological traps of
                unconscious decisions.
              </p>

              {/* Direct credits from original poster */}
              <div className="p-4 bg-[#0E0E0E] border border-[#262626] space-y-2 text-xs font-mono text-[#A3A199]">
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                  <span>
                    A FILM BY: <strong className="text-[#F4F1EA]">ADARSH R MOHITHE</strong>
                  </span>
                  <span>·</span>
                  <span>
                    ASSISTANT DIRECTOR: <strong className="text-[#F4F1EA]">NIKITH</strong>
                  </span>
                  <span>·</span>
                  <span>
                    PRODUCER: <strong className="text-[#F4F1EA]">YASHWANTH</strong>
                  </span>
                </div>
                <p className="text-[11px] text-[#A3A199]/90 pt-1 border-t border-[#262626]">
                  ACTORS: ROHAN | BHANU PRAKASH G | YASHWANTH | NIKITH | NISARGA
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono text-[#F4F1EA]">
                <span className="px-3 py-1 bg-[#141414] border border-[#262626]">
                  Director &amp; Visual World: Adarsh R Mohithe
                </span>
                <span className="px-3 py-1 bg-[#141414] border border-[#262626]">
                  Aesthetic: High-Contrast Noir &amp; Surveillance Optics
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* GENRES OF EXPLORATION */}
        <div className="reveal-group">
          <span className="reveal-item text-xs font-mono uppercase tracking-widest text-[#B40018] block mb-3 font-bold">
            CINEMATIC PALETTE
          </span>
          <h3 className="reveal-item text-2xl md:text-3xl font-extrabold uppercase font-display text-[#F4F1EA] mb-6">
            GENRES ADARSH IS EXPLORING
          </h3>

          <div className="reveal-cards-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {FILM_GENRES_INTEREST.map((genre, idx) => (
              <div
                key={idx}
                className="reveal-card p-5 bg-[#0A0A0A] border border-[#262626] hover:border-[#B40018] transition-colors"
              >
                <span className="font-mono text-xs text-[#B40018] font-bold block mb-1">
                  0{idx + 1}
                </span>
                <h4 className="text-lg font-bold uppercase font-display text-[#F4F1EA] mb-2">
                  {genre.name}
                </h4>
                <p className="text-xs text-[#A3A199] leading-relaxed font-sans">{genre.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Fullscreen Static Viewer (Zero Animation) */}
      {fullscreenPoster && (
        <div
          className="fixed inset-0 z-50 bg-[#050505]/95 flex items-center justify-center p-4 md:p-8"
          onClick={() => setFullscreenPoster(null)}
        >
          <div
            className="relative max-h-[92vh] max-w-2xl w-auto flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setFullscreenPoster(null)}
              className="absolute -top-10 right-0 p-1.5 text-[#F4F1EA] hover:text-[#B40018] transition-colors"
              aria-label="Close"
            >
              <X className="w-7 h-7" />
            </button>

            <img
              src={fullscreenPoster.src}
              alt={fullscreenPoster.title}
              className="max-h-[85vh] w-auto object-contain border border-[#262626]"
            />

            <div className="pt-3 text-center">
              <p className="font-mono text-xs uppercase tracking-widest text-[#F4F1EA] font-bold">
                {fullscreenPoster.title}
              </p>
              <p className="font-mono text-[10px] text-[#A3A199]">
                OFFICIAL PSYCHO CREATIONS ORIGINAL POSTER
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
