import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowUpRight, FiGithub, FiX, FiCheckCircle } from 'react-icons/fi';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: "caixaviva",
      title: "Caixa Viva",
      category: "SaaS / Fintech",
      desc: "Financial check-in solution for micro-entrepreneurs.",
      stack: ["Next.js", "Supabase", "Tailwind"],
      status: "In Development",
      statusColor: "text-amber-400",
      link: "#"
    },
    {
      id: "escudo",
      title: "Escudo",
      category: "AI / Security",
      desc: "Deepfake detection platform for the Brazilian market.",
      stack: ["Next.js", "AI APIs", "Python"],
      status: "Beta Access",
      statusColor: "text-luxury-accent",
      link: "#"
    },
    {
      id: "casamento",
      title: "Wedding Site",
      category: "Web Application",
      desc: "Full RSVP and gift list platform with payment integration.",
      stack: ["Next.js", "Vercel", "Stripe"],
      status: "Active Production",
      statusColor: "text-emerald-400",
      link: "https://casamento-ten-rho.vercel.app"
    }
  ];

  return (
    <section id="projects" className="py-40 bg-luxury-bg border-y border-white/5">
      <div className="premium-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-32">
          <div className="max-w-2xl">
            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-white/20 mb-8 block">
              02 / Curated Portfolio
            </span>
            <h2 className="text-5xl md:text-8xl font-extrabold uppercase leading-[0.9]">
              Selected<br />Works
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1px bg-white/5 border border-white/5">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: i * 0.2 }}
              onClick={() => setSelectedProject(project)}
              className="bg-luxury-bg p-12 group cursor-pointer relative overflow-hidden"
            >
              {/* Card Hover Effect */}
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-center mb-12">
                  <span className={`text-[8px] font-bold uppercase tracking-[0.3em] ${project.statusColor}`}>
                    {project.status}
                  </span>
                  <FiArrowUpRight size={20} className="text-white/20 group-hover:text-luxury-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500" />
                </div>

                <span className="text-[10px] uppercase tracking-widest text-white/40 mb-4">{project.category}</span>
                <h3 className="text-3xl font-bold text-white mb-6 tracking-tighter uppercase">{project.title}</h3>
                <p className="text-luxury-muted text-sm leading-relaxed mb-12 flex-1">{project.desc}</p>
                
                <div className="flex flex-wrap gap-4 pt-8 border-t border-white/5">
                  {project.stack.map((s, si) => (
                    <span key={si} className="text-[9px] font-bold uppercase tracking-widest text-white/40">{s}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] flex items-center justify-center p-6 bg-black/95 backdrop-blur-xl"
          >
            <motion.div 
              initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 40, opacity: 0 }}
              className="bg-luxury-bg border border-white/10 w-full max-w-4xl p-12 md:p-20 relative"
            >
              <button onClick={() => setSelectedProject(null)} className="absolute top-12 right-12 text-white/20 hover:text-white transition-colors">
                <FiX size={32} />
              </button>

              <div className="max-w-2xl">
                <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-luxury-accent mb-8 block">Project Analysis</span>
                <h2 className="text-5xl md:text-7xl font-bold uppercase mb-12 leading-tight">{selectedProject.title}</h2>
                
                <div className="space-y-12">
                  <div>
                    <p className="text-xl md:text-2xl text-luxury-muted leading-relaxed italic">
                      "A strategic solution for modern digital environments."
                    </p>
                  </div>
                  
                  <div className="flex gap-8">
                    {selectedProject.link !== "#" && (
                      <a href={selectedProject.link} target="_blank" className="btn-luxury-primary">Live Experience</a>
                    )}
                    <a href="#" className="btn-luxury-outline">Source Files</a>
                  </div>
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
