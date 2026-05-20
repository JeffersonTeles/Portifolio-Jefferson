import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { FiArrowRight, FiDownload } from 'react-icons/fi';
import DecryptText from '../components/DecryptText';

const Hero = () => {
  const prefersReducedMotion = useReducedMotion();

  const containerVars = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVars = {
    initial: { y: 20, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      <div className="container-custom relative z-10">
        <motion.div
          variants={containerVars}
          initial="initial"
          animate="animate"
          className="max-w-4xl"
        >
          {/* Status Badge */}
          <motion.div 
            variants={itemVars}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-dark-terminal/20 bg-dark-terminal/5 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-dark-terminal opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-dark-terminal"></span>
            </span>
            <span className="text-[10px] font-mono font-bold tracking-[0.2em] uppercase text-dark-terminal">
              <DecryptText text="Aberto a oportunidades" delay={1} />
            </span>
          </motion.div>

          {/* Headline */}
          <motion.div variants={itemVars} className="mb-6">
            <h1 className="text-5xl md:text-7xl lg:text-8xl leading-[1.1] mb-4">
              <span className="inline-block hover-glitch transition-all duration-300">
                <DecryptText text="Jefferson" delay={0.2} />
              </span>
              <br />
              <span className="text-dark-accent">
                <DecryptText text="Teles" delay={0.5} />
              </span>
            </h1>
            <h2 className="font-mono text-lg md:text-xl text-dark-terminal/80 tracking-tight flex items-center gap-4">
              <span className="opacity-40">&lt;</span>
              <DecryptText text="Desenvolvedor em Construção" delay={1.5} />
              <span className="opacity-40">/&gt;</span>
            </h2>
          </motion.div>

          {/* Subtitle */}
          <motion.p 
            variants={itemVars}
            className="text-dark-muted text-lg md:text-xl mb-12 max-w-2xl leading-relaxed"
          >
            Automação, IA e Web • De suporte a código • Cascavel/PR
          </motion.p>

          {/* CTAs (Efeito 10: Camadas de Profundidade sutil) */}
          <motion.div variants={itemVars} className="flex flex-wrap gap-6 items-center">
            <a href="#projects" className="btn-primary group overflow-hidden">
              <div className="relative z-10 flex items-center gap-2">
                Ver Projetos
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </div>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>
            
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-secondary group overflow-hidden"
            >
              <div className="relative z-10 flex items-center gap-2">
                <FiDownload />
                Baixar Currículo
              </div>
              <div className="absolute inset-0 bg-dark-accent/5 -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative HUD metadata in Hero */}
      <div className="absolute bottom-12 right-12 hidden xl:block font-mono text-[8px] text-white/10 tracking-[0.3em] uppercase rotate-90 origin-right">
        UI_HUD_V3.0 // JEFFERSON_TELES_PORTFOLIO
      </div>
    </section>
  );
};

export default Hero;
