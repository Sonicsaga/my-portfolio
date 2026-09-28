import React from 'react';
import { Camera, Code, Layers, Sparkles } from 'lucide-react';
import { PERSONAL_BRAND } from '../data/portfolioData';
import { useScrollAnimations } from '../hooks/useScrollAnimations';

export const AboutSection: React.FC = () => {
  const containerRef = useScrollAnimations<HTMLElement>({
    staggerDelay: 0.1,
  });

  return (
    <section
      ref={containerRef}
      id="about"
      className="py-24 md:py-32 px-6 md:px-12 bg-[#080808] border-t border-[#262626] relative overflow-hidden"
    >
      {/* Background Parallax Layer */}
      <div
        className="parallax-layer absolute top-10 left-10 w-[450px] h-[450px] bg-[#B40018]/5 rounded-full blur-[130px] pointer-events-none"
        data-parallax-speed="20"
      />

      <div className="max-w-7xl mx-auto">
        {/* Editorial Heading with Staggered Reveal */}
        <div className="reveal-group">
          <div className="reveal-item flex items-center gap-3 text-xs md:text-sm font-mono tracking-widest text-[#B40018] uppercase mb-6">
            <span className="w-8 h-[1px] bg-[#B40018]" />
            <span>ORIGIN &amp; PURPOSE</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Title Column */}
            <div className="lg:col-span-5 space-y-6">
              <h2 className="reveal-item text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold uppercase font-display leading-[0.9] text-[#F4F1EA]">
                THE PERSON
                <span className="block text-[#A3A199]">BEHIND</span>
                <span className="block text-[#B40018]">THE WORK.</span>
              </h2>

              {/* Core Creative Chain */}
              <div className="reveal-item mt-10 p-6 bg-[#0E0E0E] border border-[#262626] relative">
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#B40018] block mb-3 font-bold">
                  THE CONVERGENT CHAIN
                </span>
                <div className="flex flex-wrap items-center gap-2 font-mono text-xs sm:text-sm font-bold text-[#F4F1EA]">
                  <span>CODE</span>
                  <span className="text-[#B40018]">→</span>
                  <span>FRAME</span>
                  <span className="text-[#B40018]">→</span>
                  <span>EDIT</span>
                  <span className="text-[#B40018]">→</span>
                  <span>STORY</span>
                  <span className="text-[#B40018]">→</span>
                  <span className="text-[#B40018]">CREATE</span>
                </div>
                <p className="mt-3 text-xs text-[#A3A199] leading-relaxed">
                  Technology gives structure to ideas. Cinema gives them human gravity.
                </p>
              </div>
            </div>

            {/* Right Content Column: Editorial Copy in clean separated blocks */}
            <div className="lg:col-span-7 space-y-8 text-base md:text-lg text-[#F4F1EA]/90 leading-relaxed font-sans">
              <div className="reveal-item p-6 md:p-8 bg-[#0D0D0D] border-l-2 border-[#B40018] border-y border-r border-[#262626]">
                <p className="text-xl md:text-2xl font-bold text-[#F4F1EA] mb-3">
                  &ldquo;I’m Adarsh Mohithe — an AI &amp; Machine Learning student, developer,
                  cinematographer, editor and filmmaker who never really stayed inside one box.&rdquo;
                </p>
                <p className="text-sm text-[#A3A199]">
                  Currently in my 7th semester of B.Tech AI/ML. My curiosity started with how neural
                  networks interpret images, and quickly evolved into how light and cameras evoke emotion
                  in people.
                </p>
              </div>

              <div className="reveal-item space-y-6 text-[#A3A199] text-base">
                <p>
                  I enjoy moving between technology and visual storytelling — building AI-powered
                  applications, experimenting with frontend development, creating cinematic visuals,
                  editing videos and writing stories for film.
                </p>

                <p>
                  I like taking an idea from a rough concept and turning it into something people can
                  see, use or remember. A computer vision model without a human interface is incomplete,
                  just like a written screenplay without camera framing is waiting to be born.
                </p>

                <div className="pt-4 border-t border-[#262626]">
                  <p className="text-lg md:text-xl font-bold text-[#F4F1EA]">
                    I don&apos;t want to be defined by a single skill.
                  </p>
                  <p className="text-lg md:text-xl font-bold text-[#B40018] mt-1">
                    I want to be defined by what I can create when all of them come together.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
