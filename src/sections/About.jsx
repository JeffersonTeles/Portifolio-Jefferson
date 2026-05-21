import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-32 bg-luxury-bg">
      <div className="premium-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          
          {/* Section Indicator */}
          <div className="lg:col-span-3">
            <div className="sticky top-32">
              <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-white/20 mb-8 block">
                01 / Strategy & History
              </span>
              <div className="flex flex-col gap-6">
                {["Efficiency", "Reliability", "Architecture"].map((val, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="w-1.5 h-1.5 bg-luxury-accent scale-0 group-hover:scale-100 transition-transform duration-500" />
                    <span className="text-[11px] font-medium uppercase tracking-widest text-luxury-muted group-hover:text-white transition-colors">
                      {val}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Narrative */}
          <div className="lg:col-span-9">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-medium mb-16 leading-[1.1] text-white"
            >
              Transforming complex technical challenges into <span className="italic text-luxury-muted">seamless digital products.</span>
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-lg text-luxury-muted leading-relaxed">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <p className="mb-8">
                  My background is rooted in technical precision. Starting with Linux architecture and infrastructure, I developed a critical understanding of how systems communicate at the core level.
                </p>
                <p>
                  As a Software Engineer focused on <span className="text-white">Full-stack development</span>, I bridge the gap between robust backend architecture and elegant, responsive front-end experiences.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <p className="mb-8 border-l border-luxury-accent/30 pl-8">
                  Currently pursuing Software Engineering at FAG, I focus on delivering impact through clean code and scalable solutions. My goal is to build software that is not only functional but <span className="text-white">technically superior</span>.
                </p>
                <div className="flex gap-12 mt-12">
                  <div>
                    <span className="text-3xl font-bold text-white block mb-2">03+</span>
                    <span className="text-[9px] uppercase tracking-widest">Years XP</span>
                  </div>
                  <div>
                    <span className="text-3xl font-bold text-white block mb-2">40+</span>
                    <span className="text-[9px] uppercase tracking-widest">Projects</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
