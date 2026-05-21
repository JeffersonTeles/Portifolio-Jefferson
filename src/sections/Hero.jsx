import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiArrowDown } from 'react-icons/fi';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center premium-container">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] bg-luxury-accent/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-5xl">
        {/* Subtle Label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-4 mb-12"
        >
          <span className="w-12 h-px bg-white/20" />
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-luxury-accent">
            Available for New Projects
          </span>
        </motion.div>

        {/* Massive Headline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <h1 className="text-7xl md:text-9xl font-bold leading-[0.85] uppercase mb-8">
            Jefferson<br />
            <span className="text-white/20 outline-text">Teles</span>
          </h1>
          
          <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-16">
            <h2 className="text-xl md:text-2xl font-light text-luxury-muted max-w-xl leading-relaxed">
              Software Engineer specializing in <span className="text-white">high-performance web solutions</span> and technical architecture. Based in Brazil.
            </h2>
          </div>
        </motion.div>

        {/* Executive CTAs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="flex flex-wrap gap-8"
        >
          <a href="#projects" className="btn-luxury-primary flex items-center gap-4 group">
            Selected Works
            <FiArrowRight className="transition-transform group-hover:translate-x-2" />
          </a>
          <a href="/resume.pdf" target="_blank" className="btn-luxury-outline">
            Documentation / CV
          </a>
        </motion.div>
      </div>

      {/* Vertical Indicator */}
      <div className="absolute right-16 bottom-16 hidden lg:flex flex-col items-center gap-8">
        <span className="text-[10px] font-bold uppercase tracking-[0.5em] rotate-90 origin-center text-white/20">
          Scroll to explore
        </span>
        <div className="w-px h-24 bg-gradient-to-b from-luxury-accent/50 to-transparent" />
      </div>

      <style jsx>{`
        .outline-text {
          -webkit-text-stroke: 1px rgba(255,255,255,0.2);
          color: transparent;
          transition: -webkit-text-stroke 0.5s;
        }
        .outline-text:hover {
          -webkit-text-stroke: 1px rgba(0,212,255,0.8);
        }
      `}</style>
    </section>
  );
};

export default Hero;
