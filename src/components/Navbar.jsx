import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "pt" ? "en" : "pt");
  };

  return (
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

        <nav className="hidden sm:flex items-center gap-6">
          <a
            href="#about"
            className="text-[0.85rem] text-[#555] hover:text-white transition-colors duration-300"
          >
            {t("nav.about")}
          </a>
          <a
            href="#experience"
            className="text-[0.85rem] text-[#555] hover:text-white transition-colors duration-300"
          >
            {t("nav.experience")}
          </a>
          <a
            href="#projects"
            className="text-[0.85rem] text-[#555] hover:text-white transition-colors duration-300"
          >
            {t("nav.projects")}
          </a>
          <a
            href="#contact"
            className="text-[0.85rem] text-[#555] hover:text-white transition-colors duration-300"
          >
            {t("nav.contact")}
          </a>
          <button
            onClick={toggleLanguage}
            className="text-[0.75rem] text-[#444] hover:text-[#e2a63d] font-mono uppercase tracking-wider transition-colors duration-300"
            aria-label="Alternar idioma"
          >
            {i18n.language === "pt" ? "EN" : "PT"}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
