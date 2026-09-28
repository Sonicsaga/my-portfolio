import React, { useState } from 'react';
import { ArrowUpRight, Mail, Github, Linkedin, Instagram, Copy, Check } from 'lucide-react';
import { PERSONAL_BRAND } from '../data/portfolioData';
import { useScrollAnimations } from '../hooks/useScrollAnimations';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const containerRef = useScrollAnimations<HTMLElement>({
    staggerDelay: 0.1,
  });

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_BRAND.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      ref={containerRef}
      id="contact"
      className="py-28 md:py-40 bg-[#050505] border-t border-[#262626] relative overflow-hidden"
    >
      {/* Background ambient red glow */}
      <div
        className="parallax-layer absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-[#B40018]/15 rounded-full blur-[140px] pointer-events-none"
        data-parallax-speed="25"
      />

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        <div className="reveal-group">
          <div className="reveal-item flex items-center gap-3 text-xs md:text-sm font-mono tracking-widest text-[#B40018] uppercase mb-8">
            <span className="w-8 h-[1px] bg-[#B40018]" />
            <span>COLLABORATION &amp; INQUIRY</span>
          </div>

          {/* Large Typography Contact Header with Staggered Reveal */}
          <div className="mb-12 space-y-4">
            <h2 className="reveal-item text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold uppercase font-display leading-[0.88] tracking-tight text-[#F4F1EA]">
              HAVE AN
              <span className="block text-[#B40018]">IDEA?</span>
            </h2>

            <p className="reveal-item text-xl sm:text-2xl md:text-3xl font-light text-[#F4F1EA]/90 font-serif italic max-w-2xl">
              &ldquo;Let’s turn it into something worth remembering.&rdquo;
            </p>

            <p className="reveal-item text-sm text-[#A3A199] max-w-xl font-sans leading-relaxed">
              Open for AI &amp; computer vision engineering, front-end development collaborations,
              cinematography commissions, video editing, and independent filmmaking discussions.
            </p>
          </div>

          {/* Direct Email Display & Copy Box */}
          <div className="reveal-item mb-12 p-6 sm:p-8 bg-[#0D0D0D] border border-[#262626] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#B40018] block mb-1">
                DIRECT INBOX
              </span>
              <a
                href={`mailto:${PERSONAL_BRAND.email}`}
                className="text-lg sm:text-2xl font-bold font-mono text-[#F4F1EA] hover:text-[#B40018] transition-colors break-all"
              >
                {PERSONAL_BRAND.email}
              </a>
            </div>

            <button
              type="button"
              onClick={copyEmail}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#171717] hover:bg-[#262626] text-[#F4F1EA] border border-[#262626] text-xs font-mono uppercase tracking-wider transition-colors self-start sm:self-center"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400">COPIED TO CLIPBOARD</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>COPY EMAIL</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* 4 Real Verified Profiles with Staggered Card Entrance */}
        <div className="reveal-cards-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* LinkedIn */}
          <a
            href={PERSONAL_BRAND.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="reveal-card p-6 bg-[#090909] border border-[#262626] hover:border-[#B40018] transition-all group flex flex-col justify-between"
          >
            <div className="flex items-center justify-between pb-4 border-b border-[#262626]">
              <Linkedin className="w-5 h-5 text-[#F4F1EA] group-hover:text-[#B40018] transition-colors" />
              <ArrowUpRight className="w-4 h-4 text-[#A3A199] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
            <div className="pt-4">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#A3A199] block">
                PROFESSIONAL NETWORK
              </span>
              <p className="text-lg font-bold uppercase font-display text-[#F4F1EA] group-hover:text-[#B40018] transition-colors">
                LinkedIn
              </p>
              <p className="text-xs font-mono text-[#A3A199] truncate">{PERSONAL_BRAND.linkedinHandle}</p>
            </div>
          </a>

          {/* GitHub */}
          <a
            href={PERSONAL_BRAND.github}
            target="_blank"
            rel="noopener noreferrer"
            className="reveal-card p-6 bg-[#090909] border border-[#262626] hover:border-[#B40018] transition-all group flex flex-col justify-between"
          >
            <div className="flex items-center justify-between pb-4 border-b border-[#262626]">
              <Github className="w-5 h-5 text-[#F4F1EA] group-hover:text-[#B40018] transition-colors" />
              <ArrowUpRight className="w-4 h-4 text-[#A3A199] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
            <div className="pt-4">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#A3A199] block">
                CODE REPOSITORIES
              </span>
              <p className="text-lg font-bold uppercase font-display text-[#F4F1EA] group-hover:text-[#B40018] transition-colors">
                GitHub
              </p>
              <p className="text-xs font-mono text-[#A3A199] truncate">{PERSONAL_BRAND.githubHandle}</p>
            </div>
          </a>

          {/* Instagram Main */}
          <a
            href={PERSONAL_BRAND.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="reveal-card p-6 bg-[#090909] border border-[#262626] hover:border-[#B40018] transition-all group flex flex-col justify-between"
          >
            <div className="flex items-center justify-between pb-4 border-b border-[#262626]">
              <Instagram className="w-5 h-5 text-[#F4F1EA] group-hover:text-[#B40018] transition-colors" />
              <ArrowUpRight className="w-4 h-4 text-[#A3A199] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
            <div className="pt-4">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#A3A199] block">
                VISUAL LAB &amp; CONTENT
              </span>
              <p className="text-lg font-bold uppercase font-display text-[#F4F1EA] group-hover:text-[#B40018] transition-colors">
                MontageSanchari
              </p>
              <p className="text-xs font-mono text-[#A3A199] truncate">{PERSONAL_BRAND.instagramHandle}</p>
            </div>
          </a>

          {/* Film Production Channel / Studio */}
          <div className="reveal-card p-6 bg-[#090909] border border-[#262626] flex flex-col justify-between">
            <div className="flex items-center justify-between pb-4 border-b border-[#262626]">
              <span className="w-3 h-3 rounded-full bg-[#B40018]" />
              <span className="text-xs font-mono text-[#B40018] font-bold">FILM STUDIO</span>
            </div>
            <div className="pt-4">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#A3A199] block">
                CINEMA &amp; NARRATIVE
              </span>
              <p className="text-lg font-bold uppercase font-display text-[#F4F1EA]">
                Psycho Creations
              </p>
              <p className="text-xs font-mono text-[#A3A199]">THE SHADOW / NIYATI</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
