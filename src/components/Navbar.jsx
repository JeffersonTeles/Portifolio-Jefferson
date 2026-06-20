import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiSun, FiMoon, FiGlobe } from "react-icons/fi";
import MagneticButton from "./MagneticButton";
import { useTranslation } from "react-i18next";

const Navbar = ({ toggleTheme, isDarkMode }) => {
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

  const toggleLanguage = () => {
    const newLang = i18n.language === "pt" ? "en" : "pt";
    i18n.changeLanguage(newLang);
  };

  const navItems = [
    { name: t("nav.home"), link: "hero", isExternal: false },
    { name: t("nav.about"), link: "about", isExternal: false },
    { name: "Currículo", link: "curriculum", isExternal: false },
    { name: t("nav.projects"), link: "projects", isExternal: false },
    { name: t("nav.blog"), link: "/blog", isExternal: true, isRoute: true },
    { name: t("nav.contact"), link: "contact", isExternal: false },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black/60 backdrop-blur-xl border-b border-white/[0.05] py-4"
            : "bg-transparent py-8"
        }`}
      >
        <div className="premium-container flex justify-between items-center">
          <MagneticButton>
            <RouterLink
              to="/"
              className="cursor-pointer group flex items-center gap-3"
            >
              <div className="w-1.5 h-1.5 bg-white rounded-full group-hover:scale-150 transition-transform shadow-glow" />
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-white hover:opacity-70 transition-opacity">
                Jefferson Teles
              </span>
            </RouterLink>
          </MagneticButton>

          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item, idx) => (
              <MagneticButton key={idx}>
                {item.isRoute ? (
                  <RouterLink
                    to={item.link}
                    className="text-[10px] font-medium tracking-widest uppercase text-white/40 hover:text-white transition-all relative group"
                  >
                    <span className="block">{item.name}</span>
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300" />
                  </RouterLink>
                ) : item.isExternal || !isHomePage ? (
                  <RouterLink
                    to={item.isExternal ? item.link : "/"}
                    className="text-[10px] font-medium tracking-widest uppercase text-white/40 hover:text-white transition-all relative group"
                  >
                    <span className="block">{item.name}</span>
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300" />
                  </RouterLink>
                ) : (
                  <ScrollLink
                    to={item.link}
                    smooth={true}
                    duration={1000}
                    spy={true}
                    offset={-100}
                    activeClass="!text-white"
                    className="text-[10px] font-medium tracking-widest uppercase text-white/40 hover:text-white transition-all cursor-pointer relative group"
                  >
                    <span className="block">{item.name}</span>
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300" />
                  </ScrollLink>
                )}
              </MagneticButton>
            ))}

            <div className="flex items-center gap-4 border-l border-white/5 pl-8 ml-2">
              <button
                onClick={toggleLanguage}
                className="text-white/30 hover:text-white transition-colors flex items-center gap-2"
                title="Change Language"
              >
                <FiGlobe size={14} />
                <span className="text-[10px] font-mono tracking-tighter">
                  {i18n.language.toUpperCase()}
                </span>
              </button>
              <button
                onClick={toggleTheme}
                className="text-white/30 hover:text-white transition-colors"
                title="Toggle Theme"
                aria-label="Toggle dark/light theme"
              >
                {isDarkMode ? <FiSun size={15} /> : <FiMoon size={15} />}
              </button>
            </div>
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center gap-6 md:hidden">
            <button
              onClick={toggleLanguage}
              className="text-white/40 hover:text-white font-mono text-[10px] tracking-tighter"
            >
              {i18n.language.toUpperCase()}
            </button>
            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="text-white hover:opacity-70 transition-opacity"
            >
              {mobileMenu ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenu && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-3xl flex flex-col justify-center items-center gap-10 md:hidden p-12"
          >
            <button
              onClick={() => setMobileMenu(false)}
              className="absolute top-8 right-8 text-white/40 hover:text-white transition-colors"
            >
              <FiX size={24} />
            </button>
            {navItems.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.07, duration: 0.5 }}
              >
                {item.isRoute ? (
                  <RouterLink
                    to={item.link}
                    onClick={() => setMobileMenu(false)}
                    className="text-3xl font-extrabold tracking-tighter text-white/40 hover:text-white transition-colors"
                  >
                    {item.name}
                  </RouterLink>
                ) : (
                  <ScrollLink
                    to={item.link}
                    smooth={true}
                    duration={1000}
                    onClick={() => setMobileMenu(false)}
                    className="text-3xl font-extrabold tracking-tighter text-white/40 hover:text-white transition-colors"
                  >
                    {item.name}
                  </ScrollLink>
                )}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
