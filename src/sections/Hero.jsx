import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { FiArrowRight, FiDownload } from 'react-icons/fi';
import TypewriterBlock from '../components/TypewriterBlock';

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
    const x = (clientX / innerWidth - 0.5) * 15;
    const y = (clientY / innerHeight - 0.5) * 15;
    setMousePos({ x, y });
  };

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }
  });

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 lg:py-0"
      onMouseMove={handleMouseMove}
    >
      {/* Dynamic Background Grid */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
        style={{ 
          backgroundImage: `radial-gradient(circle at 1px 1px, #00d4ff 1px, transparent 0)`,
          backgroundSize: '40px 40px' 
        }} 
      />
      
      {/* Floating Particles */}
      {!shouldReduceMotion && (
        <div className="absolute inset-0 z-0 pointer-events-none">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-dark-accent/20 rounded-full"
              initial={{ x: Math.random() * 100 + "%", y: Math.random() * 100 + "%" }}
              animate={{ 
                y: [null, "-20%", "120%"],
                opacity: [0, 1, 0]
              }}
              transition={{ 
                duration: 10 + i * 5, 
                repeat: Infinity, 
                ease: "linear",
                delay: i * 2
              }}
            />
          ))}
        </div>
      )}

      <div className="container-custom relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Side: Content */}
          <motion.div 
            style={!isTouch && !shouldReduceMotion ? {
              rotateY: mousePos.x,
              rotateX: -mousePos.y,
              transformStyle: "preserve-3d"
            } : {}}
            className="flex flex-col items-start text-left"
          >
            {/* Status Badge */}
            <motion.div 
              {...fadeUp(0.1)}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-dark-terminal/20 bg-dark-terminal/5 mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-dark-terminal opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-dark-terminal"></span>
              </span>
              <span className="mono-tag text-[10px] font-bold text-dark-terminal">
                Aberto a oportunidades
              </span>
            </motion.div>

            {/* Headline */}
            <motion.div {...fadeUp(0.3)} className="mb-8">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tighter mb-4">
                <span className="glitch-hover inline-block cursor-default">Jefferson</span><br />
                <span className="text-dark-accent drop-shadow-[0_0_15px_rgba(0,212,255,0.3)]">Teles</span>
              </h1>
              <h2 className="font-mono text-sm md:text-lg text-dark-terminal/80 tracking-[0.2em] uppercase mt-4">
                &lt; Desenvolvedor em Construção /&gt;
              </h2>
            </motion.div>

            {/* Subtitle */}
            <motion.p 
              {...fadeUp(0.5)}
              className="text-dark-muted text-lg md:text-xl mb-12 max-w-xl leading-relaxed"
            >
              Automação, IA e Web · De suporte a código · Cascavel/PR
            </motion.p>

            {/* CTAs */}
            <motion.div {...fadeUp(0.7)} className="flex flex-wrap gap-6 items-center">
              <a href="#projects" className="btn-primary">
                Ver Projetos
                <FiArrowRight />
              </a>
              
              <a 
                href="/resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-outline"
              >
                Baixar Currículo
                <FiDownload size={16} />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Side: Typewriter Block */}
          <motion.div 
            {...fadeUp(0.9)}
            className="w-full flex justify-center lg:justify-end"
          >
            <TypewriterBlock />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
