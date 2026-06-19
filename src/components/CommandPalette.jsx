import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSearch, FiCommand, FiHome, FiUser, FiCode, FiLayers, FiMail, FiMoon, FiSun, FiGlobe, FiDownload, FiTerminal } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import { scroller } from 'react-scroll';

const CommandPalette = ({ isDarkMode, toggleTheme }) => {
  const [isOpen, setIsActive] = useState(false);
  const [query, setQuery] = useState("");
  const { t, i18n } = useTranslation();
  const projects = t('projects.list', { returnObjects: true });

  useEffect(() => {
    const down = (e) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsActive((open) => !open);
      }
      if (e.key === "Escape") setIsActive(false);
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const actions = [
    { type: 'nav', icon: FiHome, label: t('nav.home'), action: () => scroller.scrollTo('hero', { smooth: true, offset: -100 }) },
    { type: 'nav', icon: FiUser, label: t('nav.about'), action: () => scroller.scrollTo('about', { smooth: true, offset: -100 }) },
    { type: 'nav', icon: FiLayers, label: t('nav.projects'), action: () => scroller.scrollTo('projects', { smooth: true, offset: -100 }) },
    { type: 'sys', icon: isDarkMode ? FiSun : FiMoon, label: isDarkMode ? "Light Mode" : "Dark Mode", action: () => { toggleTheme(); } },
    { type: 'sys', icon: FiDownload, label: t('hero.btnResume'), action: () => window.open('/resume.pdf', '_blank') },
  ];

  const projectActions = projects.map(p => ({
    type: 'project',
    icon: FiCode,
    label: `Project: ${p.title}`,
    desc: p.stack.join(', '),
    action: () => scroller.scrollTo('projects', { smooth: true, offset: -100 })
  }));

  const allActions = [...actions, ...projectActions];

  const filteredActions = allActions.filter(item => 
    item.label.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <div className="fixed bottom-8 left-8 z-[100] hidden xl:block">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsActive(true)}
          className="flex items-center gap-3 px-4 py-2 bg-white/[0.03] border border-white/[0.05] rounded-full backdrop-blur-md text-[10px] font-medium uppercase tracking-widest text-white/40 hover:text-white transition-all shadow-glass pointer-events-auto"
        >
          <FiSearch size={14} />
          <span>Press</span>
          <div className="flex items-center gap-1 bg-white/10 px-1.5 py-0.5 rounded text-[8px]">
            <FiCommand size={8} />
            <span>K</span>
          </div>
        </motion.button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[200] flex items-start justify-center pt-[15vh] px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsActive(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm pointer-events-auto"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              className="relative w-full max-w-xl glass-panel rounded-2xl overflow-hidden shadow-2xl border-white/10 pointer-events-auto"
            >
              <div className="flex items-center gap-4 p-6 border-b border-white/[0.05]">
                <FiSearch size={20} className="text-white/20" />
                <input
                  autoFocus
                  placeholder="Quantum Search: Type projects, stacks or commands..."
                  className="bg-transparent border-none outline-none text-white w-full text-lg placeholder:text-white/10"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </div>

              <div className="p-2 max-h-[60vh] overflow-y-auto custom-scrollbar">
                {filteredActions.length > 0 ? (
                  filteredActions.map((item, i) => (
                    <button
                      key={i}
                      onClick={() => { item.action(); setIsActive(false); }}
                      className="w-full flex items-center justify-between p-4 rounded-xl hover:bg-white/[0.05] transition-colors group text-left"
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                          item.type === 'project' ? 'bg-white/5 border border-white/10 text-white' : 'bg-white/[0.03] border border-white/[0.05] text-white/40 group-hover:text-white'
                        }`}>
                          <item.icon size={18} />
                        </div>
                        <div className="flex flex-col">
                           <span className="text-white/60 group-hover:text-white font-medium text-sm">{item.label}</span>
                           {item.desc && <span className="text-[10px] text-white/20 font-mono uppercase tracking-widest">{item.desc}</span>}
                        </div>
                      </div>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                         <span className="text-[9px] font-mono text-white/20">Execute ↵</span>
                      </div>
                    </button>
                  ))
                ) : (
                  <div className="p-8 text-center text-white/20 text-sm">No neural links found for "{query}"</div>
                )}
              </div>

              <div className="p-4 bg-white/[0.02] border-t border-white/[0.03] flex justify-between items-center px-6">
                 <span className="text-[8px] font-mono text-white/10 uppercase tracking-[0.2em]">Quantum_Discovery_Link</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CommandPalette;
