import React from "react";
import { useTranslation } from "react-i18next";

const skills = [
  {
    category: "Frontend",
    items: ["React", "JavaScript", "TypeScript", "Tailwind CSS", "Vite"],
  },
  {
    category: "Backend",
    items: ["Python", "Node.js", "Express", "PostgreSQL", "Supabase"],
  },
  {
    category: "Infraestrutura",
    items: ["Linux", "Git/GitHub", "Docker", "Vercel"],
  },
  {
    category: "Automação & IA",
    items: ["Python", "n8n", "Playwright", "OpenAI API"],
  },
];

const TechStack = () => {
  const { t } = useTranslation();

  return (
    <section id="skills" className="slide py-24 border-t border-white/[0.04]">
      <div className="max-w-[720px] mx-auto px-6 md:px-10">
        <h2 className="text-[1.6rem] font-bold text-white mb-14">
          {t("skills.heading")}
        </h2>

        <div className="stagger grid sm:grid-cols-2 gap-12">
          {skills.map((group) => (
            <div key={group.category}>
              <h3 className="text-[0.75rem] text-[#555] font-mono uppercase tracking-widest mb-4">
                {group.category}
              </h3>
              <ul className="space-y-2.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="text-[0.95rem] text-[#888]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
