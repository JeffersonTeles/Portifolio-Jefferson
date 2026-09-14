import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FiCheck, FiSend, FiLoader } from 'react-icons/fi';
import { copyEmail } from '../utils/copyEmail';
import AnimatedSection from '../components/AnimatedSection';

const Contact = () => {
  const { t } = useTranslation();
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    const formData = new FormData(e.target);
    // Replace with your Web3Forms access key if available, or fallback
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
    <AnimatedSection id="contact" className="py-32 section-alt">
      <div className="max-w-[700px] mx-auto px-6 md:px-10">
        <div className="text-center mb-12">
          <h2 className="text-[2.2rem] sm:text-[2.8rem] font-bold text-white mb-4">
            {t('contact.heading')}
          </h2>
          <p className="text-[1rem] text-[#777] leading-relaxed max-w-md mx-auto">
            {t('contact.description')}
          </p>
        </div>

        {/* Web3Forms Contact Form */}
        <form onSubmit={handleSubmit} className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-8 sm:p-10 backdrop-blur-md shadow-2xl relative overflow-hidden">
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
            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full py-4 rounded-xl bg-white text-black font-semibold text-[0.95rem] hover:bg-accent hover:text-white transition-all duration-300 flex items-center justify-center gap-2 shadow-lg disabled:opacity-50"
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
            </button>
          )}
        </form>

        <div className="text-center mt-10">
          <button
            onClick={copyEmail}
            className="text-accent text-[1.05rem] border-b border-accent/30 hover:border-accent transition-colors duration-300 cursor-pointer"
            aria-label="Copiar email"
          >
            jeffersontelesdeoliveira@gmail.com
          </button>
          <p className="text-[0.8rem] text-[#444] mt-3 font-mono">{t('contact.location')}</p>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Contact;
