import React, { useState } from "react";
import { FiLinkedin, FiGithub, FiSend, FiCopy, FiCheck } from "react-icons/fi";
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

  const socialLinks = [
    { icon: FiLinkedin, url: "https://linkedin.com/in/jeffersonteless", label: "LinkedIn" },
    { icon: FiGithub, url: "https://github.com/JeffersonTeles", label: "GitHub" },
    { icon: SiWhatsapp, url: "https://wa.me/5544999277915", label: "WhatsApp" },
  ];

  return (
    <section
      id="contact"
      className="section-padding"
      aria-labelledby="contact-heading"
    >
      <div className="page-container">
        <div className="grid lg:grid-cols[1.2fr_0.8fr] gap-16">
          <div className="space-y-8">
            <p className="text-sm text-white/60">{t("contact.label")}</p>
            <h2
              id="contact-heading"
              className="text-3xl md:text-4xl font-bold text-white"
            >
              {t("contact.heading")}
            </h2>
            <p className="text-slate-300 leading-relaxed max-w-xl">
              {t("contact.description")}
            </p>
          </div>

          <div className="space-y-8">
            <div className="space-y-2">
              <p className="text-xs text-white/40 font-mono">Email</p>
              <div className="flex items-center gap-3">
                <a
                  href={`mailto:${email}`}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  {email}
                </a>
                <button
                  onClick={handleCopy}
                  className="text-white/40 hover:text-white transition-colors"
                  title="Copiar email"
                >
                  {copied ? <FiCheck size={14} className="text-green-400" /> : <FiCopy size={14} />}
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-xs text-white/40 font-mono">Localização</p>
              <p className="text-white/80">{t("contact.location")}</p>
            </div>

            <div className="space-y-2">
              <p className="text-xs text-white/40 font-mono">Redes sociais</p>
              <div className="flex gap-4">
                {socialLinks.map(({ icon: Icon, url, label }) => (
                  <a
                    key={label}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-10 h-10 rounded-lg border border-white/5 flex items-center justify-center text-white/40 hover:text-white hover:border-white/10 transition-all"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-xs text-white/40 font-mono">Mensagem direta</p>
              <a
                href={`mailto:${email}?subject=Oportunidade de desenvolvedor júnior`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-amber-400 text-black font-medium rounded-lg text-sm hover:opacity-90 transition-opacity"
              >
                <FiSend size={14} />
                Enviar email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
