import React from "react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(
        "jeffersontelesdeoliveira@gmail.com"
      );
      const toast = document.querySelector(".copy-toast");
      if (toast) {
        toast.classList.add("is-visible");
        setTimeout(() => toast.classList.remove("is-visible"), 1400);
      }
    } catch {
      window.location.href =
        "mailto:jeffersontelesdeoliveira@gmail.com";
    }
  };

  return (
    <section className="slide py-32 border-t border-white/[0.04]">
      <div className="max-w-[720px] mx-auto px-6 md:px-10 text-center">
        <h2 className="text-[2rem] sm:text-[2.5rem] font-bold text-white mb-5">
          {t("contact.heading")}
        </h2>
        <p className="text-[1rem] text-[#666] leading-relaxed mb-8 max-w-md mx-auto">
          {t("contact.description")}
        </p>

        <button
          onClick={copyEmail}
          className="text-[#e2a63d] text-[1.05rem] border-b border-[#e2a63d]/30 hover:border-[#e2a63d] transition-colors duration-300 cursor-pointer"
        >
          jeffersontelesdeoliveira@gmail.com
        </button>

        <p className="text-[0.8rem] text-[#444] mt-4 font-mono">
          {t("contact.location")}
        </p>
      </div>
    </section>
  );
};

export default Contact;
