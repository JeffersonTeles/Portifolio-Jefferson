import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiSend, FiUser, FiMessageSquare } from 'react-icons/fi';
import { SiWhatsapp } from 'react-icons/si';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Mensagem enviada! Entrarei em contato em breve.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="section-premium">
      <div className="container-premium max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Vamos conversar</h2>
          <div className="section-divider" />
          <p className="section-subtitle text-sm">
            Entre em contato para discutirmos seu projeto
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="card-premium"
        >
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-white/[0.02] border border-white/[0.05] rounded-lg focus:outline-none focus:border-white/[0.1] text-white placeholder-white/20 transition-colors text-sm"
                placeholder="Nome"
              />
            </div>

            <div>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-white/[0.02] border border-white/[0.05] rounded-lg focus:outline-none focus:border-white/[0.1] text-white placeholder-white/20 transition-colors text-sm"
                placeholder="Email"
              />
            </div>

            <div>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 bg-white/[0.02] border border-white/[0.05] rounded-lg focus:outline-none focus:border-white/[0.1] text-white placeholder-white/20 transition-colors text-sm resize-none"
                placeholder="Mensagem"
              />
            </div>

            <button type="submit" className="btn-primary w-full justify-center">
              <FiSend size={16} /> Enviar mensagem
            </button>
          </form>

          <div className="mt-6 text-center">
            <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white/40 hover:text-white/60 transition-colors text-sm">
              <SiWhatsapp size={14} /> ou fale pelo WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
