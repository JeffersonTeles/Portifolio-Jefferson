import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import { FiMenu, FiX, FiGlobe } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import { scroller } from "react-scroll";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: t("nav.about"), link: "about" },
    { name: t("nav.experience"), link: "experience" },
    { name: t("nav.projects"), link: "projects" },
    { name: t("nav.skills"), link: "skills" },
    { name: t("nav.contact"), link: "contact" },
  ];

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "pt" ? "en" : "pt");
  };

  const scrollTo = (id) => {
    scroller.scrollTo(id, { smooth: true, offset: -60 });
    setMobileMenu(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-surface/80 backdrop-blur-xl border-b border-white/[0.04]"
            : "bg-transparent"
        }`}
        role="navigation"
        aria-label="Navegação principal"
      >
        <div className="container-xl flex justify-between items-center h-16">
          <RouterLink
            to="/"
            className="text-lg font-bold text-white hover:text-accent transition-colors"
          >
            JT<span className="text-accent">.</span>
          </RouterLink>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.link}
                onClick={() => scrollTo(item.link)}
                className="px-3 py-2 text-sm text-white/40 hover:text-white transition-colors rounded-lg"
              >
                {item.name}
              </button>
            ))}
            <div className="w-px h-4 bg-white/10 mx-2" />
            <button
              onClick={toggleLanguage}
              className="p-2 text-white/30 hover:text-white rounded-lg hover:bg-white/5 transition-all"
              aria-label="Alternar idioma"
            >
              <FiGlobe size={16} />
            </button>
          </div>

          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="md:hidden text-white/50 p-2"
            aria-label={mobileMenu ? "Fechar menu" : "Abrir menu"}
            aria-expanded={mobileMenu}
          >
            {mobileMenu ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenu && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setMobileMenu(false)}
          />
          <div className="absolute top-16 right-0 w-64 h-full bg-surface border-l border-white/[0.04] p-6">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.link}
                  onClick={() => scrollTo(item.link)}
                  className="px-4 py-3 text-left text-sm text-white/50 hover:text-white hover:bg-white/5 rounded-lg transition-all"
                >
                  {item.name}
                </button>
              ))}
              <div className="h-px bg-white/[0.04] my-2" />
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-2 px-4 py-3 text-sm text-white/30 hover:text-white hover:bg-white/5 rounded-lg transition-all"
              >
                <FiGlobe size={14} />
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
