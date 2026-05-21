import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TypewriterBlock = () => {
  const [lines, setLines] = useState([]);
  const codeContent = [
    { text: '// jefferson.config.js', color: 'text-premium-muted' },
    { text: 'export default ', color: 'text-purple-400', follow: { text: '{', color: 'text-white' } },
    { text: '  identity: ', color: 'text-premium-accent', follow: { text: '"Engineer"', color: 'text-premium-terminal' } },
    { text: '  focus: ', color: 'text-premium-accent', follow: { text: '["IA", "Automation", "SaaS"]', color: 'text-premium-terminal' } },
    { text: '  builds: ', color: 'text-premium-accent', follow: { text: '"Remarkable Products"', color: 'text-premium-terminal' } },
    { text: '  status: ', color: 'text-premium-accent', follow: { text: '"Open_for_Strategic_Partnerships"', color: 'text-premium-terminal' } },
    { text: '}', color: 'text-white' }
  ];

  useEffect(() => {
    let currentLine = 0;
    const interval = setInterval(() => {
      if (currentLine < codeContent.length) {
        setLines(prev => [...prev, codeContent[currentLine]]);
        currentLine++;
      } else {
        clearInterval(interval);
      }
    }, 250);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-lg glass-module p-1 rounded-sm overflow-hidden shadow-2xl relative">
      {/* Decorative dots */}
      <div className="flex gap-1.5 p-4 border-b border-white/5 bg-white/[0.02]">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500/20" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-500/20" />
      </div>
      
      <div className="p-8 font-mono text-[13px] md:text-sm leading-relaxed bg-premium-bg/50">
        {lines.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-wrap items-center mb-1"
          >
            <span className="text-white/10 w-8 select-none">{i + 1}</span>
            <span className={line.color}>{line.text}</span>
            {line.follow && <span className={`ml-2 ${line.follow.color}`}>{line.follow.text}</span>}
          </motion.div>
        ))}
        <motion.div 
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          className="inline-block w-2 h-4 bg-premium-accent ml-8 mt-2 shadow-[0_0_10px_#00d4ff]"
        />
      </div>

      {/* Floating HUD elements */}
      <div className="absolute bottom-4 right-6 text-[8px] font-mono text-white/10 uppercase tracking-[0.3em]">
        Core_Kernel_v5.0
      </div>
    </div>
  );
};

export default TypewriterBlock;
