import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Check, Send, Loader, Mail } from 'lucide-react';

const CONTACT_EMAIL = 'jeffersontelesdeoliveira@gmail.com';

const Contact = () => {
  const { t } = useTranslation();
  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    const form = e.target;
    const formData = new FormData(form);
    const accessKey = import.meta.env.VITE_WEB3FORMS_KEY;

    if (!accessKey) {
      const nome = formData.get('name') || '';
      const email = formData.get('email') || '';
      const mensagem = formData.get('message') || '';
      const subject = encodeURIComponent(`Contato via portfólio — ${nome}`);
      const body = encodeURIComponent(`${mensagem}\n\n— ${nome} (${email})`);
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
      setStatus('mailto');
      form.reset();
      setTimeout(() => setStatus('idle'), 8000);
      return;
    }

    formData.append('access_key', accessKey);

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
    <section id="contact" className="py-28">
      <div className="max-w-[700px] mx-auto px-6 md:px-10">
        <div className="text-center mb-12">
          <h2 className="text-[1.8rem] font-bold text-white mb-4">
            {t('contact.heading')}
          </h2>
          <p className="text-[1rem] text-[#777] leading-relaxed max-w-md mx-auto">
            {t('contact.description')}
          </p>
        </div>

        <div className="bg-[#0b0b0b] rounded-2xl p-6 sm:p-8 border border-white/[0.07]">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
              <div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Nome"
                  className="w-full px-4 py-3 bg-white/[0.02] border border-white/[0.1] rounded-lg text-white placeholder-[#555] focus:outline-none focus:border-accent transition-colors"
                />
              </div>
              <div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="Email"
                  className="w-full px-4 py-3 bg-white/[0.02] border border-white/[0.1] rounded-lg text-white placeholder-[#555] focus:outline-none focus:border-accent transition-colors"
                />
              </div>
            </div>

            <div className="mb-5">
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                placeholder="Mensagem"
                className="w-full px-4 py-3 bg-white/[0.02] border border-white/[0.1] rounded-lg text-white placeholder-[#555] focus:outline-none focus:border-accent transition-colors resize-none"
              />
            </div>

            {status === 'error' && (
              <div className="mb-5 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-[0.85rem]">
                {errorMessage}
              </div>
            )}

            {status === 'success' ? (
              <div className="flex items-center justify-center gap-2 py-3 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 font-medium text-[0.9rem]">
                <Check size={16} />
                Mensagem enviada! Retornarei em breve.
              </div>
            ) : status === 'mailto' ? (
              <div className="flex items-center justify-center gap-2 py-3 rounded-xl bg-accent/10 border border-accent/25 text-accent font-medium text-[0.9rem]">
                <Mail size={16} />
                {t(
                  'contact.openingEmail',
                  'Abrindo seu cliente de e-mail com a mensagem pronta…'
                )}
              </div>
            ) : (
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full flex items-center justify-center gap-2 py-3 bg-white text-black font-medium rounded-lg hover:bg-accent transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? (
                  <>
                    <Loader className="animate-spin" size={16} />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Enviar Mensagem
                  </>
                )}
              </button>
            )}
          </form>
        </div>

        <div className="text-center mt-8">
          <p className="text-[0.75rem] text-[#555] mt-4 font-mono">{t('contact.location')}</p>
          <p className="inline-flex items-center gap-2 mt-3 px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/25 text-green-400 text-[0.75rem] font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            {t('contact.remoteAvailability')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
