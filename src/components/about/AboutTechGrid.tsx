import { experience, profile } from '@/config/profile';
import styles from './About.module.css';

export function AboutTechGrid() {
  return (
    <section className={styles.section} aria-labelledby="trajetoria-title">
      <header className={styles.sectionHeader}>
        <h2 id="trajetoria-title">Experiência profissional.</h2>
        <p>
          Do suporte presencial à automação e ao suporte N2 em SaaS. Cada etapa trouxe uma forma
          mais prática de diagnosticar problemas e explicá-los com clareza.
        </p>
      </header>
      <div className={styles.timeline}>
        {experience.map((item) => (
          <article className={styles.timelineItem} key={`${item.company}-${item.period}`}>
            <time>{item.period}</time>
            <div>
              <h3>{item.role}</h3>
              <p className={styles.company}>
                {item.company}
                {item.place ? ` · ${item.place}` : ''}
              </p>
              <ul className={styles.bullets}>
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
      <div className={styles.studyNote}>
        <span>Formação</span>
        <strong>
          {profile.education.course} · {profile.education.institution}
        </strong>
        <span>{profile.education.expected}</span>
      </div>
    </section>
  );
}
