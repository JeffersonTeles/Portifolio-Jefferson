import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCpu, FiX, FiMic, FiMicOff } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import useVoiceControl from '../hooks/useVoiceControl';

const AIDigitalTwin = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isVoiceActive, setIsVoiceActive] = useState(false);
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState(t('ai.greeting'));
  const [lastVoiceCmd, setLastVoiceCmd] = useState("");

  useVoiceControl(isVoiceActive, (cmd) => {
    setLastVoiceCmd(cmd);
    setResponse(`VOICE_CMD: ${cmd}`);
  });

  const handleSearch = (e) => {
    e.preventDefault();
    const q = query.toLowerCase();
    let reply = "No records found in my current matrix. Try asking about skills, bio, or status.";

    if (q.includes('skill') || q.includes('stack') || q.includes('tecnologia')) reply = t('ai.knowledge.skills');
    if (q.includes('bio') || q.includes('história') || q.includes('quem')) reply = t('ai.knowledge.bio');
    if (q.includes('status') || q.includes('vaga') || q.includes('disponível')) reply = t('ai.knowledge.status');
    if (q.includes('onde') || q.includes('mora') || q.includes('local')) reply = t('ai.knowledge.location');

    setResponse(reply);
    setQuery("");
  };

  return (
    <>
      {/* Floating Agent Trigger */}
      <div className="fixed bottom-24 right-8 z-[150] hidden xl:block">
        <motion.button
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(true)}
          className="w-12 h-12 rounded-2xl glass-panel flex items-center justify-center text-white/40 hover:text-white transition-all border-white/10 group shadow-glow pointer-events-auto"
        >
          <div className="relative">
             <FiCpu size={20} className="group-hover:animate-pulse" />
             <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          </div>
        </motion.button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20, x: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20, x: 20 }}
            className="fixed bottom-24 right-24 z-[150] w-80 glass-panel rounded-3xl overflow-hidden shadow-2xl border-white/10 pointer-events-auto"
          >
            <div className="p-6 border-b border-white/[0.05] bg-white/[0.01] flex justify-between items-center">
              <div className="flex items-center gap-3">
                 <div className="w-2 h-2 rounded-full bg-white animate-ping" />
                 <span className="text-[10px] font-bold uppercase tracking-widest text-white/60">{t('ai.agent')}</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/20 hover:text-white"><FiX size={16} /></button>
            </div>

            <div className="p-6 space-y-6">
               <div className="bg-black/40 border border-white/[0.03] p-4 rounded-2xl">
                  <p className="text-[11px] leading-relaxed text-white/80 font-light">
                    {response}
                  </p>
                  {lastVoiceCmd && (
                    <div className="mt-3 pt-3 border-t border-white/5 flex items-center gap-2">
                       <span className="text-[8px] font-mono text-white/20 uppercase tracking-widest">Voice_Log:</span>
                       <span className="text-[8px] font-mono text-white/40">{lastVoiceCmd}</span>
                    </div>
                  )}
               </div>

               <form onSubmit={handleSearch} className="relative">
                  <input 
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder={t('ai.placeholder')}
                    className="w-full bg-white/[0.02] border border-white/5 rounded-xl px-4 py-3 text-[10px] text-white outline-none focus:border-white/20 transition-all"
                  />
               </form>

               <div className="flex justify-between items-center gap-4">
                  <button 
                    onClick={() => setIsVoiceActive(!isVoiceActive)}
                    className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border transition-all ${isVoiceActive ? 'bg-red-500/10 border-red-500/20 text-red-500' : 'bg-white/[0.02] border-white/5 text-white/40 hover:text-white'}`}
                  >
                    {isVoiceActive ? <FiMicOff size={14} /> : <FiMic size={14} />}
                    <span className="text-[9px] font-bold uppercase tracking-widest">{isVoiceActive ? 'Stop Jarvis' : 'Jarvis Mode'}</span>
                  </button>
               </div>
            </div>

            <div className="p-3 bg-white/[0.02] text-center border-t border-white/[0.05]">
               <span className="text-[7px] font-mono text-white/10 uppercase tracking-[0.4em]">Intelligence_Core_v1.0.4</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIDigitalTwin;
