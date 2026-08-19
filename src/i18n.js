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
        home: "Início",
      },
      hero: {
        role: "Desenvolvedor Júnior",
        title1: "Jefferson Teles",
        description: "Desenvolvedor em formação com experiência em suporte técnico, automação Python e sistemas que resolvem problemas reais. Estou em transição de suporte para desenvolvimento e busco minha primeira oportunidade como programador júnior.",
        btnWorks: "Ver projetos",
        btnResume: "Ver currículo",
      },
      about: {
        label: "Sobre mim",
        heading: "Foco em resolver problemas reais, não em buzzwords",
        p1: "Comecei mexendo em hardware e redes — Linux, servidores, cabos atrás do rack. Aprendi que por trás de qualquer sistema lento ou quebrado, tem um problema real de alguém.",
        p2: "Trabalhei em suporte N2 por anos, onde descobri que a maioria dos 'problemas técnicos' são processos que ninguém resolveu com um script antes. Hoje aplico essa visão em automação Python e integração de IA.",
        p3: "Estou em transição total para desenvolvimento. Meu foco é código simples que funciona hoje, não arquiteturas perfeitas amanhã. Busco minha primeira oportunidade como desenvolvedor júnior — remoto ou Cascavel/PR.",
        tags: [
          "Linux no dia a dia",
          "Automação Python",
          "Integração de IA",
          "Sistemas que não quebram no domingo",
        ],
        timeline: [
          {
            year: "2020 - 2025",
            title: "Suporte Técnico e Infraestrutura",
            desc: "Atuei em suporte N2, redes, servidores Linux e hardware. Aprendi a encontrar a raiz dos problemas e documentar soluções — habilidades que levo para o desenvolvimento.",
            detail: "Digital Informática / FaturÁgil — Cascavel, PR",
          },
          {
            year: "2024 - 2026",
            title: "Graduação em Engenharia de Software",
            desc: "Bacharelado em andamento no FAG, com foco em desenvolvimento web, APIs e práticas de engenharia de software.",
            detail: "Centro Universitário FAG — Cascavel, PR",
          },
        ],
      },
      experience: {
        label: "Experiência",
        heading: "Experiência profissional",
        intro: "Antes de buscar minha primeira vaga como desenvolvedor, passei por suporte técnico, infraestrutura e automação. Essa vivência me ajuda a entender o usuário final, não só o código.",
        list: [
          {
            period: "Mar 2026 — atual",
            role: "Analista de Suporte Júnior",
            company: "FaturÁgil",
            summary:
              "Suporte N2 para sistema fiscal SaaS. Resolvo tickets envolvendo NFS-e, certificados digitais e integração de APIs municipais.",
            bullets: [
              "Resolvo média de 8 tickets/dia envolvendo emissão fiscal, alíquotas e dúvidas técnicas.",
              "Instalo e gerencio certificados digitais A1/A3 em ambiente Linux.",
              "Documento bugs recorrentes para o time de desenvolvimento.",
            ],
          },
          {
            period: "Mar 2025 — Fev 2026",
            role: "Técnico em Eletrônica e Automação Industrial",
            company: "Maguinho Sensores",
            summary:
              "Montagem e manutenção de sensores e módulos eletrônicos para máquinas agrícolas.",
            bullets: [
              "Reduzi o tempo de inatividade industrial em 25% com diagnóstico e manutenção em campo.",
              "Integrei sensores com Arduino/ESP32, fiação e chicotes elétricos.",
              "Atendi clientes diretamente, entendendo o problema no ambiente real de operação.",
            ],
          },
          {
            period: "Jan 2020 — Fev 2025",
            role: "Técnico de TI — Suporte, Redes e Hardware",
            company: "Digital Informática",
            summary:
              "Suporte técnico para residências e empresas. Redes, hardware, Linux e certificados digitais.",
            bullets: [
              "Configurei redes LAN/WAN, VPN, Mikrotik e Ubiquiti.",
              "Manutenção de computadores e notebooks, instalação de drivers e tokens.",
              "Infraestrutura de fibra óptica: passagem de cabos, conectorização e fusão.",
            ],
          },
        ],
      },
      projects: {
        label: "Projetos",
        heading: "Projetos",
        list: [
          {
            title: "Maestria Docente",
            desc: "TCC de Engenharia de Software feito em equipe. Modelei o fluxo de acompanhamento docente e implementei as telas com React + Zustand integrado ao Supabase. A parte mais importante foi definir a estrutura de dados com a equipe antes de escrever código — a maioria dos bugs vinha de dados mal modelados.",
            stack: ["React", "Vite", "Zustand", "Node.js", "Express", "Supabase"],
            status: "Privado",
            link: "https://projeto-maestria-vercel.vercel.app",
            image: "/screenshot-maestria.png",
          },
          {
            title: "Site de Casamento",
            desc: "Site criado como presente para um casal. A prioridade era carregar rápido no celular, ter uma apresentação limpa e não precisar de manutenção. Feito com Next.js, está no ar desde o dia do evento e nunca precisou de ajuste.",
            stack: ["Next.js", "Vercel", "Framer Motion"],
            status: "Publicado",
            link: "https://casamento-ten-rho.vercel.app",
            image: "/screenshot-casamento.png",
          },
          {
            title: "Interface Gráfica para Mouse no Linux",
            desc: "Resolvi um problema pessoal: meu mouse Redragon no Linux/X11 precisava de comandos no terminal para ajustar DPI e botões. Criei uma interface gráfica simples com HTML/JS que chama scripts Python, documentei no README e publiquei no GitHub.",
            stack: ["JavaScript", "Python", "HTML", "CSS", "Linux"],
            status: "Open source",
            link: "https://github.com/JeffersonTeles",
            image: "/screenshot-x11.png",
          },
        ],
      },
      skills: {
        label: "Habilidades",
        heading: "Tecnologias",
      },
      certifications: {
        label: "Formação",
        heading: "Formação acadêmica",
        course: "Bacharelado em Engenharia de Software",
        institution: "Centro Universitário FAG — Cascavel/PR",
        type: "Graduação",
        year: "Previsão de conclusão: Nov/2026",
        description:
          "Curso focado em desenvolvimento web, APIs REST, banco de dados e engenharia de software. Conciliando a graduação com experiência prática em suporte N2 e projetos fullstack.",
      },
      contact: {
        label: "Contato",
        heading: "Vamos conversar",
        description:
          "Estou em transição de suporte para desenvolvimento e busco minha primeira oportunidade como programador. Estou disponível imediatamente, prefiro remoto ou Cascavel/PR.",
        formNote: "Envie uma mensagem ou fale comigo diretamente pelo email abaixo.",
        location: "Cascavel, PR · Brasil",
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
        role: "Junior Developer",
        title1: "Jefferson Teles",
        description: "Developer in transition from technical support, focused on Python automation and web systems that solve real problems. Looking for my first opportunity as a junior developer.",
        btnWorks: "View projects",
        btnResume: "View resume",
      },
      about: {
        label: "About me",
        heading: "I solve real problems, not buzzwords",
        p1: "Started with hardware and networks — Linux, servers, cables behind the rack. Learned early that behind every broken system is a real person's problem.",
        p2: "Worked in L2 support for years, where I discovered most 'technical problems' are just processes nobody automated with a script yet. I apply that mindset to Python automation and AI integration today.",
        p3: "Fully transitioning to software development. I prefer simple code that works today over perfect architecture tomorrow. Seeking my first junior developer role — remote or Cascavel, PR.",
        tags: [
          "Linux in daily work",
          "Python automation",
          "AI integration",
          "Systems that don't break on Sunday",
        ],
        timeline: [
          {
            year: "2020 - 2025",
            title: "Technical Support and Infrastructure",
            desc: "L2 support, networking, Linux servers and hardware. Learned to find root causes and document solutions — skills I carry into development.",
            detail: "Digital Informática / FaturÁgil — Cascavel, PR",
          },
          {
            year: "2024 - 2026",
            title: "BSc in Software Engineering",
            desc: "Degree in progress at FAG, focused on web development, REST APIs, databases and software engineering practices.",
            detail: "Centro Universitário FAG — Cascavel, PR",
          },
        ],
      },
      experience: {
        label: "Experience",
        heading: "Professional experience",
        intro: "Before looking for my first developer role, I worked in technical support, infrastructure and automation. That background helps me understand the end user, not just the code.",
        list: [
          {
            period: "Mar 2026 — present",
            role: "Junior Support Analyst",
            company: "FaturÁgil",
            summary:
              "L2 support for a fiscal SaaS platform. Resolving tickets involving NFS-e, digital certificates and municipal API integration.",
            bullets: [
              "Handle an average of 8 tickets/day involving fiscal issuance, tax codes and technical questions.",
              "Generate, update and install A1/A3 digital certificates in Linux environments.",
              "Document recurring bugs and report improvements to the development team.",
            ],
          },
          {
            period: "Mar 2025 — Feb 2026",
            role: "Electronics and Industrial Automation Technician",
            company: "Maguinho Sensores",
            summary:
              "Assembly and maintenance of electronic modules and sensors for agricultural machinery.",
            bullets: [
              "Helped reduce industrial downtime by 25% through field maintenance and diagnostics.",
              "Integrated Arduino/ESP32 sensors, wiring, soldering and electrical harnesses.",
              "Worked directly with customers to understand problems in real operating environments.",
            ],
          },
          {
            period: "Jan 2020 — Feb 2025",
            role: "IT Technician — Support, Networking and Hardware",
            company: "Digital Informática",
            summary:
              "On-site support for homes and companies. Networks, hardware, Linux and digital certificates.",
            bullets: [
              "Configured LAN/WAN, VPN, Mikrotik and Ubiquiti networks.",
              "Maintained computers and notebooks, installed drivers and tokens.",
              "Fiber optic infrastructure: cabling, connectorization and fusion splicing.",
            ],
          },
        ],
      },
      projects: {
        label: "Projects",
        heading: "Projects",
        list: [
          {
            title: "Teaching Mastery",
            desc: "Software engineering capstone project built as a team. I designed the teacher tracking flow and implemented the main screens using React + Zustand integrated with Supabase. The key step was defining the data structure with the team before writing code — most bugs came from poorly modeled data.",
            stack: ["React", "Vite", "Zustand", "Node.js", "Express", "Supabase"],
            status: "Private",
            link: "https://projeto-maestria-vercel.vercel.app",
            image: "/screenshot-maestria.png",
          },
          {
            title: "Wedding Website",
            desc: "Built as a gift for a couple. Priority was fast mobile loading, clean presentation and zero maintenance. Built with Next.js, live since the wedding and never needed changes.",
            stack: ["Next.js", "Vercel", "Framer Motion"],
            status: "Published",
            link: "https://casamento-ten-rho.vercel.app",
            image: "/screenshot-casamento.png",
          },
          {
            title: "Linux Mouse GUI",
            desc: "Solved a personal problem: my Redragon mouse on Linux/X11 needed terminal commands to adjust DPI and buttons. Built a simple GUI with HTML/JS calling Python scripts, wrote a README, and published it on GitHub.",
            stack: ["JavaScript", "Python", "HTML", "CSS", "Linux"],
            status: "Open source",
            link: "https://github.com/JeffersonTeles",
            image: "/screenshot-x11.png",
          },
        ],
      },
      skills: {
        label: "Skills",
        heading: "Technologies",
      },
      certifications: {
        label: "Education",
        heading: "Academic background",
        course: "BSc in Software Engineering",
        institution: "Centro Universitário FAG — Cascavel/PR",
        type: "Undergraduate",
        year: "Expected graduation: Nov/2026",
        description:
          "Degree focused on web development, REST APIs, databases and software engineering practices. Combining studies with hands-on support experience and fullstack projects.",
      },
      contact: {
        label: "Contact",
        heading: "Let's talk",
        description:
          "I'm transitioning from support to development and looking for my first opportunity as a developer. Available immediately, prefer remote or Cascavel, PR.",
        formNote: "Send a message or contact me directly via email.",
        location: "Cascavel, Brazil",
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
