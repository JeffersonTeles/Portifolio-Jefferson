import Link from 'next/link';
import { Github, Linkedin, Mail, MapPin, MessageCircle } from 'lucide-react';
import { ContactForm } from '@/components/ui/ContactForm';
import { ResumeLink } from '@/components/ui/ResumeLink';
import { siteConfig } from '@/config/site';
import { createPageMetadata } from '@/lib/metadata';
import styles from '@/components/ui/ContactForm.module.css';

export const metadata = createPageMetadata({
  title: 'Contato',
  description: 'Entre em contato com Jefferson Teles por e-mail, LinkedIn ou GitHub.',
  path: '/contact',
});

const contacts = [
  {
    label: 'E-mail',
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    Icon: Mail,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/jeffersonteless',
    href: siteConfig.social.linkedin,
    Icon: Linkedin,
  },
  {
    label: 'GitHub',
    value: 'github.com/JeffersonTeles',
    href: siteConfig.social.github,
    Icon: Github,
  },
];

export default function ContactPage() {
  return (
    <section className={styles.page}>
      <div className="container">
        <header className={styles.header}>
          <span className={styles.kicker}>Contato</span>
          <h1>Vamos tornar uma ideia mais clara.</h1>
          <p>
            Tem um problema de interface, uma dúvida sobre um projeto ou apenas uma pergunta
            sobre a trajetória? Escolha um canal ou escreva pelo formulário.
          </p>
        </header>

        <div className={styles.layout}>
          <aside>
            <div className={styles.contactList}>
              {contacts.map(({ label, value, href, Icon }) => (
                <a
                  className={styles.contactRow}
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noreferrer noopener' : undefined}
                >
                  <Icon size={19} aria-hidden />
                  <div>
                    <strong>{label}</strong>
                    <span>{value}</span>
                  </div>
                  <MessageCircle size={15} aria-hidden />
                </a>
              ))}
            </div>
            <div className={styles.location}>
              <MapPin size={16} aria-hidden />
              <strong>Cascavel, Paraná</strong>
              <span>Projetos e oportunidades podem ser conversados por aqui.</span>
            </div>
            <ResumeLink className="btn btn--ghost" label="Baixar currículo em PDF" />
            <p className={styles.location}>
              Prefere começar pelo contexto? <Link href="/about" className="link-underline">Conheça a trajetória</Link>.
            </p>
          </aside>

          <div className={styles.formPanel}>
            <h2>Escreva uma mensagem.</h2>
            <p>Os campos marcados são necessários para que eu consiga responder.</p>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
