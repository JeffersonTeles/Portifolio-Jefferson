import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from 'react-icons/fi';
import { SiWhatsapp } from 'react-icons/si';
import { fadeInUp, fadeInDown } from '../utils/animations';

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = 'Desenvolvedor • IA • Automação • Sistemas Inteligentes';

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 30);

    return () => clearInterval(interval);
  }, []);

  const socialLinks = [
    {
      icon: FiGithub,
      href: '#',
      label: 'GitHub',
      color: 'hover:text-neon-cyan',
    },
    {
      icon: FiLinkedin,
      href: '#',
      label: 'LinkedIn',
      color: 'hover:text-neon-blue',
    },
    {
      icon: SiWhatsapp,
      href: '#',
      label: 'WhatsApp',
      color: 'hover:text-neon-cyan',
    },
    {
      icon: FiMail,
      href: 'mailto:jefferson@example.com',
      label: 'Email',
      color: 'hover:text-neon-purple',
    },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-4"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-96 h-96 bg-neon-cyan/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto w-full">
        {/* Main Content */}
        <motion.div
          className="text-center"
          {...fadeInDown}
        >
          {/* Name */}
          <motion.h1
            className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 gradient-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Jefferson Teles
          </motion.h1>

          {/* Typing Text */}
          <motion.div
            className="h-12 sm:h-16 lg:h-20 mb-6 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-lg sm:text-2xl lg:text-3xl text-neon-cyan font-mono font-semibold">
              {displayedText}
              <span className="animate-blink">|</span>
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 2 }}
          >
            Construindo soluções digitais modernas com inteligência artificial, automação inteligente e tecnologia escalável. Especialista em criar sistemas que transformam ideias em realidade.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.2 }}
          >
            <ScrollLink
              to="projects"
              smooth={true}
              offset={-80}
              spy={true}
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 217, 255, 0.6)' }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-neon-cyan to-neon-blue rounded-lg font-bold text-dark-900 hover:shadow-neon-cyan transition-all duration-300 cursor-pointer"
              >
                Ver Projetos
              </motion.button>
            </ScrollLink>
            <ScrollLink
              to="contact"
              smooth={true}
              offset={-80}
              spy={true}
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(157, 78, 221, 0.6)' }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-neon-purple rounded-lg font-bold text-neon-purple hover:bg-neon-purple/10 transition-all duration-300 cursor-pointer"
              >
                Entrar em Contato
              </motion.button>
            </ScrollLink>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex justify-center gap-6 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 2.4 }}
          >
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-2xl text-gray-400 ${social.color} transition-all duration-300`}
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  title={social.label}
                >
                  <Icon />
                </motion.a>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="flex justify-center mt-16"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ScrollLink to="about" smooth={true} offset={-80} spy={true}>
            <motion.button
              className="text-neon-cyan text-3xl cursor-pointer hover:text-neon-blue transition-colors duration-300"
              whileHover={{ scale: 1.2 }}
            >
              <FiArrowDown />
            </motion.button>
          </ScrollLink>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
