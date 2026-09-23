import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import GooeyNav from '../GooeyNav';

const items = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#' },
  { label: 'Contact', href: '#' },
];

describe('GooeyNav', () => {
  beforeEach(() => {
    // jsdom does not implement innerText; polyfill it over textContent so the
    // component's label-mirroring logic runs as it would in a browser.
    Object.defineProperty(HTMLElement.prototype, 'innerText', {
      configurable: true,
      get() {
        return this.textContent;
      },
      set(value) {
        this.textContent = value;
      },
    });
    // jsdom has no layout; give every element a deterministic box so the
    // effect pill can be positioned over the active item.
    jest.spyOn(HTMLElement.prototype, 'getBoundingClientRect').mockImplementation(function () {
      // Distinct x per element (from its text length) so position math is observable.
      const x = ((this.textContent || '').length * 13) % 137;
      return {
        x,
        y: 0,
        left: x,
        top: 0,
        right: x + 100,
        bottom: 40,
        width: 100,
        height: 40,
        toJSON: () => ({}),
      };
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
    jest.useRealTimers();
  });

  it('renders one anchor per item with the first active by default', () => {
    render(<GooeyNav items={items} />);

    expect(screen.getByRole('link', { name: 'Home' }).closest('li')).toHaveClass('active');
    expect(screen.getByRole('link', { name: 'Contact' }).closest('li')).not.toHaveClass('active');
  });

  it('honors initialActiveIndex', () => {
    render(<GooeyNav items={items} initialActiveIndex={2} />);

    expect(screen.getByRole('link', { name: 'Contact' }).closest('li')).toHaveClass('active');
  });

  it('moves the active pill and bursts particles when another item is clicked', () => {
    jest.useFakeTimers();
    const { container } = render(<GooeyNav items={items} particleCount={15} />);

    const textEffect = container.querySelector('.effect.text');
    const initialLeft = textEffect.style.left;

    fireEvent.click(screen.getByRole('link', { name: 'Contact' }));

    expect(screen.getByRole('link', { name: 'Contact' }).closest('li')).toHaveClass('active');
    expect(screen.getByRole('link', { name: 'Home' }).closest('li')).not.toHaveClass('active');
    // The floating label mirrors the clicked item's text and moved position.
    expect(textEffect.innerText || textEffect.textContent).toBe('Contact');
    expect(textEffect.style.left).not.toBe(initialLeft);

    // Particles are spawned on a 30ms timeout.
    act(() => {
      jest.advanceTimersByTime(50);
    });
    expect(container.querySelectorAll('.particle').length).toBeGreaterThan(0);

    // Clicking the already-active item is a no-op.
    fireEvent.click(screen.getByRole('link', { name: 'Contact' }));
    expect(container.querySelectorAll('.effect.text.active')).toHaveLength(1);
  });

  it('keeps particle cleanup from throwing when the effect node is gone', () => {
    jest.useFakeTimers();
    const { unmount } = render(<GooeyNav items={items} particleCount={3} />);

    fireEvent.click(screen.getByRole('link', { name: 'About' }));
    act(() => {
      jest.advanceTimersByTime(50);
    });
    expect(() => {
      unmount();
      jest.advanceTimersByTime(3000);
    }).not.toThrow();
  });
});
