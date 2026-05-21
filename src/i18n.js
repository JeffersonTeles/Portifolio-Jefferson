import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  pt: {
    translation: {
      nav: {
        home: "Home",
        about: "Sobre",
        projects: "Projetos",
        blog: "Blog",
        lab: "Lab",
        contact: "Contato"
      },
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
        p1: "Minha trajetória na tecnologia começou com as mãos na massa: redes, Linux e hardware. Essa vivência me ensinou a pensar criticamente sobre como os sistemas operam.",
        p2: "Como Analista de Suporte Júnior na FaturÁgil, refinei minha capacidade de diagnóstico e resolução de problemas sob pressão.",
        p3: "Atualmente, curso Engenharia de Software na FAG e foco em construir soluções de alto impacto usando IA e Web.",
        values: ["Autonomia", "Impacto real", "Aprendizado contínuo"]
      },
      skills: {
        title: "Skills",
        frontend: "Frontend",
        backend: "Backend",
        devops: "DevOps & Ferramentas",
        automation: "IA & Automação",
        levels: {
          proficient: "Proficiente",
          intermediate: "Intermediário",
          basic: "Básico"
        }
      },
      projects: {
        title: "Projetos Selecionados",
        tagline: "Precisão técnica em cada pixel.",
        detailsTitle: "Detalhes do Sistema",
        overview: "Visão Geral",
        challenge: "O Desafio Técnico",
        btnLive: "Ver Projeto Real",
        btnRepo: "Acessar Repositório",
        status: {
          dev: "Em dev",
          prod: "Produção",
          done: "Concluído"
        },
        items: {
          caixaviva: {
            name: "Caixa Viva",
            desc: "SaaS financeiro para MEIs focado em check-in de fluxo de caixa.",
            longDesc: "Plataforma robusta para microempreendedores gerenciarem suas finanças diárias. O foco principal é a velocidade de inserção de dados e a visualização clara do saldo projetado.",
            challenge: "Garantir a persistência de dados em tempo real com baixa latência usando Supabase Realtime."
          },
          escudo: {
            name: "Escudo",
            desc: "Plataforma de detecção de deepfakes e conteúdo IA para o mercado BR.",
            longDesc: "Ferramenta de segurança digital que utiliza modelos de IA para analisar e identificar mídias manipuladas, focando em combater a desinformação no Brasil.",
            challenge: "Integração eficiente entre o frontend React e os modelos de processamento de imagem pesados no backend."
          },
          botml: {
            name: "Bot Afiliados ML",
            desc: "Ranqueia ofertas ML/Shopee via IA no WhatsApp automaticamente.",
            longDesc: "Automação inteligente que monitora APIs de grandes marketplaces, ranqueia as melhores ofertas e as envia formatadas para grupos de WhatsApp.",
            challenge: "Contornar bloqueios de bots e garantir o processamento assíncrono de milhares de ofertas por hora."
          },
          casamento: {
            name: "Site de Casamento",
            desc: "Plataforma de RSVP + lista de presentes com integração de pagamentos.",
            longDesc: "Um projeto pessoal que se tornou um produto real. Oferece confirmação de presença, lista de presentes integrada e painel administrativo para os noivos.",
            challenge: "Implementar um sistema de gerenciamento de estado complexo para a lista de presentes dinâmica."
          },
          attackshark: {
            name: "Attack Shark X11",
            desc: "Driver e configurador de mouse gamer no Linux via WebHID.",
            longDesc: "Utilitário técnico que permite a configuração de botões e DPI de mouses chineses no Linux, utilizando a API WebHID do navegador.",
            challenge: "Comunicação direta com hardware via pacotes HID crus em sistemas Linux."
          }
        }
      },
      lab: {
        title: "R&D Lab",
        tagline: "Experimentos Técnicos",
        desc: "Onde a curiosidade encontra a engenharia pura.",
        items: {
          neural: {
            title: "Neural Mesh Visualizer",
            cat: "Generative Art",
            desc: "Algoritmos de crescimento orgânico e visualização de pesos neuronais em 3D."
          },
          autoscale: {
            title: "Auto-Scale API Logic",
            cat: "Architecture",
            desc: "Middleware para balanceamento de carga preditivo baseado em tráfego histórico."
          },
          voice: {
            title: "Voice-to-Automation",
            cat: "IA / Interface",
            desc: "Interface de comando de voz para execução de scripts complexos de automação."
          }
        }
      },
      contact: {
        title: "Contato",
        headline: "Vamos construir algo juntos.",
        desc: "Estou ativamente buscando minha primeira oportunidade como desenvolvedor júnior. Se você busca alguém com sede de aprendizado e base sólida, vamos conversar.",
        btnMail: "Abrir E-mail",
        sent: "Mensagem Enviada!",
        thanks: "Obrigado pelo contato, Jefferson. Responderei em breve.",
        form: {
          name: "Nome Completo",
          email: "Email Corporativo",
          msg: "Mensagem",
          btn: "Enviar Mensagem",
          sending: "Processando..."
        }
      },
      footer: {
        location: "Desenvolvedor em Construção • Cascavel/PR"
      }
    }
  },
  en: {
    translation: {
      nav: {
        home: "Home",
        about: "About",
        projects: "Projects",
        blog: "Blog",
        lab: "Lab",
        contact: "Contact"
      },
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
        p3: "Currently, I am studying Software Engineering at FAG, focusing on building high-impact IA and Web solutions.",
        values: ["Autonomy", "Real impact", "Continuous learning"]
      },
      skills: {
        title: "Skills",
        frontend: "Frontend",
        backend: "Backend",
        devops: "DevOps & Tools",
        automation: "AI & Automation",
        levels: {
          proficient: "Proficient",
          intermediate: "Intermediate",
          basic: "Basic"
        }
      },
      projects: {
        title: "Selected Works",
        tagline: "Technical precision in every pixel.",
        detailsTitle: "System Details",
        overview: "Overview",
        challenge: "Technical Challenge",
        btnLive: "Live Demo",
        btnRepo: "Source Code",
        status: {
          dev: "In progress",
          prod: "Production",
          done: "Completed"
        },
        items: {
          caixaviva: {
            name: "Caixa Viva",
            desc: "Financial SaaS for MEIs focused on cash flow check-in.",
            longDesc: "Robust platform for micro-entrepreneurs to manage their daily finances. Main focus is data entry speed and clear projected balance visualization.",
            challenge: "Garantir real-time data persistence with low latency using Supabase Realtime."
          },
          escudo: {
            name: "Escudo",
            desc: "Deepfake detection platform for the Brazilian market.",
            longDesc: "Digital security tool that uses AI models to analyze and identify manipulated media, focusing on fighting misinformation in Brazil.",
            challenge: "Efficient integration between React frontend and heavy image processing models on the backend."
          },
          botml: {
            name: "Bot Affiliates ML",
            desc: "Ranks ML/Shopee offers via AI on WhatsApp automatically.",
            longDesc: "Smart automation that monitors large marketplace APIs, ranks the best offers, and sends them formatted to WhatsApp groups.",
            challenge: "Bypassing bot blocks and ensuring asynchronous processing of thousands of offers per hour."
          },
          casamento: {
            name: "Wedding Site",
            desc: "RSVP platform + gift list with payment integration.",
            longDesc: "A personal project that became a real product. Offers presence confirmation, integrated gift list, and admin panel for the couple.",
            challenge: "Implementing a complex state management system for the dynamic gift list."
          },
          attackshark: {
            name: "Attack Shark X11",
            desc: "Gamer mouse driver and configurator for Linux via WebHID.",
            longDesc: "Technical utility that allows button and DPI configuration of Chinese mice on Linux, using the browser's WebHID API.",
            challenge: "Direct communication with hardware via raw HID packets on Linux systems."
          }
        }
      },
      lab: {
        title: "R&D Lab",
        tagline: "Technical Experiments",
        desc: "Where curiosity meets pure engineering.",
        items: {
          neural: {
            title: "Neural Mesh Visualizer",
            cat: "Generative Art",
            desc: "Organic growth algorithms and 3D neural weight visualization."
          },
          autoscale: {
            title: "Auto-Scale API Logic",
            cat: "Architecture",
            desc: "Middleware prototype for predictive load balancing based on historical traffic."
          },
          voice: {
            title: "Voice-to-Automation",
            cat: "AI / Interface",
            desc: "Voice command interface for executing complex automation scripts."
          }
        }
      },
      contact: {
        title: "Contact",
        headline: "Let's build something together.",
        desc: "I am actively seeking my first junior developer opportunity. If you seek someone with a hunger for learning and a solid base, let's talk.",
        btnMail: "Open Email",
        sent: "Message Sent!",
        thanks: "Thanks for reaching out, Jefferson. I will reply soon.",
        form: {
          name: "Full Name",
          email: "Work Email",
          msg: "Message",
          btn: "Send Message",
          sending: "Processing..."
        }
      },
      footer: {
        location: "Developer in Progress • Cascavel/PR"
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
