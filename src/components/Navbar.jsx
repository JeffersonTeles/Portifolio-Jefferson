import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { FiMenu, FiX, FiDownload, FiUser, FiBriefcase, FiFolder, FiMail, FiGlobe, FiGithub } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import { useScroll } from '../hooks/useScroll';
import { useMobileMenu } from '../hooks/useMobileMenu';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const scrolled = useScroll(20);
  const [activeSection, setActiveSection] = useState('');
  const {
    isOpen: mobileOpen,
    toggle: toggleMobileMenu,
    close: closeMobileMenu,
    menuRef,
    firstLinkRef,
  } = useMobileMenu();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'pt' ? 'en' : 'pt');
  };

  const navLinks = [
    { label: t('nav.about'), href: '#about', icon: FiUser },
    { label: t('nav.experience'), href: '#experience', icon: FiBriefcase },
    { label: t('nav.projects'), href: '#projects', icon: FiFolder },
    { label: t('nav.contact'), href: '#contact', icon: FiMail },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(`#${section}`);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed left-0 right-0 z-50 transition-all duration-700 flex justify-center px-4 ${
          scrolled ? 'top-4 md:top-6' : 'top-0 pt-4 md:pt-6'
        }`}
        style={{ animation: 'fadeSlideDown 0.8s ease forwards' }}
      >
        <style>{`
          @keyframes fadeSlideDown {
            from {
              opacity: 0;
              transform: translateY(-20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>

        <div
          className={`w-full max-w-[960px] mx-auto flex justify-between items-center transition-all duration-500 ${
            scrolled
              ? 'h-14 px-6 md:px-8 bg-[#0a0a0c]/85 backdrop-blur-xl border border-cyan-500/20 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
              : 'h-20 px-6 md:px-10 bg-[#0a0a0c]/60 backdrop-blur-md border border-white/10 rounded-2xl md:rounded-full shadow-lg'
          }`}
        >
          {/* Logo / Brand com foto */}
          <RouterLink
            to="/"
            className="flex items-center gap-3 group outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-lg p-1 -ml-1"
          >
            <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-accent/40 flex items-center justify-center group-hover:border-accent group-hover:shadow-[0_0_15px_rgba(226,166,61,0.4)] transition-all duration-300">
              <img
                src="https://avatars.githubusercontent.com/u/70072903?v=4"
                alt="Jefferson Teles"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-[0.95rem] font-semibold text-white tracking-wide group-hover:text-accent transition-colors">
              Jefferson Teles
            </span>
          </RouterLink>

          {/* Desktop Navigation */}
          <nav className="hidden sm:flex items-center gap-1.5" aria-label="Navegação principal">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 rounded-full text-[0.85rem] font-medium transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-accent group ${
                    isActive ? 'text-white bg-white/10' : 'text-[#aaa] hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                  {/* Neon underline effect on hover / active */}
                  <span className={`absolute bottom-1 left-1/2 -translate-x-1/2 h-[2px] bg-accent rounded-full transition-all duration-300 ${isActive ? 'w-4 shadow-[0_0_8px_rgba(226,166,61,0.8)]' : 'w-0 group-hover:w-4'}`} />
                </a>
              );
            })}

            <div className="w-px h-4 bg-white/10 mx-2" />

            {/* Resume Button */}
            <a
              href="/Curriculo_Jefferson_Teles_TI.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[0.78rem] font-medium text-white/90 bg-white/5 hover:bg-accent hover:text-black border border-white/10 hover:border-accent transition-all duration-300 spark-hover"
            >
              <FiDownload size={13} />
              <span>CV</span>
            </a>

            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 px-3.5 py-1.5 rounded-full text-[0.75rem] text-[#aaa] hover:text-white hover:bg-white/10 font-mono uppercase tracking-wider transition-all duration-300 border border-white/10"
              aria-label={i18n.language === 'pt' ? 'Switch to English' : 'Mudar para Português'}
            >
              <FiGlobe size={12} className="text-accent" />
              <span>{i18n.language === 'pt' ? 'EN' : 'PT'}</span>
            </button>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={toggleMobileMenu}
            className="sm:hidden text-white p-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            {mobileOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </header>

      {/* Immersive Full-Screen Mobile Drawer Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 sm:hidden">
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-2xl transition-opacity duration-300"
            onClick={closeMobileMenu}
          />
          <div
            id="mobile-menu"
            ref={menuRef}
            className="absolute inset-x-4 top-20 bg-[#0d0d0f]/95 border border-cyan-500/30 rounded-3xl p-6 shadow-2xl backdrop-blur-3xl"
            role="dialog"
            aria-label="Menu de navegação"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link, i) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.href}
                    ref={i === 0 ? firstLinkRef : undefined}
                    href={link.href}
                    onClick={closeMobileMenu}
                    className="flex items-center gap-3.5 px-4 py-3.5 text-[1rem] font-medium text-white/80 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-200 border border-white/5"
                  >
                    <Icon className="text-accent" size={18} />
                    <span>{link.label}</span>
                  </a>
                );
              })}

              <div className="h-px bg-white/10 my-3" />

              <div className="flex items-center justify-between gap-3">
                <a
                  href="/Curriculo_Jefferson_Teles_TI.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-white/10 text-white font-medium text-xs border border-white/15"
                >
                  <FiDownload size={15} /> Baixar Currículo
                </a>
                <button
                  onClick={() => {
                    toggleLanguage();
                    closeMobileMenu();
                  }}
                  className="flex items-center gap-1.5 px-4 py-3 rounded-xl bg-accent/20 text-accent font-mono text-xs border border-accent/40"
                >
                  <FiGlobe size={14} />
                  <span>{i18n.language === 'pt' ? 'English' : 'Português'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
