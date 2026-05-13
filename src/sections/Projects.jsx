import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiMessageCircle, FiBarChart2, FiUsers, FiGlobe } from 'react-icons/fi';

const Projects = () => {
  const projects = [
    {
      title: "Bot WhatsApp",
      description: "Sistema de automação para atendimento via WhatsApp com integração de APIs.",
      tech: ["Node.js", "WhatsApp API", "MongoDB"],
      icon: FiMessageCircle,
      github: "#",
      demo: "#"
    },
    {
      title: "Dashboard Analytics",
      description: "Plataforma de análise de dados com dashboards interativos e métricas em tempo real.",
      tech: ["React", "Next.js", "Supabase"],
      icon: FiBarChart2,
      github: "#",
      demo: "#"
    },
    {
      title: "Sistema de Afiliados",
      description: "Plataforma completa para gestão de campanhas de afiliados com rastreamento.",
      tech: ["TypeScript", "Node.js", "PostgreSQL"],
      icon: FiUsers,
      github: "#",
      demo: "#"
    },
    {
      title: "API Gateway",
      description: "API gateway para integração com modelos de IA e processamento de dados.",
      tech: ["Python", "FastAPI", "Docker"],
      icon: FiGlobe,
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section className="section-premium">
      <div className="container-premium">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Projetos</h2>
          <div className="section-divider" />
          <p className="section-subtitle text-sm">
            Projetos em desenvolvimento e produção
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="card-premium"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-2 bg-white/[0.02] rounded-lg">
                  <project.icon size={20} className="text-white/40" />
                </div>
                <span className="text-xs px-2 py-1 bg-white/[0.02] rounded text-white/30">
                  Em desenvolvimento
                </span>
              </div>

              <h3 className="text-lg font-medium text-white mb-2">{project.title}</h3>
              <p className="text-white/40 text-sm mb-4 leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, techIdx) => (
                  <span key={techIdx} className="text-xs px-2 py-1 bg-white/[0.02] rounded text-white/30">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a href={project.github} className="flex items-center gap-2 text-sm text-white/40 hover:text-white/60 transition-colors">
                  <FiGithub size={14} /> Código
                </a>
                <a href={project.demo} className="flex items-center gap-2 text-sm text-white/40 hover:text-white/60 transition-colors">
                  <FiExternalLink size={14} /> Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
