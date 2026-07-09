import { render, screen, fireEvent } from '@testing-library/react';
import CVDownloadButton from '../CVDownloadButton';

describe('CVDownloadButton', () => {
  beforeEach(() => {
    global.fetch = jest.fn(() => Promise.resolve({ ok: true }));
    HTMLAnchorElement.prototype.click = jest.fn();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('renders correctly', () => {
    render(<CVDownloadButton />);
    expect(screen.getByText('Download CV')).toBeInTheDocument();
  });

  it('checks the CV path before downloading', async () => {
    render(<CVDownloadButton />);
    const button = screen.getByText('Download CV');

    fireEvent.click(button);

    expect(global.fetch).toHaveBeenCalledWith('/curriculo.pdf', {
      method: 'HEAD',
    });
  });

  it('applies correct variant classes', () => {
    const { rerender } = render(<CVDownloadButton variant="primary" />);
    const button = screen.getByRole('button', { name: /baixar currículo/i });
    
    expect(button).toHaveClass('bg-gradient-to-r');
    
    rerender(<CVDownloadButton variant="secondary" />);
    expect(button).toHaveClass('bg-white/5');
    expect(button).toHaveClass('border-white/10');
  });
});
