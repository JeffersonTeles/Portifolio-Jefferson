import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowUpRight, FiLayers, FiZap, FiTarget, FiBox } from 'react-icons/fi';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="group relative flex flex-col lg:flex-row gap-12 py-24 border-b border-white/5"
    >
      {/* Visual Indicator (Number) */}
      <div className="hidden lg:flex flex-col justify-between py-2">
        <span className="font-mono text-sm text-builder-accent opacity-40">#0{index + 1}</span>
        <motion.div 
          initial={{ height: 0 }}
          whileInView={{ height: "100px" }}
          viewport={{ once: true }}
          className="w-px bg-builder-accent/20 mx-auto" 
        />
      </div>

      {/* Content Column */}
      <div className="flex-1">
        <div className="flex flex-wrap items-center gap-4 mb-6">
          <h3 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight text-white group-hover:text-builder-accent transition-colors duration-500">
            {project.title}
          </h3>
          <div className={`px-3 py-1 text-[10px] font-bold uppercase tracking-widest border rounded-none ${project.statusColor} bg-white/5`}>
            {project.status}
          </div>
        </div>

        <p className="text-builder-muted text-lg md:text-xl font-light mb-12 max-w-3xl leading-relaxed">
          {project.longDesc}
        </p>

        {/* Dynamic Meta Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="p-6 bg-white/[0.02] border border-white/5">
            <div className="flex items-center gap-2 mb-3 text-builder-accent">
              <FiLayers size={14} />
              <span className="text-[10px] font-bold uppercase tracking-widest">Stack</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((s, i) => (
                <span key={i} className="text-[10px] font-mono text-white/40">{s}</span>
              ))}
            </div>
          </div>
          <div className="p-6 bg-white/[0.02] border border-white/5">
            <div className="flex items-center gap-2 mb-3 text-builder-accent">
              <FiTarget size={14} />
              <span className="text-[10px] font-bold uppercase tracking-widest">Desafio</span>
            </div>
            <p className="text-[11px] text-white/60 leading-relaxed font-medium italic">{project.challenge}</p>
          </div>
          <div className="p-6 bg-white/[0.02] border border-white/5 flex flex-col justify-center items-center text-center group/btn cursor-pointer">
            {project.link !== "#" ? (
              <a href={project.link} target="_blank" className="flex flex-col items-center gap-2">
                <FiBox size={24} className="text-white/20 group-hover/btn:text-builder-accent transition-colors" />
                <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/20 group-hover/btn:text-white transition-colors">
                  Launch App
                </span>
              </a>
            ) : (
              <div className="flex flex-col items-center gap-2 grayscale">
                <FiBox size={24} className="text-white/5" />
                <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/5">
                  Private Access
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Decorative Hover Line */}
      <div className="absolute bottom-0 left-0 w-0 h-px bg-builder-accent group-hover:w-full transition-all duration-1000" />
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Caixa Viva",
      longDesc: "SaaS financeiro focado em MEIs para gestão simplificada de fluxo de caixa e projeção de faturamento.",
      stack: ["Next.js", "Supabase", "Tailwind", "TypeScript"],
      challenge: "Persistência de dados real-time e UX de inserção rápida.",
      status: "Em Desenvolvimento",
      statusColor: "text-yellow-400 border-yellow-400/20",
      link: "#"
    },
    {
      title: "Escudo",
      longDesc: "Plataforma de detecção de manipulação de mídia e IA focada no mercado de segurança digital brasileiro.",
      stack: ["Next.js", "Python", "IA APIs", "Supabase"],
      challenge: "Processamento de imagem e latência de resposta da IA.",
      status: "Em Desenvolvimento",
      statusColor: "text-yellow-400 border-yellow-400/20",
      link: "#"
    },
    {
      title: "Bot Afiliados ML",
      longDesc: "Automação de inteligência comercial que monitora ofertas e distribui via WhatsApp com filtros de ROI.",
      stack: ["Node.js", "Puppeteer", "WhatsApp API", "SQLite"],
      challenge: "Escalabilidade de scraping e bypassing de restrições.",
      status: "Operacional",
      statusColor: "text-blue-400 border-blue-400/20",
      link: "#"
    },
    {
       title: "Casamento",
       longDesc: "Plataforma completa de RSVP, lista de presentes e gestão de eventos com interface premium.",
       stack: ["Next.js", "Vercel", "Framer Motion"],
       challenge: "Integração de pagamentos e UX fluída para usuários leigos.",
       status: "Em Produção",
       statusColor: "text-builder-terminal border-builder-terminal/20",
       link: "https://casamento-ten-rho.vercel.app"
    }
  ];

  return (
    <section id="projects" className="py-40 bg-builder-bg">
      <div className="container mx-auto px-8 md:px-16">
        <div className="mb-32">
          <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-builder-accent mb-8 block">
            01 / Curated Works
          </span>
          <h2 className="text-5xl md:text-8xl font-extrabold text-white tracking-tighter uppercase leading-[0.85]">
            Engineering<br />Experience.
          </h2>
        </div>

        <div className="flex flex-col">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
