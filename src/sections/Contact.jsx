import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiLinkedin, FiGithub, FiArrowRight, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();
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
        headers: { 'Accept': 'application/json' }
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
          
          <div>
            <div className="section-title mb-8">
              <span className="w-8 h-px bg-dark-terminal" />
              <span className="mono-tag">06 / {t('contact.title')}</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold mb-10 text-white tracking-tighter">
              {t('contact.headline')}
            </h2>
            <p className="text-dark-muted text-lg mb-12 max-w-lg leading-relaxed">{t('contact.desc')}</p>

            <div className="flex flex-col gap-6">
              {[
                { icon: FiMail, label: "Email", value: "jeffersontelesdeoliveira@gmail.com", href: "mailto:jeffersontelesdeoliveira@gmail.com" },
                { icon: FiLinkedin, label: "LinkedIn", value: "linkedin.com/in/jeffersonteles", href: "https://linkedin.com/in/jeffersonteles" },
                { icon: FiGithub, label: "GitHub", value: "github.com/JeffersonTeles", href: "https://github.com/JeffersonTeles" },
              ].map((item, i) => (
                <a key={i} href={item.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group p-4 border border-white/5 bg-white/[0.01] rounded-sm hover:border-dark-accent/30 transition-all">
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

          <div className="glass-card p-8 md:p-12 relative flex flex-col justify-center min-h-[400px]">
            {status === 'success' ? (
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center">
                <FiCheckCircle size={64} className="text-dark-terminal mx-auto mb-6" />
                <h3 className="text-3xl font-bold mb-4 text-white">{t('contact.sent')}</h3>
                <p className="text-dark-muted text-lg">{t('contact.thanks')}</p>
                <button onClick={() => setStatus(null)} className="mt-8 text-dark-accent font-mono text-xs uppercase tracking-widest hover:underline">
                  {t('contact.form.btn')}
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-2">
                  <label className="font-mono text-[10px] text-dark-muted uppercase tracking-widest">{t('contact.form.name')}</label>
                  <input name="name" type="text" required disabled={status === 'sending'} className="w-full bg-dark-bg border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-dark-accent transition-colors disabled:opacity-50" placeholder="..." />
                </div>
                <div className="space-y-2">
                  <label className="font-mono text-[10px] text-dark-muted uppercase tracking-widest">{t('contact.form.email')}</label>
                  <input name="email" type="email" required disabled={status === 'sending'} className="w-full bg-dark-bg border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-dark-accent transition-colors disabled:opacity-50" placeholder="user@jt.shell" />
                </div>
                <div className="space-y-2">
                  <label className="font-mono text-[10px] text-dark-muted uppercase tracking-widest">{t('contact.form.msg')}</label>
                  <textarea name="message" rows="4" required disabled={status === 'sending'} className="w-full bg-dark-bg border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-dark-accent transition-colors resize-none disabled:opacity-50" placeholder="..." />
                </div>
                {status === 'error' && <p className="text-red-500 text-xs font-mono uppercase tracking-widest">Error_Uplink_Failed</p>}
                <button type="submit" disabled={status === 'sending'} className="btn-primary w-full group disabled:opacity-50">
                  <span className="flex items-center justify-center gap-2">
                    {status === 'sending' ? t('contact.form.sending') : t('contact.form.btn')}
                    {status !== 'sending' && <FiArrowRight className="group-hover:translate-x-1 transition-transform" />}
                  </span>
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
