import React from 'react';
import { motion } from 'framer-motion';
import { Users, ChevronRight, Calendar } from 'lucide-react';
import { communityData } from '../data/portfolioData';

export const CommunitySection: React.FC = () => {
  return (
    <section id="community" className="py-24 relative z-10 bg-slate-950/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-mono mb-3"
          >
            <Users className="w-3.5 h-3.5" />
            <span>COMMUNITY & ORGANIZATIONS</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            Community <span className="text-gradient-cyan">Involvement</span>
          </motion.h2>
          <p className="mt-3 text-slate-400 text-sm">
            Volunteer roles, committee work, and community engagement beyond academic and professional settings.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {communityData.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="glass-card p-6 rounded-2xl border border-white/10 hover:border-emerald-500/30 transition-all group"
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <div>
                  <h3 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-400 mt-0.5">{item.organization}</p>
                </div>
                <span className="flex items-center gap-1 text-[11px] font-mono text-emerald-400 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex-shrink-0 whitespace-nowrap">
                  <Calendar className="w-3 h-3" />
                  {item.period}
                </span>
              </div>

              <div className="space-y-2 pt-3 border-t border-white/5">
                {item.responsibilities.map((resp, rIdx) => (
                  <div key={rIdx} className="flex items-start text-sm text-slate-300">
                    <ChevronRight className="w-3.5 h-3.5 text-emerald-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="leading-relaxed text-xs sm:text-sm">{resp}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
