import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { 
  SiReact, SiTypescript, SiTailwindcss, SiFramer,
  SiNodedotjs, SiPostgresql, SiSupabase, SiSpringboot,
  SiGit, SiVercel, SiDocker, SiOpenai, SiPuppeteer
} from 'react-icons/si';

const Skills = () => {
  const { t } = useTranslation();
  const categories = [
    {
      title: t('skills.frontend'),
      skills: [
        { name: "React", icon: SiReact, level: t('skills.levels.proficient') },
        { name: "TypeScript", icon: SiTypescript, level: t('skills.levels.intermediate') },
        { name: "Tailwind CSS", icon: SiTailwindcss, level: t('skills.levels.proficient') },
        { name: "Framer Motion", icon: SiFramer, level: t('skills.levels.intermediate') },
      ]
    },
    {
      title: t('skills.backend'),
      skills: [
        { name: "Node.js", icon: SiNodedotjs, level: t('skills.levels.intermediate') },
        { name: "Java", icon: SiSpringboot, level: t('skills.levels.intermediate') },
        { name: "PostgreSQL", icon: SiPostgresql, level: t('skills.levels.intermediate') },
        { name: "Supabase", icon: SiSupabase, level: t('skills.levels.intermediate') },
      ]
    },
    {
      title: t('skills.devops'),
      skills: [
        { name: "Git", icon: SiGit, level: t('skills.levels.proficient') },
        { name: "Vercel", icon: SiVercel, level: t('skills.levels.proficient') },
        { name: "Docker", icon: SiDocker, level: t('skills.levels.basic') },
      ]
    },
    {
      title: t('skills.automation'),
      skills: [
        { name: "Playwright", icon: SiPuppeteer, level: t('skills.levels.intermediate') },
        { name: "Puppeteer", icon: SiPuppeteer, level: t('skills.levels.intermediate') },
        { name: "APIs REST", icon: SiNodedotjs, level: t('skills.levels.proficient') },
        { name: "IA Integration", icon: SiOpenai, level: t('skills.levels.intermediate') },
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-dark-bg/30">
      <div className="container-custom">
        <div className="section-title mb-16">
          <span className="w-8 h-px bg-dark-terminal" />
          <span className="mono-tag">02 / {t('skills.title')}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {categories.map((cat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <h3 className="font-mono text-xs text-dark-muted uppercase tracking-[0.2em] mb-8 border-b border-white/5 pb-4">
                {cat.title}
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {cat.skills.map((skill, si) => (
                  <div 
                    key={si}
                    className="group relative flex items-center gap-2 px-3 py-1.5 border border-white/5 bg-white/[0.02] rounded-sm hover:border-dark-accent/50 transition-all cursor-default"
                  >
                    <skill.icon className="text-dark-muted group-hover:text-dark-accent transition-colors" size={14} />
                    <span className="text-[10px] font-mono text-dark-muted group-hover:text-white transition-colors">
                      {skill.name}
                    </span>
                    
                    {/* Level Tooltip */}
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-dark-accent text-dark-bg text-[8px] font-bold uppercase rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-20">
                      {skill.level}
                    </div>
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
