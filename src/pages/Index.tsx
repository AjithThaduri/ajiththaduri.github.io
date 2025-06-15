
import { useState, useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import NavigationBar from '@/components/NavigationBar';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import CertificationsSection from '@/components/CertificationsSection';
import ExperienceSection from '@/components/ExperienceSection';
import ResumeSection from '@/components/ResumeSection';
import ContactSection from '@/components/ContactSection';

// Section order matters for scroll detection!
const sectionIds = [
  "hero",
  "about",
  "skills",
  "projects",
  "certifications",
  "experience",
  "resume",
  "contact",
];

const Index = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      let closestSection = 'hero';
      let minDistance = Infinity;

      for (const sectionId of sectionIds) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Find section whose top is closest to top of the viewport but not gone up entirely
          const dist = Math.abs(rect.top - 64); // 64px accounts for navbar height
          if (rect.top <= 64 && dist < minDistance) {
            minDistance = dist;
            closestSection = sectionId;
          }
        }
      }
      setActiveSection(closestSection);
    };

    // Debounce for performance
    let timeoutId: number | null = null;
    const onScroll = () => {
      if (timeoutId) window.cancelAnimationFrame(timeoutId);
      timeoutId = window.requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    // Call on mount to set initial section
    handleScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (timeoutId) window.cancelAnimationFrame(timeoutId);
    };
  }, []);

  return (
    <div className="min-h-screen bg-dark-bg text-white">
      <NavigationBar activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        <section id="hero">
          <HeroSection />
        </section>
        <section id="about" className="py-20">
          <AboutSection />
        </section>
        <section id="skills" className="py-20 section-gradient">
          <SkillsSection />
        </section>
        <section id="projects" className="py-20">
          <ProjectsSection />
        </section>
        <section id="certifications" className="py-20 section-gradient">
          <CertificationsSection />
        </section>
        <section id="experience" className="py-20">
          <ExperienceSection />
        </section>
        <section id="resume" className="py-20 section-gradient">
          <ResumeSection />
        </section>
        <section id="contact" className="py-20">
          <ContactSection />
        </section>
      </main>
    </div>
  );
};

export default Index;

