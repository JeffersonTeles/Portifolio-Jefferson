import React, { useState, useEffect } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { FiMenu, FiX, FiGlobe } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import { scroller } from "react-scroll";

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
    { name: t("nav.skills"), link: "skills" },
    { name: t("nav.contact"), link: "contact" },
  ];

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "pt" ? "en" : "pt");
  };

  const NavLink = ({ item }) => (
    <button
      onClick={() => {
        if (isHomePage) {
          scroller.scrollTo(item.link, { smooth: true, offset: -80 });
        } else {
          window.location.href = `/#${item.link}`;
        }
        setMobileMenu(false);
      }}
      className="px-4 py-2 text-sm text-slate-600 hover:text-slate-900 transition-colors"
    >
      {item.name}
    </button>
  );

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md border-b border-slate-100"
          : "bg-transparent"
      }`}
      role="navigation"
      aria-label="Navegação principal"
    >
      <div className="page-container flex justify-between items-center h-16">
        <RouterLink
          to="/"
          className="text-lg font-semibold text-slate-900 hover:text-amber-700 transition-colors"
        >
          Jefferson Teles
        </RouterLink>

        <div className="hidden md:flex items-center gap-2">
          {navItems.map((item) => (
            <NavLink key={item.link} item={item} />
          ))}
          <button
            onClick={toggleLanguage}
            className="p-2 text-slate-500 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition-all"
            aria-label="Alternar idioma"
          >
            <FiGlobe size={16} />
          </button>
        </div>

        <button
          onClick={() => setMobileMenu(!mobileMenu)}
          className="md:hidden text-slate-700 p-2"
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
