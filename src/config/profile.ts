export const profile = {
  location: 'Cascavel/PR',
  availability: 'Disponibilidade imediata',
  goal: 'Estágio ou desenvolvedor júnior',
  workMode: 'Remoto ou Cascavel/PR',
  education: {
    course: 'Bacharelado em Engenharia de Software',
    institution: 'Centro Universitário FAG',
    expected: 'Conclusão prevista: novembro de 2026',
  },
} as const;

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  place?: string;
  summary: string;
  bullets: string[];
};

export const experience: ExperienceItem[] = [
  {
    company: 'FaturAgil',
    role: 'Analista de Suporte Júnior',
    period: 'Mar 2026 — atual',
    summary: 'Suporte N2 em sistema fiscal SaaS, com média de 8 tickets por dia.',
    bullets: [
      'Atendimento a clientes em emissão de notas fiscais, NBS/CBS, alíquotas e rotinas de faturamento.',
      'Geração, atualização e instalação de certificados digitais A1/A3 em ambiente Linux.',
      'Homologação de APIs de prefeituras para emissão de NFS-e e repasse de bugs e melhorias ao time de desenvolvimento.',
    ],
  },
  {
    company: 'Maguinho Sensores',
    role: 'Técnico em Eletrônica e Automação Industrial',
    period: 'Mar 2025 — Fev 2026',
    place: 'Tupãssi/PR',
    summary: 'Sensores e módulos eletrônicos para automação de máquinas agrícolas.',
    bullets: [
      'Montagem e manutenção de módulos eletrônicos, chicotes elétricos e sensores.',
      'Diagnóstico de falhas em sistemas embarcados e equipamentos em campo.',
      'Integração de sensores com Arduino/ESP32, fiação, solda e testes de funcionamento.',
    ],
  },
  {
    company: 'Digital Informática',
    role: 'Técnico de TI — Suporte, Redes e Hardware',
    period: 'Jan 2020 — Fev 2025',
    place: 'Tupãssi/PR',
    summary: 'Suporte presencial a residências e empresas, em atuação formal e autônoma.',
    bullets: [
      'Diagnóstico, manutenção e conserto de computadores e notebooks.',
      'Redes LAN/WAN, roteadores, DNS, VPN, cabeamento estruturado e CFTV; redes wireless com Mikrotik e Ubiquiti.',
      'Instalação de certificados digitais A1/A3 e fibra óptica (cabos drop, conectorização e emendas por fusão).',
    ],
  },
];
