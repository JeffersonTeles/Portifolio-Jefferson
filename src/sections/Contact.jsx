import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiMail, FiMapPin, FiPhone, FiCheckCircle } from 'react-icons/fi';

const Contact = () => {
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    
    const form = e.target;
    const data = new FormData(form);
    
    try {
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
    <section id="contact" className="section-lusion bg-inherit border-t border-lusion-text/5">
      <div className="container-lusion">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          <div className="lg:col-span-5">
            <span className="text-sm font-bold tracking-lusion-wide uppercase text-lusion-primary flex items-center gap-4 mb-8">
              <span className="w-8 h-px bg-lusion-primary" />
              06 / Contact
            </span>
            <h2 className="mb-12">Let's create something<br /><span className="text-lusion-primary">remarkable.</span></h2>
            
            <div className="space-y-8 mt-16">
              {[
                { icon: FiMail, label: 'Email', value: 'hello@jeffersonteles.dev' },
                { icon: FiPhone, label: 'Phone', value: '+55 11 99999-9999' },
                { icon: FiMapPin, label: 'Location', value: 'São Paulo, Brasil' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="mt-1 text-lusion-primary"><item.icon size={18} /></div>
                  <div>
                    <p className="text-[10px] font-bold tracking-lusion-wide uppercase text-lusion-text/40 mb-1">{item.label}</p>
                    <p className="text-lg font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            {status === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center p-12 border border-lusion-primary/20 bg-lusion-primary/5 rounded-sm"
              >
                <FiCheckCircle size={48} className="text-lusion-primary mb-6" />
                <h3 className="text-3xl font-bold mb-4">Mensagem Enviada!</h3>
                <p className="text-lusion-text/60">Obrigado pelo contato. Responderei o mais breve possível.</p>
                <button 
                  onClick={() => setStatus(null)}
                  className="mt-8 text-xs font-bold tracking-widest uppercase text-lusion-primary hover:underline"
                >
                  Enviar outra mensagem
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="relative group">
                    <input 
                      name="name"
                      type="text" 
                      required
                      placeholder="Seu Nome"
                      className="w-full bg-transparent border-b border-lusion-text/10 py-4 focus:border-lusion-primary outline-none transition-colors placeholder:text-lusion-text/20 font-medium"
                    />
                  </div>
                  <div className="relative group">
                    <input 
                      name="email"
                      type="email" 
                      required
                      placeholder="Seu Email"
                      className="w-full bg-transparent border-b border-lusion-text/10 py-4 focus:border-lusion-primary outline-none transition-colors placeholder:text-lusion-text/20 font-medium"
                    />
                  </div>
                </div>
                
                <div className="relative group">
                  <input 
                    name="subject"
                    type="text" 
                    required
                    placeholder="Assunto"
                    className="w-full bg-transparent border-b border-lusion-text/10 py-4 focus:border-lusion-primary outline-none transition-colors placeholder:text-lusion-text/20 font-medium"
                  />
                </div>

                <div className="relative group">
                  <textarea 
                    name="message"
                    rows="4" 
                    required
                    placeholder="Sua Mensagem"
                    className="w-full bg-transparent border-b border-lusion-text/10 py-4 focus:border-lusion-primary outline-none transition-colors placeholder:text-lusion-text/20 font-medium resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={status === 'sending'}
                  className="btn-lusion-primary group w-full md:w-auto justify-center disabled:opacity-50"
                >
                  {status === 'sending' ? 'Enviando...' : 'Enviar Mensagem'}
                  <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                </button>
                
                {status === 'error' && (
                  <p className="text-red-500 text-xs font-bold uppercase tracking-widest">
                    Ocorreu um erro ao enviar. Tente novamente.
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
