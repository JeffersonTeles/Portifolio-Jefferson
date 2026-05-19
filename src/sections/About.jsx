import React from 'react';
import { motion } from 'framer-motion';
import SplitText from '../components/SplitText';
import Parallax from '../components/Parallax';
import GithubStats from '../components/GithubStats';

const About = () => {
  return (
    <section id="about" className="section-lusion bg-white overflow-hidden">
      <div className="container-lusion">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Section Indicator */}
          <div className="lg:col-span-2">
            <span className="text-sm font-bold tracking-lusion-wide uppercase text-lusion-primary flex items-center gap-4">
              <span className="w-8 h-px bg-lusion-primary" />
              01 / Sobre
            </span>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-6">
            <h2 className="mb-12">
              <SplitText text="Transformando idéias em " />
              <span className="text-lusion-primary">
                <SplitText text="experiências" delay={0.5} />
              </span>
              <SplitText text=" digitais tangíveis." delay={0.8} />
            </h2>

            <Parallax offset={20}>
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-6 text-lg md:text-xl text-lusion-text/60 leading-relaxed"
              >
                <p>
                  Com foco em automação, IA e desenvolvimento full-stack, eu ajudo empresas a 
                  digitalizarem processos complexos através de interfaces intuitivas e back-ends 
                  extremamente robustos.
                </p>
                <p>
                  Meu trabalho é focado na interseção entre design minimalista e engenharia de precisão, 
                  garantindo que cada linha de código contribua para uma performance excepcional 
                  e uma experiência de usuário memorável.
                </p>
              </motion.div>
            </Parallax>

            <GithubStats />
          </div>

          {/* Stats/Facts */}
          <div className="lg:col-span-4 flex flex-wrap lg:flex-col justify-center gap-8 md:gap-12 border-l border-lusion-text/5 pl-8 md:pl-12">
            <div className="mb-8 p-4 border border-dashed border-lusion-text/20 rounded-sm">
              <p className="text-[10px] font-bold tracking-lusion-wide uppercase text-lusion-primary mb-2">Histórico Profissional</p>
              <p className="text-xs text-lusion-text/40 italic">[Experiências a inserir]</p>
            </div>
            {[
              { label: 'Anos de Experiência', value: '03+' },
              { label: 'Projetos Entregues', value: '40+' },
              { label: 'Automações Ativas', value: '100+' },
            ].map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="min-w-[140px]"
              >
                <p className="text-4xl md:text-5xl font-bold tracking-lusion-tighter mb-1">{stat.value}</p>
                <p className="text-[10px] font-bold tracking-lusion-wide uppercase text-lusion-text/40">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
