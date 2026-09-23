import React from 'react';
import { render, screen, act } from '@testing-library/react';
import ScrollExpand from '../ScrollExpand';

describe('ScrollExpand', () => {
  beforeEach(() => {
    // jsdom has no layout; give the root a measurable box so measure() works.
    jest.spyOn(HTMLElement.prototype, 'clientHeight', 'get').mockReturnValue(600);
    jest.spyOn(HTMLElement.prototype, 'clientWidth', 'get').mockReturnValue(1000);
    // jsdom's innerHeight is a value property, not an accessor — define it directly.
    Object.defineProperty(window, 'innerHeight', { configurable: true, value: 600 });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  const setScrollProgress = (rootEl, progress) => {
    Object.defineProperty(rootEl, 'scrollTop', {
      configurable: true,
      value: progress * 720, // 600 * scrollDistance 1.2
    });
  };

  it('renders media, title and hint inside the pinned stage', () => {
    render(
      <div style={{ height: '600px' }}>
        <ScrollExpand src="/og-image.png" alt="hero" title="Built to scale" scrollHint="Scroll" />
      </div>
    );

    const img = screen.getByAltText('hero');
    expect(img).toHaveClass('scroll-expand__media');
    expect(screen.getByText('Built to scale')).toBeInTheDocument();
    expect(screen.getByText('Scroll')).toBeInTheDocument();
    expect(document.querySelector('.scroll-expand__stage')).toBeInTheDocument();
    expect(document.querySelector('.scroll-expand__frame')).toBeInTheDocument();
  });

  it('expands the frame as the internal scroller advances and restores it at top', () => {
    const { container } = render(
      <div style={{ height: '600px' }}>
        <ScrollExpand src="/og-image.png" alt="hero" title="Built to scale" smoothing={0} />
      </div>
    );

    const root = container.querySelector('.scroll-expand');
    const frame = container.querySelector('.scroll-expand__frame');
    const img = container.querySelector('.scroll-expand__media');

    // Resting state: clip-path at start geometry (42% wide → inset 29%, 58% tall → inset 21%).
    expect(frame.style.clipPath).toContain('inset(21% 29% 21% 29% round 24px)');
    expect(img.style.transform).toContain('1.35');

    act(() => {
      setScrollProgress(root, 1);
      root.dispatchEvent(new Event('scroll'));
    });

    // Fully expanded: full-bleed inset, radius 0, zoom back to 1.
    expect(frame.style.clipPath).toContain('round 0px');
    expect(img.style.transform).toBe('scale(1)');

    act(() => {
      setScrollProgress(root, 0);
      root.dispatchEvent(new Event('scroll'));
    });
    expect(frame.style.clipPath).not.toContain('round 0px');
  });

  it('drives expansion from window scroll in useWindowScroll mode', () => {
    const { container } = render(
      <ScrollExpand src="/og-image.png" alt="hero" useWindowScroll smoothing={0} />
    );

    const track = container.querySelector('.scroll-expand__track');

    act(() => {
      track.getBoundingClientRect = () => ({
        top: -720,
        bottom: 0,
        left: 0,
        right: 0,
        width: 1000,
        height: 600,
        x: 0,
        y: -720,
        toJSON: () => ({}),
      });
      window.dispatchEvent(new Event('scroll'));
    });

    const frame = container.querySelector('.scroll-expand__frame');
    expect(frame.style.clipPath).toContain('round 0px');
  });

  it('when disabled, shows the fully expanded state regardless of scroll', () => {
    const { container } = render(
      <div style={{ height: '600px' }}>
        <ScrollExpand src="/og-image.png" alt="hero" enabled={false} smoothing={0} />
      </div>
    );

    const frame = container.querySelector('.scroll-expand__frame');
    expect(frame.style.clipPath).toContain('round 0px');

    const root = container.querySelector('.scroll-expand');
    act(() => {
      setScrollProgress(root, 0);
      root.dispatchEvent(new Event('scroll'));
    });
    expect(frame.style.clipPath).toContain('round 0px');
  });
});
