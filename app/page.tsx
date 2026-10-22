import { CyberHero } from '@/components/home/CyberHero';
import { Capabilities } from '@/components/home/Capabilities';
import { ContactBanner } from '@/components/home/ContactBanner';
import { Journey } from '@/components/home/Journey';
import { ProjectBento } from '@/components/home/ProjectBento';
import { SkillsTerminal } from '@/components/home/SkillsTerminal';
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
      <ProjectBento />
      <SkillsTerminal />
      <Capabilities />
      <ContactBanner />
    </>
  );
}
