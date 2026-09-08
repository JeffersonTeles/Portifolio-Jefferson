import React from 'react';
import { useTranslation } from 'react-i18next';
import { FiGithub, FiLinkedin, FiMapPin } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { copyEmail } from '../utils/copyEmail';
import AnimatedSection from '../components/AnimatedSection';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <AnimatedSection className="min-h-[90vh] flex items-center relative overflow-hidden">
      {/* Subtle amber glow - Animated */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.03, 0.05, 0.03],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-[15%] left-[-8%] w-[600px] h-[600px] bg-accent rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />
      <motion.div
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.015, 0.03, 0.015],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] bg-accent rounded-full blur-[100px] pointer-events-none"
        aria-hidden="true"
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.012] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
        aria-hidden="true"
      />

      <div className="max-w-[1000px] mx-auto px-6 md:px-10 py-24 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 lg:gap-20 items-center">
          {/* Left: Text */}
          <div>
            {/* Role badge */}
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/20 bg-accent/5 text-[0.75rem] text-accent font-mono">
                <span
                  className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"
                  aria-hidden="true"
                />
                {t('hero.role')}
              </span>
            </div>

            {/* Name — big heading */}
            <h1 className="text-[3.5rem] sm:text-[4.5rem] lg:text-[5.5rem] font-bold text-white leading-[1.0] tracking-tight mb-8">
              {t('hero.title1')}
            </h1>

            {/* Subtitle + description merged */}
            <p className="text-[1.15rem] text-[#888] leading-relaxed mb-10 max-w-[600px]">
              {t('hero.subtitle')} {t('hero.description')}
            </p>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-black text-[0.9rem] font-medium rounded-full hover:bg-accent transition-colors duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(226,166,61,0.3)] outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                {t('hero.btnWorks')}
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/Curriculo_Jefferson_Teles_TI.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/10 text-[#ccc] text-[0.9rem] font-medium rounded-full hover:border-accent/40 hover:text-white transition-colors duration-300 backdrop-blur-md bg-white/[0.02] outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
              >
                {t('hero.btnResume')}
              </motion.a>
            </div>

            {/* Email + Social */}
            <div className="flex flex-wrap items-center gap-6">
              <button
                onClick={copyEmail}
                className="text-[0.9rem] text-[#666] border-b border-[#333] hover:border-accent hover:text-accent transition-colors duration-300 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
                aria-label="Copiar email para jeffersontelesdeoliveira@gmail.com"
              >
                jeffersontelesdeoliveira@gmail.com
              </button>
              <nav className="flex items-center gap-3" aria-label="Redes sociais">
                <a
                  href="https://github.com/JeffersonTeles"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#333] hover:text-accent transition-colors duration-300 outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm p-1"
                  aria-label="Perfil do GitHub de Jefferson Teles"
                >
                  <FiGithub size={17} aria-hidden="true" />
                </a>
                <a
                  href="https://linkedin.com/in/jeffersonteles"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#333] hover:text-accent transition-colors duration-300 outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm p-1"
                  aria-label="Perfil do LinkedIn de Jefferson Teles"
                >
                  <FiLinkedin size={17} aria-hidden="true" />
                </a>
              </nav>
            </div>
          </div>

          {/* Right: Avatar + Stats */}
          <div className="hidden lg:flex flex-col items-center gap-6">
            {/* Avatar */}
            <div className="relative">
              <div className="w-36 h-36 rounded-full bg-[#111] border-2 border-white/[0.06] flex items-center justify-center">
                <span className="text-5xl font-black text-accent/20 select-none">JT</span>
              </div>
              <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-[#22c55e] border-[3px] border-[#0a0a0a]" />
            </div>

            {/* Stats */}
            <div className="flex flex-col items-center gap-3 text-center">
              <div className="px-4 py-2 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                <p className="text-[1.4rem] font-bold text-white">6+</p>
                <p className="text-[0.65rem] text-[#555] font-mono uppercase tracking-wider">
                  anos em TI
                </p>
              </div>
              <div className="px-4 py-2 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                <p className="text-[1.4rem] font-bold text-white">3</p>
                <p className="text-[0.65rem] text-[#555] font-mono uppercase tracking-wider">
                  projetos
                </p>
              </div>
              <div className="flex items-center gap-1.5 text-[0.7rem] text-[#555]">
                <FiMapPin size={12} />
                Cascavel, PR
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-px h-8 bg-gradient-to-b from-accent/50 to-transparent" />
      </motion.div>
    </AnimatedSection>
  );
};

export default Hero;
