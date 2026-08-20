import React from "react";
import { useTranslation } from "react-i18next";
import { FiMonitor, FiServer, FiCloud, FiZap } from "react-icons/fi";

const categories = [
  {
    name: "Frontend",
    icon: FiMonitor,
    skills: [
      { name: "React", level: 70 },
      { name: "JavaScript", level: 75 },
      { name: "TypeScript", level: 50 },
      { name: "Tailwind CSS", level: 80 },
      { name: "Vite", level: 70 },
    ],
  },
  {
    name: "Backend",
    icon: FiServer,
    skills: [
      { name: "Node.js", level: 65 },
      { name: "Express", level: 60 },
      { name: "Python", level: 80 },
      { name: "PostgreSQL", level: 55 },
      { name: "Supabase", level: 65 },
    ],
  },
  {
    name: "Infraestrutura",
    icon: FiCloud,
    skills: [
      { name: "Linux", level: 85 },
      { name: "Docker", level: 45 },
      { name: "Git/GitHub", level: 75 },
      { name: "NFS-e APIs", level: 70 },
    ],
  },
  {
    name: "Automação",
    icon: FiZap,
    skills: [
      { name: "Python", level: 80 },
      { name: "n8n", level: 60 },
      { name: "Webhooks", level: 70 },
      { name: "Playwright", level: 50 },
    ],
  },
];

const TechStack = () => {
  const { t } = useTranslation();

  return (
    <section id="skills" className="border-b border-slate-100">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 py-20 sm:py-28">
        <p className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-4">
          05 — Tecnologias
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-14">
          {t("skills.heading")}
        </h2>

        <div className="grid sm:grid-cols-2 gap-10">
          {categories.map((cat) => (
            <div key={cat.name} className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center">
                  <cat.icon size={16} className="text-slate-600" />
                </div>
                <h3 className="text-sm font-semibold text-slate-900">
                  {cat.name}
                </h3>
              </div>

              <div className="space-y-3 pl-12">
                {cat.skills.map((skill) => (
                  <div key={skill.name} className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-600">
                        {skill.name}
                      </span>
                      <span className="text-xs text-slate-400 font-mono">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-1 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-slate-900 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
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
