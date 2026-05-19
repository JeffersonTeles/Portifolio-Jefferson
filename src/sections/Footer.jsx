import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 bg-white border-t border-lusion-text/5">
      <div className="container-lusion">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-lusion-primary rounded-full" />
            <span className="text-[10px] font-bold tracking-lusion-wide uppercase text-lusion-text">
              Jefferson Teles / © 2026
            </span>
          </div>
          
          <div className="flex gap-8">
            {['Twitter', 'Instagram', 'LinkedIn', 'Github'].map((link) => (
              <a 
                key={link} 
                href="#" 
                className="text-[10px] font-bold tracking-lusion-wide uppercase text-lusion-text/40 hover:text-lusion-primary transition-colors"
              >
                {link}
              </a>
            ))}
          </div>

          <div className="text-[10px] font-bold tracking-lusion-wide uppercase text-lusion-text/40">
            Designed for Precision
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
