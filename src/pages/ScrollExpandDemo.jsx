import { useTranslation } from 'react-i18next';
import { ArrowUpRight } from 'lucide-react';
import ScrollExpand from '@/components/ScrollExpand';

export default function ScrollExpandDemo() {
  const { t } = useTranslation();

  return (
    <div className="bg-[#050505] text-white">
      <ScrollExpand
        src="/og-image.png"
        alt="Jefferson Teles — portfolio hero"
        title={t('scrollDemo.title')}
        scrollHint={t('scrollDemo.hint')}
        startWidth={46}
        startHeight={60}
        mediaZoom={1.25}
        useWindowScroll
      >
        <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
          {t('scrollDemo.overlayTitle')}
        </h2>
        <p className="max-w-xl text-white/70 leading-relaxed">{t('scrollDemo.overlayText')}</p>
        <a
          href="/"
          className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-2.5 text-sm font-medium backdrop-blur transition-colors hover:border-accent/60 hover:text-accent"
        >
          {t('scrollDemo.cta')}
          <ArrowUpRight size={15} />
        </a>
      </ScrollExpand>

      <section className="py-32 px-6 md:px-10 max-w-[900px] mx-auto">
        <p className="text-[0.75rem] font-mono uppercase tracking-widest text-accent mb-4">
          {t('scrollDemo.afterLabel')}
        </p>
        <h2 className="text-[2rem] font-bold mb-6">{t('scrollDemo.afterHeading')}</h2>
        <p className="text-white/60 leading-relaxed max-w-2xl">{t('scrollDemo.afterText')}</p>
      </section>
    </div>
  );
}
