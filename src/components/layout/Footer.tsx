import Link from 'next/link';
import { Github, Linkedin, Mail, Rss, Terminal } from 'lucide-react';
import { siteConfig } from '@/config/site';
import styles from './Layout.module.css';

const socialLinks = [
  { href: siteConfig.social.github, label: 'GitHub', Icon: Github },
  { href: siteConfig.social.linkedin, label: 'LinkedIn', Icon: Linkedin },
  { href: `mailto:${siteConfig.email}`, label: 'E-mail', Icon: Mail },
  { href: '/rss.xml', label: 'RSS', Icon: Rss },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerMain}>
          <div className={styles.footerIdentity}>
            <div className={styles.footerTitle}>
              <span className={styles.footerMark}><Terminal size={15} aria-hidden /></span>
              <span>{siteConfig.name}</span>
            </div>
            <p className={styles.footerDescription}>
              Suporte técnico, automação industrial e a construção de interfaces web com contexto.
            </p>
          </div>

          <div>
            <p className={styles.footerHeading}>Navegação</p>
            <ul className={styles.footerLinks}>
              {siteConfig.navigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className={styles.footerHeading}>Conectar</p>
            <ul className={styles.socialLinks}>
              {socialLinks.map(({ href, label, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noreferrer noopener' : undefined}
                    className={styles.socialLink}
                  >
                    <Icon size={14} aria-hidden />
                    <span>{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>© {year} {siteConfig.name}</p>
          <p>Next.js · TypeScript · CSS nativo</p>
        </div>
      </div>
    </footer>
  );
}
