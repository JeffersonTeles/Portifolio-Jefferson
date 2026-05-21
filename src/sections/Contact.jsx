import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiLinkedin, FiGithub, FiMail, FiCopy, FiCheck } from 'react-icons/fi';

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = "jeffersontelesdeoliveira@gmail.com";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    window.dispatchEvent(new CustomEvent('ai-log', { 
      detail: "COMM_LINK: Email address copied to clipboard." 
    }));
  };

  const containerVars = {
    initial: { opacity: 0 },
    whileInView: { 
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    },
    viewport: { once: true }
  };

  const itemVars = {
    initial: { opacity: 0, y: 20 },
    whileInView: { 
      opacity: 1, y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const socialLinks = [
    { name: 'LinkedIn', icon: FiLinkedin, url: 'https://linkedin.com/in/jeffersonteles' },
    { name: 'GitHub', icon: FiGithub, url: 'https://github.com/JeffersonTeles' },
    { name: 'Email', icon: FiMail, url: `mailto:${email}` }
  ];

  return (
    <section id="contact" className="section-container relative overflow-hidden pb-40">
      <motion.h3 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="font-mono text-dark-accent text-sm tracking-[0.3em] uppercase mb-24"
      >
        console.log("vamos_construir()")
      </motion.h3>

      <div className="flex flex-col items-center text-center">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-7xl lg:text-8xl font-black text-white leading-tight mb-16 max-w-4xl tracking-premium"
        >
          Vamos construir algo <span className="text-dark-terminal drop-shadow-[0_0_20px_rgba(0,255,136,0.2)]">juntos.</span>
        </motion.h2>

        {/* Dynamic Email Display */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          onClick={copyEmail}
          className="group relative cursor-pointer mb-20 px-6 py-4 border border-white/5 bg-white/[0.01] rounded-sm hover:border-dark-accent/30 transition-all duration-500"
        >
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs md:text-sm text-dark-muted group-hover:text-white transition-colors">
              {email}
            </span>
            {copied ? <FiCheck className="text-dark-terminal" /> : <FiCopy className="text-dark-accent opacity-0 group-hover:opacity-100 transition-all" />}
          </div>
          <AnimatePresence>
            {copied && (
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="absolute -top-8 left-1/2 -translate-x-1/2 font-mono text-[8px] uppercase text-dark-terminal tracking-widest"
              >
                Copiado!
              </motion.span>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Social Stagger Buttons */}
        <motion.div 
          variants={containerVars}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-6"
        >
          {socialLinks.map((link, i) => (
            <motion.a
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVars}
              className="btn-outline group min-w-[160px]"
            >
              <link.icon className="group-hover:text-dark-accent transition-colors" />
              {link.name}
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Decorative Background HUD */}
      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 opacity-5 pointer-events-none select-none">
        <span className="font-mono text-[15vw] font-black uppercase text-white whitespace-nowrap">Uplink</span>
      </div>
    </section>
  );
};

export default Contact;
