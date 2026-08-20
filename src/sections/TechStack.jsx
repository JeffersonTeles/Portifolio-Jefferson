import React from "react";
import { useTranslation } from "react-i18next";
import {
  FiMonitor,
  FiServer,
  FiCloud,
  FiZap,
} from "react-icons/fi";

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
      { name: "Python", level: 80 },
      { name: "Node.js", level: 65 },
      { name: "PostgreSQL", level: 55 },
      { name: "Supabase", level: 65 },
      { name: "Express", level: 60 },
    ],
  },
  {
    name: "Infraestrutura",
    icon: FiCloud,
    skills: [
      { name: "Linux", level: 85 },
      { name: "Git/GitHub", level: 75 },
      { name: "Docker", level: 45 },
      { name: "Vercel", level: 70 },
    ],
  },
  {
    name: "Automação & IA",
    icon: FiZap,
    skills: [
      { name: "Python", level: 80 },
      { name: "n8n", level: 60 },
      { name: "Playwright", level: 50 },
      { name: "OpenAI API", level: 55 },
    ],
  },
];

const TechStack = () => {
  const { t } = useTranslation();

  return (
    <section id="skills" className="section-gap border-t border-white/[0.04]">
      <div className="container-xl">
        <span className="section-label">04 — Stack</span>
        <h2 className="section-title mb-16">{t("skills.heading")}</h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="glass glass-hover p-7 group"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center group-hover:border-accent/20 group-hover:bg-accent/5 transition-all duration-300">
                  <cat.icon
                    size={17}
                    className="text-accent/50 group-hover:text-accent/80 transition-colors"
                  />
                </div>
                <h3 className="text-sm font-semibold text-white/60 uppercase tracking-wider">
                  {cat.name}
                </h3>
              </div>

              <div className="space-y-4">
                {cat.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-white/40 group-hover:text-white/55 transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-[11px] text-white/15 font-mono">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-[3px] bg-white/[0.04] rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-700"
                        style={{
                          width: `${skill.level}%`,
                          background: `linear-gradient(90deg, rgba(226,166,61,0.5) 0%, rgba(226,166,61,0.2) 100%)`,
                          boxShadow:
                            skill.level > 70
                              ? "0 0 8px rgba(226,166,61,0.15)"
                              : "none",
                        }}
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
