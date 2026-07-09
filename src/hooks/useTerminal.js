import { useEffect, useRef, useState } from "react";

const INITIAL_HISTORY = [
  "JEFFERSON_TELES v4.0.2 — Terminal Access",
  "Copyright (c) 2026 JT_INDUSTRIES. All rights reserved.",
  "",
  "Digite 'help' para ver os comandos disponíveis.",
  "",
];

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
    "Jefferson Teles — desenvolvedor em transição de suporte para software",
    "Localização    : Cascavel, PR — Brasil",
    "Formação       : Engenharia de Software · FAG",
    "Foco           : frontend, backend, automação e suporte técnico",
    "",
    "Base técnica em redes, Linux e hardware.",
    "Experiência em suporte N2 e automação de processos.",
    "Projetos públicos e privados com contexto real.",
  ],
  skills: () => [
    "Frontend  React, Vite, Tailwind, Framer Motion",
    "Backend   Node.js, Express, Supabase, PostgreSQL",
    "Automação n8n, Python, webhooks, integrações",
    "Infra     Linux, Vercel, Git, deploy e manutenção",
    "Outros    APIs REST, suporte técnico, documentação",
  ],
  projects: () => [
    "┌─────────────────────────────────────────────────────┐",
    "│  Maestria Docente  →  projeto-maestria-vercel.vercel.app",
    "│  Status: repositório privado / projeto de TCC       │",
    "│  Stack: React, Node.js, Supabase                    │",
    "├─────────────────────────────────────────────────────┤",
    "│  Casamento         →  casamento-ten-rho.vercel.app  │",
    "│  Status: site publicado                              │",
    "│  Stack: Next.js, Vercel, Framer Motion               │",
    "├─────────────────────────────────────────────────────┤",
    "│  Interface X11     →  GitHub / Linux                 │",
    "│  Status: open source                                 │",
    "│  Stack: JavaScript, Python, Linux                    │",
    "└─────────────────────────────────────────────────────┘",
  ],
  contact: () => [
    "Email    : jeffersontelesdeoliveira@gmail.com",
    "LinkedIn : linkedin.com/in/jeffersonteles",
    "GitHub   : github.com/JeffersonTeles",
    "WhatsApp : disponível via LinkedIn",
  ],
  cv: async () => {
    const possiblePaths = [
      "/Curriculo_Jefferson_Teles_TI.pdf",
      "/cv-jefferson-teles.pdf",
      "/Curriculo_Jefferson_Teles.pdf",
    ];

    for (const path of possiblePaths) {
      const response = await fetch(path, { method: "HEAD" }).catch(() => null);
      if (response?.ok) {
        setTimeout(() => window.open(path, "_blank"), 300);
        return ["Abrindo currículo em nova aba..."];
      }
    }

    return ["Erro: Arquivo não encontrado"];
  },
};

const useTerminal = ({ onClose }) => {
  const [history, setHistory] = useState(INITIAL_HISTORY);
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

  const processCmd = async (e) => {
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

    const rawInput = input;
    const cmd = rawInput.toLowerCase().trim();
    if (!cmd) return;

    setCmdHistory((prev) => [cmd, ...prev]);
    setHistIdx(-1);

    if (cmd === "exit") {
      onClose();
      return;
    }

    if (cmd === "clear") {
      setHistory([]);
      setInput("");
      return;
    }

    const commandLine = `guest@jt:~$ ${rawInput}`;
    const fn = COMMANDS[cmd];

    if (fn) {
      const output = await fn();
      setHistory((prev) => [...prev, commandLine, ...output, ""]);
    } else {
      setHistory((prev) => [
        ...prev,
        commandLine,
        `bash: ${cmd}: command not found. Digite 'help'.`,
        "",
      ]);
    }

    setInput("");
  };

  return {
    history,
    input,
    setInput,
    inputRef,
    bottomRef,
    processCmd,
  };
};

export default useTerminal;
