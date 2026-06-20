import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiBriefcase, FiBook, FiAward, FiCode, FiChevronRight, FiFilter } from "react-icons/fi";

const Curriculum = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [expandedItem, setExpandedItem] = useState(null);

  const curriculumData = {
    experience: [
      {
        id: 1,
        year: "2024 - Presente",
        title: "Software Engineer",
        company: "Empresa em Busca",
        location: "Cascavel, PR",
        description: "Desenvolvimento de aplicações web modernas com React, Next.js e Node.js. Implementação de automações com IA e integrações de sistemas complexos.",
        technologies: ["React", "Next.js", "Node.js", "Python", "AI/ML", "TypeScript"],
        type: "experience"
      },
      {
        id: 2,
        year: "2023 - 2024",
        title: "Support Engineer N2",
        company: "Empresa Anterior",
        location: "Remoto",
        description: "Suporte técnico avançado, diagnóstico de falhas complexas, gestão de tickets e SLAs. Desenvolvimento de scripts de automação para resolução de problemas.",
        technologies: ["Linux", "Python", "Bash", "Docker", "SQL", "Monitoring"],
        type: "experience"
      },
      {
        id: 3,
        year: "2020 - 2023",
        title: "IT Support Specialist",
        company: "Empresa Inicial",
        location: "Cascavel, PR",
        description: "Suporte técnico geral, administração de redes TCP/IP, gestão de servidores Linux Ubuntu/Debian, manutenção de hardware e infraestrutura física.",
        technologies: ["Linux", "Networking", "Hardware", "Windows Server", "Active Directory"],
        type: "experience"
      }
    ],
    education: [
      {
        id: 4,
        year: "2024 - Presente",
        title: "Engenharia de Software",
        institution: "Universidade",
        location: "Cascavel, PR",
        description: "Bacharelado em Engenharia de Software com foco em desenvolvimento de software de alta performance, arquitetura de sistemas e metodologias ágeis.",
        type: "education"
      },
      {
        id: 5,
        year: "2018 - 2022",
        title: "Técnico em Informática",
        institution: "Instituto Federal",
        location: "Cascavel, PR",
        description: "Formação técnica com ênfase em desenvolvimento de software, redes de computadores, banco de dados e segurança da informação.",
        type: "education"
      }
    ],
    certifications: [
      {
        id: 6,
        year: "2024",
        title: "AWS Cloud Practitioner",
        issuer: "Amazon Web Services",
        description: "Certificação fundamental em computação em nuvem AWS, cobrindo conceitos básicos de segurança, arquitetura e serviços.",
        type: "certification"
      },
      {
        id: 7,
        year: "2023",
        title: "Google Cloud Associate",
        issuer: "Google Cloud",
        description: "Certificação em fundamentos de Google Cloud Platform, incluindo compute, storage, database e serviços de rede.",
        type: "certification"
      },
      {
        id: 8,
        year: "2023",
        title: "React Advanced",
        issuer: "Meta",
        description: "Certificação avançada em React, cobrindo hooks, context API, performance optimization e padrões de arquitetura.",
        type: "certification"
      }
    ],
    skills: {
      frontend: ["React", "Next.js", "TypeScript", "TailwindCSS", "Framer Motion", "Vue.js"],
      backend: ["Node.js", "Python", "Express", "FastAPI", "GraphQL", "REST APIs"],
      database: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Supabase"],
      devops: ["Docker", "Git", "CI/CD", "AWS", "Vercel", "Linux"],
      tools: ["VS Code", "Postman", "Figma", "Jira", "Slack", "Notion"]
    }
  };

  const filters = [
    { id: "all", label: "Todos", icon: FiFilter },
    { id: "experience", label: "Experiência", icon: FiBriefcase },
    { id: "education", label: "Educação", icon: FiBook },
    { id: "certification", label: "Certificações", icon: FiAward }
  ];

  const filteredItems = activeFilter === "all" 
    ? [...curriculumData.experience, ...curriculumData.education, ...curriculumData.certifications]
    : activeFilter === "experience" 
      ? curriculumData.experience
      : activeFilter === "education"
        ? curriculumData.education
        : curriculumData.certifications;

  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  };

  return (
    <section id="curriculum" className="py-40 bg-black relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="premium-container relative z-10">
        <motion.div
          {...fadeUp}
          className="text-center mb-20"
        >
          <span className="text-[11px] font-medium uppercase tracking-[0.5em] text-white/30 mb-4 block">
            Currículo Completo
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-[1.1] mb-6">
            Minha <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Jornada</span>
          </h2>
          <p className="text-white/40 text-lg max-w-2xl mx-auto">
            Uma visão completa da minha trajetória profissional, acadêmica e técnica
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 ${
                activeFilter === filter.id
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25"
                  : "bg-white/5 border border-white/10 text-white/60 hover:bg-white/10 hover:text-white"
              }`}
            >
              <filter.icon size={16} />
              {filter.label}
            </button>
          ))}
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto space-y-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass-panel p-8 rounded-2xl hover:bg-white/[0.03] transition-all duration-300 cursor-pointer group"
                onClick={() => setExpandedItem(expandedItem === item.id ? null : item.id)}
              >
                <div className="flex items-start justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest">
                        {item.year}
                      </span>
                      {item.type === "experience" && <FiBriefcase className="w-4 h-4 text-white/40" />}
                      {item.type === "education" && <FiBook className="w-4 h-4 text-white/40" />}
                      {item.type === "certification" && <FiAward className="w-4 h-4 text-white/40" />}
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {item.title}
                    </h3>
                    
                    {item.company && (
                      <p className="text-white/60 text-sm mb-2">{item.company} · {item.location}</p>
                    )}
                    
                    {item.institution && (
                      <p className="text-white/60 text-sm mb-2">{item.institution} · {item.location}</p>
                    )}
                    
                    {item.issuer && (
                      <p className="text-white/60 text-sm mb-2">{item.issuer}</p>
                    )}
                    
                    <p className="text-white/40 text-sm leading-relaxed mb-4">
                      {item.description}
                    </p>

                    {item.technologies && (
                      <div className="flex flex-wrap gap-2">
                        {item.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-medium text-white/50 uppercase tracking-wider"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  
                  <motion.div
                    animate={{ rotate: expandedItem === item.id ? 90 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-white/30 group-hover:text-white transition-colors"
                  >
                    <FiChevronRight size={20} />
                  </motion.div>
                </div>

                <AnimatePresence>
                  {expandedItem === item.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden mt-6 pt-6 border-t border-white/[0.05]"
                    >
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-white/30 block mb-1">Tipo</span>
                          <span className="text-white capitalize">{item.type}</span>
                        </div>
                        <div>
                          <span className="text-white/30 block mb-1">Período</span>
                          <span className="text-white">{item.year}</span>
                        </div>
                        {item.company && (
                          <>
                            <div>
                              <span className="text-white/30 block mb-1">Empresa</span>
                              <span className="text-white">{item.company}</span>
                            </div>
                            <div>
                              <span className="text-white/30 block mb-1">Localização</span>
                              <span className="text-white">{item.location}</span>
                            </div>
                          </>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Skills Grid */}
        <motion.div
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.5 }}
          className="mt-24"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Skills</span> Técnicos
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(curriculumData.skills).map(([category, skills]) => (
              <div key={category} className="glass-panel p-6 rounded-2xl">
                <div className="flex items-center gap-2 mb-4">
                  <FiCode className="w-5 h-5 text-cyan-400" />
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                    {category}
                  </h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-white/60 hover:bg-white/10 hover:text-white transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Curriculum;
