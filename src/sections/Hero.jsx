import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { SiWhatsapp } from 'react-icons/si';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-mono text-white/60 bg-white/[0.03] rounded-full border border-white/[0.05] mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
            Disponível para projetos
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
        >
          <span className="text-white">Jefferson Teles</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center justify-center gap-2 mb-6 flex-wrap"
        >
          {['Automação', 'IA', 'APIs', 'Sistemas Web'].map((item, idx) => (
            <span key={idx} className="text-base text-white/40">
              {idx > 0 && <span className="mx-2">•</span>}
              <span>{item}</span>
            </span>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-white/40 max-w-2xl mx-auto mb-10 text-lg leading-relaxed"
        >
          Desenvolvedor full-stack focado em automações inteligentes, 
          APIs escaláveis e sistemas web modernos.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black text-sm font-medium rounded-lg hover:bg-white/90 transition-all duration-300"
          >
            Vamos construir algo
            <FiArrowRight size={16} />
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/[0.03] border border-white/[0.05] text-white/80 text-sm font-medium rounded-lg hover:bg-white/[0.05] transition-all duration-300"
          >
            Ver projetos
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex justify-center gap-6"
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
              className="text-white/40 hover:text-white transition-all duration-300"
            >
              <social.icon size={20} />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
