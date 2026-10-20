import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';
import { siteConfig } from '@/config/site';
import styles from './About.module.css';

export function AboutHeader() {
  return (
    <header className={styles.hero}>
      <div className={styles.identity}>
        <span className={styles.kicker}>Sobre Jefferson Teles</span>
        <h1>Entre suporte, automação e a <span>próxima camada.</span></h1>
        <p>
          Comecei desmontando computadores, passei por redes e suporte de TI, fui para automação
          industrial e hoje atuo como Analista de Suporte N2 em um sistema fiscal SaaS. Estou
          cursando Engenharia de Software e transformo essa trajetória em interfaces e projetos.
        </p>
        <div className={styles.actions}>
          <Link href="/contact" className="btn btn--primary btn--specular">
            <Mail size={16} aria-hidden /> Fale Comigo
          </Link>
          <a
            href={siteConfig.social.github}
            target="_blank"
            rel="noreferrer noopener"
            className="btn btn--ghost"
          >
            <Github size={16} aria-hidden /> GitHub
          </a>
          <a
            href={siteConfig.social.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className="btn btn--ghost"
          >
            <Linkedin size={16} aria-hidden /> LinkedIn
          </a>
        </div>
      </div>
    </header>
  );
}
