import React from 'react';
import { motion } from 'framer-motion';

const Timeline = () => {
  const events = [
    { year: '2020', title: 'TI Técnica', desc: 'Redes, Linux e Hardware' },
    { year: '2023', title: 'Suporte de Software', desc: 'Analista @ FaturÁgil' },
    { year: '2024', title: 'Produtos Próprios', desc: 'Caixa Viva, Escudo, Bots' },
    { year: '2026', title: 'Dev Júnior', desc: 'Engenharia de Software', current: true },
  ];

  return (
    <div className="mt-12 space-y-8">
      {events.map((event, i) => (
        <div key={i} className="flex gap-6 relative group">
          {i !== events.length - 1 && (
            <div className="absolute left-[11px] top-8 w-px h-full bg-white/5 group-hover:bg-dark-accent/20 transition-colors" />
          )}
          <div className="relative">
            <div className={`w-[23px] h-[23px] rounded-full border-2 flex items-center justify-center bg-dark-bg z-10 relative ${event.current ? 'border-dark-terminal shadow-[0_0_10px_#00ff88]' : 'border-white/10'}`}>
              {event.current && <div className="w-2 h-2 bg-dark-terminal rounded-full animate-pulse" />}
            </div>
          </div>
          <div className="pb-2">
            <div className="flex items-center gap-3 mb-1">
              <span className={`font-mono text-xs ${event.current ? 'text-dark-terminal' : 'text-dark-muted'}`}>{event.year}</span>
              <span className="w-4 h-px bg-white/10" />
              <h4 className="text-sm font-bold text-white/90">{event.title}</h4>
            </div>
            <p className="text-xs text-dark-muted font-light tracking-wide">{event.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

const About = () => {
  const tags = ["Autonomia", "Impacto Real", "Aprendizado Contínuo", "Open Source"];

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }
  });

  return (
    <section id="about" className="section-container relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
        
        {/* Left: Narrative Content */}
        <div className="lg:col-span-7">
          <motion.h3 {...fadeUp(0.1)} className="font-mono text-dark-accent text-sm tracking-[0.3em] uppercase mb-8">
            &gt; whoami
          </motion.h3>
          
          <motion.div {...fadeUp(0.2)} className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              Uma transição forjada por <span className="text-dark-terminal">curiosidade</span> e <span className="text-dark-accent italic underline underline-offset-8 decoration-1 decoration-dark-accent/30">intencionalidade</span>.
            </h2>
            <p className="text-dark-muted text-lg leading-relaxed max-w-2xl font-light">
              Comecei consertando computadores e configurando redes. Passei pelo suporte técnico de software, onde aprendi a ouvir e diagnosticar. 
              Hoje, construo produtos reais unindo <span className="text-white font-medium">IA, automação e código</span>. 
              A tecnologia para mim não é o fim, é o meio para criar impacto real.
            </p>
          </motion.div>

          <motion.div {...fadeUp(0.4)} className="flex flex-wrap gap-3 mt-10">
            {tags.map((tag, i) => (
              <span key={i} className="px-4 py-2 border border-white/5 bg-white/[0.02] rounded-sm font-mono text-[10px] text-dark-muted uppercase tracking-widest hover:border-dark-accent/30 hover:text-dark-accent transition-all cursor-default">
                {tag}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Right: Technical Avatar & Timeline */}
        <div className="lg:col-span-5 w-full">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative aspect-square max-w-[380px] mx-auto lg:ml-auto"
          >
            {/* Hexagon SVG Avatar */}
            <div className="absolute inset-0 flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-full h-full text-dark-accent/10">
                <path d="M50 0 L93.3 25 L93.3 75 L50 100 L6.7 75 L6.7 25 Z" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </svg>
              
              <div className="absolute inset-10 border border-white/10 bg-dark-card/30 backdrop-blur-xl overflow-hidden flex items-center justify-center rounded-sm group">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#00d4ff05_0%,transparent_70%)]" />
                
                {/* Tech HUD internal */}
                <div className="relative z-10 flex flex-col items-center">
                   <span className="font-mono text-4xl font-black text-white/90 tracking-tighter group-hover:text-dark-accent transition-colors duration-500">JT</span>
                   <div className="w-8 h-px bg-dark-terminal/40 mt-2" />
                   <span className="font-mono text-[8px] text-dark-terminal uppercase mt-4 tracking-[0.2em] opacity-50">Identity_Verified</span>
                </div>

                {/* Animated HUD Lines */}
                <div className="absolute inset-0 overflow-hidden opacity-20">
                  <div className="absolute h-px w-full bg-dark-accent top-1/4 -left-full animate-[scan_4s_linear_infinite]" />
                  <div className="absolute w-px h-full bg-dark-terminal left-1/3 -top-full animate-[scan-v_6s_linear_infinite_1s]" />
                </div>
              </div>
            </div>
            
            {/* Glow */}
            <div className="absolute inset-10 bg-dark-accent/5 rounded-full blur-3xl animate-pulse-slow" />
          </motion.div>

          <motion.div {...fadeUp(0.5)}>
            <Timeline />
          </motion.div>
        </div>

      </div>

      <style jsx>{`
        @keyframes scan {
          0% { left: -100%; opacity: 0; }
          50% { opacity: 1; }
          100% { left: 100%; opacity: 0; }
        }
        @keyframes scan-v {
          0% { top: -100%; opacity: 0; }
          50% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default About;
