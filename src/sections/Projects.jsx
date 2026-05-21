import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowUpRight, FiGithub, FiLayers, FiZap, FiTarget } from 'react-icons/fi';

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative grid grid-cols-1 lg:grid-cols-12 gap-12 py-24 border-b border-white/5"
    >
      {/* Visual / Screenshot Side */}
      <div className={`lg:col-span-7 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
        <div className="relative aspect-[16/9] bg-premium-card border border-white/5 overflow-hidden group-hover:border-premium-accent/30 transition-all duration-700 shadow-2xl">
          {/* Mockup Overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-premium-bg via-transparent to-transparent opacity-60 z-10" />
          
          <motion.img 
            src={project.image} 
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out"
          />

          {/* Floating HUD Meta */}
          <div className="absolute bottom-6 left-6 z-20">
            <div className={`px-3 py-1 rounded-sm border border-current bg-premium-bg/80 backdrop-blur-md ${project.statusColor}`}>
              <span className="font-mono text-[8px] uppercase font-black tracking-widest">{project.status}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content Side */}
      <div className={`lg:col-span-5 flex flex-col justify-center ${index % 2 === 0 ? 'lg:order-2 lg:pl-12' : 'lg:order-1 lg:pr-12'}`}>
        <div className="mb-6 flex items-center gap-4">
          <span className="font-mono text-xs text-premium-accent font-bold tracking-widest opacity-50">#0{index + 1}</span>
          <div className="h-px w-12 bg-white/10" />
        </div>

        <h3 className="text-4xl md:text-6xl font-extrabold text-white mb-8 tracking-tighter uppercase leading-[0.9]">
          {project.title}
        </h3>

        <p className="text-premium-muted text-lg mb-10 leading-relaxed font-light">
          {project.longDesc}
        </p>

        {/* Technical Highlights */}
        <div className="grid grid-cols-2 gap-8 mb-12 border-l border-white/5 pl-8 py-2">
          <div>
            <div className="flex items-center gap-2 mb-2 text-white/40">
               <FiLayers size={12} />
               <span className="text-[9px] font-bold uppercase tracking-widest">Architecture</span>
            </div>
            <p className="text-xs text-white/80 font-medium">{project.arch}</p>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-2 text-white/40">
               <FiTarget size={12} />
               <span className="text-[9px] font-bold uppercase tracking-widest">Objective</span>
            </div>
            <p className="text-xs text-white/80 font-medium">{project.goal}</p>
          </div>
        </div>

        {/* Stack & Links */}
        <div className="flex flex-wrap gap-3 mb-12">
          {project.stack.map((s, i) => (
            <span key={i} className="text-[9px] font-mono text-premium-muted border border-white/10 px-2 py-1 rounded-sm">
              {s}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-8">
          {project.link !== "#" && (
             <a 
               href={project.link} 
               target="_blank" 
               rel="noopener noreferrer"
               className="btn-luxury-primary text-xs"
             >
               Launch Experience
             </a>
          )}
          <a href="https://github.com/JeffersonTeles" target="_blank" className="text-white/20 hover:text-white transition-colors">
            <FiGithub size={20} />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Caixa Viva",
      longDesc: "A robust financial check-in SaaS designed for micro-entrepreneurs. Focuses on hyper-efficient data entry and visual cash flow projection.",
      arch: "Next.js / Supabase Realtime",
      goal: "MEI Financial Stability",
      stack: ["Next.js", "Supabase", "TypeScript", "Tailwind"],
      status: "Production Ready",
      statusColor: "text-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.2)]",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1600",
      link: "#"
    },
    {
      title: "VIDA Platform",
      longDesc: "A complete ecosystem for health management and AI-driven diagnostic assistance.",
      arch: "Microservices / AI APIs",
      goal: "Health Optimization",
      stack: ["React", "Node.js", "Python", "PostgreSQL"],
      status: "Beta Deployment",
      statusColor: "text-premium-accent",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1600",
      link: "#"
    },
    {
      title: "Bot Afiliados ML",
      longDesc: "Intelligent automation monitoring multiple marketplaces to rank and distribute high-ROI offers via WhatsApp.",
      arch: "Headless Browser / LLM Filter",
      goal: "Marketing Automation",
      stack: ["Node.js", "Puppeteer", "OpenAI", "SQLite"],
      status: "Operational",
      statusColor: "text-blue-400",
      image: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?auto=format&fit=crop&q=80&w=1600",
      link: "#"
    }
  ];

  return (
    <section id="projects" className="py-40 bg-premium-bg border-y border-white/5">
      <div className="premium-container">
        <div className="mb-32">
          <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-white/20 mb-8 block">
            03 / Selected Works
          </span>
          <h2 className="text-6xl md:text-[12rem] font-extrabold text-white leading-[0.8] uppercase tracking-cinematic opacity-10 select-none absolute left-0 -mt-20">
            Portfolio
          </h2>
          <h2 className="text-5xl md:text-8xl font-extrabold text-white leading-[0.9] uppercase tracking-cinematic relative z-10">
            Curated<br />Engineering.
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
