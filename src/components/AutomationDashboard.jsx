import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiActivity, FiCpu, FiServer } from 'react-icons/fi';

const AutomationDashboard = () => {
  const [activeBots, setActiveBots] = useState([
    { id: 'ALPHA', status: 'Operacional', load: 12 },
    { id: 'SIGMA', status: 'Processando', load: 45 },
    { id: 'OMEGA', status: 'Standby', load: 0 }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveBots(prev => prev.map(bot => ({
        ...bot,
        load: Math.floor(Math.random() * 100),
        status: Math.random() > 0.8 ? 'Otimizando' : bot.load > 70 ? 'Carga Alta' : 'Processando'
      })));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hidden lg:block fixed left-6 md:left-12 bottom-32 z-40 w-48 pointer-events-none">
      <div className="bg-white/5 dark:bg-black/20 backdrop-blur-md border border-lusion-text/5 p-4 rounded-sm shadow-xl">
        <div className="flex items-center gap-2 mb-4 border-b border-lusion-text/5 pb-2">
          <FiActivity size={12} className="text-lusion-primary" />
          <span className="text-[9px] font-bold tracking-widest uppercase text-lusion-text/60">Live Bots</span>
        </div>
        
        <div className="space-y-4">
          {activeBots.map((bot) => (
            <div key={bot.id} className="space-y-1">
              <div className="flex justify-between items-center">
                <span className="text-[8px] font-mono text-lusion-text/40">{bot.id}</span>
                <span className="text-[8px] font-bold text-lusion-primary uppercase">{bot.status}</span>
              </div>
              <div className="w-full h-[2px] bg-lusion-text/5 rounded-full overflow-hidden">
                <motion.div 
                  animate={{ width: `${bot.load}%` }}
                  className="h-full bg-lusion-primary"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AutomationDashboard;
