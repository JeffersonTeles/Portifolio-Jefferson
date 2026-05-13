import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Início', link: 'hero' },
    { name: 'Sobre', link: 'about' },
    { name: 'Stack', link: 'tech' },
    { name: 'Projetos', link: 'projects' },
    { name: 'Serviços', link: 'services' },
    { name: 'Contato', link: 'contact' }
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/[0.05]' : 'bg-transparent'
        }`}
      >
        <div className="container-premium py-4">
          <div className="flex justify-between items-center">
            <ScrollLink to="hero" smooth={true} duration={500} className="cursor-pointer">
              <span className="text-lg font-medium tracking-tight text-white/90 hover:text-white transition-colors">
                Jefferson Teles
              </span>
            </ScrollLink>

            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item, idx) => (
                <ScrollLink
                  key={idx}
                  to={item.link}
                  smooth={true}
                  duration={500}
                  spy={true}
                  activeClass="text-white"
                  className="text-sm text-white/60 hover:text-white transition-colors cursor-pointer"
                >
                  {item.name}
                </ScrollLink>
              ))}
            </div>

            <button onClick={() => setMobileMenu(!mobileMenu)} className="md:hidden text-white/60 hover:text-white">
              {mobileMenu ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {mobileMenu && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed top-16 left-0 right-0 bg-black/95 backdrop-blur-xl z-40 border-b border-white/[0.05] md:hidden"
        >
          <div className="container-premium py-4">
            {navItems.map((item, idx) => (
              <ScrollLink
                key={idx}
                to={item.link}
                smooth={true}
                duration={500}
                onClick={() => setMobileMenu(false)}
                className="block py-3 text-white/60 hover:text-white transition-colors text-sm cursor-pointer"
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
