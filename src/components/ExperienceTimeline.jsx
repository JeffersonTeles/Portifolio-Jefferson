import React from 'react';
import { motion } from 'framer-motion';

const ExperienceTimeline = () => {
  const experiences = [
    {
      company: "Freelance",
      role: "Especialista em Automação & IA",
      period: "2023 - Presente",
      description: "Desenvolvimento de agentes autônomos, integrações complexas de API e sistemas full-stack otimizados para escala.",
      techs: ["OpenAI", "Node.js", "Python", "React"]
    },
    {
      company: "Tech Solutions",
      role: "Full Stack Developer",
      period: "2021 - 2023",
      description: "Arquitetura de microsserviços e interfaces de alta performance para o setor financeiro e logístico.",
      techs: ["TypeScript", "NestJS", "Next.js", "PostgreSQL"]
    },
    {
      company: "Dev Studio",
      role: "Frontend Developer",
      period: "2019 - 2021",
      description: "Foco em UI/UX criativa e interações imersivas para portfólios e landing pages de alto padrão.",
      techs: ["React", "GSAP", "Tailwind", "Three.js"]
    }
  ];

  return (
    <div className="mt-20">
      <p className="text-[10px] font-bold tracking-widest uppercase text-lusion-primary mb-12">Trajetória Profissional</p>
      
      <div className="space-y-12">
        {experiences.map((exp, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 group border-b border-lusion-text/5 pb-8"
          >
            <div className="text-[10px] font-bold tracking-widest uppercase text-lusion-text/30 py-1">
              {exp.period}
            </div>
            
            <div className="md:col-span-2">
              <h3 className="text-xl font-bold tracking-tighter mb-2 group-hover:text-lusion-primary transition-colors">
                {exp.role}
              </h3>
              <p className="text-[10px] font-bold tracking-widest uppercase text-lusion-text mb-4">
                {exp.company}
              </p>
              <p className="text-sm text-lusion-text/60 leading-relaxed mb-6">
                {exp.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 content-start">
              {exp.techs.map((tech, i) => (
                <span key={i} className="text-[9px] font-bold tracking-widest uppercase border border-lusion-text/10 px-2 py-1 text-lusion-text/40">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceTimeline;
