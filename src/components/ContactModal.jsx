import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiX,
  FiSend,
  FiTerminal,
  FiCheckCircle,
  FiLock,
  FiAlertCircle,
} from "react-icons/fi";
import emailjs from "@emailjs/browser";

// -------------------------------------------------------
// CONFIGURAÇÃO EMAILJS
// 1. Crie uma conta gratuita em https://emailjs.com
// 2. Crie um Email Service e um Email Template
// 3. Substitua as constantes abaixo com seus IDs reais
// -------------------------------------------------------
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID"; // Ex: 'service_abc123'
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID"; // Ex: 'template_xyz789'
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY"; // Ex: 'abcDEFghiJKL'
// -------------------------------------------------------

const ContactModal = ({ isOpen, onClose }) => {
  const formRef = useRef(null);
  const [step, setStep] = useState("idle"); // idle | sending | success | error
  const [formData, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });

  const validateForm = () => {
    const newErrors = { name: "", email: "", message: "" };
    let isValid = true;

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Nome é obrigatório";
      isValid = false;
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Nome deve ter pelo menos 2 caracteres";
      isValid = false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email é obrigatório";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Email inválido";
      isValid = false;
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Mensagem é obrigatória";
      isValid = false;
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Mensagem deve ter pelo menos 10 caracteres";
      isValid = false;
    } else if (formData.message.trim().length > 2000) {
      newErrors.message = "Mensagem deve ter no máximo 2000 caracteres";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setStep("sending");

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY,
      );
      setStep("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      setStep("error");
    }
  };

  const handleClose = () => {
    setStep("idle");
    setForm({ name: "", email: "", message: "" });
    setErrors({ name: "", email: "", message: "" });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[400] flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-md"
        />

        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="relative w-full max-w-xl glass-panel rounded-3xl overflow-hidden shadow-2xl border-white/10"
        >
          {/* Header */}
          <div className="p-8 border-b border-white/[0.05] flex justify-between items-center bg-white/[0.01]">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-white/[0.03] border border-white/10 flex items-center justify-center text-white/40">
                <FiLock size={14} />
              </div>
              <div>
                <h3 className="text-white font-bold uppercase tracking-widest text-[10px]">
                  Secure_Comm_Link
                </h3>
                <p className="text-[8px] font-mono text-white/20 uppercase tracking-[0.2em]">
                  Protocol: HANDSHAKE_v2.0
                </p>
              </div>
            </div>
            <button
              onClick={handleClose}
              className="text-white/20 hover:text-white transition-colors"
              aria-label="Fechar modal"
            >
              <FiX size={20} />
            </button>
          </div>

          <div className="p-10">
            {step === "success" ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="py-20 text-center flex flex-col items-center gap-6"
              >
                <div className="w-20 h-20 rounded-full bg-white/[0.02] border border-white/10 flex items-center justify-center text-white mb-4 shadow-glow">
                  <FiCheckCircle size={40} />
                </div>
                <h4 className="text-2xl font-bold tracking-tight uppercase">
                  Uplink Established
                </h4>
                <p className="text-white/40 text-sm max-w-xs font-light">
                  Mensagem enviada com sucesso. Retornarei em breve!
                </p>
                <button
                  onClick={handleClose}
                  className="mt-8 px-10 py-4 bg-white text-black font-bold uppercase text-[10px] tracking-widest rounded-full hover:scale-105 transition-all"
                >
                  Fechar
                </button>
              </motion.div>
            ) : step === "error" ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="py-20 text-center flex flex-col items-center gap-6"
              >
                <div className="w-20 h-20 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 mb-4">
                  <FiAlertCircle size={40} />
                </div>
                <h4 className="text-2xl font-bold tracking-tight uppercase text-red-400">
                  Transmission Failed
                </h4>
                <p className="text-white/40 text-sm max-w-xs font-light">
                  Falha ao enviar. Tente novamente ou entre em contato
                  diretamente pelo LinkedIn.
                </p>
                <button
                  onClick={() => setStep("idle")}
                  className="mt-8 px-10 py-4 bg-white text-black font-bold uppercase text-[10px] tracking-widest rounded-full hover:scale-105 transition-all"
                >
                  Tentar Novamente
                </button>
              </motion.div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-8" noValidate>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[9px] font-mono text-white/20 uppercase tracking-[0.3em]">
                      Identity_Name
                    </label>
                    <input
                      required
                      name="from_name"
                      type="text"
                      placeholder="Seu Nome"
                      value={formData.name}
                      className={`w-full bg-white/[0.02] border rounded-xl px-6 py-4 text-white text-sm focus:bg-white/[0.04] transition-all outline-none placeholder:text-white/20 ${
                        errors.name 
                          ? "border-red-500/50 focus:border-red-500" 
                          : "border-white/5 focus:border-white/20"
                      }`}
                      onChange={(e) => {
                        setForm({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: "" });
                      }}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "name-error" : undefined}
                    />
                    {errors.name && (
                      <p id="name-error" className="text-[9px] text-red-400 font-mono">{errors.name}</p>
                    )}
                  </div>
                  <div className="space-y-3">
                    <label className="text-[9px] font-mono text-white/20 uppercase tracking-[0.3em]">
                      Contact_Email
                    </label>
                    <input
                      required
                      name="reply_to"
                      type="email"
                      placeholder="voce@email.com"
                      value={formData.email}
                      className={`w-full bg-white/[0.02] border rounded-xl px-6 py-4 text-white text-sm focus:bg-white/[0.04] transition-all outline-none placeholder:text-white/20 ${
                        errors.email 
                          ? "border-red-500/50 focus:border-red-500" 
                          : "border-white/5 focus:border-white/20"
                      }`}
                      onChange={(e) => {
                        setForm({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: "" });
                      }}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "email-error" : undefined}
                    />
                    {errors.email && (
                      <p id="email-error" className="text-[9px] text-red-400 font-mono">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[9px] font-mono text-white/20 uppercase tracking-[0.3em]">
                    Payload_Message
                  </label>
                  <textarea
                    required
                    name="message"
                    rows="4"
                    placeholder="Conte sobre seu projeto ou oportunidade..."
                    value={formData.message}
                    maxLength={2000}
                    className={`w-full bg-white/[0.02] border rounded-2xl px-6 py-4 text-white text-sm focus:bg-white/[0.04] transition-all outline-none resize-none placeholder:text-white/20 ${
                      errors.message 
                        ? "border-red-500/50 focus:border-red-500" 
                        : "border-white/5 focus:border-white/20"
                    }`}
                    onChange={(e) => {
                      setForm({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: "" });
                    }}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : "message-char-count"}
                  />
                  <div className="flex justify-between items-center">
                    {errors.message && (
                      <p id="message-error" className="text-[9px] text-red-400 font-mono">{errors.message}</p>
                    )}
                    <p id="message-char-count" className="text-[8px] font-mono text-white/20 ml-auto">
                      {formData.message.length}/2000
                    </p>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={step === "sending"}
                  className="w-full py-5 bg-white text-black font-bold uppercase text-[10px] tracking-widest rounded-full hover:scale-[1.02] transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {step === "sending" ? (
                    <>
                      <div className="w-3 h-3 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                      <span>Enviando...</span>
                    </>
                  ) : (
                    <>
                      <FiSend size={14} />
                      <span>Iniciar Handshake</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Terminal Footer */}
          <div className="p-4 bg-white/[0.02] border-t border-white/[0.05] px-8 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div
                  className={`w-1.5 h-1.5 rounded-full animate-pulse ${step === "error" ? "bg-red-500" : "bg-green-500"}`}
                />
                <span className="text-[8px] font-mono text-white/20 uppercase">
                  {step === "error" ? "Connection_Failed" : "Server_Active"}
                </span>
              </div>
            </div>
            <FiTerminal size={12} className="text-white/10" />
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ContactModal;
