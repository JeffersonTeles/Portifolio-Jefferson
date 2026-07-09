import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  pt: {
    translation: {
      nav: {
        about: "Sobre",
        experience: "Experiência",
        projects: "Projetos",
        contact: "Contato",
      },
      hero: {
        role: "Busco vaga júnior em desenvolvimento frontend/fullstack",
        greeting: "Olá, sou",
        description:
          "Tenho 6 anos de base em TI, redes, Linux e hardware. Hoje atuo com suporte N2 em sistema fiscal e desenvolvo projetos reais com React, Node.js, Supabase, Flutter e automações com n8n + Gemini AI.",
        btnWorks: "Ver projetos",
        btnResume: "Ver currículo",
        btnGithub: "GitHub",
        btnWhatsapp: "WhatsApp",
        metrics: [
          { value: "6 anos", label: "base técnica em TI" },
          { value: "8/dia", label: "tickets N2 em média" },
          { value: "25%", label: "menos downtime industrial" },
        ],
      },
      about: {
        label: "Sobre mim",
        heading: "Uma transição consistente de suporte para software",
        p1: "Estou cursando ",
        p1Highlight: "Engenharia de Software",
        p1End:
          " no Centro Universitário FAG, com conclusão prevista para novembro de 2026. Minha base veio de campo: manutenção, redes, Linux, certificados digitais e atendimento direto ao cliente.",
        p2: "Trabalhei como ",
        p2Highlight: "Analista de Suporte Júnior na FaturAgil",
        p2End:
          ", resolvendo chamados N2 de sistema fiscal, NFS-e, certificados A1/A3 e homologações de APIs de Prefeituras. Essa rotina me ensinou a investigar problema real, documentar causa e falar com usuário sem enrolação.",
        p3: "Hoje foco em ",
        p3Highlight: "React, Node.js, Supabase, Flutter e automações com IA",
        p3End:
          ". Busco minha primeira vaga como desenvolvedor júnior, preferencialmente remota, onde eu possa somar com visão de produto, suporte e código.",
        tags: [
          "Suporte N2",
          "Linux no dia a dia",
          "APIs REST",
          "Projetos fullstack",
          "Automação com IA",
        ],
      },
      experience: {
        label: "Experiência",
        heading: "Onde construí minha base técnica",
        intro:
          "Antes de buscar minha primeira vaga como desenvolvedor, passei por suporte, infraestrutura e automação. Essa vivência me ajuda a entender usuário, produção e manutenção, não só código.",
        list: [
          {
            period: "Mar 2026 — atual",
            role: "Analista de Suporte Júnior",
            company: "FaturAgil",
            summary:
              "Suporte N2 para sistema fiscal SaaS, com rotina de NFS-e, certificados digitais e homologação de APIs municipais.",
            bullets: [
              "Resolvo média de 8 tickets/dia envolvendo emissão fiscal, NBS/CBS, alíquotas e dúvidas técnicas.",
              "Gero, atualizo e instalo certificados A1/A3 (.cer, .pem, .p12, .key) em ambiente Linux.",
              "Documento bugs recorrentes e repasso melhorias para o time de desenvolvimento.",
            ],
          },
          {
            period: "Mar 2025 — Fev 2026",
            role: "Técnico em Eletrônica e Automação Industrial",
            company: "Maguinho Sensores",
            summary:
              "Montagem e manutenção de módulos eletrônicos e sensores para automação de máquinas agrícolas.",
            bullets: [
              "Reduzi o tempo de inatividade industrial em 25% com manutenção e diagnóstico em campo.",
              "Integrei sensores com Arduino/ESP32, fiação, solda e chicotes elétricos.",
              "Atendi clientes diretamente, entendendo o problema no ambiente real de operação.",
            ],
          },
          {
            period: "Jan 2020 — Fev 2025",
            role: "Técnico de TI — Suporte, Redes e Hardware",
            company: "Digital Informática",
            summary:
              "Atendimento presencial para residências e empresas, com foco em redes, hardware, sistemas e certificados digitais.",
            bullets: [
              "Configurei redes LAN/WAN, DNS, IP fixo/dinâmico, VPN, CFTV, Mikrotik e Ubiquiti.",
              "Fiz manutenção de computadores e notebooks, instalação de drivers, tokens e certificados.",
              "Trabalhei com infraestrutura de fibra ótica, incluindo passagem de cabos, conectorização e fusão.",
            ],
          },
          {
            period: "Conclusão prevista: Nov 2026",
            role: "Bacharelado em Engenharia de Software",
            company: "Centro Universitário FAG",
            summary:
              "Graduação em andamento, com foco em desenvolvimento web, APIs, banco de dados e práticas de engenharia de software.",
            bullets: [
              "Uso os projetos acadêmicos como base para sistemas fullstack reais.",
              "Tenho interesse especial em frontend, integrações REST, automação e produto.",
            ],
          },
        ],
      },
      projects: {
        label: "Projetos",
        heading: "Projetos com contexto real",
        stack: "Tecnologias",
        challenge: "O que fiz",
        problem: "Problema",
        solution: "Solução",
        result: "Evidência",
        launchApp: "Ver projeto",
        privateAccess: "Repositório privado",
        list: [
          {
            title: "Maestria Docente",
            problem:
              "O acompanhamento de cursos e certificados era disperso em arquivos e planilhas, o que dificultava evolução e histórico.",
            solution:
              "Sistema web para centralizar perfis, etapas e acompanhamento da trilha docente em uma interface única.",
            stack: ["React", "Vite", "Zustand", "Node.js", "Express", "Supabase"],
            challenge:
              "Modelei o fluxo e implementei parte das telas e da base do projeto em colaboração com o restante do time.",
            result:
              "Projeto de TCC em andamento, com repositório privado e protótipo publicado.",
            status: "Privado",
            statusColor: "text-amber-300/80 border-amber-300/30",
            access: "Repositório privado",
            link: "https://projeto-maestria-vercel.vercel.app",
            image:
              "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=900&auto=format&fit=crop&q=80",
          },
          {
            title: "Casamento",
            problem:
              "O projeto precisava de uma presença online simples, elegante e fácil de abrir no celular.",
            solution:
              "Site publicado com foco em apresentação visual, navegação direta e acesso rápido ao conteúdo principal.",
            stack: ["Next.js", "Vercel", "Framer Motion", "CSS"],
            challenge:
              "Organizei a estrutura visual e os componentes para manter uma experiência limpa e responsiva.",
            result:
              "Site em produção com link público para acesso e validação.",
            status: "Publicado",
            statusColor: "text-sky-300/80 border-sky-300/30",
            link: "https://casamento-ten-rho.vercel.app",
            image:
              "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=900&auto=format&fit=crop&q=80",
          },
          {
            title: "Interface X11 para Mouse no Linux",
            problem:
              "Alguns mouses no Linux/X11 exigem comandos de terminal para ajustes básicos, o que afasta usuários comuns.",
            solution:
              "Interface gráfica simples para aplicar configurações sem o usuário precisar decorar comandos.",
            stack: ["JavaScript", "Python", "HTML", "CSS", "Linux"],
            challenge:
              "Transformei comandos técnicos em uma experiência visual, com README documentado para uso pela comunidade Linux.",
            result:
              "Projeto publicado no GitHub como solução open source para periféricos sem driver oficial.",
            status: "Open source",
            statusColor: "text-sky-300/80 border-sky-300/30",
            link: "https://github.com/JeffersonTeles",
            image:
              "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=900&auto=format&fit=crop&q=80",
          },
        ],
      },
      skills: {
        label: "Habilidades",
        heading: "Stack que aparece nos meus projetos e no trabalho",
      },
      contact: {
        label: "Contato",
        heading: "Aberto para vaga júnior ou estágio em desenvolvimento",
        description:
          "Procuro uma oportunidade para entrar de vez no desenvolvimento de software. Tenho disponibilidade imediata, preferência por remoto ou Cascavel/PR, e gosto de mostrar o que já construí.",
        btnForm: "Enviar mensagem",
        location: "Cascavel, PR · Brasil",
        availability: "Disponível para oportunidades",
      },
    },
  },
  en: {
    translation: {
      nav: {
        about: "About",
        experience: "Experience",
        projects: "Projects",
        contact: "Contact",
      },
      hero: {
        role: "Looking for a junior frontend/fullstack developer role",
        greeting: "Hi, I'm",
        description:
          "I have 6 years of hands-on IT experience across networking, Linux and hardware. Today I work with L2 support for a fiscal SaaS product and build real projects with React, Node.js, Supabase, Flutter and n8n + Gemini AI automation.",
        btnWorks: "View projects",
        btnResume: "View resume",
        btnGithub: "GitHub",
        btnWhatsapp: "WhatsApp",
        metrics: [
          { value: "6 years", label: "IT foundation" },
          { value: "8/day", label: "average L2 tickets" },
          { value: "25%", label: "less industrial downtime" },
        ],
      },
      about: {
        label: "About me",
        heading: "A consistent path from support to software",
        p1: "I'm studying ",
        p1Highlight: "Software Engineering",
        p1End:
          " at Centro Universitario FAG, graduating in November 2026. My foundation came from field work: maintenance, networking, Linux, digital certificates and direct customer support.",
        p2: "I worked as a ",
        p2Highlight: "Junior Support Analyst at FaturAgil",
        p2End:
          ", handling L2 tickets for fiscal software, NFS-e, A1/A3 digital certificates and City Hall API homologation. This taught me to investigate real issues, document causes and communicate clearly.",
        p3: "Today I focus on ",
        p3Highlight: "React, Node.js, Supabase, Flutter and AI automation",
        p3End:
          ". I'm looking for my first junior developer role, preferably remote, where I can combine product sense, support experience and code.",
        tags: [
          "L2 support",
          "Daily Linux user",
          "REST APIs",
          "Fullstack projects",
          "AI automation",
        ],
      },
      experience: {
        label: "Experience",
        heading: "Where I built my technical foundation",
        intro:
          "Before looking for my first developer role, I worked in support, infrastructure and automation. That background helps me understand users, production issues and maintainability, not just code.",
        list: [
          {
            period: "Mar 2026 — present",
            role: "Junior Support Analyst",
            company: "FaturAgil",
            summary:
              "L2 support for a fiscal SaaS product, covering NFS-e, digital certificates and municipal API homologation.",
            bullets: [
              "Handle an average of 8 tickets/day involving fiscal issuing, tax codes and technical questions.",
              "Generate, update and install A1/A3 certificates (.cer, .pem, .p12, .key) in Linux environments.",
              "Document recurring bugs and report improvements to the development team.",
            ],
          },
          {
            period: "Mar 2025 — Feb 2026",
            role: "Electronics and Industrial Automation Technician",
            company: "Maguinho Sensores",
            summary:
              "Built and maintained electronic modules and sensors for agricultural machine automation.",
            bullets: [
              "Helped reduce industrial downtime by 25% through maintenance and field diagnostics.",
              "Integrated Arduino/ESP32 sensors, wiring, soldering and electrical harnesses.",
              "Worked directly with customers to understand problems in real operating environments.",
            ],
          },
          {
            period: "Jan 2020 — Feb 2025",
            role: "IT Technician — Support, Networking and Hardware",
            company: "Digital Informatica",
            summary:
              "On-site support for homes and companies, focused on networking, hardware, systems and digital certificates.",
            bullets: [
              "Configured LAN/WAN, DNS, static/dynamic IP, VPN, CCTV, Mikrotik and Ubiquiti networks.",
              "Maintained computers and notebooks, installed drivers, tokens and digital certificates.",
              "Worked with fiber optic infrastructure, including cabling, connectorization and fusion splicing.",
            ],
          },
          {
            period: "Expected graduation: Nov 2026",
            role: "BSc in Software Engineering",
            company: "Centro Universitario FAG",
            summary:
              "Degree in progress, focused on web development, APIs, databases and software engineering practices.",
            bullets: [
              "Use academic projects as a base for real fullstack systems.",
              "Especially interested in frontend, REST integrations, automation and product work.",
            ],
          },
        ],
      },
      projects: {
        label: "Projects",
        heading: "Projects with real context",
        stack: "Technologies",
        challenge: "What I did",
        problem: "Problem",
        solution: "Solution",
        result: "Evidence",
        launchApp: "View project",
        privateAccess: "Private repo",
        list: [
          {
            title: "Maestria Docente",
            problem:
              "Course and certificate tracking was spread across files and spreadsheets, which made history and progress harder to follow.",
            solution:
              "Web system to centralize profiles, steps and teacher development tracking in one interface.",
            stack: ["React", "Vite", "Zustand", "Node.js", "Express", "Supabase"],
            challenge:
              "Designed the flow and implemented part of the screens and base project in collaboration with the rest of the team.",
            result:
              "TCC project in progress, with a private repository and a published prototype.",
            status: "Private",
            statusColor: "text-amber-300/80 border-amber-300/30",
            access: "Private repo",
            link: "https://projeto-maestria-vercel.vercel.app",
            image:
              "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=900&auto=format&fit=crop&q=80",
          },
          {
            title: "Wedding Site",
            problem:
              "The project needed a simple, elegant online presence that opens well on mobile.",
            solution:
              "Published site focused on visual presentation, direct navigation and quick access to the main content.",
            stack: ["Next.js", "Vercel", "Framer Motion", "CSS"],
            challenge:
              "Organized the visual structure and components to keep the experience clean and responsive.",
            result:
              "Production site with a public link for access and validation.",
            status: "Published",
            statusColor: "text-sky-300/80 border-sky-300/30",
            link: "https://casamento-ten-rho.vercel.app",
            image:
              "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=900&auto=format&fit=crop&q=80",
          },
          {
            title: "X11 Mouse GUI for Linux",
            problem:
              "Some Linux/X11 mice require terminal commands for basic adjustments, which is not friendly for everyday users.",
            solution:
              "Simple graphical interface to apply settings without requiring users to memorize commands.",
            stack: ["JavaScript", "Python", "HTML", "CSS", "Linux"],
            challenge:
              "Turned technical commands into a visual experience, with a documented README for the Linux community.",
            result:
              "Published on GitHub as an open source solution for peripherals without official drivers.",
            status: "Open source",
            statusColor: "text-sky-300/80 border-sky-300/30",
            link: "https://github.com/JeffersonTeles",
            image:
              "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=900&auto=format&fit=crop&q=80",
          },
        ],
      },
      skills: {
        label: "Skills",
        heading: "Stack I use in projects and at work",
      },
      contact: {
        label: "Contact",
        heading: "Open to junior developer roles or internships",
        description:
          "I'm looking for an opportunity to move fully into software development. I'm immediately available, prefer remote or Cascavel/PR, and can walk through what I've already built.",
        btnForm: "Send message",
        location: "Cascavel, Brazil",
        availability: "Available for opportunities",
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
