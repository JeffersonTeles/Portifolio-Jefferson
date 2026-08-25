import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiExternalLink, FiGithub } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import ProjectImage from "./ProjectImage";

const ProjectModal = ({ isOpen, onClose, project, index }) => {
  const { t } = useTranslation();

  const modalRef = React.useRef(null);

  // Prevent scroll and handle focus trap & Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      
      if (e.key === "Tab" && modalRef.current) {
        const focusables = modalRef.current.querySelectorAll(
          'a, button, [tabindex]:not([tabindex="-1"])'
        );
        if (focusables.length === 0) return;
        
        const first = focusables[0];
        const last = focusables[focusables.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
      setTimeout(() => {
        if (modalRef.current) {
          const focusables = modalRef.current.querySelectorAll('button, a');
          if (focusables.length) focusables[0].focus();
        }
      }, 100);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#0a0a0a]/80 backdrop-blur-sm"
          />
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#111] border border-white/10 shadow-2xl flex flex-col md:flex-row"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white/70 hover:text-white hover:bg-black/80 transition-colors border border-white/10 outline-none focus-visible:ring-2 focus-visible:ring-accent"
              aria-label="Fechar Modal"
            >
              <FiX size={20} aria-hidden="true" />
            </button>

            {/* Image Area */}
            <div className="w-full md:w-1/2 p-6 md:p-8 border-b md:border-b-0 md:border-r border-white/10 bg-[#0a0a0a] flex flex-col justify-center">
              <div className="rounded-xl overflow-hidden shadow-lg border border-white/5">
                <ProjectImage title={project.title} index={index} stack={project.stack} />
              </div>
            </div>

            {/* Content Area */}
            <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col">
              <h3 className="text-[1.8rem] font-bold text-white mb-2">
                {project.title}
              </h3>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-[0.75rem] text-accent bg-accent/10 border border-accent/20 rounded-md font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="text-[#999] leading-relaxed max-w-none flex-grow text-sm sm:text-base space-y-4">
                <p>{project.desc}</p>
                {/* Additional simulated content for professional feel */}
                {project.features && (
                  <>
                    <h4 className="text-white text-lg mt-6 mb-3 font-semibold">{t("projects.features", "Principais Funcionalidades")}</h4>
                    <ul className="list-disc pl-5 space-y-1 text-[#888]">
                      {project.features.map((feature, idx) => (
                         <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 mt-8 pt-6 border-t border-white/10">
                {project.link !== "#" && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex justify-center items-center gap-2 px-6 py-3 bg-accent text-black font-medium rounded-xl hover:bg-accent-hover transition-colors outline-none focus-visible:ring-2 focus-visible:ring-accent-hover"
                  >
                    <FiExternalLink size={18} aria-hidden="true" />
                    {t("projects.viewProject", "Visitar Projeto")}
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex justify-center items-center gap-2 px-6 py-3 bg-white/5 text-white font-medium rounded-xl border border-white/10 hover:bg-white/10 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                  >
                    <FiGithub size={18} aria-hidden="true" />
                    {t("projects.sourceCode", "Código Fonte")}
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
