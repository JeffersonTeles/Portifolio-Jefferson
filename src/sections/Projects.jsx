// src/sections/Projects.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiMessageCircle, FiBarChart2, FiUsers, FiGlobe } from 'react-icons/fi';

const Projects = () => {
  const projects = [
    {
      title: "Bot WhatsApp para Automação",
      description: "Bot inteligente para atendimento automatizado, envio de mensagens em massa e integração com APIs de CRM.",
      tech: ["Node.js", "WhatsApp API", "MongoDB", "Express"],
      icon: FiMessageCircle,
      github: "#",
      demo: "#",
      category: "Automação"
    },
    {
      title: "Dashboard Financeiro SaaS",
      description: "Plataforma para gestão de finanças pessoais com dashboards interativos e previsões usando IA.",
      tech: ["React", "Next.js", "Supabase", "Chart.js"],
      icon: FiBarChart2,
      github: "#",
      demo: "#",
      category: "Dashboard"
    },
    {
      title: "Sistema de Afiliados",
      description: "Plataforma completa para gestão de afiliados com rastreamento de links e comissões em tempo real.",
      tech: ["TypeScript", "Node.js", "PostgreSQL", "Redis"],
      icon: FiUsers,
      github: "#",
      demo: "#",
      category: "SaaS"
    },
    {
      title: "API de Integração com IA",
      description: "API REST para integração com modelos de IA generativa, geração de texto e análise de dados.",
      tech: ["Python", "FastAPI", "OpenAI", "Docker"],
      icon: FiGlobe,
      github: "#",
      demo: "#",
      category: "API"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Projetos
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Alguns dos projetos que desenvolvi recentemente
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 overflow-hidden hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-blue-500/10 rounded-lg">
                    <project.icon className="text-blue-400" size={24} />
                  </div>
                  <span className="text-xs px-2 py-1 bg-gray-700 rounded-full text-gray-300">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="text-xs px-2 py-1 bg-gray-700/50 rounded-md text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-sm text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    <FiGithub size={16} />
                    Código
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 text-sm text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    <FiExternalLink size={16} />
                    Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;