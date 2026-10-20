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
  { label: 'Linux / Bash', detail: 'Diagnóstico e automação no ambiente de trabalho.' },
  { label: 'Redes / hardware', detail: 'A base prática que iniciou a trajetória.' },
  { label: 'APIs / JSON / XML', detail: 'Integrações e leitura de sistemas no suporte N2.' },
  { label: 'React / Next.js', detail: 'Projetos de interface para praticar o próximo capítulo.' },
  { label: 'TypeScript / CSS', detail: 'Organização, legibilidade e manutenção do código.' },
  { label: 'Documentação', detail: 'Registrar decisões para que elas continuem úteis.' },
];

export function AboutBentoGrid() {
  return (
    <>
      <section className={styles.section} aria-labelledby="base-title">
        <header className={styles.sectionHeader}>
          <h2 id="base-title">Base técnica, sem fumo.</h2>
          <p>
            Ferramentas que uso para investigar, construir e explicar. O contexto de cada projeto
            é que decide o que faz sentido usar.
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
        <div className={styles.studyNote}>
          <span>Estudo atual</span>
          <strong>Engenharia de Software · FAG</strong>
        </div>
      </section>
    </>
  );
}
