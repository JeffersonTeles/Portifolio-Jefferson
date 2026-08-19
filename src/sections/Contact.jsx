import React, { useState } from "react";
import { FiMail, FiLinkedin, FiGithub, FiSend } from "react-icons/fi";
import { SiWhatsapp } from "react-icons/si";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  const email = "jeffersontelesdeoliveira@gmail.com";

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await new Promise((r) => setTimeout(r, 800));
      window.location.href = `mailto:${email}?subject=Contato via Portfólio&body=Nome: ${encodeURIComponent(form.name)}%0AEmail: ${encodeURIComponent(form.email)}%0AMensagem: ${encodeURIComponent(form.message)}`;
      setStatus("done");
    } catch {
      setStatus("error");
    }
  };

  const socialLinks = [
    { icon: FiLinkedin, url: "https://linkedin.com/in/jeffersonteless", label: "LinkedIn" },
    { icon: FiGithub, url: "https://github.com/JeffersonTeles", label: "GitHub" },
    { icon: SiWhatsapp, url: "https://wa.me/5544999277915", label: "WhatsApp" },
  ];

  return (
    <section
      id="contact"
      className="py-24 bg-black text-white border-t border-white/5"
      aria-labelledby="contact-heading"
    >
      <div className="page-container">
        <div className="max-w-2xl">
          <h2
            id="contact-heading"
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            {t("contact.heading")}
          </h2>

          <p className="text-white/60 leading-relaxed mb-8">
            {t("contact.description")}
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-white/60 mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-white/30"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label className="block text-sm text-white/60 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-white/30"
                  placeholder="seu@email.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-white/60 mb-2">
                Mensagem
              </label>
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-white/30 resize-none"
                placeholder="Conte sobre a oportunidade ou projeto..."
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-black font-medium rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              {status === "sending" ? (
                "Enviando..."
              ) : (
                <>
                  <FiSend size={16} />
                  Enviar mensagem
                </>
              )}
            </button>
          </form>

          <div className="mt-12 space-y-4">
            <div className="flex items-center gap-3 text-sm">
              <FiMail size={16} className="text-white/40" />
              <a
                href={`mailto:${email}`}
                className="text-white/80 hover:text-white"
              >
                {email}
              </a>
            </div>

            <div className="flex items-center gap-3 text-sm">
              <span className="text-white/40">Redes sociais</span>
              <div className="flex gap-4">
                {socialLinks.map(({ icon: Icon, url, label }) => (
                  <a
                    key={label}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="text-white/60 hover:text-white"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            <p className="text-sm text-white/60">
              {t("contact.location")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
