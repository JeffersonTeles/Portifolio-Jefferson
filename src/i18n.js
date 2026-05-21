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
        headline: "A base da infraestrutura somada à paixão pelo produto.",
        p1: "Minha trajetória na tecnologia começou com uma base técnica sólida em redes, Linux e hardware. Essa vivência me ensinou a pensar criticamente sobre como os sistemas operam.",
        p2: "Como Analista de Suporte Júnior na FaturÁgil, refinei minha capacidade de diagnóstico e resolução de problemas sob pressão.",
        p3: "Atualmente, curso Engenharia de Software na FAG e foco em construir soluções de alto impacto usando IA e Web."
      }
    }
  },
  en: {
    translation: {
      hero: {
        status: "Open to opportunities",
        title1: "Jefferson",
        title2: "Teles",
        subtitle: "Developer in Construction",
        desc: "Automation, AI & Web • Support to Code • Cascavel/PR",
        btnProjects: "View Projects",
        btnResume: "Download CV"
      },
      about: {
        title: "About Me",
        headline: "Infrastructure foundation meets product passion.",
        p1: "My tech journey began with a solid technical base in networking, Linux, and hardware. This taught me to think critically about how systems operate.",
        p2: "As a Junior Support Analyst at FaturÁgil, I refined my diagnostic and problem-solving skills under pressure.",
        p3: "Currently, I am studying Software Engineering at FAG, focusing on high-impact IA and Web solutions."
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'pt',
    fallbackLng: 'pt',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
