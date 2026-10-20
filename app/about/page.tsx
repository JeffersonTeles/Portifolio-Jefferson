import { AboutBentoGrid } from '@/components/about/AboutBentoGrid';
import { AboutHeader } from '@/components/about/AboutHeader';
import { AboutTechGrid } from '@/components/about/AboutTechGrid';
import { createPageMetadata } from '@/lib/metadata';
import styles from '@/components/about/About.module.css';

export const metadata = createPageMetadata({
  title: 'Sobre',
  description:
    'A trajetória de Jefferson Teles entre suporte de TI, automação industrial, SaaS e desenvolvimento de interfaces.',
  path: '/about',
});

export default function AboutPage() {
  return (
    <section className={styles.page}>
      <div className="container">
        <AboutHeader />
        <AboutTechGrid />
        <AboutBentoGrid />
      </div>
    </section>
  );
}
