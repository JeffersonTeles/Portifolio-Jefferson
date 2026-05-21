import React from 'react';

const Heartbeat = () => {
  return (
    <div className="flex items-center gap-4 px-4 py-2 bg-dark-card border border-white/5 rounded-sm backdrop-blur-md">
      <div className="flex flex-col">
        <span className="font-mono text-[7px] text-white/30 uppercase tracking-[0.2em]">Heartbeat</span>
        <div className="flex items-end gap-1 h-4">
          {[0.4, 0.7, 0.2, 0.9, 0.5, 0.8, 0.3, 0.6].map((h, i) => (
            <motion.div
              key={i}
              animate={{ height: [`${h * 100}%`, `${(1 - h) * 100}%`, `${h * 100}%`] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.1 }}
              className="w-1 bg-dark-terminal/40"
            />
          ))}
        </div>
      </div>
      <div className="w-px h-8 bg-white/5" />
      <div className="flex flex-col">
        <span className="font-mono text-[7px] text-white/30 uppercase tracking-[0.2em]">Status</span>
        <span className="font-mono text-[9px] text-dark-terminal animate-pulse uppercase">Sync_Active</span>
      </div>
    </div>
  );
};

export default Heartbeat;
import { motion } from 'framer-motion';
