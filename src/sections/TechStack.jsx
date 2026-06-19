import React from "react";
import { motion } from "framer-motion";
import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiFramer,
  SiNodedotjs,
  SiPostgresql,
  SiSupabase,
  SiGit,
  SiVercel,
  SiDocker,
  SiOpenai,
  SiPuppeteer,
  SiJavascript,
  SiPython,
  SiNextdotjs,
} from "react-icons/si";
import { FiZap, FiGlobe } from "react-icons/fi";
import { useTranslation } from "react-i18next";

const Skills = () => {
  const { t } = useTranslation();

  const categories = [
    {
      id: "performance",
      skills: [
        { name: "React", icon: SiReact },
        { name: "TypeScript", icon: SiTypescript },
        { name: "Next.js", icon: SiNextdotjs },
        { name: "Tailwind", icon: SiTailwindcss },
        { name: "Framer", icon: SiFramer },
      ],
    },
    {
      id: "infrastructure",
      skills: [
        { name: "Node.js", icon: SiNodedotjs },
        { name: "Supabase", icon: SiSupabase },
        { name: "PostgreSQL", icon: SiPostgresql },
        { name: "Docker", icon: SiDocker },
        { name: "Vercel", icon: SiVercel },
      ],
    },
    {
      id: "intelligence",
      skills: [
        { name: "AI Integration", icon: SiOpenai },
        { name: "Automation", icon: FiZap },
        { name: "Puppeteer", icon: SiPuppeteer },
        { name: "Python", icon: SiPython },
        { name: "Web Scraping", icon: FiGlobe },
      ],
    },
  ];

  return (
    <section id="skills" className="py-40 bg-black relative">
      <div className="premium-container">
        <div className="mb-24">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-[11px] font-medium uppercase tracking-[0.5em] text-white/30 mb-8 block"
          >
            {t("skills.label")}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-extrabold text-white tracking-tight uppercase"
          >
            {t("skills.heading")}
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="glass-panel p-8 md:p-10 rounded-3xl flex flex-col gap-10"
            >
              <h3 className="font-mono text-[10px] text-white/40 uppercase tracking-[0.3em]">
                {t(`skills.categories.${cat.id}`)}
              </h3>

              <div className="flex flex-wrap gap-6">
                {cat.skills.map((skill, si) => (
                  <div
                    key={si}
                    className="flex flex-col items-center gap-3 group"
                  >
                    <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/[0.02] border border-white/[0.05] group-hover:bg-white group-hover:text-black transition-all duration-500">
                      <skill.icon
                        size={20}
                        className="transition-transform group-hover:scale-110"
                      />
                    </div>
                    <span className="text-[9px] font-mono text-white/20 group-hover:text-white/60 transition-colors uppercase tracking-widest">
                      {skill.name}
                    </span>
                  </div>
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
