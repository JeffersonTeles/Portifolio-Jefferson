import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { FiMenu, FiX, FiGlobe } from "react-icons/fi";
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
        activeClass="text-white border-white/30"
        onClick={() => setMobileMenu(false)}
        className="text-sm text-white/60 hover:text-white transition-colors px-3 py-1.5 rounded-lg border border-transparent hover:border-white/10"
      >
        {item.name}
      </ScrollLink>
    ) : (
      <RouterLink
        to={`/#${item.link}`}
        onClick={() => setMobileMenu(false)}
        className="text-sm text-white/60 hover:text-white transition-colors px-3 py-1.5 rounded-lg border border-transparent hover:border-white/10"
      >
        {item.name}
      </RouterLink>
    );

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 border-b border-white/5 py-4"
          : "bg-transparent py-6"
      }`}
      role="navigation"
      aria-label="Navegação principal"
    >
      <div className="max-w-3xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <RouterLink
          to="/"
          className="text-sm font-medium text-white hover:text-white/80 transition-colors"
        >
          Jefferson Teles
        </RouterLink>

        <div className="hidden md:flex items-center gap-4">
          {navItems.map((item) => (
            <NavLink key={item.link} item={item} />
          ))}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm text-white/60 hover:text-white border border-transparent hover:border-white/10 transition-colors"
            aria-label="Alternar idioma"
          >
            <FiGlobe size={14} />
            {i18n.language === "pt" ? "PT" : "EN"}
          </button>
          <a
            href="/Curriculo_Jefferson_Teles.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-white/60 hover:text-white transition-colors"
          >
            Currículo
          </a>
        </div>

        <button
          onClick={() => setMobileMenu(!mobileMenu)}
          className="md:hidden text-white"
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
