import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const AIConsole = () => {
  const [isMinimized, setIsMinimized] = useState(false);
  const [logs, setLogs] = useState([
    "System initialized.",
    "Ready for input..."
  ]);

  const messages = [
    "Analyzing UX patterns...",
    "Optimizing automation flows...",
    "Neural network connected.",
    "Status: High performance active.",
    "Latency: 14ms",
    "Scaling API infrastructure...",
    "Integrating LLM agents..."
  ];

  useEffect(() => {
    // Random status logs
    const interval = setInterval(() => {
      if (!isMinimized) {
        const randomMsg = messages[Math.floor(Math.random() * messages.length)];
        setLogs(prev => [...prev.slice(-4), randomMsg]);
      }
    }, 5000);

    // Listen for custom interaction logs
    const handleCustomLog = (e) => {
      setLogs(prev => [...prev.slice(-4), e.detail]);
    };

    window.addEventListener('ai-log', handleCustomLog);

    return () => {
      clearInterval(interval);
      window.removeEventListener('ai-log', handleCustomLog);
    };
  }, [isMinimized]);

  return (
    <div className="fixed bottom-12 right-12 z-40 hidden xl:block w-72 pointer-events-auto">
      <div className="bg-white/10 backdrop-blur-md border border-lusion-text/5 rounded-sm overflow-hidden shadow-2xl">
        <div 
          className="flex items-center justify-between gap-2 p-3 border-b border-lusion-text/5 cursor-pointer hover:bg-lusion-text/5 transition-colors"
          onClick={() => setIsMinimized(!isMinimized)}
        >
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[10px] font-bold tracking-lusion-wide uppercase text-lusion-text/60">
              AI Assistant Console
            </span>
          </div>
          {isMinimized ? <FiChevronUp size={14} /> : <FiChevronDown size={14} />}
        </div>
        
        <AnimatePresence>
          {!isMinimized && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="p-4 bg-black/[0.02]"
            >
              <div className="space-y-1">
                <AnimatePresence mode="popLayout">
                  {logs.map((log, i) => (
                    <motion.p
                      key={log + i}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      className="text-[9px] font-mono text-lusion-text/40 leading-tight"
                    >
                      <span className="text-lusion-primary mr-2">{">"}</span>
                      {log}
                    </motion.p>
                  ))}
                </AnimatePresence>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AIConsole;
