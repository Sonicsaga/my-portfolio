import React from 'react';
import { PenTool, Trophy, Music, Camera } from 'lucide-react';
import { useScrollAnimations } from '../hooks/useScrollAnimations';

export const HobbiesSection: React.FC = () => {
  const containerRef = useScrollAnimations<HTMLElement>({
    parallaxSpeed: 16,
    staggerDelay: 0.1,
  });

  const panels = [
    {
      id: 'art',
      title: 'PORTRAIT ART',
      subtitle: 'Face Studies & Chiaroscuro',
      desc: 'Obsessed with facial anatomy, bone structure, and where natural shadows pool. Hand-drawing portraits directly informs how I sculpt key lights for actors.',
      tag: 'Fine Art & Pencil',
      icon: <PenTool className="w-5 h-5 text-[#B40018]" />,
    },
    {
      id: 'cricket',
      title: 'CRICKET',
      subtitle: 'Instinct & Tournament Discipline',
      desc: 'Competitive cricket athlete. 2nd Prize in the Intercollege Cricket Tournament. Sharpens rapid reflex decisions and staying composed under high stakes.',
      tag: '2nd Prize Intercollege',
      icon: <Trophy className="w-5 h-5 text-[#B40018]" />,
    },
    {
      id: 'guitar',
      title: 'GUITAR',
      subtitle: 'Acoustic Cadence & Rhythm',
      desc: 'Learning guitar fretboards and chords. Understanding harmonic progression and acoustic pacing teaches me how rhythmic pauses work in film cuts.',
      tag: 'Acoustic Exploration',
      icon: <Music className="w-5 h-5 text-[#B40018]" />,
    },
    {
      id: 'camera',
      title: 'CAMERA OBSESSION',
      subtitle: 'Glass, Sensors & Optics',
      desc: 'Exploring vintage lenses, anamorphic squeeze, camera rigs, and gimbals. The camera is the physical extension of personal perception.',
      tag: 'Optics & Visual Tech',
      icon: <Camera className="w-5 h-5 text-[#B40018]" />,
    },
  ];

  return (
    <section ref={containerRef} className="py-24 md:py-32 bg-[#050505] border-t border-[#262626] relative overflow-hidden">
      {/* Background Parallax Layer */}
      <div
        className="parallax-layer absolute -bottom-20 left-1/3 w-[450px] h-[450px] bg-[#B40018]/5 rounded-full blur-[130px] pointer-events-none"
        data-parallax-speed="22"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header with Staggered Text Reveal */}
        <div className="reveal-group flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-[#262626]">
          <div>
            <span className="reveal-item text-xs font-mono uppercase tracking-widest text-[#B40018] block mb-2 font-bold">
              PERSONAL DIMENSIONS &amp; INSTINCTS
            </span>
            <h2 className="reveal-item text-5xl sm:text-6xl md:text-7xl font-extrabold uppercase font-display tracking-tight text-[#F4F1EA]">
              WHEN I’M NOT
              <span className="block text-[#A3A199]">BUILDING...</span>
            </h2>
          </div>

          <p className="reveal-item max-w-md text-sm text-[#A3A199] font-sans">
            These are personal pursuits that train the eye, the ear, and the reflexes. Not
            commercial offerings, but the human foundation that makes everything else possible.
          </p>
        </div>

        {/* 4 Visual Panels with Staggered Entrance and Parallax Internal Imagery */}
        <div className="reveal-cards-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {panels.map((panel) => (
            <div
              key={panel.id}
              className="reveal-card parallax-container p-6 bg-[#0B0B0B] border border-[#262626] hover:border-[#B40018] transition-all duration-300 flex flex-col justify-between group overflow-hidden relative"
            >
              {/* Parallax Background Visual Shifter */}
              <div className="parallax-img absolute -inset-y-8 inset-x-0 bg-gradient-to-b from-transparent via-[#B40018]/5 to-transparent pointer-events-none opacity-40 group-hover:opacity-100 transition-opacity" />

              <div className="relative z-10">
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#262626]">
                  <div className="p-2 bg-[#171717] border border-[#262626] group-hover:border-[#B40018] transition-colors">
                    {panel.icon}
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[#B40018] font-bold">
                    {panel.tag}
                  </span>
                </div>

                <h3 className="text-2xl font-bold uppercase font-display text-[#F4F1EA] group-hover:text-[#B40018] transition-colors">
                  {panel.title}
                </h3>
                <p className="text-xs font-mono text-[#A3A199] mb-4">{panel.subtitle}</p>

                <p className="text-xs sm:text-sm text-[#A3A199] leading-relaxed font-sans">
                  {panel.desc}
                </p>
              </div>

              <div className="relative z-10 pt-6 mt-6 border-t border-[#262626] flex items-center justify-between text-[11px] font-mono text-[#A3A199]">
                <span>CRAFT PARALLEL</span>
                <span className="text-[#F4F1EA]">DISCIPLINE</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
