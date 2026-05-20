import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { SiWhatsapp } from 'react-icons/si';
import MagneticButton from '../components/MagneticButton';
import SplitText from '../components/SplitText';
import Parallax from '../components/Parallax';

const Hero = () => {
  const containerVars = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVars = {
    initial: { y: 100, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }
    }
  };

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center section-lusion py-32 overflow-hidden">
      <div className="container-lusion relative z-10">
        <motion.div
          variants={containerVars}
          initial="initial"
          animate="animate"
          className="flex flex-col"
        >
          <div className="overflow-hidden mb-4 flex justify-between items-end">
            <motion.span 
              variants={itemVars}
              className="text-[10px] md:text-xs font-bold tracking-lusion-wide uppercase text-lusion-primary"
            >
              Full-stack Developer & Especialista em Automação
            </motion.span>
            <motion.span 
              variants={itemVars}
              className="text-[10px] md:text-xs font-bold tracking-lusion-wide uppercase text-lusion-text/20"
            >
              Portfolio / 2026
            </motion.span>
          </div>

          <div className="relative">
            <div className="overflow-hidden">
              <h1 className="mb-8 break-words text-[12vw] leading-[0.8] uppercase relative z-10">
                <SplitText text="Jefferson" delay={0.5} />
                <br />
                <SplitText text="Teles" delay={0.8} />
              </h1>
            </div>
            
            {/* Watermark Portfolio - Fixed Positioning */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 0.02, x: 0 }}
              transition={{ duration: 2, delay: 1 }}
              className="absolute -top-10 -right-10 text-[20vw] font-black uppercase pointer-events-none z-0 select-none whitespace-nowrap hidden lg:block"
            >
              Portfolio
            </motion.div>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
            <Parallax offset={30} className="max-w-xl">
              <motion.p variants={itemVars} className="text-lg md:text-2xl text-lusion-text/60 leading-relaxed font-medium">
                Especialista em criar experiências digitais de alto impacto, 
                automações inteligentes e sistemas escaláveis que transformam 
                a tecnologia em valor real.
              </motion.p>
            </Parallax>

            <motion.div variants={itemVars} className="flex flex-wrap gap-6 items-center">
              <MagneticButton>
                <a href="#contact" className="btn-lusion-primary group">
                  Iniciar projeto
                  <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                </a>
              </MagneticButton>
              <MagneticButton>
                <a href="#projects" className="btn-lusion">
                  Ver projetos
                </a>
              </MagneticButton>
              <motion.a 
                href="/cv-jefferson-teles.pdf" 
                target="_blank"
                className="text-[10px] font-bold tracking-widest uppercase text-lusion-text/40 hover:text-lusion-primary transition-colors border-b border-transparent hover:border-lusion-primary pb-1"
              >
                Download CV
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Social Sidebar - Lusion Style */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="fixed left-6 md:left-12 bottom-12 z-20 hidden lg:flex flex-col gap-6"
      >
        {[
          { icon: FiGithub, link: "https://github.com/JeffersonTeles" },
          { icon: FiLinkedin, link: "https://linkedin.com/in/jeffersonteles" },
          { icon: SiWhatsapp, link: "https://wa.me/5511999999999" },
          { icon: FiMail, link: "mailto:jeffersontelesdeoliveira@gmail.com" }
        ].map((social, idx) => (
          <a
            key={idx}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lusion-text/30 hover:text-lusion-primary transition-colors duration-300"
          >
            <social.icon size={18} />
          </a>
        ))}
        <div className="w-px h-12 bg-lusion-text/10 mx-auto" />
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute right-6 md:right-12 bottom-12 hidden md:block"
      >
        <span className="text-[10px] tracking-lusion-wide uppercase text-lusion-text/40 rotate-90 origin-right block">
          Role para explorar
        </span>
      </motion.div>
    </section>
  );
};

export default Hero;
