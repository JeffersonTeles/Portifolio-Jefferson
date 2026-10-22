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
  role: string;
  stack: string[];
  problem: string;
  highlights: string[];
  codeNote: string;
};

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: 'telesseg',
    title: 'TELESSEG',
    category: 'Landing page',
    description:
      'Landing page da TELESSEG, empresa de Saúde e Segurança do Trabalho, para apresentar serviços e direcionar contato por WhatsApp.',
    image: '/screenshot-telesseg.png',
    imageAlt: 'Screenshot real da página inicial do projeto TELESSEG',
    tags: ['Landing page', 'HTML/CSS/JS', 'WhatsApp'],
    url: 'https://telesseg.com.br',
    kind: 'site',
    role: 'Desenvolvimento da página, do conteúdo e do fluxo de contato.',
    stack: ['HTML', 'CSS', 'JavaScript', 'WhatsApp'],
    problem:
      'A empresa precisava de um canal claro para os clientes encontrarem serviços e falarem direto com a equipe.',
    highlights: [
      'Exames ocupacionais, laudos e envio ao eSocial',
      'Treinamentos de NRs e programas da NR-01',
      'Plano corporativo e contato por WhatsApp',
    ],
    codeNote: 'Landing page em produção com domínio próprio.',
  },
  {
    slug: 'maestria-docente',
    title: 'Maestria Docente',
    category: 'Plataforma educacional (TCC)',
    description:
      'Sistema web fullstack do meu TCC para acompanhar trilhas, cursos e certificados docentes, com foco em leitura sem distrações.',
    image: '/screenshot-maestria.png',
    imageAlt: 'Screenshot real da tela de acesso da plataforma Maestria Docente',
    tags: ['Fullstack', 'TCC', 'Supabase'],
    url: 'https://projeto-maestria-vercel.vercel.app',
    kind: 'platform',
    role: 'Frontend, organização do fluxo, modelagem inicial e integração com backend e banco de dados.',
    stack: ['React', 'Vite', 'Tailwind CSS', 'Zustand', 'Node.js', 'Express', 'PostgreSQL', 'Supabase'],
    problem:
      'Tornar o consumo de material de mestrado mais claro, com trilhas, cursos e certificados em um só lugar.',
    highlights: [
      'Tela de acesso e contexto do projeto na primeira tela',
      'Acompanhamento de trilhas, cursos e certificados docentes',
      'Integração entre frontend, API Node/Express e banco PostgreSQL via Supabase',
    ],
    codeNote: 'Repositório privado por envolver contexto acadêmico e institucional.',
  },
  {
    slug: 'casamento',
    title: 'Jefferson & Beatriz',
    category: 'Site pessoal com painel',
    description:
      'Site do meu casamento, com convite, confirmação de presença e um painel de organização para os noivos.',
    image: '/screenshot-casamento.png',
    imageAlt: 'Screenshot real da página de casamento Jefferson e Beatriz',
    tags: ['Supabase', 'RSVP', 'Vercel'],
    url: 'https://casamento-ten-rho.vercel.app',
    kind: 'site',
    role: 'Projeto pessoal desenvolvido do início ao fim.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS', 'React', 'Supabase Auth', 'Vercel'],
    problem:
      'Reunir informações dos convidados e organizar presença, tarefas e lista de presentes sem planilhas soltas.',
    highlights: [
      'Contagem regressiva, data, local e atalhos para mapas',
      'Confirmação de presença por link individual (RSVP)',
      'Painel de organização com login dos noivos via Supabase Auth',
      'Cron na Vercel para manter o banco ativo',
    ],
    codeNote: 'Código público no GitHub (JeffersonTeles/Casamento).',
    repository: 'https://github.com/JeffersonTeles/Casamento',
  },
  {
    slug: 'linux-mouse-gui',
    title: 'Attack Shark X11',
    category: 'Ferramenta desktop open source',
    description:
      'Aplicativo desktop para configurar o mouse Attack Shark X11 no Linux, onde o fabricante não oferece software.',
    image: '/screenshot-x11.png',
    imageAlt: 'Screenshot real da interface do Attack Shark X11 Configurator',
    tags: ['Linux', 'Python', 'pywebview'],
    url: 'https://github.com/JeffersonTeles/attack-shark-x11-configurator',
    repository: 'https://github.com/JeffersonTeles/attack-shark-x11-configurator',
    kind: 'tool',
    role: 'Projeto pessoal, da ideia à documentação de instalação.',
    stack: ['Python', 'pywebview', 'JavaScript', 'HTML', 'CSS', 'Bun', 'Linux'],
    problem:
      'Comprei o mouse e não existia software para Linux. Criei a interface para configurá-lo sem comandos manuais no terminal.',
    highlights: [
      'Interface gráfica em pywebview para configurar o mouse',
      'Instalação, execução e atalho de desktop documentados no README',
      'Código aberto para outros usuários do mesmo periférico',
    ],
    codeNote: 'Código público no GitHub.',
  },
];

export function getProjectBySlug(slug: string): PortfolioProject | null {
  return portfolioProjects.find((project) => project.slug === slug) ?? null;
}

export function getProjectSlugs(): string[] {
  return portfolioProjects.map((project) => project.slug);
}
