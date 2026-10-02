import { useState } from 'react';
import { CustomCursor } from './components/CustomCursor';
import { ParticleBackground } from './components/ParticleBackground';
import { Navbar } from './components/Navbar';
import { ScrollProgress } from './components/ScrollProgress';
import { CommandPalette } from './components/CommandPalette';
import { ProjectModal } from './components/ProjectModal';
import { Toast } from './components/Toast';

import { HeroSection } from './sections/HeroSection';
import { AboutSection } from './sections/AboutSection';
import { SkillsSection } from './sections/SkillsSection';
import { ExperienceSection } from './sections/ExperienceSection';
import { ResearchSection } from './sections/ResearchSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { EducationSection } from './sections/EducationSection';
import { CommunitySection } from './sections/CommunitySection';
import { CertificationsSection } from './sections/CertificationsSection';
import { TerminalSection } from './sections/TerminalSection';
import { ContactSection } from './sections/ContactSection';

import type { Project } from './types/portfolio';
import { profileData } from './data/portfolioData';

export function App() {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
  };

  return (
    <div className="relative min-h-screen bg-[#030712] text-slate-100 font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      <ParticleBackground />
      <CustomCursor />
      <ScrollProgress />
      <Navbar onOpenCommandPalette={() => setCommandPaletteOpen(true)} />

      <main className="relative z-10 space-y-0">
        <HeroSection onShowToast={showToast} />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ResearchSection />
        <ProjectsSection onSelectProject={(p) => setSelectedProject(p)} />
        <EducationSection />
        <CommunitySection />
        <CertificationsSection />
        <TerminalSection />
        <ContactSection onShowToast={showToast} />
      </main>

      <footer className="relative z-10 border-t border-white/10 bg-[#030712]/90 backdrop-blur-xl py-8 font-sans text-xs text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-2">
            <span className="font-mono text-cyan-400 font-bold">&gt;</span>
            <span className="font-bold text-slate-200">{profileData.name}</span>
            <span>© {new Date().getFullYear()} • All Rights Reserved</span>
          </div>

          <div className="flex items-center space-x-2 text-slate-400 font-mono text-[11px]">
            <span>Crafted with React, Vite &amp; Tailwind CSS</span>
          </div>
        </div>
      </footer>

      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
        onShowToast={showToast}
      />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <Toast
        message={toastMessage}
        onClose={() => setToastMessage(null)}
      />
    </div>
  );
}

export default App;
