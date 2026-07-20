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
          "Comecei na TI fazendo manutenção de computadores e configurando redes. Passei por suporte N2, automação industrial e hoje curso Engenharia de Software. No tempo livre, construo projetos com React, Node.js e Supabase — e automações com n8n e IA.",
        btnWorks: "Ver projetos",
        btnResume: "Ver currículo",
        btnGithub: "GitHub",
        btnWhatsapp: "WhatsApp",
        metrics: [
          { value: "6+", label: "anos de TI" },
          { value: "8+", label: "tickets N2/dia" },
          { value: "3+", label: "projetos publicados" },
        ],
      },
      about: {
        label: "Sobre mim",
        heading: "De suporte a software — a transição que estou construindo",
        p1: "Cursando ",
        p1Highlight: "Engenharia de Software",
        p1End:
          " no Centro Universitário FAG (conclusão em nov/2026). Antes disso, aprendi TI na prática: formatando computadores, passando cabo de rede, configurando roteador e lidando com cliente bravo.",
        p2: "Passei pelo ",
        p2Highlight: "suporte N2 na FaturAgil",
        p2End:
          ", onde resolvia chamados de sistema fiscal, certificados A1/A3 e homologação de APIs municipais. Lá aprendi a investigar de verdade, não só seguir script.",
        p3: "Hoje foco em ",
        p3Highlight: "React, Node.js, Supabase e automações com IA",
        p3End:
          ". Busco minha primeira oportunidade como desenvolvedor júnior — presencial em Cascavel ou remoto. Quero um time onde eu possa contribuir de verdade e continuar aprendendo.",
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
            desc: "TCC de Engenharia de Software desenvolvido em time. Modelei o fluxo de acompanhamento docente e implementei as telas principais com React e Zustand, integrado ao Supabase. O trabalho mais importante foi definir a estrutura de dados com o time antes de escrever qualquer código — a maioria dos bugs de UI vinha de dado mal modelado. Repositório privado, protótipo publicado.",
            stack: ["React", "Vite", "Zustand", "Node.js", "Express", "Supabase"],
            status: "Privado",
            statusColor: "text-amber-300/80 border-amber-300/30",
            access: "Repositório privado",
            link: "https://projeto-maestria-vercel.vercel.app",
            image: "/screenshot-maestria.png",
          },
          {
            title: "Casamento",
            desc: "Site criado como presente para um casal. A prioridade era abrir rápido no celular, ter boa apresentação e não exigir manutenção. Usei Next.js com Framer Motion para as animações de entrada. Está em produção desde o dia do evento e nunca precisou de ajuste.",
            stack: ["Next.js", "Vercel", "Framer Motion", "CSS"],
            status: "Publicado",
            statusColor: "text-emerald-300/80 border-emerald-300/30",
            link: "https://casamento-ten-rho.vercel.app",
            image: "/screenshot-casamento.png",
          },
          {
            title: "Interface X11 para Mouse no Linux",
            desc: "Resolvi um problema pessoal: meu mouse Redragon no Linux/X11 precisava de comandos de terminal para ajustar DPI e botões. Criei uma interface gráfica com HTML/JS que chama scripts Python por baixo, documentei no README e publiquei no GitHub pra quem tiver o mesmo problema.",
            stack: ["JavaScript", "Python", "HTML", "CSS", "Linux"],
            status: "Open source",
            statusColor: "text-emerald-300/80 border-emerald-300/30",
            link: "https://github.com/JeffersonTeles",
            image: "/screenshot-x11.png",
          },
        ],
      },
      skills: {
        label: "Habilidades",
        heading: "Stack que aparece nos meus projetos e no trabalho",
      },
      certifications: {
        label: "Formação",
        heading: "Formação acadêmica",
        course: "Bacharelado em Engenharia de Software",
        institution: "Centro Universitário FAG — Cascavel/PR",
        type: "Graduação",
        year: "Previsão de conclusão: Nov/2026",
        description: "Curso focado em desenvolvimento web, APIs REST, banco de dados, engenharia de requisitos e práticas ágeis. Conciliando a graduação com experiência prática em suporte N2 e projetos fullstack.",
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
          "I started in IT fixing computers and setting up networks. Worked my way through L2 support, industrial automation, and now I'm studying Software Engineering. In my free time, I build projects with React, Node.js, Supabase — and automations with n8n and AI.",
        btnWorks: "View projects",
        btnResume: "View resume",
        btnGithub: "GitHub",
        btnWhatsapp: "WhatsApp",
        metrics: [
          { value: "6+", label: "years in IT" },
          { value: "8+", label: "L2 tickets/day" },
          { value: "3+", label: "projects published" },
        ],
      },
      about: {
        label: "About me",
        heading: "From support to software — the transition I'm building",
        p1: "Studying ",
        p1Highlight: "Software Engineering",
        p1End:
          " at Centro Universitario FAG (graduating Nov 2026). Before that, I learned IT hands-on: fixing computers, running network cables, configuring routers and dealing with upset customers.",
        p2: "Worked as ",
        p2Highlight: "L2 Support at FaturAgil",
        p2End:
          ", handling fiscal system tickets, A1/A3 digital certificates and city hall API homologation. That routine taught me to actually investigate problems, not just follow a script.",
        p3: "Today I focus on ",
        p3Highlight: "React, Node.js, Supabase and AI automation",
        p3End:
          ". Looking for my first junior developer role — on-site in Cascavel or remote. I want a team where I can contribute for real and keep growing.",
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
            desc: "Software engineering capstone project built as a team. I designed the teacher tracking flow and implemented the main screens using React and Zustand, integrated with Supabase. The most important step was defining the data structure with the team before writing any code — most UI bugs came from poorly modeled data. Private repo, published prototype.",
            stack: ["React", "Vite", "Zustand", "Node.js", "Express", "Supabase"],
            status: "Private",
            statusColor: "text-amber-300/80 border-amber-300/30",
            access: "Private repo",
            link: "https://projeto-maestria-vercel.vercel.app",
            image: "/screenshot-maestria.png",
          },
          {
            title: "Wedding Site",
            desc: "Built as a gift for a couple. Priority was fast mobile loading, clean presentation and zero maintenance. Used Next.js with Framer Motion for the entrance animations. It's been live since the wedding and has never needed any changes.",
            stack: ["Next.js", "Vercel", "Framer Motion", "CSS"],
            status: "Published",
            statusColor: "text-emerald-300/80 border-emerald-300/30",
            link: "https://casamento-ten-rho.vercel.app",
            image: "/screenshot-casamento.png",
          },
          {
            title: "X11 Mouse GUI for Linux",
            desc: "Started as a personal fix: my Redragon mouse on Linux/X11 needed terminal commands to adjust DPI and buttons. I built a simple GUI with HTML/JS calling Python scripts underneath, wrote a README, and published it on GitHub for anyone running into the same issue.",
            stack: ["JavaScript", "Python", "HTML", "CSS", "Linux"],
            status: "Open source",
            statusColor: "text-emerald-300/80 border-emerald-300/30",
            link: "https://github.com/JeffersonTeles",
            image: "/screenshot-x11.png",
          },
        ],
      },
      skills: {
        label: "Skills",
        heading: "Stack I use in projects and at work",
      },
      certifications: {
        label: "Education",
        heading: "Academic background",
        course: "BSc in Software Engineering",
        institution: "Centro Universitário FAG — Cascavel/PR",
        type: "Undergraduate",
        year: "Expected graduation: Nov/2026",
        description: "Degree focused on web development, REST APIs, databases, requirements engineering and agile practices. Combining studies with hands-on L2 support experience and fullstack projects.",
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
