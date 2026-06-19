import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown, FiChevronUp, FiTerminal } from 'react-icons/fi';
import i18n from '../i18n';
import { useSection } from '../context/SectionContext';

const AIConsole = () => {
  const { currentSection } = useSection();
  const [isMinimized, setIsMinimized] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [logs, setLogs] = useState([
    "JT_OS v4.0.2 initialized.",
    "System security protocols active.",
    "Type /help for commands."
  ]);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [logs]);

  // CLI Narrative (Feature 4)
  useEffect(() => {
    const messages = {
      hero: "SYNC: Core link established with main module.",
      about: "ACCESS: Identity vault authorized. Scanning history...",
      skills: "ANALYSIS: Technical matrix active. Evaluating stack...",
      projects: "DATA_FETCH: Archive access granted. Rendering works...",
      lab: "RESEARCH: Experimental drive active. Sandboxes ready.",
      services: "UPLINK: Capabilities module online.",
      contact: "COMM_LINK: Uplink established. Waiting for handshake."
    };
    if (messages[currentSection]) {
      addLog(`SYSTEM: ${messages[currentSection]}`);
    }
  }, [currentSection]); // addLog doesn't change, we can disable warning or wrap addLog in useCallback, wait let's just do an eslint-disable-next-line

  const addLog = (msg) => {
    setLogs(prev => [...prev.slice(-20), msg]);
  };

  const processCommand = (cmd) => {
    const cleanCmd = cmd.replace('/', '').trim().toLowerCase();
    
    switch (cleanCmd) {
      case 'help':
      case 'ajuda':
        addLog("Available: /lang [pt/en], /github, /cv, /clear, /about");
        break;
      case 'lang en':
        i18n.changeLanguage('en');
        addLog("Language synced to English.");
        break;
      case 'lang pt':
        i18n.changeLanguage('pt');
        addLog("Idioma alterado para Português.");
        break;
      case 'github':
        addLog("Opening GitHub...");
        window.open("https://github.com/JeffersonTeles", "_blank");
        break;
      case 'cv':
        addLog("Downloading resume...");
        window.open("/resume.pdf", "_blank");
        break;
      case 'clear':
        setLogs(["Console cleared."]);
        break;
      case 'about':
        addLog("Jefferson Teles: Software Eng Student @ FAG. Support to Dev transition.");
        break;
      default:
        addLog(`Unknown request: ${cmd}`);
    }
  };

  const handleCommand = (e) => {
    if (e.key === 'Enter' && inputValue.trim()) {
      addLog(`user@jt:~$ ${inputValue}`);
      processCommand(inputValue);
      setInputValue("");
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100] hidden xl:block w-80 pointer-events-auto">
      <div className="bg-black/60 backdrop-blur-xl border border-white/10 rounded-sm overflow-hidden shadow-2xl transition-all duration-700">
        <div 
          className="flex items-center justify-between gap-2 p-3 border-b border-white/5 cursor-pointer hover:bg-white/5"
          onClick={() => setIsMinimized(!isMinimized)}
        >
          <div className="flex items-center gap-2">
            <FiTerminal size={14} className="text-dark-accent" />
            <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-dark-accent/60">
              JT_CLI_CORE_V4.0.2
            </span>
          </div>
          {isMinimized ? <FiChevronUp size={14} /> : <FiChevronDown size={14} />}
        </div>
        
        <AnimatePresence>
          {!isMinimized && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="p-4"
            >
              <div 
                ref={scrollRef}
                className="space-y-1 h-40 overflow-y-auto mb-3 scrollbar-hide"
              >
                {logs.map((log, i) => (
                  <p key={i} className="text-[9px] font-mono leading-tight text-white/40">
                    <span className="text-dark-accent mr-2">➜</span>
                    {log}
                  </p>
                ))}
              </div>
              <div className="flex items-center gap-3 border-t border-white/5 pt-3">
                <span className="text-[9px] font-mono text-dark-accent">$</span>
                <input 
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleCommand}
                  placeholder="Waiting for input..."
                  className="bg-transparent border-none outline-none text-[9px] font-mono w-full text-white placeholder:text-white/10"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AIConsole;
