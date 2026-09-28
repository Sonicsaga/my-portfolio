import React, { useState } from 'react';
import {
  ArrowUpRight,
  Github,
  Scan,
  Activity,
  Radio,
  CloudRain,
  Film,
  TrendingUp,
  Cpu,
} from 'lucide-react';
import { TECH_PROJECTS, TechProject } from '../data/portfolioData';
import { ClaimEstimatorModal } from './ClaimEstimatorModal';
import { useScrollAnimations } from '../hooks/useScrollAnimations';

/**
 * Animated Project Photo Frame with project-specific visual overlays and animations
 */
const AnimatedProjectPhoto: React.FC<{ project: TechProject }> = ({ project }) => {
  const { id, imageUrl, imageAlt, title, category } = project;

  return (
    <div className="parallax-container relative h-40 sm:h-44 bg-[#060606] border border-[#202020] mb-4 overflow-hidden group">
      {/* 1. Underlying High-Res Photograph with Continuous Subtle Ken Burns Zoom & Hover Acceleration */}
      {imageUrl ? (
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={imageUrl}
            alt={imageAlt || `${title} preview`}
            loading="lazy"
            className="w-full h-full object-cover object-center filter grayscale contrast-125 brightness-75 group-hover:grayscale-0 group-hover:brightness-95 group-hover:contrast-110 transition-all duration-700 ease-out animate-project-kenburns group-hover:scale-110"
          />
          {/* Cinematic dark tint with crimson ambient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-[#090909]/40 to-transparent group-hover:via-transparent transition-all duration-500" />
          <div className="absolute inset-0 bg-[#B40018]/10 mix-blend-color group-hover:opacity-0 transition-opacity duration-500" />
        </div>
      ) : (
        <div className="absolute inset-0 bg-[#0A0A0A] flex items-center justify-center">
          <div className="w-full h-full bg-[radial-gradient(#333_1px,transparent_1px)] [background-size:12px_12px]" />
        </div>
      )}

      {/* 2. Specialized Project-Specific HUD Animation Overlays */}
      {id === 'ai-expense-tracker' && (
        <div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-3">
          <div className="flex items-center justify-between text-[9px] font-mono text-emerald-400/90 bg-[#050505]/75 px-2 py-0.5 border border-emerald-500/30 backdrop-blur-sm self-start">
            <span className="flex items-center gap-1">
              <TrendingUp className="w-2.5 h-2.5 animate-pulse" />
              <span>SPEND INFERENCE: OPTIMIZED</span>
            </span>
          </div>

          {/* Animated upward financial pulse wave */}
          <div className="relative h-12 flex items-end gap-1.5 px-1 opacity-70 group-hover:opacity-100 transition-opacity">
            <div className="w-1.5 bg-emerald-500/60 h-[40%] animate-pulse" style={{ animationDelay: '0.1s' }} />
            <div className="w-1.5 bg-emerald-500/80 h-[70%] animate-pulse" style={{ animationDelay: '0.3s' }} />
            <div className="w-1.5 bg-[#B40018] h-[55%] animate-pulse" style={{ animationDelay: '0.2s' }} />
            <div className="w-1.5 bg-emerald-400 h-[90%] animate-pulse" style={{ animationDelay: '0.5s' }} />
            <div className="w-1.5 bg-emerald-500/70 h-[65%] animate-pulse" style={{ animationDelay: '0.4s' }} />
            <div className="w-1.5 bg-[#B40018]/80 h-[45%] animate-pulse" style={{ animationDelay: '0.6s' }} />
            <div className="w-1.5 bg-emerald-400 h-[85%] animate-pulse" style={{ animationDelay: '0.15s' }} />
          </div>
        </div>
      )}

      {id === 'food-spoilage-detection' && (
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center p-3">
          {/* Animated scanning reticle */}
          <div className="relative w-20 h-20 border border-emerald-500/60 rounded-full flex items-center justify-center animate-spin" style={{ animationDuration: '8s' }}>
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-ping" />
            <div className="absolute top-0 w-1.5 h-1.5 bg-emerald-400" />
            <div className="absolute bottom-0 w-1.5 h-1.5 bg-emerald-400" />
          </div>
          <div className="absolute bottom-2 left-2 text-[9px] font-mono text-emerald-400 bg-[#050505]/85 px-1.5 py-0.5 border border-emerald-500/40">
            BIO-FRESHNESS: 92.4% [SAFE]
          </div>
        </div>
      )}

      {id === 'movie-recommendation' && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden p-3 flex flex-col justify-between">
          {/* Sweeping cinema projector beam light */}
          <div className="absolute -top-10 -left-10 w-48 h-48 bg-gradient-to-br from-[#F4F1EA]/25 via-transparent to-transparent rotate-45 transform pointer-events-none animate-pulse" style={{ animationDuration: '4s' }} />
          
          <div className="flex items-center gap-1.5 text-[9px] font-mono text-[#F4F1EA] bg-[#050505]/80 px-2 py-0.5 border border-[#262626] self-start">
            <Film className="w-3 h-3 text-[#B40018]" />
            <span>24.00 FPS · CINEPHILE INDEX</span>
          </div>

          <div className="self-end text-[9px] font-mono text-[#A3A199] bg-[#050505]/80 px-1.5 py-0.5 border border-[#262626]">
            TMDB VECTOR GRAPH
          </div>
        </div>
      )}

      {id === 'weather-forecaster' && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden p-3 flex flex-col justify-between">
          {/* Animated radar sweep beam */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-44 rounded-full border border-cyan-500/20 pointer-events-none">
            <div className="absolute inset-0 rounded-full border border-cyan-500/10" />
            <div className="w-full h-full animate-radar-sweep origin-center">
              <div className="w-1/2 h-1/2 bg-gradient-to-br from-cyan-400/25 to-transparent rounded-tl-full" />
            </div>
          </div>

          <div className="flex items-center gap-1 text-[9px] font-mono text-cyan-400 bg-[#050505]/85 px-2 py-0.5 border border-cyan-500/30 self-start z-10">
            <CloudRain className="w-3 h-3 animate-bounce" />
            <span>RADAR ISOBAR: ACTIVE</span>
          </div>

          <div className="self-end text-[9px] font-mono text-[#A3A199] bg-[#050505]/80 px-1.5 py-0.5 border border-[#262626] z-10">
            DOPPLER SWEEP
          </div>
        </div>
      )}

      {id === 'emotional-chatbot' && (
        <div className="absolute inset-0 pointer-events-none p-3 flex flex-col justify-between">
          <div className="flex items-center gap-1.5 text-[9px] font-mono text-purple-400 bg-[#050505]/85 px-2 py-0.5 border border-purple-500/30 self-start">
            <Activity className="w-3 h-3 text-[#B40018] animate-pulse" />
            <span>NLP SENTIMENT PULSE</span>
          </div>

          {/* Sinusoidal sentiment waveform bars */}
          <div className="flex items-center justify-center gap-1 h-8">
            {[40, 75, 95, 60, 85, 45, 90, 70, 50, 80, 65, 90].map((h, i) => (
              <div
                key={i}
                className="w-1 bg-gradient-to-t from-purple-500 to-[#B40018] rounded-full animate-pulse"
                style={{
                  height: `${h}%`,
                  animationDuration: `${1 + (i % 3) * 0.4}s`,
                }}
              />
            ))}
          </div>

          <div className="self-end text-[9px] font-mono text-[#A3A199] bg-[#050505]/80 px-1.5 py-0.5 border border-[#262626]">
            EMPATHY VECTOR: 0.92
          </div>
        </div>
      )}

      {/* Viewfinder corner brackets */}
      <div className="viewfinder-corner viewfinder-tl viewfinder-br absolute inset-0 pointer-events-none z-10" />

      {/* Bottom Category Tag */}
      <div className="absolute bottom-2 left-2 z-10 font-mono text-[9px] text-[#F4F1EA] uppercase tracking-wider bg-[#0A0A0A]/90 px-2 py-0.5 border border-[#262626] group-hover:border-[#B40018] transition-colors">
        {category.split('/')[0].trim()}
      </div>
    </div>
  );
};

export const TechSection: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const containerRef = useScrollAnimations<HTMLElement>({
    parallaxSpeed: 20,
    staggerDelay: 0.1,
  });

  const featuredProject = TECH_PROJECTS.find((p) => p.featured) || TECH_PROJECTS[0];
  const secondaryProjects = TECH_PROJECTS.filter((p) => !p.featured);

  return (
    <section
      ref={containerRef}
      id="build"
      className="py-24 md:py-36 px-6 md:px-12 bg-[#050505] border-t border-[#262626] relative overflow-hidden"
    >
      {/* Background Parallax Layer */}
      <div
        className="parallax-layer absolute -top-40 right-10 w-[500px] h-[500px] bg-[#B40018]/5 rounded-full blur-[140px] pointer-events-none"
        data-parallax-speed="30"
      />

      <div className="max-w-7xl mx-auto">
        {/* Section Header with Staggered Text Reveal */}
        <div className="reveal-group flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-[#262626]">
          <div>
            <span className="reveal-item text-xs font-mono uppercase tracking-widest text-[#B40018] block mb-2 font-bold">
              TECHNICAL SYSTEMS &amp; ARCHITECTURE
            </span>
            <h2 className="reveal-item text-5xl sm:text-6xl md:text-7xl font-extrabold uppercase font-display tracking-tight text-[#F4F1EA]">
              I BUILD.
              <span className="block text-[#A3A199]">IDEAS BECOME SYSTEMS.</span>
            </h2>
          </div>

          <p className="reveal-item max-w-md text-sm text-[#A3A199] font-sans">
            Transforming mathematical principles and computer vision into robust full-stack software.
            Engineered with modern frontend architectures, clean APIs, and thoughtful interaction design.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* SECTION 13: FEATURED TECH PROJECT CASE STUDY (AI INSURANCE CLAIM ESTIMATOR) */}
        {/* ========================================================================= */}
        <div className="reveal-group mb-20 bg-[#0A0A0A] border border-[#262626] relative overflow-hidden">
          {/* Viewfinder borders */}
          <div className="viewfinder-corner viewfinder-tl viewfinder-tr viewfinder-bl viewfinder-br absolute inset-0 pointer-events-none" />

          {/* Featured Header Bar */}
          <div className="reveal-item p-6 md:px-10 md:py-6 border-b border-[#262626] bg-[#0E0E0E] flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 bg-[#B40018] inline-block" />
              <span className="font-mono text-xs uppercase tracking-widest text-[#F4F1EA] font-bold">
                FLAGSHIP COMPUTER VISION CASE STUDY
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-[#A3A199]">{featuredProject.category}</span>
              <span className="font-mono text-[11px] text-[#B40018] border border-[#B40018] px-2 py-0.5">
                {featuredProject.status}
              </span>
            </div>
          </div>

          {/* Case Study Content */}
          <div className="p-6 md:p-10 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              {/* Left Column: Big Title, Overview & Animated Project Photo Frame */}
              <div className="lg:col-span-6 space-y-6">
                <div className="reveal-item space-y-3">
                  <h3 className="text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase font-display leading-[0.92] text-[#F4F1EA]">
                    AI INSURANCE
                    <span className="block text-[#B40018]">CLAIM ESTIMATOR</span>
                  </h3>

                  <p className="text-base sm:text-lg text-[#F4F1EA]/90 leading-relaxed font-sans">
                    {featuredProject.shortDesc}
                  </p>

                  <p className="text-sm text-[#A3A199] leading-relaxed">
                    {featuredProject.fullDesc}
                  </p>
                </div>

                {/* ANIMATED PROJECT PHOTO: Damage Analysis Scanner with Ken Burns & Laser Line */}
                <div className="parallax-container reveal-item relative h-64 sm:h-72 bg-[#050505] border border-[#262626] overflow-hidden group">
                  {/* Real Damaged Vehicle Photo with Ken Burns Breathing Animation */}
                  {featuredProject.imageUrl && (
                    <div className="absolute inset-0 overflow-hidden">
                      <img
                        src={featuredProject.imageUrl}
                        alt={featuredProject.imageAlt || 'Vehicle damage detection'}
                        loading="lazy"
                        className="w-full h-full object-cover object-center filter contrast-125 brightness-75 group-hover:brightness-95 group-hover:contrast-110 transition-all duration-700 ease-out animate-project-kenburns group-hover:scale-108"
                      />
                      {/* Dark cinematic vignette */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-[#050505]/50 group-hover:via-transparent transition-all duration-500" />
                      <div className="absolute inset-0 bg-[#B40018]/15 mix-blend-color group-hover:opacity-40 transition-opacity duration-500" />
                    </div>
                  )}

                  {/* Animated Laser Scanning Line Sweeping Vertically */}
                  <div className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#B40018] to-transparent shadow-[0_0_15px_#B40018] animate-laser-scan z-20 pointer-events-none" />

                  {/* Computer Vision Detection Bounding Boxes Overlay on Car Image */}
                  <div className="absolute inset-0 pointer-events-none z-10 p-4 flex flex-col justify-between">
                    {/* Top HUD Telemetry Status */}
                    <div className="flex items-center justify-between text-[10px] font-mono text-[#F4F1EA] bg-[#0A0A0A]/90 px-3 py-1 border border-[#262626] backdrop-blur-sm self-start">
                      <span className="flex items-center gap-1.5 text-[#B40018] font-bold">
                        <Scan className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '10s' }} />
                        CV INFERENCE PIPELINE
                      </span>
                      <span className="ml-3 text-[#A3A199]">94.8% CONFIDENCE</span>
                    </div>

                    {/* Bounding Box 1: Front Bumper Crumple */}
                    <div className="relative self-center sm:self-start sm:ml-8 p-3 border-2 border-[#B40018] bg-[#0E0E0E]/85 backdrop-blur-sm max-w-xs shadow-2xl animate-hud-pulse">
                      <div className="flex items-center justify-between font-mono text-[10px] text-[#A3A199] pb-1 border-b border-[#262626] mb-1.5">
                        <span className="text-[#B40018] font-bold">[SEV 3: BUMPER CRUMPLE]</span>
                        <span className="text-emerald-400">96.2%</span>
                      </div>
                      <div className="space-y-1 font-mono text-[9px] text-[#A3A199]">
                        <div className="flex justify-between">
                          <span>DEFORMATION:</span>
                          <span className="text-[#F4F1EA]">SEVERE / REPLACE</span>
                        </div>
                        <div className="flex justify-between">
                          <span>ESTIMATED PARTS:</span>
                          <span className="text-[#B40018] font-bold">₹14,500 - ₹18,000</span>
                        </div>
                      </div>
                    </div>

                    {/* Bottom HUD Bar */}
                    <div className="flex items-center justify-between text-[9px] font-mono text-[#A3A199] bg-[#0A0A0A]/90 px-2.5 py-1 border border-[#262626] backdrop-blur-sm">
                      <span className="text-[#B40018] font-bold">LIVE FRAME #0842 · YOLOv8-SEG</span>
                      <span>INFERENCE LATENCY: 28MS</span>
                    </div>
                  </div>

                  {/* Corner indicator */}
                  <div className="viewfinder-corner viewfinder-tl viewfinder-tr viewfinder-bl viewfinder-br absolute inset-0 pointer-events-none z-20" />
                </div>

                {/* CTAs with Staggered Reveal */}
                <div className="reveal-item pt-2 flex flex-wrap items-center gap-4">
                  <button
                    type="button"
                    onClick={() => setModalOpen(true)}
                    className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#B40018] hover:bg-[#7A0010] text-[#F4F1EA] text-xs font-bold tracking-wider uppercase transition-colors whitespace-nowrap cinema-glow"
                  >
                    <span>Launch Damage Simulator</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>

                  <a
                    href={featuredProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3.5 bg-[#171717] hover:bg-[#262626] text-[#F4F1EA] border border-[#262626] hover:border-[#F4F1EA]/40 text-xs font-semibold tracking-wider uppercase transition-colors whitespace-nowrap"
                  >
                    <Github className="w-4 h-4" />
                    <span>View GitHub Repo</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Case Study Architectural Blocks (Problem, Idea, Approach, Tech, Result) */}
              <div className="lg:col-span-6 space-y-4">
                {/* 1. Problem */}
                <div className="reveal-item p-5 bg-[#0F0F0F] border border-[#262626]">
                  <span className="font-mono text-xs uppercase tracking-wider text-[#B40018] font-bold block mb-1">
                    01. THE PROBLEM
                  </span>
                  <p className="text-xs sm:text-sm text-[#A3A199] leading-relaxed">
                    {featuredProject.problem}
                  </p>
                </div>

                {/* 2. Idea & Approach */}
                <div className="reveal-item p-5 bg-[#0F0F0F] border border-[#262626]">
                  <span className="font-mono text-xs uppercase tracking-wider text-[#B40018] font-bold block mb-1">
                    02. THE APPROACH &amp; IDEA
                  </span>
                  <p className="text-xs sm:text-sm text-[#A3A199] leading-relaxed">
                    {featuredProject.approach}
                  </p>
                </div>

                {/* 3. Tech Stack */}
                <div className="reveal-item p-5 bg-[#0F0F0F] border border-[#262626]">
                  <span className="font-mono text-xs uppercase tracking-wider text-[#B40018] font-bold block mb-2">
                    03. THE TECHNOLOGY
                  </span>
                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#F4F1EA]">
                    {featuredProject.technology?.map((tech, i) => (
                      <span key={i} className="flex items-center gap-2">
                        <span>{tech}</span>
                        {i < (featuredProject.technology?.length || 0) - 1 && (
                          <span className="text-[#B40018]" aria-hidden="true">
                            ·
                          </span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 4. Result */}
                <div className="reveal-item p-5 bg-[#0F0F0F] border-l-2 border-[#B40018] border-y border-r border-[#262626]">
                  <span className="font-mono text-xs uppercase tracking-wider text-[#B40018] font-bold block mb-1">
                    04. THE RESULT
                  </span>
                  <p className="text-xs sm:text-sm text-[#F4F1EA]/90 leading-relaxed font-semibold">
                    {featuredProject.result}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* SECTION 14: OTHER TECH PROJECTS CAROUSEL (SWIPEABLE ON MOBILE, GRID ON MD) */}
        {/* ========================================================================= */}
        <div>
          <div className="reveal-group flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-[#262626]">
            <div>
              <h3 className="reveal-item text-2xl md:text-3xl font-extrabold uppercase font-display text-[#F4F1EA]">
                ADDITIONAL SYSTEMS &amp; EXPLORATIONS
              </h3>
              <span className="text-[11px] font-mono text-[#B40018] sm:hidden block mt-1">
                ← SWIPE HORIZONTALLY TO BROWSE PROJECTS →
              </span>
            </div>
            <span className="reveal-item font-mono text-xs text-[#A3A199]">
              REAL REPOSITORIES · ANIMATED SCANNER FRAMES
            </span>
          </div>

          {/* Touch-optimized horizontal swipe rail on mobile (snap-x), responsive grid on desktop */}
          <div className="reveal-cards-grid flex md:grid overflow-x-auto md:overflow-x-visible pb-4 md:pb-0 snap-x snap-mandatory md:snap-none -mx-6 px-6 md:mx-0 md:px-0 md:grid-cols-2 lg:grid-cols-3 gap-6 scrollbar-thin scrollbar-thumb-[#262626] scrollbar-track-transparent">
            {secondaryProjects.map((project) => {
              const isInDev = project.status === 'IN DEVELOPMENT';

              return (
                <div
                  key={project.id}
                  className="reveal-card min-w-[85vw] sm:min-w-[340px] md:min-w-0 snap-center p-6 bg-[#0B0B0B] border border-[#262626] hover:border-[#404040] transition-all duration-200 flex flex-col justify-between group rounded-none"
                >
                  <div>
                    {/* Top Category & Status Indicator */}
                    <div className="flex items-center justify-between gap-2 pb-4 mb-4 border-b border-[#262626] font-mono text-[11px]">
                      <span className="text-[#A3A199] truncate">{project.category}</span>
                      {isInDev ? (
                        <span className="text-amber-500 font-bold border border-amber-500/40 px-2 py-0.5 text-[10px] whitespace-nowrap">
                          IN DEVELOPMENT
                        </span>
                      ) : (
                        <span className="text-[#A3A199] border border-[#262626] px-2 py-0.5 text-[10px] whitespace-nowrap">
                          COMPLETED
                        </span>
                      )}
                    </div>

                    {/* ANIMATED PROJECT PHOTO FRAME */}
                    <AnimatedProjectPhoto project={project} />

                    {/* Project Title */}
                    <h4 className="text-xl md:text-2xl font-bold uppercase font-display tracking-tight text-[#F4F1EA] group-hover:text-[#B40018] transition-colors mb-3">
                      {project.title}
                    </h4>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-[#A3A199] leading-relaxed mb-6 font-sans">
                      {project.shortDesc}
                    </p>
                  </div>

                  {/* Footer: Tags & Action link with generous 44px touch targets */}
                  <div className="pt-4 border-t border-[#262626] space-y-3">
                    <div className="flex flex-wrap items-center gap-1.5 text-[11px] font-mono text-[#A3A199]">
                      {project.tags.map((tag, idx) => (
                        <span key={idx} className="flex items-center gap-1.5">
                          <span>{tag}</span>
                          {idx < project.tags.length - 1 && (
                            <span className="text-[#B40018]" aria-hidden="true">
                              ·
                            </span>
                          )}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="min-h-[44px] inline-flex items-center gap-2 text-xs font-mono text-[#F4F1EA] hover:text-[#B40018] transition-colors active:text-[#B40018] py-2 px-1"
                      >
                        <Github className="w-4 h-4" />
                        <span>Source Code</span>
                      </a>

                      {project.id === 'claim-estimator' && (
                        <button
                          type="button"
                          onClick={() => setModalOpen(true)}
                          className="min-h-[44px] inline-flex items-center text-xs font-mono text-[#B40018] hover:underline px-2 py-1 font-bold"
                        >
                          Try Simulator
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Flagship Case Study Interactive Simulator Modal */}
      <ClaimEstimatorModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
};
