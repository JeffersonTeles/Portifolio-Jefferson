import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { FiMenu, FiX, FiGlobe, FiFileText } from "react-icons/fi";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: t("nav.about"), link: "about" },
    { name: t("nav.experience"), link: "experience" },
    { name: t("nav.projects"), link: "projects" },
    { name: t("nav.contact"), link: "contact" },
  ];

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "pt" ? "en" : "pt");
  };

  const NavLink = ({ item }) =>
    isHomePage ? (
      <ScrollLink
        to={item.link}
        smooth
        duration={800}
        offset={-80}
        spy
        activeClass="!text-white !border-white/20"
        onClick={() => setMobileMenu(false)}
        className="px-4 py-2 text-sm text-white/60 hover:text-white hover:border-white/10 border border-transparent rounded-lg transition-all"
      >
        {item.name}
      </ScrollLink>
    ) : (
      <RouterLink
        to={`/#${item.link}`}
        onClick={() => setMobileMenu(false)}
        className="px-4 py-2 text-sm text-white/60 hover:text-white hover:border-white/10 border border-transparent rounded-lg transition-all"
      >
        {item.name}
      </RouterLink>
    );

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-white/5 ${
        scrolled ? "bg-black/80 backdrop-blur-md" : "bg-transparent"
      }`}
      role="navigation"
      aria-label="Navegação principal"
    >
      <div className="page-container flex justify-between items-center h-16">
        <RouterLink
          to="/"
          className="text-sm font-medium text-white hover:text-white/80 transition-colors"
        >
          Jefferson Teles
        </RouterLink>

        <div className="hidden md:flex items-center gap-2">
          {navItems.map((item) => (
            <NavLink key={item.link} item={item} />
          ))}
          <button
            onClick={toggleLanguage}
            className="p-2 text-white/60 hover:text-white rounded-lg hover:bg-white/5 border border-transparent hover:border-white/10 transition-all"
            aria-label="Alternar idioma"
          >
            <FiGlobe size={16} />
            <span className="sr-only">Idioma</span>
          </button>
          <a
            href="/Curriculo_Jefferson_Teles.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-white/60 hover:text-white rounded-lg hover:bg-white/5 border border-transparent hover:border-white/10 transition-all"
            title="Currículo em PDF"
          >
            <FiFileText size={16} />
            <span className="sr-only">Currículo</span>
          </a>
        </div>

        <button
          onClick={() => setMobileMenu(!mobileMenu)}
          className="md:hidden text-white p-2"
          aria-label={mobileMenu ? "Fechar menu" : "Abrir menu"}
          aria-expanded={mobileMenu}
        >
          {mobileMenu ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
