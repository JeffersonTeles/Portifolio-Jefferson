import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import styles from './Home.module.css';

export function ContactBanner() {
  return (
    <section id="contato" className={styles.contactSection}>
      <div className="container">
        <div className={styles.contactLine}>
          <div>
            <h2>Uma ideia, um problema ou uma próxima etapa?</h2>
            <p>
              Escreva sobre o que você está construindo. O primeiro passo é entender o contexto,
              não escolher a solução antes da hora.
            </p>
          </div>
          <Link href="/contact" className="btn btn--primary btn--specular">
            Fale Comigo <ArrowUpRight size={16} aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}
