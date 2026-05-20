import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const values = ["Autonomia", "Impacto real", "Aprendizado contínuo"];

  return (
    <section id="about" className="py-24 bg-dark-bg">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7">
            <div className="section-title">
              <span className="w-8 h-px bg-dark-terminal" />
              01 / Sobre Mim
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
              Da infraestrutura física para o <span className="text-dark-accent">desenvolvimento de produtos</span>.
            </h2>

            <div className="space-y-6 text-dark-muted text-lg leading-relaxed">
              <p>
                Minha jornada na tecnologia começou com as mãos na massa: redes, Linux e hardware. Essa base técnica sólida me deu a disciplina necessária para entender como as coisas funcionam "debaixo do capô".
              </p>
              <p>
                Atualmente, como <span className="text-white font-medium">Analista de Suporte Júnior na FaturÁgil</span>, aprendi a lidar com problemas reais de usuários e a importância de sistemas estáveis. Essa experiência foi o combustível para minha transição para o desenvolvimento.
              </p>
              <p>
                Hoje, curso Engenharia de Software na FAG e foco em construir soluções de alto impacto usando IA e automação. Não estou apenas escrevendo código, estou construindo ferramentas que resolvem dores reais.
              </p>
            </div>

            {/* Values */}
            <div className="mt-12 flex flex-wrap gap-4">
              {values.map((val, i) => (
                <div 
                  key={i}
                  className="px-4 py-2 border border-dark-terminal/10 bg-dark-terminal/5 rounded-sm"
                >
                  <span className="font-mono text-xs text-dark-terminal uppercase tracking-widest">{val}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Avatar/Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Geometric Frame */}
              <div className="absolute inset-0 border-2 border-dark-accent/20 rotate-45 animate-[spin_20s_linear_infinite]" />
              <div className="absolute inset-0 border border-dark-terminal/20 -rotate-12 animate-[spin_15s_linear_infinite_reverse]" />
              
              {/* Image Placeholder with Geometric Pattern */}
              <div className="absolute inset-4 bg-dark-card overflow-hidden flex items-center justify-center border border-white/10 group">
                <svg viewBox="0 0 100 100" className="w-2/3 h-2/3 text-dark-accent opacity-20 group-hover:scale-110 transition-transform duration-700">
                  <path d="M50 0 L100 25 L100 75 L50 100 L0 75 L0 25 Z" fill="none" stroke="currentColor" strokeWidth="1" />
                  <path d="M50 20 L80 35 L80 65 L50 80 L20 65 L20 35 Z" fill="none" stroke="currentColor" strokeWidth="0.5" />
                  <circle cx="50" cy="50" r="5" fill="currentColor" />
                </svg>
                
                {/* Visual Glitch Lines */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute h-px w-full bg-dark-accent/20 top-1/4 animate-[glitch-line_3s_infinite]" />
                  <div className="absolute h-px w-full bg-dark-terminal/20 top-2/3 animate-[glitch-line_4s_infinite_reverse]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
