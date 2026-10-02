import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  Home,
  User,
  Code,
  FolderGit2,
  Briefcase,
  BookOpen,
  GraduationCap,
  Users,
  Award,
  Terminal as TerminalIcon,
  Mail,
  Globe,
  Download,
  X,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, WhatsAppIcon } from './Icons';
import { profileData } from '../data/portfolioData';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onShowToast: (msg: string) => void;
}

interface CommandItem {
  id: string;
  label: string;
  category: 'Navigation' | 'Action' | 'Social';
  icon: React.FC<{ className?: string }>;
  action: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, onClose, onShowToast }) => {
  const [search, setSearch] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);

  const navigateTo = (selector: string) => {
    onClose();
    const el = document.querySelector(selector);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const commands: CommandItem[] = [
    {
      id: 'nav-home',
      label: 'Go to Home',
      category: 'Navigation',
      icon: Home,
      action: () => navigateTo('#home'),
    },
    {
      id: 'nav-about',
      label: 'Go to About Me',
      category: 'Navigation',
      icon: User,
      action: () => navigateTo('#about'),
    },
    {
      id: 'nav-skills',
      label: 'Go to Skills & Technologies',
      category: 'Navigation',
      icon: Code,
      action: () => navigateTo('#skills'),
    },
    {
      id: 'nav-experience',
      label: 'Go to Experience',
      category: 'Navigation',
      icon: Briefcase,
      action: () => navigateTo('#experience'),
    },
    {
      id: 'nav-research',
      label: 'Go to Research Experience',
      category: 'Navigation',
      icon: BookOpen,
      action: () => navigateTo('#research'),
    },
    {
      id: 'nav-projects',
      label: 'Go to Projects Showcase',
      category: 'Navigation',
      icon: FolderGit2,
      action: () => navigateTo('#projects'),
    },
    {
      id: 'nav-education',
      label: 'Go to Education',
      category: 'Navigation',
      icon: GraduationCap,
      action: () => navigateTo('#education'),
    },
    {
      id: 'nav-community',
      label: 'Go to Community Experience',
      category: 'Navigation',
      icon: Users,
      action: () => navigateTo('#community'),
    },
    {
      id: 'nav-certifications',
      label: 'Go to Certifications & Training',
      category: 'Navigation',
      icon: Award,
      action: () => navigateTo('#certifications'),
    },
    {
      id: 'nav-terminal',
      label: 'Open Interactive CLI Terminal',
      category: 'Navigation',
      icon: TerminalIcon,
      action: () => navigateTo('#terminal'),
    },
    {
      id: 'nav-contact',
      label: 'Go to Contact',
      category: 'Navigation',
      icon: Mail,
      action: () => navigateTo('#contact'),
    },
    {
      id: 'action-download-cv',
      label: 'Download Curriculum Vitae (PDF)',
      category: 'Action',
      icon: Download,
      action: () => {
        const link = document.createElement('a');
        link.href = profileData.cvUrl;
        link.download = 'CV Feriyan.PDFda_CV.pdf';
        link.click();
        onClose();
        onShowToast('Downloading Feriyan Eka Nanda CV...');
      },
    },
    {
      id: 'action-copy-email',
      label: 'Copy Email Address',
      category: 'Action',
      icon: Mail,
      action: () => {
        navigator.clipboard.writeText(profileData.socialLinks.email);
        onClose();
        onShowToast('Email copied to clipboard!');
      },
    },
    {
      id: 'action-copy-whatsapp',
      label: 'Copy WhatsApp Number',
      category: 'Action',
      icon: WhatsAppIcon,
      action: () => {
        navigator.clipboard.writeText(profileData.socialLinks.whatsapp || '');
        onClose();
        onShowToast('WhatsApp number copied to clipboard!');
      },
    },
    {
      id: 'social-whatsapp',
      label: 'Chat on WhatsApp',
      category: 'Social',
      icon: WhatsAppIcon,
      action: () => {
        const raw = profileData.socialLinks.whatsapp || '6281234567890';
        const clean = raw.replace(/[^0-9]/g, '').replace(/^0/, '62');
        const url = profileData.socialLinks.whatsappUrl || `https://wa.me/${clean}`;
        window.open(url, '_blank');
        onClose();
      },
    },
    {
      id: 'social-portfolio',
      label: 'Open Portfolio Website (https://feriyan-portfolio.vercel.app)',
      category: 'Social',
      icon: Globe,
      action: () => {
        window.open(profileData.socialLinks.portfolio, '_blank');
        onClose();
      },
    },
    {
      id: 'social-github',
      label: 'Open GitHub Profile',
      category: 'Social',
      icon: GithubIcon,
      action: () => {
        window.open(profileData.socialLinks.github, '_blank');
        onClose();
      },
    },
    {
      id: 'social-linkedin',
      label: 'Open LinkedIn Profile',
      category: 'Social',
      icon: LinkedinIcon,
      action: () => {
        window.open(profileData.socialLinks.linkedin, '_blank');
        onClose();
      },
    },
  ];

  const filteredCommands = commands.filter((cmd) =>
    cmd.label.toLowerCase().includes(search.toLowerCase()) ||
    cmd.category.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          setSearch('');
          setSelectedIndex(0);
        }
      }

      if (!isOpen) return;

      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % (filteredCommands.length || 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filteredCommands.length) % (filteredCommands.length || 1));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredCommands[selectedIndex]) {
          filteredCommands[selectedIndex].action();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredCommands, selectedIndex, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-start justify-center pt-20 px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/70 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -10 }}
          className="relative w-full max-w-xl bg-slate-900/95 border border-cyan-500/30 rounded-2xl shadow-2xl shadow-cyan-950/60 overflow-hidden z-10 font-sans"
        >
          <div className="flex items-center px-4 py-3 border-b border-white/10">
            <Search className="w-5 h-5 text-cyan-400 mr-3" />
            <input
              type="text"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setSelectedIndex(0);
              }}
              placeholder="Type a command or search..."
              className="w-full bg-transparent text-slate-100 placeholder-slate-500 text-sm focus:outline-none"
              autoFocus
            />
            <button
              onClick={onClose}
              className="p-1 rounded bg-slate-800 text-slate-400 hover:text-white text-xs ml-2"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="max-h-80 overflow-y-auto p-2 space-y-1">
            {filteredCommands.length === 0 ? (
              <div className="py-8 text-center text-slate-500 text-sm">
                No matching commands found.
              </div>
            ) : (
              filteredCommands.map((cmd, idx) => {
                const IconComponent = cmd.icon;
                const isSelected = idx === selectedIndex;
                return (
                  <button
                    key={cmd.id}
                    onClick={cmd.action}
                    onMouseEnter={() => setSelectedIndex(idx)}
                    className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-left transition-all ${isSelected
                      ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/40 shadow-[0_0_10px_rgba(6,182,212,0.15)]'
                      : 'text-slate-300 hover:bg-white/5'
                      }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`p-1.5 rounded-lg ${isSelected ? 'bg-cyan-500/20 text-cyan-400' : 'bg-slate-800 text-slate-400'}`}>
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <span className="text-sm font-medium">{cmd.label}</span>
                    </div>
                    <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-slate-800/80 text-slate-400 border border-white/5">
                      {cmd.category}
                    </span>
                  </button>
                );
              })
            )}
          </div>

          <div className="px-4 py-2 bg-slate-950/80 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400 font-mono">
            <div className="flex items-center space-x-3">
              <span><kbd className="px-1 py-0.5 bg-slate-800 rounded border border-white/10">↑↓</kbd> navigate</span>
              <span><kbd className="px-1 py-0.5 bg-slate-800 rounded border border-white/10">↵</kbd> select</span>
              <span><kbd className="px-1 py-0.5 bg-slate-800 rounded border border-white/10">ESC</kbd> close</span>
            </div>
            <span className="text-cyan-400">Feriyan Portfolio</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
