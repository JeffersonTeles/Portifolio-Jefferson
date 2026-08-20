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

  const inputClasses =
    "w-full px-4 py-3.5 bg-white/[0.02] border border-white/[0.06] rounded-xl text-sm text-white placeholder:text-white/12 focus:outline-none focus:border-accent/30 focus:bg-white/[0.03] focus:shadow-[0_0_20px_-8px_rgba(226,166,61,0.1)] transition-all duration-300";

  return (
    <section id="contact" className="section-gap border-t border-white/[0.04]">
      <div className="container-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: Info */}
          <div>
            <span className="section-label">05 — Contato</span>
            <h2 className="section-title mb-6">{t("contact.heading")}</h2>
            <p className="text-base text-white/25 leading-relaxed mb-14 max-w-md">
              {t("contact.description")}
            </p>

            <div className="space-y-5">
              {[
                {
                  icon: FiMapPin,
                  label: "Localização",
                  value: t("contact.location"),
                  type: "text",
                },
                {
                  icon: FiMail,
                  label: "Email",
                  value: "jeffersontelesdeoliveira@gmail.com",
                  type: "email",
                  href: "mailto:jeffersontelesdeoliveira@gmail.com",
                },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4 group">
                  <div className="w-11 h-11 rounded-xl bg-white/[0.02] border border-white/[0.05] flex items-center justify-center group-hover:border-accent/20 group-hover:bg-accent/5 transition-all duration-300">
                    <item.icon
                      size={16}
                      className="text-accent/40 group-hover:text-accent/70 transition-colors"
                    />
                  </div>
                  <div>
                    <p className="text-[10px] text-white/15 font-mono uppercase tracking-[0.2em] mb-0.5">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-sm text-white/40 hover:text-accent transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm text-white/40">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}

              {/* Status */}
              <div className="flex items-center gap-4 group">
                <div className="w-11 h-11 rounded-xl bg-white/[0.02] border border-white/[0.05] flex items-center justify-center">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                  </span>
                </div>
                <div>
                  <p className="text-[10px] text-white/15 font-mono uppercase tracking-[0.2em] mb-0.5">
                    Status
                  </p>
                  <p className="text-sm text-emerald-400/60">
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
                  className="block text-[10px] font-mono text-white/15 uppercase tracking-[0.2em] mb-2.5"
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
                  className={inputClasses}
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-[10px] font-mono text-white/15 uppercase tracking-[0.2em] mb-2.5"
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
                  className={inputClasses}
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-[10px] font-mono text-white/15 uppercase tracking-[0.2em] mb-2.5"
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
                  className={`${inputClasses} resize-none`}
                  placeholder="Oportunidade, dúvida, ou só um oi..."
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-white text-black font-semibold text-sm rounded-full hover:bg-white/90 hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.2)] transition-all duration-300 disabled:opacity-40 mt-2"
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
