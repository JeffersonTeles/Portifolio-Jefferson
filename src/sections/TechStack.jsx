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
    name: "Infra",
    icon: FiCloud,
    skills: ["Linux", "Docker", "Git/GitHub", "NFS-e APIs"],
  },
  {
    name: "Automação",
    icon: FiZap,
    skills: ["Python", "n8n", "Webhooks", "Playwright"],
  },
];

const TechStack = () => {
  const { t } = useTranslation();

  return (
    <section className="border-b border-slate-100">
      <div className="page-container py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-16">
          {t("skills.heading")}
        </h2>

        <div className="grid md:grid-cols[1fr_1fr] gap-16">
          {categories.map((cat) => (
            <div key={cat.name} className="space-y-4">
              <div className="flex items-center gap-3">
                <cat.icon size={18} className="text-amber-700" />
                <h3 className="text-sm font-semibold text-slate-900">
                  {cat.name}
                </h3>
              </div>
              <p className="text-sm text-slate-500">
                {cat.skills.join(", ")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
