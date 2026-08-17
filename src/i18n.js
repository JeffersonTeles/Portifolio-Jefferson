import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  pt: {
    translation: {
      nav: {
        home: "Home",
        about: "Sobre",
        projects: "Projetos",
        blog: "Blog",
        lab: "Lab",
        contact: "Contato",
      },
      hero: {
        role: "Engenheiro de Software • Automação e IA",
        title1: "Automatizando",
        title2: "processos que",
        title3: "tomam tempo de gente real.",
        description:
          "Trabalho com automações em Python, integração de IA e sistemas que operam no dia a dia. Nada de buzzword, só código que resolve.",
        descriptionHighlight: "código que resolve",
        btnWorks: "Projetos",
        btnResume: "Currículo",
      },
      about: {
        label: "> quem_sou_eu()",
        heading1: "Quem sou",
        p1: "Comecei mexendo em hardware — redes, servidores Linux, aquela pandilha de cabos detrás do rack. Aprendi que, por trás de qualquer sistema lento ou quebrado, tem um problema real de alguém.",
        p1Highlight: "redes e servidores Linux",
        p2: "Depois passei para o suporte estratégico na FaturÁgil, onde ficou claro: a maioria dos 'problemas técnicos' são, na verdade, ',
        p2Highlight: "problemas de processo",
        p2End: " que ninguém resolveu com um script antes.",
        p3: "Hoje, construo automações e integro IA para resolver essas dores. Prefiro um código simples que funciona hoje a uma arquitetura perfeita amanhã.",
        tags: [
          "Automação de Processos",
          "Python",
          "IA Generativa",
          "Sistemas Reais",
        ],
        timeline: [
          {
            year: "2020",
            title: "Infra no chão",
            desc: "Redes, Linux, hardware. Aprendi a pensar em sistemas do zero.",
          },
          {
            year: "2023",
            title: "Suporte de verdade",
            desc: "FaturÁgil. Diagnóstico de problemas reais, não só tickets.",
          },
          {
            year: "2024",
            title: "Automação com propósito",
            desc: "Python, IA e sistemas que não quebram no domingo.",
          },
        ],
      },
      projects: {
        label: "/ Projetos",
        heading1: "Projetos",
        heading2: "que existem de verdade.",
        stack: "Stack",
        challenge: "Problema real",
        launchApp: "Ver projeto",
        privateAccess: "Privado",
        list: [
          {
            title: "Maestria Docente",
            longDesc:
              "Plataforma de gestão acadêmica usada por 30+ professores na instituição. Automatiza desde check-in de aula até geração de relatórios — tudo em um visual limpo.",
            technicalDeepDive:
              "Next.js + Supabase. Foco em performance e interface enxuta, sem animações pesadas.",
            codeSnippet:
              "export const useAttendance = (classId) => {\n  const [status, setStatus] = useState('idle');\n  const checkIn = async () => {\n    setStatus('loading');\n    await supabase.rpc('mark_attendance', { class_id: classId });\n    setStatus('success');\n  };\n  return { status, checkIn };\n};",
            codeLanguage: "typescript",
            stack: ["Next.js", "Supabase", "Tailwind"],
            challenge:
              "Manter o sistema rápido mesmo com 200+ alunos simultâneos.",
            status: "Produção",
            statusColor: "text-white/40 border-white/10",
            link: "#",
            image:
              "https://images.unsplash.com/photo-1522199710521-7222006a3017",
          },
          {
            title: "Casamento",
            longDesc:
              "Site de casamento com RSVP em tempo real. Mais de 200 convidados confirmaram presença — e o sistema nunca caiu.",
            technicalDeepDive:
              "Next.js + Vercel. Foco em velocidade e deploy zero-downtime.",
            codeSnippet:
              "export const validateRSVP = (code) => {\n  const hash = generateSecurityToken(code);\n  return api.post('/rsvp/validate', { hash });\n};",
            codeLanguage: "javascript",
            stack: ["Next.js", "Vercel"],
            challenge:
              "Escalar para picos de acesso no momento do RSVP sem downtime.",
            status: "Produção",
            statusColor: "text-white/40 border-white/10",
            link: "https://casamento-ten-rho.vercel.app",
            image:
              "https://images.unsplash.com/photo-1519225421980-715cb0215aed",
          },
        ],
      },
      services: {
        label: "/ Serviços",
        heading1: "O que faço",
        heading2: "quando não estou codificando?",
        list: [
          {
            title: "Automações em Python",
            desc: "Scripts, bots e crawlers que fazem o trabalho chato por você.",
          },
          {
            title: "Integração de IA",
            desc: "OpenAI, Groq, LangChain — conecto modelos a sistemas reais.",
          },
          {
            title: "Sistemas Web",
            desc: "Next.js, React e Tailwind. Interfaces limpas, sem frescura.",
          },
        ],
      },
      skills: {
        label: "/ Stack",
        heading: "Tecnologias",
        categories: {
          performance: "Automação & IA",
          infrastructure: "Backend & Infra",
          intelligence: "Frontend",
        },
      },
      lab: {
        label: "/ Lab",
        heading: "Experimentos",
        tagline: "Coisas que eu testo no meu tempo livre.",
        desc: "Protótipos técnicos de baixo nível, sem pressa de ir pra produção.",
        items: {
          neural: {
            cat: "Interface",
            title: "Neural Sync",
            desc: "Visualização de redes neurais em tempo real.",
          },
        },
      },
    },
  },
  en: {
    translation: {
      nav: {
        home: "Home",
        about: "About",
        projects: "Projects",
        blog: "Blog",
        lab: "Lab",
        contact: "Contact",
      },
      hero: {
        role: "Software Engineer • Automation & AI",
        title1: "Automating",
        title2: "processes that",
        title3: "eat up real people's time.",
        description:
          "I build Python automations, integrate AI, and ship systems that just work. No buzzwords, just code that solves real problems.",
        descriptionHighlight: "code that solves real problems",
        btnWorks: "Projects",
        btnResume: "Resume",
      },
      about: {
        label: "> whoami()",
        heading1: "Who I am",
        p1: "Started in hardware — networks, Linux servers, that cable tangle behind the rack. Learned early that behind every broken system is a real person's problem.",
        p1Highlight: "networks and Linux servers",
        p2: "Moved into strategic support at FaturÁgil, where it became clear: most 'technical problems' are just ",
        p2Highlight: "unautomated processes",
        p2End: " waiting for someone to script them.",
        p3: "Today, I build automations and integrate AI to solve these pains. I prefer simple code that works today over perfect architecture tomorrow.",
        tags: [
          "Process Automation",
          "Python",
          "Generative AI",
          "Real Systems",
        ],
        timeline: [
          {
            year: "2020",
            title: "Infrastructure Roots",
            desc: "Networking, Linux, hardware. Learned to think in systems from the ground up.",
          },
          {
            year: "2023",
            title: "Real Support",
            desc: "Support Analyst at FaturÁgil. Diagnosing real problems, not just tickets.",
          },
          {
            year: "2024",
            title: "Automation with Purpose",
            desc: "Python, AI, and systems that don't break on Sundays.",
          },
        ],
      },
      projects: {
        label: "/ Projects",
        heading1: "Projects",
        heading2: "that actually exist.",
        stack: "Stack",
        challenge: "Real Problem",
        launchApp: "View Project",
        privateAccess: "Private",
        list: [
          {
            title: "Maestria Docente",
            longDesc:
              "Academic management platform used by 30+ teachers. Automates class check-in to report generation — clean UI, no fluff.",
            technicalDeepDive:
              "Next.js + Supabase. Prioritized performance and a lean interface.",
            codeSnippet:
              "export const useAttendance = (classId) => {\n  const [status, setStatus] = useState('idle');\n  const checkIn = async () => {\n    setStatus('loading');\n    await supabase.rpc('mark_attendance', { class_id: classId });\n    setStatus('success');\n  };\n  return { status, checkIn };\n};",
            codeLanguage: "typescript",
            stack: ["Next.js", "Supabase", "Tailwind"],
            challenge:
              "Keeping the app fast with 200+ students online simultaneously.",
            status: "Production",
            statusColor: "text-white/40 border-white/10",
            link: "#",
            image:
              "https://images.unsplash.com/photo-1522199710521-7222006a3017",
          },
          {
            title: "Casamento",
            longDesc:
              "Wedding site with real-time RSVP. 200+ guests confirmed — zero downtime.",
            technicalDeepDive:
              "Next.js + Vercel. Built for speed and zero-downtime deploys.",
            codeSnippet:
              "export const validateRSVP = (code) => {\n  const hash = generateSecurityToken(code);\n  return api.post('/rsvp/validate', { hash });\n};",
            codeLanguage: "javascript",
            stack: ["Next.js", "Vercel"],
            challenge:
              "Scaling for RSVP traffic spikes without downtime.",
            status: "Live",
            statusColor: "text-white/40 border-white/10",
            link: "https://casamento-ten-rho.vercel.app",
            image:
              "https://images.unsplash.com/photo-1519225421980-715cb0215aed",
          },
        ],
      },
      services: {
        label: "/ Services",
        heading1: "What I do",
        heading2: "when I'm not coding?",
        list: [
          {
            title: "Python Automations",
            desc: "Scripts, bots and crawlers that handle the boring stuff for you.",
          },
          {
            title: "AI Integration",
            desc: "OpenAI, Groq, LangChain — connecting models to real-world systems.",
          },
          {
            title: "Web Systems",
            desc: "Next.js, React, Tailwind. Clean interfaces, no fluff.",
          },
        ],
      },
      skills: {
        label: "/ Stack",
        heading: "Tech Stack",
        categories: {
          performance: "Automation & AI",
          infrastructure: "Backend & Infra",
          intelligence: "Frontend",
        },
      },
      lab: {
        label: "/ Lab",
        heading: "Experiments",
        tagline: "Things I tinker with in my spare time.",
        desc: "Low-level technical prototypes, no rush to production.",
        items: {
          neural: {
            cat: "Interface",
            title: "Neural Sync",
            desc: "Real-time neural network visualization.",
          },
        },
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "pt",
  fallbackLng: "pt",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;