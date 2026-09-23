import React from 'react';
import { useTranslation } from 'react-i18next';
import { Server, Wifi, Cpu, CheckCircle } from 'lucide-react';

const About = () => {
  const { t } = useTranslation();
  const capabilities = t('about.capabilities', { returnObjects: true });

  const icons = [Server, Wifi, Cpu];

  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-[900px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-16 lg:gap-20">
          {/* Left: Text & Capability Cards */}
          <div>
            <h2 className="text-[2rem] font-bold mb-8 text-white">
              {t('about.heading')}
            </h2>

            <p className="text-[1rem] leading-relaxed mb-8 text-[#888]">
              Analista de Suporte N2 em evolução para desenvolvimento: resolvo problemas reais de integração hoje e construo as ferramentas de amanhã.
            </p>

            <div className="space-y-4 mb-12">
              {capabilities.map((item, i) => {
                const IconComponent = icons[i % icons.length];
                return (
                  <div
                    key={i}
                    className="group p-5 rounded-2xl bg-white/[0.02] border border-white/[0.07] flex items-start gap-4 hover:bg-white/[0.04] transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/30 flex items-center justify-center text-accent flex-shrink-0 mt-0.5">
                      <IconComponent size={20} />
                    </div>
                    <div>
                      <p className="text-[1rem] text-[#888] leading-relaxed">
                        {item}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-12">
              <div className="text-center p-4 rounded-2xl bg-white/[0.02] border border-white/[0.07]">
                <div className="text-2xl sm:text-3xl text-accent mb-1">6+</div>
                <div className="text-[0.7rem] font-mono uppercase tracking-wider text-[#555]">
                  Anos em TI
                </div>
              </div>
              <div className="text-center p-4 rounded-2xl bg-white/[0.02] border border-white/[0.07]">
                <div className="text-2xl sm:text-3xl text-accent mb-1">8</div>
                <div className="text-[0.7rem] font-mono uppercase tracking-wider text-[#555]">
                  Tickets/dia
                </div>
              </div>
              <div className="text-center p-4 rounded-2xl bg-white/[0.02] border border-white/[0.07]">
                <div className="text-2xl sm:text-3xl text-accent mb-1">4</div>
                <div className="text-[0.7rem] font-mono uppercase tracking-wider text-[#555]">
                  Projetos vivos
                </div>
              </div>
            </div>
          </div>

          {/* Right: Info card */}
          <div className="lg:sticky lg:top-28 h-fit space-y-6">
            <div className="p-6 bg-white/[0.02] border border-white/[0.07] rounded-2xl">
              {/* Avatar header */}
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-white/[0.08]">
                <div className="w-12 h-12 rounded-2xl overflow-hidden border border-accent/40 flex-shrink-0">
                  <img
                    src="/jefferson-avatar.svg"
                    alt="Jefferson Teles"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-[0.9rem] font-semibold flex items-center gap-1 text-white">
                    Jefferson Teles <CheckCircle className="text-accent" size={13} />
                  </p>
                  <p className="text-[0.7rem] font-mono text-[#555]">
                    Cascavel, Paraná
                  </p>
                </div>
              </div>

              {/* Info rows */}
              <div className="space-y-0">
                {t('about.infoCard', { returnObjects: true }).map(([label, value], i) => (
                  <div key={i}>
                    {i > 0 && <div className="h-px bg-white/[0.08]" />}
                    <div className="flex justify-between items-center py-3">
                      <span className="text-[0.7rem] font-mono uppercase tracking-wider text-[#555]">
                        {label}
                      </span>
                      <span className="text-[0.8rem] font-medium text-[#888]">
                        {value}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
