import React from 'react';
import { motion } from 'framer-motion';
import { Code2, BrainCircuit, BarChart3, ShieldCheck, ChevronRight, UserCheck } from 'lucide-react';
import { profileData, domainFocusData } from '../data/portfolioData';
import { TechCard } from '../components/TechCard';

export const AboutSection: React.FC = () => {
  const getDomainIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-6 h-6 text-cyan-400" />;
      case 'BrainCircuit':
        return <BrainCircuit className="w-6 h-6 text-sky-400" />;
      case 'BarChart3':
        return <BarChart3 className="w-6 h-6 text-indigo-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-emerald-400" />;
      default:
        return <Code2 className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-mono mb-3"
          >
            <UserCheck className="w-3.5 h-3.5" />
            <span>WHO I AM</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            Crafting Digital Solutions at the Intersection of <span className="text-gradient-cyan">Code & Intelligence</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-slate-300 text-base leading-relaxed"
          >
            {profileData.fullBio}
          </motion.p>
        </div>

        {/* 4 Interactive Domain Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {domainFocusData.map((domain, index) => (
            <motion.div
              key={domain.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <TechCard className="h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl bg-slate-900/90 border border-white/10 group-hover:border-cyan-500/40 group-hover:scale-110 transition-all duration-300">
                      {getDomainIcon(domain.iconName)}
                    </div>
                    <span className="text-xs font-mono text-slate-500 group-hover:text-cyan-400 transition-colors">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {domain.title}
                  </h3>

                  <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                    {domain.description}
                  </p>
                </div>

                {/* Sub-details list revealed on hover */}
                <div className="border-t border-white/5 pt-4 space-y-2">
                  {domain.details.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center text-xs text-slate-300 group-hover:translate-x-1 transition-transform"
                      style={{ transitionDelay: `${i * 40}ms` }}
                    >
                      <ChevronRight className="w-3.5 h-3.5 text-cyan-400 mr-2 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </TechCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
