import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { portfolioProjects } from '@/config/projects';
import { ProjectExplorer } from './ProjectExplorer';
import styles from './Home.module.css';

type ProjectShowcaseProps = {
  as?: 'h1' | 'h2';
};

export function ProjectShowcase({ as: Heading = 'h2' }: ProjectShowcaseProps) {
  return (
    <section id="projetos" className={styles.projectsSection}>
      <div className="container">
        <header className={styles.projectsHeader}>
          <div>
            <span className={styles.projectsCount}>{String(portfolioProjects.length).padStart(2, '0')} projetos no portfólio</span>
            <Heading>Trabalho que mostra o processo.</Heading>
          </div>
          <p>
            Sites, uma plataforma educacional e uma ferramenta desktop. Cada tela registra um
            contexto real e o caminho até a interface publicada.
          </p>
        </header>

        <ProjectExplorer projects={portfolioProjects} />

        <div className={styles.projectFooter}>
          <p>Quer conversar sobre um projeto?</p>
          <Link href="/contact" className="textLink">
            Fale Comigo <ArrowRight size={15} aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}
