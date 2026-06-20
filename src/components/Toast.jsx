import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCheckCircle, FiInfo, FiAlertCircle } from 'react-icons/fi';

// Global event emitter
const toastBus = typeof window !== 'undefined' ? new EventTarget() : null;

export const showToast = (message, type = 'info') => {
  if (!toastBus) return;
  toastBus.dispatchEvent(new CustomEvent('toast', { detail: { message, type } }));
};

const icons = {
  success: <FiCheckCircle size={14} className="text-green-400 shrink-0" />,
  info:    <FiInfo size={14} className="text-white/60 shrink-0" />,
  error:   <FiAlertCircle size={14} className="text-red-400 shrink-0" />,
};

const ToastContainer = () => {
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    if (!toastBus) return;
    const handler = (e) => {
      const id = Date.now() + Math.random();
      setToasts((prev) => [...prev.slice(-3), { ...e.detail, id }]);
      setTimeout(() => setToasts((prev) => prev.filter((t) => t.id !== id)), 3200);
    };
    toastBus.addEventListener('toast', handler);
    return () => toastBus.removeEventListener('toast', handler);
  }, []);

  return (
    <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-[700] flex flex-col gap-2 pointer-events-none">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: 16, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.95 }}
            className="flex items-center gap-3 px-5 py-3 glass-panel rounded-full border border-white/10 shadow-lg backdrop-blur-xl text-[11px] font-medium text-white/80 whitespace-nowrap"
          >
            {icons[toast.type] || icons.info}
            {toast.message}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default ToastContainer;
