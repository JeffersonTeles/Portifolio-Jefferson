import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiFileText } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import LanguageSelector from "./LanguageSelector";

const Navbar = () => {
  const { t } = useTranslation();
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

  const NavLink = ({ item }) =>
    isHomePage ? (
      <ScrollLink
        to={item.link}
        smooth
        duration={800}
        offset={-80}
        spy
        activeClass="!text-amber-300 !border-amber-400/40"
        onClick={() => setMobileMenu(false)}
        className="text-sm text-slate-400 hover:text-amber-300 transition-colors cursor-pointer px-3 py-1.5 rounded-lg border border-transparent hover:border-amber-400/20"
      >
        {item.name}
      </ScrollLink>
    ) : (
      <RouterLink
        to={`/#${item.link}`}
        onClick={() => setMobileMenu(false)}
        className="text-sm text-slate-400 hover:text-amber-300 transition-colors px-3 py-1.5 rounded-lg border border-transparent hover:border-amber-400/20"
      >
        {item.name}
      </RouterLink>
    );

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80 py-4"
            : "bg-transparent py-6"
        }`}
        role="navigation"
        aria-label="Navegação principal"
      >
        <div className="page-container flex justify-between items-center">
          <RouterLink
            to="/"
            className="inline-flex items-center px-4 py-2 rounded-full border border-slate-700/80 bg-slate-900/70 text-sm font-semibold text-slate-100 hover:text-amber-300 hover:border-amber-400/40 transition-colors"
          >
            Jefferson Teles
          </RouterLink>

          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <NavLink key={item.link} item={item} />
            ))}
            <a
              href="/curriculo.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-400/10 border border-amber-400/30 text-amber-300 text-sm font-medium hover:bg-amber-400/20 transition-colors"
            >
              <FiFileText size={14} />
              Currículo
            </a>
            <LanguageSelector />
          </div>

          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="md:hidden text-slate-100"
            aria-label={mobileMenu ? "Fechar menu" : "Abrir menu"}
            aria-expanded={mobileMenu}
          >
            {mobileMenu ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenu && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenu(false)}
              className="fixed inset-0 z-[60] bg-slate-950/70 md:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-72 bg-slate-950 border-l border-slate-800/80 z-[70] md:hidden p-6 pt-20"
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Menu mobile"
            >
              <div className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <NavLink key={item.link} item={item} />
                ))}
                <a
                  href="/curriculo.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-lg bg-amber-400/10 border border-amber-400/30 text-amber-300 text-sm font-medium hover:bg-amber-400/20 transition-colors"
                >
                  <FiFileText size={14} />
                  Currículo
                </a>
                <div className="flex items-center gap-4 pt-4 border-t border-slate-800/80">
                  <LanguageSelector />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
