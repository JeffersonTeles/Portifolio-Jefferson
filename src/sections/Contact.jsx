import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';
import { SiWhatsapp, SiLinkedin, SiGithub } from 'react-icons/si';
import { fadeInUp } from '../utils/animations';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulário enviado:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitted(false);
    }, 3000);
  };

  const contactLinks = [
    {
      icon: FiMail,
      label: 'Email',
      value: 'jefferson@example.com',
      href: 'mailto:jefferson@example.com',
      color: 'text-neon-cyan',
    },
    {
      icon: SiWhatsapp,
      label: 'WhatsApp',
      value: '+55 (44) 999277915',
      href: '#',
      color: 'text-neon-blue',
    },
    {
      icon: SiLinkedin,
      label: 'LinkedIn',
      value: '@jefferson-teles',
      href: '#',
      color: 'text-neon-purple',
    },
    {
      icon: SiGithub,
      label: 'GitHub',
      value: '@jefferson-teles',
      href: '#',
      color: 'text-neon-cyan',
    },
  ];

  return (
    <section id="contact" className="relative py-20 px-4 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-neon-cyan/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-purple/5 rounded-full blur-3xl pointer-events-none"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div className="text-center mb-16" {...fadeInUp}>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 gradient-text">
            Vamos Construir Algo Incrível Juntos
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Estou pronto para discutir seu próximo projeto e transformar suas ideias em realidade
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Informações de Contato
              </h3>
              <p className="text-gray-400 mb-8">
                Escolha o melhor canal para entrar em contato. Respondo rapidamente a todas as mensagens.
              </p>
            </div>

            {/* Contact Links */}
            <div className="space-y-4">
              {contactLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group glass rounded-xl p-4 border border-neon-cyan/20 hover:border-neon-cyan/60 transition-all duration-300 flex items-center gap-4 cursor-pointer"
                    whileHover={{
                      y: -5,
                      boxShadow: '0 0 20px rgba(0, 217, 255, 0.2)',
                    }}
                  >
                    <div
                      className={`text-2xl ${link.color} group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">{link.label}</p>
                      <p className="text-white font-medium group-hover:text-neon-cyan transition-colors">
                        {link.value}
                      </p>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 pt-8">
              <motion.div
                className="glass rounded-xl p-4 text-center border border-neon-cyan/20"
                whileHover={{ y: -5 }}
              >
                <div className="text-2xl font-bold gradient-text">24h</div>
                <p className="text-xs text-gray-400">Tempo de resposta</p>
              </motion.div>
              <motion.div
                className="glass rounded-xl p-4 text-center border border-neon-cyan/20"
                whileHover={{ y: -5 }}
              >
                <div className="text-2xl font-bold gradient-text">100%</div>
                <p className="text-xs text-gray-400">Satisfação</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="glass rounded-xl p-8 border border-neon-cyan/20 hover:border-neon-cyan/60 transition-all duration-300"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div className="group">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Seu Nome
                </label>
                <motion.input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-dark-800/50 border border-neon-cyan/20 text-white placeholder-gray-500 focus:outline-none focus:border-neon-cyan/60 transition-all duration-300"
                  placeholder="Jefferson Teles"
                  whileFocus={{ scale: 1.01 }}
                />
              </div>

              {/* Email Input */}
              <div className="group">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Seu Email
                </label>
                <motion.input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-dark-800/50 border border-neon-cyan/20 text-white placeholder-gray-500 focus:outline-none focus:border-neon-cyan/60 transition-all duration-300"
                  placeholder="seu@email.com"
                  whileFocus={{ scale: 1.01 }}
                />
              </div>

              {/* Message Textarea */}
              <div className="group">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Sua Mensagem
                </label>
                <motion.textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg bg-dark-800/50 border border-neon-cyan/20 text-white placeholder-gray-500 focus:outline-none focus:border-neon-cyan/60 transition-all duration-300 resize-none"
                  placeholder="Conte-me sobre seu projeto..."
                  whileFocus={{ scale: 1.01 }}
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-6 py-3 bg-gradient-to-r from-neon-cyan to-neon-blue rounded-lg font-bold text-dark-900 hover:shadow-neon-cyan transition-all duration-300 flex items-center justify-center gap-2"
                disabled={isSubmitted}
              >
                {isSubmitted ? (
                  <>
                    <span>✓ Mensagem Enviada!</span>
                  </>
                ) : (
                  <>
                    <FiSend /> Enviar Mensagem
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 p-8 text-center glass rounded-xl border border-neon-cyan/20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h3 className="text-2xl font-bold text-white mb-3">
            Pronto para começar?
          </h3>
          <p className="text-gray-300 mb-6">
            Estou disponível para consultas, parcerias e novos projetos. Vamos conversar!
          </p>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(157, 78, 221, 0.6)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border-2 border-neon-purple rounded-lg font-bold text-neon-purple hover:bg-neon-purple/10 transition-all duration-300 cursor-pointer"
          >
            Agendar uma Conversa
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
