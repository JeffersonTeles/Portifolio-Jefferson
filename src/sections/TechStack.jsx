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
      className="section-padding border-b-section"
    >
      <div className="page-container">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
          {t("skills.heading")}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {categories.map((cat) => (
            <div key={cat.name} className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg border border-white/5 flex items-center justify-center">
                  <cat.icon size={16} className="text-amber-300" />
                </div>
                <h3 className="text-sm font-semibold text-white">
                  {cat.name}
                </h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-2 py-1 text-slate-400 border border-white/5 rounded"
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
