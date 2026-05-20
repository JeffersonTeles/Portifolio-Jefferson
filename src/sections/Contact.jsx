import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiLinkedin, FiGithub, FiArrowRight, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';

const Contact = () => {
  const [status, setStatus] = useState(null); // null, 'sending', 'success', 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    
    const form = e.target;
    const data = new FormData(form);
    
    try {
      // Usando Formspree (Gratuito) para processar o envio
      const response = await fetch("https://formspree.io/f/mjvnrpob", {
        method: "POST",
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 bg-dark-bg relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Info Side */}
          <div>
            <div className="section-title">
              <span className="w-8 h-px bg-dark-terminal" />
              04 / Contato
            </div>
            <h2 className="text-5xl md:text-7xl font-bold mb-10 text-white">
              Vamos construir algo <span className="text-dark-terminal">juntos.</span>
            </h2>
            
            <p className="text-dark-muted text-xl mb-12 max-w-lg leading-relaxed">
              Estou ativamente buscando minha primeira oportunidade como desenvolvedor júnior. Se você busca alguém com sede de aprendizado e base sólida, vamos conversar.
            </p>

            <div className="space-y-6">
              {[
                { icon: FiMail, label: "Email", value: "jeffersontelesdeoliveira@gmail.com", href: "mailto:jeffersontelesdeoliveira@gmail.com" },
                { icon: FiLinkedin, label: "LinkedIn", value: "linkedin.com/in/jeffersonteles", href: "https://linkedin.com/in/jeffersonteles" },
                { icon: FiGithub, label: "GitHub", value: "github.com/JeffersonTeles", href: "https://github.com/JeffersonTeles" },
              ].map((item, i) => (
                <a 
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-6 group p-4 border border-white/5 bg-white/[0.02] rounded-sm hover:border-dark-accent/30 transition-all"
                >
                  <div className="w-12 h-12 flex items-center justify-center bg-dark-accent/10 text-dark-accent rounded-sm group-hover:bg-dark-accent group-hover:text-dark-bg transition-all">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-dark-muted uppercase tracking-widest">{item.label}</p>
                    <p className="text-white font-medium">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-dark-card border border-white/5 p-8 md:p-12 rounded-sm relative min-h-[400px] flex flex-col justify-center">
            {status === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center"
              >
                <FiCheckCircle size={64} className="text-dark-terminal mx-auto mb-6" />
                <h3 className="text-3xl font-bold mb-4 text-white">Mensagem Enviada!</h3>
                <p className="text-dark-muted mb-8 text-lg">Obrigado pelo contato, Jefferson. Responderei em breve.</p>
                <button 
                  onClick={() => setStatus(null)}
                  className="text-dark-accent font-mono text-xs uppercase tracking-widest hover:underline"
                >
                  Enviar outra mensagem
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-2">
                  <label className="font-mono text-[10px] text-dark-muted uppercase tracking-widest">Nome Completo</label>
                  <input 
                    name="name"
                    type="text" 
                    required
                    disabled={status === 'sending'}
                    className="w-full bg-dark-bg border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-dark-accent transition-colors disabled:opacity-50"
                    placeholder="Seu nome"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="font-mono text-[10px] text-dark-muted uppercase tracking-widest">Email Corporativo</label>
                  <input 
                    name="email"
                    type="email" 
                    required
                    disabled={status === 'sending'}
                    className="w-full bg-dark-bg border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-dark-accent transition-colors disabled:opacity-50"
                    placeholder="seu@email.com"
                  />
                </div>

                <div className="space-y-2">
                  <label className="font-mono text-[10px] text-dark-muted uppercase tracking-widest">Mensagem</label>
                  <textarea 
                    name="message"
                    rows="4"
                    required
                    disabled={status === 'sending'}
                    className="w-full bg-dark-bg border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-dark-accent transition-colors resize-none disabled:opacity-50"
                    placeholder="Como posso te ajudar?"
                  ></textarea>
                </div>

                {status === 'error' && (
                  <div className="flex items-center gap-2 text-red-500 text-xs font-mono">
                    <FiAlertCircle /> Erro ao enviar. Tente novamente.
                  </div>
                )}

                <button 
                  type="submit" 
                  disabled={status === 'sending'}
                  className="btn-primary w-full group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="flex items-center justify-center gap-2">
                    {status === 'sending' ? 'Processando...' : 'Enviar Mensagem'}
                    {status !== 'sending' && <FiArrowRight className="group-hover:translate-x-1 transition-transform" />}
                  </span>
                </button>
              </form>
            )}

            {/* Decorative Grid */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[radial-gradient(#ffffff10_1px,transparent_1px)] [background-size:8px_8px] pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
