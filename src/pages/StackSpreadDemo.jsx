import { useNavigate } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import BackToTop from '../components/BackToTop';
import Navbar from '../components/Navbar';
import ScrollReveal from '../components/ScrollReveal';
import StackSpread from '../components/StackSpread';
import { useTranslation } from 'react-i18next';

const StackSpreadDemo = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Navbar />
      <main>
        <StackSpread
          cards={[
            {
              src: '/screenshot-maestria.png',
              alt: 'Projeto Maestria — TCC',
              stackOffset: { x: -6, y: -8 },
              stackRotate: -14,
              target: { x: -27, y: -24, rotate: -5, w: 24, h: 16 },
              targetSm: { x: -22, y: -40 },
              z: 4,
            },
            {
              src: '/screenshot-casamento.png',
              alt: 'Projeto Casamento',
              stackOffset: { x: 8, y: -6 },
              stackRotate: 12,
              target: { x: 27, y: -22, rotate: 4, w: 24, h: 16 },
              targetSm: { x: 22, y: -19 },
              z: 3,
            },
            {
              src: '/screenshot-x11.png',
              alt: 'Sistema X11',
              stackOffset: { x: -8, y: 8 },
              stackRotate: 8,
              target: { x: -25, y: 25, rotate: 3, w: 24, h: 16 },
              targetSm: { x: -22, y: 20 },
              z: 2,
            },
            {
              src: '/og-image.png',
              alt: 'Portfólio Jefferson Teles',
              stackOffset: { x: 10, y: 10 },
              stackRotate: -6,
              target: { x: 25, y: 23, rotate: -4, w: 24, h: 16 },
              targetSm: { x: 22, y: 40 },
              z: 5,
            },
          ]}
          title={t('stackDemo.title')}
          subtitle={t('stackDemo.subtitle')}
          hint={t('stackDemo.hint')}
          scrollDistance={1.2}
        />
      </main>
      <AnimatedSection>
        <ScrollReveal>
          <section className="py-24 text-center">
            <p className="text-[#888] max-w-md mx-auto px-6">{t('stackDemo.outro')}</p>
            <button
              type="button"
              onClick={() => navigate('/')}
              className="mt-8 px-6 py-3 rounded-full border border-accent/40 text-accent hover:bg-accent/10 transition-colors"
            >
              {t('scrollDemo.backHome')}
            </button>
          </section>
        </ScrollReveal>
      </AnimatedSection>
      <BackToTop />
    </div>
  );
};

export default StackSpreadDemo;
