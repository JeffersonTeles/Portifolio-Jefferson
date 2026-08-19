import React from "react";
import { useTranslation } from "react-i18next";
import { FiMonitor, FiServer, FiCloud, FiZap } from "react-icons/fi";

const categories = [
  {
    name: "Frontend",
    icon: FiMonitor,
    skills: ["React", "JavaScript", "TypeScript", "Tailwind CSS", "Vite"],
  },
  {
    name: "Backend",
    icon: FiServer,
    skills: ["Node.js", "Express", "Python", "PostgreSQL", "Supabase"],
  },
  {
    name: "Infra & DevOps",
    icon: FiCloud,
    skills: ["Linux", "Docker", "Git/GitHub", "NFS-e APIs", "Mikrotik"],
  },
  {
    name: "Automação & IA",
    icon: FiZap,
    skills: ["n8n", "Gemini AI", "Webhooks", "Playwright", "Selenium"],
  },
];

const TechStack = () => {
  const { t } = useTranslation();

  return (
    <section
      id="skills"
      className="py-24 bg-black text-white border-t border-white/5"
    >
      <div className="page-container">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
          {t("skills.heading")}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat) => (
            <div key={cat.name}>
              <div className="flex items-center gap-3 mb-4">
                <cat.icon size={20} className="text-white/60" />
                <h3 className="text-sm font-semibold text-white">{cat.name}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 text-xs text-white/60 border border-white/10 rounded"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
