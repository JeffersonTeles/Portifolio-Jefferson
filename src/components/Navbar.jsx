import React, { useState, useEffect, useRef } from "react";
import { Link as RouterLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuRef = useRef(null);
  const firstLinkRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Focus trap for mobile menu
  useEffect(() => {
    if (!mobileOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        return;
      }
      if (e.key === "Tab" && menuRef.current) {
        const focusables = menuRef.current.querySelectorAll(
          'a, button, [tabindex]:not([tabindex="-1"])'
        );
        const first = focusables[0];
        const last = focusables[focusables.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    firstLinkRef.current?.focus();

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [mobileOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "pt" ? "en" : "pt");
  };

  const navLinks = [
    { label: t("nav.about"), href: "#about" },
    { label: t("nav.experience"), href: "#experience" },
    { label: t("nav.projects"), href: "#projects" },
    { label: t("nav.contact"), href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-white/[0.04]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[720px] mx-auto px-6 md:px-10 flex justify-between items-center h-16">
          <RouterLink to="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-full bg-[#1a1a1a] border border-white/[0.08] flex items-center justify-center group-hover:border-[#e2a63d]/30 transition-colors duration-300">
              <span className="text-[0.65rem] font-bold text-[#e2a63d]">
                JT
              </span>
            </div>
            <span className="text-[0.9rem] font-semibold text-white">
              Jefferson Teles
            </span>
          </RouterLink>

          {/* Desktop nav */}
          <nav className="hidden sm:flex items-center gap-6" aria-label="Navegação principal">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[0.85rem] text-[#555] hover:text-white transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={toggleLanguage}
              className="text-[0.75rem] text-[#444] hover:text-[#e2a63d] font-mono uppercase tracking-wider transition-colors duration-300"
              aria-label={i18n.language === "pt" ? "Switch to English" : "Mudar para Português"}
            >
              {i18n.language === "pt" ? "EN" : "PT"}
            </button>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="sm:hidden text-[#666] p-2 hover:text-white transition-colors"
            aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
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
            onClick={() => setMobileOpen(false)}
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
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 text-[0.9rem] text-[#777] hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200"
                >
                  {link.label}
                </a>
              ))}
              <div className="h-px bg-white/[0.06] my-2" />
              <button
                onClick={() => {
                  toggleLanguage();
                  setMobileOpen(false);
                }}
                className="px-4 py-3 text-left text-[0.85rem] text-[#555] hover:text-[#e2a63d] font-mono transition-colors duration-200"
              >
                {i18n.language === "pt" ? "English" : "Português"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
