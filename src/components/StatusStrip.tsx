import React from 'react';
import { Cpu, Film, BookOpen, Hammer } from 'lucide-react';
import { PERSONAL_BRAND } from '../data/portfolioData';
import { useScrollAnimations } from '../hooks/useScrollAnimations';

export const StatusStrip: React.FC = () => {
  const containerRef = useScrollAnimations<HTMLElement>({
    staggerDelay: 0.08,
  });

  return (
    <section ref={containerRef} className="bg-[#050505] border-y border-[#262626] py-8 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="reveal-cards-grid grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
          {/* Status 1: Degree & Semester */}
          <div className="reveal-card p-4 bg-[#0A0A0A] border border-[#262626] flex items-center gap-3">
            <div className="p-2 bg-[#171717] text-[#B40018]">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <span className="font-mono text-[10px] tracking-wider text-[#A3A199] block uppercase">
                ACADEMIC FOCUS
              </span>
              <p className="text-sm font-bold text-[#F4F1EA]">B.Tech — AI &amp; ML</p>
              <p className="text-xs text-[#B40018] font-mono">7th Semester</p>
            </div>
          </div>

          {/* Status 2: Currently Building */}
          <div className="reveal-card p-4 bg-[#0A0A0A] border border-[#262626] flex items-center gap-3">
            <div className="p-2 bg-[#171717] text-[#B40018]">
              <Hammer className="w-5 h-5" />
            </div>
            <div>
              <span className="font-mono text-[10px] tracking-wider text-[#A3A199] block uppercase">
                CURRENTLY BUILDING
              </span>
              <p className="text-sm font-bold text-[#F4F1EA]">AI Claim Estimator</p>
              <p className="text-xs text-[#A3A199] truncate">Vehicle Damage CV System</p>
            </div>
          </div>

          {/* Status 3: Currently Filming */}
          <div className="reveal-card p-4 bg-[#0A0A0A] border border-[#262626] flex items-center gap-3">
            <div className="p-2 bg-[#171717] text-[#B40018]">
              <Film className="w-5 h-5" />
            </div>
            <div>
              <span className="font-mono text-[10px] tracking-wider text-[#A3A199] block uppercase">
                CURRENTLY FILMING
              </span>
              <p className="text-sm font-bold text-[#F4F1EA]">THE SHADOW</p>
              <p className="text-xs text-[#B40018] font-mono">Active Psycho Creations</p>
            </div>
          </div>

          {/* Status 4: Currently Learning */}
          <div className="reveal-card p-4 bg-[#0A0A0A] border border-[#262626] flex items-center gap-3">
            <div className="p-2 bg-[#171717] text-[#B40018]">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <span className="font-mono text-[10px] tracking-wider text-[#A3A199] block uppercase">
                CURRENTLY LEARNING
              </span>
              <p className="text-sm font-bold text-[#F4F1EA]">Emotional AI &amp; Sound</p>
              <p className="text-xs text-[#A3A199]">Audio Engineering &amp; NLP</p>
            </div>
          </div>
        </div>

        {/* Live Status Ticker / Note */}
        <div className="reveal-solo mt-6 pt-4 border-t border-[#262626]/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono text-[#A3A199]">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#B40018] animate-ping" />
            <span className="text-[#F4F1EA] font-semibold">DISPATCH:</span>
            <span>{PERSONAL_BRAND.currentStatusSummary}</span>
          </div>
          <span className="text-[#A3A199]/60">NO FABRICATED NUMBERS · REAL PROTOTYPES</span>
        </div>
      </div>
    </section>
  );
};
