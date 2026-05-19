import React from 'react';
import { motion } from 'framer-motion';
import { FiBox, FiCpu, FiCode, FiZap } from 'react-icons/fi';

const Lab = () => {
  const experiments = [
    {
      title: "Neural Mesh Visualizer",
      category: "Generative Art",
      description: "Experimento com algoritmos de crescimento orgânico e visualização de pesos neuronais em 3D.",
      icon: FiCpu,
      tech: "Three.js / GLSL"
    },
    {
      title: "Auto-Scale API Logic",
      category: "Architecture",
      description: "Protótipo de middleware para balanceamento de carga preditivo baseado em tráfego histórico.",
      icon: FiZap,
      tech: "Node.js / Redis"
    },
    {
      title: "Voice-to-Automation",
      category: "IA / Interface",
      description: "Interface de comando de voz para execução de scripts complexos de automação de fluxo.",
      icon: FiCode,
      tech: "OpenAI / Web Speech"
    }
  ];

  return (
    <section id="lab" className="section-lusion border-t border-lusion-text/5">
      <div className="container-lusion">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div className="max-w-2xl">
            <span className="text-sm font-bold tracking-lusion-wide uppercase text-lusion-primary flex items-center gap-4 mb-8">
              <span className="w-8 h-px bg-lusion-primary" />
              07 / R&D Lab
            </span>
            <h2 className="leading-tight">Experimentos<br />Técnicos</h2>
          </div>
          <p className="text-lusion-text/40 text-xs md:text-sm tracking-lusion-wide uppercase mb-4 max-w-xs text-right">
            Onde a curiosidade encontra a engenharia pura. Projetos experimentais e testes de conceito.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {experiments.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 border border-lusion-text/5 bg-lusion-text/[0.01] hover:bg-lusion-text/[0.03] transition-all group rounded-sm"
            >
              <div className="w-12 h-12 rounded-full border border-lusion-text/10 flex items-center justify-center mb-8 group-hover:border-lusion-primary group-hover:text-lusion-primary transition-colors">
                <exp.icon size={20} />
              </div>
              <span className="text-[10px] font-bold tracking-widest uppercase text-lusion-primary mb-4 block">
                {exp.category}
              </span>
              <h3 className="text-2xl font-bold tracking-tighter mb-6 group-hover:text-lusion-primary transition-colors">
                {exp.title}
              </h3>
              <p className="text-sm text-lusion-text/60 leading-relaxed mb-8">
                {exp.description}
              </p>
              <div className="text-[9px] font-bold tracking-widest uppercase text-lusion-text/20">
                Stack: {exp.tech}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Lab;
