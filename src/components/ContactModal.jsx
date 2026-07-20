import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiSend, FiCheckCircle, FiAlertCircle } from "react-icons/fi";
import emailjs from "@emailjs/browser";

// -------------------------------------------------------
// Configure o EmailJS em https://emailjs.com (plano grátis)
// 1. Crie um Email Service e um Email Template
// 2. Substitua as constantes abaixo com seus IDs reais
// -------------------------------------------------------
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";
// -------------------------------------------------------

const ContactModal = ({ isOpen, onClose }) => {
  const formRef = useRef(null);
  const [step, setStep] = useState("idle"); // idle | sending | success | error
  const [formData, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });

  const validateForm = () => {
    const newErrors = { name: "", email: "", message: "" };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = "Nome é obrigatório";
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email é obrigatório";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Email inválido";
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Mensagem é obrigatória";
      isValid = false;
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Escreva pelo menos 10 caracteres";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setStep("sending");
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
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
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        />

        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 16 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 16 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-lg bg-slate-900 border border-slate-700/60 rounded-xl overflow-hidden shadow-2xl"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-slate-800">
            <h3 className="text-slate-100 font-semibold text-base">Enviar mensagem</h3>
            <button
              onClick={handleClose}
              className="text-slate-500 hover:text-slate-100 transition-colors"
              aria-label="Fechar"
            >
              <FiX size={20} />
            </button>
          </div>

          <div className="p-6">
            {step === "success" ? (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="py-12 text-center flex flex-col items-center gap-4"
              >
                <FiCheckCircle size={40} className="text-amber-400" />
                <h4 className="text-slate-100 font-semibold text-lg">Mensagem enviada!</h4>
                <p className="text-slate-400 text-sm">Retorno em breve. Você também pode me chamar pelo WhatsApp.</p>
                <button
                  onClick={handleClose}
                  className="mt-4 px-6 py-2.5 bg-amber-400 text-slate-950 font-semibold text-sm rounded-lg hover:bg-amber-300 transition-colors"
                >
                  Fechar
                </button>
              </motion.div>
            ) : step === "error" ? (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="py-12 text-center flex flex-col items-center gap-4"
              >
                <FiAlertCircle size={40} className="text-red-400" />
                <h4 className="text-slate-100 font-semibold text-lg">Falha ao enviar</h4>
                <p className="text-slate-400 text-sm">
                  Tente novamente ou fale diretamente pelo{" "}
                  <a
                    href="https://linkedin.com/in/jeffersonteless"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-400 hover:text-amber-300 transition-colors"
                  >
                    LinkedIn
                  </a>{" "}
                  ou{" "}
                  <a
                    href="https://wa.me/5544999277915"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-400 hover:text-amber-300 transition-colors"
                  >
                    WhatsApp
                  </a>.
                </p>
                <button
                  onClick={() => setStep("idle")}
                  className="mt-4 px-6 py-2.5 bg-slate-800 text-slate-100 font-medium text-sm rounded-lg hover:bg-slate-700 transition-colors border border-slate-700"
                >
                  Tentar novamente
                </button>
              </motion.div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs text-slate-400 font-medium">Nome</label>
                    <input
                      required
                      name="from_name"
                      type="text"
                      placeholder="Seu nome"
                      value={formData.name}
                      className={`w-full bg-slate-800/60 border rounded-lg px-4 py-2.5 text-slate-100 text-sm outline-none placeholder:text-slate-600 focus:bg-slate-800 transition-colors ${
                        errors.name
                          ? "border-red-500/60"
                          : "border-slate-700 focus:border-slate-500"
                      }`}
                      onChange={(e) => {
                        setForm({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: "" });
                      }}
                    />
                    {errors.name && <p className="text-xs text-red-400">{errors.name}</p>}
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs text-slate-400 font-medium">Email</label>
                    <input
                      required
                      name="reply_to"
                      type="email"
                      placeholder="voce@email.com"
                      value={formData.email}
                      className={`w-full bg-slate-800/60 border rounded-lg px-4 py-2.5 text-slate-100 text-sm outline-none placeholder:text-slate-600 focus:bg-slate-800 transition-colors ${
                        errors.email
                          ? "border-red-500/60"
                          : "border-slate-700 focus:border-slate-500"
                      }`}
                      onChange={(e) => {
                        setForm({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: "" });
                      }}
                    />
                    {errors.email && <p className="text-xs text-red-400">{errors.email}</p>}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs text-slate-400 font-medium">Mensagem</label>
                  <textarea
                    required
                    name="message"
                    rows={4}
                    placeholder="Conte sobre a oportunidade ou projeto..."
                    value={formData.message}
                    maxLength={2000}
                    className={`w-full bg-slate-800/60 border rounded-lg px-4 py-2.5 text-slate-100 text-sm outline-none resize-none placeholder:text-slate-600 focus:bg-slate-800 transition-colors ${
                      errors.message
                        ? "border-red-500/60"
                        : "border-slate-700 focus:border-slate-500"
                    }`}
                    onChange={(e) => {
                      setForm({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: "" });
                    }}
                  />
                  <div className="flex justify-between">
                    {errors.message && <p className="text-xs text-red-400">{errors.message}</p>}
                    <p className="text-xs text-slate-600 ml-auto">{formData.message.length}/2000</p>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={step === "sending"}
                  className="w-full py-3 bg-amber-400 text-slate-950 font-semibold text-sm rounded-lg hover:bg-amber-300 hover:shadow-[0_0_24px_rgba(251,191,36,0.3)] transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {step === "sending" ? (
                    <>
                      <div className="w-4 h-4 border-2 border-slate-950/20 border-t-slate-950 rounded-full animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <FiSend size={14} />
                      Enviar mensagem
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ContactModal;
