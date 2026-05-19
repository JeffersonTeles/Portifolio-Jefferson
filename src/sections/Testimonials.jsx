import React from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    { name: "Carlos Silva", role: "CEO @ TechFlow", content: "O Jefferson transformou nossa operação com automações incríveis. Superou todas as expectativas." },
    { name: "Ana Oliveira", role: "Product Manager", content: "Trabalho impecável na integração de IA. A interface ficou extremamente intuitiva." },
    { name: "Roberto Junior", role: "Fundador @ StartupX", content: "Precisão técnica e olhar de design. Um dos melhores desenvolvedores com quem já trabalhei." },
    { name: "Mariana Costa", role: "Diretora de Marketing", content: "As APIs desenvolvidas pelo Jefferson são rápidas e extremamente robustas. Recomendo fortemente." }
  ];

  return (
    <section className="py-24 md:py-32 bg-inherit overflow-hidden border-y border-lusion-text/5">
      <div className="container-lusion mb-16">
        <span className="text-sm font-bold tracking-lusion-wide uppercase text-lusion-primary flex items-center gap-4">
          <span className="w-8 h-px bg-lusion-primary" />
          05 / Testimonials
        </span>
      </div>

      <div className="relative flex overflow-x-hidden">
        <div className="animate-marquee-slow whitespace-nowrap flex items-center">
          {testimonials.concat(testimonials).map((item, idx) => (
            <div key={idx} className="min-w-[400px] md:min-w-[600px] mx-10 p-12 border border-lusion-text/5 bg-lusion-text/[0.02] rounded-sm">
              <p className="text-xl md:text-2xl font-medium mb-8 leading-relaxed italic text-lusion-text/80">
                "{item.content}"
              </p>
              <div>
                <p className="text-sm font-bold tracking-lusion-wide uppercase text-lusion-text">{item.name}</p>
                <p className="text-[10px] font-bold tracking-lusion-wide uppercase text-lusion-text/30">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .animate-marquee-slow {
          animation: marquee-slow 60s linear infinite;
        }
        @keyframes marquee-slow {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
