const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/+$/, '');
const fallbackUrl = 'https://portifolio-jefferson-phi.vercel.app';

export const siteConfig = {
  url: configuredUrl || fallbackUrl,
  name: 'Jefferson Teles',
  shortName: 'Jefferson Teles',
  title: 'Jefferson Teles — Suporte, automação e frontend',
  description:
    'Portfólio de Jefferson Teles: suporte técnico, automação industrial e projetos de interface web para transformar problemas em sistemas mais claros.',
  locale: 'pt_BR',
  email: 'jeffersontelesdeoliveira@gmail.com',
  resumePath: '/Curriculo_Jefferson_Teles_TI.pdf',
  resumeDownloadName: 'Curriculo_Jefferson_Teles.pdf',
  ogImage: '/og-image.png',
  social: {
    github: 'https://github.com/JeffersonTeles',
    linkedin: 'https://www.linkedin.com/in/jeffersonteless/',
  },
  navigation: [
    { href: '/projetos', label: 'Projetos' },
    { href: '/about', label: 'Sobre' },
    { href: '/contact', label: 'Contato' },
  ],
} as const;
