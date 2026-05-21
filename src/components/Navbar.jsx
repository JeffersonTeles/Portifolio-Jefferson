import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiSun, FiMoon, FiGlobe } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

const Navbar = ({ toggleTheme, isDarkMode }) => {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'pt' ? 'en' : 'pt';
    i18n.changeLanguage(newLang);
    window.dispatchEvent(new CustomEvent('ai-log', { 
      detail: `SYNC: Language changed to ${newLang.toUpperCase()}` 
    }));
  };

  const navItems = [
    { name: t('nav.home'), link: 'hero', isExternal: false },
    { name: t('nav.about'), link: 'about', isExternal: false },
    { name: t('nav.projects'), link: 'projects', isExternal: false },
    { name: t('nav.blog'), link: '/blog', isExternal: true },
    { name: t('nav.lab'), link: 'lab', isExternal: false },
    { name: t('nav.contact'), link: 'contact', isExternal: false }
  ];

  return (
    <>
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-dark-bg/80 backdrop-blur-md py-4' : 'bg-transparent py-8'
        }`}
      >
        <div className="container-custom flex justify-between items-center">
          <RouterLink to="/" className="cursor-pointer group flex items-center gap-3">
            <div className="w-2 h-2 bg-dark-accent rounded-full group-hover:scale-150 transition-transform shadow-[0_0_10px_#00d4ff]" />
            <span className="text-xs font-bold tracking-widest uppercase text-white hover:text-dark-accent transition-colors">
              Jefferson Teles
            </span>
          </RouterLink>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, idx) => (
              item.isExternal || !isHomePage ? (
                <RouterLink
                  key={idx}
                  to={item.isExternal ? item.link : "/"}
                  className="text-[10px] font-bold tracking-widest uppercase text-white/40 hover:text-dark-accent transition-all relative group"
                >
                  <span className="block group-hover:-translate-y-full transition-transform duration-300">{item.name}</span>
                  <span className="absolute top-full left-0 block text-dark-accent group-hover:-translate-y-full transition-transform duration-300">{item.name}</span>
                </RouterLink>
              ) : (
                <ScrollLink
                  key={idx}
                  to={item.link}
                  smooth={true}
                  duration={800}
                  spy={true}
                  activeClass="text-dark-accent"
                  className="text-[10px] font-bold tracking-widest uppercase text-white/40 hover:text-dark-accent transition-all cursor-pointer relative group"
                >
                  <span className="block group-hover:-translate-y-full transition-transform duration-300">{item.name}</span>
                  <span className="absolute top-full left-0 block text-dark-accent group-hover:-translate-y-full transition-transform duration-300">{item.name}</span>
                </ScrollLink>
              )
            ))}
            
            <div className="flex items-center gap-6 border-l border-white/5 pl-8">
              <button 
                onClick={toggleLanguage}
                className="text-white/40 hover:text-dark-accent transition-colors flex items-center gap-2"
                title="Trocar Idioma"
              >
                <FiGlobe size={16} />
                <span className="text-[10px] font-mono">{i18n.language.toUpperCase()}</span>
              </button>
              <button 
                onClick={toggleTheme}
                className="text-white/40 hover:text-dark-accent transition-colors"
                title="Trocar Tema"
              >
                {isDarkMode ? <FiSun size={16} /> : <FiMoon size={16} />}
              </button>
            </div>
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center gap-4 md:hidden">
            <button onClick={toggleLanguage} className="text-white/40 hover:text-dark-accent font-mono text-[10px]">{i18n.language.toUpperCase()}</button>
            <button onClick={() => setMobileMenu(!mobileMenu)} className="text-white hover:text-dark-accent transition-colors">
              {mobileMenu ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenu && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-[60] bg-dark-bg flex flex-col justify-center items-center gap-8 md:hidden p-12"
          >
            <button onClick={() => setMobileMenu(false)} className="absolute top-8 right-8 text-white/40"><FiX size={32} /></button>
            {navItems.map((item, idx) => (
              <RouterLink
                key={idx}
                to={item.isExternal ? item.link : "/"}
                onClick={() => setMobileMenu(false)}
                className="text-4xl font-extrabold tracking-tighter text-white hover:text-dark-accent transition-colors"
              >
                {item.name}
              </RouterLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
