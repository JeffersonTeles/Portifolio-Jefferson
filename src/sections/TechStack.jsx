import React from "react";
import { useTranslation } from "react-i18next";
import { FiMonitor, FiServer, FiCloud, FiZap } from "react-icons/fi";

const skills = [
  {
    category: "Frontend",
    icon: FiMonitor,
    items: ["React", "JavaScript", "TypeScript", "Tailwind CSS", "Vite"],
  },
  {
    category: "Backend",
    icon: FiServer,
    items: ["Python", "Node.js", "Express", "PostgreSQL", "Supabase"],
  },
  {
    category: "Infraestrutura",
    icon: FiCloud,
    items: ["Linux", "Git/GitHub", "Docker", "Vercel"],
  },
  {
    category: "Automação & IA",
    icon: FiZap,
    items: ["Python", "n8n", "Playwright", "OpenAI API"],
  },
];

const TechStack = () => {
  const { t } = useTranslation();

  return (
    <section id="skills" className="slide py-28 section-alt">
      <div className="max-w-[900px] mx-auto px-6 md:px-10">
        <h2 className="text-[1.8rem] font-bold text-white mb-14">
          {t("skills.heading")}
        </h2>

        <div className="stagger grid sm:grid-cols-2 gap-5">
          {skills.map((group) => (
            <div
              key={group.category}
              className="p-6 rounded-xl bg-[#0a0a0a]/60 border border-white/[0.04] hover:border-white/[0.08] transition-all duration-500 group"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-center group-hover:border-[#e2a63d]/20 transition-colors duration-300">
                  <group.icon size={16} className="text-[#e2a63d]/50 group-hover:text-[#e2a63d]/80 transition-colors duration-300" />
                </div>
                <h3 className="text-[0.75rem] text-[#666] font-mono uppercase tracking-widest">
                  {group.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 text-[0.8rem] text-[#666] bg-white/[0.02] border border-white/[0.04] rounded-md group-hover:border-white/[0.08] group-hover:text-[#888] transition-all duration-300"
                  >
                    {item}
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
