import React from 'react';
import { useTranslation } from 'react-i18next';
import { skills } from '../data/constants';

const TechStack = () => {
  const { t } = useTranslation();

  const levelLabels = {
    practical: t('skills.levels.practical'),
    learning: t('skills.levels.learning'),
    tools: t('skills.levels.tools'),
  };

  return (
    <section id="skills" className="py-28">
      <div className="max-w-[900px] mx-auto px-6 md:px-10">
        <h2 className="text-[1.8rem] font-bold text-white mb-4">{t('skills.heading')}</h2>
        <p className="text-[0.95rem] text-[#555] leading-relaxed mb-14 max-w-[600px]">
          {t('skills.intro')}
        </p>

        <div className="space-y-5">
          {skills.map((group) => (
            <div key={group.level} className="p-6 rounded-xl bg-white/[0.02] border border-white/[0.07] hover:border-white/[0.1] transition-colors">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-center">
                  <group.icon size={16} className="text-accent/50" />
                </div>
                <h3 className="text-[0.75rem] font-mono uppercase tracking-widest text-white">
                  {levelLabels[group.level] || group.label}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 text-[0.8rem] text-[#666] bg-white/[0.02] border border-white/[0.04] rounded-md"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-[0.8rem] text-[#555] font-mono leading-relaxed">
          {t('skills.honestyNote')}
        </p>
      </div>
    </section>
  );
};

export default TechStack;
