import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown, FiChevronUp, FiTerminal, FiMic, FiMicOff } from 'react-icons/fi';

const AIConsole = ({ isStealth }) => {
  const [isMinimized, setIsMinimized] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [logs, setLogs] = useState([
    "System initialized.",
    "Type /help to see available commands."
  ]);
  const scrollRef = useRef(null);

  // Web Speech API Setup
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = SpeechRecognition ? new SpeechRecognition() : null;

  if (recognition) {
    recognition.continuous = false;
    recognition.lang = 'pt-BR';
    recognition.interimResults = false;

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      addLog(`vocal@jt:~$ ${transcript}`);
      processCommand(transcript.toLowerCase());
      setIsListening(false);
    };

    recognition.onerror = () => setIsListening(false);
    recognition.onend = () => setIsListening(false);
  }

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

  const startListening = () => {
    if (!recognition) {
      addLog("Erro: Reconhecimento de voz não suportado neste navegador.");
      return;
    }
    setIsListening(true);
    recognition.start();
  };

  const speak = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'pt-BR';
    utterance.rate = 1;
    utterance.pitch = 0.8; // Deep technical voice
    window.speechSynthesis.speak(utterance);
  };

  const processCommand = (cmd) => {
    const cleanCmd = cmd.replace('/', '').trim();
    
    switch (cleanCmd) {
      case 'help':
      case 'ajuda':
        addLog("Available: /dark, /light, /github, /cv, /clear, /stealth, /pitch");
        break;
      case 'dark':
      case 'escuro':
        document.documentElement.classList.add('dark');
        addLog("Theme set to dark mode.");
        break;
      case 'light':
      case 'claro':
        document.documentElement.classList.remove('dark');
        addLog("Theme set to light mode.");
        break;
      case 'github':
        addLog("Opening GitHub profile...");
        window.open("https://github.com/JeffersonTeles", "_blank");
        break;
      case 'cv':
      case 'curriculo':
        addLog("Downloading curriculum...");
        window.open("/cv-jefferson-teles.pdf", "_blank");
        break;
      case 'clear':
      case 'limpar':
        setLogs(["Console cleared."]);
        break;
      case 'stealth':
      case 'hacker':
        addLog("ATENÇÃO: BYPASSING UI... ENTRANDO EM MODO STEALTH.");
        setTimeout(() => {
          window.dispatchEvent(new CustomEvent('toggle-stealth', { detail: true }));
        }, 1000);
        break;
      case 'pitch':
      case 'visao':
        addLog("Iniciando narrativa de visão profissional...");
        speak("Olá, eu sou Jefferson Teles. Especialista em automação e inteligência artificial. Transformo idéias complexas em sistemas escaláveis e experiências digitais de alto impacto.");
        break;
      default:
        addLog(`Unknown command: ${cmd}. Type /help.`);
    }
  };

  const handleCommand = (e) => {
    if (e.key === 'Enter' && inputValue.trim()) {
      addLog(`user@jt:~$ ${inputValue}`);
      processCommand(inputValue.toLowerCase());
      setInputValue("");
    }
  };

  return (
    <div className={`fixed bottom-12 right-12 z-[100] hidden xl:block w-80 pointer-events-auto transition-opacity duration-500 ${isStealth ? 'opacity-100' : 'opacity-100'}`}>
      <div className={`bg-white/10 dark:bg-black/60 backdrop-blur-xl border border-lusion-text/10 rounded-sm overflow-hidden shadow-2xl transition-all duration-700 ${isStealth ? 'border-green-500/50 scale-110' : ''}`}>
        <div 
          className="flex items-center justify-between gap-2 p-3 border-b border-lusion-text/5 cursor-pointer hover:bg-lusion-text/5 transition-colors"
          onClick={() => setIsMinimized(!isMinimized)}
        >
          <div className="flex items-center gap-2">
            <FiTerminal size={14} className={isStealth ? 'text-green-500' : 'text-lusion-primary'} />
            <span className={`text-[10px] font-bold tracking-lusion-wide uppercase ${isStealth ? 'text-green-500' : 'text-lusion-text/60 dark:text-white/60'}`}>
              {isStealth ? 'STEALTH_OS_CORE' : 'JT Studio Terminal v2.0'}
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
                  <p key={i} className={`text-[9px] font-mono leading-tight ${isStealth ? 'text-green-500/70' : 'text-lusion-text/50 dark:text-white/40'}`}>
                    <span className={isStealth ? 'text-green-500 mr-2' : 'text-lusion-primary mr-2'}>➜</span>
                    {log}
                  </p>
                ))}
              </div>
              <div className="flex items-center gap-3 border-t border-lusion-text/5 pt-3">
                <span className={`text-[9px] font-mono ${isStealth ? 'text-green-500' : 'text-lusion-primary'}`}>$</span>
                <input 
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleCommand}
                  placeholder={isListening ? "Ouvindo..." : "Type /help..."}
                  className={`bg-transparent border-none outline-none text-[9px] font-mono w-full placeholder:text-lusion-text/20 ${isStealth ? 'text-green-500' : 'text-lusion-text dark:text-white'}`}
                />
                <button 
                  onClick={startListening}
                  className={`transition-colors ${isListening ? 'text-red-500 animate-pulse' : isStealth ? 'text-green-500/40 hover:text-green-500' : 'text-lusion-text/20 hover:text-lusion-primary'}`}
                >
                  {isListening ? <FiMic size={14} /> : <FiMicOff size={14} />}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AIConsole;
