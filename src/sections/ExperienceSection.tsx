import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Users, Calendar, ChevronRight } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative z-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-mono mb-3"
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span>WORK & ORGANIZATION</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            Professional <span className="text-gradient-cyan">Experience</span>
          </motion.h2>
          <p className="mt-3 text-slate-400 text-sm">
            Work experience and organizational involvement across multiple roles and environments.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-32 space-y-10 pl-6 sm:pl-10">
          {experienceData.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative group"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-2 w-5 h-5 rounded-full bg-slate-950 border-2 border-cyan-400 group-hover:bg-cyan-400 group-hover:scale-125 transition-all shadow-[0_0_12px_rgba(6,182,212,0.5)] flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-slate-950" />
              </div>

              {/* Year Label (desktop left) */}
              <div className="sm:absolute sm:-left-36 sm:top-1 text-xs font-mono font-bold text-cyan-400 mb-2 sm:mb-0 sm:text-right sm:w-24">
                <span className="inline-flex items-center gap-1 bg-cyan-500/10 px-2.5 py-1 rounded-md border border-cyan-500/20">
                  <Calendar className="w-3 h-3" />
                  {item.period.split('–')[0].trim()}
                </span>
              </div>

              {/* Card */}
              <div className="glass-card p-6 rounded-2xl border border-white/10 group-hover:border-cyan-500/30 transition-all">
                <div className="flex items-start justify-between flex-wrap gap-2 mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-400 mt-0.5 font-medium">{item.organization}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-semibold border ${
                      item.type === 'Work'
                        ? 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20'
                        : 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20'
                    }`}>
                      {item.type === 'Work' ? <Briefcase className="w-3 h-3" /> : <Users className="w-3 h-3" />}
                      {item.type}
                    </span>
                  </div>
                </div>

                <p className="text-xs font-mono text-slate-500 mb-4">{item.period}</p>

                <div className="space-y-2 pt-3 border-t border-white/5">
                  {item.responsibilities.map((resp, rIdx) => (
                    <div key={rIdx} className="flex items-start text-sm text-slate-300">
                      <ChevronRight className="w-3.5 h-3.5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="leading-relaxed">{resp}</span>
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
