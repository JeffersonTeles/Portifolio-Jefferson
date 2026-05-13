import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiArrowDown, FiGithub, FiLinkedin, FiMail, FiZap, FiCpu } from 'react-icons/fi';
import { SiWhatsapp } from 'react-icons/si';

const Hero = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationId;
    let particles = [];

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < 100; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2,
          alpha: Math.random(),
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
        });
      }
    };

    const animate = () => {
      if (!canvas) return;
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(p => {
        p.x += p.speedX;
        p.y += p.speedY;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 255, 255, ${p.alpha * 0.5})`;
        ctx.fill();
      });
      
      animationId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    handleResize();
    animate();
    window.addEventListener('resize', handleResize);
    
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 pt-20 overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          <div className="inline-flex items-center gap-3 px-5 py-2 bg-black/40 backdrop-blur-md rounded-full border border-cyan-500/50 mb-8 animate-pulse-border">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
            </span>
            <span className="text-xs font-mono text-cyan-400 tracking-wider">SISTEMA ONLINE // ACESSO AUTORIZADO</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 relative"
        >
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-glitch">
            JEFFERSON
          </span>
          <span className="block text-white/80">TELES</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex items-center justify-center gap-4 mb-8 flex-wrap"
        >
          <div className="flex items-center gap-2 px-4 py-2 bg-black/40 backdrop-blur-sm rounded-full border border-cyan-500/30">
            <FiZap className="text-cyan-400" size={16} />
            <span className="text-sm font-mono text-cyan-400">AUTOMAÇÃO</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-black/40 backdrop-blur-sm rounded-full border border-purple-500/30">
            <FiCpu className="text-purple-400" size={16} />
            <span className="text-sm font-mono text-purple-400">INTELIGÊNCIA ARTIFICIAL</span>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-gray-400 max-w-2xl mx-auto mb-12 text-lg font-light leading-relaxed"
        >
          Desenvolvedor full-stack focado em automações inteligentes, APIs escaláveis 
          e sistemas web de próxima geração. Transformando ideias em código.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          <a
            href="#contact"
            className="group relative px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold rounded-full transition-all duration-300 shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/70 transform hover:scale-105"
          >
            <span className="relative z-10 flex items-center gap-2">
              INICIAR CONEXÃO
              <FiZap className="group-hover:animate-pulse" />
            </span>
          </a>
          <a
            href="#projects"
            className="px-8 py-4 bg-black/40 backdrop-blur-md border-2 border-cyan-500/50 text-cyan-400 font-bold rounded-full hover:border-cyan-400 hover:text-cyan-300 transition-all duration-300 transform hover:scale-105"
          >
            EXPLORAR PROJETOS
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex justify-center gap-8"
        >
          {[
            { icon: FiGithub, link: "https://github.com/JeffersonTeles" },
            { icon: FiLinkedin, link: "https://linkedin.com/in/jeffersonteles" },
            { icon: SiWhatsapp, link: "https://wa.me/5511999999999" },
            { icon: FiMail, link: "mailto:jefferson@teles.dev" }
          ].map((social, idx) => (
            <a
              key={idx}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-cyan-400 transition-all duration-300 hover:scale-125 hover:rotate-12"
            >
              <social.icon size={24} />
            </a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <a href="#about" className="text-gray-600 hover:text-cyan-400 transition-colors">
            <FiArrowDown size={28} className="animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
