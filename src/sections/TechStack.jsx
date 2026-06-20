import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
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
        { name: "React", icon: SiReact, level: 88 },
        { name: "TypeScript", icon: SiTypescript, level: 80 },
        { name: "Next.js", icon: SiNextdotjs, level: 82 },
        { name: "Tailwind", icon: SiTailwindcss, level: 92 },
        { name: "Framer", icon: SiFramer, level: 75 },
      ],
    },
    {
      id: "infrastructure",
      skills: [
        { name: "Node.js", icon: SiNodedotjs, level: 82 },
        { name: "Supabase", icon: SiSupabase, level: 85 },
        { name: "PostgreSQL", icon: SiPostgresql, level: 72 },
        { name: "Docker", icon: SiDocker, level: 65 },
        { name: "Vercel", icon: SiVercel, level: 90 },
      ],
    },
    {
      id: "intelligence",
      skills: [
        { name: "AI Integration", icon: SiOpenai, level: 78 },
        { name: "Automation", icon: FiZap, level: 85 },
        { name: "Puppeteer", icon: SiPuppeteer, level: 80 },
        { name: "Python", icon: SiPython, level: 68 },
        { name: "Web Scraping", icon: FiGlobe, level: 82 },
      ],
    },
  ];

  const SkillBar = ({ level }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    return (
      <div
        ref={ref}
        className="w-full h-px bg-white/5 rounded-full overflow-hidden mt-2"
      >
        <motion.div
          className="h-full bg-white/40 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: isInView ? `${level}%` : 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        />
      </div>
    );
  };

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

              <div className="grid grid-cols-1 gap-4 w-full">
                {cat.skills.map((skill, si) => (
                  <div key={si} className="group/skill">
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-3">
                        <div className="w-7 h-7 flex items-center justify-center rounded-lg bg-white/[0.03] border border-white/[0.05] group-hover/skill:bg-white group-hover/skill:text-black transition-all duration-400">
                          <skill.icon size={14} />
                        </div>
                        <span className="text-[11px] font-medium text-white/50 group-hover/skill:text-white transition-colors uppercase tracking-wider">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-white/20 group-hover/skill:text-white/40 transition-colors">
                        {skill.level}%
                      </span>
                    </div>
                    <SkillBar level={skill.level} />
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
