import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Sobre', to: 'about' },
    { label: 'Projetos', to: 'projects' },
    { label: 'Experiência', to: 'experience' },
    { label: 'Serviços', to: 'services' },
    { label: 'Stack', to: 'stack' },
    { label: 'Contato', to: 'contact' },
  ];

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass border-b border-neon-cyan/20'
          : 'bg-transparent'
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <motion.div
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ScrollLink
              to="hero"
              className="text-xl sm:text-2xl font-bold gradient-text cursor-pointer"
            >
              JT.
            </ScrollLink>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <ScrollLink
                key={item.to}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-80}
                className="text-sm font-medium text-gray-300 hover:text-neon-cyan transition-colors duration-300 cursor-pointer"
              >
                {item.label}
              </ScrollLink>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-gradient-to-r from-neon-cyan to-neon-blue rounded-lg font-medium text-dark-900 hover:shadow-neon-cyan transition-all duration-300"
            >
              <ScrollLink to="contact" spy={true} smooth={true} offset={-80}>
                Contato
              </ScrollLink>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-neon-cyan text-2xl"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className={`md:hidden bg-dark-800/95 backdrop-blur-md border-t border-neon-cyan/20 ${
            isOpen ? 'block' : 'hidden'
          }`}
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isOpen ? 1 : 0,
            height: isOpen ? 'auto' : 0,
          }}
        >
          <div className="px-4 pt-4 pb-6 space-y-4">
            {navItems.map((item) => (
              <ScrollLink
                key={item.to}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-80}
                className="block text-gray-300 hover:text-neon-cyan transition-colors duration-300 cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </ScrollLink>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full px-6 py-2 bg-gradient-to-r from-neon-cyan to-neon-blue rounded-lg font-medium text-dark-900 hover:shadow-neon-cyan transition-all duration-300"
            >
              <ScrollLink to="contact" spy={true} smooth={true} offset={-80}>
                Contato
              </ScrollLink>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
