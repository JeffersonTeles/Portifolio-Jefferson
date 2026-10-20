import styles from './Home.module.css';

const practice = [
  {
    number: '01',
    title: 'Diagnóstico',
    description: 'Suporte, redes e automação me ensinaram a investigar antes de propor.',
    tags: ['Contexto', 'Processo'],
  },
  {
    number: '02',
    title: 'Interface',
    description: 'Transformo processos densos em hierarquia, texto e fluxos que fazem sentido.',
    tags: ['Estrutura', 'Interação'],
  },
  {
    number: '03',
    title: 'Código',
    description: 'React, Next.js, TypeScript e CSS para manter a interface próxima do contexto.',
    tags: ['Frontend', 'Manutenção'],
  },
];

export function Capabilities() {
  return (
    <section id="metodo" className={styles.practiceSection}>
      <div className="container">
        <div className={styles.practiceLayout}>
          <header className={styles.practiceIntro}>
            <h2>O que eu trago para a interface.</h2>
            <p>
              A base vem de suporte, redes e automação. O frontend é o espaço onde transformo
              esse contexto em algo mais claro de usar e mais fácil de manter.
            </p>
          </header>
          <div className={styles.practiceList}>
            {practice.map((item) => (
              <article className={styles.practiceItem} key={item.number}>
                <span className={styles.practiceNumber}>{item.number}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
                <div className={styles.practiceTags}>
                  {item.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
