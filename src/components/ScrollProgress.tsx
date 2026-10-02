import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export const ScrollProgress: React.FC = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;

      if (documentHeight > 0) {
        const percentage = Math.min(100, Math.max(0, (scrolled / documentHeight) * 100));
        setScrollPercentage(percentage);
      }

      setShowTopBtn(scrolled > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Right Edge Vertical Scroll Bar */}
      <div className="fixed right-0 top-0 bottom-0 w-1 pointer-events-none z-50 bg-slate-900/40 hidden sm:block">
        <motion.div
          className="w-full bg-gradient-to-b from-cyan-400 via-sky-400 to-indigo-500 shadow-[0_0_10px_rgba(6,182,212,0.8)]"
          style={{ height: `${scrollPercentage}%` }}
        />
      </div>

      {/* Floating Back-to-Top Button */}
      <AnimatePresence>
        {showTopBtn && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-slate-900/90 text-cyan-400 border border-cyan-500/30 hover:border-cyan-400 hover:bg-cyan-500/20 shadow-xl shadow-cyan-950/40 backdrop-blur-md transition-all group"
            title="Scroll to top"
            data-cursor="hover"
          >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};
