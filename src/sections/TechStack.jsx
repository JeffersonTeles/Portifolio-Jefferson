import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiJavascript, SiTypescript, SiNodedotjs, SiReact, 
  SiNextdotjs, SiPython, SiFirebase, SiSupabase,
  SiTailwindcss, SiGit, SiDocker, SiPostgresql
} from 'react-icons/si';
import { FiCpu, FiZap } from 'react-icons/fi';

const TechStack = () => {
  const technologies = [
    { name: "JavaScript", icon: SiJavascript },
    { name: "TypeScript", icon: SiTypescript },
    { name: "Node.js", icon: SiNodedotjs },
    { name: "React", icon: SiReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "Python", icon: SiPython },
    { name: "Firebase", icon: SiFirebase },
    { name: "Supabase", icon: SiSupabase },
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "TailwindCSS", icon: SiTailwindcss },
    { name: "Docker", icon: SiDocker },
    { name: "Git", icon: SiGit },
    { name: "APIs REST", icon: FiCpu },
    { name: "Automação", icon: FiZap }
  ];

  return (
    <section id="tech" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Tech Stack
          </h2>
          <div className="w-12 h-px bg-white/10 mx-auto mb-8" />
          <p className="text-white/40">
            Tecnologias que utilizo no desenvolvimento de sistemas modernos
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {technologies.map((tech, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.02 }}
              whileHover={{ y: -2 }}
              className="group"
            >
              <div className="bg-white/[0.02] border border-white/[0.05] rounded-lg p-4 text-center hover:border-white/[0.1] transition-all duration-300">
                <tech.icon 
                  size={32} 
                  className="mx-auto mb-2 text-white/40 group-hover:text-white/60 transition-colors"
                />
                <span className="text-xs text-white/40 group-hover:text-white/60 transition-colors">
                  {tech.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
