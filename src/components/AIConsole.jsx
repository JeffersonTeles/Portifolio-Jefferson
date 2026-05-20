import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown, FiChevronUp, FiTerminal, FiMic, FiMicOff } from 'react-icons/fi';
import useSound from 'use-sound';

const AIConsole = ({ isStealth }) => {
  const [isMinimized, setIsMinimized] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [logs, setLogs] = useState([
    "JT_OS v3.0 initialized.",
    "System security protocols active.",
    "Voice recognition standby."
  ]);
  const scrollRef = useRef(null);

  // Sound Effects
  const [playClick] = useSound('https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3', { volume: 0.1 });
  const [playBeep] = useSound('https://assets.mixkit.co/active_storage/sfx/2568/2571-preview.mp3', { volume: 0.05 });

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
    "Analyzing global traffic...",
    "Optimizing kernel parameters...",
    "Neural network sync: 100%",
    "Bypassing standard UI filters...",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isMinimized && Math.random() > 0.7) {
        const randomMsg = messages[Math.floor(Math.random() * messages.length)];
        addLog(randomMsg);
        playBeep();
      }
    }, 8000);

    const handleCustomLog = (e) => addLog(e.detail);
    window.addEventListener('ai-log', handleCustomLog);

    return () => {
      clearInterval(interval);
      window.removeEventListener('ai-log', handleCustomLog);
    };
  }, [isMinimized, playBeep]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [logs]);

  const addLog = (msg) => {
    setLogs(prev => [...prev.slice(-15), msg]);
  };

  const startListening = () => {
    playClick();
    if (!recognition) {
      addLog("Erro: Reconhecimento de voz não suportado.");
      return;
    }
    setIsListening(true);
    recognition.start();
  };

  const speak = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'pt-BR';
    utterance.rate = 1.1;
    utterance.pitch = 0.8;
    window.speechSynthesis.speak(utterance);
  };

  const processCommand = (cmd) => {
    const cleanCmd = cmd.replace('/', '').trim().toLowerCase();
    playBeep();
    
    const questions = {
      react: /react|frontend|interface/i,
      java: /java|spring|backend/i,
      freela: /freela|trabalho|projeto|vaga/i,
      idade: /idade|anos/i,
      local: /local|onde|cascavel/i
    };

    if (questions.react.test(cleanCmd)) {
      addLog("JT_BOT: Sim, domino React, Tailwind e Framer Motion.");
      return;
    }
    if (questions.java.test(cleanCmd)) {
      addLog("JT_BOT: Conhecimento sólido em Java e Spring Boot.");
      return;
    }
    if (questions.freela.test(cleanCmd)) {
      addLog("JT_BOT: Disponível para oportunidades Júnior e Automação.");
      return;
    }

    switch (cleanCmd) {
      case 'help':
      case 'ajuda':
        addLog("Available: /dark, /light, /github, /cv, /stealth, /pitch, /terminal, /lang [pt/en]");
        break;
      case 'lang pt':
        import('../i18n').then(i18n => i18n.default.changeLanguage('pt'));
        addLog("Idioma alterado para Português.");
        break;
      case 'lang en':
        import('../i18n').then(i18n => i18n.default.changeLanguage('en'));
        addLog("Language switched to English.");
        break;
      case 'terminal':
        addLog("EXEC: LAUNCHING PURE_SHELL_V4...");
        setTimeout(() => {
          window.dispatchEvent(new CustomEvent('toggle-terminal', { detail: true }));
        }, 1000);
        break;
      case 'dark':
        document.documentElement.classList.add('dark');
        addLog("Dark mode override active.");
        break;
      case 'light':
        document.documentElement.classList.remove('dark');
        addLog("Light mode fallback active.");
        break;
      case 'stealth':
        addLog("CRITICAL: ENTERING STEALTH PROTOCOL...");
        setTimeout(() => {
          window.dispatchEvent(new CustomEvent('toggle-stealth', { detail: true }));
        }, 1000);
        break;
      case 'pitch':
        addLog("Voice narrative initiated.");
        speak("Olá, eu sou Jefferson Teles. Desenvolvedor focado em IA e automação.");
        break;
      case 'clear':
        setLogs(["Console cleared."]);
        break;
      default:
        addLog(`Unknown request: ${cmd}`);
    }
  };

  const handleCommand = (e) => {
    if (e.key === 'Enter' && inputValue.trim()) {
      playClick();
      addLog(`user@jt:~$ ${inputValue}`);
      processCommand(inputValue.toLowerCase());
      setInputValue("");
    }
  };

  return (
    <div className="fixed bottom-12 right-12 z-[100] hidden xl:block w-80 pointer-events-auto">
      <div className={`bg-black/80 backdrop-blur-xl border border-white/10 rounded-sm overflow-hidden shadow-2xl transition-all duration-700 ${isStealth ? 'border-dark-terminal/50' : ''}`}>
        <div 
          className="flex items-center justify-between gap-2 p-3 border-b border-white/5 cursor-pointer hover:bg-white/5"
          onClick={() => { setIsMinimized(!isMinimized); playClick(); }}
        >
          <div className="flex items-center gap-2">
            <FiTerminal size={14} className={isStealth ? 'text-dark-terminal' : 'text-dark-accent'} />
            <span className={`text-[10px] font-mono font-bold tracking-widest uppercase ${isStealth ? 'text-dark-terminal' : 'text-dark-accent/60'}`}>
              {isStealth ? 'STEALTH_OS_CORE' : 'JT_INTERFACE_v3.0'}
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
                  <p key={i} className={`text-[9px] font-mono leading-tight ${isStealth ? 'text-dark-terminal/70' : 'text-white/40'}`}>
                    <span className={isStealth ? 'text-dark-terminal mr-2' : 'text-dark-accent mr-2'}>➜</span>
                    {log}
                  </p>
                ))}
              </div>
              <div className="flex items-center gap-3 border-t border-white/5 pt-3">
                <span className={`text-[9px] font-mono ${isStealth ? 'text-dark-terminal' : 'text-dark-accent'}`}>$</span>
                <input 
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleCommand}
                  placeholder={isListening ? "Ouvindo som..." : "Aguardando input..."}
                  className={`bg-transparent border-none outline-none text-[9px] font-mono w-full placeholder:text-white/10 ${isStealth ? 'text-dark-terminal' : 'text-white'}`}
                />
                <button 
                  onClick={startListening}
                  className={`transition-colors ${isListening ? 'text-red-500 animate-pulse' : 'text-white/20 hover:text-dark-accent'}`}
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
