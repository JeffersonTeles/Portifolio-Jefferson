import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  pt: {
    translation: {
      nav: {
        about: 'Sobre',
        experience: 'Experiência',
        projects: 'Projetos',
        skills: 'Habilidades',
        contact: 'Contato',
        tooltips: {
          resume: 'Ver currículo completo',
          language: 'Mudar idioma',
        },
      },
      gooeyDemo: {
        heading: 'Navegação Gooey',
        description:
          'Clique nos itens: a pílula derrete para o próximo item com bolhas que explodem e convergem — efeito de filtro blur + contrast.',
        hint: 'Clique em um item para ver a transição',
      },
      scrollDemo: {
        title: 'Portfólio',
        hint: 'Role para expandir',
        overlayTitle: 'Do fundamento ao fim',
        overlayText:
          'O quadro abre conforme você rola e entrega o palco inteiro para a mídia — conteúdo sobreposto entra em cena no full bleed.',
        cta: 'Voltar ao início',
        afterLabel: 'Depois do quadro',
        afterHeading: 'Rolagem normal, como qualquer seção',
        afterText:
          'Este trecho vive depois do componente. Quando a expansão termina, a página volta a rolar de forma comum — sem interceptar o scroll nem prender o usuário.',
      },
      stackDemo: {
        title: 'Projetos',
        subtitle: 'Uma pilha que se abre conforme você rola — cada cartão é um trabalho real.',
        hint: 'ROLE PARA ESPALHAR',
        outro:
          'Quatro projetos, quatro cartões. No portfolio real, cada um linkaria para o seu case completo.',
      },
      hero: {
        title1: 'Jefferson Teles',
        role: 'Suporte técnico em evolução para desenvolvimento',
        subtitle:
          'Analista de Suporte N2 em sistema fiscal SaaS: analiso JSON/XML, homologo APIs de Prefeituras e gerencio certificados A1/A3 via terminal Linux. Cursando Engenharia de Software — disciplinas concluídas em Nov/2026, colação em Fev/2027. Construindo caminho para desenvolvimento e suporte especializado — aberto a remoto.',
        tagline:
          'Do atendimento ao código: entendo o problema, encontro a causa e construo a solução.',
        description:
          'Cascavel, Paraná · Suporte N2 · Linux · JSON/XML · APIs · JavaScript · Arduino',
        getInTouch: 'Fale comigo',
        openingEmail: 'Abrindo seu cliente de e-mail com a mensagem pronta…',
        btnWorks: 'Ver projetos',
        btnResume: 'Ver currículo',
        explore: 'Explorar',
        type1: 'Analista de Suporte N2',
        type2: 'Suporte que entende de código',
        type3: 'Engenharia de Software — FAG',
        type4: 'JavaScript · Linux · APIs',
        type5: 'Aberto a remoto',
      },
      about: {
        heading: 'Sobre mim',
        p1: 'Tudo começou no hardware: trocando peças e montando PCs. Depois rolou para rede e infraestrutura. Hoje é suporte N2 em sistema fiscal SaaS (FaturÁgil): JSON/XML, APIs de Prefeitura e certificados A1/A3 via Linux. Antes disso, atendimento técnico em redes e automação.',
        p2: 'O foco é resolver problemas reais. Montei sensores com Arduino/ESP32 em linha de produção, configurei redes com Mikrotik e Ubiquiti, e hoje construo as ferramentas que eu mesmo usaria. Engenharia de Software na FAG — disciplinas concluídas em Nov/2026, colação em Fev/2027.',
        p3: '',
        capabilities: [
          'Suporte N2 · JSON/XML · APIs · Certificados A1/A3',
          'Redes & Infra · LAN/WAN · Mikrotik · Ubiquiti · VPN · Fibra Ótica',
          'Hardware & IoT · Arduino · ESP32 · Sensores · Embarcados',
        ],
        tags: [
          'Linux no dia a dia',
          'Automação com scripts',
          'Integração de hardware',
          'Resolução de problemas reais',
        ],
        infoCard: [
          ['Localização', 'Cascavel, Paraná · Remoto ok'],
          ['Cargo atual', 'Analista de Suporte Júnior'],
          ['Formação', 'Eng. de Software — FAG'],
          ['Disciplinas', 'Conclusão Nov/2026'],
          ['Colação', 'Fev/2027'],
          ['Foco', 'Dev · Suporte especializado · Infra'],
        ],
        timeline: [
          {
            period: 'Jan 2020 — Fev 2025',
            role: 'Técnico de TI — Suporte, Redes e Hardware',
            company: 'Digital Informática, Cascavel, Paraná',
            summary:
              'Suporte presencial em residências e empresas, com diagnóstico, manutenção e conserto de computadores e notebooks. Configurei redes LAN/WAN, DNS, cabeamento estruturado, VPN e CFTV. Recuperação de acesso via CMD e scripts de automação de tarefas repetitivas. Instalação de certificados A1/A3 e tokens em Windows e Linux. Implantação de VPN, CFTV e infraestrutura de fibra ótica para clientes empresariais.',
          },
          {
            period: 'Mar 2025 — Fev 2026',
            role: 'Técnico em Eletrônica e Automação Industrial',
            company: 'Maguinho Sensores, Cascavel, Paraná',
            summary:
              'Montagem e manutenção de módulos eletrônicos para automação de máquinas agrícolas.',
            bullets: [
              'Diagnóstico de falhas em sistemas embarcados e equipamentos em campo, contribuindo para reduzir paradas operacionais',
              'Integração de sensores com Arduino/ESP32, fiação, solda e testes de funcionamento',
              'Atendimento técnico direto ao cliente, identificando problemas e propondo soluções para o ambiente agrícola',
            ],
          },
          {
            period: 'Mar 2026 — atual',
            role: 'Analista de Suporte Júnior',
            company: 'FaturÁgil',
            summary:
              'Atendo média de 8 tickets/dia em suporte N2 de sistema fiscal SaaS. Analiso JSON/XML para identificação de erros em integrações com APIs de Prefeituras. Gero e instalo certificados A1/A3 (.cer, .pem, .p12, .key) via terminal Linux. Documento bugs recorrentes e reporto ao time de desenvolvimento com contexto técnico.',
          },
        ],
      },
      experience: {
        label: 'Experiência',
        heading: 'Experiência profissional',
        intro:
          'Antes de buscar minha primeira vaga como desenvolvedor, passei por suporte técnico, infraestrutura, redes e automação industrial. Essa vivência me ajuda a entender o usuário final, não só o código.',
        list: [
          {
            period: 'Mar 2026 — atual',
            role: 'Analista de Suporte Júnior',
            company: 'FaturÁgil',
            summary:
              'Suporte N2 para sistema fiscal SaaS. Resolvo tickets envolvendo NFS-e, certificados digitais e integração de APIs municipais.',
            bullets: [
              'Atendo média de 8 tickets/dia em suporte N2 de sistema fiscal SaaS',
              'Analiso JSON/XML para identificação de erros em integrações com APIs de Prefeituras',
              'Gero e instalo certificados A1/A3 (.cer, .pem, .p12, .key) via terminal Linux',
              'Documento bugs recorrentes e reporto ao time de desenvolvimento com contexto técnico',
            ],
            badge: 'atual',
          },
          {
            period: 'Mar 2025 — Fev 2026',
            role: 'Técnico em Eletrônica e Automação Industrial',
            company: 'Maguinho Sensores, Cascavel, Paraná',
            summary:
              'Montagem e manutenção de módulos eletrônicos para automação de máquinas agrícolas.',
            bullets: [
              'Diagnóstico de falhas em sistemas embarcados e equipamentos em campo, contribuindo para reduzir paradas operacionais',
              'Integração de sensores com Arduino/ESP32, fiação, solda e testes de funcionamento',
              'Atendimento técnico direto ao cliente, identificando problemas e propondo soluções para o ambiente agrícola',
            ],
            badge: null,
          },
          {
            period: 'Jan 2020 — Fev 2025',
            role: 'Técnico de TI — Suporte, Redes e Hardware',
            company: 'Digital Informática, Cascavel, Paraná',
            summary: 'Atuação formal e autônoma ao longo do período.',
            bullets: [
              'Suporte presencial em residências e empresas, com diagnóstico, manutenção e conserto de computadores e notebooks',
              'Configuração de redes LAN/WAN, roteadores, IP fixo/dinâmico, DNS, cabeamento estruturado, VPN e CFTV',
              'Administração de redes wireless com Mikrotik e Ubiquiti para clientes residenciais e corporativos',
              'Instalação de certificados digitais A1/A3, tokens e drivers em ambientes Windows e Linux',
              'Infraestrutura de fibra ótica: passagem de cabos drop, conectorização e emendas por fusão',
            ],
            badge: null,
          },
        ],
      },
      projects: {
        label: 'Projetos',
        heading: 'Projetos',
        list: [
          {
            title: 'Maestria Docente — TCC de Engenharia de Software',
            desc: 'Desenvolvimento em equipe (TCC de Engenharia de Software) do sistema de gestão de trilhas de desenvolvimento docente, solicitado por coordenadora institucional. O sistema já está funcional, usável e atualmente em fase de testes pela instituição. Implementação com React, Zustand e Tailwind CSS, colaborando via Git/GitHub. O foco foi estruturar os dados de forma robusta para atender ao contexto acadêmico.',
            stack: ['React', 'Vite', 'Zustand', 'Node.js', 'Express', 'Supabase'],
            status: 'TCC (em fase de testes)',
            repo: null,
            link: 'https://projeto-maestria-vercel.vercel.app',
            linkLabel: 'Ver demo',
            image: '/screenshot-maestria.png',
          },
          {
            title: 'Interface Gráfica para Mouse X11 no Linux',
            desc: 'Desenvolvimento de GUI para configurar mouse X11 sem suporte nativo no Linux, eliminando dependência de comandos de terminal para o usuário final. Publicado no GitHub com README documentado.',
            stack: ['JavaScript', 'CSS', 'HTML', 'Python'],
            status: 'Open source',
            repo: 'https://github.com/JeffersonTeles/attack-shark-x11-configurator',
            link: null,
            linkLabel: 'Ver repositório',
            image: null,
          },
          {
            title: 'Site de Casamento de Alta Performance',
            desc: 'Desenvolvimento do próprio site de casamento focado em alta performance, design responsivo e arquitetura moderna (Mobile-first) com zero manutenção.',
            stack: ['Frontend', 'Performance', 'Web Vitals', 'Responsividade'],
            status: 'Projeto pessoal',
            repo: null,
            link: 'https://casamento-ten-rho.vercel.app',
            linkLabel: 'Ver site',
            image: '/screenshot-casamento.png',
          },
          {
            title: 'Telesseg — Landing Page',
            desc: 'Landing page desenvolvida para assessoria e segurança do trabalho, com foco em conversão e experiência do usuário.',
            stack: ['Frontend', 'Landing Page', 'Conversão', 'UX'],
            status: 'Projeto pessoal',
            repo: null,
            link: 'https://telesseg.com.br',
            linkLabel: 'Ver site',
            image: '/screenshot-telesseg.png',
          },
        ],
        viewDetails: 'Ver detalhes',
        viewProject: 'Ver projeto',
        sourceCode: 'Código fonte',
        features: 'Funcionalidades',
      },
      certifications: {
        label: 'Formação',
        heading: 'Formação acadêmica',
        course: 'Bacharelado em Engenharia de Software',
        institution: 'Centro Universitário FAG — Cascavel, Paraná',
        type: 'Graduação',
        year: 'Disciplinas concluídas: Nov/2026 · Colação: Fev/2027',
        description:
          'Curso focado em desenvolvimento web, APIs REST, banco de dados e engenharia de software. Conciliando a graduação com experiência prática em suporte N2 e projetos fullstack.',
      },
      skills: {
        label: 'Habilidades',
        heading: 'Habilidades',
        intro:
          'Sem inflar a lista: o que uso no trabalho e nos projetos está aqui, e o que ainda estou aprendendo também.',
        levels: {
          practical: 'Experiência prática — trabalho e projetos',
          learning: 'Em evolução — uso com apoio de IA',
          tools: 'Ferramentas do fluxo diário',
        },
        honestyNote:
          '// Prefiro lista curta e verdadeira a lista grande e vaga. O resto estou construindo.',
      },
      contact: {
        label: 'Contato',
        getInTouch: 'Fale comigo',
        heading: 'Contato',
        description:
          'Automatizei algo? Precisa de um site que funciona? Ou quer conversar sobre código. Estou disponível.',
        phoneLabel: 'WhatsApp',
        whatsapp: 'Falar no WhatsApp',
        location: 'Cascavel, Paraná · Brasil',
        remoteAvailability: 'Disponível para trabalho remoto',
        tooltips: {
          email: 'E-mail',
          linkedin: 'LinkedIn',
          github: 'GitHub',
          resume: 'Currículo',
          language: 'Idioma',
        },
      },
    },
  },
  en: {
    translation: {
      nav: {
        about: 'About',
        experience: 'Experience',
        projects: 'Projects',
        skills: 'Skills',
        contact: 'Contact',
        tooltips: {
          resume: 'View full resume',
          language: 'Switch language',
        },
      },
      gooeyDemo: {
        heading: 'Gooey Navigation',
        description:
          'Click the items: the pill melts to the next one while bubbles burst and converge — a blur + contrast filter effect.',
        hint: 'Click an item to see the transition',
      },
      scrollDemo: {
        title: 'Portfolio',
        hint: 'Scroll to expand',
        overlayTitle: 'Foundation to finish',
        overlayText:
          'The frame opens as you scroll and hands the whole stage to the media — overlay content arrives at full bleed.',
        cta: 'Back to home',
        afterLabel: 'After the frame',
        afterHeading: 'Normal scrolling, like any section',
        afterText:
          'This block lives after the component. Once the expansion completes, the page scrolls normally again — no scroll hijacking, no trapped user.',
      },
      stackDemo: {
        title: 'Projects',
        subtitle: 'A stack that fans out as you scroll — every card is real work.',
        hint: 'SCROLL TO SPREAD',
        outro:
          'Four projects, four cards. In the real portfolio each one would link to its full case study.',
      },
      hero: {
        title1: 'Jefferson Teles',
        role: 'Tech support evolving into development',
        subtitle:
          'Junior Support Analyst for a fiscal SaaS platform: I analyze JSON/XML, homologate City Hall APIs and manage A1/A3 certificates via Linux terminal. Studying Software Engineering — coursework done Nov/2026, graduation ceremony Feb/2027. Growing toward development and specialized support — open to remote.',
        tagline:
          'From support desk to code: I understand the problem, find the cause and build the fix.',
        description:
          'Cascavel, Paraná · Support N2 · Linux · JSON/XML · APIs · JavaScript · Arduino',
        getInTouch: 'Get in touch',
        openingEmail: 'Opening your email client with the message ready…',
        btnWorks: 'View projects',
        btnResume: 'View resume',
        explore: 'Explore',
        type1: 'Support Analyst N2',
        type2: 'Support that understands code',
        type3: 'Software Engineering — FAG',
        type4: 'JavaScript · Linux · APIs',
        type5: 'Open to remote',
      },
      about: {
        heading: 'About me',
        p1: 'I started with hardware — swapping parts, building computers. Then I ended up in networking and infrastructure. Now, I work in L2 support for fiscal SaaS systems (at FaturÁgil): analyzing JSON/XML, homologating City Hall APIs, configuring A1/A3 digital certificates via Linux terminal. In previous roles, I provided technical support to clients in networking and automation.',
        p2: "What keeps me productive is solving real problems. I built sensors with Arduino/ESP32 in a factory, configured networks with Mikrotik and Ubiquiti, and now I'm learning to build the tools I'd use myself. Software Engineering at FAG — coursework done Nov/2026, graduation ceremony Feb/2027.",
        p3: '',
        capabilities: [
          'L2 Support · JSON/XML · APIs · A1/A3 Certificates',
          'Networking & Infra · LAN/WAN · Mikrotik · VPN · Fiber Optic',
          'Hardware & IoT · Arduino · ESP32 · Sensors · Embedded',
        ],
        tags: [
          'Linux in daily work',
          'Script automation',
          'Hardware integration',
          'Real problem solving',
        ],
        infoCard: [
          ['Location', 'Cascavel, Paraná · Remote ok'],
          ['Current role', 'Junior Support Analyst'],
          ['Degree', 'Software Engineering — FAG'],
          ['Coursework', 'Done Nov/2026'],
          ['Ceremony', 'Feb/2027'],
          ['Focus', 'Dev · Specialized support · Infra'],
        ],
        timeline: [
          {
            period: 'Jan 2020 — Feb 2025',
            role: 'IT Technician — Support, Networking and Hardware',
            company: 'Digital Informática, Cascavel, Paraná',
            summary:
              'On-site support for homes and businesses, with diagnosis, maintenance and repair of computers and laptops. LAN/WAN network configuration, routers, static/dynamic IP, DNS, structured cabling, VPN and CCTV. System access recovery via CMD and repetitive task automation scripts. A1/A3 digital certificate and token installation on Windows and Linux. VPN, CCTV and fiber optic infrastructure deployment for enterprise clients.',
          },
          {
            period: 'Mar 2025 — Feb 2026',
            role: 'Electronics and Industrial Automation Technician',
            company: 'Maguinho Sensores, Cascavel, Paraná',
            summary:
              'Assembly and maintenance of electronic modules for agricultural machine automation.',
            bullets: [
              'Fault diagnosis in embedded systems and field equipment, contributing to reduce operational downtime',
              'Integration of Arduino/ESP32 sensors, wiring, soldering and functionality testing',
              'Direct technical customer support, identifying issues and proposing solutions for the agricultural environment',
            ],
          },
          {
            period: 'Mar 2026 — present',
            role: 'Junior Support Analyst',
            company: 'FaturÁgil',
            summary:
              'L2 support for a fiscal SaaS platform. Resolving tickets involving NFS-e, digital certificates and municipal API integration.',
            bullets: [
              'Handle an average of 8 tickets/day involving fiscal issuance, tax codes and technical questions.',
              'Generate, update and install A1/A3 digital certificates (.cer, .pem, .p12, .key) on Linux',
              'Document recurring bugs and report improvements to the development team.',
            ],
            badge: 'current',
          },
        ],
      },
      experience: {
        label: 'Experience',
        heading: 'Professional experience',
        intro:
          'Before looking for my first developer role, I worked in technical support, infrastructure, networking and industrial automation. That background helps me understand the end user, not just the code.',
        list: [
          {
            period: 'Mar 2026 — present',
            role: 'Junior Support Analyst',
            company: 'FaturÁgil',
            summary:
              'L2 support for a fiscal SaaS platform. Resolving tickets involving NFS-e, digital certificates and municipal API integration.',
            bullets: [
              'Handle an average of 8 tickets/day involving fiscal issuance, tax codes and technical questions.',
              'Generate, update and install A1/A3 digital certificates (.cer, .pem, .p12, .key) on Linux',
              'Document recurring bugs and report improvements to the development team.',
            ],
            badge: 'current',
          },
          {
            period: 'Mar 2025 — Feb 2026',
            role: 'Electronics and Industrial Automation Technician',
            company: 'Maguinho Sensores, Cascavel, Paraná',
            summary:
              'Assembly and maintenance of electronic modules for agricultural machine automation.',
            bullets: [
              'Helped reduce industrial downtime through field maintenance and diagnostics',
              'Integration of Arduino/ESP32 sensors, wiring, soldering and electrical harnesses',
              'Direct technical customer support, identifying issues and proposing solutions for the agricultural environment',
            ],
            badge: null,
          },
          {
            period: 'Jan 2020 — Feb 2025',
            role: 'IT Technician — Support, Networking and Hardware',
            company: 'Digital Informática, Cascavel, Paraná',
            summary: 'Formal and independent work throughout the period.',
            bullets: [
              'On-site support for homes and companies, with diagnosis, maintenance and repair of computers and notebooks',
              'LAN/WAN, DNS, structured cabling and wireless networks with Mikrotik/Ubiquiti',
              'System access recovery via CMD and repetitive task automation scripts',
              'A1/A3 digital certificate and token installation on Windows and Linux',
              'Fiber optic infrastructure: cabling, connectorization and fusion splicing',
            ],
            badge: null,
          },
        ],
      },
      projects: {
        label: 'Projects',
        heading: 'Projects',
        list: [
          {
            title: 'Teaching Mastery — Software Engineering Capstone (TCC)',
            desc: 'Team development (Software Engineering Capstone) of the teacher training track management system, requested by an institutional coordinator. The system is functional, usable, and currently undergoing testing by the institution. Built with React, Zustand, and Tailwind CSS, collaborating via Git/GitHub.',
            stack: ['React', 'Vite', 'Zustand', 'Node.js', 'Express', 'Supabase'],
            status: 'Capstone (testing phase)',
            repo: null,
            link: 'https://projeto-maestria-vercel.vercel.app',
            linkLabel: 'View demo',
            image: '/screenshot-maestria.png',
          },
          {
            title: 'Linux Mouse X11 GUI',
            desc: 'Development of a GUI for configuring X11 mouse without native Linux support, eliminating terminal command dependency for end users. Published on GitHub with documented README.',
            stack: ['JavaScript', 'CSS', 'HTML', 'Python'],
            status: 'Open source',
            repo: 'https://github.com/JeffersonTeles/attack-shark-x11-configurator',
            link: null,
            linkLabel: 'View repo',
            image: null,
          },
          {
            title: 'Wedding Website',
            desc: 'Development of own wedding website focused on high performance, responsive design, and modern architecture (Mobile-first) with zero maintenance.',
            stack: ['Frontend', 'Performance', 'Web Vitals', 'Responsiveness'],
            status: 'Published',
            repo: null,
            link: 'https://casamento-ten-rho.vercel.app',
            linkLabel: 'View site',
            image: '/screenshot-casamento.png',
          },
          {
            title: 'Telesseg — Landing Page',
            desc: 'Landing page developed for occupational health and safety consulting, focused on conversion and user experience.',
            stack: ['Frontend', 'Landing Page', 'Conversion', 'UX'],
            status: 'Personal project',
            repo: null,
            link: 'https://telesseg.com.br',
            linkLabel: 'View site',
            image: '/screenshot-telesseg.png',
          },
        ],
        viewDetails: 'View details',
        viewProject: 'View project',
        sourceCode: 'Source code',
        features: 'Features',
      },
      certifications: {
        label: 'Education',
        heading: 'Academic background',
        course: 'BSc in Software Engineering',
        institution: 'Centro Universitário FAG — Cascavel, Paraná',
        type: 'Undergraduate',
        year: 'Coursework completed: Nov/2026 · Ceremony: Feb/2027',
        description:
          'Degree focused on web development, REST APIs, databases and software engineering practices. Combining studies with hands-on support experience and fullstack projects.',
      },
      skills: {
        label: 'Skills',
        heading: 'Technologies',
        intro:
          'No inflated list: what I use at work and in projects is here — and so is what I am still learning.',
        levels: {
          practical: 'Hands-on — work and projects',
          learning: 'In progress — building with AI assistance',
          tools: 'Daily workflow tools',
        },
        honestyNote: '// I prefer a short true list over a big vague one. The rest, I am building.',
      },
      contact: {
        label: 'Contact',
        getInTouch: 'Get in touch',
        heading: 'Contact',
        description:
          "Automated something? Need a website that works? Or just want to talk code. I'm available.",
        phoneLabel: 'WhatsApp',
        whatsapp: 'Chat on WhatsApp',
        location: 'Cascavel, Paraná, Brazil',
        remoteAvailability: 'Available for remote work',
        tooltips: {
          email: 'Email',
          linkedin: 'LinkedIn',
          github: 'GitHub',
          resume: 'Resume',
          language: 'Language',
        },
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'pt',
  fallbackLng: 'pt',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
