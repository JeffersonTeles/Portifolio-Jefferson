import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowUpRight, FiGithub, FiX, FiPlay } from 'react-icons/fi';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "IA Automation Hub",
      category: "Automação / IA",
      description: "Plataforma centralizada para gestão de agentes autônomos e fluxos de trabalho inteligentes.",
      longDescription: "Este projeto resolve o problema de fragmentação em fluxos de trabalho de IA. Desenvolvemos um hub que integra OpenAI, LangChain e automações customizadas em uma única interface intuitiva. O sistema permite que empresas configurem 'agentes' que respondem a gatilhos específicos, economizando centenas de horas manuais por mês.",
      tags: ["Python", "OpenAI", "React", "Docker"],
      link: "#",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1600",
      video: null // Placeholder for real video path
    },
    {
      title: "FinTech Dashboard",
      category: "Aplicação Web / SaaS",
      description: "Interface de alta performance para análise de dados financeiros em tempo real.",
      longDescription: "Um dashboard financeiro focado em ultra-performance. Utilizando WebSockets para dados em tempo real e visualizações complexas com D3.js, o sistema oferece uma experiência de trading e análise sem atrasos. A arquitetura foi otimizada para lidar com milhares de atualizações por segundo.",
      tags: ["TypeScript", "Next.js", "Tailwind", "D3.js"],
      link: "#",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1600",
      video: null
    }
  ];

  const handleProjectHover = (title) => {
    window.dispatchEvent(new CustomEvent('ai-log', { 
      detail: `Inicializando módulo: ${title}...` 
    }));
  };

  return (
    <section id="projects" className="section-lusion">
      <div className="container-lusion">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div className="max-w-2xl">
            <span className="text-sm font-bold tracking-lusion-wide uppercase text-lusion-primary flex items-center gap-4 mb-8">
              <span className="w-8 h-px bg-lusion-primary" />
              02 / Projetos
            </span>
            <h2 className="leading-tight">Trabalhos<br />Selecionados</h2>
          </div>
          <p className="text-lusion-text/40 text-xs md:text-sm tracking-lusion-wide uppercase mb-4">
            Uma vitrine de engenharia de precisão.
          </p>
        </div>

        <div className="space-y-32 md:space-y-48">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              onMouseEnter={() => handleProjectHover(project.title)}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 group"
            >
              <div 
                className="lg:col-span-7 overflow-hidden bg-lusion-text/5 aspect-[16/9] relative rounded-sm cursor-pointer"
                data-cursor="view"
                onClick={() => setSelectedProject(project)}
              >
                <motion.div 
                  initial={{ clipPath: 'inset(100% 0 0 0)' }}
                  whileInView={{ clipPath: 'inset(0% 0 0 0)' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: [0.6, 0.05, -0.01, 0.9] }}
                  className="w-full h-full relative"
                >
                  <motion.img 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 1.2, ease: [0.6, 0.05, -0.01, 0.9] }}
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 transition-all duration-1000"
                  />
                  {project.video && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                        <FiPlay size={24} fill="currentColor" />
                      </div>
                    </div>
                  )}
                </motion.div>
              </div>

              <div className="lg:col-span-5 flex flex-col justify-center">
                <span className="text-[10px] md:text-xs font-bold tracking-lusion-wide uppercase text-lusion-primary mb-4">
                  {project.category}
                </span>
                <h3 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-lusion-tighter mb-6 group-hover:text-lusion-primary transition-colors duration-500">
                  {project.title}
                </h3>
                <p className="text-lusion-text/60 text-lg md:text-xl mb-8 max-w-md leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-3 mb-12">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-[10px] font-bold tracking-lusion-wide uppercase border border-lusion-text/10 px-3 py-1 text-lusion-text/40 group-hover:border-lusion-primary group-hover:text-lusion-primary transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-8">
                  <button 
                    onClick={() => setSelectedProject(project)}
                    className="flex items-center gap-2 text-xs font-bold tracking-lusion-wide uppercase group/link"
                  >
                    Explorar Projeto
                    <FiArrowUpRight className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform duration-300" />
                  </button>
                  <a href="#" className="flex items-center gap-2 text-xs font-bold tracking-lusion-wide uppercase text-lusion-text/30 hover:text-lusion-text transition-colors">
                    <FiGithub />
                    Código Fonte
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12"
          >
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-lusion-bg/95 backdrop-blur-xl"
              onClick={() => setSelectedProject(null)}
            />
            
            <motion.div 
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="relative w-full max-w-6xl bg-inherit border border-lusion-text/5 overflow-hidden rounded-sm max-h-[90vh] overflow-y-auto custom-scrollbar shadow-2xl"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-8 right-8 z-10 text-lusion-text/40 hover:text-lusion-primary transition-colors"
              >
                <FiX size={32} />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="h-64 lg:h-auto overflow-hidden bg-black flex items-center justify-center">
                  {selectedProject.video ? (
                    <video 
                      src={selectedProject.video} 
                      autoPlay 
                      loop 
                      muted 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
                  )}
                </div>
                
                <div className="p-8 md:p-16">
                  <span className="text-xs font-bold tracking-lusion-wide uppercase text-lusion-primary mb-6 block">
                    {selectedProject.category}
                  </span>
                  <h2 className="text-5xl md:text-7xl font-bold tracking-lusion-tighter mb-8">
                    {selectedProject.title}
                  </h2>
                  <div className="space-y-8">
                    <p className="text-xl md:text-2xl text-lusion-text/60 leading-relaxed font-medium italic">
                      {selectedProject.description}
                    </p>
                    <p className="text-lg text-lusion-text/80 leading-relaxed">
                      {selectedProject.longDescription}
                    </p>
                    <div className="flex flex-wrap gap-4 pt-8 border-t border-lusion-text/5">
                      {selectedProject.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="text-xs font-bold tracking-lusion-wide uppercase border border-lusion-text/10 px-4 py-2">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-8 pt-8">
                      <a href={selectedProject.link} className="btn-lusion-primary">
                        Lançar Projeto
                        <FiArrowUpRight />
                      </a>
                      <a href="#" className="btn-lusion">
                        Github Repo
                      </a>
                    </div>
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
