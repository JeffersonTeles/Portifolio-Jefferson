import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import { FiMenu, FiX, FiGlobe } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import { scroller } from "react-scroll";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["about", "experience", "projects", "skills", "contact"];
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(id);
          break;
        }
      }
    };
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-surface/85 backdrop-blur-xl border-b border-white/[0.04] shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
            : "bg-transparent"
        }`}
        role="navigation"
        aria-label="Navegação principal"
      >
        <div className="container-xl flex justify-between items-center h-16">
          <RouterLink
            to="/"
            className="text-lg font-bold text-white hover:text-accent transition-colors duration-300"
          >
            JT<span className="text-accent">.</span>
          </RouterLink>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.link}
                onClick={() => scrollTo(item.link)}
                className={`relative px-3 py-2 text-sm rounded-lg transition-all duration-300 ${
                  activeSection === item.link
                    ? "text-white"
                    : "text-white/30 hover:text-white/60"
                }`}
              >
                {item.name}
                {activeSection === item.link && (
                  <span className="absolute bottom-0.5 left-3 right-3 h-px bg-accent/60" />
                )}
              </button>
            ))}
            <div className="w-px h-4 bg-white/[0.06] mx-2" />
            <button
              onClick={toggleLanguage}
              className="p-2 text-white/20 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-300"
              aria-label="Alternar idioma"
            >
              <FiGlobe size={16} />
            </button>
          </div>

          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="md:hidden text-white/40 p-2 hover:text-white transition-colors"
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
            className="absolute inset-0 bg-black/70 backdrop-blur-md"
            onClick={() => setMobileMenu(false)}
          />
          <div className="absolute top-16 right-0 w-64 h-full bg-surface/95 backdrop-blur-xl border-l border-white/[0.04] p-6">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <button
                  key={item.link}
                  onClick={() => scrollTo(item.link)}
                  className={`px-4 py-3 text-left text-sm rounded-lg transition-all duration-300 ${
                    activeSection === item.link
                      ? "text-white bg-white/5"
                      : "text-white/40 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <div className="h-px bg-white/[0.04] my-3" />
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-2 px-4 py-3 text-sm text-white/25 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-300"
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
