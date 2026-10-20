'use client';

import { useState } from 'react';
import { DepthProjectCarousel } from './DepthProjectCarousel';
import type { PortfolioProject } from '@/config/projects';
import styles from './ProjectExplorer.module.css';

type ProjectFilter = 'all' | 'site' | 'platform' | 'tool';

type ProjectExplorerProps = {
  projects: PortfolioProject[];
};

const filters: Array<{ value: ProjectFilter; label: string }> = [
  { value: 'all', label: 'Todos' },
  { value: 'site', label: 'Sites' },
  { value: 'platform', label: 'Educação' },
  { value: 'tool', label: 'Ferramenta' },
];

export function ProjectExplorer({ projects }: ProjectExplorerProps) {
  const [filter, setFilter] = useState<ProjectFilter>('all');
  const visibleProjects = filter === 'all'
    ? projects
    : projects.filter((project) => project.kind === filter);

  return (
    <>
      <div className={styles.filterBar} role="group" aria-label="Filtrar projetos por formato">
        <div className={styles.filterButtons}>
          {filters.map((item) => (
            <button
              type="button"
              key={item.value}
              className={styles.filterButton}
              aria-pressed={filter === item.value}
              onClick={() => setFilter(item.value)}
            >
              {item.label}
            </button>
          ))}
        </div>
        <span className={styles.filterCount}>
          {String(visibleProjects.length).padStart(2, '0')} {visibleProjects.length === 1 ? 'projeto' : 'projetos'}
        </span>
      </div>
      <DepthProjectCarousel key={filter} projects={visibleProjects} />
    </>
  );
}
