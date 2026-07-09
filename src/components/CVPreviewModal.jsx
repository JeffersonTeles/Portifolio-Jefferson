import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiDownload, FiMaximize, FiAlertCircle } from 'react-icons/fi';

const CVPreviewModal = ({ isOpen, onClose }) => {
  const [pdfUrl, setPdfUrl] = useState('/curriculo.pdf');
  const [loadError, setLoadError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const possiblePaths = [
    '/curriculo.pdf',
    '/resume.pdf',
    '/Curriculo_Jefferson_Teles_TI.pdf',
    '/cv-jefferson-teles.pdf',
    '/Curriculo_Jefferson_Teles.pdf'
  ];

  useEffect(() => {
    if (isOpen) {
      // Try to find a working PDF path
      const checkPdf = async () => {
        setIsLoading(true);
        setLoadError(false);
        for (const path of possiblePaths) {
          try {
            const response = await fetch(path, { method: 'HEAD' });
            if (response.ok) {
              setPdfUrl(path);
              setIsLoading(false);
              return;
            }
          } catch (error) {
            continue;
          }
        }
        setLoadError(true);
        setIsLoading(false);
      };
      checkPdf();
    }
  }, [isOpen]);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = pdfUrl.split("/").pop();
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-3xl h-[85vh] bg-[#0d0d0d] border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.05] bg-white/[0.01] shrink-0">
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-white">Curriculo_Jefferson_Teles.pdf</h3>
              <p className="text-[8px] font-mono text-white/20 uppercase tracking-[0.2em] mt-0.5">
                {isLoading ? 'Carregando...' : loadError ? 'Erro ao carregar' : 'Preview · Read Only'}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={handleDownload}
                className="flex items-center gap-2 px-4 py-2 bg-white text-black font-bold text-[9px] uppercase tracking-widest rounded-full hover:scale-105 transition-all"
              >
                <FiDownload size={12} />
                Baixar
              </button>
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

          {/* PDF Embed or Error Message */}
          <div className="flex-1 relative">
            {isLoading ? (
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-white/40 text-sm">Verificando arquivo...</div>
              </div>
            ) : loadError ? (
              <div className="w-full h-full flex flex-col items-center justify-center text-center p-8">
                <FiAlertCircle size={48} className="text-white/20 mb-4" />
                <h4 className="text-white font-medium mb-2">Arquivo não encontrado</h4>
                <p className="text-white/40 text-sm mb-6 max-w-md">
                  Não foi possível localizar o arquivo do currículo. Use o botão de download acima ou entre em contato diretamente.
                </p>
                <button
                  onClick={handleDownload}
                  className="px-6 py-3 bg-white/10 border border-white/20 rounded-lg text-white text-sm hover:bg-white/20 transition-all"
                >
                  Tentar Download Direto
                </button>
              </div>
            ) : (
              <iframe
                src={`${pdfUrl}#toolbar=0&navpanes=0`}
                className="w-full h-full border-0"
                title="Currículo Jefferson Teles"
                onError={() => setLoadError(true)}
              />
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default CVPreviewModal;
