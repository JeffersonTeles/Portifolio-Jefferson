import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiCode, FiZap, FiCpu } from 'react-icons/fi';
import TypewriterBlock from '../components/TypewriterBlock';

const Hero = () => {
  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20">
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] [background-size:32px_32px] opacity-40" />

      <div className="container mx-auto px-8 md:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Bold Branding */}
          <div className="lg:col-span-8">
            <motion.div 
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.1 }}
              className="inline-flex items-center gap-3 px-3 py-1 rounded-sm bg-builder-accent/10 border border-builder-accent/20 mb-10"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-builder-accent animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-builder-accent">
                Software Engineer // AI Builder
              </span>
            </motion.div>

            <motion.h1 
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.2 }}
              className="text-6xl md:text-8xl lg:text-[8vw] font-extrabold leading-[0.85] tracking-tighter uppercase mb-8"
            >
              CRAFTING<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-builder-accent to-white bg-[length:200%_auto] animate-gradient-slow italic">
                INTELLIGENT
              </span><br />
              SYSTEMS.
            </motion.h1>

            <motion.p
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.3 }}
              className="text-xl md:text-2xl text-builder-muted font-light max-w-2xl mb-12 leading-relaxed"
            >
              Especialista em construir <span className="text-white">produtos digitais escaláveis</span> através de IA, automação e arquiteturas frontend de alto nível.
            </motion.p>

            <motion.div 
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.4 }}
              className="flex flex-wrap gap-6"
            >
              <a href="#projects" className="px-8 py-4 bg-white text-black font-bold uppercase text-[10px] tracking-widest hover:bg-builder-accent hover:text-white transition-all duration-500 rounded-none shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                Selected Works
              </a>
              <a href="/resume.pdf" target="_blank" className="px-8 py-4 border border-white/10 text-white font-bold uppercase text-[10px] tracking-widest hover:bg-white/5 transition-all duration-500 rounded-none">
                Resume / CV
              </a>
            </motion.div>
          </div>

          {/* Right Column: Code visual (Subtle) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="lg:col-span-4 hidden lg:flex justify-end"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-builder-accent/20 blur-[100px] opacity-0 group-hover:opacity-40 transition-opacity duration-1000" />
              <TypewriterBlock />
            </div>
          </motion.div>

        </div>
      </div>

      {/* Decorative vertical lines */}
      <div className="absolute right-10 top-0 h-full w-px bg-gradient-to-b from-transparent via-white/5 to-transparent hidden xl:block" />
      <div className="absolute left-10 top-0 h-full w-px bg-gradient-to-b from-transparent via-white/5 to-transparent hidden xl:block" />
    </section>
  );
};

export default Hero;
