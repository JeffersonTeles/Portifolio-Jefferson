import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const TerminalMode = ({ onClose }) => {
  const [history, setLogs] = useState([
    "JEFFERSON_TELES v4.0.2 - Terminal Access",
    "Copyright (c) 2026 JT_INDUSTRIES. All rights reserved.",
    "",
    "Type 'help' for a list of commands."
  ]);
  const [input, setInput] = useState("");
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const processCmd = (e) => {
    if (e.key === 'Enter') {
      const cmd = input.toLowerCase().trim();
      const newHistory = [...history, `guest@jt:~$ ${input}`];

      switch(cmd) {
        case 'help':
          newHistory.push("Available commands: about, skills, projects, contact, exit, clear");
          break;
        case 'about':
          newHistory.push("Jefferson Teles: Software Engineering Student & AI Expert. Specializing in high-impact automations.");
          break;
        case 'skills':
          newHistory.push("Tech Stack: React, Node.js, Java, PostgreSQL, Supabase, Playwright.");
          break;
        case 'exit':
          onClose();
          return;
        case 'clear':
          setLogs([]);
          setInput("");
          return;
        default:
          newHistory.push(`Command not found: ${cmd}`);
      }

      setLogs(newHistory);
      setInput("");
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-[1000] bg-black p-8 font-mono text-green-500 overflow-y-auto selection:bg-green-500 selection:text-black"
    >
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 flex justify-between items-center border-b border-green-900 pb-2">
          <span className="text-xs">JT_ROOT_SHELL // SESSION_ACTIVE</span>
          <button onClick={onClose} className="text-[10px] border border-green-500 px-2 py-0.5 hover:bg-green-500 hover:text-black transition-all">EXIT</button>
        </div>
        
        <div className="space-y-1 mb-8 text-sm">
          {history.map((line, i) => (
            <p key={i} className="break-all">{line}</p>
          ))}
          <div ref={bottomRef} />
        </div>

        <div className="flex items-center gap-3 text-sm">
          <span className="text-green-800">guest@jt:~$</span>
          <input 
            autoFocus
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={processCmd}
            className="bg-transparent border-none outline-none text-green-500 w-full"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default TerminalMode;
