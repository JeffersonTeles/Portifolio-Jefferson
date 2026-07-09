import React from "react";
import { motion } from "framer-motion";
import useTerminal from "../hooks/useTerminal";

const TerminalMode = ({ onClose }) => {
  const { history, input, setInput, inputRef, bottomRef, processCmd } = useTerminal({ onClose });

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
