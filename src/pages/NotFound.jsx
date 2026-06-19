import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiTerminal } from 'react-icons/fi';

const glitchLines = [
  'ERROR: route_not_found',
  'STACK: null_pointer_exception',
  'STATUS: 404_NOT_INITIALIZED',
  'RECOVERY: redirecting_to_base...',
];

const NotFound = () => {
  const [line, setLine] = useState(0);

  useEffect(() => {
    if (line >= glitchLines.length) return;
    const t = setTimeout(() => setLine(l => l + 1), 400);
    return () => clearTimeout(t);
  }, [line]);

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white p-8">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="text-center max-w-xl"
      >
        <div className="text-[10rem] md:text-[16rem] font-extrabold text-white/[0.04] leading-none select-none tracking-tight">
          404
        </div>

        <div className="mt-[-2rem] mb-12 p-6 bg-white/[0.02] border border-white/5 rounded-2xl text-left font-mono">
          <div className="flex items-center gap-2 mb-4 text-white/20">
            <FiTerminal size={12} />
            <span className="text-[9px] uppercase tracking-widest">System_Log</span>
          </div>
          {glitchLines.slice(0, line).map((l, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, x: -5 }}
              animate={{ opacity: 1, x: 0 }}
              className={`text-[11px] mb-1 ${i === glitchLines.length - 1 ? 'text-white/60' : 'text-white/20'}`}
            >
              <span className="text-white/10 mr-2">{'>'}</span>{l}
            </motion.p>
          ))}
          <motion.div
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.6, repeat: Infinity }}
            className="inline-block w-2 h-3 bg-white/30 ml-4 mt-1"
          />
        </div>

        <p className="text-white/40 mb-12 font-light">
          Esta rota não existe no sistema.
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-3 px-10 py-4 bg-white text-black font-bold uppercase text-[10px] tracking-widest rounded-full hover:scale-105 transition-all shadow-glass group"
        >
          <FiArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          Voltar ao Sistema
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
