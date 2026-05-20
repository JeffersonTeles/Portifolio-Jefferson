import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiLinkedin, FiGithub, FiArrowRight } from 'react-icons/fi';

const Contact = () => {
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
          <div className="bg-dark-card border border-white/5 p-8 md:p-12 rounded-sm relative">
            <form className="space-y-8">
              <div className="space-y-2">
                <label className="font-mono text-[10px] text-dark-muted uppercase tracking-widest">Nome Completo</label>
                <input 
                  type="text" 
                  className="w-full bg-dark-bg border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-dark-accent transition-colors"
                  placeholder="Seu nome"
                />
              </div>
              
              <div className="space-y-2">
                <label className="font-mono text-[10px] text-dark-muted uppercase tracking-widest">Email Corporativo</label>
                <input 
                  type="email" 
                  className="w-full bg-dark-bg border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-dark-accent transition-colors"
                  placeholder="seu@email.com"
                />
              </div>

              <div className="space-y-2">
                <label className="font-mono text-[10px] text-dark-muted uppercase tracking-widest">Mensagem</label>
                <textarea 
                  rows="4"
                  className="w-full bg-dark-bg border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-dark-accent transition-colors resize-none"
                  placeholder="Como posso te ajudar?"
                ></textarea>
              </div>

              <button type="submit" className="btn-primary w-full group">
                <span className="flex items-center justify-center gap-2">
                  Enviar Mensagem
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </form>

            {/* Decorative Grid */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[radial-gradient(#ffffff10_1px,transparent_1px)] [background-size:8px_8px] pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
