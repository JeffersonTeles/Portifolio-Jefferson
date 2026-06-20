import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiDownload, FiMaximize } from 'react-icons/fi';

const CVPreviewModal = ({ isOpen, onClose }) => {
  const pdfUrl = '/Curriculo_Jefferson_Teles_TI.pdf';

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[500] flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/90 backdrop-blur-md"
        />
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-3xl h-[85vh] bg-[#0d0d0d] border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.05] bg-white/[0.01] shrink-0">
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-white">Curriculo_Jefferson_Teles.pdf</h3>
              <p className="text-[8px] font-mono text-white/20 uppercase tracking-[0.2em] mt-0.5">Preview · Read Only</p>
            </div>
            <div className="flex items-center gap-3">
              <a
                href={pdfUrl}
                download="Curriculo_Jefferson_Teles.pdf"
                className="flex items-center gap-2 px-4 py-2 bg-white text-black font-bold text-[9px] uppercase tracking-widest rounded-full hover:scale-105 transition-all"
              >
                <FiDownload size={12} />
                Baixar
              </a>
              <a
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white transition-colors"
                title="Abrir em nova aba"
              >
                <FiMaximize size={14} />
              </a>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white transition-colors"
              >
                <FiX size={14} />
              </button>
            </div>
          </div>

          {/* PDF Embed */}
          <div className="flex-1 relative">
            <iframe
              src={`${pdfUrl}#toolbar=0&navpanes=0`}
              className="w-full h-full border-0"
              title="Currículo Jefferson Teles"
            />
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default CVPreviewModal;
