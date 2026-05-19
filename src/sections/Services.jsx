import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const services = [
    { title: "Desenvolvimento Web", description: "Criação de aplicações robustas e performáticas utilizando as tecnologias mais modernas do mercado." },
    { title: "Automações Inteligentes", description: "Otimização de fluxos de trabalho através de scripts e sistemas de processamento automático." },
    { title: "Integração de IA", description: "Implementação de Large Language Models e agentes autônomos para resolver problemas complexos." },
    { title: "Sistemas em Nuvem", description: "Arquitetura e deploy de infraestruturas escaláveis e seguras para aplicações globais." }
  ];

  return (
    <section id="services" className="section-lusion border-b border-lusion-text/5">
      <div className="container-lusion">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div className="max-w-2xl">
            <span className="text-sm font-bold tracking-lusion-wide uppercase text-lusion-primary flex items-center gap-4 mb-8">
              <span className="w-8 h-px bg-lusion-primary" />
              04 / Services
            </span>
            <h2 className="leading-tight">Digital<br />Capabilities</h2>
          </div>
        </div>

        <div className="flex flex-col">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative py-12 border-b border-lusion-text/10 group cursor-pointer"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 relative z-10">
                <div className="flex items-center gap-8">
                  <span className="text-xs font-bold tracking-lusion-wide text-lusion-text/20 group-hover:text-lusion-primary transition-colors">
                    ( 0{idx + 1} )
                  </span>
                  <h3 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-lusion-tighter group-hover:translate-x-4 transition-transform duration-500">
                    {service.title}
                  </h3>
                </div>
                
                <div className="flex items-center gap-8">
                  <AnimatePresence>
                    {hoveredIndex === idx && (
                      <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="hidden lg:block text-sm text-lusion-text/40 max-w-xs"
                      >
                        {service.description}
                      </motion.p>
                    )}
                  </AnimatePresence>
                  <FiArrowUpRight size={40} className="text-lusion-text/10 group-hover:text-lusion-primary group-hover:rotate-45 transition-all duration-500" />
                </div>
              </div>

              {/* Background Reveal Effect */}
              <motion.div 
                className="absolute inset-0 bg-lusion-primary/5 origin-left"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.5, ease: [0.6, 0.05, -0.01, 0.9] }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
