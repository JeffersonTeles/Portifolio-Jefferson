import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { FiArrowRight, FiDownload } from 'react-icons/fi';

const Hero = () => {
  const prefersReducedMotion = useReducedMotion();
  const isTouchDevice = typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches;

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
    <section id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-dark-accent/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-dark-terminal/20 rounded-full blur-[120px]" />
      </div>

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
            <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-dark-terminal">
              Aberto a oportunidades
            </span>
          </motion.div>

          {/* Headline */}
          <motion.div variants={itemVars} className="mb-6">
            <h1 className="text-5xl md:text-7xl lg:text-8xl leading-[1.1] mb-4">
              <span className="inline-block hover:glitch-text transition-all duration-300">Jefferson</span>
              <br />
              <span className="text-dark-accent">Teles</span>
            </h1>
            <h2 className="font-mono text-lg md:text-xl text-dark-terminal/80 tracking-tight">
              &lt; Desenvolvedor em Construção /&gt;
            </h2>
          </motion.div>

          {/* Subtitle */}
          <motion.p 
            variants={itemVars}
            className="text-dark-muted text-lg md:text-xl mb-12 max-w-2xl leading-relaxed"
          >
            Automação, IA e Web · De suporte a código · Cascavel/PR
          </motion.p>

          {/* CTAs */}
          <motion.div variants={itemVars} className="flex flex-wrap gap-6 items-center">
            <a href="#projects" className="btn-primary group">
              <span className="flex items-center gap-2">
                Ver Projetos
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-secondary group"
            >
              <span className="flex items-center gap-2">
                <FiDownload />
                Baixar Currículo
              </span>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Terminal Line */}
      <div className="absolute bottom-10 left-0 w-full overflow-hidden pointer-events-none opacity-10">
        <div className="whitespace-nowrap font-mono text-[10vw] font-black uppercase text-white/5 select-none">
          React • Node.js • TypeScript • PostgreSQL • Java • Supabase • 
        </div>
      </div>
    </section>
  );
};

export default Hero;
