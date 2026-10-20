import styles from './About.module.css';

const principles = [
  {
    number: '01',
    title: 'Contexto primeiro',
    description: 'Antes de escolher uma ferramenta, entendo o problema, as pessoas envolvidas e o que precisa ficar claro.',
  },
  {
    number: '02',
    title: 'Simplicidade funcional',
    description: 'A interface deve reduzir ruído e deixar a próxima decisão mais fácil de tomar.',
  },
  {
    number: '03',
    title: 'Registro para evoluir',
    description: 'Documentação e boas decisões ajudam um projeto a continuar compreensível depois da primeira entrega.',
  },
];

const tools = [
  { label: 'Frontend', detail: 'React, Next.js, TypeScript, JavaScript, HTML5, CSS3, Tailwind CSS, Vite, Zustand.' },
  { label: 'Backend e dados', detail: 'Node.js, Express, Python, PostgreSQL, Supabase, SQL e APIs REST.' },
  { label: 'Mobile', detail: 'Flutter, Dart, Android, SQLite e integrações REST.' },
  { label: 'Automação', detail: 'n8n, Gemini AI, webhooks, JSON e fluxos de integração.' },
  { label: 'Infraestrutura', detail: 'Linux, Windows, TCP/IP, DNS, VPN, Mikrotik, Ubiquiti e fibra óptica.' },
  { label: 'Ferramentas', detail: 'Git/GitHub, Docker, VS Code e Trello.' },
];

export function AboutBentoGrid() {
  return (
    <>
      <section className={styles.section} aria-labelledby="base-title">
        <header className={styles.sectionHeader}>
          <h2 id="base-title">Competências técnicas.</h2>
          <p>
            O que uso no dia a dia e nos projetos, agrupado por área.
          </p>
        </header>
        <div className={styles.techList}>
          {tools.map((tool, index) => (
            <div className={styles.techItem} key={tool.label}>
              <span className={styles.techIndex}>{String(index + 1).padStart(2, '0')}</span>
              <h3>{tool.label}</h3>
              <p>{tool.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section} aria-labelledby="principles-title">
        <header className={styles.sectionHeader}>
          <h2 id="principles-title">Como gosto de trabalhar.</h2>
          <p>Princípios pequenos para manter as decisões grandes coerentes.</p>
        </header>
        <div className={styles.principles}>
          {principles.map((principle) => (
            <article className={styles.principle} key={principle.number}>
              <span className={styles.principleIndex}>{principle.number}</span>
              <h3>{principle.title}</h3>
              <p>{principle.description}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
