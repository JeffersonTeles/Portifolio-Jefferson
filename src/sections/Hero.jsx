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
        <h1 className="text-[2.5rem] sm:text-[3.2rem] lg:text-[3.8rem] font-bold text-white leading-[1.1] tracking-tight mb-8">
          {t("hero.title1")}
        </h1>

        <p className="text-[1.05rem] text-[#888] leading-relaxed mb-5">
          {t("hero.description")}
        </p>

        <p className="text-[1.05rem] text-[#888] leading-relaxed mb-8">
          {t("about.p2")}
        </p>

        <p className="text-[1.05rem] text-[#888] leading-relaxed">
          Get in touch{" "}
          <button
            onClick={copyEmail}
            className="text-white border-b border-white/20 hover:border-[#e2a63d] hover:text-[#e2a63d] transition-colors duration-300 cursor-pointer"
          >
            jeffersontelesdeoliveira@gmail.com
          </button>
        </p>
      </div>
    </section>
  );
};

export default Hero;
