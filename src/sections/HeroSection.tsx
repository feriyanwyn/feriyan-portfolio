import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail, MapPin, Code2, BrainCircuit } from 'lucide-react';
import { GithubIcon, LinkedinIcon, WhatsAppIcon } from '../components/Icons';
import { profileData } from '../data/portfolioData';

interface HeroSectionProps {
  onShowToast?: (msg: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onShowToast }) => {
  const floatingTechs = [
    { name: 'Python', icon: '🐍', top: '12%', left: '10%' },
    { name: 'React.js', icon: '⚛️', top: '22%', right: '8%' },
    { name: 'IndoBERT / NLP', icon: '🔥', bottom: '25%', left: '12%' },
    { name: 'Machine Learning', icon: '🤖', bottom: '15%', right: '10%' },
    { name: 'Data Entry', icon: '📋', top: '65%', left: '5%' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="absolute inset-0 pointer-events-none hidden xl:block max-w-7xl mx-auto">
        {floatingTechs.map((tech, idx) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: 0.75,
              scale: 1,
              y: [0, -10, 0],
            }}
            transition={{
              y: { duration: 4 + idx, repeat: Infinity, ease: 'easeInOut' },
              opacity: { duration: 1 },
            }}
            style={{
              top: tech.top,
              left: tech.left,
              right: tech.right,
              bottom: tech.bottom,
            }}
            className="absolute px-3 py-1.5 rounded-xl glass-panel border border-cyan-500/20 text-xs font-mono text-cyan-300 shadow-lg flex items-center space-x-2 backdrop-blur-md"
          >
            <span>{tech.icon}</span>
            <span>{tech.name}</span>
          </motion.div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-8 shadow-[0_0_15px_rgba(6,182,212,0.15)]"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <span>{profileData.status}</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-4"
        >
          Hi, I'm <span className="text-gradient-cyan">{profileData.name}</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg sm:text-2xl md:text-2xl font-semibold text-slate-300 mb-6 flex items-center justify-center gap-2 flex-wrap"
        >
          <span className="flex items-center gap-1.5 text-slate-400">
            Data Entry
          </span>
          <span className="text-slate-600">|</span>
          <span className="flex items-center gap-1.5 text-cyan-400">
            <Code2 className="w-4 h-4" />
            Software Developer
          </span>
          <span className="text-slate-600">|</span>
          <span className="flex items-center gap-1.5 text-sky-400">
            <BrainCircuit className="w-4 h-4" />
            AI &amp; Machine Learning
          </span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-2xl mx-auto space-y-4 mb-10"
        >
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            {profileData.shortBio}
          </p>
          <div className="flex items-center justify-center space-x-2 text-xs font-mono text-slate-400">
            <MapPin className="w-3.5 h-3.5 text-cyan-400" />
            <span>{profileData.location}</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <a
            href="#projects"
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm flex items-center justify-center space-x-2 transition-all shadow-lg shadow-cyan-500/25 group"
            data-cursor="hover"
          >
            <span>View Projects</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href={profileData.cvUrl}
            download="CV Feriyan.PDFda_CV.pdf"
            onClick={() => onShowToast?.('Downloading Feriyan Eka Nanda CV...')}
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white border border-white/10 hover:border-cyan-500/40 text-sm font-semibold flex items-center justify-center space-x-2 transition-all shadow-md group cursor-pointer"
            data-cursor="hover"
            title="Download Feriyan Eka Nanda CV (PDF)"
          >
            <Download className="w-4 h-4 text-cyan-400 group-hover:translate-y-0.5 transition-transform" />
            <span>Download CV</span>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex items-center justify-center space-x-4"
        >
          <a
            href={profileData.socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-slate-900/80 text-slate-400 hover:text-cyan-400 border border-white/10 hover:border-cyan-500/30 transition-all hover:scale-110 shadow-sm"
            title="GitHub"
            data-cursor="hover"
          >
            <GithubIcon className="w-5 h-5" />
          </a>

          <a
            href={profileData.socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-slate-900/80 text-slate-400 hover:text-cyan-400 border border-white/10 hover:border-cyan-500/30 transition-all hover:scale-110 shadow-sm"
            title="LinkedIn"
            data-cursor="hover"
          >
            <LinkedinIcon className="w-5 h-5" />
          </a>

          <a
            href={`mailto:${profileData.socialLinks.email}`}
            className="p-3 rounded-xl bg-slate-900/80 text-slate-400 hover:text-cyan-400 border border-white/10 hover:border-cyan-500/30 transition-all hover:scale-110 shadow-sm"
            title="Email"
            data-cursor="hover"
          >
            <Mail className="w-5 h-5" />
          </a>

          {profileData.socialLinks.whatsapp && (
            <a
              href={profileData.socialLinks.whatsappUrl || `https://wa.me/${profileData.socialLinks.whatsapp.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-slate-900/80 text-slate-400 hover:text-emerald-400 border border-white/10 hover:border-emerald-500/30 transition-all hover:scale-110 shadow-sm"
              title="Chat on WhatsApp"
              data-cursor="hover"
            >
              <WhatsAppIcon className="w-5 h-5 text-emerald-400" />
            </a>
          )}
        </motion.div>
      </div>
    </section>
  );
};
