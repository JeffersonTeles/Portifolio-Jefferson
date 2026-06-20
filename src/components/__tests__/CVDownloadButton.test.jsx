import { render, screen, fireEvent } from '@testing-library/react';
import CVDownloadButton from '../CVDownloadButton';

describe('CVDownloadButton', () => {
  it('renders correctly', () => {
    render(<CVDownloadButton />);
    expect(screen.getByText('Download CV')).toBeInTheDocument();
  });

  it('triggers download on click', () => {
    render(<CVDownloadButton />);
    const button = screen.getByText('Download CV');
    
    // Mock window.open
    const mockOpen = jest.fn();
    window.open = mockOpen;
    
    fireEvent.click(button);
    
    expect(mockOpen).toHaveBeenCalled();
  });

  it('applies correct variant classes', () => {
    const { rerender } = render(<CVDownloadButton variant="primary" />);
    const button = screen.getByText('Download CV');
    
    expect(button).toHaveClass('bg-gradient-to-r');
    
    rerender(<CVDownloadButton variant="secondary" />);
    expect(button).toHaveClass('glass-panel');
  });
});
