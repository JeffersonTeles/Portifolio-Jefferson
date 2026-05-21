import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const timeline = [
    { year: "2020", title: "Infrastructure Origins", desc: "Hands-on with networking, Linux administration, and hardware optimization." },
    { year: "2023", title: "Strategic Support", desc: "Analista de Suporte at FaturÁgil. Mastering diagnostics and complex problem-solving." },
    { year: "2024", title: "Product Building", desc: "Developing SaaS (Caixa Viva), security tools (Escudo), and intelligent automations." },
    { year: "2026", title: "Software Engineering", desc: "Pursuing academic and professional excellence. The builder era." }
  ];

  return (
    <section id="about" className="py-40 bg-builder-bg relative">
      <div className="container mx-auto px-8 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          
          {/* Left Column: The Narrative */}
          <div className="lg:col-span-7">
            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-builder-accent mb-8 block italic">
              &gt; whoami
            </span>
            <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-[1.1] mb-12 uppercase tracking-tighter">
              A builder driven by <span className="text-builder-accent">curiosity</span> and technical <span className="italic">precision.</span>
            </h2>
            
            <div className="space-y-8 text-xl text-builder-muted font-light leading-relaxed max-w-2xl">
              <p>
                Iniciei no hardware, dominando <span className="text-white">redes e servidores Linux</span>. Essa base sólida me deu a disciplina necessária para entender como os sistemas funcionam do nível mais baixo até a interface.
              </p>
              <p>
                Como <span className="text-white">Analista de Suporte</span>, aprendi a diagnosticar dores reais de usuários e a importância de sistemas estáveis. Hoje, canalizo essa experiência para o desenvolvimento de software de alta performance.
              </p>
              <p>
                Meu foco é a interseção entre <span className="text-white">IA, Automação e Design Moderno</span>. Construo ferramentas que não apenas funcionam, mas resolvem problemas estratégicos com elegância.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mt-16">
              {["Autonomia", "Impacto Real", "Aprendizado Contínuo", "Open Source"].map((tag, i) => (
                <span key={i} className="px-4 py-2 border border-white/5 bg-white/[0.01] text-[10px] font-mono text-builder-terminal uppercase tracking-widest">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: Visual Timeline */}
          <div className="lg:col-span-5 relative">
            <div className="bg-builder-card p-12 border border-white/5 relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-32 h-32 bg-builder-accent/5 blur-[60px] group-hover:bg-builder-accent/10 transition-colors" />
               
               <div className="space-y-12 relative z-10">
                 {timeline.map((item, i) => (
                   <div key={i} className="flex gap-6 group/item">
                     <div className="flex flex-col items-center">
                        <div className="w-2.5 h-2.5 rounded-full border border-builder-accent group-hover/item:bg-builder-accent transition-colors duration-500 shadow-[0_0_10px_rgba(0,212,255,0.3)]" />
                        {i !== timeline.length - 1 && <div className="w-px h-full bg-white/5 mt-2" />}
                     </div>
                     <div className="pb-4">
                        <span className="text-[10px] font-mono text-builder-accent/60 block mb-1">{item.year}</span>
                        <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-2">{item.title}</h4>
                        <p className="text-xs text-builder-muted leading-relaxed font-medium">{item.desc}</p>
                     </div>
                   </div>
                 ))}
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
