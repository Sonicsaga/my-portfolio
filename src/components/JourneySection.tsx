import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ArrowLeft, ArrowRight, Compass, Sparkles, CheckCircle2 } from 'lucide-react';
import { JOURNEY_MILESTONES } from '../data/portfolioData';
import { useScrollAnimations } from '../hooks/useScrollAnimations';

export const JourneySection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  const containerRef = useScrollAnimations<HTMLElement>({
    staggerDelay: 0.1,
  });

  const activeMilestone = JOURNEY_MILESTONES[activeIndex];
  const isFirst = activeIndex === 0;
  const isLast = activeIndex === JOURNEY_MILESTONES.length - 1;

  // Auto-scroll active item into visible center of the horizontal rail
  useEffect(() => {
    const el = itemRefs.current[activeIndex];
    if (el && trackRef.current) {
      el.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
    }
  }, [activeIndex]);

  const selectIndex = useCallback((index: number, focus = false) => {
    const bounded = Math.max(0, Math.min(index, JOURNEY_MILESTONES.length - 1));
    setActiveIndex(bounded);
    if (focus && itemRefs.current[bounded]) {
      itemRefs.current[bounded]?.focus();
    }
  }, []);

  // Touch swipe gestures for milestone panel
  const handlePanelTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = e.touches[0].clientX;
  };

  const handlePanelTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handlePanelTouchEnd = () => {
    const swipeDistance = touchStartX.current - touchEndX.current;
    if (swipeDistance > 50 && !isLast) {
      // Swiped Left -> Next Milestone
      selectIndex(activeIndex + 1, false);
    } else if (swipeDistance < -50 && !isFirst) {
      // Swiped Right -> Previous Milestone
      selectIndex(activeIndex - 1, false);
    }
  };

  // Universal Left/Right Arrow key handler for keyboard-only usability
  const handleTimelineKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      e.stopPropagation();
      selectIndex(activeIndex + 1, true);
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      e.stopPropagation();
      selectIndex(activeIndex - 1, true);
    } else if (e.key === 'Home') {
      e.preventDefault();
      e.stopPropagation();
      selectIndex(0, true);
    } else if (e.key === 'End') {
      e.preventDefault();
      e.stopPropagation();
      selectIndex(JOURNEY_MILESTONES.length - 1, true);
    }
  }, [activeIndex, selectIndex]);

  return (
    <section
      ref={containerRef}
      id="journey"
      aria-label="Interactive Journey Timeline"
      tabIndex={0}
      onKeyDown={handleTimelineKeyDown}
      className="py-24 md:py-36 bg-[#050505] border-t border-[#262626] relative overflow-hidden focus-visible:outline-none"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Heading */}
        <div className="reveal-group flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-8 border-b border-[#262626]">
          <div>
            <div className="reveal-item flex items-center gap-3 text-xs md:text-sm font-mono tracking-widest text-[#B40018] uppercase mb-2">
              <span className="w-8 h-[1px] bg-[#B40018]" />
              <span>CHRONOLOGY &amp; EVOLUTION</span>
            </div>
            <h2 className="reveal-item text-5xl sm:text-6xl md:text-7xl font-extrabold uppercase font-display tracking-tight text-[#F4F1EA]">
              THE JOURNEY.
            </h2>
          </div>

          <div className="reveal-item max-w-md space-y-2">
            <p className="text-sm text-[#A3A199] font-sans">
              How curiosity about machines grew into a passion for narrative light, leading to the
              unification of engineering and cinema.
            </p>
            {/* Keyboard guidance hint badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#0F0F0F] border border-[#262626] text-[11px] font-mono text-[#F4F1EA]">
              <Compass className="w-3.5 h-3.5 text-[#B40018]" />
              <span>
                Use <kbd className="px-1.5 py-0.5 bg-[#1F1F1F] text-[#B40018] font-bold border border-[#333]">← Left</kbd> / <kbd className="px-1.5 py-0.5 bg-[#1F1F1F] text-[#B40018] font-bold border border-[#333]">Right →</kbd> arrow keys
              </span>
            </div>
          </div>
        </div>

        {/* Screen Reader Live Region for Active Step Announcements */}
        <div className="sr-only" aria-live="polite" aria-atomic="true">
          {`Step ${activeMilestone.step} of ${JOURNEY_MILESTONES.length}: ${activeMilestone.title}. ${activeMilestone.desc}`}
        </div>

        {/* Timeline Header Navigation Controls & Progress Counter */}
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3 font-mono text-xs text-[#A3A199]">
            <span className="text-[#F4F1EA] font-bold">
              STEP {activeMilestone.step}
            </span>
            <span>OF</span>
            <span>{JOURNEY_MILESTONES.length}</span>
            <span className="text-[#262626]">|</span>
            <span className="text-[#B40018] font-bold uppercase truncate max-w-[200px] sm:max-w-xs">
              {activeMilestone.title}
            </span>
          </div>

          {/* Left / Right Arrow Navigation Buttons with min 44px touch targets */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => selectIndex(activeIndex - 1, true)}
              disabled={isFirst}
              aria-label="Previous milestone (Left Arrow)"
              title="Previous milestone (Left Arrow)"
              className="min-w-[44px] min-h-[44px] flex items-center justify-center p-3 bg-[#111111] hover:bg-[#1A1A1A] disabled:opacity-30 disabled:hover:bg-[#111111] text-[#F4F1EA] border border-[#262626] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B40018] active:scale-95"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => selectIndex(activeIndex + 1, true)}
              disabled={isLast}
              aria-label="Next milestone (Right Arrow)"
              title="Next milestone (Right Arrow)"
              className="min-w-[44px] min-h-[44px] flex items-center justify-center p-3 bg-[#111111] hover:bg-[#1A1A1A] disabled:opacity-30 disabled:hover:bg-[#111111] text-[#F4F1EA] border border-[#262626] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B40018] active:scale-95"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Overall Progress Rail */}
        <div className="w-full h-1 bg-[#171717] mb-8 relative">
          <div
            className="h-full bg-[#B40018] transition-all duration-300"
            style={{
              width: `${((activeIndex + 1) / JOURNEY_MILESTONES.length) * 100}%`,
            }}
          />
        </div>

        {/* ========================================================================= */}
        {/* HORIZONTAL TIMELINE TRACK (Accessible with Arrow Key Support Left/Right)  */}
        {/* ========================================================================= */}
        <div
          ref={trackRef}
          role="tablist"
          aria-label="Chronological Journey Milestones (Use Left and Right arrow keys to navigate)"
          aria-orientation="horizontal"
          tabIndex={0}
          onKeyDown={handleTimelineKeyDown}
          className="relative flex items-stretch gap-4 overflow-x-auto pb-6 scrollbar-thin scrollbar-thumb-[#262626] scrollbar-track-transparent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B40018]/50"
        >
          {JOURNEY_MILESTONES.map((milestone, idx) => {
            const isActive = idx === activeIndex;
            const isMilestoneLast = idx === JOURNEY_MILESTONES.length - 1;

            return (
              <button
                key={milestone.step}
                ref={(el) => {
                  itemRefs.current[idx] = el;
                }}
                role="tab"
                id={`journey-tab-${idx}`}
                aria-selected={isActive}
                aria-controls="journey-panel"
                tabIndex={isActive ? 0 : -1}
                onClick={() => selectIndex(idx, false)}
                onKeyDown={(e) => {
                  if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
                    e.preventDefault();
                    selectIndex(idx + 1, true);
                  } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
                    e.preventDefault();
                    selectIndex(idx - 1, true);
                  } else if (e.key === 'Home') {
                    e.preventDefault();
                    selectIndex(0, true);
                  } else if (e.key === 'End') {
                    e.preventDefault();
                    selectIndex(JOURNEY_MILESTONES.length - 1, true);
                  } else if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    selectIndex(idx, true);
                  }
                }}
                className={`flex-shrink-0 w-64 md:w-72 p-5 text-left transition-all duration-200 border relative group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B40018] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505] ${
                  isActive
                    ? 'bg-[#111111] border-[#B40018] shadow-[0_0_20px_rgba(180,0,24,0.25)]'
                    : 'bg-[#090909] border-[#262626] hover:border-[#404040] hover:bg-[#0D0D0D]'
                }`}
              >
                {/* Top Step Stamp */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#262626]">
                  <span
                    className={`font-mono text-xs font-bold ${
                      isActive ? 'text-[#B40018]' : 'text-[#A3A199]'
                    }`}
                  >
                    STEP {milestone.step}
                  </span>
                  <span
                    className={`w-2 h-2 rounded-full transition-colors ${
                      isActive
                        ? 'bg-[#B40018] shadow-[0_0_8px_#B40018]'
                        : 'bg-[#262626] group-hover:bg-[#404040]'
                    }`}
                  />
                </div>

                {/* Milestone Title */}
                <h3
                  className={`text-lg md:text-xl font-bold uppercase font-display tracking-tight transition-colors line-clamp-1 ${
                    isActive ? 'text-[#F4F1EA]' : 'text-[#A3A199] group-hover:text-[#F4F1EA]'
                  }`}
                >
                  {milestone.title}
                </h3>

                {/* Brief description */}
                <p className="mt-2 text-xs text-[#A3A199] font-sans line-clamp-2 leading-relaxed">
                  {milestone.desc}
                </p>

                {/* Active Indicator Bar at bottom of card */}
                {isActive && (
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#B40018]" />
                )}
              </button>
            );
          })}
        </div>

        {/* ========================================================================= */}
        {/* ACTIVE MILESTONE EXPANDED SPOTLIGHT PANEL (SWIPEABLE ON TOUCH SCREENS)    */}
        {/* ========================================================================= */}
        <div
          id="journey-panel"
          role="tabpanel"
          aria-labelledby={`journey-tab-${activeIndex}`}
          onTouchStart={handlePanelTouchStart}
          onTouchMove={handlePanelTouchMove}
          onTouchEnd={handlePanelTouchEnd}
          className="reveal-solo mt-8 p-6 md:p-10 bg-[#0A0A0A] border border-[#262626] relative overflow-hidden select-none"
        >
          {/* Viewfinder corner brackets */}
          <div className="viewfinder-corner viewfinder-tl viewfinder-tr viewfinder-bl viewfinder-br absolute inset-0 pointer-events-none" />

          {/* Red ambient glow */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-[#B40018]/10 rounded-full blur-[80px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-mono text-xs uppercase tracking-widest text-[#B40018] font-bold">
                  ACTIVE MILESTONE // STEP {activeMilestone.step} OF {JOURNEY_MILESTONES.length}
                </span>
                <span className="text-[#262626]">·</span>
                <span className="font-mono text-xs text-[#A3A199]">
                  {isLast ? 'PRESENT CONTINUUM' : 'RECORDED CHAPTER'}
                </span>
                <span className="text-[10px] font-mono text-[#B40018] md:hidden ml-auto">
                  ← SWIPE TO SWITCH →
                </span>
              </div>

              <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase font-display text-[#F4F1EA] tracking-tight">
                {activeMilestone.title}
              </h3>

              <p className="text-base sm:text-lg text-[#F4F1EA]/90 leading-relaxed font-sans max-w-2xl">
                {activeMilestone.desc}
              </p>

              {isLast && (
                <div className="pt-2 flex items-center gap-2 text-xs font-mono text-[#B40018] font-bold">
                  <span className="inline-block w-2 h-2 rounded-full bg-[#B40018] animate-ping" />
                  <span>YOU ARE HERE: CONNECTING DISCIPLINES, PREPARING THE NEXT FILM &amp; AI BUILD.</span>
                </div>
              )}
            </div>

            <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-between space-y-4 border-t lg:border-t-0 lg:border-l border-[#262626] pt-6 lg:pt-0 lg:pl-8">
              <div className="text-left lg:text-right font-mono text-xs space-y-1 text-[#A3A199]">
                <p>
                  COORDINATE: <strong className="text-[#F4F1EA]">{activeMilestone.step}/{JOURNEY_MILESTONES.length}</strong>
                </p>
                <p>STATUS: <strong className="text-[#B40018]">{isLast ? 'CURRENT' : 'COMPLETED'}</strong></p>
              </div>

              {/* Interactive Left / Right Keyboard Navigation Indicator & Buttons */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => selectIndex(activeIndex - 1, true)}
                  disabled={isFirst}
                  aria-label="Previous milestone (Left Arrow)"
                  title="Previous milestone (Left Arrow)"
                  className="px-4 py-2 bg-[#141414] hover:bg-[#202020] disabled:opacity-30 text-xs font-mono text-[#F4F1EA] border border-[#262626] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B40018]"
                >
                  ← PREV
                </button>
                <button
                  type="button"
                  onClick={() => selectIndex(activeIndex + 1, true)}
                  disabled={isLast}
                  aria-label="Next milestone (Right Arrow)"
                  title="Next milestone (Right Arrow)"
                  className="px-4 py-2 bg-[#B40018] hover:bg-[#7A0010] disabled:opacity-30 text-xs font-mono font-bold text-[#F4F1EA] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B40018]"
                >
                  NEXT →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
