import Link from 'next/link';
import { ArrowDownRight, ArrowRight } from 'lucide-react';
import { ResumeLink } from '@/components/ui/ResumeLink';
import { profile } from '@/config/profile';
import { PortfolioIntro } from './PortfolioIntro';
import styles from './Home.module.css';

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.heroGrid}`}>
        <div className={styles.heroCopy}>
          <div className={styles.heroKicker}>
            <span className={styles.signalDot} aria-hidden />
            Jefferson Teles / Desenvolvedor & Analista de Suporte
          </div>
          <h1 className={styles.heroTitle}>
            Do diagnóstico técnico
            <br />
            <span>à construção de interfaces.</span>
          </h1>
          <p className={styles.heroDescription}>
            Olá, sou o Jefferson. Trabalho com suporte técnico, automação industrial e desenvolvimento Frontend. Gosto de transformar processos complexos em sistemas claros e acessíveis.
          </p>
          <ul className={styles.heroStatus} aria-label="Situação profissional">
            <li>{profile.location}</li>
            <li>{profile.availability}</li>
            <li>{profile.goal}</li>
            <li>{profile.workMode}</li>
          </ul>
          <div className={styles.heroActions}>
            <a href="#projetos" className="btn btn--primary btn--specular">
              Ver meu trabalho <ArrowDownRight size={16} aria-hidden />
            </a>
            <ResumeLink className="btn btn--ghost" />
            <Link href="/about" className={styles.heroSecondaryLink}>
              Sobre Jefferson <ArrowRight size={15} aria-hidden />
            </Link>
          </div>
        </div>
        <PortfolioIntro />
      </div>
    </section>
  );
}
