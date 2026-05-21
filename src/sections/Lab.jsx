import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCpu, FiCode, FiZap } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

const NeuralSandbox = () => {
  const { t } = useTranslation();
  const [nodes, setNodes] = useState(5);
  return (
    <div className="p-4 bg-black/40 border border-white/5 rounded-sm mt-4">
      <div className="flex justify-between items-center mb-4">
        <span className="text-[8px] font-mono text-dark-accent tracking-widest">NEURAL_DENSITY_SYNC</span>
        <input 
          type="range" min="1" max="12" value={nodes} 
          onChange={(e) => setNodes(parseInt(e.target.value))}
          className="w-24 accent-dark-accent h-1"
        />
      </div>
      <div className="flex flex-wrap gap-2 justify-center h-12 items-center">
        {Array.from({ length: nodes }).map((_, i) => (
          <motion.div 
            key={i}
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
            className="w-3 h-3 rounded-full bg-dark-accent shadow-[0_0_10px_#00d4ff]"
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
      tech: "Three.js / GLSL",
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
    <section id="lab" className="py-24 bg-dark-bg">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div className="max-w-2xl">
            <div className="section-title mb-8">
              <span className="w-8 h-px bg-dark-terminal" />
              <span className="mono-tag">05 / {t('lab.title')}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tighter">
              {t('lab.tagline')}
            </h2>
          </div>
          <p className="text-dark-muted text-xs md:text-sm tracking-widest uppercase mb-4 max-w-xs text-right opacity-60">
            {t('lab.desc')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {experiments.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring", stiffness: 50 }}
              className="p-8 border border-white/5 bg-dark-card hover:border-dark-accent/30 transition-all group rounded-sm flex flex-col h-full"
            >
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center mb-8 group-hover:border-dark-accent group-hover:text-dark-accent transition-colors">
                <exp.icon size={20} />
              </div>
              <span className="text-[10px] font-mono text-dark-accent uppercase mb-4 block tracking-widest">
                {t(`lab.items.${exp.id}.cat`)}
              </span>
              <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">
                {t(`lab.items.${exp.id}.title`)}
              </h3>
              <p className="text-sm text-dark-muted leading-relaxed mb-8 flex-1">
                {t(`lab.items.${exp.id}.desc`)}
              </p>
              
              {exp.sandbox}
              
              <div className="mt-8 pt-6 border-t border-white/5 text-[9px] font-mono text-white/20 uppercase tracking-widest">
                STACK: {exp.tech}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Lab;
