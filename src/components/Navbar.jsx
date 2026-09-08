import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import { useScroll } from '../hooks/useScroll';
import { useMobileMenu } from '../hooks/useMobileMenu';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const scrolled = useScroll(20);
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
    { label: t('nav.about'), href: '#about' },
    { label: t('nav.experience'), href: '#experience' },
    { label: t('nav.projects'), href: '#projects' },
    { label: t('nav.contact'), href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed left-0 right-0 z-50 transition-all duration-500 flex justify-center ${
          scrolled ? 'top-4' : 'top-0'
        }`}
      >
        <div
          className={`w-full max-w-[900px] mx-auto flex justify-between items-center transition-all duration-500 ${
            scrolled
              ? 'h-14 px-6 md:px-8 bg-[#0a0a0a]/80 backdrop-blur-md border border-white/[0.08] rounded-full shadow-lg'
              : 'h-20 px-6 md:px-10 bg-transparent'
          }`}
        >
          <RouterLink
            to="/"
            className="flex items-center gap-3 group outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-lg p-1 -ml-1"
          >
            <div className="w-8 h-8 rounded-full bg-[#1a1a1a] border border-white/[0.08] flex items-center justify-center group-hover:border-accent/30 transition-colors duration-300">
              <span className="text-[0.65rem] font-bold text-accent">JT</span>
            </div>
            <span className="text-[0.9rem] font-semibold text-white">Jefferson Teles</span>
          </RouterLink>

          {/* Desktop nav */}
          <nav className="hidden sm:flex items-center gap-1" aria-label="Navegação principal">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 rounded-full text-[0.85rem] text-[#888] hover:text-white hover:bg-white/5 transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                {link.label}
              </a>
            ))}
            <div className="w-px h-4 bg-white/10 mx-2"></div>
            <button
              onClick={toggleLanguage}
              className="px-3 py-1.5 rounded-full text-[0.75rem] text-[#666] hover:text-white hover:bg-white/5 font-mono uppercase tracking-wider transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-accent"
              aria-label={i18n.language === 'pt' ? 'Switch to English' : 'Mudar para Português'}
            >
              {i18n.language === 'pt' ? 'EN' : 'PT'}
            </button>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={toggleMobileMenu}
            className="sm:hidden text-[#888] p-2 -mr-2 rounded-full hover:text-white hover:bg-white/5 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            {mobileOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 sm:hidden">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={closeMobileMenu}
          />
          <div
            id="mobile-menu"
            ref={menuRef}
            className="absolute top-16 right-0 w-56 bg-[#0f0f0f] border-l border-white/[0.06] p-6"
            role="dialog"
            aria-label="Menu de navegação"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <a
                  key={link.href}
                  ref={i === 0 ? firstLinkRef : undefined}
                  href={link.href}
                  onClick={closeMobileMenu}
                  className="px-4 py-3 text-[0.9rem] text-[#777] hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200"
                >
                  {link.label}
                </a>
              ))}
              <div className="h-px bg-white/[0.06] my-2" />
              <button
                onClick={() => {
                  toggleLanguage();
                  closeMobileMenu();
                }}
                className="px-4 py-3 text-left text-[0.85rem] text-[#555] hover:text-accent font-mono transition-colors duration-200"
              >
                {i18n.language === 'pt' ? 'English' : 'Português'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
