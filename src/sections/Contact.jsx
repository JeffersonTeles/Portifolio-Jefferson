import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiSend, FiUser, FiMessageSquare } from 'react-icons/fi';
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
    alert('🚀 Mensagem enviada com sucesso! Entrarei em contato em breve.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="relative py-32 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              CONEXÃO //
            </span>
          </h2>
          <div className="w-32 h-px bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto shadow-[0_0_20px_#0ff]" />
          <p className="text-gray-400 mt-8 max-w-2xl mx-auto font-mono text-sm">
            [ INICIE UMA CONEXÃO // VAMOS CONSTRUIR ALGO INCRÍVEL ]
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-xl rounded-2xl border border-cyan-500/30 p-8 md:p-12"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-2xl" />
            
            <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
              <div className="relative">
                <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full pl-12 pr-4 py-4 bg-black/50 border border-gray-700 rounded-xl focus:outline-none focus:border-cyan-500 text-white placeholder-gray-500 transition-colors font-mono"
                  placeholder="IDENTIFICAÇÃO // NOME"
                />
              </div>

              <div className="relative">
                <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full pl-12 pr-4 py-4 bg-black/50 border border-gray-700 rounded-xl focus:outline-none focus:border-cyan-500 text-white placeholder-gray-500 transition-colors font-mono"
                  placeholder="EMAIL // CONTATO"
                />
              </div>

              <div className="relative">
                <FiMessageSquare className="absolute left-4 top-5 text-gray-500" size={18} />
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full pl-12 pr-4 py-4 bg-black/50 border border-gray-700 rounded-xl focus:outline-none focus:border-cyan-500 text-white placeholder-gray-500 transition-colors font-mono resize-none"
                  placeholder="MENSAGEM // PROJETO"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold rounded-xl transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/50 transform hover:scale-[1.02]"
              >
                <FiSend size={18} />
                ENVIAR MENSAGEM
              </button>
            </form>

            <div className="relative z-10 mt-8 text-center">
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition-all duration-300 font-mono text-sm"
              >
                <SiWhatsapp size={18} />
                [ OU CONECTAR VIA WHATSAPP ]
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
