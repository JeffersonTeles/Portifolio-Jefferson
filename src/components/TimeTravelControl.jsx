import React from 'react';
import { motion } from 'framer-motion';
import { useSection } from '../context/SectionContext';

const TimeTravelControl = () => {
  const { currentYear, setCurrentYear } = useSection();
  const years = [2024, 2025, 2026];

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[150] hidden md:block">
      <div className="glass-panel p-1 rounded-full flex items-center gap-1 border-white/5 shadow-glow pointer-events-auto">
        {years.map((year) => (
          <button
            key={year}
            onClick={() => setCurrentYear(year)}
            className={`px-4 py-1.5 rounded-full text-[9px] font-bold uppercase tracking-widest transition-all ${
              currentYear === year 
              ? 'bg-white text-black' 
              : 'text-white/20 hover:text-white/40'
            }`}
          >
            {year}
          </button>
        ))}
        <div className="px-3 border-l border-white/5 ml-1">
           <span className="text-[7px] font-mono text-white/10 uppercase tracking-[0.2em]">Timeline_Seek</span>
        </div>
      </div>
    </div>
  );
};

export default TimeTravelControl;
