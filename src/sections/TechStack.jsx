import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiJavascript, SiTypescript, SiNodedotjs, SiReact, 
  SiNextdotjs, SiPython, SiFirebase, SiSupabase,
  SiTailwindcss, SiGit, SiOpenai, SiDocker
} from 'react-icons/si';
import { FiZap, FiCpu } from 'react-icons/fi';

const TechStack = () => {
  const technologies = [
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", glow: "hover:shadow-yellow-500/50" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6", glow: "hover:shadow-blue-500/50" },
    { name: "Node.js", icon: SiNodedotjs, color: "#339933", glow: "hover:shadow-green-500/50" },
    { name: "React", icon: SiReact, color: "#61DAFB", glow: "hover:shadow-cyan-500/50" },
    { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF", glow: "hover:shadow-white/50" },
    { name: "Python", icon: SiPython, color: "#3776AB", glow: "hover:shadow-blue-500/50" },
    { name: "Firebase", icon: SiFirebase, color: "#FFCA28", glow: "hover:shadow-yellow-500/50" },
    { name: "Supabase", icon: SiSupabase, color: "#3ECF8E", glow: "hover:shadow-green-500/50" },
    { name: "TailwindCSS", icon: SiTailwindcss, color: "#06B6D4", glow: "hover:shadow-cyan-500/50" },
    { name: "Git", icon: SiGit, color: "#F05032", glow: "hover:shadow-orange-500/50" },
    { name: "Docker", icon: SiDocker, color: "#2496ED", glow: "hover:shadow-blue-500/50" },
    { name: "IA Generativa", icon: SiOpenai, color: "#10A37F", glow: "hover:shadow-emerald-500/50" },
    { name: "Automação", icon: FiZap, color: "#8B5CF6", glow: "hover:shadow-purple-500/50" },
    { name: "APIs REST", icon: FiCpu, color: "#EC4899", glow: "hover:shadow-pink-500/50" }
  ];

  return (
    <section id="tech" className="relative py-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              TECH STACK //
            </span>
            <span className="text-white"> ECOSSISTEMA</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full shadow-[0_0_15px_#0ff]" />
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Tecnologias que utilizo no dia a dia para construir soluções modernas
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {technologies.map((tech, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.03 }}
              whileHover={{ y: -8, scale: 1.05 }}
              className="group cursor-pointer"
            >
              <div className={`relative bg-gray-900/60 backdrop-blur-sm rounded-xl p-6 text-center border border-gray-800 hover:border-cyan-500/50 transition-all duration-300 ${tech.glow} hover:shadow-lg`}>
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <tech.icon 
                  size={48} 
                  style={{ color: tech.color }}
                  className="mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 relative z-10"
                />
                <h3 className="text-sm font-medium text-gray-300 group-hover:text-cyan-400 transition-colors relative z-10">
                  {tech.name}
                </h3>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:w-12 transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
