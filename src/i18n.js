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
            title: "Maestria Docente",
            longDesc:
              "Plataforma SaaS institucional para desenvolvimento docente. Trilhas formativas, submissão de evidências, validação por operadores e dashboards em tempo real para coordenação acadêmica da FAG.",
            technicalDeepDive:
              "Backend Node.js + Supabase com autenticação JWT, RLS por perfil, upload assíncrono de evidências via signed URLs e WebSocket para notificações em tempo real.",
            codeSnippet:
              "const token = jwt.sign(\n  { userId, email, role },\n  process.env.JWT_SECRET_KEY,\n  { expiresIn: '1h' }\n);",
            codeLanguage: "javascript",
            stack: ["React", "Node.js", "Supabase", "Express", "Socket.io", "Tailwind"],
            challenge:
              "Arquitetura multi-perfil (professor/operador) com fluxo de validação de evidências e progresso de trilhas em tempo real.",
            status: "Produção",
            statusColor: "text-emerald-400/60 border-emerald-400/20",
            link: "https://projeto-maestria-vercel.vercel.app",
            image:
              "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=900&auto=format&fit=crop&q=80",
            metrics: [
              { label: "Docentes ativos", value: "30+" },
              { label: "Redução de burocracia", value: "60%" },
              { label: "Módulos funcionais", value: "8" },
            ],
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
            metrics: [
              { label: "Convidados gerenciados", value: "200+" },
              { label: "Deploy", value: "Vercel" },
              { label: "Uptime evento", value: "100%" },
            ],
          },
          {
            title: "Bot de Vagas",
            longDesc:
              "Automação inteligente que monitora portais de emprego (LinkedIn, Catho, Indeed) e aplica automaticamente em vagas filtradas por critérios customizáveis. Integrado com notificações via WhatsApp.",
            technicalDeepDive:
              "Selenium + Playwright para scraping dinâmico, fila de tarefas assíncrona e sistema de scoring de vagas por palavras-chave e fit de perfil.",
            codeSnippet:
              "async def apply_to_job(driver, job_url, profile):\n    score = calculate_fit_score(job_url, profile)\n    if score >= THRESHOLD:\n        await fill_application(driver, profile)",
            codeLanguage: "python",
            stack: ["Python", "Selenium", "Playwright", "WhatsApp API", "PostgreSQL"],
            challenge:
              "Contornar detecção de bot em portais modernos mantendo alta taxa de sucesso nas candidaturas.",
            status: "Produção",
            statusColor: "text-blue-400/60 border-blue-400/20",
            link: "#",
            image:
              "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=900&auto=format&fit=crop&q=80",
            metrics: [
              { label: "Candidaturas/dia", value: "50+" },
              { label: "Portais integrados", value: "3" },
              { label: "Tempo economizado", value: "4h/dia" },
            ],
          },
          {
            title: "Afiliado ML Bot",
            longDesc:
              "Sistema de automação para afiliados do Mercado Livre. Monitora produtos, variações de preço e oportunidades de arbitragem, gerando relatórios e disparando alertas em tempo real.",
            technicalDeepDive:
              "Web scraping com rate limiting inteligente, cache de preços e motor de regras para identificar oportunidades de margem acima do threshold definido.",
            codeSnippet:
              "const opportunity = products\n  .filter(p => p.margin >= MIN_MARGIN)\n  .sort((a, b) => b.margin - a.margin)[0];",
            codeLanguage: "javascript",
            stack: ["Node.js", "Puppeteer", "Redis", "Telegram API"],
            challenge:
              "Monitorar centenas de produtos em tempo real respeitando rate limits da plataforma.",
            status: "Produção",
            statusColor: "text-amber-400/60 border-amber-400/20",
            link: "#",
            image:
              "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&auto=format&fit=crop&q=80",
            metrics: [
              { label: "Produtos monitorados", value: "500+" },
              { label: "Alertas/semana", value: "120+" },
              { label: "ROI médio identificado", value: "23%" },
            ],
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
            title: "Maestria Docente",
            longDesc:
              "Institutional SaaS platform for teacher development. Formative tracks, evidence submission, operator validation, and real-time dashboards for academic coordination.",
            technicalDeepDive:
              "Node.js + Supabase backend with JWT auth, profile-based RLS, async evidence upload via signed URLs and WebSocket for real-time notifications.",
            codeSnippet:
              "const token = jwt.sign(\n  { userId, email, role },\n  process.env.JWT_SECRET_KEY,\n  { expiresIn: '1h' }\n);",
            codeLanguage: "javascript",
            stack: ["React", "Node.js", "Supabase", "Express", "Socket.io", "Tailwind"],
            challenge:
              "Multi-profile architecture (teacher/operator) with evidence validation flow and real-time track progress.",
            status: "Live",
            statusColor: "text-emerald-400/60 border-emerald-400/20",
            link: "https://projeto-maestria-vercel.vercel.app",
            image:
              "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=900&auto=format&fit=crop&q=80",
            metrics: [
              { label: "Active teachers", value: "30+" },
              { label: "Bureaucracy reduction", value: "60%" },
              { label: "Functional modules", value: "8" },
            ],
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
            metrics: [
              { label: "Managed guests", value: "200+" },
              { label: "Deploy", value: "Vercel" },
              { label: "Event uptime", value: "100%" },
            ],
          },
          {
            title: "Job Application Bot",
            longDesc:
              "Intelligent automation that monitors job boards (LinkedIn, Catho, Indeed) and automatically applies to filtered positions using customizable criteria. Integrated with WhatsApp notifications.",
            technicalDeepDive:
              "Selenium + Playwright for dynamic scraping, async task queue, and job scoring system by keywords and profile fit.",
            codeSnippet:
              "async def apply_to_job(driver, job_url, profile):\n    score = calculate_fit_score(job_url, profile)\n    if score >= THRESHOLD:\n        await fill_application(driver, profile)",
            codeLanguage: "python",
            stack: ["Python", "Selenium", "Playwright", "WhatsApp API", "PostgreSQL"],
            challenge:
              "Bypass bot detection on modern portals while maintaining a high application success rate.",
            status: "Live",
            statusColor: "text-blue-400/60 border-blue-400/20",
            link: "#",
            image:
              "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=900&auto=format&fit=crop&q=80",
            metrics: [
              { label: "Applications/day", value: "50+" },
              { label: "Integrated portals", value: "3" },
              { label: "Time saved", value: "4h/day" },
            ],
          },
          {
            title: "Affiliate ML Bot",
            longDesc:
              "Automation system for Mercado Livre affiliates. Monitors products, price variations and arbitrage opportunities, generating reports and firing real-time alerts.",
            technicalDeepDive:
              "Web scraping with smart rate limiting, price cache, and rules engine to identify margin opportunities above a defined threshold.",
            codeSnippet:
              "const opportunity = products\n  .filter(p => p.margin >= MIN_MARGIN)\n  .sort((a, b) => b.margin - a.margin)[0];",
            codeLanguage: "javascript",
            stack: ["Node.js", "Puppeteer", "Redis", "Telegram API"],
            challenge:
              "Monitor hundreds of products in real-time while respecting platform rate limits.",
            status: "Live",
            statusColor: "text-amber-400/60 border-amber-400/20",
            link: "#",
            image:
              "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&auto=format&fit=crop&q=80",
            metrics: [
              { label: "Products monitored", value: "500+" },
              { label: "Alerts/week", value: "120+" },
              { label: "Avg identified ROI", value: "23%" },
            ],
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
