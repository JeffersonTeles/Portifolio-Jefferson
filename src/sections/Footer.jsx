import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi';
import { SiWhatsapp } from 'react-icons/si';
import { Link as ScrollLink } from 'react-scroll';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FiGithub, href: '#', label: 'GitHub' },
    { icon: FiLinkedin, href: '#', label: 'LinkedIn' },
    { icon: SiWhatsapp, href: '#', label: 'WhatsApp' },
    { icon: FiMail, href: 'mailto:jefferson@example.com', label: 'Email' },
  ];

  const navLinks = [
    { label: 'Sobre', to: 'about' },
    { label: 'Projetos', to: 'projects' },
    { label: 'Experiência', to: 'experience' },
    { label: 'Serviços', to: 'services' },
    { label: 'Stack', to: 'stack' },
    { label: 'Contato', to: 'contact' },
  ];

  return (
    <footer className="relative pt-20 pb-8 px-4 bg-gradient-to-b from-dark-800 to-dark-900 border-t border-neon-cyan/10 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-neon-blue/5 rounded-full blur-3xl pointer-events-none -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <ScrollLink to="hero" spy={true} smooth={true} offset={-80}>
              <h3 className="text-2xl font-bold gradient-text cursor-pointer hover:scale-105 transition-transform">
                Jefferson Teles
              </h3>
            </ScrollLink>
            <p className="text-gray-400 max-w-xs">
              Desenvolvedor full-stack apaixonado por criar soluções inovadoras com IA, automação e tecnologia.
            </p>
            <p className="text-neon-cyan font-mono text-sm">
              "Transformando ideias em realidade digital"
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h4 className="text-lg font-bold text-white">Navegação</h4>
            <div className="space-y-2">
              {navLinks.map((link) => (
                <ScrollLink
                  key={link.to}
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  className="block text-gray-400 hover:text-neon-cyan transition-colors duration-300 cursor-pointer text-sm"
                >
                  {link.label}
                </ScrollLink>
              ))}
            </div>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h4 className="text-lg font-bold text-white">Conecte-se</h4>
            <p className="text-gray-400 text-sm">
              Vamos criar algo incrível juntos!
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg glass border border-neon-cyan/20 flex items-center justify-center text-neon-cyan hover:border-neon-cyan/60 hover:bg-neon-cyan/10 transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    title={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          className="w-full h-px bg-gradient-to-r from-transparent via-neon-cyan/30 to-transparent mb-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        ></motion.div>

        {/* Bottom Section */}
        <motion.div
          className="flex flex-col sm:flex-row justify-between items-center gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="text-center sm:text-left text-sm text-gray-500">
            <p>
              © {currentYear} Jefferson Teles. Todos os direitos reservados.
            </p>
            <p className="text-xs mt-1">
              Desenvolvido com React, TailwindCSS e Framer Motion
            </p>
          </div>

          {/* Scroll to Top Button */}
          <ScrollLink to="hero" spy={true} smooth={true} offset={0}>
            <motion.button
              className="w-10 h-10 rounded-lg glass border border-neon-cyan/30 flex items-center justify-center text-neon-cyan hover:border-neon-cyan/60 hover:bg-neon-cyan/10 transition-all duration-300 cursor-pointer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              title="Voltar ao topo"
            >
              <FiArrowUp className="w-5 h-5" />
            </motion.button>
          </ScrollLink>
        </motion.div>

        {/* Footer Message */}
        <motion.div
          className="mt-8 p-4 text-center text-xs text-gray-500 border-t border-neon-cyan/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <p>
            Construindo o futuro, um projeto por vez. 🚀
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
