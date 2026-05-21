import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const TypewriterBlock = () => {
  const shouldReduceMotion = useReducedMotion();
  const [lines, setLines] = useState([]);
  
  const codeContent = [
    { text: '// jefferson.config.js', color: 'text-dark-muted' },
    { text: 'const ', color: 'text-purple-400', follow: { text: 'dev ', color: 'text-white' }, end: { text: '= {', color: 'text-white' } },
    { text: '  name: ', color: 'text-dark-accent', follow: { text: '"Jefferson Teles"', color: 'text-dark-terminal' }, end: { text: ',', color: 'text-white' } },
    { text: '  role: ', color: 'text-dark-accent', follow: { text: '"Junior Developer"', color: 'text-dark-terminal' }, end: { text: ',', color: 'text-white' } },
    { text: '  location: ', color: 'text-dark-accent', follow: { text: '"Cascavel, PR 🇧🇷"', color: 'text-dark-terminal' }, end: { text: ',', color: 'text-white' } },
    { text: '  stack: ', color: 'text-dark-accent', follow: { text: '["React", "Node.js", "TS", "Java"]', color: 'text-dark-terminal' }, end: { text: ',', color: 'text-white' } },
    { text: '  open_to_work: ', color: 'text-dark-accent', follow: { text: 'true', color: 'text-orange-400' }, end: { text: ',', color: 'text-white' } },
    { text: '}', color: 'text-white' },
    { text: ' ', color: '' },
    { text: 'export default ', color: 'text-purple-400', follow: { text: 'dev', color: 'text-white' } }
  ];

  useEffect(() => {
    if (shouldReduceMotion) {
      setLines(codeContent);
      return;
    }

    let currentLine = 0;
    const interval = setInterval(() => {
      if (currentLine < codeContent.length) {
        setLines(prev => [...prev, codeContent[currentLine]]);
        currentLine++;
      } else {
        clearInterval(interval);
      }
    }, 400);

    return () => clearInterval(interval);
  }, [shouldReduceMotion]);

  return (
    <div className="w-full max-w-lg bg-[#0d0d14] rounded-lg border border-dark-accent/10 shadow-2xl overflow-hidden font-mono text-[13px] md:text-sm">
      {/* Terminal Header */}
      <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/5">
        <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
        <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
        <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
        <span className="ml-2 text-white/20 text-[10px] uppercase tracking-widest">jefferson.config.js</span>
      </div>
      
      {/* Code Area */}
      <div className="p-6 min-h-[300px] relative">
        {lines.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-wrap items-center mb-1.5"
          >
            <span className="text-white/10 w-8 select-none">{i + 1}</span>
            <span className={line.color}>{line.text}</span>
            {line.follow && <span className={`ml-1 ${line.follow.color}`}>{line.follow.text}</span>}
            {line.end && <span className={line.end.color}>{line.end.text}</span>}
          </motion.div>
        ))}
        <motion.div 
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          className="inline-block w-2 h-4 bg-dark-accent ml-8"
        />
      </div>
    </div>
  );
};

export default TypewriterBlock;
