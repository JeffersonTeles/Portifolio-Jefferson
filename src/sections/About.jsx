import React from 'react';
import { useTranslation } from 'react-i18next';
import { FiServer, FiWifi, FiCpu, FiCheckCircle, FiGithub } from 'react-icons/fi';
import AnimatedSection from '../components/AnimatedSection';

const About = () => {
  const { t } = useTranslation();
  const capabilities = t('about.capabilities', { returnObjects: true });

  const icons = [FiServer, FiWifi, FiCpu];

  return (
    <AnimatedSection id="about" className="py-28 relative">
      <div className="max-w-[900px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-16 lg:gap-20">
          {/* Left: Text & Interactive Capability Cards */}
          <div>
            <h2 className="text-[1.8rem] font-bold text-white mb-8">{t('about.heading')}</h2>

            <div className="stagger space-y-4 mb-12">
              {capabilities.map((item, i) => {
                const IconComponent = icons[i % icons.length];
                return (
                  <div
                    key={i}
                    className="group p-5 rounded-2xl bg-white/[0.02] border border-white/[0.07] hover:border-accent/40 backdrop-blur-md transition-all duration-300 spark-hover flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/30 flex items-center justify-center text-accent flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                      <IconComponent size={20} />
                    </div>
                    <div>
                      <p className="text-[1rem] text-[#aaa] group-hover:text-white transition-colors leading-relaxed">
                        {item}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* GitHub stats */}
            <div className="pt-8 border-t border-white/[0.04]">
              <p className="text-[0.65rem] text-[#444] font-mono uppercase tracking-[0.2em] mb-4">
                GitHub Activity
              </p>
              <div className="p-4 rounded-2xl bg-white/[0.01] border border-white/[0.05] overflow-hidden">
                <a
                  href="https://github.com/JeffersonTeles"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <img
                    src="https://github-readme-stats.vercel.app/api?username=JeffersonTeles&show_icons=true&hide_border=true&bg_color=0a0a0a&title_color=e2a63d&text_color=666666&icon_color=444444&ring_color=222222&count_private=true&cache_bust=174"
                    alt="GitHub Stats"
                    className="w-full max-w-[420px] opacity-60 hover:opacity-95 transition-opacity duration-500 mx-auto"
                    loading="lazy"
                    onError={(e) => {
                      e.target.src = 'https://github-profile-summary-cards.vercel.app/api/cards/profile?username=JeffersonTeles&theme=dracula';
                      e.target.classList.add('opacity-80');
                    }}
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Right: Info card */}
          <div className="lg:sticky lg:top-28 h-fit space-y-6">
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] backdrop-blur-md shadow-xl">
              {/* Avatar header */}
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-white/[0.06]">
                <div className="w-12 h-12 rounded-2xl overflow-hidden border border-accent/40 flex-shrink-0 shadow-md">
                  <img src="/jefferson-avatar.jpg" alt="Jefferson" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="text-[0.9rem] font-semibold text-white flex items-center gap-1">
                    Jefferson Teles <FiCheckCircle className="text-accent" size={13} />
                  </p>
                  <p className="text-[0.7rem] text-[#777] font-mono">Cascavel, Paraná</p>
                </div>
              </div>

              {/* Info rows */}
              <div className="space-y-0">
                {t('about.infoCard', { returnObjects: true }).map(([label, value], i) => (
                  <div key={i}>
                    {i > 0 && <div className="h-px bg-white/[0.04]" />}
                    <div className="flex justify-between items-center py-3">
                      <span className="text-[0.7rem] text-[#555] font-mono uppercase tracking-wider">
                        {label}
                      </span>
                      <span className="text-[0.8rem] text-[#888] font-medium">{value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default About;
