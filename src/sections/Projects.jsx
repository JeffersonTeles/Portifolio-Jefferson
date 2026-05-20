import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const Projects = () => {
  const projects = [
    {
      name: "Caixa Viva",
      desc: "SaaS financeiro para MEIs focado em check-in de fluxo de caixa.",
      stack: ["Next.js", "Supabase", "Tailwind"],
      status: "Em dev",
      statusColor: "text-yellow-400",
      statusBg: "bg-yellow-400/10",
      link: "#"
    },
    {
      name: "Escudo",
      desc: "Plataforma de detecção de deepfakes e conteúdo IA para o mercado BR.",
      stack: ["Next.js", "IA APIs", "Python"],
      status: "Em dev",
      statusColor: "text-yellow-400",
      statusBg: "bg-yellow-400/10",
      link: "#"
    },
    {
      name: "Bot Afiliados ML",
      desc: "Ranqueia ofertas ML/Shopee via IA no WhatsApp automaticamente.",
      stack: ["Node.js", "Puppeteer", "WhatsApp API"],
      status: "Em dev",
      statusColor: "text-yellow-400",
      statusBg: "bg-yellow-400/10",
      link: "#"
    },
    {
      name: "Site de Casamento",
      desc: "Plataforma de RSVP + lista de presentes com integração de pagamentos.",
      stack: ["Next.js", "Vercel", "Tailwind"],
      status: "Produção",
      statusColor: "text-dark-terminal",
      statusBg: "bg-dark-terminal/10",
      link: "https://casamento-ten-rho.vercel.app"
    },
    {
      name: "Attack Shark X11",
      desc: "Driver e configurador de mouse gamer no Linux via WebHID.",
      stack: ["WebHID", "udev", "JavaScript"],
      status: "Concluído",
      statusColor: "text-dark-muted",
      statusBg: "bg-white/5",
      link: "https://github.com/JeffersonTeles/attack-shark-x11"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-dark-bg">
      <div className="container-custom">
        <div className="section-title mb-16">
          <span className="w-8 h-px bg-dark-terminal" />
          <span className="mono-tag">03 / Projetos Selecionados</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-card group relative p-8 flex flex-col h-full overflow-hidden"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-dark-accent/0 group-hover:bg-dark-accent/5 transition-colors duration-500" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <div className={`px-2 py-1 rounded-sm border border-white/5 ${project.statusBg}`}>
                    <span className={`font-mono text-[8px] font-bold uppercase tracking-widest ${project.statusColor}`}>
                      {project.status}
                    </span>
                  </div>
                  <div className="flex gap-4">
                    <a href={project.link} target="_blank" className="text-dark-muted hover:text-white transition-colors">
                      <FiGithub size={18} />
                    </a>
                    {project.link !== "#" && (
                      <a href={project.link} target="_blank" className="text-dark-accent hover:text-white transition-colors">
                        <FiExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-3 group-hover:text-dark-accent transition-colors">
                  {project.name}
                </h3>
                
                <p className="text-dark-muted text-sm mb-8 leading-relaxed flex-1">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
                  {project.stack.map((s, si) => (
                    <span key={si} className="text-[9px] font-mono text-dark-terminal opacity-60 uppercase tracking-tighter">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Line Glow */}
              <div className="absolute bottom-0 left-0 w-0 h-px bg-dark-accent group-hover:w-full transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
