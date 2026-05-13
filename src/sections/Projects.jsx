import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiMessageCircle, FiBarChart2, FiUsers, FiGlobe } from 'react-icons/fi';

const Projects = () => {
  const projects = [
    {
      title: "Bot WhatsApp",
      description: "Sistema de automação para atendimento via WhatsApp com integração de APIs e respostas inteligentes.",
      tech: ["Node.js", "WhatsApp API", "MongoDB"],
      icon: FiMessageCircle,
      github: "#",
      demo: "#",
      status: "Em produção"
    },
    {
      title: "Dashboard Analytics",
      description: "Plataforma de análise de dados com dashboards interativos e métricas em tempo real.",
      tech: ["React", "Next.js", "Supabase"],
      icon: FiBarChart2,
      github: "#",
      demo: "#",
      status: "Em desenvolvimento"
    },
    {
      title: "Sistema de Afiliados",
      description: "Plataforma completa para gestão de campanhas de afiliados com rastreamento e comissões.",
      tech: ["TypeScript", "Node.js", "PostgreSQL"],
      icon: FiUsers,
      github: "#",
      demo: "#",
      status: "MVP"
    },
    {
      title: "API IA Gateway",
      description: "API gateway para integração com modelos de IA generativa e processamento de linguagem natural.",
      tech: ["Python", "FastAPI", "OpenAI"],
      icon: FiGlobe,
      github: "#",
      demo: "#",
      status: "Em desenvolvimento"
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-white/[0.01]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Projetos
          </h2>
          <div className="w-12 h-px bg-white/10 mx-auto mb-8" />
          <p className="text-white/40">
            Projetos em desenvolvimento e produção
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              className="group"
            >
              <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-6 hover:border-white/[0.1] transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2 bg-white/[0.03] rounded-lg">
                    <project.icon size={20} className="text-white/40" />
                  </div>
                  <span className="text-xs px-2 py-1 bg-white/[0.02] rounded text-white/30">
                    {project.status}
                  </span>
                </div>

                <h3 className="text-lg font-medium text-white mb-2">
                  {project.title}
                </h3>
                
                <p className="text-white/40 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="text-xs px-2 py-1 bg-white/[0.02] rounded text-white/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-sm text-white/40 hover:text-white/60 transition-colors"
                  >
                    <FiGithub size={14} />
                    Código
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 text-sm text-white/40 hover:text-white/60 transition-colors"
                  >
                    <FiExternalLink size={14} />
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
