import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FiMonitor, FiServer, FiCloud, FiZap } from "react-icons/fi";

const categories = [
  {
    name: "Frontend",
    icon: FiMonitor,
    desc: "Componentes, estado, roteamento e estilização com foco em performance e responsividade.",
    skills: ["React", "JavaScript", "TypeScript", "Tailwind CSS", "Vite"],
  },
  {
    name: "Backend",
    icon: FiServer,
    desc: "APIs REST, banco de dados, autenticação e integração com serviços externos.",
    skills: ["Node.js", "Express", "Python", "PostgreSQL", "Supabase"],
  },
  {
    name: "Infra & DevOps",
    icon: FiCloud,
    desc: "Linux como sistema principal, Docker para ambientes isolados e Git para versionamento.",
    skills: ["Linux", "Docker", "Git/GitHub", "NFS-e APIs", "Mikrotik"],
  },
  {
    name: "Automação & IA",
    icon: FiZap,
    desc: "Fluxos automatizados com n8n, web scraping com Playwright e integração com modelos de IA.",
    skills: ["n8n", "Gemini AI", "Webhooks", "Playwright", "Selenium"],
  },
];

const Skills = () => {
  const { t } = useTranslation();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-24 bg-slate-950 border-t border-slate-800/80"
    >
      <div className="page-container">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          transition={{ delay: 0.05 }}
          className="text-3xl md:text-4xl font-bold text-slate-100 mb-10"
        >
          {t("skills.heading")}
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 rounded-xl border border-slate-800 bg-slate-900/60 hover:border-amber-400/30 transition-all duration-300"
            >
              <div className="w-9 h-9 rounded-lg bg-amber-400/10 border border-amber-400/20 flex items-center justify-center mb-4">
                <cat.icon size={16} className="text-amber-300" />
              </div>
              <h3 className="text-sm font-semibold text-slate-100 mb-2">
                {cat.name}
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-5">
                {cat.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 text-[11px] rounded-md bg-slate-800 text-slate-400 border border-slate-700/60"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
