import React, { useEffect } from 'react';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HeroStatement } from './components/HeroStatement';
import { ManyWorlds } from './components/ManyWorlds';
import { AboutSection } from './components/AboutSection';
import { StatusStrip } from './components/StatusStrip';
import { TechSection } from './components/TechSection';
import { ExperienceBlock } from './components/ExperienceBlock';
import { CinematographySection } from './components/CinematographySection';
import { FilmmakingSection } from './components/FilmmakingSection';
import { MontageSanchariSection } from './components/MontageSanchariSection';
import { HobbiesSection } from './components/HobbiesSection';
import { AchievementsSection } from './components/AchievementsSection';
import { JourneySection } from './components/JourneySection';
import { MultiMindSection } from './components/MultiMindSection';
import { ContactSection } from './components/ContactSection';
import { CinematicEnding } from './components/CinematicEnding';
import { ScrollTrigger } from './utils/gsapSetup';

export default function App() {
  // Global ScrollTrigger synchronization
  useEffect(() => {
    // Refresh ScrollTrigger once DOM assets load for accurate start/end coordinates
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 250);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-[#F4F1EA] selection:bg-[#B40018] selection:text-white relative">
      {/* Subtle Desktop Custom Cursor */}
      <CustomCursor />

      {/* Strict 3-Zone Navigation Header */}
      <Navbar />

      {/* Main Experience Flow */}
      <main>
        {/* 1. Cinematic Hero Section with Portrait Slot & Photo Switcher */}
        <Hero />

        {/* 2. Hero Statement: "Jack of all trades. Still mastering them." */}
        <HeroStatement />

        {/* 3. "One Person. Many Worlds." - Interactive 01–09 Disciplines */}
        <ManyWorlds />

        {/* 4. The Person Behind The Work (About & Philosophy) */}
        <AboutSection />

        {/* 5. Live Status Strip (B.Tech 7th Sem, Current Builds & Productions) */}
        <StatusStrip />

        {/* 6. Technical Engineering & Computer Vision (AI Claim Estimator + Projects) */}
        <TechSection />

        {/* 7. Professional Experience (Accenture - Assistant Frontend Developer) */}
        <ExperienceBlock />

        {/* 8. Cinematography: "I See In Frames" & Aspect Ratio Scope Simulator */}
        <CinematographySection />

        {/* 9. Filmmaking: "I Tell Stories" - THE SHADOW (Active) & NIYATI (Upcoming) */}
        <FilmmakingSection />

        {/* 10. MontageSanchari: Visual Laboratory & Editorial Curated Gallery */}
        <MontageSanchariSection />

        {/* 11. The Human Side: Portrait Art, Cricket, Guitar, Camera */}
        <HobbiesSection />

        {/* 12. Editorial Honors & Verified Achievements */}
        <AchievementsSection />

        {/* 13. The Journey: Milestone Progression from Student to Present */}
        <JourneySection />

        {/* 14. Signature Kinetic Multi-Mind Convergence */}
        <MultiMindSection />

        {/* 15. Cinematic Contact & Inquiries */}
        <ContactSection />
      </main>

      {/* 16. Final Cinematic Narrative Ending */}
      <CinematicEnding />
    </div>
  );
}
