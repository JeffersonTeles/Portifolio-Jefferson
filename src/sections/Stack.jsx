import React from 'react';
import { motion } from 'framer-motion';
import {
  FiReact,
  FiGitBranch,
  FiDatabase,
  FiCode,
} from 'react-icons/fi';
import { SiJavascript, SiTypescript, SiNodeDotJs, SiPython, SiFirebase, SiPostgresql, SiDocker, SiOpenai, SiSupabase, SiTailwindcss } from 'react-icons/si';
import { fadeInUp, staggerContainer } from '../utils/animations';

const Stack = () => {
  const technologies = [
    {
      name: 'React',
      icon: FiReact,
      category: 'Frontend',
      color: 'text-blue-400',
      glow: 'glow-blue',
    },
    {
      name: 'TypeScript',
      icon: SiTypescript,
      category: 'Language',
      color: 'text-blue-500',
      glow: 'glow-blue',
    },
    {
      name: 'JavaScript',
      icon: SiJavascript,
      category: 'Language',
      color: 'text-yellow-400',
      glow: 'glow-cyan',
    },
    {
      name: 'Node.js',
      icon: SiNodeDotJs,
      category: 'Backend',
      color: 'text-green-400',
      glow: 'glow-cyan',
    },
    {
      name: 'Python',
      icon: SiPython,
      category: 'Backend',
      color: 'text-blue-400',
      glow: 'glow-blue',
    },
    {
      name: 'Firebase',
      icon: SiFirebase,
      category: 'Database',
      color: 'text-orange-400',
      glow: 'glow-cyan',
    },
    {
      name: 'Supabase',
      icon: SiSupabase,
      category: 'Database',
      color: 'text-green-400',
      glow: 'glow-cyan',
    },
    {
      name: 'PostgreSQL',
      icon: SiPostgresql,
      category: 'Database',
      color: 'text-blue-600',
      glow: 'glow-blue',
    },
    {
      name: 'TailwindCSS',
      icon: SiTailwindcss,
      category: 'Styling',
      color: 'text-cyan-400',
      glow: 'glow-cyan',
    },
    {
      name: 'Docker',
      icon: SiDocker,
      category: 'DevOps',
      color: 'text-blue-500',
      glow: 'glow-blue',
    },
    {
      name: 'OpenAI API',
      icon: SiOpenai,
      category: 'AI',
      color: 'text-green-400',
      glow: 'glow-cyan',
    },
    {
      name: 'Git/GitHub',
      icon: FiGitBranch,
      category: 'Version Control',
      color: 'text-purple-400',
      glow: 'glow-purple',
    },
  ];

  const categories = [
    { name: 'Frontend', color: 'border-neon-cyan' },
    { name: 'Backend', color: 'border-neon-blue' },
    { name: 'Database', color: 'border-neon-purple' },
    { name: 'DevOps', color: 'border-neon-cyan' },
    { name: 'AI', color: 'border-neon-blue' },
  ];

  return (
    <section id="stack" className="relative py-20 px-4 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-blue/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-purple/5 rounded-full blur-3xl pointer-events-none"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div className="text-center mb-16" {...fadeInUp}>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 gradient-text">
            Stack Tecnológico
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Tecnologias modernas e ferramentas que domino para criar soluções excepcionais
          </p>
        </motion.div>

        {/* Technologies Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16"
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, amount: 0.2 }}
        >
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={index}
                {...fadeInUp}
                className="group relative"
              >
                <motion.div
                  className="glass rounded-xl p-6 border border-neon-cyan/20 group-hover:border-neon-cyan/60 transition-all duration-300 flex flex-col items-center justify-center aspect-square cursor-pointer"
                  whileHover={{
                    y: -8,
                    boxShadow: '0 0 30px rgba(0, 217, 255, 0.4)',
                  }}
                >
                  <motion.div
                    className={`text-5xl mb-3 group-hover:scale-125 transition-transform duration-300 ${tech.color}`}
                    whileHover={{ rotate: 10 }}
                  >
                    <Icon />
                  </motion.div>
                  <p className="text-xs text-center text-gray-300 font-medium">
                    {tech.name}
                  </p>
                </motion.div>

                {/* Tooltip */}
                <motion.div
                  className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-dark-800 rounded text-xs text-gray-300 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-neon-cyan/30"
                  initial={{ opacity: 0, y: 10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                >
                  {tech.category}
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Category Breakdown */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {[
            {
              title: 'Frontend',
              techs: ['React', 'TypeScript', 'TailwindCSS'],
              description: 'Interfaces modernas e responsivas',
              icon: FiCode,
            },
            {
              title: 'Backend',
              techs: ['Node.js', 'Python', 'APIs REST'],
              description: 'Servidores escaláveis e robustos',
              icon: SiNodeDotJs,
            },
            {
              title: 'Banco de Dados',
              techs: ['Firebase', 'PostgreSQL', 'Supabase'],
              description: 'Armazenamento e gerenciamento de dados',
              icon: FiDatabase,
            },
          ].map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                className="glass rounded-xl p-6 border border-neon-cyan/20 hover:border-neon-cyan/60 transition-all duration-300 group"
                whileHover={{ y: -5, boxShadow: '0 0 20px rgba(0, 217, 255, 0.3)' }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-2xl text-neon-cyan">
                    <Icon />
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-neon-cyan transition-colors">
                    {category.title}
                  </h3>
                </div>
                <p className="text-gray-400 text-sm mb-4">
                  {category.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {category.techs.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs rounded-full bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/30 hover:bg-neon-cyan/20 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          className="mt-16 p-6 glass rounded-xl border border-neon-cyan/20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="text-gray-300 mb-2">
            <span className="font-bold text-neon-cyan">Em constante evolução:</span> Estou sempre aprendendo e explorando novas tecnologias e tendências do mercado.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Stack;
