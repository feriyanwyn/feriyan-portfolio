import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, CheckCircle2 } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-mono mb-3"
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMIC BACKGROUND</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            Education &amp; Academic <span className="text-gradient-cyan">Excellence</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationData.map((edu, idx) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="glass-card p-8 rounded-2xl border border-white/10 relative overflow-hidden flex flex-col justify-between group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-all pointer-events-none" />

              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <span className="text-xs font-mono text-cyan-400 font-semibold px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 inline-block mb-2">
                      {edu.period}
                    </span>
                    <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {edu.institution}
                    </h3>
                    <p className="text-sm font-semibold text-slate-300 mt-1">
                      {edu.degree}
                    </p>
                  </div>
                  {edu.gpa && (
                    <div className="p-3 rounded-2xl bg-cyan-500/15 border border-cyan-400/40 text-center flex-shrink-0 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                      <div className="text-[10px] uppercase font-mono text-cyan-300">GPA</div>
                      <div className="text-xl font-mono font-extrabold text-cyan-200">{edu.gpa}</div>
                    </div>
                  )}
                </div>

                <div className="flex items-center space-x-2 text-xs font-mono text-slate-400 mb-6">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{edu.location}</span>
                </div>

                <div className="space-y-3 pt-4 border-t border-white/5">
                  {edu.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-start space-x-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
