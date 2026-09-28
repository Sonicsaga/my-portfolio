import React, { useState } from 'react';
import { ArrowUpRight, Cpu, Code, Camera, Scissors, Film, Radio, PenTool, Trophy, Music } from 'lucide-react';
import { DISCIPLINES } from '../data/portfolioData';
import { useScrollAnimations } from '../hooks/useScrollAnimations';

export const ManyWorlds: React.FC = () => {
  const [activeId, setActiveId] = useState<string>('ai');
  const containerRef = useScrollAnimations<HTMLElement>({
    staggerDelay: 0.06,
  });

  const activeDiscipline = DISCIPLINES.find((d) => d.id === activeId) || DISCIPLINES[0];

  const getDisciplineIcon = (id: string) => {
    switch (id) {
      case 'ai':
        return <Cpu className="w-6 h-6 text-[#B40018]" />;
      case 'development':
        return <Code className="w-6 h-6 text-[#B40018]" />;
      case 'cinematography':
        return <Camera className="w-6 h-6 text-[#B40018]" />;
      case 'editing':
        return <Scissors className="w-6 h-6 text-[#B40018]" />;
      case 'filmmaking':
        return <Film className="w-6 h-6 text-[#B40018]" />;
      case 'content':
        return <Radio className="w-6 h-6 text-[#B40018]" />;
      case 'art':
        return <PenTool className="w-6 h-6 text-[#B40018]" />;
      case 'cricket':
        return <Trophy className="w-6 h-6 text-[#B40018]" />;
      case 'guitar':
        return <Music className="w-6 h-6 text-[#B40018]" />;
      default:
        return <Film className="w-6 h-6 text-[#B40018]" />;
    }
  };

  return (
    <section ref={containerRef} className="py-24 md:py-32 px-6 md:px-12 bg-[#050505] relative overflow-hidden">
      {/* Background Parallax Light Glow */}
      <div
        className="parallax-layer absolute top-20 right-1/4 w-96 h-96 bg-[#B40018]/5 rounded-full blur-[120px] pointer-events-none"
        data-parallax-speed="25"
      />

      <div className="max-w-7xl mx-auto">
        {/* Section Heading with Staggered Text Reveal */}
        <div className="reveal-group flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-[#262626]">
          <div>
            <span className="reveal-item text-xs font-mono uppercase tracking-widest text-[#B40018] block mb-2 font-bold">
              DISCIPLINES &amp; CRAFTS
            </span>
            <h2 className="reveal-item text-4xl sm:text-6xl md:text-7xl font-extrabold uppercase font-display tracking-tight text-[#F4F1EA]">
              ONE PERSON.
              <span className="block text-[#A3A199]">MANY WORLDS.</span>
            </h2>
          </div>

          <p className="reveal-item max-w-md text-sm text-[#A3A199] font-sans">
            These are not isolated hobbies or resume bullet points. They are the interconnected
            mediums through which I observe, dissect, and build.
          </p>
        </div>

        {/* Main Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: 01 to 09 Discipline List with Staggered Entrance */}
          <div className="reveal-cards-grid lg:col-span-6 space-y-1">
            {DISCIPLINES.map((item) => {
              const isActive = item.id === activeId;
              return (
                <button
                  key={item.id}
                  type="button"
                  onMouseEnter={() => setActiveId(item.id)}
                  onClick={() => setActiveId(item.id)}
                  className={`reveal-card w-full text-left p-4 md:py-5 md:px-6 transition-all duration-200 border-l-2 flex items-center justify-between group ${
                    isActive
                      ? 'border-[#B40018] bg-[#121212] text-[#F4F1EA]'
                      : 'border-transparent hover:border-[#262626] hover:bg-[#0A0A0A] text-[#A3A199]'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`font-mono text-sm font-bold tracking-wider transition-colors ${
                        isActive ? 'text-[#B40018]' : 'text-[#7A0010] group-hover:text-[#F4F1EA]'
                      }`}
                    >
                      {item.number}
                    </span>
                    <span className="text-lg md:text-2xl font-bold uppercase font-display tracking-wide">
                      {item.title}
                    </span>
                  </div>

                  <span
                    className={`font-mono text-xs uppercase tracking-wider transition-opacity ${
                      isActive ? 'opacity-100 text-[#B40018]' : 'opacity-0 group-hover:opacity-60'
                    }`}
                  >
                    SELECT →
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Column: Visual Frame and Detailed Card for Active Discipline */}
          <div className="reveal-group lg:col-span-6 lg:sticky lg:top-28">
            <div className="reveal-item p-6 md:p-8 bg-[#0D0D0D] border border-[#262626] relative overflow-hidden transition-all duration-300">
              {/* Corner Viewfinder brackets */}
              <div className="viewfinder-corner viewfinder-tl viewfinder-tr viewfinder-bl viewfinder-br absolute inset-0 pointer-events-none" />

              {/* Ambient Red glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#B40018]/15 rounded-full blur-[70px] pointer-events-none" />

              {/* Header with Number and Icon */}
              <div className="flex items-center justify-between pb-6 border-b border-[#262626]">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-[#171717] border border-[#262626]">
                    {getDisciplineIcon(activeDiscipline.id)}
                  </div>
                  <div>
                    <span className="font-mono text-xs text-[#B40018] font-bold block">
                      CRAFT {activeDiscipline.number}
                    </span>
                    <span className="text-sm font-semibold text-[#F4F1EA]">
                      {activeDiscipline.label}
                    </span>
                  </div>
                </div>

                <span className="font-mono text-xs text-[#A3A199] uppercase bg-[#171717] px-3 py-1 border border-[#262626]">
                  {activeDiscipline.coreMedium}
                </span>
              </div>

              {/* Title & Manifesto */}
              <div className="py-6 space-y-4">
                <h3 className="text-3xl sm:text-4xl font-extrabold uppercase font-display text-[#F4F1EA]">
                  {activeDiscipline.title}
                </h3>

                <p className="text-sm sm:text-base text-[#F4F1EA]/90 leading-relaxed font-sans">
                  {activeDiscipline.manifesto}
                </p>

                {/* Signature Note */}
                <div className="p-4 bg-[#141414] border-l-2 border-[#B40018] text-xs sm:text-sm font-mono text-[#A3A199] italic">
                  &ldquo;{activeDiscipline.signatureNote}&rdquo;
                </div>
              </div>

              {/* Tools / Ecosystem */}
              <div className="pt-4 border-t border-[#262626]">
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#A3A199] block mb-2">
                  PRIMARY MEDIUM &amp; TOOLS
                </span>
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#F4F1EA]">
                  {activeDiscipline.keyTools.map((tool, idx) => (
                    <span key={idx} className="flex items-center gap-2 text-[#F4F1EA]">
                      <span>{tool}</span>
                      {idx < activeDiscipline.keyTools.length - 1 && (
                        <span className="text-[#B40018]" aria-hidden="true">
                          ·
                        </span>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
