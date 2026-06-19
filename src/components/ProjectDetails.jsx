import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiCode, FiActivity, FiServer, FiTerminal } from 'react-icons/fi';
import Architecture3D from './Architecture3D';

const SyntaxHighlighter = ({ code, language = "javascript" }) => {
  return (
    <div className="relative group/code">
      <div className="absolute -inset-2 bg-white/5 blur-xl opacity-0 group-hover/code:opacity-100 transition-opacity rounded-xl" />
      <div className="relative bg-[#0d0d0d] border border-white/10 rounded-xl overflow-hidden shadow-2xl">
        <div className="flex items-center justify-between px-4 py-2 border-b border-white/5 bg-white/[0.02]">
          <div className="flex gap-1.5">
            <div className="w-2 h-2 rounded-full bg-red-500/20" />
            <div className="w-2 h-2 rounded-full bg-yellow-500/20" />
            <div className="w-2 h-2 rounded-full bg-green-500/20" />
          </div>
          <span className="text-[9px] font-mono text-white/20 uppercase tracking-widest">{language}</span>
        </div>
        <pre className="p-6 overflow-x-auto custom-scrollbar">
          <code className="text-[11px] font-mono leading-relaxed text-white/80">
            {code}
          </code>
        </pre>
      </div>
    </div>
  );
};

const ProjectDetails = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[300] flex items-center justify-end">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />
          
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="relative w-full max-w-2xl h-full bg-black border-l border-white/10 p-8 md:p-16 overflow-y-auto"
          >
            <button 
              onClick={onClose}
              className="absolute top-8 right-8 w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white transition-colors"
            >
              <FiX size={20} />
            </button>

            <div className="flex flex-col gap-12">
               <div className="flex flex-col gap-4">
                  <span className="text-[10px] font-mono text-white/20 uppercase tracking-[0.4em]">Case_Study // 0x{project.title.length}</span>
                  <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
                    {project.title}
                  </h2>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="p-6 glass-panel rounded-2xl flex flex-col gap-4">
                     <div className="flex items-center gap-3 text-white/40">
                        <FiActivity size={16} />
                        <span className="text-[10px] font-bold uppercase tracking-widest">Problem</span>
                     </div>
                     <p className="text-sm text-white/60 leading-relaxed">
                        {project.longDesc}
                     </p>
                  </div>
                  <div className="p-6 glass-panel rounded-2xl flex flex-col gap-4">
                     <div className="flex items-center gap-3 text-white/40">
                        <FiCode size={16} />
                        <span className="text-[10px] font-bold uppercase tracking-widest">Technical Impact</span>
                     </div>
                     <p className="text-sm text-white/60 leading-relaxed italic">
                        {project.technicalDeepDive || `Focusing on ${project.challenge} using high-performance ${project.stack[0]} architecture.`}
                     </p>
                  </div>
               </div>

               {project.codeSnippet && (
                 <div className="flex flex-col gap-6">
                    <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30 border-b border-white/5 pb-4">Implementation Logic</h4>
                    <SyntaxHighlighter code={project.codeSnippet} language={project.codeLanguage || "javascript"} />
                 </div>
               )}

               <div className="flex flex-col gap-6">
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30 border-b border-white/5 pb-4">Architectural Blueprint (3D)</h4>
                  <Architecture3D />
                  <div className="text-[8px] font-mono text-white/10 uppercase tracking-[0.2em] text-center">Interactive Model: Drag to orbit • Scroll to zoom</div>
               </div>

               <div className="pt-12 border-t border-white/5 flex flex-wrap gap-4">
                  {project.link !== "#" && (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-10 py-4 bg-white text-black font-bold uppercase text-[10px] tracking-widest rounded-full hover:scale-105 transition-all shadow-glass"
                    >
                      Visit Live Product
                    </a>
                  )}
                  <button 
                    onClick={onClose}
                    className="px-10 py-4 border border-white/10 text-white font-bold uppercase text-[10px] tracking-widest rounded-full hover:bg-white/5 transition-all"
                  >
                    Close Technical View
                  </button>
               </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProjectDetails;
