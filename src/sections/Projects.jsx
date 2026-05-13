import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiMessageCircle, FiBarChart2, FiUsers, FiGlobe, FiStar, FiCpu } from 'react-icons/fi';

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const projects = [
    {
      title: "NEXUS BOT",
      subtitle: "Sistema de Automação WhatsApp",
      description: "Plataforma inteligente para automação de atendimento, disparo em massa e integração com CRM. Processa milhares de mensagens simultaneamente com IA.",
      tech: ["Node.js", "WhatsApp API", "MongoDB", "Redis", "OpenAI"],
      icon: FiMessageCircle,
      github: "#",
      demo: "#",
      metrics: ["98% uptime", "10k+ msgs/dia", "IA integrada"],
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      title: "QUANTUM DASH",
      subtitle: "Dashboard Analytics",
      description: "Dashboard de análise de dados com visualizações em tempo real, predições por IA e métricas avançadas para tomada de decisão.",
      tech: ["React", "Next.js", "Supabase", "D3.js", "TensorFlow"],
      icon: FiBarChart2,
      github: "#",
      demo: "#",
      metrics: ["Real-time", "IA predictions", "95% accuracy"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "AFFILIATE X",
      subtitle: "Sistema de Afiliados",
      description: "Plataforma completa para gestão de afiliados com rastreamento em tempo real, comissões automáticas e dashboard analítico.",
      tech: ["TypeScript", "Node.js", "PostgreSQL", "Redis", "Bull"],
      icon: FiUsers,
      github: "#",
      demo: "#",
      metrics: ["Real-time tracking", "Auto payments", "Scalable"],
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "AI GATEWAY",
      subtitle: "API de Integração IA",
      description: "Gateway unificado para integração com múltiplos modelos de IA (OpenAI, Anthropic, Google) com cache inteligente e fallback automático.",
      tech: ["Python", "FastAPI", "Docker", "Redis", "Kubernetes"],
      icon: FiCpu,
      github: "#",
      demo: "#",
      metrics: ["<50ms latency", "99.99% uptime", "Multi-model"],
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="projects" className="relative py-32 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              PROJETOS //
            </span>
          </h2>
          <div className="w-32 h-px bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto shadow-[0_0_20px_#0ff]" />
          <p className="text-gray-400 mt-8 max-w-2xl mx-auto font-mono text-sm">
            [ SISTEMAS EM PRODUÇÃO // STATUS: OPERACIONAL ]
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              onHoverStart={() => setHoveredIndex(idx)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="group perspective-1000"
            >
              <div className="relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-xl rounded-2xl border border-cyan-500/30 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="p-4 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                      <project.icon className="text-cyan-400" size={32} />
                    </div>
                    <div className="flex gap-2">
                      {project.metrics.map((metric, mIdx) => (
                        <span key={mIdx} className="text-xs px-2 py-1 bg-cyan-500/10 rounded-full text-cyan-400 border border-cyan-500/30 font-mono">
                          {metric}
                        </span>
                      ))}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-cyan-400/60 text-sm font-mono mb-4">
                    {project.subtitle}
                  </p>
                  
                  <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="text-xs px-3 py-1 bg-gray-800/50 rounded-full text-gray-300 border border-gray-700 font-mono hover:border-cyan-500/50 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-6">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-gray-400 hover:text-cyan-400 transition-all duration-300 group/btn"
                    >
                      <FiGithub size={18} />
                      <span>REPOSITÓRIO</span>
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-gray-400 hover:text-cyan-400 transition-all duration-300 group/btn"
                    >
                      <FiExternalLink size={18} />
                      <span>DEMO ONLINE</span>
                    </a>
                  </div>
                </div>

                {hoveredIndex === idx && (
                  <div className="absolute inset-0 border-2 border-cyan-500/50 rounded-2xl pointer-events-none animate-pulse-border" />
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 font-mono text-xs">
            [ MAIS PROJETOS EM DESENVOLVIMENTO // 2025 ]
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
