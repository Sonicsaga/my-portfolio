import React from 'react';
import { useScrollAnimations } from '../hooks/useScrollAnimations';

export const HeroStatement: React.FC = () => {
  const containerRef = useScrollAnimations<HTMLElement>({
    staggerDelay: 0.1,
  });

  return (
    <section
      ref={containerRef}
      id="statement"
      className="py-24 md:py-36 px-6 md:px-12 bg-[#080808] border-y border-[#262626]/80 relative overflow-hidden"
    >
      {/* Parallax red background glow */}
      <div
        className="parallax-layer absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#B40018]/10 rounded-full blur-[140px] pointer-events-none"
        data-parallax-speed="25"
      />

      <div className="max-w-6xl mx-auto">
        {/* Editorial Sub-header with Staggered Reveal */}
        <div className="reveal-group">
          <div className="reveal-item flex items-center gap-3 text-xs md:text-sm font-mono tracking-widest text-[#B40018] uppercase mb-8">
            <span className="w-8 h-[1px] bg-[#B40018]" />
            <span>CORE PHILOSOPHY &amp; DIVERGENCE</span>
          </div>

          {/* Large Typography Statement with Staggered Word Reveals */}
          <div className="space-y-4 md:space-y-6">
            <h2 className="reveal-item text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter uppercase font-display leading-[0.9] text-[#F4F1EA]">
              JACK
              <span className="block text-[#A3A199]">OF ALL</span>
              <span className="block text-[#F4F1EA]">TRADES.</span>
            </h2>

            <div className="reveal-item pt-6 md:pt-10">
              <h3 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter uppercase font-display leading-[0.9] text-[#B40018]">
                STILL
                <span className="block text-[#F4F1EA]">MASTERING</span>
                <span className="block text-[#B40018]">THEM.</span>
              </h3>
            </div>
          </div>

          {/* Supporting Editorial Prose */}
          <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-12 gap-8 items-start pt-8 border-t border-[#262626]">
            <div className="reveal-item md:col-span-4 font-mono text-xs uppercase tracking-widest text-[#A3A199]">
              <span>/ MULTIDISCIPLINARY GROWTH</span>
              <p className="mt-2 text-[#F4F1EA] font-semibold">NOT CONFUSION. INTEGRATION.</p>
            </div>

            <div className="md:col-span-8 space-y-6 text-base md:text-xl text-[#F4F1EA]/90 leading-relaxed font-sans">
              <blockquote className="reveal-item border-l-2 border-[#B40018] pl-6 py-1 italic text-lg md:text-2xl text-[#F4F1EA]">
                &ldquo;I never really stayed inside one box. I move between technology, visuals,
                storytelling and experimentation — learning something new every time I build
                something.&rdquo;
              </blockquote>

              <p className="reveal-item text-[#A3A199] text-sm md:text-base leading-relaxed">
                When I train a computer vision model, I think about how light enters a 50mm lens. When
                I cut a scene in DaVinci Resolve, I understand algorithms and frame compression. When I
                build an interactive front-end, I apply cinematic pacing. The crafts do not compete;
                they amplify one another.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
