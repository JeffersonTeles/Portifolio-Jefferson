import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiReact, SiTypescript, SiTailwindcss, SiFramer,
  SiNodedotjs, SiPostgresql, SiSupabase, SiSpringboot,
  SiGit, SiVercel, SiDocker, SiOpenai, SiPuppeteer, SiPlaywright
 SiJavascript, SiJava
} from 'react-icons/si';

const Skills = () => {
  const categories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: SiReact, level: "Proficiente" },
        { name: "TypeScript", icon: SiTypescript, level: "Proficiente" },
        { name: "Tailwind CSS", icon: SiTailwindcss, level: "Proficiente" },
        { name: "Framer Motion", icon: SiFramer, level: "Intermediário" },
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: SiNodedotjs, level: "Intermediário" },
        { name: "Java", icon: SiSpringboot, level: "Intermediário" },
        { name: "PostgreSQL", icon: SiPostgresql, level: "Intermediário" },
        { name: "Supabase", icon: SiSupabase, level: "Proficiente" },
      ]
    },
    {
      title: "DevOps & Ferramentas",
      skills: [
        { name: "Git", icon: SiGit, level: "Proficiente" },
        { name: "Vercel", icon: SiVercel, level: "Proficiente" },
        { name: "Docker", icon: SiDocker, level: "Básico" },
      ]
    },
    {
      title: "IA & Automação",
      skills: [
        { name: "APIs REST", icon: SiJavascript, level: "Proficiente" },
        { name: "Playwright", icon: SiPlaywright, level: "Intermediário" },
        { name: "Puppeteer", icon: SiPuppeteer, level: "Intermediário" },
        { name: "IA Integration", icon: SiOpenai, level: "Intermediário" },
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-dark-bg/50 border-y border-white/5">
      <div className="container-custom">
        <div className="section-title mb-16">
          <span className="w-8 h-px bg-dark-terminal" />
          02 / Skills
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {categories.map((cat, i) => (
            <div key={i}>
              <h3 className="font-mono text-xs text-dark-muted uppercase tracking-[0.2em] mb-8 border-b border-white/5 pb-4">
                {cat.title}
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {cat.skills.map((skill, si) => (
                  <motion.div 
                    key={si}
                    whileHover={{ y: -5 }}
                    className="flex flex-col items-center gap-3 group relative"
                  >
                    <div className="w-12 h-12 flex items-center justify-center bg-dark-card border border-white/5 rounded-sm group-hover:border-dark-accent/50 transition-colors">
                      <skill.icon size={24} className="text-dark-muted group-hover:text-dark-accent transition-colors" />
                    </div>
                    <span className="text-[10px] font-mono text-dark-muted group-hover:text-white transition-colors text-center">
                      {skill.name}
                    </span>
                    
                    {/* Tooltip Level Chip */}
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-dark-accent text-dark-bg text-[8px] font-bold uppercase rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-20">
                      {skill.level}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
