import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, BrainCircuit, Database, Code2, Globe, Wrench, ChevronDown } from 'lucide-react';
import { certificationsData } from '../data/portfolioData';

const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'AI & Data': return <BrainCircuit className="w-4 h-4 text-indigo-400" />;
    case 'Database': return <Database className="w-4 h-4 text-sky-400" />;
    case 'Software': return <Code2 className="w-4 h-4 text-cyan-400" />;
    case 'Language': return <Globe className="w-4 h-4 text-emerald-400" />;
    case 'Technical': return <Wrench className="w-4 h-4 text-amber-400" />;
    default: return <Award className="w-4 h-4 text-cyan-400" />;
  }
};

const getCategoryColors = (category: string) => {
  switch (category) {
    case 'AI & Data': return 'border-indigo-500/20 hover:border-indigo-500/40';
    case 'Database': return 'border-sky-500/20 hover:border-sky-500/40';
    case 'Software': return 'border-cyan-500/20 hover:border-cyan-500/40';
    case 'Language': return 'border-emerald-500/20 hover:border-emerald-500/40';
    case 'Technical': return 'border-amber-500/20 hover:border-amber-500/40';
    default: return 'border-white/10 hover:border-cyan-500/30';
  }
};

// Group certs by year
const groupByYear = (certs: typeof certificationsData) => {
  return certs.reduce((acc, cert) => {
    if (!acc[cert.year]) acc[cert.year] = [];
    acc[cert.year].push(cert);
    return acc;
  }, {} as Record<string, typeof certificationsData>);
};

export const CertificationsSection: React.FC = () => {
  const [expanded, setExpanded] = useState<string | null>('2026');
  const grouped = groupByYear(certificationsData);
  const years = Object.keys(grouped).sort((a, b) => Number(b) - Number(a));

  return (
    <section id="certifications" className="py-16 relative z-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-mono mb-3"
          >
            <Award className="w-3.5 h-3.5" />
            <span>CERTIFICATIONS & TRAINING</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            Certifications & <span className="text-gradient-cyan">Training</span>
          </motion.h2>
          <p className="mt-3 text-slate-400 text-sm">
            Completed courses and training programs across software development, data, and language skills.
          </p>
        </div>

        {/* Accordion by year */}
        <div className="space-y-4">
          {years.map((year) => (
            <motion.div
              key={year}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl border border-white/10 overflow-hidden"
            >
              {/* Year Toggle */}
              <button
                onClick={() => setExpanded(expanded === year ? null : year)}
                className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-white/5 transition-colors"
                aria-expanded={expanded === year}
              >
                <span className="text-lg font-bold text-white font-mono">{year}</span>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-slate-400">{grouped[year].length} item{grouped[year].length !== 1 ? 's' : ''}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-cyan-400 transition-transform duration-300 ${expanded === year ? 'rotate-180' : ''}`}
                  />
                </div>
              </button>

              {/* Cert Cards */}
              {expanded === year && (
                <div className="px-6 pb-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {grouped[year].map((cert) => (
                    <motion.div
                      key={cert.title}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`p-4 rounded-xl bg-slate-900/60 border transition-all group ${getCategoryColors(cert.category)}`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="p-2 rounded-lg bg-slate-800 border border-white/5">
                          {getCategoryIcon(cert.category)}
                        </div>
                        <span className="text-[10px] font-mono text-slate-500 uppercase">{cert.category}</span>
                      </div>
                      <h3 className="text-sm font-semibold text-white leading-snug mb-1">{cert.title}</h3>
                      {cert.issuer && (
                        <p className="text-xs text-slate-400 font-mono">{cert.issuer}</p>
                      )}
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
