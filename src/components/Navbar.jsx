import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiSun, FiMoon, FiVolume2, FiVolumeX } from 'react-icons/fi';

const Navbar = ({ toggleTheme, isDarkMode, toggleMute, isMuted }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', link: 'hero' },
    { name: 'Sobre', link: 'about' },
    { name: 'Projetos', link: 'projects' },
    { name: 'Lab', link: 'lab' },
    { name: 'Contato', link: 'contact' }
  ];

  return (
    <>
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-inherit/80 backdrop-blur-md py-4' : 'bg-transparent py-8'
        }`}
      >
        <div className="container-lusion">
          <div className="flex justify-between items-center">
            <ScrollLink to="hero" smooth={true} duration={500} className="cursor-pointer group">
              <span className="text-xs font-bold tracking-lusion-wide uppercase text-inherit flex items-center gap-2">
                <span className="w-2 h-2 bg-lusion-primary rounded-full group-hover:scale-150 transition-transform" />
                Jefferson Teles
              </span>
            </ScrollLink>

            <div className="hidden md:flex items-center gap-12">
              {navItems.map((item, idx) => (
                <ScrollLink
                  key={idx}
                  to={item.link}
                  smooth={true}
                  duration={800}
                  spy={true}
                  activeClass="text-lusion-primary"
                  className="text-[10px] font-bold tracking-lusion-wide uppercase text-inherit/40 hover:text-lusion-primary transition-all cursor-pointer relative overflow-hidden group"
                >
                  <span className="block group-hover:-translate-y-full transition-transform duration-300">
                    {item.name}
                  </span>
                  <span className="absolute top-full left-0 block text-lusion-primary group-hover:-translate-y-full transition-transform duration-300">
                    {item.name}
                  </span>
                </ScrollLink>
              ))}
              
              <div className="flex items-center gap-6 border-l border-lusion-text/5 pl-8">
                <button 
                  onClick={toggleMute}
                  className="text-inherit/40 hover:text-lusion-primary transition-colors"
                  title={isMuted ? "Ativar som" : "Desativar som"}
                >
                  {isMuted ? <FiVolumeX size={16} /> : <FiVolume2 size={16} />}
                </button>
                <button 
                  onClick={toggleTheme}
                  className="text-inherit/40 hover:text-lusion-primary transition-colors"
                  title="Mudar tema"
                >
                  {isDarkMode ? <FiSun size={16} /> : <FiMoon size={16} />}
                </button>
              </div>
            </div>

            <div className="flex items-center gap-6 md:hidden">
              <button onClick={toggleMute} className="text-inherit/40 hover:text-lusion-primary transition-colors">
                {isMuted ? <FiVolumeX size={18} /> : <FiVolume2 size={18} />}
              </button>
              <button onClick={toggleTheme} className="text-inherit/40 hover:text-lusion-primary transition-colors">
                {isDarkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
              </button>
              <button onClick={() => setMobileMenu(!mobileMenu)} className="text-inherit/60 hover:text-lusion-primary">
                {mobileMenu ? <FiX size={20} /> : <FiMenu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileMenu && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className={`fixed inset-0 z-[60] flex flex-col justify-center items-center gap-8 md:hidden ${isDarkMode ? 'bg-[#050505] text-[#F0F1FA]' : 'bg-lusion-bg text-lusion-text'}`}
          >
            <button 
              onClick={() => setMobileMenu(false)} 
              className="absolute top-8 right-8 text-inherit/60"
            >
              <FiX size={32} />
            </button>
            {navItems.map((item, idx) => (
              <ScrollLink
                key={idx}
                to={item.link}
                smooth={true}
                duration={800}
                onClick={() => setMobileMenu(false)}
                className="text-4xl font-bold tracking-lusion-tighter text-inherit hover:text-lusion-primary transition-colors cursor-pointer"
              >
                {item.name}
              </ScrollLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
