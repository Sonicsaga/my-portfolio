import React, { useState } from 'react';
import { ArrowUpRight, Camera, Film, Eye, Sparkles, X, Sliders } from 'lucide-react';
import { MONTAGESANCHARI_GALLERY, GalleryItem, PERSONAL_BRAND } from '../data/portfolioData';
import { useScrollAnimations } from '../hooks/useScrollAnimations';

export const MontageSanchariSection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const containerRef = useScrollAnimations<HTMLElement>({
    parallaxSpeed: 20,
    staggerDelay: 0.08,
  });

  const filters = ['All', 'Cinematic', 'Editing', 'Photography', 'Reels', 'Experiments'];

  const filteredItems =
    selectedFilter === 'All'
      ? MONTAGESANCHARI_GALLERY
      : MONTAGESANCHARI_GALLERY.filter((item) => item.category === selectedFilter);

  return (
    <section
      ref={containerRef}
      id="montagesanchari"
      className="py-24 md:py-36 bg-[#080808] border-t border-[#262626] relative overflow-hidden"
    >
      {/* Subtle Parallax Ambient Background */}
      <div
        className="parallax-layer absolute top-10 right-10 w-[500px] h-[500px] bg-[#B40018]/5 rounded-full blur-[140px] pointer-events-none"
        data-parallax-speed="25"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header with Staggered Reveal */}
        <div className="reveal-group flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 pb-8 border-b border-[#262626]">
          <div>
            <div className="reveal-item flex items-center gap-3 text-xs md:text-sm font-mono tracking-widest text-[#B40018] uppercase mb-4">
              <span className="w-8 h-[1px] bg-[#B40018]" />
              <span>VISUAL LAB &amp; CONTENT IDENTITY</span>
            </div>

            <h2 className="reveal-item text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold uppercase font-display leading-[0.88] tracking-tight text-[#F4F1EA]">
              MONTAGE
              <span className="block text-[#B40018]">SANCHARI</span>
            </h2>

            <p className="reveal-item mt-4 text-xl sm:text-2xl font-bold uppercase font-display text-[#A3A199]">
              Frames. Motion. Stories.
            </p>
          </div>

          <div className="reveal-item max-w-md space-y-4">
            <p className="text-sm md:text-base text-[#F4F1EA]/90 leading-relaxed font-sans">
              MontageSanchari is Adarsh&apos;s visual/content-creation identity — a dedicated space
              for cinematic edits, street photography, visual experiments, and storytelling.
            </p>

            <a
              href={PERSONAL_BRAND.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 bg-[#B40018] hover:bg-[#7A0010] text-[#F4F1EA] text-xs font-bold font-mono uppercase tracking-wider transition-colors cinema-glow whitespace-nowrap"
            >
              <span>Visit Instagram {PERSONAL_BRAND.instagramHandle}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Filter Bar with Staggered Items - Touch-friendly min 44px height */}
        <div className="reveal-group flex items-center gap-2 mb-10 overflow-x-auto pb-2 scrollbar-none">
          {filters.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedFilter(category)}
              className={`reveal-item min-h-[44px] flex items-center px-4 py-2.5 text-xs font-mono tracking-wider uppercase transition-colors whitespace-nowrap active:scale-95 ${
                selectedFilter === category
                  ? 'bg-[#B40018] text-[#F4F1EA] font-bold'
                  : 'bg-[#121212] text-[#A3A199] hover:text-[#F4F1EA] border border-[#262626] active:bg-[#1a1a1a]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Curated Editorial Masonry/Grid Gallery with Staggered Reveal & Parallax Image Containers */}
        <div className="reveal-cards-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => {
            const isTall = item.format === '3:4';
            const isWide = item.format === '16:9';

            return (
              <div
                key={item.id}
                onClick={() => setActiveItem(item)}
                className={`reveal-card parallax-container relative bg-[#0D0D0D] border border-[#262626] hover:border-[#B40018] transition-all duration-300 cursor-pointer group flex flex-col justify-between overflow-hidden ${
                  isTall ? 'min-h-[460px]' : isWide ? 'min-h-[380px]' : 'min-h-[420px]'
                }`}
                data-cursor="view"
                data-cursor-text="INSPECT"
              >
                {/* Viewfinder crosshairs */}
                <div className="viewfinder-corner viewfinder-tl viewfinder-tr viewfinder-bl viewfinder-br absolute inset-0 pointer-events-none z-20" />

                {/* Real High-Resolution Photographic Canvas with Ken Burns Motion and Color Grade */}
                {item.imageUrl ? (
                  <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                    <img
                      src={item.imageUrl}
                      alt={item.imageAlt || item.title}
                      loading="lazy"
                      className="w-full h-full object-cover object-center filter grayscale contrast-125 brightness-75 group-hover:grayscale-0 group-hover:brightness-95 group-hover:contrast-110 transition-all duration-700 ease-out animate-project-kenburns group-hover:scale-110"
                    />
                    {/* Atmospheric Vignette & Color Grade Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-[#090909]/65 to-[#090909]/40 group-hover:via-[#090909]/30 transition-all duration-500" />
                    <div className="absolute inset-0 bg-[#B40018]/15 mix-blend-color group-hover:opacity-20 transition-opacity duration-500" />
                    {/* Subtle 35mm optical grain */}
                    <div className="absolute inset-0 bg-[radial-gradient(#262626_1px,transparent_1px)] [background-size:16px_16px] opacity-20 pointer-events-none" />
                  </div>
                ) : (
                  <div className="parallax-img absolute -inset-y-12 inset-x-0 bg-gradient-to-t from-[#050505] via-[#101010]/90 to-transparent group-hover:via-[#B40018]/15 transition-all duration-500 pointer-events-none z-0" />
                )}

                {/* Subtle crimson accent line on top edge */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#B40018] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left z-30" />

                {/* Top Item Meta HUD */}
                <div className="relative z-10 p-5 pb-0 flex items-center justify-between text-[11px] font-mono text-[#A3A199]">
                  <span className="text-[#B40018] font-bold bg-[#070707]/80 px-2 py-0.5 border border-[#262626] backdrop-blur-sm">
                    {item.category}
                  </span>
                  <span className="bg-[#070707]/80 px-2 py-0.5 border border-[#262626] backdrop-blur-sm text-[#F4F1EA]">
                    {item.focalLength?.split('·')[0].trim() || 'CINEMATIC'}
                  </span>
                </div>

                {/* Center Hover Shutter Indicator */}
                <div className="relative z-10 my-auto text-center py-6 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#050505]/90 border border-[#B40018] text-[10px] font-mono tracking-widest text-[#F4F1EA] uppercase backdrop-blur-md">
                    <Camera className="w-3.5 h-3.5 text-[#B40018]" />
                    <span>VIEW EXPOSURE LOG</span>
                  </div>
                </div>

                {/* Bottom Item Details & Shutter Metadata */}
                <div className="relative z-10 p-5 pt-3 bg-gradient-to-t from-[#080808] via-[#080808]/95 to-transparent border-t border-[#262626]/80 backdrop-blur-[2px]">
                  <div className="flex items-center gap-2 mb-1.5 font-mono text-[10px] text-[#B40018]">
                    <span>{item.location || 'BANGALORE · ON LOCATION'}</span>
                    <span>·</span>
                    <span className="text-[#A3A199]">{item.format} FRAME</span>
                  </div>

                  <h4 className="text-xl font-bold uppercase font-display tracking-wide text-[#F4F1EA] group-hover:text-[#B40018] transition-colors leading-tight">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#A3A199] mt-1.5 font-sans line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="mt-3.5 pt-2.5 border-t border-[#262626]/60 flex items-center justify-between text-[10px] font-mono text-[#A3A199]">
                    <span className="truncate max-w-[190px]">GRADE: {item.colorGrade}</span>
                    <span className="text-[#F4F1EA] font-bold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                      <span>INSPECT</span>
                      <span>→</span>
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox / Media Detail Modal */}
      {activeItem && (
        <div className="fixed inset-0 z-50 bg-[#050505]/95 backdrop-blur-lg flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-200">
          <div className="relative w-full max-w-4xl bg-[#0D0D0D] border border-[#262626] p-6 md:p-8 shadow-2xl max-h-[92vh] overflow-y-auto">
            {/* Viewfinder crosshairs */}
            <div className="viewfinder-corner viewfinder-tl viewfinder-tr viewfinder-bl viewfinder-br absolute inset-0 pointer-events-none" />

            <div className="flex items-center justify-between pb-4 border-b border-[#262626]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#B40018] animate-ping" />
                <span className="font-mono text-xs text-[#B40018] font-bold tracking-widest uppercase">
                  MONTAGESANCHARI EXHIBITION // EXPOSURE RECORD
                </span>
              </div>
              <button
                type="button"
                onClick={() => setActiveItem(null)}
                className="p-1 text-[#A3A199] hover:text-[#F4F1EA] transition-colors"
                aria-label="Close lightbox"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="py-6 space-y-5">
              <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
                <span className="text-[#F4F1EA] bg-[#171717] px-3 py-1 border border-[#262626] font-bold">
                  {activeItem.category}
                </span>
                <span className="text-[#A3A199] bg-[#171717] px-3 py-1 border border-[#262626]">
                  {activeItem.format} RATIO
                </span>
                {activeItem.location && (
                  <span className="text-[#B40018] bg-[#171717] px-3 py-1 border border-[#262626]">
                    📍 {activeItem.location}
                  </span>
                )}
              </div>

              <div>
                <h3 className="text-3xl sm:text-4xl font-extrabold uppercase font-display text-[#F4F1EA]">
                  {activeItem.title}
                </h3>
                <p className="mt-1 text-sm text-[#A3A199] font-sans">
                  {activeItem.description}
                </p>
              </div>

              {/* Full-Frame Photo Exhibition Still with Camera HUD */}
              <div className="relative aspect-video w-full bg-[#050505] border border-[#262626] overflow-hidden group">
                {activeItem.imageUrl && (
                  <img
                    src={activeItem.imageUrl}
                    alt={activeItem.imageAlt || activeItem.title}
                    className="w-full h-full object-cover object-center filter contrast-120 brightness-90 animate-project-kenburns scale-105"
                  />
                )}
                {/* Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#040404] via-transparent to-[#040404]/50 pointer-events-none" />

                {/* Viewfinder Safe Guide */}
                <div className="viewfinder-corner viewfinder-tl viewfinder-tr viewfinder-bl viewfinder-br absolute inset-0 pointer-events-none" />

                {/* Bottom Photo Telemetry Bar */}
                <div className="absolute bottom-3 left-4 right-4 flex flex-wrap items-center justify-between gap-2 text-[10px] font-mono text-[#F4F1EA] bg-[#050505]/85 px-3 py-1.5 border border-[#262626] backdrop-blur-sm pointer-events-none">
                  <span className="text-[#B40018] font-bold">
                    OPTICS: {activeItem.focalLength || '35MM PRIME'}
                  </span>
                  <span>RIG: {activeItem.cameraRig || 'CINEMA RIG · MANUAL EXPOSURE'}</span>
                  <span>LUT: {activeItem.colorGrade || 'HIGH-CONTRAST NOIR'}</span>
                </div>
              </div>

              {/* Director & DOP Commentary Note */}
              {activeItem.notes && (
                <div className="p-4 bg-[#111111] border-l-2 border-[#B40018] border-y border-r border-[#262626] space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#B40018] font-bold block">
                    SHOOTING DIARY &amp; ARTISTIC INTENT:
                  </span>
                  <p className="text-xs sm:text-sm text-[#F4F1EA]/90 leading-relaxed font-sans italic">
                    &ldquo;{activeItem.notes}&rdquo;
                  </p>
                </div>
              )}
            </div>

            <div className="pt-4 border-t border-[#262626] flex items-center justify-between">
              <a
                href={PERSONAL_BRAND.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono text-[#B40018] hover:underline uppercase"
              >
                <span>Follow on Instagram {PERSONAL_BRAND.instagramHandle}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <button
                type="button"
                onClick={() => setActiveItem(null)}
                className="px-4 py-2 bg-[#171717] hover:bg-[#262626] text-xs font-mono text-[#F4F1EA] uppercase border border-[#262626] transition-colors"
              >
                Close Window
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
