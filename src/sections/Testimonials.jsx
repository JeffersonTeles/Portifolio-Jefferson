import React from "react";
import { motion } from "framer-motion";

const stats = [
  { value: "4+", label: "Anos de Experiência" },
  { value: "10+", label: "Projetos Entregues" },
  { value: "15+", label: "Tecnologias Dominadas" },
  { value: "3", label: "Produtos em Produção" },
  { value: "100%", label: "Comprometimento" },
  { value: "4+", label: "Anos de Experiência" },
  { value: "10+", label: "Projetos Entregues" },
  { value: "15+", label: "Tecnologias Dominadas" },
  { value: "3", label: "Produtos em Produção" },
  { value: "100%", label: "Comprometimento" },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-black border-y border-white/[0.03] overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-10 pointer-events-none" />

      <div className="flex gap-20 animate-marquee-slow whitespace-nowrap">
        {stats.map((s, i) => (
          <div key={i} className="flex items-center gap-20 shrink-0">
            <div className="flex flex-col items-center gap-1">
              <span className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                {s.value}
              </span>
              <span className="text-[10px] font-mono text-white/30 uppercase tracking-[0.3em]">
                {s.label}
              </span>
            </div>
            <span className="text-white/5 text-4xl font-bold select-none">
              /
            </span>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes marquee-slow {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-slow {
          animation: marquee-slow 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
