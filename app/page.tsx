import { CyberHero } from '@/components/home/CyberHero';
import { Capabilities } from '@/components/home/Capabilities';
import { ContactBanner } from '@/components/home/ContactBanner';
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
      <CyberHero />
      <Journey />
      <ProjectShowcase />
      <Capabilities />
      <ContactBanner />
    </>
  );
}
