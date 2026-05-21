import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiReact, SiTypescript, SiTailwindcss, SiFramer, SiNextdotjs,
  SiNodedotjs, SiSpringboot, SiPostgresql, SiSupabase,
  SiGit, SiVercel, SiLinux, SiDocker,
 SiPuppeteer, SiOpenai, SiJavascript
} from 'react-icons/si';

const SkillChip = ({ name, icon: Icon, level, delay }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay }}
    whileHover={{ backgroundColor: "rgba(0, 212, 255, 0.08)", borderColor: "rgba(0, 212, 255, 0.3)" }}
    className="flex items-center gap-3 px-4 py-2 bg-white/[0.02] border border-white/5 rounded-sm transition-all group cursor-default"
  >
    <Icon className="text-dark-muted group-hover:text-dark-accent transition-colors duration-300" size={18} />
    <div className="flex flex-col">
      <span className="text-[11px] font-bold text-white/90 uppercase tracking-wider">{name}</span>
      <span className="text-[8px] font-mono text-dark-terminal/60 uppercase">{level}</span>
    </div>
  </motion.div>
);

const Skills = () => {
  const groups = [
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: SiReact, level: "Proficiente" },
        { name: "TypeScript", icon: SiTypescript, level: "Intermediário" },
        { name: "Tailwind", icon: SiTailwindcss, level: "Proficiente" },
        { name: "Framer Motion", icon: SiFramer, level: "Intermediário" },
        { name: "Next.js", icon: SiNextdotjs, level: "Intermediário" },
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: SiNodedotjs, level: "Proficiente" },
        { name: "Java", icon: SiSpringboot, level: "Intermediário" },
        { name: "PostgreSQL", icon: SiPostgresql, level: "Intermediário" },
        { name: "Supabase", icon: SiSupabase, level: "Intermediário" },
        { name: "REST APIs", icon: SiJavascript, level: "Proficiente" },
      ]
    },
    {
      title: "DevOps & Tools",
      skills: [
        { name: "Git", icon: SiGit, level: "Proficiente" },
        { name: "Vercel", icon: SiVercel, level: "Proficiente" },
        { name: "Linux", icon: SiLinux, level: "Proficiente" },
        { name: "Docker", icon: SiDocker, level: "Básico" },
      ]
    },
    {
      title: "IA & Automação",
      skills: [
        { name: "Playwright", icon: SiPuppeteer, level: "Intermediário" },
        { name: "Puppeteer", icon: SiPuppeteer, level: "Intermediário" },
        { name: "WhatsApp API", icon: SiJavascript, level: "Intermediário" },
        { name: "Prompt Eng.", icon: SiOpenai, level: "Intermediário" },
      ]
    }
  ];

  return (
    <section id="skills" className="section-container bg-dark-bg/30 relative">
      <motion.h3 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="font-mono text-dark-accent text-sm tracking-[0.3em] uppercase mb-16"
      >
        skills.map(s =&gt; s.level)
      </motion.h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
        {groups.map((group, groupIndex) => (
          <div key={groupIndex} className="flex flex-col gap-6">
            <h4 className="font-mono text-[10px] text-white/20 uppercase tracking-[0.3em] border-b border-white/5 pb-4">
              {group.title}
            </h4>
            <div className="grid grid-cols-1 gap-3">
              {group.skills.map((skill, skillIndex) => (
                <SkillChip 
                  key={skillIndex} 
                  {...skill} 
                  delay={(groupIndex * 0.1) + (skillIndex * 0.05)} 
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Decorative Matrix Background */}
      <div className="absolute right-0 top-0 w-64 h-64 bg-dark-terminal/5 rounded-full blur-[100px] pointer-events-none -z-10" />
    </section>
  );
};

export default Skills;
