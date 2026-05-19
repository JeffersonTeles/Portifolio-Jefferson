import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown, FiChevronUp, FiTerminal } from 'react-icons/fi';

const AIConsole = () => {
  const [isMinimized, setIsMinimized] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [logs, setLogs] = useState([
    "System initialized.",
    "Type /help to see available commands."
  ]);
  const scrollRef = useRef(null);

  const messages = [
    "Analyzing UX patterns...",
    "Optimizing automation flows...",
    "Neural network connected.",
    "Status: High performance active.",
    "Scaling API infrastructure...",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isMinimized && Math.random() > 0.7) {
        const randomMsg = messages[Math.floor(Math.random() * messages.length)];
        addLog(randomMsg);
      }
    }, 8000);

    const handleCustomLog = (e) => addLog(e.detail);
    window.addEventListener('ai-log', handleCustomLog);

    return () => {
      clearInterval(interval);
      window.removeEventListener('ai-log', handleCustomLog);
    };
  }, [isMinimized]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [logs]);

  const addLog = (msg) => {
    setLogs(prev => [...prev.slice(-15), msg]);
  };

  const handleCommand = (e) => {
    if (e.key === 'Enter' && inputValue.trim()) {
      const cmd = inputValue.trim().toLowerCase();
      addLog(`user@jt:~$ ${cmd}`);
      
      switch (cmd) {
        case '/help':
          addLog("Available: /dark, /light, /github, /cv, /clear, /about");
          break;
        case '/dark':
          document.documentElement.classList.add('dark');
          addLog("Theme set to dark mode.");
          break;
        case '/light':
          document.documentElement.classList.remove('dark');
          addLog("Theme set to light mode.");
          break;
        case '/github':
          addLog("Opening GitHub profile...");
          window.open("https://github.com/JeffersonTeles", "_blank");
          break;
        case '/cv':
          addLog("Downloading curriculum...");
          window.open("/cv-jefferson-teles.pdf", "_blank");
          break;
        case '/clear':
          setLogs(["Console cleared."]);
          break;
        case '/about':
          addLog("Jefferson Teles - Full Stack Dev & AI Expert.");
          break;
        default:
          addLog(`Unknown command: ${cmd}. Type /help.`);
      }
      setInputValue("");
    }
  };

  return (
    <div className="fixed bottom-12 right-12 z-40 hidden xl:block w-80 pointer-events-auto">
      <div className="bg-white/10 dark:bg-black/40 backdrop-blur-md border border-lusion-text/5 rounded-sm overflow-hidden shadow-2xl transition-colors duration-700">
        <div 
          className="flex items-center justify-between gap-2 p-3 border-b border-lusion-text/5 cursor-pointer hover:bg-lusion-text/5 transition-colors"
          onClick={() => setIsMinimized(!isMinimized)}
        >
          <div className="flex items-center gap-2">
            <FiTerminal size={14} className="text-lusion-primary" />
            <span className="text-[10px] font-bold tracking-lusion-wide uppercase text-lusion-text/60 dark:text-white/60">
              JT Studio Terminal v1.0
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
                className="space-y-1 h-32 overflow-y-auto mb-3 scrollbar-hide"
              >
                {logs.map((log, i) => (
                  <p key={i} className="text-[9px] font-mono text-lusion-text/50 dark:text-white/40 leading-tight">
                    <span className="text-lusion-primary mr-2">➜</span>
                    {log}
                  </p>
                ))}
              </div>
              <div className="flex items-center gap-2 border-t border-lusion-text/5 pt-3">
                <span className="text-[9px] font-mono text-lusion-primary">$</span>
                <input 
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleCommand}
                  placeholder="Type command..."
                  className="bg-transparent border-none outline-none text-[9px] font-mono text-lusion-text dark:text-white w-full placeholder:text-lusion-text/20"
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
