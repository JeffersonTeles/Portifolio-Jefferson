import React from 'react';
import { motion } from 'framer-motion';

const TimelineItem = ({ year, title, desc, isLast }) => (
  <div className="flex gap-8 relative pb-12">
    {!isLast && <div className="absolute left-[7px] top-8 w-px h-full bg-white/10" />}
    <div className="relative">
      <div className="w-[15px] h-[15px] rounded-full border-2 border-premium-accent bg-premium-bg z-10 relative" />
    </div>
    <div className="flex flex-col">
      <span className="font-mono text-[10px] text-premium-accent font-bold uppercase tracking-[0.2em] mb-2">{year}</span>
      <h4 className="text-white font-bold text-lg mb-2 tracking-tight">{title}</h4>
      <p className="text-premium-muted text-sm leading-relaxed max-w-md">{desc}</p>
    </div>
  </div>
);

const About = () => {
  const values = [
    "Software Architecture", 
    "AI Integration", 
    "Process Automation", 
    "Embedded Systems",
    "Linux Infrastructure",
    "Premium Frontend"
  ];

  const timeline = [
    { year: "2020", title: "Technical Genesis", desc: "Hands-on experience with hardware, Linux systems, and networking infrastructure." },
    { year: "2023", title: "Support Engineering", desc: "Diagnostic-first mindset as a Support Analyst at FaturÁgil, bridging user needs and software stability." },
    { year: "2024", title: "Product Building", desc: "Developing real-world SaaS, AI tools, and intelligent bots focused on scalability." },
    { year: "2026", title: "Junior Engineer", desc: "Pursuing Software Engineering at FAG, delivering high-performance digital products." }
  ];

  return (
    <section id="about" className="py-40 bg-premium-bg relative overflow-hidden">
      <div className="premium-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
          
          {/* Left: Narrative */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-white/20 mb-8 block">
                01 / Perspective
              </span>
              <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-12">
                From low-level <span className="text-premium-accent">infrastructure</span> to high-impact <span className="italic">digital products.</span>
              </h2>

              <div className="space-y-8 text-lg md:text-xl text-premium-muted leading-relaxed font-light">
                <p>
                  My journey started with the raw curiosity of how systems communicate. I built my foundation in <span className="text-white">redes, Linux, and ESP32 hardware</span>—understanding technology from the hardware layer up.
                </p>
                <p>
                  This technical rigor evolved during my time as a <span className="text-white">Support Analyst at FaturÁgil</span>, where I mastered the art of problem-solving under pressure. That diagnostic mindset is what I bring to my engineering today.
                </p>
                <p>
                  Today, I build <span className="text-white text-glow">intelligent solutions</span> that bridge the gap between complex automation and premium user experiences. I don't just code; I architect results.
                </p>
              </div>

              {/* Tag Cloud */}
              <div className="mt-16 flex flex-wrap gap-3">
                {values.map((val, i) => (
                  <span 
                    key={i}
                    className="px-4 py-2 border border-white/5 bg-white/[0.01] text-white/40 text-[10px] uppercase font-bold tracking-widest rounded-sm"
                  >
                    {val}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: Premium Timeline */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="bg-premium-card/50 border border-white/5 p-10 md:p-16 backdrop-blur-xl relative"
            >
              {/* Geometric Decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(circle_at_top_right,rgba(0,212,255,0.1),transparent)] pointer-events-none" />
              
              <h3 className="font-display text-2xl font-bold mb-16 uppercase tracking-tighter italic text-white/80">Trajectory</h3>
              
              <div className="flex flex-col">
                {timeline.map((item, i) => (
                  <TimelineItem 
                    key={i} 
                    {...item} 
                    isLast={i === timeline.length - 1} 
                  />
                ))}
              </div>
            </motion.div>
            
            {/* Visual Weight Object */}
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-premium-accent/5 rounded-full blur-[100px] pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
