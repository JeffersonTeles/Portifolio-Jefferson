import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCpu, FiCode, FiZap } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

const NeuralSandbox = () => {
  const [nodes, setNodes] = useState(6);
  return (
    <div className="p-6 bg-white/[0.02] border border-white/[0.05] rounded-2xl mt-6">
      <div className="flex justify-between items-center mb-6">
        <span className="text-[8px] font-mono text-white/30 tracking-[0.3em] uppercase">Neural_Density_Sync</span>
        <input 
          type="range" min="1" max="12" value={nodes} 
          onChange={(e) => setNodes(parseInt(e.target.value))}
          className="w-20 accent-white h-1 cursor-pointer"
        />
      </div>
      <div className="flex flex-wrap gap-2 justify-center h-16 items-center">
        {Array.from({ length: nodes }).map((_, i) => (
          <motion.div 
            key={i}
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.4, 0.1] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
            className="w-3 h-3 rounded-full bg-white shadow-glow"
          />
        ))}
      </div>
    </div>
  );
};

const Lab = () => {
  const { t } = useTranslation();
  const experiments = [
    {
      id: "neural",
      icon: FiCpu,
      tech: "Framer / WebGL",
      sandbox: <NeuralSandbox />
    },
    {
      id: "autoscale",
      icon: FiZap,
      tech: "Node.js / Redis",
      sandbox: null
    },
    {
      id: "voice",
      icon: FiCode,
      tech: "OpenAI / Web Speech",
      sandbox: null
    }
  ];

  return (
    <section id="lab" className="py-40 bg-black relative">
      <div className="premium-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-10">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-[11px] font-medium uppercase tracking-[0.5em] text-white/30 mb-8 block"
            >
              {t('lab.label')}
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-7xl font-extrabold text-white tracking-tight"
            >
              {t('lab.heading')}
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-white/40 text-sm md:text-lg font-light max-w-sm"
          >
            {t('lab.desc')}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {experiments.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: idx * 0.1 }}
              className="p-10 glass-panel hover:bg-white/[0.04] transition-all duration-700 group rounded-3xl flex flex-col h-full"
            >
              <div className="w-12 h-12 rounded-2xl bg-white/[0.02] border border-white/[0.05] flex items-center justify-center mb-10 group-hover:bg-white group-hover:text-black transition-all duration-500">
                <exp.icon size={20} />
              </div>
              <span className="text-[9px] font-mono text-white/30 uppercase mb-4 block tracking-[0.3em]">
                {t(`lab.items.${exp.id}.cat`)}
              </span>
              <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">
                {t(`lab.items.${exp.id}.title`)}
              </h3>
              <p className="text-sm text-white/40 leading-relaxed mb-10 flex-1">
                {t(`lab.items.${exp.id}.desc`)}
              </p>
              
              {exp.sandbox}
              
              <div className="mt-10 pt-8 border-t border-white/[0.03] text-[9px] font-mono text-white/20 uppercase tracking-[0.2em]">
                Engine: {exp.tech}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Lab;
