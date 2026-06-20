import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiCheckCircle,
  FiCopy,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiClock,
} from "react-icons/fi";
import { SiWhatsapp } from "react-icons/si";
import MagneticButton from "../components/MagneticButton";
import ContactModal from "../components/ContactModal";

const CopyEmailButton = ({ email }) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback: select text
    }
  };
  return (
    <button
      onClick={handleCopy}
      className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 text-white/30 hover:text-white hover:border-white/30 transition-all text-[9px] font-bold uppercase tracking-widest"
      aria-label="Copiar email"
    >
      {copied ? (
        <>
          <FiCheckCircle size={12} className="text-green-400" />
          <span className="text-green-400">Copiado!</span>
        </>
      ) : (
        <>
          <FiCopy size={12} />
          <span>Copiar</span>
        </>
      )}
    </button>
  );
};

const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rateLimitRemaining, setRateLimitRemaining] = useState(0);
  const RATE_LIMIT_MS = 60000; // 1 minute rate limit
  const [lastSubmitTime, setLastSubmitTime] = useState(0);

  useEffect(() => {
    const checkRateLimit = () => {
      const now = Date.now();
      const remaining = Math.max(0, RATE_LIMIT_MS - (now - lastSubmitTime));
      setRateLimitRemaining(remaining);
      
      if (remaining > 0) {
        const timer = setTimeout(checkRateLimit, 1000);
        return () => clearTimeout(timer);
      }
    };

    checkRateLimit();
  }, [lastSubmitTime]);

  return (
    <section id="contact" className="py-40 bg-black relative">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="premium-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
          {/* Left: Headline */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="text-[11px] font-medium uppercase tracking-[0.5em] text-white/30 mb-8 block">
                05 / Uplink
              </span>
              <h2 className="text-5xl md:text-8xl font-extrabold text-white leading-[0.9] tracking-tight mb-12">
                Let's build
                <br />
                <span className="text-white/40 italic font-light">
                  Remarkable
                </span>
                <br />
                Products.
              </h2>
              <p className="text-white/50 text-xl md:text-2xl font-light max-w-2xl leading-relaxed mb-16">
                Ativamente buscando oportunidades como{" "}
                <span className="text-white font-medium">
                  Software Engineer
                </span>{" "}
                e parcerias estratégicas em IA e Automação. Remoto ou presencial
                em Cascavel, PR.
              </p>

              <div className="flex flex-wrap gap-10 items-center">
                <MagneticButton>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="px-12 py-5 bg-white text-black font-bold uppercase text-[10px] tracking-widest hover:scale-105 transition-all duration-500 rounded-full shadow-glass"
                    aria-label="Open contact form"
                  >
                    Start Conversation
                  </button>
                </MagneticButton>
                <div className="flex gap-8">
                  {[
                    {
                      icon: FiLinkedin,
                      url: "https://linkedin.com/in/jeffersonteles",
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
                  ].map((social, i) => (
                    <a
                      key={i}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit my ${social.label}`}
                      className="text-white/30 hover:text-white transition-all hover:-translate-y-1"
                    >
                      <social.icon size={22} />
                    </a>
                  ))}
                  <a
                    href="mailto:jeffersonteles.dev@gmail.com"
                    aria-label="Enviar email"
                    className="text-white/30 hover:text-white transition-all hover:-translate-y-1"
                  >
                    <FiMail size={22} />
                  </a>
                </div>
              </div>

              {/* Direct email with copy */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-16 flex items-center gap-4 group/email"
              >
                <span className="text-[8px] font-mono text-white/20 uppercase tracking-[0.4em]">
                  Direct_Link:
                </span>
                <a
                  href="mailto:jeffersonteles.dev@gmail.com"
                  className="text-sm font-mono text-white/50 hover:text-white transition-colors"
                >
                  jeffersonteles.dev@gmail.com
                </a>
                <CopyEmailButton email="jeffersonteles.dev@gmail.com" />
              </motion.div>
            </motion.div>
          </div>

          {/* Right: Technical Metadata */}
          <div className="lg:col-span-4 hidden lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="p-12 glass-panel rounded-3xl space-y-12"
            >
              <div>
                <span className="text-[8px] font-mono text-white/20 uppercase tracking-[0.4em] block mb-3">
                  Location_Services
                </span>
                <p className="text-sm font-bold text-white uppercase tracking-tighter">
                  Cascavel, PR • South America
                </p>
              </div>
              <div>
                <span className="text-[8px] font-mono text-white/20 uppercase tracking-[0.4em] block mb-3">
                  Availability_Status
                </span>
                <p className="text-sm font-bold text-white/60 uppercase tracking-widest">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse mr-2 align-middle" />
                  Disponível · Q3_2026
                </p>
              </div>
              <div className="pt-8 border-t border-white/[0.03]">
                <p className="text-[7px] font-mono text-white/10 leading-relaxed uppercase tracking-[0.3em]">
                  Secure Link Protocol // 0x55_4A_54_45_4C_45_53
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};

export default Contact;
