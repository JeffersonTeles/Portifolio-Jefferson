'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, RotateCcw } from 'lucide-react';

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function GlobalError({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log do erro no console do cliente para diagnóstico local
    console.error('Erro de execução capturado no App Router:', error);
  }, [error]);

  return (
    <section className="section-padding" role="alert" aria-live="assertive">
      <div className="container container--narrow">
        <span className="mono" style={{ color: 'var(--color-accent)' }}>
          500 / interrupção de sinal
        </span>
        <h1 className="h1" style={{ marginTop: '1.25rem' }}>
          Algo não correu como esperado.
        </h1>
        <p className="lead" style={{ marginTop: '1.25rem' }}>
          Ocorreu uma falha inesperada durante a exibição desta página. Você pode tentar
          recarregar a seção ou retornar à página inicial.
        </p>
        <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
          <button
            type="button"
            onClick={() => reset()}
            className="btn btn--primary"
          >
            <RotateCcw size={15} aria-hidden /> Tentar novamente
          </button>
          <Link href="/" className="btn btn--ghost">
            <ArrowLeft size={15} aria-hidden /> Voltar ao início
          </Link>
        </div>
      </div>
    </section>
  );
}
