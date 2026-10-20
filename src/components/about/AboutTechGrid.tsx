import styles from './About.module.css';

const timeline = [
  {
    period: '2020 — 2025',
    title: 'Suporte de TI',
    description: 'Hardware, redes e infraestrutura. A base de entender um problema antes de mexer no sistema.',
  },
  {
    period: '2025 — 2026',
    title: 'Automação industrial',
    description: 'Eletrônica, automação e processos de chão de fábrica, onde cada detalhe precisa estar no lugar.',
  },
  {
    period: '2026 — agora',
    title: 'Suporte N2 em SaaS',
    description: 'Suporte a um sistema fiscal SaaS, com integrações, Linux e a necessidade de comunicar soluções com clareza.',
  },
];

export function AboutTechGrid() {
  return (
    <section className={styles.section} aria-labelledby="trajetoria-title">
      <header className={styles.sectionHeader}>
        <h2 id="trajetoria-title">Experiência que virou método.</h2>
        <p>
          O caminho não é linear, mas cada parte contribuiu para uma forma mais prática de
          entender tecnologia.
        </p>
      </header>
      <div className={styles.timeline}>
        {timeline.map((item) => (
          <article className={styles.timelineItem} key={item.period}>
            <time>{item.period}</time>
            <div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
