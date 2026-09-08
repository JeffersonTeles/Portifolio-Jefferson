import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../i18n';
import Navbar from '../Navbar';

const renderWithRouter = (component) => {
  return render(
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>{component}</BrowserRouter>
    </I18nextProvider>
  );
};

describe('Navbar', () => {
  it('renders navigation links', () => {
    renderWithRouter(<Navbar />);
    expect(screen.getByText('Sobre')).toBeInTheDocument();
    expect(screen.getByText('Experiência')).toBeInTheDocument();
    expect(screen.getByText('Projetos')).toBeInTheDocument();
    expect(screen.getByText('Contato')).toBeInTheDocument();
  });

  it('renders language toggle button', () => {
    renderWithRouter(<Navbar />);
    const langButton = screen.getByRole('button', { name: /switch to english/i });
    expect(langButton).toBeInTheDocument();
  });

  it('toggles mobile menu when hamburger button is clicked', () => {
    renderWithRouter(<Navbar />);
    const hamburgerButton = screen.getByRole('button', { name: /abrir menu/i });
    fireEvent.click(hamburgerButton);

    const closeButton = screen.getByRole('button', { name: /fechar menu/i });
    expect(closeButton).toBeInTheDocument();
  });

  it('closes mobile menu when clicking outside', () => {
    renderWithRouter(<Navbar />);
    const hamburgerButton = screen.getByRole('button', { name: /abrir menu/i });
    fireEvent.click(hamburgerButton);

    const overlay = screen.getByRole('dialog').previousElementSibling;
    fireEvent.click(overlay);

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });
});
