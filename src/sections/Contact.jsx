import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiSend } from 'react-icons/fi';
import { SiWhatsapp } from 'react-icons/si';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Mensagem enviada! Entrarei em contato em breve.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 px-6 bg-white/[0.01]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Vamos construir algo inteligente
          </h2>
          <div className="w-12 h-px bg-white/10 mx-auto mb-8" />
          <p className="text-white/40">
          Entre em contato para discutirmos seu projeto
          </p>
        </motion.div>

        <div className="max-w-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-white/[0.02] border border-white/[0.05] rounded-lg focus:outline-none focus:border-white/[0.1] text-white placeholder-white/20 transition-colors"
                  placeholder="Nome"
                />
              </div>

              <div>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-white/[0.02] border border-white/[0.05] rounded-lg focus:outline-none focus:border-white/[0.1] text-white placeholder-white/20 transition-colors"
                  placeholder="Email"
                />
              </div>

              <div>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-white/[0.02] border border-white/[0.05] rounded-lg focus:outline-none focus:border-white/[0.1] text-white placeholder-white/20 transition-colors resize-none"
                  placeholder="Mensagem"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-white text-black text-sm font-medium rounded-lg hover:bg-white/90 transition-all duration-300"
              >
                <FiSend size={16} />
                Enviar mensagem
              </button>
            </form>

            <div className="mt-8 text-center">
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/40 hover:text-white/60 transition-colors text-sm"
              >
                <SiWhatsapp size={16} />
                ou fale diretamente pelo WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
