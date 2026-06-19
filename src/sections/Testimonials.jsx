import React, { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

const CountUp = ({ target, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    const isNum = !isNaN(parseInt(target));
    if (!isNum) {
      setCount(target);
      return;
    }
    const end = parseInt(target);
    const duration = 1800;
    const start = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * end));
      if (progress >= 1) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  const display = typeof count === "number" ? `${count}${suffix}` : count;
  return <span ref={ref}>{display}</span>;
};

const stats = [
  { value: "4", suffix: "+", label: "Anos de Experiência" },
  { value: "10", suffix: "+", label: "Projetos Entregues" },
  { value: "15", suffix: "+", label: "Tecnologias Dominadas" },
  { value: "3", suffix: "", label: "Produtos em Produção" },
  { value: "100", suffix: "%", label: "Comprometimento" },
  { value: "4", suffix: "+", label: "Anos de Experiência" },
  { value: "10", suffix: "+", label: "Projetos Entregues" },
  { value: "15", suffix: "+", label: "Tecnologias Dominadas" },
  { value: "3", suffix: "", label: "Produtos em Produção" },
  { value: "100", suffix: "%", label: "Comprometimento" },
];

const Testimonials = () => (
  <section className="py-24 bg-black border-y border-white/[0.03] overflow-hidden relative">
    <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-10 pointer-events-none" />
    <div className="flex gap-20 animate-marquee-slow whitespace-nowrap">
      {stats.map((s, i) => (
        <div key={i} className="flex items-center gap-20 shrink-0">
          <div className="flex flex-col items-center gap-1">
            <span className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              <CountUp target={s.value} suffix={s.suffix} />
            </span>
            <span className="text-[10px] font-mono text-white/30 uppercase tracking-[0.3em]">
              {s.label}
            </span>
          </div>
          <span className="text-white/5 text-4xl font-bold select-none">/</span>
        </div>
      ))}
    </div>
    <style>{`
      @keyframes marquee-slow {
        0%   { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      .animate-marquee-slow { animation: marquee-slow 30s linear infinite; }
    `}</style>
  </section>
);

export default Testimonials;
