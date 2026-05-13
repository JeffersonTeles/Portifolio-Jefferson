import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { SiWhatsapp } from 'react-icons/si';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center section-premium pt-32">
      <div className="container-premium text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="badge-premium mb-6 inline-flex">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            Disponível para projetos
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
        >
          Jefferson Teles
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center justify-center gap-3 mb-6 flex-wrap"
        >
          {['Automação', 'IA', 'APIs', 'Sistemas Web'].map((item, idx) => (
            <span key={idx} className="text-white/40 text-sm">
              {idx > 0 && <span className="mx-2">•</span>}
              {item}
            </span>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-white/40 max-w-2xl mx-auto mb-10 text-lg leading-relaxed"
        >
          Desenvolvedor full-stack focado em automações inteligentes, 
          APIs escaláveis e sistemas web modernos.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          <a href="#contact" className="btn-primary">
            Iniciar projeto
            <FiArrowRight size={16} />
          </a>
          <a href="#projects" className="btn-secondary">
            Ver projetos
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
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
              className="text-white/30 hover:text-white/60 transition-all duration-300"
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
