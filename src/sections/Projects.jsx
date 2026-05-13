import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiMessageCircle, FiBarChart2, FiUsers, FiGlobe, FiStar } from 'react-icons/fi';

const Projects = () => {
  const projects = [
    {
      title: "Bot WhatsApp para Automação",
      description: "Bot inteligente para atendimento automatizado, envio de mensagens em massa e integração com APIs de CRM.",
      tech: ["Node.js", "WhatsApp API", "MongoDB", "Express"],
      icon: FiMessageCircle,
      github: "https://github.com/JeffersonTeles/bot-whatsapp",
      demo: "#",
      category: "Automação",
      gradient: "from-cyan-500/20 to-blue-500/20"
    },
    {
      title: "Dashboard Financeiro SaaS",
      description: "Plataforma para gestão de finanças pessoais com dashboards interativos e previsões usando IA.",
      tech: ["React", "Next.js", "Supabase", "Chart.js"],
      icon: FiBarChart2,
      github: "https://github.com/JeffersonTeles/dashboard-financeiro",
      demo: "#",
      category: "Dashboard",
      gradient: "from-purple-500/20 to-pink-500/20"
    },
    {
      title: "Sistema de Afiliados",
      description: "Plataforma completa para gestão de afiliados com rastreamento de links e comissões em tempo real.",
      tech: ["TypeScript", "Node.js", "PostgreSQL", "Redis"],
      icon: FiUsers,
      github: "https://github.com/JeffersonTeles/sistema-afiliados",
      demo: "#",
      category: "SaaS",
      gradient: "from-green-500/20 to-emerald-500/20"
    },
    {
      title: "API de Integração com IA",
      description: "API REST para integração com modelos de IA generativa, geração de texto e análise de dados.",
      tech: ["Python", "FastAPI", "OpenAI", "Docker"],
      icon: FiGlobe,
      github: "https://github.com/JeffersonTeles/api-ia",
      demo: "#",
      category: "API",
      gradient: "from-orange-500/20 to-red-500/20"
    }
  ];

  return (
    <section id="projects" className="relative py-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              PROJETOS //
            </span>
            <span className="text-white"> DESTAQUES</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full shadow-[0_0_15px_#0ff]" />
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Projetos em produção que combinam automação, IA e interfaces modernas
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative bg-gray-900/60 backdrop-blur-sm rounded-xl border border-gray-800 p-6 overflow-hidden hover:border-cyan-500/50 transition-all duration-500">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <project.icon className="text-cyan-400" size={24} />
                  </div>
                  <span className="text-xs px-3 py-1 bg-gray-800 rounded-full text-cyan-400 border border-cyan-500/30 font-mono">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="text-xs px-2 py-1 bg-gray-800/50 rounded-md text-gray-300 border border-gray-700 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-300 hover:text-cyan-400 transition-colors group/btn"
                  >
                    <FiGithub size={16} />
                    <span>Código</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-300 hover:text-cyan-400 transition-colors group/btn"
                  >
                    <FiExternalLink size={16} />
                    <span>Demo</span>
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
