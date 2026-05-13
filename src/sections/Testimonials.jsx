import React from 'react';
import { motion } from 'framer-motion';
import { FiStar } from 'react-icons/fi';
import { fadeInUp, staggerContainer } from '../utils/animations';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Carlos Silva',
      role: 'CEO, TechStartup',
      avatar: '👨‍💼',
      content:
        'Jefferson transformou completamente nossa visão de produto. Sua expertise em IA e automação foi fundamental para o sucesso da nossa plataforma. Recomendo muito!',
      rating: 5,
    },
    {
      name: 'Marina Costa',
      role: 'Diretora de Produto, FinTech Co',
      avatar: '👩‍💼',
      content:
        'Trabalhar com Jefferson foi uma experiência excepcional. Entrega rápida, código de qualidade e suporte impecável. Ele é realmente um profissional diferenciado.',
      rating: 5,
    },
    {
      name: 'Roberto Ferreira',
      role: 'Fundador, Digital Agency',
      avatar: '👨‍💻',
      content:
        'Jefferson implementou um sistema de automação que economizou nossa empresa meses de trabalho manual. Seu conhecimento em IA é impressionante e tangível nos resultados.',
      rating: 5,
    },
    {
      name: 'Juliana Martins',
      role: 'Product Manager, SaaS Solutions',
      avatar: '👩‍💻',
      content:
        'Entrega de qualidade excepcionais, prazos cumpridos, e total transparência no processo. Jefferson é um desenvolvedor que você quer no seu time.',
      rating: 5,
    },
  ];

  return (
    <section className="relative py-20 px-4 overflow-hidden bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900">
      {/* Background effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-neon-purple/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-neon-cyan/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div className="text-center mb-16" {...fadeInUp}>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 gradient-text">
            Depoimentos de Clientes
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Veja o que clientes satisfeitos falam sobre o trabalho realizado
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, amount: 0.2 }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              {...fadeInUp}
              className="group glass rounded-xl p-8 border border-neon-cyan/20 hover:border-neon-cyan/60 transition-all duration-300"
              whileHover={{
                y: -8,
                boxShadow: '0 20px 40px rgba(0, 217, 255, 0.15)',
              }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FiStar
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-300 text-lg mb-6 italic leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-neon-cyan/10">
                <div className="text-4xl">{testimonial.avatar}</div>
                <div>
                  <h4 className="font-bold text-white group-hover:text-neon-cyan transition-colors">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>

              {/* Accent line */}
              <div className="absolute top-0 left-0 w-1 h-0 bg-gradient-to-b from-neon-cyan to-neon-blue group-hover:h-full transition-all duration-300 rounded-l-xl"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Badge */}
        <motion.div
          className="text-center p-6 glass rounded-xl border border-neon-cyan/20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="text-gray-300">
            <span className="text-neon-cyan font-bold">+50 projetos</span> entregues com sucesso e
            <span className="text-neon-cyan font-bold"> 100% de satisfação</span> dos clientes
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
