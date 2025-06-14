
import { useState } from 'react';
import HeroSection from '@/components/HeroSection';
import NavigationBar from '@/components/NavigationBar';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import CertificationsSection from '@/components/CertificationsSection';
import ExperienceSection from '@/components/ExperienceSection';
import ResumeSection from '@/components/ResumeSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  const [activeSection, setActiveSection] = useState('hero');

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
