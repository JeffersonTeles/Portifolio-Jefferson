import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiDownload, FiMail, FiTerminal, FiExternalLink } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import { scroller } from 'react-scroll';

const CustomContextMenu = () => {
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const { t } = useTranslation();

  useEffect(() => {
    const handleContextMenu = (e) => {
      e.preventDefault();
      setPosition({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };

    const handleClick = () => setVisible(false);
    const handleScroll = () => setVisible(false);

    window.addEventListener('contextmenu', handleContextMenu);
    window.addEventListener('click', handleClick);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('contextmenu', handleContextMenu);
      window.removeEventListener('click', handleClick);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (!visible) return null;

  const menuItems = [
    { label: "View Source", icon: FiGithub, action: () => window.open('https://github.com/JeffersonTeles', '_blank') },
    { label: "Download CV", icon: FiDownload, action: () => window.open('/resume.pdf', '_blank') },
    { label: "Contact Me", icon: FiMail, action: () => scroller.scrollTo('contact', { smooth: true, offset: -100 }) },
    { label: "Technical Lab", icon: FiTerminal, action: () => scroller.scrollTo('lab', { smooth: true, offset: -100 }) },
  ];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: -10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="fixed z-[500] w-56 glass-panel rounded-xl overflow-hidden shadow-2xl border-white/10"
        style={{ top: position.y, left: position.x }}
      >
        <div className="p-2 bg-white/[0.02]">
           <div className="px-3 py-2 mb-1">
              <span className="text-[8px] font-mono text-white/20 uppercase tracking-[0.3em]">Developer_Tools</span>
           </div>
           {menuItems.map((item, i) => (
             <button
               key={i}
               onClick={item.action}
               className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-white/5 transition-colors group text-left"
             >
               <div className="flex items-center gap-3">
                  <item.icon size={14} className="text-white/40 group-hover:text-white transition-colors" />
                  <span className="text-[11px] font-medium text-white/60 group-hover:text-white transition-colors">{item.label}</span>
               </div>
               <FiExternalLink size={10} className="text-white/10 group-hover:text-white/40 transition-colors" />
             </button>
           ))}
           <div className="mt-2 pt-2 border-t border-white/[0.05] px-3 pb-1 flex justify-between items-center">
              <span className="text-[7px] font-mono text-white/10">0x53_59_53_54_45_4D</span>
              <span className="text-[7px] font-mono text-white/20 italic">v4.0.2</span>
           </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CustomContextMenu;
