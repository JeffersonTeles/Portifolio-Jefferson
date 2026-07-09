import React from "react";
import { motion } from "framer-motion";
import { FiDownload, FiFileText } from "react-icons/fi";

const CVDownloadButton = ({ variant = "primary", size = "md", className = "" }) => {
  const handleDownload = async () => {
    // Try multiple possible paths for the CV file
    const possiblePaths = [
      "/curriculo.pdf",
      "/resume.pdf",
      "/Curriculo_Jefferson_Teles_TI.pdf",
      "/cv-jefferson-teles.pdf",
      "/Curriculo_Jefferson_Teles.pdf"
    ];

    // Try each path until one works
    for (const path of possiblePaths) {
      try {
        // Check if file exists
        const response = await fetch(path, { method: 'HEAD' });
        if (response.ok) {
          // File exists, trigger download
          const link = document.createElement("a");
          link.href = path;
          link.download = path.split("/").pop();
          link.target = "_blank";
          link.rel = "noopener noreferrer";
          
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          
          // Exit loop on success
          return;
        }
      } catch (error) {
        // Try next path
        continue;
      }
    }

    // If no path worked, alert user
    alert("Não foi possível encontrar o arquivo do currículo. Por favor, entre em contato diretamente.");
  };

  const variants = {
    primary: "bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:shadow-lg hover:shadow-cyan-500/25",
    secondary: "bg-white/5 border border-white/10 text-white hover:bg-white/10",
    ghost: "text-white/60 hover:text-white hover:bg-white/5",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <motion.button
      onClick={handleDownload}
      className={`flex items-center gap-2 rounded-xl font-medium transition-all duration-300 ${variants[variant]} ${sizes[size]} ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Baixar currículo em PDF"
    >
      <FiFileText className="w-5 h-5" />
      <span>Download CV</span>
      <FiDownload className="w-4 h-4" />
    </motion.button>
  );
};

export default CVDownloadButton;
