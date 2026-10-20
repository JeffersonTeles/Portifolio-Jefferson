'use client';

import { useState, type FormEvent } from 'react';
import { Info, Mail, Send } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { WarmTooltip } from './WarmTooltip';
import styles from './ContactForm.module.css';

type Status = 'idle' | 'loading' | 'success' | 'error';

type ContactResponse = {
  success?: boolean;
  message?: string;
};

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.get('name'),
          email: data.get('email'),
          message: data.get('message'),
        }),
      });
      const result = (await response.json()) as ContactResponse;

      if (result.success) {
        setStatus('success');
        form.reset();
        return;
      }

      setStatus('error');
      setErrorMessage(result.message || 'Não foi possível enviar. Tente novamente.');
    } catch {
      setStatus('error');
      setErrorMessage(`Erro de conexão. Tente novamente ou escreva para ${siteConfig.email}.`);
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} aria-label="Formulário de contato">
      <div className={styles.formGrid}>
        <div className={styles.field}>
          <div className={styles.fieldLabel}>
            <label htmlFor="contact-name">Nome</label>
            <WarmTooltip content="Como posso te chamar?">
              <button type="button" className={styles.tooltipTrigger} aria-label="Dica sobre o campo nome">
                <Info size={13} aria-hidden />
              </button>
            </WarmTooltip>
          </div>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            minLength={2}
            maxLength={100}
            autoComplete="name"
            placeholder="Como posso te chamar?"
            className="form-control"
          />
        </div>
        <div className={styles.field}>
          <div className={styles.fieldLabel}>
            <label htmlFor="contact-email">E-mail</label>
            <WarmTooltip content="Use um e-mail que você confira com frequência.">
              <button type="button" className={styles.tooltipTrigger} aria-label="Dica sobre o campo e-mail">
                <Info size={13} aria-hidden />
              </button>
            </WarmTooltip>
          </div>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            maxLength={254}
            autoComplete="email"
            placeholder="voce@exemplo.com"
            className="form-control"
          />
        </div>
      </div>

      <div className={styles.field}>
        <div className={styles.fieldLabel}>
          <label htmlFor="contact-message">Mensagem</label>
          <WarmTooltip content="Conte o contexto, objetivo ou próximo passo.">
            <button type="button" className={styles.tooltipTrigger} aria-label="Dica sobre o campo mensagem">
              <Info size={13} aria-hidden />
            </button>
          </WarmTooltip>
        </div>
        <textarea
          id="contact-message"
          name="message"
          required
          minLength={10}
          maxLength={5000}
          rows={6}
          placeholder="Conte um pouco sobre o contexto."
          className="form-control"
        />
      </div>

      {status === 'error' && (
        <div className={`${styles.status} ${styles['status--error']}`} role="alert">
          {errorMessage}
        </div>
      )}

      {status === 'success' && (
        <div className={`${styles.status} ${styles['status--success']}`} role="status">
          <Mail size={16} aria-hidden /> Mensagem enviada.
        </div>
      )}

      <div className={styles.formActions}>
        <button type="submit" className="btn btn--primary" disabled={status === 'loading'}>
          {status === 'loading' ? 'Enviando…' : 'Enviar mensagem'}
          <Send size={15} aria-hidden />
        </button>
      </div>
    </form>
  );
}
