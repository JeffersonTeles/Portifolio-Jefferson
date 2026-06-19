import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

const Services = () => {
  const { t } = useTranslation();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const services = t('services.list', { returnObjects: true });

  return (
    <section id="services" className="py-40 bg-black relative overflow-hidden">
      <div className="premium-container relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-32 gap-8">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-[11px] font-medium uppercase tracking-[0.5em] text-white/30 mb-8 block"
            >
              {t('services.label')}
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-8xl font-extrabold text-white tracking-tight uppercase leading-[0.9]"
            >
              {t('services.heading1')}<br />{t('services.heading2')}
            </motion.h2>
          </div>
        </div>

        <div className="flex flex-col border-t border-white/[0.05]">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="relative py-16 md:py-24 border-b border-white/[0.05] group cursor-pointer overflow-hidden"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-12 relative z-10">
                <div className="flex items-center gap-12 md:gap-24">
                  <span className="font-mono text-xs text-white/20 group-hover:text-white transition-colors duration-500">
                    0{idx + 1}
                  </span>
                  <h3 className="text-3xl md:text-6xl font-bold tracking-tight text-white/80 group-hover:text-white transition-all duration-500 group-hover:translate-x-4">
                    {service.title}
                  </h3>
                </div>
                
                <div className="flex items-center gap-12">
                  <p className="text-sm md:text-lg text-white/30 font-light max-w-sm leading-relaxed group-hover:text-white/60 transition-colors duration-500">
                    {service.desc}
                  </p>
                  <div className="w-12 h-12 rounded-full border border-white/5 flex items-center justify-center text-white/20 group-hover:border-white group-hover:text-white group-hover:rotate-[-45deg] transition-all duration-700">
                    <FiArrowRight size={20} />
                  </div>
                </div>
              </div>

              {/* Sophisticated Background Glow */}
              <div className="absolute inset-0 bg-white/[0.01] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/20 scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
