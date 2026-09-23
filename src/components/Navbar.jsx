import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Menu, X, Download, User, Briefcase, Folder, Mail, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useScroll } from '../hooks/useScroll';
import { useMobileMenu } from '../hooks/useMobileMenu';
import useTheme from '../hooks/useTheme';
import WarmTooltip from './WarmTooltip';

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
    { label: t('nav.about'), href: '#about', icon: User },
    { label: t('nav.experience'), href: '#experience', icon: Briefcase },
    { label: t('nav.projects'), href: '#projects', icon: Folder },
    { label: t('nav.contact'), href: '#contact', icon: Mail },
  ];

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
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
        ticking = false;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Reativo: re-renderiza quando a classe `light` muda no <html>
  const isLight = useTheme();

  return (
    <>
      <header
        className={`fixed left-0 right-0 z-50 transition-all duration-700 flex justify-center px-4 ${
          scrolled ? 'top-4 md:top-6' : 'top-0 pt-4 md:pt-6'
        }`}
        style={{ animation: 'fadeSlideDown 0.8s ease forwards' }}
      >
        <div
          className={`w-full max-w-[960px] mx-auto flex justify-between items-center transition-all duration-500 ${
            scrolled
              ? 'h-14 px-6 md:px-8 backdrop-blur-xl rounded-full'
              : 'h-20 px-6 md:px-10 backdrop-blur-md rounded-2xl md:rounded-full shadow-lg'
          } ${
            scrolled
              ? isLight
                ? 'bg-white/90 border border-black/10 shadow-[0_10px_30px_rgba(0,0,0,0.08)]'
                : 'bg-[#0a0a0c]/85 border border-accent/20 shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
              : isLight
                ? 'bg-white/70 border border-black/5'
                : 'bg-[#0a0a0c]/60 border border-white/10'
          }`}
        >
          {/* Logo / Brand com foto */}
          <RouterLink
            to="/"
            className="flex items-center gap-3 group outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-lg p-1 -ml-1"
          >
            <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-accent/40 flex items-center justify-center group-hover:border-accent group-hover:shadow-[0_0_15px_rgba(226,166,61,0.4)] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">
              <img
                src="https://avatars.githubusercontent.com/u/70072903?v=4"
                alt="Jefferson Teles"
                className="w-full h-full object-cover"
              />
            </div>
            <span
              className={`text-[0.95rem] font-semibold tracking-wide group-hover:text-accent transition-colors ${isLight ? 'text-gray-900' : 'text-white'}`}
            >
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
                  className={`relative px-4 py-2 rounded-full text-[0.85rem] font-medium transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] outline-none focus-visible:ring-2 focus-visible:ring-accent group ${
                    isActive
                      ? isLight
                        ? 'text-gray-900 bg-black/5'
                        : 'text-white bg-white/10'
                      : isLight
                        ? 'text-gray-500 hover:text-gray-900 hover:bg-black/5'
                        : 'text-[#aaa] hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-1 left-1/2 -translate-x-1/2 h-[2px] bg-accent rounded-full transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${isActive ? 'w-4 shadow-[0_0_8px_rgba(226,166,61,0.8)]' : 'w-0 group-hover:w-4'}`}
                  />
                </a>
              );
            })}

            <div className={`w-px h-4 mx-2 ${isLight ? 'bg-black/10' : 'bg-white/10'}`} />

            {/* Resume Button */}
            <WarmTooltip content={t('nav.tooltips.resume')} side="bottom" showFuse>
              <a
                href="/Curriculo_Jefferson_Teles_TI.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={`hidden lg:flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[0.78rem] font-medium transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] spark-hover ${
                  isLight
                    ? 'text-gray-700 bg-black/5 hover:bg-accent hover:text-black border border-black/10 hover:border-accent'
                    : 'text-white/90 bg-white/5 hover:bg-accent hover:text-black border border-white/10 hover:border-accent'
                }`}
              >
                <Download size={13} />
                <span>CV</span>
              </a>
            </WarmTooltip>

            {/* Language Switcher */}
            <WarmTooltip content={t('nav.tooltips.language')} side="bottom" showFuse>
              <button
                onClick={toggleLanguage}
                className={`flex items-center gap-1 px-3.5 py-1.5 rounded-full text-[0.75rem] font-mono uppercase tracking-wider transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                  isLight
                    ? 'text-gray-500 hover:text-gray-900 hover:bg-black/5 border border-black/10'
                    : 'text-[#aaa] hover:text-white hover:bg-white/10 border border-white/10'
                }`}
                aria-label={i18n.language === 'pt' ? 'Switch to English' : 'Mudar para Português'}
              >
                <Globe size={12} className="text-accent" />
                <span>{i18n.language === 'pt' ? 'EN' : 'PT'}</span>
              </button>
            </WarmTooltip>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={toggleMobileMenu}
            className={`sm:hidden p-2.5 rounded-full transition-colors outline-none focus-visible:ring-2 focus-visible:ring-accent ${
              isLight
                ? 'text-gray-900 bg-black/5 hover:bg-black/10 border border-black/10'
                : 'text-white bg-white/5 hover:bg-white/10 border border-white/10'
            }`}
            aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Immersive Full-Screen Mobile Drawer Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 sm:hidden">
          <button
            type="button"
            aria-label="Dispensar menu"
            className="absolute inset-0 bg-black/80 backdrop-blur-2xl transition-opacity duration-500 cursor-default"
            onClick={closeMobileMenu}
          />
          <div
            id="mobile-menu"
            ref={menuRef}
            className={`absolute inset-x-4 top-20 backdrop-blur-3xl rounded-3xl p-6 shadow-2xl ${
              isLight
                ? 'bg-white/95 border border-black/10'
                : 'bg-[#0d0d0f]/95 border border-accent/30'
            }`}
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
                    className={`flex items-center gap-3.5 px-4 py-3.5 text-[1rem] font-medium rounded-xl transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                      isLight
                        ? 'text-gray-700 hover:text-gray-900 hover:bg-black/5 border border-black/5'
                        : 'text-white/80 hover:text-white hover:bg-white/10 border border-white/5'
                    }`}
                  >
                    <Icon className="text-accent" size={18} />
                    <span>{link.label}</span>
                  </a>
                );
              })}

              <div className={`h-px my-3 ${isLight ? 'bg-black/10' : 'bg-white/10'}`} />

              <div className="flex items-center justify-between gap-3">
                <a
                  href="/Curriculo_Jefferson_Teles_TI.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-medium text-xs ${
                    isLight
                      ? 'bg-black/5 text-gray-800 border border-black/10'
                      : 'bg-white/10 text-white border border-white/15'
                  }`}
                >
                  <Download size={15} /> Baixar Currículo
                </a>
                <button
                  onClick={() => {
                    toggleLanguage();
                    closeMobileMenu();
                  }}
                  className="flex items-center gap-1.5 px-4 py-3 rounded-xl bg-accent/20 text-accent font-mono text-xs border border-accent/40"
                >
                  <Globe size={14} />
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
