import React, { useState } from "react";
import { FiLinkedin, FiGithub, FiSend, FiCopy, FiCheck, FiMail } from "react-icons/fi";
import { SiWhatsapp } from "react-icons/si";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  const email = "jeffersontelesdeoliveira@gmail.com";
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch { /* ignore */ }
  };

  return (
    <section id="contato" className="border-b border-slate-100">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 py-20 sm:py-28">
        <p className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-4">
          06 — Contato
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
          {t("contact.heading")}
        </h2>
        <p className="text-slate-500 leading-relaxed max-w-xl mb-14">
          {t("contact.description")}
        </p>

        <div className="grid lg:grid-cols-[1fr_0.8fr] gap-14 lg:gap-20">
          {/* Form */}
          <div>
            <p className="text-sm text-slate-500 mb-6">
              {t("contact.formNote")}
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target);
                const name = encodeURIComponent(formData.get("name"));
                const fromEmail = encodeURIComponent(formData.get("email"));
                const message = encodeURIComponent(formData.get("message"));
                window.location.href = `mailto:${email}?subject=Portfólio%20—%20Mensagem&body=Nome%3A%20${name}%0AEmail%3A%20${fromEmail}%0AMensagem%3A%0A${message}`;
              }}
              className="space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all"
                  placeholder="Seu nome"
                />
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all"
                  placeholder="seu@email.com"
                />
              </div>
              <textarea
                name="message"
                rows={4}
                required
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all resize-none"
                placeholder="Sua mensagem..."
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-900 text-white text-sm font-medium rounded-lg hover:bg-slate-800 transition-colors"
              >
                <FiSend size={14} />
                Enviar mensagem
              </button>
            </form>
          </div>

          {/* Info */}
          <div className="space-y-8">
            <div>
              <p className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                Email
              </p>
              <div className="flex items-center gap-2">
                <FiMail size={14} className="text-slate-400" />
                <a
                  href={`mailto:${email}`}
                  className="text-sm text-slate-700 hover:text-slate-900 transition-colors break-all"
                >
                  {email}
                </a>
                <button
                  onClick={handleCopy}
                  className="text-slate-400 hover:text-slate-700 transition-colors shrink-0"
                  title="Copiar email"
                >
                  {copied ? (
                    <FiCheck size={14} className="text-emerald-600" />
                  ) : (
                    <FiCopy size={14} />
                  )}
                </button>
              </div>
            </div>

            <div>
              <p className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                Localização
              </p>
              <p className="text-sm text-slate-700">{t("contact.location")}</p>
            </div>

            <div>
              <p className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
                Redes sociais
              </p>
              <div className="flex gap-3">
                <a
                  href="https://linkedin.com/in/jeffersonteless"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg border border-slate-200 flex items-center justify-center text-slate-400 hover:text-slate-900 hover:border-slate-300 transition-all"
                  aria-label="LinkedIn"
                >
                  <FiLinkedin size={16} />
                </a>
                <a
                  href="https://github.com/JeffersonTeles"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg border border-slate-200 flex items-center justify-center text-slate-400 hover:text-slate-900 hover:border-slate-300 transition-all"
                  aria-label="GitHub"
                >
                  <FiGithub size={16} />
                </a>
                <a
                  href="https://wa.me/5544999277915"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg border border-slate-200 flex items-center justify-center text-slate-400 hover:text-slate-900 hover:border-slate-300 transition-all"
                  aria-label="WhatsApp"
                >
                  <SiWhatsapp size={16} />
                </a>
              </div>
            </div>

            <div className="pt-4">
              <a
                href="/Curriculo_Jefferson_Teles.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-slate-900 hover:text-amber-700 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Baixar currículo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
