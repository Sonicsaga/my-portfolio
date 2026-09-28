import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { PERSONAL_BRAND } from '../data/portfolioData';

interface NavbarProps {
  onOpenContact?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const touchStartY = useRef<number>(0);
  const touchCurrentY = useRef<number>(0);
  const [dragOffset, setDragOffset] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is active
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setDragOffset(0);
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Touch handlers for swipe-to-close on mobile menu
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartY.current = e.touches[0].clientY;
    touchCurrentY.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchCurrentY.current = e.touches[0].clientY;
    const diff = touchCurrentY.current - touchStartY.current;
    // Allow dragging downwards to close
    if (diff > 0) {
      setDragOffset(diff);
    }
  };

  const handleTouchEnd = () => {
    const diff = touchCurrentY.current - touchStartY.current;
    // If swiped down more than 75px, close the menu
    if (diff > 75) {
      setMobileMenuOpen(false);
    }
    setDragOffset(0);
  };

  const navLinks = [
    { label: 'Work', href: '#build' },
    { label: 'Cinema', href: '#cinema' },
    { label: 'MontageSanchari', href: '#montagesanchari' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#050505]/95 backdrop-blur-md border-b border-[#262626]/70 py-3 shadow-xl'
            : 'bg-transparent py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12 flex items-center justify-between">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className="text-lg md:text-xl font-bold tracking-tight text-[#F4F1EA] hover:text-[#B40018] transition-colors whitespace-nowrap font-sans uppercase min-h-[44px] flex items-center"
          >
            Adarsh Mohithe
          </a>

          {/* Zone 2: 4–6 clean text navigation links */}
          <nav className="hidden md:flex items-center gap-8 text-xs lg:text-sm font-medium tracking-wider uppercase text-[#A3A199]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#F4F1EA] transition-colors relative py-1 hover:after:w-full after:w-0 after:h-[1.5px] after:bg-[#B40018] after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1–2 primary actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="#contact"
              onClick={onOpenContact}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold tracking-wider uppercase text-[#F4F1EA] bg-[#171717] hover:bg-[#B40018] border border-[#262626] hover:border-[#B40018] transition-all duration-200 whitespace-nowrap min-h-[44px]"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile menu hamburger with generous 48x48px minimum touch target */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden min-w-[48px] min-h-[48px] flex items-center justify-center -mr-2 p-2.5 text-[#F4F1EA] hover:text-[#B40018] active:scale-95 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B40018]"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer with Swipe-down Gesture and Enhanced Touch Targets */}
      {mobileMenuOpen && (
        <div
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{
            transform: dragOffset > 0 ? `translateY(${dragOffset}px)` : 'none',
            transition: dragOffset > 0 ? 'none' : 'transform 0.25s ease-out',
          }}
          className="fixed inset-0 z-30 bg-[#050505]/98 backdrop-blur-2xl flex flex-col justify-between p-6 sm:p-8 pt-20 md:hidden animate-in fade-in duration-200 overflow-y-auto"
        >
          {/* Swipe indicator bar */}
          <div className="w-12 h-1.5 bg-[#262626] rounded-full mx-auto mb-6 shrink-0 active:bg-[#B40018]" />

          <nav className="flex flex-col space-y-2 my-auto">
            {[
              { label: 'Home', href: '#' },
              { label: 'About', href: '#about' },
              { label: 'Build & Tech', href: '#build' },
              { label: 'Cinema & Framing', href: '#cinema' },
              { label: 'The Shadow & Niyati', href: '#films' },
              { label: 'MontageSanchari', href: '#montagesanchari' },
              { label: 'Journey', href: '#journey' },
              { label: 'Contact', href: '#contact', accent: true },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`min-h-[52px] flex items-center px-3 py-2 text-xl font-bold uppercase tracking-wider transition-colors active:bg-[#151515] border-l-2 border-transparent active:border-[#B40018] ${
                  item.accent
                    ? 'text-[#B40018] hover:text-[#F4F1EA]'
                    : 'text-[#F4F1EA] hover:text-[#B40018]'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="pt-6 border-t border-[#262626] text-xs text-[#A3A199] flex flex-col gap-2 shrink-0">
            <div className="flex items-center justify-between font-mono text-[11px] text-[#A3A199] pb-2">
              <span className="flex items-center gap-1.5 text-[#B40018]">
                <span className="w-2 h-2 rounded-full bg-[#B40018] animate-ping" />
                <span>SWIPE DOWN TO CLOSE</span>
              </span>
              <span>ADARSH MOHITHE</span>
            </div>
            <p className="font-mono text-[#F4F1EA] text-[11px]">{PERSONAL_BRAND.identity}</p>
            <p className="text-[11px]">© 2026 Adarsh Mohithe · {PERSONAL_BRAND.tagline}</p>
          </div>
        </div>
      )}
    </>
  );
};
