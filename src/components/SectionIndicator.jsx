import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { scroller } from "react-scroll";
import { useSection } from "../context/SectionContext";

const sections = [
  { id: "hero", label: "Home" },
  { id: "about", label: "Sobre" },
  { id: "projects", label: "Projetos" },
  { id: "services", label: "Serviços" },
  { id: "skills", label: "Stack" },
  { id: "lab", label: "Lab" },
  { id: "contact", label: "Contato" },
];

const SectionIndicator = () => {
  const { currentSection } = useSection();

  const scrollTo = (id) =>
    scroller.scrollTo(id, { smooth: true, duration: 900, offset: -100 });

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-end gap-4">
      {sections.map((sec) => {
        const isActive = currentSection === sec.id;
        return (
          <button
            key={sec.id}
            onClick={() => scrollTo(sec.id)}
            aria-label={`Ir para ${sec.label}`}
            className="group flex items-center gap-3 py-1"
          >
            {/* Label */}
            <span className="text-[9px] font-mono uppercase tracking-widest text-white/0 group-hover:text-white/50 transition-all duration-300 whitespace-nowrap">
              {sec.label}
            </span>
            {/* Dot com anel */}
            <div className="relative flex items-center justify-center w-4 h-4">
              {isActive && (
                <motion.div
                  layoutId="activeRing"
                  className="absolute w-4 h-4 rounded-full border border-white/40"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <motion.div
                animate={{
                  width: isActive ? 8 : 5,
                  height: isActive ? 8 : 5,
                  backgroundColor: isActive
                    ? "rgba(255,255,255,1)"
                    : "rgba(255,255,255,0.25)",
                }}
                transition={{ duration: 0.25 }}
                className="rounded-full"
              />
            </div>
          </button>
        );
      })}
    </div>
  );
};

export default SectionIndicator;
