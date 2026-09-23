import React from 'react';
import { useTranslation } from 'react-i18next';
import { Github, Linkedin } from 'lucide-react';
import { copyEmail } from '../utils/copyEmail';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="min-h-[90vh] flex items-center relative">
      <div className="max-w-[1000px] mx-auto px-6 md:px-10 py-24 w-full">
        <div className="max-w-[700px]">
          {/* Name — big heading */}
          <h1 className="text-[3.5rem] sm:text-[4.5rem] lg:text-[5.5rem] font-bold text-white leading-[1.0] tracking-tight mb-6">
            {t('hero.title1')}
          </h1>

          {/* Subtitle + description merged */}
          <p className="text-[1.15rem] text-[#888] leading-relaxed mb-10 max-w-[600px]">
            {t('hero.subtitle')} {t('hero.description')}
          </p>

          {/* Actions */}
          <div className="flex flex-wrap items-center gap-4 mb-10">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-black text-[0.9rem] font-medium rounded-full hover:bg-accent transition-colors duration-300 outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              {t('hero.btnWorks')}
            </a>
            <a
              href="/Curriculo_Jefferson_Teles_TI.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/10 text-[#ccc] text-[0.9rem] font-medium rounded-full hover:border-accent/40 hover:text-white transition-colors duration-300 outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
            >
              {t('hero.btnResume')}
            </a>
          </div>

          {/* Email + Social */}
          <div className="flex flex-wrap items-center gap-6">
            <button
              onClick={copyEmail}
              className="text-[0.9rem] text-[#666] border-b border-[#333] hover:border-accent hover:text-accent transition-colors duration-300 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
              aria-label="Copiar email para jeffersontelesdeoliveira@gmail.com"
            >
              jeffersontelesdeoliveira@gmail.com
            </button>
            <nav className="flex items-center gap-3" aria-label="Redes sociais">
              <a
                href="https://github.com/JeffersonTeles"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#333] hover:text-accent transition-colors duration-300 outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm p-1"
                aria-label="Perfil do GitHub de Jefferson Teles"
              >
                <Github size={17} aria-hidden="true" />
              </a>
              <a
                href="https://linkedin.com/in/jeffersonteles"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#333] hover:text-accent transition-colors duration-300 outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm p-1"
                aria-label="Perfil do LinkedIn de Jefferson Teles"
              >
                <Linkedin size={17} aria-hidden="true" />
              </a>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
