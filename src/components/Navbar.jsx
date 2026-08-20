import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import { FiMenu, FiX, FiGlobe } from "react-icons/fi";
import { useTranslation } from "react-i18next";

const navLinks = [
  { id: "sobre", labelPt: "Sobre", labelEn: "About" },
  { id: "experience", labelPt: "Experiência", labelEn: "Experience" },
  { id: "projetos", labelPt: "Projetos", labelEn: "Projects" },
  { id: "skills", labelPt: "Tecnologias", labelEn: "Skills" },
  { id: "contato", labelPt: "Contato", labelEn: "Contact" },
];

const Navbar = () => {
  const { i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const isPt = i18n.language === "pt";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const scrollTo = (id) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md border-b border-slate-100"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 flex justify-between items-center h-14">
          <RouterLink
            to="/"
            className="text-sm font-semibold text-slate-900 tracking-tight"
          >
            Jefferson<span className="text-slate-300 font-normal">.dev</span>
          </RouterLink>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="px-3 py-1.5 text-[13px] text-slate-500 hover:text-slate-900 transition-colors rounded-md hover:bg-slate-50"
              >
                {isPt ? link.labelPt : link.labelEn}
              </button>
            ))}
            <button
              onClick={() => i18n.changeLanguage(isPt ? "en" : "pt")}
              className="ml-2 p-1.5 text-slate-400 hover:text-slate-700 rounded-md hover:bg-slate-50 transition-all"
              aria-label="Toggle language"
            >
              <FiGlobe size={14} />
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-1.5 text-slate-700"
            aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
          >
            {mobileOpen ? <FiX size={18} /> : <FiMenu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-white/95 backdrop-blur-sm md:hidden"
          onClick={() => setMobileOpen(false)}
        >
          <div
            className="flex flex-col items-center justify-center h-full gap-8"
            onClick={(e) => e.stopPropagation()}
          >
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-2xl font-semibold text-slate-900 hover:text-slate-500 transition-colors"
              >
                {isPt ? link.labelPt : link.labelEn}
              </button>
            ))}
            <button
              onClick={() => {
                i18n.changeLanguage(isPt ? "en" : "pt");
                setMobileOpen(false);
              }}
              className="mt-4 text-sm text-slate-400 hover:text-slate-700"
            >
              {isPt ? "English" : "Português"}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
