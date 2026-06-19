import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TypewriterBlock = () => {
  const [lines, setLines] = useState([]);
  const codeContent = [
    { text: '// jefferson.config.ts', color: 'text-white/20' },
    { text: 'export const ', color: 'text-white/40', follow: { text: 'config', color: 'text-white' } },
    { text: '  role: ', color: 'text-white/60', follow: { text: '"Software Engineer"', color: 'text-white' } },
    { text: '  stack: ', color: 'text-white/60', follow: { text: '["React", "TS", "IA"]', color: 'text-white' } },
    { text: '  builds: ', color: 'text-white/60', follow: { text: '"Premium Products"', color: 'text-white' } },
    { text: '  status: ', color: 'text-white/60', follow: { text: '"Available_Q3"', color: 'text-white' } },
    { text: '}', color: 'text-white/40' }
  ];

  useEffect(() => {
    let currentLine = 0;
    const interval = setInterval(() => {
      if (currentLine < codeContent.length) {
        const lineToAdd = codeContent[currentLine];
        setLines(prev => [...prev, lineToAdd]);
        currentLine++;
      } else {
        clearInterval(interval);
      }
    }, 200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-lg glass-panel p-1 rounded-2xl overflow-hidden shadow-2xl relative">
      {/* Decorative dots */}
      <div className="flex gap-1.5 p-4 border-b border-white/[0.03] bg-white/[0.01]">
        <div className="w-2.5 h-2.5 rounded-full bg-white/5" />
        <div className="w-2.5 h-2.5 rounded-full bg-white/5" />
        <div className="w-2.5 h-2.5 rounded-full bg-white/5" />
      </div>
      
      <div className="p-8 font-mono text-[12px] md:text-xs leading-relaxed">
        {lines.map((line, i) => {
          if (!line) return null;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -5 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex flex-wrap items-center mb-1"
            >
              <span className="text-white/5 w-8 select-none">{i + 1}</span>
              <span className={line.color}>{line.text}</span>
              {line.follow && <span className={`ml-2 ${line.follow?.color}`}>{line.follow?.text}</span>}
            </motion.div>
          );
        })}
        <motion.div 
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          className="inline-block w-1.5 h-3.5 bg-white/40 ml-8 mt-2"
        />
      </div>

      {/* Floating Meta */}
      <div className="absolute bottom-4 right-6 text-[7px] font-mono text-white/10 uppercase tracking-[0.4em]">
        System_Interface_0.4.2
      </div>
    </div>
  );
};

export default TypewriterBlock;
