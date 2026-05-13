import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiJavascript, SiTypescript, SiNodedotjs, SiReact, 
  SiNextdotjs, SiPython, SiFirebase, SiSupabase,
  SiTailwindcss, SiGit, SiDocker, SiPostgresql,
  SiRedis, SiFastapi
} from 'react-icons/si';
import { FiCpu, FiZap, FiDatabase, FiCloud } from 'react-icons/fi';

const TechStack = () => {
  const categories = [
    {
      title: "FRONTEND",
      icon: SiReact,
      techs: ["React", "Next.js", "TypeScript", "TailwindCSS"],
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      title: "BACKEND",
      icon: SiNodedotjs,
      techs: ["Node.js", "Python", "FastAPI", "Redis"],
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "DATABASE",
      icon: FiDatabase,
      techs: ["PostgreSQL", "Supabase", "Firebase", "MongoDB"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "DEVOPS & IA",
      icon: FiCloud,
      techs: ["Docker", "Git", "OpenAI", "Vercel"],
      gradient: "from-orange-500 to-red-500"
    }
  ];

  const allIcons = [
    { icon: SiJavascript, name: "JavaScript" },
    { icon: SiTypescript, name: "TypeScript" },
    { icon: SiNodedotjs, name: "Node.js" },
    { icon: SiReact, name: "React" },
    { icon: SiNextdotjs, name: "Next.js" },
    { icon: SiPython, name: "Python" },
    { icon: SiFirebase, name: "Firebase" },
    { icon: SiSupabase, name: "Supabase" },
    { icon: SiPostgresql, name: "PostgreSQL" },
    { icon: SiTailwindcss, name: "Tailwind" },
    { icon: SiDocker, name: "Docker" },
    { icon: SiGit, name: "Git" },
    { icon: FiCpu, name: "IA" },
    { icon: FiZap, name: "Automação" }
  ];

  return (
    <section id="tech" className="relative py-32 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              TECH STACK //
            </span>
          </h2>
          <div className="w-32 h-px bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto shadow-[0_0_20px_#0ff]" />
          <p className="text-gray-400 mt-8 font-mono text-sm">
            [ ECOSSISTEMA TECNOLÓGICO // 2025 ]
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-xl rounded-2xl p-6 border border-gray-800 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${cat.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                <cat.icon className="text-4xl text-cyan-400 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-bold text-white mb-3">{cat.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.techs.map((tech, tIdx) => (
                    <span key={tIdx} className="text-xs px-2 py-1 bg-gray-800/50 rounded text-gray-300 font-mono">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6">
          {allIcons.map((tech, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: idx * 0.02 }}
              whileHover={{ y: -5, scale: 1.1 }}
              className="group cursor-pointer"
            >
              <div className="text-center">
                <div className="bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-xl rounded-xl p-4 border border-gray-800 group-hover:border-cyan-500/50 transition-all duration-300">
                  <tech.icon className="text-3xl text-gray-500 group-hover:text-cyan-400 mx-auto transition-colors" />
                </div>
                <p className="text-xs text-gray-600 mt-2 group-hover:text-cyan-400 transition-colors font-mono">
                  {tech.name}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
