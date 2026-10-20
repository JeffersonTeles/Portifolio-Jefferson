export type ProjectKind = 'site' | 'platform' | 'tool';

export type PortfolioProject = {
  slug: string;
  title: string;
  category: string;
  description: string;
  image: string;
  imageAlt: string;
  tags: string[];
  url: string;
  repository?: string;
  kind: ProjectKind;
  highlights: string[];
};

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: 'telesseg',
    title: 'TELESSEG',
    category: 'Site institucional',
    description:
      'A empresa precisava de um canal mais claro para seus clientes. Construí essa página para centralizar exames, documentos e planos de Saúde e Segurança do Trabalho, facilitando o contato direto.',
    image: '/screenshot-telesseg.png',
    imageAlt: 'Screenshot real da página inicial do projeto TELESSEG',
    tags: ['Interface institucional', 'WhatsApp', 'Conteúdo'],
    url: 'https://telesseg.com.br',
    kind: 'site',
    highlights: [
      'Exames ocupacionais, laudos e envio ao eSocial',
      'Treinamentos de NRs e programas da NR-01',
      'Plano corporativo e contato por WhatsApp',
    ],
  },
  {
    slug: 'maestria-docente',
    title: 'Maestria Docente',
    category: 'Experiência educacional',
    description:
      'O desafio era tornar o consumo de material de mestrado mais agradável. Desenvolvi uma interface focada na apresentação clara do contexto e em uma experiência de leitura sem distrações.',
    image: '/screenshot-maestria.png',
    imageAlt: 'Screenshot real da tela de acesso da plataforma Maestria Docente',
    tags: ['Interface educacional', 'Projeto visual'],
    url: 'https://projeto-maestria-vercel.vercel.app',
    kind: 'platform',
    highlights: [
      'Contexto do projeto apresentado na primeira tela',
      'Experiência visual voltada ao contexto educacional',
      'Projeto apresentado como referência de interface',
    ],
  },
  {
    slug: 'casamento',
    title: 'Jefferson & Beatriz',
    category: 'Experiência editorial',
    description:
      'Um projeto muito pessoal: o site do meu casamento. Criei para centralizar todas as informações para os convidados (local, lista de presentes) em uma experiência editorial única e elegante.',
    image: '/screenshot-casamento.png',
    imageAlt: 'Screenshot real da página de casamento Jefferson e Beatriz',
    tags: ['Save the date', 'Editorial', 'Mapas'],
    url: 'https://casamento-ten-rho.vercel.app',
    kind: 'site',
    highlights: [
      'Data, local, programação e traje sugerido',
      'Contagem regressiva e atalhos para mapas',
      'Lista de presentes e mural de mensagens',
    ],
  },
  {
    slug: 'linux-mouse-gui',
    title: 'Attack Shark X11',
    category: 'Ferramenta desktop',
    description:
      'Comprei esse mouse e não havia software para Linux. Para resolver minha própria dor (e da comunidade), criei um aplicativo desktop em Python com interface webview para configurá-lo.',
    image: '/screenshot-x11.png',
    imageAlt: 'Screenshot real da interface do Attack Shark X11 Configurator',
    tags: ['Linux', 'Python', 'WebView'],
    url: 'https://github.com/JeffersonTeles/attack-shark-x11-configurator',
    repository: 'https://github.com/JeffersonTeles/attack-shark-x11-configurator',
    kind: 'tool',
    highlights: [
      'Configuração do mouse Attack Shark X11',
      'Python e pywebview em ambiente Linux',
      'Instalação e atalho documentados no repositório',
    ],
  },
];

export function getProjectBySlug(slug: string): PortfolioProject | null {
  return portfolioProjects.find((project) => project.slug === slug) ?? null;
}

export function getProjectSlugs(): string[] {
  return portfolioProjects.map((project) => project.slug);
}
