import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const tags = ["Autonomia", "Impacto real", "Aprendizado contínuo"];

  return (
    <section id="about" className="py-24 bg-dark-bg/50 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-7">
            <div className="section-title mb-8">
              <span className="w-8 h-px bg-dark-terminal" />
              <span className="mono-tag">01 / Sobre Mim</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
              A base da <span className="text-dark-terminal">infraestrutura</span> somada à paixão pelo <span className="text-dark-accent">produto</span>.
            </h2>

            <div className="space-y-6 text-dark-muted text-lg leading-relaxed max-w-2xl">
              <p>
                Minha trajetória na tecnologia começou com uma base técnica sólida em <span className="text-white">redes, Linux e hardware</span>. Essa vivência me ensinou a pensar criticamente sobre como os sistemas operam do nível mais baixo até a interface.
              </p>
              <p>
                Como <span className="text-white">Analista de Suporte Júnior na FaturÁgil</span>, refinei minha capacidade de diagnóstico e resolução de problemas sob pressão, mantendo sempre o foco na experiência final do usuário.
              </p>
              <p>
                Atualmente, estou canalizando esse conhecimento para o <span className="text-white">desenvolvimento de software</span>. Curso Engenharia de Software na FAG e foco em construir soluções de alto impacto usando as stacks mais modernas de <span className="text-dark-accent">IA e Web</span>.
              </p>
            </div>

            {/* Values Tags */}
            <div className="mt-12 flex flex-wrap gap-4">
              {tags.map((tag, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="px-4 py-2 border border-white/5 bg-white/[0.02] rounded-sm"
                >
                  <span className="font-mono text-[10px] text-dark-terminal uppercase tracking-[0.2em]">{tag}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* SVG Avatar / Geometric Visual */}
          <div className="lg:col-span-5 relative flex justify-center">
            <motion.div 
              initial={{ opacity: 0, rotate: -10 }}
              whileInView={{ opacity: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative w-full aspect-square max-w-[400px]"
            >
              {/* Outer Hexagon */}
              <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full text-dark-accent/10">
                <path d="M50 0 L93.3 25 L93.3 75 L50 100 L6.7 75 L6.7 25 Z" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </svg>
              
              {/* Inner Decoration */}
              <div className="absolute inset-8 border border-white/10 bg-dark-card/50 backdrop-blur-3xl overflow-hidden flex items-center justify-center rounded-sm">
                <svg viewBox="0 0 100 100" className="w-1/2 h-1/2 text-dark-accent opacity-20">
                   <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" className="animate-[spin_20s_linear_infinite]" />
                   <path d="M30 30 L70 70 M70 30 L30 70" stroke="currentColor" strokeWidth="1" />
                   <circle cx="50" cy="50" r="5" fill="currentColor" />
                </svg>
                
                {/* HUD Lines */}
                <div className="absolute top-4 left-4 font-mono text-[6px] text-dark-terminal opacity-40">
                  REF_JT_01 // SECURE_ACCESS
                </div>
                <div className="absolute bottom-4 right-4 font-mono text-[6px] text-dark-accent opacity-40">
                  COORD_53.45_24.95
                </div>
              </div>

              {/* Orbiting Elements */}
              <div className="absolute inset-0 animate-[spin_10s_linear_infinite]">
                 <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-dark-terminal rounded-full shadow-[0_0_10px_#00ff88]" />
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
