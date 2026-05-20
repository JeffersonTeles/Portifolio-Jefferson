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
            <div className="section-title mb-8">
              <span className="w-8 h-px bg-dark-terminal" />
              <span className="mono-tag">04 / Contato</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold mb-10 text-white">
              Vamos construir algo <span className="text-dark-terminal">juntos.</span>
            </h2>
            
            <p className="text-dark-muted text-lg mb-12 max-w-lg leading-relaxed">
              Estou ativamente buscando minha primeira oportunidade como desenvolvedor júnior. Se você busca alguém com sede de aprendizado e base sólida, vamos conversar.
            </p>

            <div className="flex flex-col gap-6">
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
                  className="flex items-center gap-6 group p-4 border border-white/5 bg-white/[0.01] rounded-sm hover:border-dark-accent/30 transition-all"
                >
                  <div className="w-10 h-10 flex items-center justify-center bg-dark-accent/5 text-dark-accent rounded-sm group-hover:bg-dark-accent group-hover:text-dark-bg transition-all">
                    <item.icon size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-dark-muted uppercase tracking-widest">{item.label}</p>
                    <p className="text-white text-sm font-medium">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Form Side (mailto) */}
          <div className="glass-card p-8 md:p-12 relative flex flex-col justify-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Enviar mensagem rápida</h3>
                <p className="text-sm text-dark-muted">Clique abaixo para abrir seu cliente de e-mail padrão.</p>
              </div>

              <a 
                href="mailto:jeffersontelesdeoliveira@gmail.com?subject=Oportunidade%20de%20Desenvolvimento"
                className="btn-primary w-full group"
              >
                <span className="flex items-center justify-center gap-2">
                  Abrir E-mail
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </span>
              </a>

              <div className="pt-8 border-t border-white/5">
                <div className="flex items-center gap-4 text-dark-terminal opacity-50">
                  <span className="w-2 h-2 rounded-full bg-dark-terminal animate-pulse" />
                  <span className="font-mono text-[9px] uppercase tracking-[0.2em]">Ready for technical uplink</span>
                </div>
              </div>
            </div>

            {/* Decorative Corner Grid */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-[radial-gradient(#ffffff10_1px,transparent_1px)] [background-size:8px_8px] pointer-events-none opacity-20" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
