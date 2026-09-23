import { Monitor, Server, Cloud, Zap, Terminal, Cpu, Shield } from 'lucide-react';

/**
 * Stack apresentada em três níveis de honestidade:
 * - practical: uso no trabalho ou em projetos próprios
 * - learning: estudando com IA como apoio (sem experiência profissional)
 * - tools: fazem parte do fluxo diário
 *
 * Regra: nada aqui afirma domínio que não existe. O que é "uso assistido
 * por IA" fica em learning, não em practical.
 */
export const skills = [
  {
    level: 'practical',
    label: 'Experiência prática',
    icon: Shield,
    items: [
      'Suporte N2 · SaaS fiscal',
      'JSON/XML · Análise de integrações',
      'Homologação de APIs',
      'Certificados A1/A3',
      'NFS-e · Faturamento',
      'Movidesk · Tickets',
      'SMTP · E-mails transacionais',
      'Linux (uso diário) · Terminal',
      'Redes LAN/WAN · VPN',
      'Mikrotik · Ubiquiti',
      'Fibra ótica · CFTV',
      'Hardware · Montagem',
      'Arduino · ESP32',
    ],
  },
  {
    level: 'learning',
    label: 'Em evolução',
    icon: Zap,
    items: [
      'JavaScript',
      'React',
      'HTML5 · CSS3',
      'Python (scripts)',
      'Node.js · Express (base)',
      'Git/GitHub',
    ],
  },
  {
    level: 'tools',
    label: 'Ferramentas do fluxo',
    icon: Terminal,
    items: [
      'Movidesk',
      'Linux · Bash',
      'VS Code',
      'Git/GitHub',
      'Figma (leitura)',
      'IA como copiloto',
    ],
  },
];

/** Categorias de eletrônica/hardware mantidas para a seção About (fora da stack dev). */
export const hardwareSkills = {
  icon: Cpu,
  items: ['Arduino', 'ESP32', 'Sensores', 'Sistemas embarcados', 'Solda · Montagem de módulos'],
};

/** Mantido para compatibilidade com import antigo (remover quando TechStack migrar). */
export const cloudIcon = Cloud;
export const monitorIcon = Monitor;
export const serverIcon = Server;
