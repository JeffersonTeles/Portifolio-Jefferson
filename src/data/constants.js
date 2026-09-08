import {
  FiMonitor,
  FiServer,
  FiCloud,
  FiZap,
  FiSmartphone,
  FiCpu,
  FiShield,
} from 'react-icons/fi';

export const skills = [
  {
    category: 'Suporte & Redes',
    icon: FiShield,
    items: ['TCP/IP', 'DNS', 'LAN/WAN', 'VPN', 'Mikrotik', 'Ubiquiti', 'Fibra Ótica', 'CFTV'],
  },
  {
    category: 'Sistemas & SO',
    icon: FiCloud,
    items: ['Linux (uso diário)', 'Windows', 'Docker', 'Certificados A1/A3', 'Scripts CMD/Shell'],
  },
  {
    category: 'Análise',
    icon: FiZap,
    items: ['JSON', 'XML', 'Homologação de APIs', 'NFS-e', 'Faturamento SaaS'],
  },
  {
    category: 'Frontend',
    icon: FiMonitor,
    items: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Tailwind CSS', 'Git/GitHub'],
  },
  {
    category: 'Backend & Dados',
    icon: FiServer,
    items: ['Node.js', 'Express', 'Java', 'Python', 'PostgreSQL', 'Supabase', 'SQL', 'APIs REST'],
  },
  {
    category: 'Mobile',
    icon: FiSmartphone,
    items: ['Flutter', 'Dart', 'Android', 'SQLite'],
  },
  {
    category: 'Eletrônica',
    icon: FiCpu,
    items: ['Arduino', 'ESP32', 'Montagem de módulos', 'Sistemas embarcados'],
  },
];
