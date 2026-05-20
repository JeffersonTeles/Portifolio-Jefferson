import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const values = ["Autonomia", "Impacto real", "Aprendizado contínuo"];

  return (
    <section id="about" className="py-24 bg-dark-bg">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
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
                Atualmente, como Analista de Suporte Júnior na FaturÁgil, aprendi a lidar com problemas reais de usuários e a importância de sistemas estáveis. Essa experiência foi o combustível para minha transição para o desenvolvimento.
              </p>
              <p>
                Hoje, curso Engenharia de Software na FAG e foco em construir soluções de alto impacto usando IA e automação. Não estou apenas escrevendo código, estou construindo ferramentas que resolvem dores reais.
              </p>
            </div>

            <div className="mt-12 flex flex-wrap gap-4">
              {values.map((val, i) => (
                <div key={i} className="px-4 py-2 border border-dark-terminal/10 bg-dark-terminal/5 rounded-sm">
                  <span className="font-mono text-xs text-dark-terminal uppercase tracking-widest">{val}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative w-full aspect-square max-w-md mx-auto bg-dark-card border border-white/5 flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-2/3 h-2/3 text-dark-accent opacity-20">
                  <path d="M50 0 L100 25 L100 75 L50 100 L0 75 L0 25 Z" fill="none" stroke="currentColor" strokeWidth="1" />
                </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
