import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FiCheck, FiSend, FiLoader, FiGithub, FiLinkedin } from 'react-icons/fi';
import { copyEmail } from '../utils/copyEmail';
import AnimatedSection from '../components/AnimatedSection';
import SparkButton from '../components/SparkButton';

const Contact = () => {
  const { t } = useTranslation();
  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    const formData = new FormData(e.target);
    formData.append('access_key', import.meta.env.VITE_WEB3FORMS_KEY || 'YOUR_WEB3FORMS_ACCESS_KEY');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        e.target.reset();
        setTimeout(() => {
          setStatus('idle');
        }, 5000);
      } else {
        setStatus('error');
        setErrorMessage(data.message || 'Erro ao enviar mensagem. Tente novamente.');
      }
    } catch (err) {
      setStatus('error');
      setErrorMessage('Erro de conexão. Verifique sua rede e tente novamente.');
    }
  };

  return (
    <AnimatedSection id="contact" className="py-32 section-alt relative overflow-hidden scroll-margin-top-20">
      {/* Background glow element */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[700px] mx-auto px-6 md:px-10 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-[2.2rem] sm:text-[2.8rem] font-bold text-white mb-4">
            {t('contact.heading')}
          </h2>
          <p className="text-[1rem] text-[#777] leading-relaxed max-w-md mx-auto">
            {t('contact.description')}
          </p>
        </div>

        {/* Web3Forms Contact Form with Futuristic Glowing Border */}
        <div className="p-[1px] rounded-2xl bg-gradient-to-r from-accent/50 via-cyan-500/30 to-accent/50 animate-gradient-border shadow-2xl">
          <form onSubmit={handleSubmit} className="bg-[#0b0b0b] rounded-2xl p-8 sm:p-10 relative overflow-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-[0.85rem] font-mono text-[#888] mb-2" htmlFor="name">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Seu nome"
                  className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-white text-[0.95rem] focus:outline-none focus:border-accent transition-colors"
                />
              </div>
              <div>
                <label className="block text-[0.85rem] font-mono text-[#888] mb-2" htmlFor="email">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="seu.email@exemplo.com"
                  className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-white text-[0.95rem] focus:outline-none focus:border-accent transition-colors"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-[0.85rem] font-mono text-[#888] mb-2" htmlFor="message">
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                placeholder="Fale sobre seu projeto, vaga ou ideia..."
                className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-white text-[0.95rem] focus:outline-none focus:border-accent transition-colors resize-none"
              />
            </div>

            {status === 'error' && (
              <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-[0.9rem]">
                {errorMessage}
              </div>
            )}

            {status === 'success' ? (
              <div className="flex items-center justify-center gap-3 py-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 font-medium text-[1rem]">
                <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-black animate-bounce">
                  <FiCheck size={16} />
                </div>
                Mensagem enviada com sucesso! Retornarei em breve.
              </div>
            ) : (
              <SparkButton
                type="submit"
                disabled={status === 'loading'}
                className="w-full"
              >
                {status === 'loading' ? (
                  <>
                    <FiLoader className="animate-spin" size={18} />
                    Enviando...
                  </>
                ) : (
                  <>
                    <FiSend size={18} />
                    Enviar Mensagem
                  </>
                )}
              </SparkButton>
            )}
          </form>
        </div>

        <div className="text-center mt-10">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={copyEmail}
              className="text-accent text-[1.05rem] border-b border-accent/30 hover:border-accent transition-colors duration-300 cursor-pointer"
              aria-label="Copiar email"
            >
              jeffersontelesdeoliveira@gmail.com
            </button>
              <a
                href={`https://wa.me/5544999277915?text=${encodeURIComponent('Olá Jefferson, gostaria de falar sobre uma oportunidade ou projeto.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-green-500/10 border border-green-500/30 text-green-400 hover:bg-green-500/20 hover:border-green-500/50 transition-all duration-300 text-[0.95rem] font-medium"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.878-2.03-.967-.273-.089-.471-.149-.67.149-.198.297-.744.967-.943 1.164-.198.198-.495.297-.693.149-.198-.149-.297-.297-.396-.446-.099-.149-.149-.297-.198-.446-.05-.149-.05-.347-.05-.545 0-.198.05-.347.05-.545.05-.198.05-.297.05-.446 0-.198 0-.396-.05-.545-.05-.149-.149-.248-.248-.347-.099-.099-.248-.198-.396-.248l-.248-.05c-.297-.05-.495-.149-.693-.248-.198-.1-.396-.248-.594-.396-.198-.149-.396-.297-.594-.446-.198-.149-.495-.297-.693-.396-.198-.1-.396-.198-.693-.248-.297-.05-.594-.05-.891-.05s-.594.05-.891.05c-.297 0-.594-.05-.891-.05-.198.05-.396.05-.594.1-.198.05-.396.1-.594.15-.198.05-.396.1-.594.15-.099.05-.198.1-.297.149-.149.099-.248.198-.347.347-.099.149-.198.297-.297.446-.099.149-.149.347-.149.495 0 .149.05.297.05.446.05.149.05.297.05.446 0 .198 0 .396-.05.545-.05.149-.149.248-.248.347-.1.099-.248.198-.396.248l-.248.05c-.248.05-.446.149-.594.248-.149.1-.297.198-.446.297-.149.1-.297.248-.446.347-.149.099-.297.198-.446.297-.149.099-.297.149-.446.149-.198 0-.396-.05-.594-.05-.198 0-.396.05-.594.05-.198 0-.396-.05-.594-.1-.198-.05-.396-.1-.594-.15-.198-.05-.396-.1-.594-.15-.099-.05-.198-.05-.297-.1-.099-.05-.198-.1-.297-.15-.099-.05-.198-.1-.297-.15s-.1-.05-.149-.099c-.05-.05-.099-.1-.149-.15-.05-.05-.1-.099-.15-.149-.05-.05-.1-.1-.15-.149-.049-.05-.099-.1-.149-.149-.05-.05-.099-.1-.198-.149-.1 0-.198.05-.297.05-.099 0-.198-.05-.297-.05zM12 10.5c-1.104 0-2 .9-2 2.046 0 1.146.896 2.046 2 2.046 1.104 0 2-.9 2-2.046 0-1.146-.896-2.046-2-2.046z"/>
                </svg>
                {t('contact.whatsapp')}
              </a>
            <a
              href="https://github.com/JeffersonTeles"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.03] border border-white/[0.06] text-[#aaa] hover:text-accent hover:border-accent/30 transition-all duration-300 text-[0.95rem] font-medium"
            >
              <FiGithub size={16} />
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/jeffersonteles"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.03] border border-white/[0.06] text-[#aaa] hover:text-accent hover:border-accent/30 transition-all duration-300 text-[0.95rem] font-medium"
            >
              <FiLinkedin size={16} />
              LinkedIn
            </a>
          </div>
          <p className="text-[0.8rem] text-[#444] mt-3 font-mono">{t('contact.location')}</p>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Contact;
