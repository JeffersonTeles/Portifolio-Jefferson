import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const COMMANDS = {
  help: () => [
    "Comandos disponíveis:",
    "  about        — quem sou eu",
    "  skills       — stack técnica",
    "  projects     — projetos em produção",
    "  contact      — formas de contato",
    "  cv           — baixar currículo",
    "  clear        — limpar terminal",
    "  exit         — fechar terminal",
  ],
  about: () => [
    "Jefferson Teles — Software Engineer & AI Builder",
    "Localização    : Cascavel, PR — Brasil",
    "Formação       : Análise e Desenvolvimento de Sistemas · FAG",
    "Foco           : IA, Automação, Arquitetura Frontend",
    "",
    "Iniciei no hardware (redes, Linux, servidores),",
    "migrei para suporte estratégico na FaturÁgil e",
    "hoje construo produtos digitais de alto impacto.",
  ],
  skills: () => [
    "Frontend  ██████████  React, Next.js, Tailwind, Framer Motion",
    "Backend   ████████░░  Node.js, Express, Supabase, PostgreSQL",
    "Automação ████████░░  Python, Selenium, Playwright, Puppeteer",
    "IA/ML     ███████░░░  OpenAI API, Groq, LangChain, RAG",
    "Infra     ██████░░░░  Vercel, Railway, Docker, Linux",
    "Outros    ████████░░  Git, REST, WebSocket, Socket.io",
  ],
  projects: () => [
    "┌─────────────────────────────────────────────────────┐",
    "│  Maestria Docente  →  projeto-maestria-vercel.vercel.app",
    "│  Stack: React, Node.js, Supabase, Socket.io         │",
    "│  Métricas: 30+ docentes · 8 módulos · 60% redução   │",
    "├─────────────────────────────────────────────────────┤",
    "│  Casamento         →  casamento-ten-rho.vercel.app  │",
    "│  Stack: Next.js, Vercel, Framer Motion              │",
    "│  Métricas: 200+ convidados · 100% uptime            │",
    "├─────────────────────────────────────────────────────┤",
    "│  Bot de Vagas      →  [privado]                     │",
    "│  Stack: Python, Selenium, Playwright                │",
    "│  Métricas: 50+ candidaturas/dia · 4h economizadas   │",
    "└─────────────────────────────────────────────────────┘",
  ],
  contact: () => [
    "Email    : jeffersontelesdeoliveira@gmail.com",
    "LinkedIn : linkedin.com/in/jeffersonteles",
    "GitHub   : github.com/JeffersonTeles",
    "WhatsApp : disponível via LinkedIn",
  ],
  cv: () => {
    setTimeout(() => window.open('/cv-jefferson-teles.pdf', '_blank'), 300);
    return ["Abrindo currículo em nova aba..."];
  },
};

const TerminalMode = ({ onClose }) => {
  const [history, setLogs] = useState([
    "JEFFERSON_TELES v4.0.2 — Terminal Access",
    "Copyright (c) 2026 JT_INDUSTRIES. All rights reserved.",
    "",
    "Digite 'help' para ver os comandos disponíveis.",
    "",
  ]);
  const [input, setInput] = useState("");
  const [cmdHistory, setCmdHistory] = useState([]);
  const [histIdx, setHistIdx] = useState(-1);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const processCmd = (e) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      const idx = Math.min(histIdx + 1, cmdHistory.length - 1);
      setHistIdx(idx);
      setInput(cmdHistory[idx] || "");
      return;
    }
    if (e.key === "ArrowDown") {
      e.preventDefault();
      const idx = Math.max(histIdx - 1, -1);
      setHistIdx(idx);
      setInput(idx === -1 ? "" : cmdHistory[idx]);
      return;
    }
    if (e.key !== "Enter") return;

    const cmd = input.toLowerCase().trim();
    if (!cmd) return;

    const newHistory = [...history, `guest@jt:~$ ${input}`];
    setCmdHistory((prev) => [cmd, ...prev]);
    setHistIdx(-1);

    if (cmd === "exit") { onClose(); return; }
    if (cmd === "clear") { setLogs([]); setInput(""); return; }

    const fn = COMMANDS[cmd];
    if (fn) {
      newHistory.push(...fn());
    } else {
      newHistory.push(`bash: ${cmd}: command not found. Digite 'help'.`);
    }

    newHistory.push("");
    setLogs(newHistory);
    setInput("");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[1000] bg-black p-6 md:p-12 font-mono text-green-400 overflow-y-auto"
      onClick={() => inputRef.current?.focus()}
    >
      <div className="max-w-4xl mx-auto">
        <div className="mb-6 flex justify-between items-center border-b border-green-900/50 pb-3">
          <span className="text-[10px] text-green-600 uppercase tracking-widest">JT_ROOT_SHELL // SESSION_ACTIVE</span>
          <button
            onClick={onClose}
            className="text-[10px] border border-green-800 px-3 py-1 hover:bg-green-500 hover:text-black transition-all text-green-600"
          >
            EXIT [ESC]
          </button>
        </div>

        <div className="space-y-1 text-sm mb-4">
          {history.map((line, i) => (
            <p key={i} className={`break-all ${line.startsWith("guest@jt") ? "text-green-300" : "text-green-600/80"}`}>
              {line}
            </p>
          ))}
          <div ref={bottomRef} />
        </div>

        <div className="flex items-center gap-3 text-sm">
          <span className="text-green-800 shrink-0">guest@jt:~$</span>
          <input
            ref={inputRef}
            autoFocus
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={processCmd}
            className="bg-transparent border-none outline-none text-green-400 w-full caret-green-400"
            spellCheck={false}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default TerminalMode;
