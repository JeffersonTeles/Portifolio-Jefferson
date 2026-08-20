import React from "react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden border-b border-slate-100">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 py-20 sm:py-28 lg:py-32">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-sm font-medium text-emerald-600">
              Disponível para trabalho
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-6">
            Desenvolvedor
            <br />
            <span className="text-slate-400">Júnior</span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-500 leading-relaxed mb-10 max-w-lg">
            Sou Jefferson, desenvolvedor em transição de suporte técnico para web. 
            Construo ferramentas que resolvem problemas reais — não demos bonitas.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projetos"
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 transition-colors"
            >
              Ver projetos
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#contato"
              className="inline-flex items-center gap-2 px-6 py-3 border border-slate-200 text-slate-700 font-medium rounded-lg hover:bg-slate-50 transition-colors"
            >
              Falar comigo
            </a>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-slate-50 to-transparent rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-amber-50 to-transparent rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />
    </section>
  );
};

export default Hero;
