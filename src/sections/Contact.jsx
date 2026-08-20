import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FiSend, FiMapPin, FiMail } from "react-icons/fi";

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => {
      setStatus("sent");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus(null), 3000);
    }, 1000);
  };

  return (
    <section id="contact" className="section-gap border-t border-white/[0.04]">
      <div className="container-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: Info */}
          <div>
            <span className="section-label">{t("contact.label")}</span>
            <h2 className="section-title mb-6">{t("contact.heading")}</h2>
            <p className="text-base text-white/30 leading-relaxed mb-12 max-w-md">
              {t("contact.description")}
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-center">
                  <FiMapPin size={16} className="text-accent/60" />
                </div>
                <div>
                  <p className="text-xs text-white/20 font-mono uppercase tracking-wider">
                    Localização
                  </p>
                  <p className="text-sm text-white/50">
                    {t("contact.location")}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-center">
                  <FiMail size={16} className="text-accent/60" />
                </div>
                <div>
                  <p className="text-xs text-white/20 font-mono uppercase tracking-wider">
                    Email
                  </p>
                  <a
                    href="mailto:jeffersontelesdeoliveira@gmail.com"
                    className="text-sm text-white/50 hover:text-accent transition-colors"
                  >
                    jeffersontelesdeoliveira@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-center">
                  <span className="text-emerald-500 text-xs">●</span>
                </div>
                <div>
                  <p className="text-xs text-white/20 font-mono uppercase tracking-wider">
                    Status
                  </p>
                  <p className="text-sm text-emerald-400/70">
                    {t("contact.availability")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-mono text-white/20 uppercase tracking-wider mb-2"
                >
                  Nome
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.06] rounded-lg text-sm text-white placeholder:text-white/15 focus:outline-none focus:border-accent/40 transition-colors"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-mono text-white/20 uppercase tracking-wider mb-2"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.06] rounded-lg text-sm text-white placeholder:text-white/15 focus:outline-none focus:border-accent/40 transition-colors"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-mono text-white/20 uppercase tracking-wider mb-2"
                >
                  Mensagem
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.06] rounded-lg text-sm text-white placeholder:text-white/15 focus:outline-none focus:border-accent/40 transition-colors resize-none"
                  placeholder="Oportunidade, dúvida, ou só um oi..."
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-black font-semibold text-sm rounded-full hover:bg-white/90 transition-all disabled:opacity-50"
              >
                {status === "sending" ? (
                  "Enviando..."
                ) : status === "sent" ? (
                  "Enviado!"
                ) : (
                  <>
                    {t("contact.btnForm")}
                    <FiSend size={14} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
