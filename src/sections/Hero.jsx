import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { FiArrowRight, FiDownload } from 'react-icons/fi';

const Hero = () => {
  const shouldReduceMotion = useReducedMotion();
  const [isTouch, setIsTouch] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsTouch(window.matchMedia('(hover: none)').matches);
  }, []);

  const handleMouseMove = (e) => {
    if (isTouch || shouldReduceMotion) return;
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 20;
    const y = (clientY / innerHeight - 0.5) * 20;
    setMousePos({ x, y });
  };

  const animationProps = (delay = 0) => ({
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, delay, ease: "easeOut" }
  });

  return (
    <section 
      id="hero" 
      className="relative min-h-[90vh] flex flex-col justify-center items-start section-container overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Background Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-dark-accent/5 rounded-full blur-[120px] pointer-events-none z-0" />

      <motion.div 
        className="relative z-10 w-full"
        style={!isTouch && !shouldReduceMotion ? {
          rotateY: mousePos.x,
          rotateX: -mousePos.y,
          perspective: 1000
        } : {}}
      >
        {/* Availability Badge */}
        <motion.div 
          {...animationProps(0.2)}
          className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-dark-terminal/20 bg-dark-terminal/5 mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-dark-terminal opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-dark-terminal"></span>
          </span>
          <span className="mono-tag text-dark-terminal font-bold tracking-widest">
            Aberto a oportunidades
          </span>
        </motion.div>

        {/* Title */}
        <motion.div {...animationProps(0.4)} className="mb-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-4">
            <span className="glitch-hover inline-block">Jefferson</span><br />
            <span className="text-dark-accent">Teles</span>
          </h1>
          <div className="h-px w-24 bg-dark-accent/40 mb-6" />
          <h2 className="font-mono text-lg md:text-2xl text-dark-terminal/80 tracking-tight">
            &lt; Desenvolvedor em Construção /&gt;
          </h2>
        </motion.div>

        {/* Subtitle */}
        <motion.p 
          {...animationProps(0.6)}
          className="text-dark-muted text-lg md:text-xl mb-12 max-w-2xl leading-relaxed"
        >
          Automação, IA e Web · De suporte a código · Cascavel/PR
        </motion.p>

        {/* CTAs */}
        <motion.div {...animationProps(0.8)} className="flex flex-wrap gap-6 items-center">
          <a href="#projects" className="btn-primary group">
            Ver Projetos
            <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </a>
          
          <a 
            href="/resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-outline"
          >
            <FiDownload className="text-dark-accent" />
            Baixar Currículo
          </a>
        </motion.div>
      </motion.div>

      {/* Decorative Sidebar Text */}
      <div className="absolute right-0 bottom-32 rotate-90 origin-right hidden lg:block opacity-10 select-none">
        <span className="font-mono text-[100px] font-black uppercase text-white">Engineering</span>
      </div>
    </section>
  );
};

export default Hero;
