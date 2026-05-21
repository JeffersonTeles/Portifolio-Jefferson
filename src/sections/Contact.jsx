import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiLinkedin, FiGithub, FiArrowRight } from 'react-icons/fi';

const Contact = () => {
  return (
    <section id="contact" className="py-40 bg-luxury-bg">
      <div className="premium-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          
          {/* Executive Message */}
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-white/20 mb-8 block">
              03 / Contact & Inquiries
            </span>
            <h2 className="text-5xl md:text-7xl font-bold uppercase leading-[0.9] mb-12">
              Let’s build<br />
              <span className="text-luxury-accent italic">remarkable</span> products.
            </h2>
            <p className="text-luxury-muted text-xl leading-relaxed max-w-lg mb-12">
              I am currently open to junior engineering roles and technical collaborations. If you are looking for a reliable partner for your next project, reach out.
            </p>
            
            <div className="flex gap-8">
               <a href="https://linkedin.com/in/jeffersonteles" target="_blank" className="text-white/20 hover:text-white transition-colors"><FiLinkedin size={24} /></a>
               <a href="https://github.com/JeffersonTeles" target="_blank" className="text-white/20 hover:text-white transition-colors"><FiGithub size={24} /></a>
            </div>
          </div>

          {/* Simple Executive CTA */}
          <div className="border border-white/5 bg-white/[0.02] p-12 md:p-20 text-center">
            <h3 className="text-2xl font-medium mb-8">Direct Uplink</h3>
            <p className="text-luxury-muted mb-12">Available via secure electronic mail for strategic communication.</p>
            
            <a 
              href="mailto:jeffersontelesdeoliveira@gmail.com"
              className="btn-luxury-primary w-full inline-flex justify-center items-center gap-4"
            >
              Start Conversation
              <FiArrowRight />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
