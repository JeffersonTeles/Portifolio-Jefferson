import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowUpRight, FiGithub, FiExternalLink } from 'react-icons/fi';

const ProjectCard = ({ id, name, desc, stack, status, statusColor, link, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative w-full border-b border-white/5 py-12 lg:py-20 cursor-default"
    >
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 lg:gap-12 relative z-10">
        
        {/* Left: ID & Info */}
        <div className="flex items-start gap-8 lg:gap-16 flex-1">
          <div className="relative pt-1">
            <span className="font-mono text-sm lg:text-lg text-dark-accent opacity-50">#{id}</span>
            {/* Animated line on hover */}
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: isHovered ? "100%" : 0 }}
              className="absolute -bottom-2 left-0 h-px bg-dark-accent"
            />
          </div>

          <div className="flex-1">
            <div className="flex items-center gap-4 mb-4">
              <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white group-hover:text-dark-accent transition-colors duration-500 tracking-premium">
                {name}
              </h3>
              <div className={`px-2 py-0.5 rounded-sm border border-current bg-transparent ${statusColor} opacity-70`}>
                <span className="font-mono text-[8px] lg:text-[10px] uppercase font-black tracking-[0.2em]">{status}</span>
              </div>
            </div>
            <p className="text-dark-muted text-sm md:text-lg lg:text-xl max-w-2xl font-light leading-relaxed">
              {desc}
            </p>
          </div>
        </div>

        {/* Right: Revealable Details */}
        <div className="flex flex-col lg:items-end gap-8 min-w-[200px]">
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className="flex flex-wrap lg:justify-end gap-3 max-w-[300px]"
              >
                {stack.map((s, i) => (
                  <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full font-mono text-[9px] text-white/40 uppercase tracking-tighter">
                    {s}
                  </span>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex items-center gap-6">
            {link && link !== "#" && (
              <a 
                href={link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white hover:text-dark-accent transition-colors group/link"
              >
                Launch
                <FiArrowUpRight className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
              </a>
            )}
            <a 
              href="https://github.com/JeffersonTeles" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-dark-muted hover:text-white transition-colors"
            >
              <FiGithub />
              Source
            </a>
          </div>
        </div>

      </div>

      {/* Subtle Background Glow */}
      <div className="absolute inset-0 bg-dark-accent/[0.01] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    {
      id: "01",
      name: "CAIXA VIVA",
      desc: "SaaS de check-in financeiro para MEIs — controle de caixa simplificado com dashboard visual.",
      stack: ["Next.js", "Supabase", "Tailwind", "TypeScript"],
      status: "Em desenvolvimento",
      statusColor: "text-yellow-400",
      link: "#"
    },
    {
      id: "02",
      name: "ESCUDO",
      desc: "Plataforma de detecção de deepfakes e conteúdo gerado por IA para o mercado brasileiro.",
      stack: ["Next.js", "IA APIs", "Python", "TypeScript"],
      status: "Em desenvolvimento",
      statusColor: "text-yellow-400",
      link: "#"
    },
    {
      id: "03",
      name: "BOT AFILIADOS ML",
      desc: "Bot que monitora, ranqueia via IA e envia ofertas do Mercado Livre e Shopee no WhatsApp.",
      stack: ["Node.js", "Puppeteer", "WhatsApp API", "SQLite"],
      status: "Em desenvolvimento",
      statusColor: "text-yellow-400",
      link: "#"
    },
    {
      id: "04",
      name: "CASAMENTO",
      desc: "Site com RSVP, lista de presentes e galeria para casamento real. Interface minimalista.",
      stack: ["Next.js", "Vercel", "Framer Motion"],
      status: "Em produção",
      statusColor: "text-dark-terminal",
      link: "https://casamento-ten-rho.vercel.app"
    },
    {
      id: "05",
      name: "ATTACK SHARK X11",
      desc: "Configuração de mouse gamer no Linux via WebHID e regras udev customizadas.",
      stack: ["Linux", "WebHID", "Shell Script"],
      status: "Concluído",
      statusColor: "text-dark-muted",
      link: "https://github.com/JeffersonTeles"
    }
  ];

  return (
    <section id="projects" className="bg-dark-bg border-t border-white/5 pt-32 pb-24">
      <div className="premium-container">
        <motion.h3 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-dark-accent text-sm tracking-[0.3em] uppercase mb-16"
        >
          projects.filter(p =&gt; p.impact &gt; 0)
        </motion.h3>

        <div className="flex flex-col">
          {projects.map((project, i) => (
            <ProjectCard key={i} {...project} index={i} />
          ))}
        </div>

        {/* Call to Action for more projects */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-20 text-center"
        >
          <a 
            href="https://github.com/JeffersonTeles" 
            target="_blank" 
            className="font-mono text-[10px] text-white/20 uppercase tracking-[0.4em] hover:text-dark-accent transition-colors"
          >
            // Explore full archive on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
