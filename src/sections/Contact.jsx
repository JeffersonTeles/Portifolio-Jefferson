import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiLinkedin, FiGithub, FiMail } from 'react-icons/fi';
import { SiWhatsapp } from 'react-icons/si';

const Contact = () => {
  return (
    <section id="contact" className="py-40 bg-premium-bg relative overflow-hidden">
      {/* Background HUD Lines */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute top-0 left-1/2 w-px h-full bg-white" />
        <div className="absolute top-1/2 left-0 w-full h-px bg-white" />
      </div>

      <div className="premium-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
          
          {/* Left: Strategic CTA */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-premium-accent mb-8 block">
                04 / Uplink
              </span>
              <h2 className="text-5xl md:text-8xl font-extrabold text-white leading-[0.9] uppercase tracking-cinematic mb-12">
                Let’s build<br />
                <span className="text-white/20 outline-text italic">Remarkable</span><br />
                Products.
              </h2>
              
              <p className="text-premium-muted text-xl md:text-2xl font-light max-w-2xl leading-relaxed mb-16">
                Currently open to <span className="text-white">Software Engineering</span> roles and strategic technical collaborations. Secure your spot in the next development cycle.
              </p>

              <div className="flex flex-wrap gap-8">
                <a 
                  href="mailto:jeffersontelesdeoliveira@gmail.com" 
                  className="btn-premium flex items-center gap-4 group"
                >
                  Start Conversation
                  <FiArrowRight className="transition-transform group-hover:translate-x-2" />
                </a>
                <div className="flex items-center gap-6 px-4">
                  {[
                    { icon: FiLinkedin, url: "https://linkedin.com/in/jeffersonteles" },
                    { icon: FiGithub, url: "https://github.com/JeffersonTeles" },
                    { icon: SiWhatsapp, url: "https://wa.me/5545999999999" }
                  ].map((social, i) => (
                    <a 
                      key={i} 
                      href={social.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white/20 hover:text-premium-accent transition-all duration-300 transform hover:scale-110"
                    >
                      <social.icon size={24} />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Technical Meta */}
          <div className="lg:col-span-4 hidden lg:block">
            <div className="p-12 border border-white/5 bg-white/[0.01] backdrop-blur-sm rounded-sm">
               <div className="space-y-8">
                  <div>
                    <span className="text-[9px] font-mono text-white/20 uppercase tracking-widest block mb-2">Availability</span>
                    <p className="text-sm font-bold text-dark-terminal uppercase tracking-widest animate-pulse">● Slots Open for Q3-Q4</p>
                  </div>
                  <div>
                    <span className="text-[9px] font-mono text-white/20 uppercase tracking-widest block mb-2">Based In</span>
                    <p className="text-sm text-white font-medium uppercase tracking-widest tracking-tighter">Cascavel, PR • Brazil</p>
                  </div>
                  <div>
                    <span className="text-[9px] font-mono text-white/20 uppercase tracking-widest block mb-2">Response Time</span>
                    <p className="text-sm text-white font-medium uppercase tracking-widest tracking-tighter">&lt; 24 Hours Standard</p>
                  </div>
               </div>
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        .outline-text {
          -webkit-text-stroke: 1px rgba(255,255,255,0.2);
          color: transparent;
        }
      `}</style>
    </section>
  );
};

export default Contact;
