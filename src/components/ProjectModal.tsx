import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Sparkles, Code2, BrainCircuit, Eye, Gamepad2, BarChart3 } from 'lucide-react';
import type { Project } from '../types/portfolio';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const categoryIcons: Record<string, React.ReactNode> = {
  'Web': <Code2 className="w-4 h-4 text-cyan-400" />,
  'AI / ML': <BrainCircuit className="w-4 h-4 text-indigo-400" />,
  'Computer Vision': <Eye className="w-4 h-4 text-sky-400" />,
  'Game Development': <Gamepad2 className="w-4 h-4 text-emerald-400" />,
  'Data': <BarChart3 className="w-4 h-4 text-amber-400" />,
};

const categoryColors: Record<string, string> = {
  'Web': 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30',
  'AI / ML': 'text-indigo-400 bg-indigo-500/10 border-indigo-500/30',
  'Computer Vision': 'text-sky-400 bg-sky-500/10 border-sky-500/30',
  'Game Development': 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
  'Data': 'text-amber-400 bg-amber-500/10 border-amber-500/30',
};

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-lg"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-2xl bg-[#090d16] border border-cyan-500/20 rounded-2xl shadow-2xl shadow-cyan-950/50 overflow-hidden z-10 my-8 font-sans"
        >
          {/* Header */}
          <div className="px-6 pt-6 pb-4 border-b border-white/10 flex items-start justify-between gap-4">
            <div>
              <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold border mb-3 ${categoryColors[project.category] ?? 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30'}`}>
                {categoryIcons[project.category]}
                {project.category}
              </span>
              <h3 className="text-2xl font-extrabold text-white tracking-tight">{project.title}</h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-900 text-slate-400 hover:text-white border border-white/10 hover:border-cyan-400 transition-all flex-shrink-0"
              data-cursor="hover"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-6 space-y-6 text-slate-300 text-sm leading-relaxed">
            {/* Tech Tags */}
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg text-xs font-mono bg-slate-900 border border-slate-700 text-cyan-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Overview */}
            <div>
              <h4 className="text-sm font-bold text-white flex items-center gap-2 mb-2">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                Overview
              </h4>
              <p className="text-slate-300 leading-relaxed">{project.overview}</p>
            </div>

            {/* Description */}
            <div className="p-4 rounded-xl bg-slate-900/60 border border-white/5">
              <h5 className="font-semibold text-cyan-400 mb-2 text-xs uppercase font-mono tracking-widest">Description</h5>
              <p className="text-slate-300">{project.description}</p>
            </div>

            {/* Key Features */}
            <div>
              <h4 className="text-sm font-bold text-white mb-3">Key Features</h4>
              <ul className="space-y-2">
                {project.keyFeatures.map((feature, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Footer */}
          <div className="px-6 pb-6 flex justify-end">
            <button
              onClick={onClose}
              className="px-5 py-2 text-xs font-bold rounded-xl bg-slate-800 text-slate-200 hover:bg-slate-700 hover:text-white transition-all border border-white/10"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
