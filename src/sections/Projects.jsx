import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowUpRight, FiGithub, FiExternalLink } from 'react-icons/fi';

const Projects = () => {
  const projects = [
    {
      title: "Caixa Viva",
      desc: "SaaS de check-in financeiro para MEIs.",
      stack: ["Next.js", "Supabase", "Vercel"],
      status: "Em desenvolvimento",
      statusColor: "text-yellow-400",
      statusBg: "bg-yellow-400/10",
      link: "#",
    },
    {
      title: "Escudo",
      desc: "Detecção de deepfakes e conteúdo IA para o mercado BR.",
      stack: ["Next.js", "IA APIs", "Tailwind"],
      status: "Em desenvolvimento",
      statusColor: "text-yellow-400",
      statusBg: "bg-yellow-400/10",
      link: "#",
    },
    {
      title: "Bot Afiliados ML",
      desc: "Bot Node.js monitor de ofertas via Puppeteer e WhatsApp.",
      stack: ["Node.js", "Puppeteer", "WhatsApp API"],
      status: "Em desenvolvimento",
      statusColor: "text-yellow-400",
      statusBg: "bg-yellow-400/10",
      link: "#",
    },
    {
      title: "Casamento",
      desc: "Site de casamento com RSVP e lista de presentes.",
      stack: ["Next.js", "Vercel", "Framer Motion"],
      status: "Em produção",
      statusColor: "text-green-400",
      statusBg: "bg-green-400/10",
      link: "https://casamento-ten-rho.vercel.app",
    },
    {
      title: "Attack Shark X11 Driver",
      desc: "Configuração de mouse gamer no Linux via WebHID.",
      stack: ["Linux", "WebHID", "udev"],
      status: "Concluído",
      statusColor: "text-dark-muted",
      statusBg: "bg-white/5",
      link: "https://github.com/JeffersonTeles/attack-shark-x11",
    }
  ];

  return (
    <section id="projects" className="py-24 bg-dark-bg">
      <div className="container-custom">
        <div className="section-title mb-16">
          <span className="w-8 h-px bg-dark-terminal" />
          03 / Projetos
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-dark-card border border-white/5 p-8 rounded-sm hover:border-dark-accent/50 transition-all duration-500"
            >
              {/* Status Tag */}
              <div className={`absolute top-6 right-6 px-2 py-1 rounded-sm ${p.statusBg} border border-white/5`}>
                <span className={`text-[8px] font-mono font-bold uppercase tracking-widest ${p.statusColor}`}>
                  {p.status}
                </span>
              </div>

              <h3 className="text-2xl font-bold mb-3 group-hover:text-dark-accent transition-colors">
                {p.title}
              </h3>
              
              <p className="text-dark-muted text-sm mb-8 leading-relaxed line-clamp-2">
                {p.desc}
              </p>

              <div className="flex flex-wrap gap-2 mb-10">
                {p.stack.map((s, si) => (
                  <span key={si} className="font-mono text-[9px] text-dark-terminal/60 bg-dark-terminal/5 px-2 py-0.5 border border-dark-terminal/10 rounded-sm uppercase tracking-tighter">
                    {s}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-6">
                <a 
                  href={p.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-white hover:text-dark-accent transition-colors"
                >
                  <FiExternalLink /> Live Demo
                </a>
                <a 
                  href="#" 
                  className="flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-dark-muted hover:text-white transition-colors"
                >
                  <FiGithub /> Repo
                </a>
              </div>

              {/* Decorative Corner */}
              <div className="absolute bottom-0 right-0 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <div className="absolute bottom-0 right-0 w-full h-[1px] bg-dark-accent" />
                <div className="absolute bottom-0 right-0 h-full w-[1px] bg-dark-accent" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
