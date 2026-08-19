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
    <section className="border-b border-white/5">
      <div className="page-container py-24">
        <div className="max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t("contact.heading")}
          </h2>

          <p className="text-slate-300 leading-relaxed max-w-xl mb-12">
            {t("contact.description")}
          </p>

          <div className="grid md:grid-cols[1.5fr_1fr] gap-16">
            <div className="space-y-8">
              <p className="text-sm text-white/60">
                {t("contact.formNote")}
              </p>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.target);
                  const name = encodeURIComponent(formData.get("name"));
                  const fromEmail = encodeURIComponent(formData.get("email"));
                  const message = encodeURIComponent(formData.get("message"));
                  window.location.href = `mailto:${email}?subject=Portfólio&body=Nome%3A%20${name}%0AEmail%3A%20${fromEmail}%0AMensagem%3A%20${message}`;
                }}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="name"
                    required
                    className="px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-white/30"
                    placeholder="Seu nome"
                  />
                  <input
                    type="email"
                    name="email"
                    required
                    className="px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-white/30"
                    placeholder="seu@email.com"
                  />
                </div>
                <textarea
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-white/30 resize-none"
                  placeholder="Sua mensagem..."
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-amber-400 text-black font-medium rounded-lg hover:opacity-90 transition-opacity"
                >
                  <FiSend size={16} />
                  Enviar
                </button>
              </form>

              <div className="flex items-center gap-3 pt-4">
                <FiMail size={16} className="text-white/40" />
                <a
                  href={`mailto:${email}`}
                  className="text-white/80 hover:text-white"
                >
                  {email}
                </a>
                <button
                  onClick={handleCopy}
                  className="text-white/40 hover:text-white"
                  title="Copiar email"
                >
                  {copied ? <FiCheck size={14} className="text-green-400" /> : <FiCopy size={14} />}
                </button>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <p className="text-xs font-mono text-white/30 uppercase tracking-wider mb-2">
                  Localização
                </p>
                <p className="text-white">{t("contact.location")}</p>
              </div>

              <div>
                <p className="text-xs font-mono text-white/30 uppercase tracking-wider mb-3">
                  Redes sociais
                </p>
                <div className="flex gap-4">
                  <a
                    href="https://linkedin.com/in/jeffersonteless"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/40 hover:text-white"
                  >
                    <FiLinkedin size={20} />
                  </a>
                  <a
                    href="https://github.com/JeffersonTeles"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/40 hover:text-white"
                  >
                    <FiGithub size={20} />
                  </a>
                  <a
                    href="https://wa.me/5544999277915"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/40 hover:text-white"
                  >
                    <SiWhatsapp size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
