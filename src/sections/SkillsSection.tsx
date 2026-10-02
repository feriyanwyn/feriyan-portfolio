import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Terminal, Layers, Database, Sparkles, Wrench, CheckCircle2 } from 'lucide-react';
import { skillGroupsData } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeSkillHover, setActiveSkillHover] = useState<string | null>(null);

  const categoryIcons: Record<string, React.ReactNode> = {
    'Programming Languages': <Terminal className="w-4 h-4 text-cyan-400" />,
    'Frontend Development': <Layers className="w-4 h-4 text-sky-400" />,
    'Backend Development': <Cpu className="w-4 h-4 text-indigo-400" />,
    'Database Systems': <Database className="w-4 h-4 text-emerald-400" />,
    'AI & Data Engineering': <Sparkles className="w-4 h-4 text-purple-400" />,
    'DevOps & Tools': <Wrench className="w-4 h-4 text-amber-400" />,
  };

  const categories = ['All', ...skillGroupsData.map(g => g.category)];

  const filteredGroups = selectedCategory === 'All'
    ? skillGroupsData
    : skillGroupsData.filter(g => g.category === selectedCategory);

  return (
    <section id="skills" className="py-24 relative z-10 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-mono mb-3"
          >
            <Cpu className="w-3.5 h-3.5" />
            <span>TECHNICAL SPECTRUM</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            Technologies, Frameworks & <span className="text-gradient-cyan">Tools</span>
          </motion.h2>
          <p className="mt-3 text-slate-400 text-sm">
            Categorized technical capabilities applied across real-world software, backend APIs, data pipelines, and machine learning models.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 border ${
                selectedCategory === cat
                  ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40 shadow-[0_0_15px_rgba(6,182,212,0.2)]'
                  : 'bg-slate-900/60 text-slate-400 border-white/5 hover:text-white hover:border-white/20'
              }`}
              data-cursor="hover"
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGroups.map((group, groupIdx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: groupIdx * 0.08 }}
              className="glass-card p-6 rounded-2xl border border-white/10 flex flex-col justify-between"
            >
              <div>
                {/* Group Header */}
                <div className="flex items-center space-x-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-white/10">
                    {categoryIcons[group.category] || <Cpu className="w-4 h-4 text-cyan-400" />}
                  </div>
                  <h3 className="text-lg font-bold text-white">{group.category}</h3>
                </div>

                <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                  {group.description}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => {
                    const isHovered = activeSkillHover === skill;
                    return (
                      <motion.div
                        key={skill}
                        onMouseEnter={() => setActiveSkillHover(skill)}
                        onMouseLeave={() => setActiveSkillHover(null)}
                        whileHover={{ scale: 1.05 }}
                        className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all duration-200 cursor-default border flex items-center space-x-1.5 ${
                          isHovered
                            ? 'bg-cyan-500/20 text-cyan-300 border-cyan-400 shadow-[0_0_12px_rgba(6,182,212,0.4)]'
                            : 'bg-slate-900/80 text-slate-300 border-white/10 hover:border-cyan-500/30'
                        }`}
                      >
                        <CheckCircle2 className="w-3 h-3 text-cyan-400" />
                        <span>{skill}</span>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
