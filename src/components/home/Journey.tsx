import { experience, profile } from '@/config/profile';
import styles from './Home.module.css';

export function Journey() {
  return (
    <section id="percurso" className={styles.journeySection}>
      <div className="container">
        <div className={styles.journeyLayout}>
          <header className={styles.journeyIntro}>
            <h2>Experiência em suporte, redes e automação.</h2>
            <p>
              Seis anos de prática diagnosticando problemas em hardware, redes, automação e, agora,
              um sistema fiscal SaaS. É essa base que levo para as interfaces.
            </p>
            <div className={styles.studyNote}>
              <span>Formação</span>
              <strong>
                Engenharia de Software · FAG
              </strong>
              <span>{profile.education.expected}</span>
            </div>
          </header>
          <div className={styles.journeyRail}>
            {experience.map((item, index) => (
              <article className={styles.journeyItem} key={`${item.company}-${item.period}`}>
                <div className={styles.journeyMarker}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                </div>
                <div>
                  <time>{item.period}</time>
                  <h3>{item.role}</h3>
                  <p>
                    <strong>{item.company}</strong> · {item.summary}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
