import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, ExternalLink } from 'lucide-react';
import { notFound } from 'next/navigation';
import { getProjectBySlug, getProjectSlugs } from '@/config/projects';
import { ProjectFlipCard } from '@/components/projects/ProjectFlipCard';
import styles from '@/components/projects/Projects.module.css';

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) return { title: 'Projeto não encontrado' };

  return {
    title: project.title,
    description: project.description,
    alternates: { canonical: `/projetos/${project.slug}` },
    openGraph: {
      type: 'article',
      title: project.title,
      description: project.description,
      images: [{ url: project.image, alt: project.imageAlt }],
    },
  };
}

export default async function ProjectCasePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  const isTool = project.kind === 'tool';
  const primaryUrl = isTool ? (project.repository ?? project.url) : project.url;
  const primaryLabel = isTool ? 'Ver repositório' : 'Abrir projeto';
  const hasSeparateRepo = Boolean(project.repository && project.repository !== project.url);

  return (
    <article className={styles.casePage}>
      <div className="container">
        <Link href="/projetos" className={styles.caseBack}>
          <ArrowLeft size={15} aria-hidden /> Voltar para projetos
        </Link>

        <header className={styles.caseHeader}>
          <div>
            <span className={styles.caseKicker}>{project.category}</span>
            <h1>{project.title}</h1>
            <p>{project.description}</p>
          </div>
          <div className={styles.caseHeaderAside}>
            <div className={styles.caseTags}>
              {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
            </div>
            <div className={styles.caseActions}>
              <a
                href={primaryUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="btn btn--primary btn--specular"
              >
                {primaryLabel} <ExternalLink size={15} aria-hidden />
              </a>
              {hasSeparateRepo && project.repository && (
                <a
                  href={project.repository}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="btn btn--ghost"
                >
                  Ver no GitHub <ExternalLink size={15} aria-hidden />
                </a>
              )}
            </div>
          </div>
        </header>

        <ProjectFlipCard project={project} />

        <div className={styles.caseContent}>
          <div>
            <h2>O que o projeto reúne.</h2>
            <div className={styles.caseHighlights}>
              {project.highlights.map((highlight) => (
                <div className={styles.caseHighlight} key={highlight}>{highlight}</div>
              ))}
            </div>
          </div>
          <aside className={styles.caseAside}>
            <span>Ficha técnica</span>
            <dl className={styles.caseFacts}>
              <div>
                <dt>Problema</dt>
                <dd>{project.problem}</dd>
              </div>
              <div>
                <dt>Meu papel</dt>
                <dd>{project.role}</dd>
              </div>
              <div>
                <dt>Stack</dt>
                <dd>{project.stack.join(' · ')}</dd>
              </div>
              <div>
                <dt>Código</dt>
                <dd>{project.codeNote}</dd>
              </div>
            </dl>
            <a
              href={primaryUrl}
              target="_blank"
              rel="noreferrer noopener"
              className={styles.caseExternal}
            >
              {primaryLabel} <ArrowUpRight size={15} aria-hidden />
            </a>
            {hasSeparateRepo && project.repository && (
              <a
                href={project.repository}
                target="_blank"
                rel="noreferrer noopener"
                className={styles.caseExternal}
              >
                Ver código no GitHub <ArrowUpRight size={15} aria-hidden />
              </a>
            )}
          </aside>
        </div>
      </div>
    </article>
  );
}
