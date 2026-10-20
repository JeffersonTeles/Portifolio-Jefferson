'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, useReducedMotion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { ResumeLink } from '../ui/ResumeLink';
import { ThemeToggle } from '../ui/ThemeToggle';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import styles from './Layout.module.css';

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

type IndicatorPosition = {
  left: number;
  width: number;
  visible: boolean;
};

export function Navbar() {
  const pathname = usePathname() ?? '';
  const [open, setOpen] = useState(false);
  const [indicator, setIndicator] = useState<IndicatorPosition>({ left: 0, width: 0, visible: false });
  const desktopNavRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(`${href}/`);
  const activeHref = siteConfig.navigation.find((item) => isActive(item.href))?.href;

  useIsomorphicLayoutEffect(() => {
    const nav = desktopNavRef.current;
    if (!nav) return;

    const updateIndicator = () => {
      const activeLink = Array.from(nav.querySelectorAll<HTMLElement>('[data-nav-href]')).find(
        (link) => link.dataset.navHref === activeHref,
      );
      if (!activeLink) {
        setIndicator({ left: 0, width: 0, visible: false });
        return;
      }
      setIndicator({
        left: activeLink.offsetLeft,
        width: activeLink.offsetWidth,
        visible: true,
      });
    };

    updateIndicator();
    const observer = new ResizeObserver(updateIndicator);
    observer.observe(nav);
    window.addEventListener('resize', updateIndicator);
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', updateIndicator);
    };
  }, [activeHref]);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.brand} aria-label="Página inicial">
          <span>{siteConfig.name}</span>
        </Link>

        <nav ref={desktopNavRef} className={styles.desktopNav} aria-label="Navegação principal">
          <motion.span
            className={styles.navIndicator}
            aria-hidden
            initial={false}
            animate={{
              left: indicator.left,
              width: indicator.width,
              opacity: indicator.visible ? 1 : 0,
            }}
            transition={{ duration: reduceMotion ? 0 : 0.34, ease: [0.16, 1, 0.3, 1] }}
          />
          {siteConfig.navigation.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                data-nav-href={item.href}
                className={cn('nav-link', active && 'nav-link--active')}
                aria-current={active ? 'page' : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="inline-flex">
          <ResumeLink className={styles.navResume} label="Currículo" iconSize={14} />
          <ThemeToggle />
          <button
            type="button"
            className={styles.mobileToggle}
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
            onClick={() => setOpen((current) => !current)}
          >
            {open ? <X size={18} aria-hidden /> : <Menu size={18} aria-hidden />}
          </button>
        </div>
      </div>

      {open && (
        <div className={styles.mobileMenu}>
          <nav className="container" aria-label="Navegação móvel">
            <ul className={styles.mobileMenuList}>
              {siteConfig.navigation.map((item) => {
                const active = isActive(item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={styles.mobileMenuLink}
                      aria-current={active ? 'page' : undefined}
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
              <li>
                <ResumeLink className={styles.mobileMenuLink} label="Baixar currículo" />
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
