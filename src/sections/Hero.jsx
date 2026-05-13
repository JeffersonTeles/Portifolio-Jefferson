import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowDown, FiGithub, FiLinkedin, FiMail, FiCpu, FiZap } from 'react-icons/fi';
import { SiWhatsapp } from 'react-icons/si';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 pt-20 overflow-hidden">
      {/* Círculos neon animados */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-600/20 blur-3xl animate-pulse" />
      
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono text-cyan-400 bg-cyan-500/10 rounded-full border border-cyan-500/30 mb-6 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            SISTEMA ONLINE • FULL-STACK DEVELOPER
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 relative"
        >
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Jefferson Teles
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center justify-center gap-3 mb-6 flex-wrap"
        >
          {['Automação', 'IA', 'APIs', 'Sistemas Web'].map((item, idx) => (
            <span key={idx} className="px-3 py-1 text-sm font-mono text-gray-300 bg-gray-800/50 rounded-full border border-gray-700 backdrop-blur-sm">
              {item}
            </span>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-gray-400 max-w-2xl mx-auto mb-10 text-lg"
        >
          Construindo soluções digitais práticas, automações inteligentes 
          e sistemas web modernos com tecnologias atuais.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <a
            href="#contact"
            className="group relative px-8 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-medium rounded-lg transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/50"
          >
            <span className="relative z-10">INICIAR PROJETO</span>
            <FiZap className="absolute right-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
          <a
            href="#projects"
            className="px-8 py-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700 text-gray-300 font-medium rounded-lg hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300"
          >
            EXPLORAR PROJETOS
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex justify-center gap-6"
        >
          {[
            { icon: FiGithub, link: "https://github.com/JeffersonTeles", color: "hover:text-cyan-400" },
            { icon: FiLinkedin, link: "https://linkedin.com/in/jeffersonteles", color: "hover:text-blue-400" },
            { icon: SiWhatsapp, link: "https://wa.me/5511999999999", color: "hover:text-green-400" },
            { icon: FiMail, link: "mailto:jefferson@teles.dev", color: "hover:text-cyan-400" }
          ].map((social, idx) => (
            <a
              key={idx}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-gray-400 ${social.color} transition-all duration-300 hover:scale-110`}
            >
              <social.icon size={24} />
            </a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <a href="#about" className="text-gray-500 hover:text-cyan-400 transition-colors">
            <FiArrowDown size={24} className="animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
