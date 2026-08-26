import React from 'react';
import { render, screen } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../i18n';
import Hero from '../../sections/Hero';

const renderWithI18n = (component) => {
  return render(<I18nextProvider i18n={i18n}>{component}</I18nextProvider>);
};

describe('Hero', () => {
  it('renders hero section', () => {
    renderWithI18n(<Hero />);
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });

  it('renders call-to-action buttons', () => {
    renderWithI18n(<Hero />);
    expect(screen.getByRole('link', { name: /ver projetos/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /currículo/i })).toBeInTheDocument();
  });

  it('renders social media links', () => {
    renderWithI18n(<Hero />);
    expect(screen.getByRole('link', { name: /github/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /linkedin/i })).toBeInTheDocument();
  });

  it('renders email copy button', () => {
    renderWithI18n(<Hero />);
    expect(screen.getByRole('button', { name: /copiar email/i })).toBeInTheDocument();
  });
});
