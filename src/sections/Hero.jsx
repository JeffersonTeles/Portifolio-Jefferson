import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { FiArrowRight, FiArrowDown } from 'react-icons/fi';

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (window.matchMedia('(hover: none)').matches) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 40;
      const y = (clientY / innerHeight - 0.5) * 40;
      setMousePos({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-premium-bg"
    >
      {/* Cinematic Background Layer */}
      <div className="absolute inset-0 z-0">
        {/* Animated Grid */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.05]" />
        
        {/* Dynamic Light Follower */}
        <motion.div 
          className="absolute w-[800px] h-[800px] bg-premium-accent/[0.03] rounded-full blur-[120px] pointer-events-none"
          animate={{
            x: mousePos.x * 2,
            y: mousePos.y * 2,
          }}
          transition={{ type: 'spring', damping: 50, stiffness: 200 }}
        />

        {/* Ambient Depth Gradients */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-premium-bg to-premium-bg" />
        <div className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] bg-blue-600/[0.03] rounded-full blur-[150px] animate-pulse-slow" />
      </div>

      <motion.div 
        style={{ y: y1, opacity }}
        className="container mx-auto px-8 md:px-16 relative z-10 text-center"
      >
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-white/5 bg-white/[0.02] backdrop-blur-sm mb-12 group hover:border-premium-accent/30 transition-colors cursor-default"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-premium-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-premium-accent"></span>
          </span>
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-premium-muted group-hover:text-white transition-colors">
            Software Engineer • AI Builder • Automation
          </span>
        </motion.div>

        {/* Cinematic Headline */}
        <div className="relative mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-8xl lg:text-[10rem] font-extrabold leading-[0.85] tracking-cinematic uppercase"
          >
            Engineering<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-premium-accent to-white bg-[length:200%_auto] animate-gradient-flow drop-shadow-[0_0_30px_rgba(0,212,255,0.2)]">
              Remarkable
            </span><br />
            Solutions.
          </motion.h1>
          
          {/* Parallax Floating Label */}
          <motion.div 
             className="absolute -top-10 -right-10 hidden xl:block font-mono text-[10px] text-premium-muted/20 tracking-[0.5em] rotate-90"
             animate={{ y: [0, 20, 0] }}
             transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
             UI_HUD_SYSTEM_V.5
          </motion.div>
        </div>

        {/* Strategic Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="text-lg md:text-2xl font-light text-premium-muted max-w-3xl mx-auto mb-16 leading-relaxed"
        >
          Building <span className="text-white">scalable architectures</span> and <span className="text-white text-glow">intelligent automations</span> for the next generation of digital products. Based in Cascavel/PR.
        </motion.p>

        {/* Premium CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="flex flex-col md:flex-row justify-center items-center gap-8"
        >
          <a href="#projects" className="btn-premium flex items-center gap-4 group">
            Explore Selected Works
            <FiArrowRight className="transition-transform group-hover:translate-x-2" />
          </a>
          <a href="/resume.pdf" target="_blank" className="btn-premium-outline flex items-center gap-4 group">
            Documentation / CV
          </a>
        </motion.div>
      </motion.div>

      {/* Dynamic Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-30"
      >
        <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-white">Explore</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <FiArrowDown size={20} />
        </motion.div>
      </motion.div>

      <style jsx>{`
        @keyframes gradient-flow {
          0% { bg-position: 0% center; }
          50% { bg-position: 100% center; }
          100% { bg-position: 0% center; }
        }
        .animate-gradient-flow {
          animation: gradient-flow 8s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
