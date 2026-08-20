import React from "react";
import { useTranslation } from "react-i18next";
import { copyEmail } from "../utils/copyEmail";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section className="slide py-32 section-alt">
      <div className="max-w-[900px] mx-auto px-6 md:px-10 text-center">
        <h2 className="text-[2.2rem] sm:text-[2.8rem] font-bold text-white mb-5">
          {t("contact.heading")}
        </h2>
        <p className="text-[1rem] text-[#555] leading-relaxed mb-10 max-w-md mx-auto">
          {t("contact.description")}
        </p>

        <button
          onClick={copyEmail}
          className="text-[#e2a63d] text-[1.1rem] border-b border-[#e2a63d]/30 hover:border-[#e2a63d] transition-colors duration-300 cursor-pointer"
          aria-label="Copiar email"
        >
          jeffersontelesdeoliveira@gmail.com
        </button>

        <p className="text-[0.8rem] text-[#333] mt-5 font-mono">
          {t("contact.location")}
        </p>
      </div>
    </section>
  );
};

export default Contact;
