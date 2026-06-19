import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiCpu, FiCode, FiZap } from "react-icons/fi";
import { useTranslation } from "react-i18next";

const AutoScaleSandbox = () => {
  const [nodes, setNodes] = useState(3);
  const [load, setLoad] = useState(40);
  return (
    <div className="p-4 bg-white/[0.02] border border-white/[0.05] rounded-2xl mt-6 space-y-4">
      <div className="flex justify-between items-center">
        <span className="text-[8px] font-mono text-white/30 tracking-[0.3em] uppercase">
          Nodes_Active: {nodes}
        </span>
        <span className="text-[8px] font-mono text-white/30 tracking-[0.3em] uppercase">
          Load: {load}%
        </span>
      </div>
      <div className="flex gap-2 justify-center flex-wrap">
        {Array.from({ length: nodes }).map((_, i) => (
          <div
            key={i}
            className="w-8 h-8 rounded border border-white/20 flex items-center justify-center"
            style={{ opacity: 0.3 + (load / 100) * 0.7 }}
          >
            <div
              className="w-2 h-2 rounded-full bg-white animate-pulse"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          </div>
        ))}
      </div>
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <span className="text-[8px] font-mono text-white/20 w-14">Nodes</span>
          <input
            type="range"
            min="1"
            max="8"
            value={nodes}
            onChange={(e) => setNodes(+e.target.value)}
            className="flex-1 accent-white h-1 cursor-pointer"
          />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[8px] font-mono text-white/20 w-14">Load</span>
          <input
            type="range"
            min="0"
            max="100"
            value={load}
            onChange={(e) => setLoad(+e.target.value)}
            className="flex-1 accent-white h-1 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

const VoiceWaveSandbox = () => {
  const [active, setActive] = useState(false);
  const bars = 12;
  return (
    <div className="p-4 bg-white/[0.02] border border-white/[0.05] rounded-2xl mt-6">
      <div className="flex justify-center items-end gap-1 h-10 mb-4">
        {Array.from({ length: bars }).map((_, i) => (
          <div
            key={i}
            className="w-1 rounded-full bg-white transition-all"
            style={{
              height: active
                ? `${20 + Math.sin(Date.now() / 200 + i) * 15}%`
                : "15%",
              opacity: active ? 0.4 + (i / bars) * 0.6 : 0.15,
              animation: active
                ? `voice-bar ${0.5 + i * 0.07}s ease-in-out infinite alternate`
                : "none",
            }}
          />
        ))}
      </div>
      <button
        onClick={() => setActive((a) => !a)}
        className={`w-full py-2 rounded-xl border text-[9px] font-bold uppercase tracking-widest transition-all ${active ? "bg-red-500/10 border-red-500/30 text-red-400" : "bg-white/[0.02] border-white/10 text-white/40 hover:text-white"}`}
      >
        {active ? "⏹ Stop" : "🎙 Activate Voice"}
      </button>
      <style>{`
        @keyframes voice-bar {
          from { height: 15%; }
          to   { height: 80%; }
        }
      `}</style>
    </div>
  );
};

const NeuralSandbox = () => {
  const [nodes, setNodes] = useState(6);
  return (
    <div className="p-6 bg-white/[0.02] border border-white/[0.05] rounded-2xl mt-6">
      <div className="flex justify-between items-center mb-6">
        <span className="text-[8px] font-mono text-white/30 tracking-[0.3em] uppercase">
          Neural_Density_Sync
        </span>
        <input
          type="range"
          min="1"
          max="12"
          value={nodes}
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
      sandbox: <NeuralSandbox />,
    },
    {
      id: "autoscale",
      icon: FiZap,
      tech: "Node.js / Redis",
      sandbox: <AutoScaleSandbox />,
    },
    {
      id: "voice",
      icon: FiCode,
      tech: "OpenAI / Web Speech",
      sandbox: <VoiceWaveSandbox />,
    },
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
              {t("lab.label")}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-7xl font-extrabold text-white tracking-tight"
            >
              {t("lab.heading")}
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-white/40 text-sm md:text-lg font-light max-w-sm"
          >
            {t("lab.desc")}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {experiments.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                ease: [0.16, 1, 0.3, 1],
                delay: idx * 0.1,
              }}
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
