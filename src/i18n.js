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
        role: "Engenheiro de Software // AI Builder",
        title1: "CRIANDO",
        title2: "SISTEMAS",
        title3: "INTELIGENTES.",
        description:
          "Especialista em construir produtos digitais escaláveis através de IA, automação e arquiteturas frontend de alto nível.",
        descriptionHighlight: "produtos digitais escaláveis",
        btnWorks: "Projetos Selecionados",
        btnResume: "Currículo / CV",
      },
      about: {
        label: "> quem_sou_eu",
        heading1: "Um construtor movido pela ",
        heading2: "curiosidade",
        heading3: " e ",
        heading4: "precisão técnica.",
        p1: "Iniciei no hardware, dominando ",
        p1Highlight: "redes e servidores Linux",
        p1End:
          ". Essa base sólida me deu a disciplina necessária para entender como os sistemas funcionam do nível mais baixo até a interface.",
        p2: "Como ",
        p2Highlight: "Analista de Suporte",
        p2End:
          ", aprendi a diagnosticar dores reais de usuários e a importância de sistemas estáveis. Hoje, canalizo essa experiência para o desenvolvimento de software de alta performance.",
        p3: "Meu foco é a interseção entre ",
        p3Highlight: "IA, Automação e Design Moderno",
        p3End:
          ". Construo ferramentas que não apenas funcionam, mas resolvem problemas estratégicos com elegância.",
        tags: [
          "Autonomia",
          "Impacto Real",
          "Aprendizado Contínuo",
          "Open Source",
        ],
        timeline: [
          {
            year: "2020",
            title: "Origens na Infraestrutura",
            desc: "Prática com redes, administração Linux e otimização de hardware.",
          },
          {
            year: "2023",
            title: "Suporte Estratégico",
            desc: "Analista de Suporte na FaturÁgil. Domínio de diagnósticos e resolução de problemas complexos.",
          },
          {
            year: "2024",
            title: "Construção de Produtos",
            desc: "Desenvolvimento de SaaS (Caixa Viva), ferramentas de segurança (Escudo) e automações inteligentes.",
          },
          {
            year: "2026",
            title: "Engenharia de Software",
            desc: "Buscando excelência acadêmica e profissional. A era do construtor.",
          },
        ],
      },
      projects: {
        label: "01 / Trabalhos Selecionados",
        heading1: "Arquitetando",
        heading2: "Experiência.",
        stack: "Stack",
        challenge: "Desafio Central",
        launchApp: "Launch App",
        privateAccess: "Acesso Privado",
        list: [
          {
            title: "Caixa Viva",
            longDesc:
              "Plataforma financeira estratégica para microempreendedores. Soluciona a complexidade de projeção de caixa e gestão de faturamento com uma interface minimalista e processamento de dados em tempo real.",
            technicalDeepDive:
              "Implementação de WebSockets para sync real-time e arquitetura de dados otimizada para evitar re-renders no React.",
            codeSnippet:
              "export const useFinanceSync = () => {\n  useEffect(() => {\n    const channel = supabase.channel('finance')\n      .on('postgres_changes', { event: '*', schema: 'public' }, \n      payload => updateState(payload))\n      .subscribe();\n    return () => supabase.removeChannel(channel);\n  }, []);\n};",
            codeLanguage: "typescript",
            stack: ["Next.js", "Supabase", "Tailwind", "TypeScript"],
            challenge:
              "Arquitetura de dados real-time e UX de alta performance para inserção de dados.",
            status: "Beta",
            statusColor: "text-white/40 border-white/10",
            link: "#",
            image:
              "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&auto=format&fit=crop&q=80",
          },
          {
            title: "Escudo",
            longDesc:
              "Sistema avançado de detecção de fraudes em mídia digital. Utiliza inteligência artificial para identificar manipulações e garantir a integridade de ativos digitais no mercado de segurança brasileiro.",
            technicalDeepDive:
              "Otimização de processamento assíncrono usando filas BullMQ e Workers em Node.js para lidar com alta carga de imagens.",
            codeSnippet:
              "const processShieldQueue = async (job) => {\n  const results = await aiModel.analyze(job.data.image);\n  await db.logs.create({ data: { ...results, jobId: job.id } });\n  return results;\n};",
            codeLanguage: "javascript",
            stack: ["Next.js", "Python", "IA APIs", "Supabase"],
            challenge:
              "Otimização de latência no processamento de imagens via IA.",
            status: "Arquitetura",
            statusColor: "text-white/40 border-white/10",
            link: "#",
            image:
              "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=900&auto=format&fit=crop&q=80",
          },
          {
            title: "Bot Afiliados ML",
            longDesc:
              "Inteligência comercial automatizada para o Mercado Livre. Monitora oportunidades em tempo real e distribui insights estratégicos via WhatsApp com base em algoritmos de ROI.",
            technicalDeepDive:
              "Sistema de bypass de Rate Limit usando proxies rotativas e processamento assíncrono com Puppeteer Stealth.",
            codeSnippet:
              "const scrapeOpportunity = async (url) => {\n  const browser = await puppeteer.launch(stealthConfig);\n  const page = await browser.newPage();\n  await useProxy(page, proxyList.getRandom());\n  return await parseData(page, url);\n};",
            codeLanguage: "javascript",
            stack: ["Node.js", "Puppeteer", "WhatsApp API", "SQLite"],
            challenge: "Bypass de restrições de escala e scraping inteligente.",
            status: "Operacional",
            statusColor: "text-white/40 border-white/10",
            link: "#",
            image:
              "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&auto=format&fit=crop&q=80",
          },
          {
            title: "Casamento",
            longDesc:
              "Ecosystem digital premium para gestão de eventos. Integra RSVP, lista de presentes e logística em uma experiência fluida e sofisticada para usuários finais.",
            technicalDeepDive:
              "Integração complexa com gateways de pagamento e sistema de cache distribuído para alta disponibilidade durante picos de acesso.",
            codeSnippet:
              "export const validateRSVP = (code) => {\n  const hash = generateSecurityToken(code);\n  return api.post('/rsvp/validate', { hash });\n};",
            codeLanguage: "javascript",
            stack: ["Next.js", "Vercel", "Framer Motion"],
            challenge:
              "Integração de fluxos de pagamento e UX acessível de alto padrão.",
            status: "Produção",
            statusColor: "text-white/40 border-white/10",
            link: "https://casamento-ten-rho.vercel.app",
            image:
              "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=900&auto=format&fit=crop&q=80",
          },
        ],
      },
      services: {
        label: "02 / Expertise",
        heading1: "Capacidades",
        heading2: "Digitais.",
        list: [
          {
            title: "Arquitetura Frontend",
            desc: "Criação de interfaces complexas e sistemas de design escaláveis com foco em performance e experiência do usuário.",
          },
          {
            title: "Sistemas Inteligentes",
            desc: "Integração de modelos de IA e automações de processos para otimizar fluxos de trabalho e gerar inteligência de dados.",
          },
          {
            title: "Infraestrutura Moderna",
            desc: "Desenvolvimento de backends robustos e arquiteturas cloud-native com foco em segurança e alta disponibilidade.",
          },
        ],
      },
      skills: {
        label: "03 / Stack",
        heading: "Ferramentas de Solução.",
        categories: {
          performance: "Sistemas de Alta Performance",
          infrastructure: "Infraestrutura & Escala",
          intelligence: "Inteligência & Automação",
        },
      },
      lab: {
        label: "04 / Lab",
        heading: "Espaço Experimental.",
        tagline: "Explorando as fronteiras do código e da interação.",
        desc: "Protótipos e experimentos técnicos criados para testar novas tecnologias e conceitos de design.",
        items: {
          neural: {
            cat: "Interface",
            title: "Neural Sync",
            desc: "Simulação de densidade de rede neural interativa para visualização de dados.",
          },
          autoscale: {
            cat: "Infraestrutura",
            title: "Auto-Scale Sync",
            desc: "Estudo de caso sobre sincronização de estados em clusters distribuídos.",
          },
          voice: {
            cat: "IA",
            title: "Voice Command",
            desc: "Interface de controle via processamento de linguagem natural e voz.",
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
        role: "Software Engineer // AI Builder",
        title1: "CRAFTING",
        title2: "INTELLIGENT",
        title3: "SYSTEMS.",
        description:
          "Specialist in building scalable digital products through AI, automation, and high-level frontend architectures.",
        descriptionHighlight: "scalable digital products",
        btnWorks: "Selected Works",
        btnResume: "Resume / CV",
      },
      about: {
        label: "> whoami",
        heading1: "A builder driven by ",
        heading2: "curiosity",
        heading3: " and technical ",
        heading4: "precision.",
        p1: "Started in hardware, mastering ",
        p1Highlight: "networking and Linux servers",
        p1End:
          ". This solid foundation gave me the discipline needed to understand how systems work from the lowest level to the interface.",
        p2: "As a ",
        p2Highlight: "Support Analyst",
        p2End:
          ", I learned to diagnose real user pain points and the importance of stable systems. Today, I channel this experience into high-performance software development.",
        p3: "My focus is the intersection of ",
        p3Highlight: "AI, Automation, and Modern Design",
        p3End:
          ". I build tools that not only work but elegantly solve strategic problems.",
        tags: ["Autonomy", "Real Impact", "Continuous Learning", "Open Source"],
        timeline: [
          {
            year: "2020",
            title: "Infrastructure Origins",
            desc: "Hands-on with networking, Linux administration, and hardware optimization.",
          },
          {
            year: "2023",
            title: "Strategic Support",
            desc: "Support Analyst at FaturÁgil. Mastering diagnostics and complex problem-solving.",
          },
          {
            year: "2024",
            title: "Product Building",
            desc: "Developing SaaS (Caixa Viva), security tools (Escudo), and intelligent automations.",
          },
          {
            year: "2026",
            title: "Software Engineering",
            desc: "Pursuing academic and professional excellence. The builder era.",
          },
        ],
      },
      projects: {
        label: "01 / Selected Works",
        heading1: "Architecting",
        heading2: "Experience.",
        stack: "Stack",
        challenge: "Core Challenge",
        launchApp: "Launch App",
        privateAccess: "Private Access",
        list: [
          {
            title: "Caixa Viva",
            longDesc:
              "Strategic financial platform for micro-entrepreneurs. Solves the complexity of cash flow projection and billing management with a minimalist interface and real-time data processing.",
            technicalDeepDive:
              "Implemented WebSockets for real-time sync and optimized data architecture to prevent React re-renders.",
            codeSnippet:
              "export const useFinanceSync = () => {\n  useEffect(() => {\n    const channel = supabase.channel('finance')\n      .on('postgres_changes', { event: '*', schema: 'public' }, \n      payload => updateState(payload))\n      .subscribe();\n    return () => supabase.removeChannel(channel);\n  }, []);\n};",
            codeLanguage: "typescript",
            stack: ["Next.js", "Supabase", "Tailwind", "TypeScript"],
            challenge:
              "Real-time data architecture and high-performance UX for data entry.",
            status: "Beta",
            statusColor: "text-white/40 border-white/10",
            link: "#",
            image:
              "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&auto=format&fit=crop&q=80",
          },
          {
            title: "Escudo",
            longDesc:
              "Advanced digital media fraud detection system. Uses AI to identify manipulations and ensure the integrity of digital assets in the security market.",
            technicalDeepDive:
              "Optimized async processing using BullMQ and Node.js Workers to handle high image loads.",
            codeSnippet:
              "const processShieldQueue = async (job) => {\n  const results = await aiModel.analyze(job.data.image);\n  await db.logs.create({ data: { ...results, jobId: job.id } });\n  return results;\n};",
            codeLanguage: "javascript",
            stack: ["Next.js", "Python", "AI APIs", "Supabase"],
            challenge: "Latency optimization in AI image processing.",
            status: "Arch",
            statusColor: "text-white/40 border-white/10",
            link: "#",
            image:
              "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=900&auto=format&fit=crop&q=80",
          },
          {
            title: "Bot Afiliados ML",
            longDesc:
              "Automated business intelligence for Mercado Livre. Monitors opportunities in real-time and distributes strategic insights via WhatsApp based on ROI algorithms.",
            technicalDeepDive:
              "Rate Limit bypass system using rotating proxies and async processing with Puppeteer Stealth.",
            codeSnippet:
              "const scrapeOpportunity = async (url) => {\n  const browser = await puppeteer.launch(stealthConfig);\n  const page = await browser.newPage();\n  await useProxy(page, proxyList.getRandom());\n  return await parseData(page, url);\n};",
            codeLanguage: "javascript",
            stack: ["Node.js", "Puppeteer", "WhatsApp API", "SQLite"],
            challenge: "Bypassing scale restrictions and intelligent scraping.",
            status: "Operational",
            statusColor: "text-white/40 border-white/10",
            link: "#",
            image:
              "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&auto=format&fit=crop&q=80",
          },
          {
            title: "Casamento",
            longDesc:
              "Premium digital ecosystem for event management. Integrates RSVP, gift lists, and logistics into a fluid and sophisticated experience for end users.",
            technicalDeepDive:
              "Complex integration with payment gateways and distributed cache system for high availability during traffic peaks.",
            codeSnippet:
              "export const validateRSVP = (code) => {\n  const hash = generateSecurityToken(code);\n  return api.post('/rsvp/validate', { hash });\n};",
            codeLanguage: "javascript",
            stack: ["Next.js", "Vercel", "Framer Motion"],
            challenge:
              "Integration of payment flows and high-standard accessible UX.",
            status: "Live",
            statusColor: "text-white/40 border-white/10",
            link: "https://casamento-ten-rho.vercel.app",
            image:
              "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=900&auto=format&fit=crop&q=80",
          },
        ],
      },
      services: {
        label: "02 / Expertise",
        heading1: "Digital",
        heading2: "Capabilities.",
        list: [
          {
            title: "Frontend Architecture",
            desc: "Crafting complex interfaces and scalable design systems focusing on performance and user experience.",
          },
          {
            title: "Intelligent Systems",
            desc: "Integrating AI models and process automation to optimize workflows and generate data intelligence.",
          },
          {
            title: "Modern Infrastructure",
            desc: "Developing robust backends and cloud-native architectures focusing on security and high availability.",
          },
        ],
      },
      skills: {
        label: "03 / Stack",
        heading: "Solution Tools.",
        categories: {
          performance: "High Performance Systems",
          infrastructure: "Infrastructure & Scale",
          intelligence: "Intelligence & Automation",
        },
      },
      lab: {
        label: "04 / Lab",
        heading: "Experimental Space.",
        tagline: "Exploring the boundaries of code and interaction.",
        desc: "Prototypes and technical experiments created to test new technologies and design concepts.",
        items: {
          neural: {
            cat: "Interface",
            title: "Neural Sync",
            desc: "Interactive neural network density simulation for data visualization.",
          },
          autoscale: {
            cat: "Infrastructure",
            title: "Auto-Scale Sync",
            desc: "Case study on state synchronization in distributed clusters.",
          },
          voice: {
            cat: "AI",
            title: "Voice Command",
            desc: "Control interface via natural language processing and voice.",
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
