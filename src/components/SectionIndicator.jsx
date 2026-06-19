import React from 'react';
import { motion } from 'framer-motion';
import { scroller } from 'react-scroll';
import { useSection } from '../context/SectionContext';

const sections = [
  { id: 'hero',     label: 'Home' },
  { id: 'about',    label: 'Sobre' },
  { id: 'projects', label: 'Projetos' },
  { id: 'services', label: 'Serviços' },
  { id: 'skills',   label: 'Stack' },
  { id: 'lab',      label: 'Lab' },
  { id: 'contact',  label: 'Contato' },
];

const SectionIndicator = () => {
  const { currentSection } = useSection();

  const scrollTo = (id) => {
    scroller.scrollTo(id, { smooth: true, duration: 1000, offset: -100 });
  };

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-center gap-3">
      {sections.map((sec) => {
        const isActive = currentSection === sec.id;
        return (
          <button
            key={sec.id}
            onClick={() => scrollTo(sec.id)}
            title={sec.label}
            aria-label={`Ir para ${sec.label}`}
            className="group relative flex items-center justify-end gap-2"
          >
            {/* Label tooltip */}
            <span className="absolute right-6 text-[9px] font-mono uppercase tracking-widest text-white/0 group-hover:text-white/50 transition-all duration-300 whitespace-nowrap pr-1">
              {sec.label}
            </span>
            {/* Dot */}
            <motion.div
              animate={{
                scale: isActive ? 1.4 : 1,
                backgroundColor: isActive ? 'rgba(255,255,255,1)' : 'rgba(255,255,255,0.15)',
              }}
              transition={{ duration: 0.3 }}
              className="w-1.5 h-1.5 rounded-full"
            />
          </button>
        );
      })}
    </div>
  );
};

export default SectionIndicator;
