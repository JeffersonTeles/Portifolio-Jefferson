import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  pt: {
    translation: {
      hero: {
        status: "Aberto a oportunidades",
        title1: "Jefferson",
        title2: "Teles",
        subtitle: "Desenvolvedor em Construção",
        desc: "Automação, IA e Web • De suporte a código • Cascavel/PR",
        btnProjects: "Ver Projetos",
        btnResume: "Baixar Currículo"
      },
      about: {
        title: "Sobre Mim",
        headline: "Da infraestrutura física para o desenvolvimento de produtos.",
        p1: "Minha jornada na tecnologia começou com as mãos na massa: redes, Linux e hardware.",
        p2: "Atualmente, como Analista de Suporte Júnior na FaturÁgil, aprendi a lidar com problemas reais de usuários.",
        p3: "Hoje, curso Engenharia de Software na FAG e foco em construir soluções de alto impacto."
      },
      skills: {
        title: "Skills"
      }
    }
  },
  en: {
    translation: {
      hero: {
        status: "Open to opportunities",
        title1: "Jefferson",
        title2: "Teles",
        subtitle: "Developer in Progress",
        desc: "Automation, AI & Web • Support to Code • Cascavel/PR",
        btnProjects: "View Projects",
        btnResume: "Download Resume"
      },
      about: {
        title: "About Me",
        headline: "From physical infrastructure to product development.",
        p1: "My tech journey started hands-on: networks, Linux, and hardware.",
        p2: "Currently, as a Junior Support Analyst at FaturÁgil, I've learned to handle real user problems.",
        p3: "Now, I'm studying Software Engineering at FAG, focusing on building high-impact solutions."
      },
      skills: {
        title: "Skills"
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'pt',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
