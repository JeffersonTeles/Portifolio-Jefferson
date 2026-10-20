import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Página não encontrada',
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="section-padding">
      <div className="container container--narrow">
        <span className="mono" style={{ color: 'var(--color-accent)' }}>404 / sinal perdido</span>
        <h1 className="h1" style={{ marginTop: '1.25rem' }}>Esta rota não existe.</h1>
        <p className="lead" style={{ marginTop: '1.25rem' }}>
          O endereço pode ter mudado ou o sinal não chegou até aqui. Volte para o início para
          continuar explorando.
        </p>
        <Link href="/" className="btn btn--primary" style={{ marginTop: '2rem' }}>
          <ArrowLeft size={15} aria-hidden /> Voltar ao início
        </Link>
      </div>
    </section>
  );
}
