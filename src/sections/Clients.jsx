import React from 'react';
import { motion } from 'framer-motion';

const Clients = () => {
  // Placeholder logos/names for social proof
  const clients = [
    "TechFlow", "StartupX", "Alpha Solutions", "Nexus Corp", "Evolve Digital", "AI Lab"
  ];

  return (
    <section className="py-20 bg-inherit border-y border-lusion-text/5">
      <div className="container-lusion">
        <p className="text-[10px] font-bold tracking-lusion-wide uppercase text-lusion-text/20 mb-12 text-center">
          Empresas que confiam no meu trabalho
        </p>
        <div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
          {clients.map((client, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-xl md:text-2xl font-black tracking-tighter uppercase text-lusion-text select-none"
            >
              {client}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
