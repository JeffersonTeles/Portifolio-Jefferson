import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiCheckCircle,
  FiCopy,
} from "react-icons/fi";
import { SiWhatsapp } from "react-icons/si";
import { useTranslation } from "react-i18next";
import ContactModal from "../components/ContactModal";

const CopyEmailButton = ({ email }) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* ignore */
    }
  };
  return (
    <button
      onClick={handleCopy}
      className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-slate-100 transition-colors"
      aria-label="Copiar email"
    >
      {copied ? (
        <>
          <FiCheckCircle size={14} className="text-green-400" />
          <span className="text-green-400">Copiado</span>
        </>
      ) : (
        <>
          <FiCopy size={14} />
          <span>Copiar email</span>
        </>
      )}
    </button>
  );
};

const Contact = () => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const email = "jeffersontelesdeoliveira@gmail.com";

  const socialLinks = [
    {
      icon: FiLinkedin,
      url: "https://linkedin.com/in/jeffersonteless",
      label: "LinkedIn",
    },
    {
      icon: FiGithub,
      url: "https://github.com/JeffersonTeles",
      label: "GitHub",
    },
    {
      icon: SiWhatsapp,
      url: "https://wa.me/5544999277915",
      label: "WhatsApp",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-slate-950 border-t border-slate-800/80"
      aria-labelledby="contact-heading"
    >
      <div className="page-container">
        <div className="max-w-2xl">
          <motion.h2
            id="contact-heading"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-slate-100 mb-4 leading-tight"
          >
            {t("contact.heading")}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-slate-300 leading-relaxed mb-8"
          >
            {t("contact.description")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap gap-4 mb-8"
          >
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-6 py-3 bg-amber-400 text-slate-950 font-semibold text-sm rounded-lg hover:bg-amber-300 hover:shadow-[0_0_24px_rgba(251,191,36,0.3)] transition-all"
            >
              {t("contact.btnForm")}
            </button>
            <div className="flex items-center gap-4">
              {socialLinks.map(({ icon: Icon, url, label }) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-slate-400 hover:text-slate-100 transition-colors"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="space-y-2 text-sm text-slate-400"
          >
            <div className="flex items-center gap-2 flex-wrap">
              <FiMail size={16} />
              <a
                href={`mailto:${email}`}
              className="hover:text-slate-100 transition-colors"
              >
                {email}
              </a>
              <CopyEmailButton email={email} />
            </div>
            <p>{t("contact.location")}</p>
            <p className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400" />
              {t("contact.availability")}
            </p>
          </motion.div>
        </div>
      </div>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default Contact;
