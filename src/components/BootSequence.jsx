import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BootSequence = ({ onComplete }) => {
  const [logs, setLogs] = useState([]);
  const bootLogs = [
    "JT_OS v4.0.2 LOADING...",
    "KERNEL_CHECK: OK",
    "INITIALIZING_QUANTUM_DRIVE... [DONE]",
    "ESTABLISHING_NEURAL_LINK... OK",
    "BYPASSING_RESTRICTIONS... 100%",
    "SYNCING_INTERFACE_PROTOCOL... OK",
    "UI_HUD_V4_READY."
  ];

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < bootLogs.length) {
        setLogs(prev => [...prev, bootLogs[index]]);
        index++;
      } else {
        clearInterval(interval);
        setTimeout(onComplete, 500);
      }
    }, 200);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div 
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[2000] bg-black flex flex-col justify-center items-center p-8"
    >
      <div className="w-full max-w-md font-mono text-[10px] md:text-xs">
        <div className="space-y-2">
          {logs.map((log, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4"
            >
              <span className="text-dark-terminal">➜</span>
              <span className={i === logs.length - 1 ? "text-dark-accent" : "text-white/40"}>{log}</span>
            </motion.div>
          ))}
          <motion.div 
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.5, repeat: Infinity }}
            className="w-2 h-4 bg-dark-accent ml-6"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default BootSequence;
