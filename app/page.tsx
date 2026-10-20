import { Capabilities } from '@/components/home/Capabilities';
import { ContactBanner } from '@/components/home/ContactBanner';
import { Hero } from '@/components/home/Hero';
import { Journey } from '@/components/home/Journey';
import { ProjectShowcase } from '@/components/home/ProjectShowcase';
import { createPageMetadata } from '@/lib/metadata';

export const metadata = createPageMetadata({
  title: 'Início',
  description:
    'Portfólio de Jefferson Teles: projetos reais de interface, suporte técnico, automação industrial e desenvolvimento frontend.',
  path: '/',
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <Journey />
      <ProjectShowcase />
      <Capabilities />
      <ContactBanner />
    </>
  );
}
