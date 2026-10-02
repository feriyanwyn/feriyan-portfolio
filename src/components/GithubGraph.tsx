import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GitCommit, ExternalLink } from 'lucide-react';
import { profileData } from '../data/portfolioData';

export const GithubGraph: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<'2026' | '2025' | '2024'>('2026');

  // Generate 52 weeks x 7 days grid dummy activity matrix with organic commit density
  const generateContributionMatrix = () => {
    const weeks = 52;
    const days = 7;
    const matrix = [];

    for (let w = 0; w < weeks; w++) {
      const weekDays = [];
      for (let d = 0; d < days; d++) {
        // Pseudo random commit level 0 to 4
        const rand = Math.sin(w * 12 + d * 7 + (selectedYear === '2026' ? 1 : 3));
        let level = 0;
        if (rand > 0.6) level = 4;
        else if (rand > 0.3) level = 3;
        else if (rand > 0.0) level = 2;
        else if (rand > -0.3) level = 1;
        weekDays.push(level);
      }
      matrix.push(weekDays);
    }
    return matrix;
  };

  const matrix = generateContributionMatrix();

  const getCellColor = (level: number) => {
    switch (level) {
      case 1:
        return 'bg-cyan-950 border-cyan-800/40';
      case 2:
        return 'bg-cyan-700/60 border-cyan-500/50 shadow-[0_0_5px_rgba(6,182,212,0.2)]';
      case 3:
        return 'bg-cyan-500 border-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.4)]';
      case 4:
        return 'bg-cyan-300 border-white shadow-[0_0_12px_rgba(0,240,255,0.7)]';
      default:
        return 'bg-slate-900/80 border-white/5';
    }
  };

  return (
    <div className="glass-card p-6 rounded-2xl border border-white/10 relative overflow-hidden">
      {/* Top Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center space-x-2">
            <GitCommit className="w-5 h-5 text-cyan-400" />
            <h3 className="text-lg font-bold text-white font-mono">GitHub Activity Matrix</h3>
          </div>
          <p className="text-xs text-slate-400 mt-0.5">
            Target Username:{' '}
            <a
              href={profileData.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:underline inline-flex items-center gap-1 font-mono"
            >
              @{profileData.socialLinks.github.split('/').pop()}
              <ExternalLink className="w-3 h-3" />
            </a>
          </p>
        </div>

        {/* Year Selector */}
        <div className="flex items-center space-x-2 bg-slate-950/80 p-1 rounded-xl border border-white/10">
          {(['2026', '2025', '2024'] as const).map((year) => (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={`px-3 py-1 text-xs font-mono rounded-lg transition-all ${
                selectedYear === year
                  ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {year}
            </button>
          ))}
        </div>
      </div>

      {/* Descriptive note */}
      <div className="mb-6 p-3 rounded-xl bg-slate-950/60 border border-white/5 flex items-center gap-2">
        <GitCommit className="w-4 h-4 text-cyan-400 flex-shrink-0" />
        <p className="text-xs text-slate-400 font-mono">Contribution activity visualization — visit GitHub for live statistics.</p>
      </div>

      {/* Contribution Heatmap */}
      <div className="overflow-x-auto pb-2">
        <div className="min-w-[700px]">
          <div className="flex gap-1.5 justify-between mb-2 text-[10px] text-slate-500 font-mono">
            <span>Jan</span>
            <span>Feb</span>
            <span>Mar</span>
            <span>Apr</span>
            <span>May</span>
            <span>Jun</span>
            <span>Jul</span>
            <span>Aug</span>
            <span>Sep</span>
            <span>Oct</span>
            <span>Nov</span>
            <span>Dec</span>
          </div>
          <div className="flex gap-1">
            {matrix.map((week, wIdx) => (
              <div key={wIdx} className="flex flex-col gap-1">
                {week.map((level, dIdx) => (
                  <motion.div
                    key={dIdx}
                    whileHover={{ scale: 1.4 }}
                    className={`w-3 h-3 rounded-sm border transition-all ${getCellColor(level)}`}
                    title={`Week ${wIdx + 1}, Day ${dIdx + 1}: ${level * 3 + 1} contributions`}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Matrix Legend */}
      <div className="flex items-center justify-between text-xs text-slate-400 pt-3 border-t border-white/5">
        <span className="font-mono text-[11px]">Active Year: {selectedYear}</span>
        <div className="flex items-center space-x-1.5 text-[11px]">
          <span>Less</span>
          <div className="w-2.5 h-2.5 rounded-sm bg-slate-900 border border-white/5" />
          <div className="w-2.5 h-2.5 rounded-sm bg-cyan-950 border border-cyan-800" />
          <div className="w-2.5 h-2.5 rounded-sm bg-cyan-700" />
          <div className="w-2.5 h-2.5 rounded-sm bg-cyan-500" />
          <div className="w-2.5 h-2.5 rounded-sm bg-cyan-300" />
          <span>More</span>
        </div>
      </div>
    </div>
  );
};
