import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Briefcase } from 'lucide-react';
import { EXPERIENCE_ITEM } from '../data/portfolioData';
import { useScrollAnimations } from '../hooks/useScrollAnimations';

export const ExperienceBlock: React.FC = () => {
  const [expanded, setExpanded] = useState(false);
  const containerRef = useScrollAnimations<HTMLElement>({
    staggerDelay: 0.1,
  });

  return (
    <section ref={containerRef} className="py-12 px-6 md:px-12 bg-[#080808] border-t border-[#262626] overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div className="reveal-group p-6 md:p-8 bg-[#0D0D0D] border border-[#262626] transition-all duration-300">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="reveal-item flex items-center gap-4">
              <div className="p-2.5 bg-[#171717] border border-[#262626] text-[#B40018]">
                <Briefcase className="w-5 h-5" />
              </div>
              <div>
                <span className="font-mono text-[10px] tracking-widest text-[#B40018] uppercase font-bold block">
                  PROFESSIONAL EXPOSURE
                </span>
                <h4 className="text-xl md:text-2xl font-bold font-display uppercase tracking-wide text-[#F4F1EA]">
                  {EXPERIENCE_ITEM.company}
                </h4>
                <p className="text-xs sm:text-sm text-[#A3A199] font-sans">
                  {EXPERIENCE_ITEM.role}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setExpanded(!expanded)}
              className="reveal-item inline-flex items-center gap-2 px-4 py-2 bg-[#171717] hover:bg-[#262626] text-[#F4F1EA] text-xs font-mono tracking-wider uppercase border border-[#262626] transition-colors self-start sm:self-center"
              aria-expanded={expanded}
            >
              <span>{expanded ? 'HIDE DETAILS -' : 'VIEW EXPERIENCE +'}</span>
              {expanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>
          </div>

          {/* Expandable Disclosure Content */}
          {expanded && (
            <div className="mt-6 pt-6 border-t border-[#262626] space-y-4 animate-in fade-in duration-200">
              <p className="text-xs sm:text-sm text-[#F4F1EA]/90 leading-relaxed font-sans">
                {EXPERIENCE_ITEM.summary}
              </p>

              <div>
                <span className="font-mono text-[11px] uppercase tracking-wider text-[#A3A199] block mb-2 font-semibold">
                  PRACTICAL FOCUS &amp; KEY TAKEAWAYS:
                </span>
                <ul className="space-y-1.5 text-xs text-[#A3A199] font-mono">
                  {EXPERIENCE_ITEM.takeaways.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#B40018] font-bold">›</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
