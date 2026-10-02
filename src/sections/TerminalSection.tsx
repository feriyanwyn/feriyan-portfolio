import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal as TerminalIcon, CornerDownLeft, RefreshCw } from 'lucide-react';
import { profileData, skillGroupsData, projectsData, experienceData, researchData } from '../data/portfolioData';

interface HistoryEntry {
  command: string;
  output: React.ReactNode;
}

export const TerminalSection: React.FC = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<HistoryEntry[]>([
    {
      command: 'whoami',
      output: (
        <div className="text-cyan-300">
          <p className="font-bold">&gt; Feriyan Eka Nanda</p>
          <p className="text-slate-400">&gt; Undergraduate Informatics Student @ Universitas Gunadarma</p>
          <p className="text-slate-400">&gt; Data Entry | Software Developer | AI &amp; Machine Learning</p>
          <p className="text-slate-500 text-xs mt-1">Type <span className="text-cyan-400">help</span> to view available terminal commands.</p>
        </div>
      ),
    },
  ]);

  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = input.trim().toLowerCase();
    if (!trimmed) return;

    let output: React.ReactNode = null;

    switch (trimmed) {
      case 'help':
        output = (
          <div className="space-y-1 text-slate-300">
            <p className="text-cyan-400 font-bold mb-2">Available Interactive CLI Commands:</p>
            <p><span className="text-cyan-300 font-mono w-28 inline-block">whoami</span> - Display user profile identity</p>
            <p><span className="text-cyan-300 font-mono w-28 inline-block">about</span> - Summary bio & location</p>
            <p><span className="text-cyan-300 font-mono w-28 inline-block">skills</span> - List technology stacks & programming languages</p>
            <p><span className="text-cyan-300 font-mono w-28 inline-block">projects</span> - Showcase key projects</p>
            <p><span className="text-cyan-300 font-mono w-28 inline-block">experience</span> - Work &amp; organizational roles</p>
            <p><span className="text-cyan-300 font-mono w-28 inline-block">research</span> - Undergraduate research details</p>
            <p><span className="text-cyan-300 font-mono w-28 inline-block">education</span> - Academic background &amp; GPA</p>
            <p><span className="text-cyan-300 font-mono w-28 inline-block">contact</span> - Email &amp; social links</p>
            <p><span className="text-cyan-300 font-mono w-28 inline-block">clear</span> - Clear terminal screen</p>
          </div>
        );
        break;

      case 'whoami':
      case 'profile':
        output = (
          <div className="text-slate-300 space-y-1">
            <p className="text-cyan-300 font-bold">&gt; Name: {profileData.name}</p>
            <p>&gt; Status: {profileData.status}</p>
            <p>&gt; Headline: {profileData.headline}</p>
            <p>&gt; Location: {profileData.location}</p>
          </div>
        );
        break;

      case 'about':
        output = <p className="text-slate-300">&gt; {profileData.fullBio}</p>;
        break;

      case 'skills':
        output = (
          <div className="space-y-2 text-slate-300">
            {skillGroupsData.map((g) => (
              <p key={g.category}>
                <span className="text-cyan-400 font-bold">&gt; {g.category}:</span>{' '}
                <span className="text-slate-300">{g.skills.join(', ')}</span>
              </p>
            ))}
          </div>
        );
        break;

      case 'projects':
        output = (
          <div className="space-y-2">
            {projectsData.map((p) => (
              <div key={p.id} className="text-slate-300">
                <span className="text-cyan-300 font-bold">&gt; {p.title}</span> [{p.category}]
                <p className="text-slate-400 text-xs pl-4">{p.description}</p>
              </div>
            ))}
          </div>
        );
        break;

      case 'education':
        output = (
          <div className="space-y-2 text-slate-300">
            <p className="text-cyan-300 font-bold">&gt; Universitas Gunadarma (Bachelor of Informatics)</p>
            <p className="text-slate-400 text-xs pl-4">GPA: 3.78 | 2023 - Present</p>
            <p className="text-cyan-300 font-bold">&gt; SMK PGRI 2 Cibinong (Computer & Network Engineering)</p>
            <p className="text-slate-400 text-xs pl-4">2020 - 2023</p>
          </div>
        );
        break;

      case 'experience':
        output = (
          <div className="space-y-2 text-slate-300">
            {experienceData.map((exp) => (
              <div key={exp.id}>
                <span className="text-cyan-300 font-bold">&gt; {exp.title}</span>
                <p className="text-slate-400 text-xs pl-4">{exp.organization} · {exp.period}</p>
              </div>
            ))}
          </div>
        );
        break;

      case 'research':
        output = (
          <div className="space-y-2 text-slate-300">
            {researchData.map((r) => (
              <div key={r.id}>
                <span className="text-cyan-300 font-bold">&gt; {r.institution} — {r.level}</span>
                <p className="text-slate-400 text-xs pl-4">{r.title}</p>
                {r.evaluationNote && <p className="text-emerald-400 text-xs pl-4">{r.evaluationNote}</p>}
              </div>
            ))}
          </div>
        );
        break;

      case 'contact':
        output = (
          <div className="space-y-1 text-slate-300">
            <p>&gt; Email: <a href={`mailto:${profileData.socialLinks.email}`} className="text-cyan-400 hover:underline">{profileData.socialLinks.email}</a></p>
            {profileData.socialLinks.whatsapp && (
              <p>&gt; WhatsApp: <a href={profileData.socialLinks.whatsappUrl || `https://wa.me/${profileData.socialLinks.whatsapp.replace(/[^0-9]/g, '')}`} target="_blank" rel="noreferrer" className="text-emerald-400 hover:underline">{profileData.socialLinks.whatsapp}</a></p>
            )}
            <p>&gt; GitHub: <a href={profileData.socialLinks.github} target="_blank" rel="noreferrer" className="text-cyan-400 hover:underline">{profileData.socialLinks.github}</a></p>
            <p>&gt; LinkedIn: <a href={profileData.socialLinks.linkedin} target="_blank" rel="noreferrer" className="text-cyan-400 hover:underline">{profileData.socialLinks.linkedin}</a></p>
          </div>
        );
        break;

      case 'cv': {
        const link = document.createElement('a');
        link.href = profileData.cvUrl;
        link.download = 'Feriyan_Eka_Nanda_CV.pdfda_CV.pdf';
        link.click();
        output = <p className="text-cyan-400">&gt; Download initiated: Feriyan_Eka_Nanda_CV.pdfda_CV.pdf</p>;
        break;
      }

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      case 'sudo':
        output = <p className="text-rose-400 font-mono">&gt; Access denied: Permission level 'guest'. You need root clearance!</p>;
        break;

      default:
        output = (
          <p className="text-rose-400 font-mono">
            Command not recognized: '<span className="text-slate-200">{trimmed}</span>'. Type '<span className="text-cyan-300">help</span>' for available options.
          </p>
        );
        break;
    }

    setHistory((prev) => [...prev, { command: trimmed, output }]);
    setInput('');
  };

  return (
    <section id="terminal" className="py-24 relative z-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-mono mb-3"
          >
            <TerminalIcon className="w-3.5 h-3.5" />
            <span>DEVELOPER CLI</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            Interactive Developer <span className="text-gradient-cyan">Terminal</span>
          </motion.h2>
          <p className="mt-3 text-slate-400 text-sm">
            Experience Feriyan's portfolio directly from a Linux shell environment. Type commands or click quick actions.
          </p>
        </div>

        {/* Terminal Window Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl bg-[#090d16] border border-cyan-500/30 shadow-2xl shadow-cyan-950/50 overflow-hidden font-mono text-xs sm:text-sm"
          onClick={() => inputRef.current?.focus()}
        >
          {/* Header Bar */}
          <div className="px-4 py-3 bg-slate-950/90 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              <span className="ml-3 text-slate-400 text-xs font-mono">feriyan@portfolio: ~ (zsh)</span>
            </div>
            <button
              onClick={() => setHistory([])}
              className="p-1 rounded text-slate-400 hover:text-cyan-400 hover:bg-slate-800 transition-colors"
              title="Clear terminal output"
            >
              <RefreshCw className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Console Content */}
          <div className="p-5 space-y-4 max-h-[380px] overflow-y-auto leading-relaxed">
            {history.map((entry, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex items-center space-x-2 text-cyan-400">
                  <span className="text-emerald-400">feriyan@portfolio</span>
                  <span className="text-slate-500">:</span>
                  <span className="text-sky-400">~$</span>
                  <span className="text-white font-bold">{entry.command}</span>
                </div>
                <div className="pl-4">{entry.output}</div>
              </div>
            ))}

            {/* Active Command Input Line */}
            <form onSubmit={handleCommandSubmit} className="flex items-center space-x-2 pt-2">
              <span className="text-emerald-400">feriyan@portfolio</span>
              <span className="text-slate-500">:</span>
              <span className="text-sky-400">~$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-transparent text-white focus:outline-none font-mono"
                placeholder="Type 'help'..."
              />
              <button type="submit" className="text-slate-500 hover:text-cyan-400">
                <CornerDownLeft className="w-3.5 h-3.5" />
              </button>
            </form>
            <div ref={bottomRef} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
