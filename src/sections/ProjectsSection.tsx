import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FolderGit2, ChevronRight, Code2, BrainCircuit, Eye, Gamepad2, BarChart3 } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import type { Project } from '../types/portfolio';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

const categoryIcons: Record<string, React.ReactNode> = {
  'Web': <Code2 className="w-4 h-4 text-cyan-400" />,
  'AI / ML': <BrainCircuit className="w-4 h-4 text-indigo-400" />,
  'Computer Vision': <Eye className="w-4 h-4 text-sky-400" />,
  'Game Development': <Gamepad2 className="w-4 h-4 text-emerald-400" />,
  'Data': <BarChart3 className="w-4 h-4 text-amber-400" />,
};

const categoryColors: Record<string, string> = {
  'Web': 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
  'AI / ML': 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20',
  'Computer Vision': 'text-sky-400 bg-sky-500/10 border-sky-500/20',
  'Game Development': 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
  'Data': 'text-amber-400 bg-amber-500/10 border-amber-500/20',
};

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [showAll, setShowAll] = useState(false);

  const categories = ['All', 'AI / ML', 'Computer Vision', 'Web', 'Game Development'];

  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === activeCategory);

  const visibleProjects = showAll ? filteredProjects : filteredProjects.slice(0, 4);

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-mono mb-3"
          >
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>PORTFOLIO SHOWCASE</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            Featured <span className="text-gradient-cyan">Projects</span>
          </motion.h2>
          <p className="mt-3 text-slate-400 text-sm">
            Software systems, AI/ML applications, web platforms, and interactive games. Click any project for details.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => { setActiveCategory(cat); setShowAll(false); }}
              className={`px-5 py-2 rounded-xl text-xs font-mono font-semibold transition-all duration-200 border ${
                activeCategory === cat
                  ? 'bg-cyan-500/20 text-cyan-300 border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.25)]'
                  : 'bg-slate-900/60 text-slate-400 border-white/5 hover:text-slate-200 hover:border-white/20'
              }`}
              data-cursor="hover"
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence>
            {visibleProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                onClick={() => onSelectProject(project)}
                className="glass-card rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-all cursor-pointer group overflow-hidden flex flex-col"
                data-cursor="hover"
              >
                {/* Card Top — Category Banner */}
                <div className="px-6 pt-6 pb-4 flex items-center justify-between">
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-semibold border ${categoryColors[project.category] ?? 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20'}`}>
                    {categoryIcons[project.category]}
                    {project.category}
                  </span>
                  <span className="text-xs font-mono text-slate-500 group-hover:text-cyan-400 transition-colors">
                    View Details →
                  </span>
                </div>

                {/* Card Body */}
                <div className="px-6 pb-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                      {project.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-5 line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-900 text-slate-300 border border-white/5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Key Features preview */}
                    <div className="pt-4 border-t border-white/5 space-y-1.5">
                      {project.keyFeatures.slice(0, 2).map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center text-xs text-slate-400">
                          <ChevronRight className="w-3 h-3 text-cyan-400 mr-1.5 flex-shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Show More / Less toggle */}
        {filteredProjects.length > 4 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex justify-center mt-10"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-cyan-400 border border-white/10 hover:border-cyan-500/30 text-sm font-semibold transition-all"
              data-cursor="hover"
            >
              {showAll ? 'Show Less' : `View ${filteredProjects.length - 4} More Projects`}
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};
