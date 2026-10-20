import { ProjectShowcase } from '@/components/home/ProjectShowcase';
import { createPageMetadata } from '@/lib/metadata';

export const metadata = createPageMetadata({
  title: 'Projetos',
  description: 'Telas e interfaces publicadas por Jefferson Teles em sites, educação e ferramenta desktop.',
  path: '/projetos',
});

export default function ProjectsIndexPage() {
  return <ProjectShowcase as="h1" />;
}
