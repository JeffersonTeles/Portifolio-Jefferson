import styles from './Home.module.css';

const phases = [
  {
    period: '2020 — 2025',
    title: 'Suporte de TI',
    description: 'Hardware, redes e infraestrutura: aprender a diagnosticar antes de tentar corrigir.',
  },
  {
    period: '2025 — 2026',
    title: 'Automação industrial',
    description: 'Eletrônica, automação e processos que pedem atenção, método e leitura do ambiente.',
  },
  {
    period: '2026 — agora',
    title: 'Suporte N2 em SaaS',
    description: 'Um sistema fiscal, integrações e a prática constante de transformar problemas em caminhos mais claros.',
  },
];

export function Journey() {
  return (
    <section id="percurso" className={styles.journeySection}>
      <div className="container">
        <div className={styles.journeyLayout}>
          <header className={styles.journeyIntro}>
            <h2>De suporte a interface, sem pular etapas.</h2>
            <p>
              Minha trajetória passa por hardware, redes, automação e agora interfaces. O contexto
              do trabalho é o que guia cada projeto.
            </p>
            <div className={styles.studyNote}>
              <span>Estudo atual</span>
              <strong>Engenharia de Software · FAG</strong>
            </div>
          </header>
          <div className={styles.journeyRail}>
            {phases.map((phase, index) => (
              <article className={styles.journeyItem} key={phase.period}>
                <div className={styles.journeyMarker}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                </div>
                <div>
                  <time>{phase.period}</time>
                  <h3>{phase.title}</h3>
                  <p>{phase.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
