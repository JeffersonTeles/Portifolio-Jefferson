// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Início', link: 'hero' },
    { name: 'Sobre', link: 'about' },
    { name: 'Tecnologias', link: 'tech' },
    { name: 'Projetos', link: 'projects' },
    { name: 'Serviços', link: 'services' },
    { name: 'Contato', link: 'contact' }
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-gray-900/95 backdrop-blur-md border-b border-gray-800 shadow-lg' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <ScrollLink
              to="hero"
              smooth={true}
              duration={500}
              className="cursor-pointer group"
            >
              <div>
                <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Jefferson Teles
                </span>
                <div className="h-0.5 w-0 bg-gradient-to-r from-blue-400 to-purple-500 group-hover:w-full transition-all duration-300" />
              </div>
            </ScrollLink>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item, idx) => (
                <ScrollLink
                  key={idx}
                  to={item.link}
                  smooth={true}
                  duration={500}
                  spy={true}
                  activeClass="text-blue-400"
                  className="px-4 py-2 text-gray-300 hover:text-blue-400 transition-colors duration-300 cursor-pointer text-sm font-medium"
                >
                  {item.name}
                </ScrollLink>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="md:hidden text-gray-300 hover:text-blue-400 transition-colors"
            >
              {mobileMenu ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {mobileMenu && (
        <motion.div
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '100%' }}
          className="fixed top-16 right-0 bottom-0 w-64 bg-gray-900/95 backdrop-blur-xl z-40 border-l border-gray-800 md:hidden"
        >
          <div className="flex flex-col p-6 space-y-4">
            {navItems.map((item, idx) => (
              <ScrollLink
                key={idx}
                to={item.link}
                smooth={true}
                duration={500}
                onClick={() => setMobileMenu(false)}
                className="text-gray-300 hover:text-blue-400 transition-colors py-2 text-sm cursor-pointer"
              >
                {item.name}
              </ScrollLink>
            ))}
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Navbar;