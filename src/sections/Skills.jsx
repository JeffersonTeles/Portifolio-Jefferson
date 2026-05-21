import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiReact, SiTypescript, SiNextdotjs, SiSupabase, SiNodedotjs, 
  SiPostgresql, SiTailwindcss, SiFramer, SiSpringboot,
  SiLinux, SiDocker, SiOpenai, SiArduino
} from 'react-icons/si';

const TechModule = ({ name, icon: Icon, description, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="p-8 border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] hover:border-premium-accent/30 transition-all duration-500 group"
  >
    <div className="flex items-center gap-4 mb-6">
      <div className="w-10 h-10 flex items-center justify-center bg-premium-accent/5 text-premium-accent rounded-sm group-hover:bg-premium-accent group-hover:text-black transition-all duration-500">
        <Icon size={20} />
      </div>
      <h4 className="text-white font-bold tracking-tight">{name}</h4>
    </div>
    <p className="text-premium-muted text-xs leading-relaxed uppercase tracking-widest opacity-60 group-hover:opacity-100 transition-opacity">
      {description}
    </p>
  </motion.div>
);

const Skills = () => {
  const stack = [
    { name: "React / Next.js", icon: SiNextdotjs, description: "Advanced patterns & premium UI" },
    { name: "TypeScript", icon: SiTypescript, description: "Technical rigor & type-safety" },
    { name: "Supabase / Postgres", icon: SiSupabase, description: "Architecting data reliability" },
    { name: "Node.js / Java", icon: SiNodedotjs, description: "Scalable backend systems" },
    { name: "AI / Automation", icon: SiOpenai, description: "Intelligent workflow integration" },
    { name: "Linux / Infrastructure", icon: SiLinux, description: "Core technical foundation" },
    { name: "Embedded (ESP32)", icon: SiArduino, description: "Hardware layer exploration" },
    { name: "Tailwind / Motion", icon: SiFramer, description: "High-end creative coding" }
  ];

  return (
    <section id="stack" className="py-40 bg-premium-bg">
      <div className="premium-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div className="max-w-2xl">
            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-white/20 mb-8 block">
              02 / Capabilities
            </span>
            <h2 className="text-5xl md:text-8xl font-extrabold text-white leading-[0.9] uppercase tracking-cinematic">
              Technical<br />Matrix.
            </h2>
          </div>
          <p className="text-premium-muted text-sm md:text-lg max-w-xs font-light leading-relaxed">
            A curated selection of tools and languages that empower high-performance product building.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stack.map((tech, i) => (
            <TechModule key={i} {...tech} index={i} />
          ))}
        </div>

        {/* Decorative Divider */}
        <div className="mt-32 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      </div>
    </section>
  );
};

export default Skills;
