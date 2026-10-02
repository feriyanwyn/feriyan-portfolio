import React from 'react';
import { motion } from 'framer-motion';
import { FlaskConical, BookOpen, Database, ChevronRight } from 'lucide-react';
import { researchData } from '../data/portfolioData';

export const ResearchSection: React.FC = () => {
  return (
    <section id="research" className="py-24 relative z-10 bg-slate-950/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-mono mb-3"
          >
            <FlaskConical className="w-3.5 h-3.5" />
            <span>UNDERGRADUATE RESEARCH</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            Research <span className="text-gradient-cyan">Experience</span>
          </motion.h2>
          <p className="mt-3 text-slate-400 text-sm">
            Academic research applying AI and machine learning to real-world problems.
          </p>
        </div>

        {researchData.map((research, idx) => (
          <motion.div
            key={research.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="glass-card rounded-2xl border border-indigo-500/20 overflow-hidden"
          >
            {/* Research Card Header */}
            <div className="p-6 sm:p-8 border-b border-white/5">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/20">
                    <BookOpen className="w-5 h-5 text-indigo-400" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-indigo-400 font-semibold">{research.level}</p>
                    <p className="text-sm text-slate-400">{research.institution} · {research.period}</p>
                  </div>
                </div>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-white leading-snug">
                {research.title}
              </h3>
            </div>

            {/* Research Body */}
            <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Description */}
              <div className="lg:col-span-2">
                <h4 className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-4">Research Description</h4>
                <div className="space-y-3">
                  {research.description.map((point, pIdx) => (
                    <div key={pIdx} className="flex items-start text-sm text-slate-300">
                      <ChevronRight className="w-3.5 h-3.5 text-indigo-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="leading-relaxed">{point}</span>
                    </div>
                  ))}
                </div>

                {/* Evaluation Note */}
                {research.evaluationNote && (
                  <div className="mt-6 p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/20">
                    <p className="text-xs font-mono text-emerald-400 font-semibold mb-1">Evaluation Result</p>
                    <p className="text-sm text-slate-300 leading-relaxed">{research.evaluationNote}</p>
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Dataset */}
                {research.dataset && (
                  <div>
                    <h4 className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-3">Dataset</h4>
                    <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-900/60 border border-white/5">
                      <Database className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      <span className="text-sm text-slate-200 font-mono">{research.dataset}</span>
                    </div>
                  </div>
                )}

                {/* Technologies */}
                <div>
                  <h4 className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-3">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {research.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-lg text-xs font-mono bg-indigo-500/10 text-indigo-300 border border-indigo-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
