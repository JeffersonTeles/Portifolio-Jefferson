import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FiHome, FiUser, FiBriefcase, FiCode, FiMail, FiFileText } from "react-icons/fi";

const Sidebar = () => {
  const { t } = useTranslation();
  const [activeSection, setActiveSection] = useState("hero");

  const items = [
    { id: "hero", label: "Início", icon: FiHome },
    { id: "about", label: t("nav.about"), icon: FiUser },
    { id: "experience", label: t("nav.experience"), icon: FiBriefcase },
    { id: "projects", label: t("nav.projects"), icon: FiCode },
    { id: "skills", label: "Tecnologias", icon: FiCode },
    { id: "contact", label: t("nav.contact"), icon: FiMail },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <aside className="hidden xl:flex flex-col w-16 items-center pt-20 border-r border-slate-100 sticky top-0 h-screen">
      <nav className="flex flex-col items-center gap-6">
        {items.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              aria-label={item.label}
              title={item.label}
              className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all ${
                isActive
                  ? "bg-amber-100 text-amber-700 scale-110"
                  : "text-slate-400 hover:text-slate-700 hover:bg-slate-100"
              }`}
            >
              <item.icon size={18} />
            </button>
          );
        })}
      </nav>

      <div className="mt-12">
        <a
          href="/Curriculo_Jefferson_Teles.pdf"
          target="_blank"
          rel="noopener noreferrer"
          title="Currículo (PDF)"
          className="w-10 h-10 rounded-lg flex items-center justify-center text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-all"
        >
          <FiFileText size={18} />
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
