import React, { useEffect, useRef, useState } from "react";
import { useInView, motion } from "framer-motion";
import { FiStar } from "react-icons/fi";

const CountUp = ({ target, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    const isNum = !isNaN(parseInt(target));
    if (!isNum) { setCount(target); return; }
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

const testimonials = [
  {
    name: "Matheus Simonetto",
    role: "Co-fundador · Projeto Maestria",
    avatar: "MS",
    text: "Jefferson entregou o frontend do nosso sistema em tempo recorde. A qualidade da UI e a organização do código superaram as expectativas — ele pensa em produto, não só em código.",
    stars: 5,
  },
  {
    name: "Professor Orientador FAG",
    role: "TCC · Faculdade FAG",
    avatar: "FA",
    text: "Projeto de TCC desenvolvido com excelência técnica. A plataforma Maestria Docente apresentou arquitetura sólida, boas práticas e uma entrega visual de alto nível.",
    stars: 5,
  },
  {
    name: "Equipe FaturÁgil",
    role: "Analista de Suporte · FaturÁgil",
    avatar: "FG",
    text: "Proativo, rápido e sempre buscando automatizar o que era manual. Resolveu problemas críticos de suporte e ainda criou ferramentas internas que reduziram o tempo de atendimento.",
    stars: 5,
  },
];

const Testimonials = () => (
  <section className="py-24 bg-black border-y border-white/[0.03] overflow-hidden relative">
    {/* Stats marquee */}
    <div className="relative mb-20">
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
    </div>

    {/* Testimonials cards */}
    <div className="max-w-6xl mx-auto px-6">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-[11px] font-medium uppercase tracking-[0.5em] text-white/30 mb-12 text-center"
      >
        // O que dizem
      </motion.p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="flex flex-col gap-5 p-8 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-white/10 transition-colors"
          >
            <div className="flex gap-1">
              {Array.from({ length: t.stars }).map((_, j) => (
                <FiStar key={j} size={12} className="text-white/40 fill-white/40" />
              ))}
            </div>
            <p className="text-white/60 text-sm leading-relaxed font-light flex-1">
              "{t.text}"
            </p>
            <div className="flex items-center gap-3 pt-4 border-t border-white/[0.05]">
              <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-[10px] font-bold text-white/60 shrink-0">
                {t.avatar}
              </div>
              <div>
                <p className="text-white/80 text-xs font-semibold">{t.name}</p>
                <p className="text-white/30 text-[10px] font-mono uppercase tracking-widest">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
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
