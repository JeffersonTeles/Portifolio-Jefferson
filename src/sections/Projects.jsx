import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiGithub, FiX, FiCpu, FiCalendar } from 'react-icons/fi';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: "caixaviva",
      name: "Caixa Viva",
      desc: "SaaS financeiro para MEIs focado em check-in de fluxo de caixa.",
      longDesc: "Plataforma robusta para microempreendedores gerenciarem suas finanças diárias. O foco principal é a velocidade de inserção de dados e a visualização clara do saldo projetado.",
      stack: ["Next.js", "Supabase", "Tailwind"],
      challenge: "Garantir a persistência de dados em tempo real com baixa latência usando Supabase Realtime.",
      status: "Em dev",
      statusColor: "text-yellow-400",
      statusBg: "bg-yellow-400/10",
      link: "#"
    },
    {
      id: "escudo",
      name: "Escudo",
      desc: "Plataforma de detecção de deepfakes e conteúdo IA para o mercado BR.",
      longDesc: "Ferramenta de segurança digital que utiliza modelos de IA para analisar e identificar mídias manipuladas, focando em combater a desinformação no Brasil.",
      stack: ["Next.js", "IA APIs", "Python"],
      challenge: "Integração eficiente entre o frontend React e os modelos de processamento de imagem pesados no backend.",
      status: "Em dev",
      statusColor: "text-yellow-400",
      statusBg: "bg-yellow-400/10",
      link: "#"
    },
    {
      id: "botml",
      name: "Bot Afiliados ML",
      desc: "Ranqueia ofertas ML/Shopee via IA no WhatsApp automaticamente.",
      longDesc: "Automação inteligente que monitora APIs de grandes marketplaces, ranqueia as melhores ofertas e as envia formatadas para grupos de WhatsApp.",
      stack: ["Node.js", "Puppeteer", "WhatsApp API"],
      challenge: "Contornar bloqueios de bots e garantir o processamento assíncrono de milhares de ofertas por hora.",
      status: "Em dev",
      statusColor: "text-yellow-400",
      statusBg: "bg-yellow-400/10",
      link: "#"
    },
    {
      id: "casamento",
      name: "Site de Casamento",
      desc: "Plataforma de RSVP + lista de presentes com integração de pagamentos.",
      longDesc: "Um projeto pessoal que se tornou um produto real. Oferece confirmação de presença, lista de presentes integrada e painel administrativo para os noivos.",
      stack: ["Next.js", "Vercel", "Tailwind"],
      challenge: "Implementar um sistema de gerenciamento de estado complexo para a lista de presentes dinâmica.",
      status: "Produção",
      statusColor: "text-dark-terminal",
      statusBg: "bg-dark-terminal/10",
      link: "https://casamento-ten-rho.vercel.app"
    },
    {
      id: "attackshark",
      name: "Attack Shark X11",
      desc: "Driver e configurador de mouse gamer no Linux via WebHID.",
      longDesc: "Utilitário técnico que permite a configuração de botões e DPI de mouses chineses no Linux, utilizando a API WebHID do navegador.",
      stack: ["WebHID", "udev", "JavaScript"],
      challenge: "Comunicação direta com hardware via pacotes HID crus em sistemas Linux.",
      status: "Concluído",
      statusColor: "text-dark-muted",
      statusBg: "bg-white/5",
      link: "https://github.com/JeffersonTeles/attack-shark-x11"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-dark-bg border-t border-white/5">
      <div className="premium-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div className="max-w-2xl">
            <div className="section-title mb-8">
              <span className="w-8 h-px bg-dark-terminal" />
              <span className="mono-tag">03 / Projetos Selecionados</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Engineering<br />Performance.
            </h2>
          </div>
          
          <div className="flex flex-col items-end">
            <p className="text-dark-muted text-xs md:text-sm tracking-widest uppercase mb-6">
              Precisão técnica em cada pixel.
            </p>
            <a 
              href="https://calendly.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-[10px] font-bold tracking-widest uppercase text-dark-accent border border-dark-accent/20 px-6 py-3 rounded-full hover:bg-dark-accent hover:text-dark-bg transition-all duration-500"
            >
              <FiCalendar /> Agendar Reunião
            </a>
          </div>
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
              onClick={() => setSelectedProject(project)}
              className="glass-card group relative p-8 flex flex-col h-full overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0 bg-dark-accent/0 group-hover:bg-dark-accent/5 transition-colors duration-500" />
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <div className={`px-2 py-1 rounded-sm border border-white/5 ${project.statusBg}`}>
                    <span className={`font-mono text-[8px] font-bold uppercase tracking-widest ${project.statusColor}`}>
                      {project.status}
                    </span>
                  </div>
                  <FiExternalLink className="text-dark-muted group-hover:text-dark-accent transition-colors" size={18} />
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-dark-accent transition-colors">{project.name}</h3>
                <p className="text-dark-muted text-sm mb-8 leading-relaxed flex-1">{project.desc}</p>
                <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
                  {project.stack.map((s, si) => (
                    <span key={si} className="text-[9px] font-mono text-dark-terminal opacity-60 uppercase tracking-tighter">{s}</span>
                  ))}
                </div>
              </div>
              <div className="absolute bottom-0 left-0 w-0 h-px bg-dark-accent group-hover:w-full transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-black/95 backdrop-blur-md"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }}
              className="bg-dark-card border border-white/10 w-full max-w-4xl max-h-[90vh] overflow-y-auto p-8 md:p-16 relative rounded-sm"
            >
              <button onClick={() => setSelectedProject(null)} className="absolute top-8 right-8 text-white/40 hover:text-white transition-colors"><FiX size={32} /></button>
              
              <div className="mb-12">
                <div className="flex items-center gap-4 mb-6">
                  <span className="mono-tag">Detalhes do Sistema</span>
                  <div className={`px-2 py-1 rounded-sm ${selectedProject.statusBg}`}>
                    <span className={`text-[8px] font-bold uppercase tracking-widest ${selectedProject.statusColor}`}>{selectedProject.status}</span>
                  </div>
                </div>
                <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-8 tracking-tighter">{selectedProject.name}</h2>
                <div className="flex flex-wrap gap-3">
                  {selectedProject.stack.map((s, i) => (
                    <span key={i} className="px-4 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-mono text-dark-accent">{s}</span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                <div className="space-y-12">
                  <div>
                    <h4 className="font-mono text-xs text-dark-terminal uppercase mb-4 tracking-[0.2em]">Visão Geral</h4>
                    <p className="text-dark-muted text-lg leading-relaxed">{selectedProject.longDesc}</p>
                  </div>
                  <div>
                    <h4 className="font-mono text-xs text-dark-terminal uppercase mb-4 tracking-[0.2em]">O Desafio Técnico</h4>
                    <p className="text-dark-muted leading-relaxed italic border-l-2 border-dark-accent/20 pl-8 py-2">{selectedProject.challenge}</p>
                  </div>
                </div>
                <div className="bg-black/60 border border-white/5 p-10 rounded-sm flex flex-col justify-center text-center">
                  <FiCpu size={56} className="text-dark-accent mx-auto mb-8 opacity-40" />
                  <p className="text-[10px] text-white/30 font-mono uppercase tracking-[0.4em] mb-12">System_Uplink_Standard</p>
                  {selectedProject.link !== "#" && (
                    <a href={selectedProject.link} target="_blank" className="btn-primary w-full">
                      <FiExternalLink /> Ver Projeto Real
                    </a>
                  )}
                  <a href="https://github.com/JeffersonTeles" target="_blank" className="mt-6 text-[10px] font-mono text-white/30 hover:text-white uppercase tracking-widest transition-colors">Acessar Repositório</a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
