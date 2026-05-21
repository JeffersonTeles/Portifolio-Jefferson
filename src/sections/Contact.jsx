import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { SiWhatsapp } from 'react-icons/si';

const Contact = () => {
  return (
    <section id="contact" className="py-40 bg-builder-bg">
      <div className="container mx-auto px-8 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
          
          {/* Left: Headline */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-builder-accent mb-8 block italic">
                02 / Uplink
              </span>
              <h2 className="text-5xl md:text-8xl font-extrabold text-white leading-[0.9] uppercase tracking-tighter mb-12">
                Let's build<br />
                <span className="text-builder-accent italic">Remarkable</span><br />
                Products.
              </h2>
              <p className="text-builder-muted text-xl md:text-2xl font-light max-w-2xl leading-relaxed mb-16">
                Estou ativamente buscando oportunidades como <span className="text-white">Software Engineer Júnior</span> e parcerias estratégicas em IA e Automação. 
              </p>

              <div className="flex flex-wrap gap-8 items-center">
                <a 
                  href="mailto:jeffersontelesdeoliveira@gmail.com"
                  className="px-10 py-5 bg-white text-black font-bold uppercase text-xs tracking-widest hover:bg-builder-accent hover:text-white transition-all duration-500 rounded-none"
                >
                  Start Conversation
                </a>
                <div className="flex gap-6">
                  {[
                    { icon: FiLinkedin, url: "https://linkedin.com/in/jeffersonteles" },
                    { icon: FiGithub, url: "https://github.com/JeffersonTeles" },
                    { icon: SiWhatsapp, url: "https://wa.me/5545999999999" }
                  ].map((social, i) => (
                    <a 
                      key={i} 
                      href={social.url} 
                      target="_blank" 
                      className="text-white/20 hover:text-white transition-colors p-2 border border-white/5 bg-white/[0.02] hover:border-builder-accent/40"
                    >
                      <social.icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Technical Metadata */}
          <div className="lg:col-span-4 hidden lg:block">
            <div className="p-12 border border-white/5 bg-white/[0.01] space-y-12">
              <div>
                <span className="text-[8px] font-mono text-white/20 uppercase tracking-widest block mb-3 text-glow">Location_Services</span>
                <p className="text-sm font-bold text-white uppercase tracking-tighter italic">Cascavel, PR • South America</p>
              </div>
              <div>
                <span className="text-[8px] font-mono text-white/20 uppercase tracking-widest block mb-3 text-glow">Availability_Status</span>
                <p className="text-sm font-bold text-builder-terminal uppercase tracking-widest animate-pulse">● Available for Q3_2026</p>
              </div>
              <div className="pt-8 border-t border-white/5">
                 <p className="text-[7px] font-mono text-white/10 leading-relaxed uppercase tracking-[0.2em]">
                   Secure Link Protocol // 0x55_4A_54_45_4C_45_53
                 </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
