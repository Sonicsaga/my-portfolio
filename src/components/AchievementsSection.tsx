import React from 'react';
import { Award, CheckCircle } from 'lucide-react';
import { ACHIEVEMENTS } from '../data/portfolioData';
import { useScrollAnimations } from '../hooks/useScrollAnimations';

export const AchievementsSection: React.FC = () => {
  const containerRef = useScrollAnimations<HTMLElement>({
    staggerDelay: 0.1,
  });

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-[#080808] border-t border-[#262626] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <div className="reveal-group flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-[#262626]">
          <div>
            <span className="reveal-item text-xs font-mono uppercase tracking-widest text-[#B40018] block mb-2 font-bold">
              VERIFIED MILESTONES
            </span>
            <h2 className="reveal-item text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase font-display tracking-tight text-[#F4F1EA]">
              HONORS &amp; ACHIEVEMENTS
            </h2>
          </div>

          <span className="reveal-item font-mono text-xs text-[#A3A199]">
            COMPACT EDITORIAL TIMELINE · VERIFIED ONLY
          </span>
        </div>

        {/* Editorial Timeline with Staggered Card Entrance */}
        <div className="reveal-cards-grid space-y-4">
          {ACHIEVEMENTS.map((item, idx) => (
            <div
              key={idx}
              className="reveal-card p-5 sm:p-6 bg-[#0D0D0D] border border-[#262626] hover:border-[#B40018] transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div className="space-y-1 sm:max-w-xl">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-[#B40018] font-bold">0{idx + 1}</span>
                  <span className="font-mono text-xs text-[#A3A199]">{item.year}</span>
                  <span className="text-[#262626]">|</span>
                  <span className="font-mono text-xs text-[#F4F1EA] font-semibold">{item.role}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold uppercase font-display text-[#F4F1EA]">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#A3A199] leading-relaxed font-sans">
                  {item.context}
                </p>
              </div>

              <div className="sm:text-right self-start sm:self-center">
                <span className="inline-block px-3 py-1.5 bg-[#171717] border border-[#B40018]/50 text-[#F4F1EA] font-mono text-xs font-bold uppercase tracking-wider whitespace-nowrap">
                  {item.rank}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
