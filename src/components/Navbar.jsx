import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { motion } from 'framer-motion';
import { FiMenu, FiX, FiHexagon } from 'react-icons/fi';

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
    { name: 'Tech', link: 'tech' },
    { name: 'Projetos', link: 'projects' },
    { name: 'Serviços', link: 'services' },
    { name: 'Contato', link: 'contact' }
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled 
            ? 'bg-gray-950/80 backdrop-blur-xl border-b border-cyan-500/30 shadow-[0_0_30px_rgba(0,255,255,0.1)]' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <ScrollLink to="hero" smooth={true} duration={500} className="cursor-pointer group">
              <div className="relative">
                <FiHexagon className="absolute -left-8 top-1/2 -translate-y-1/2 text-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity" size={20} />
                <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Jefferson Teles
                </span>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:w-full transition-all duration-500 shadow-[0_0_8px_#0ff]" />
              </div>
            </ScrollLink>

            <div className="hidden md:flex items-center space-x-2">
              {navItems.map((item, idx) => (
                <ScrollLink
                  key={idx}
                  to={item.link}
                  smooth={true}
                  duration={500}
                  spy={true}
                  activeClass="text-cyan-400"
                  className="relative px-4 py-2 text-gray-300 hover:text-cyan-400 transition-all duration-300 cursor-pointer text-sm font-medium group"
                >
                  <span className="relative z-10">{item.name}</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-lg" />
                </ScrollLink>
              ))}
            </div>

            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="md:hidden text-gray-300 hover:text-cyan-400 transition-colors"
            >
              {mobileMenu ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {mobileMenu && (
        <motion.div
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '100%' }}
          className="fixed top-16 right-0 bottom-0 w-64 bg-gray-950/95 backdrop-blur-xl z-40 border-l border-cyan-500/30 md:hidden"
        >
          <div className="flex flex-col p-6 space-y-4">
            {navItems.map((item, idx) => (
              <ScrollLink
                key={idx}
                to={item.link}
                smooth={true}
                duration={500}
                onClick={() => setMobileMenu(false)}
                className="text-gray-300 hover:text-cyan-400 transition-colors py-2 text-sm cursor-pointer border-b border-gray-800 hover:border-cyan-500"
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
