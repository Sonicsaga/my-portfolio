import React, { useState, useEffect } from 'react';
import { MULTIMIND_WORDS, PERSONAL_BRAND } from '../data/portfolioData';
import { useScrollAnimations } from '../hooks/useScrollAnimations';

export const MultiMindSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [converged, setConverged] = useState(false);
  const containerRef = useScrollAnimations<HTMLElement>({
    staggerDelay: 0.1,
  });

  useEffect(() => {
    if (converged) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % MULTIMIND_WORDS.length);
    }, 1800);

    return () => clearInterval(interval);
  }, [converged]);

  return (
    <section
      ref={containerRef}
      className="py-28 md:py-40 bg-[#080808] border-t border-[#262626] relative overflow-hidden text-center"
    >
      {/* Intense red ambient glow with parallax */}
      <div
        className="parallax-layer absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#B40018]/15 rounded-full blur-[150px] pointer-events-none"
        data-parallax-speed="25"
      />

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        <div className="reveal-group">
          <span className="reveal-item font-mono text-xs uppercase tracking-widest text-[#B40018] block mb-4 font-bold">
            SIGNATURE CONVERGENCE
          </span>

          <h2 className="reveal-item text-4xl sm:text-6xl md:text-7xl font-extrabold uppercase font-display text-[#F4F1EA] tracking-tight mb-8">
            ONE MIND.
            <span className="block text-[#A3A199]">MANY CRAFTS.</span>
          </h2>
        </div>

        {/* Word Rotation / Convergence Visual Box */}
        <div className="reveal-solo my-10 p-8 sm:p-12 md:p-16 bg-[#0B0B0B] border border-[#262626] relative overflow-hidden max-w-3xl mx-auto shadow-2xl">
          {/* Viewfinder brackets */}
          <div className="viewfinder-corner viewfinder-tl viewfinder-tr viewfinder-bl viewfinder-br absolute inset-0 pointer-events-none" />

          {!converged ? (
            <div className="space-y-6">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#A3A199] block">
                CYCLING ACTIVE FREQUENCY
              </span>

              {/* Kinetic Animated Word Display */}
              <div className="h-28 sm:h-36 flex items-center justify-center">
                <span
                  key={currentIndex}
                  className="text-6xl sm:text-8xl md:text-9xl font-extrabold uppercase font-display text-[#B40018] cinema-text-glow tracking-tighter transition-all duration-300 animate-in fade-in zoom-in-95"
                >
                  {MULTIMIND_WORDS[currentIndex]}
                </span>
              </div>

              {/* Words pill strip */}
              <div className="flex flex-wrap items-center justify-center gap-2 pt-4 border-t border-[#262626] font-mono text-xs text-[#A3A199]">
                {MULTIMIND_WORDS.map((w, idx) => (
                  <button
                    key={w}
                    type="button"
                    onClick={() => setCurrentIndex(idx)}
                    className={`px-3 py-1 transition-colors ${
                      currentIndex === idx
                        ? 'bg-[#B40018] text-[#F4F1EA] font-bold'
                        : 'bg-[#141414] hover:text-[#F4F1EA]'
                    }`}
                  >
                    {w}
                  </button>
                ))}
              </div>

              <div className="pt-6">
                <button
                  type="button"
                  onClick={() => setConverged(true)}
                  className="px-6 py-2.5 bg-[#171717] hover:bg-[#B40018] text-[#F4F1EA] text-xs font-mono tracking-wider uppercase border border-[#262626] hover:border-[#B40018] transition-all"
                >
                  CONVERGE ALL CRAFTS →
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-6 animate-in zoom-in-95 duration-500">
              <span className="font-mono text-xs text-[#B40018] font-bold uppercase tracking-widest block">
                ALL FREQUENCIES SYNCHRONIZED
              </span>

              <h3 className="text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase font-display text-[#F4F1EA] tracking-tight">
                ADARSH R MOHITHE
              </h3>

              <p className="text-base sm:text-lg text-[#F4F1EA]/90 max-w-xl mx-auto leading-relaxed">
                The technical rigor of artificial intelligence and code married to the emotional
                gravitas of cinematography, editing, and narrative direction.
              </p>

              <div className="pt-4 flex flex-wrap items-center justify-center gap-3 font-mono text-xs text-[#A3A199]">
                {MULTIMIND_WORDS.map((w) => (
                  <span
                    key={w}
                    className="px-3 py-1 bg-[#141414] border border-[#B40018]/50 text-[#F4F1EA]"
                  >
                    {w}
                  </span>
                ))}
              </div>

              <div className="pt-6">
                <button
                  type="button"
                  onClick={() => setConverged(false)}
                  className="text-xs font-mono text-[#A3A199] hover:text-[#B40018] underline"
                >
                  Reset Kinetic Cycle
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
