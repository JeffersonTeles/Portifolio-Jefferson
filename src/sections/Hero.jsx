import React from "react";
import { useTranslation } from "react-i18next";

const Hero = () => {
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
    <section className="slide min-h-[85vh] flex items-center">
      <div className="max-w-[720px] mx-auto px-6 md:px-10 py-24">
        {/* Role badge */}
        <div className="mb-6">
          <span className="text-[0.8rem] text-[#e2a63d] font-mono">
            {t("hero.role")}
          </span>
        </div>

        {/* Name — big heading */}
        <h1 className="text-[3rem] sm:text-[4rem] lg:text-[5rem] font-bold text-white leading-[1.0] tracking-tight mb-8">
          {t("hero.title1")}
        </h1>

        {/* Subtitle */}
        <p className="text-[1.1rem] text-[#999] leading-relaxed mb-4 max-w-[600px]">
          {t("hero.subtitle")}
        </p>

        {/* Description */}
        <p className="text-[1.1rem] text-[#999] leading-relaxed mb-10 max-w-[600px]">
          {t("hero.description")}
        </p>

        {/* Actions */}
        <div className="flex flex-wrap items-center gap-5 mb-12">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black text-[0.9rem] font-medium rounded-full hover:bg-[#e2a63d] hover:text-black transition-colors duration-300"
          >
            {t("hero.btnWorks")}
          </a>
          <a
            href="/Curriculo_Jefferson_Teles.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-white/15 text-[#ccc] text-[0.9rem] font-medium rounded-full hover:border-[#e2a63d]/40 hover:text-white transition-colors duration-300"
          >
            {t("hero.btnResume")}
          </a>
        </div>

        {/* Email */}
        <p className="text-[0.95rem] text-[#666]">
          {t("hero.getInTouch")}{" "}
          <button
            onClick={copyEmail}
            className="text-[#ccc] border-b border-[#444] hover:border-[#e2a63d] hover:text-[#e2a63d] transition-colors duration-300 cursor-pointer"
          >
            jeffersontelesdeoliveira@gmail.com
          </button>
        </p>
      </div>
    </section>
  );
};

export default Hero;
