import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiSearch, FiX } from "react-icons/fi";
import Fuse from "fuse.js";

const SearchBar = ({ data = [], onResult }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const fuse = new Fuse(data, {
    keys: ["title", "description", "tags"],
    threshold: 0.3,
    includeScore: true,
  });

  useEffect(() => {
    if (query.trim()) {
      const searchResults = fuse.search(query);
      setResults(searchResults.map(r => r.item));
    } else {
      setResults([]);
    }
  }, [query, data, fuse]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen(!isOpen);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const handleResultClick = (result) => {
    onResult?.(result);
    setIsOpen(false);
    setQuery("");
  };

  return (
    <>
      <motion.button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 transition-all"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <FiSearch size={16} />
        <span className="text-sm">Buscar</span>
        <span className="text-xs text-white/30 ml-auto">⌘K</span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-start justify-center pt-32 px-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, y: -20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: -20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="w-full max-w-2xl glass-panel rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-4 p-4 border-b border-white/[0.05]">
                <FiSearch className="text-white/40" size={20} />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Buscar projetos, skills, seções..."
                  className="flex-1 bg-transparent text-white placeholder-white/30 outline-none text-lg"
                  autoFocus
                />
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <FiX className="text-white/40" size={20} />
                </button>
              </div>

              <div className="max-h-96 overflow-y-auto">
                {query && results.length === 0 && (
                  <div className="p-8 text-center text-white/30">
                    Nenhum resultado encontrado
                  </div>
                )}

                {!query && (
                  <div className="p-4 text-center text-white/30 text-sm">
                    Comece a digitar para buscar...
                  </div>
                )}

                {results.map((result, index) => (
                  <motion.button
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => handleResultClick(result)}
                    className="w-full flex items-center gap-4 p-4 text-left hover:bg-white/5 transition-colors border-b border-white/[0.05] last:border-0"
                  >
                    <div className="flex-1">
                      <div className="text-white font-medium">{result.title}</div>
                      {result.description && (
                        <div className="text-white/40 text-sm mt-1">{result.description}</div>
                      )}
                    </div>
                    {result.type && (
                      <span className="px-2 py-1 rounded-full bg-white/10 text-[10px] font-medium text-white/60 uppercase">
                        {result.type}
                      </span>
                    )}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SearchBar;
