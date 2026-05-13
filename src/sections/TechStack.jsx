import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiJavascript, SiTypescript, SiNodedotjs, SiReact, 
  SiNextdotjs, SiPython, SiFirebase, SiSupabase,
  SiTailwindcss, SiGit, SiOpenai
} from 'react-icons/si';
import { FiZap } from 'react-icons/fi';

const TechStack = () => {
  const technologies = [
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
    { name: "Python", icon: SiPython, color: "#3776AB" },
    { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
    { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
    { name: "TailwindCSS", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "Git", icon: SiGit, color: "#F05032" },
    { name: "IA Generativa", icon: SiOpenai, color: "#10A37F" },
    { name: "Automação", icon: FiZap, color: "#8B5CF6" }
  ];

  return (
    <section id="tech" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Tecnologias
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Tecnologias que utilizo no dia a dia para construir soluções modernas
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {technologies.map((tech, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              whileHover={{ y: -5 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 text-center border border-gray-700 hover:border-blue-500/50 transition-all duration-300 group"
            >
              <tech.icon 
                size={48} 
                style={{ color: tech.color }}
                className="mx-auto mb-3 group-hover:scale-110 transition-transform duration-300"
              />
              <h3 className="text-sm font-medium text-gray-300">{tech.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
