import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import WarmTooltip, { WarmTooltipGroup } from '../WarmTooltip';

describe('WarmTooltip', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    act(() => {
      jest.runOnlyPendingTimers();
    });
    jest.useRealTimers();
  });

  it('renders the trigger untouched and opens the label after the delay', () => {
    render(
      <WarmTooltip content="Bold" shortcut="⌘B">
        <button type="button" aria-label="Bold">
          B
        </button>
      </WarmTooltip>
    );

    const trigger = screen.getByRole('button', { name: 'Bold' });
    expect(trigger.closest('.warm-tooltip__trigger')).toBeInTheDocument();
    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();

    act(() => {
      // React derives onPointerEnter from native pointerover/out, so tests must fire those.
      fireEvent.pointerOver(trigger, { pointerType: 'mouse', buttons: 0 });
      jest.advanceTimersByTime(500);
    });

    const tooltip = screen.getByRole('tooltip');
    expect(tooltip).toHaveTextContent('Bold');
    expect(tooltip).toHaveTextContent('⌘B');
    expect(trigger).toHaveAttribute('aria-describedby', tooltip.id);
  });

  it('closes after pointer leave (grace + exit)', () => {
    render(
      <WarmTooltip content="Italic" delay={100}>
        <button type="button" aria-label="Italic">
          I
        </button>
      </WarmTooltip>
    );

    const trigger = screen.getByRole('button', { name: 'Italic' });

    act(() => {
      fireEvent.pointerOver(trigger, { pointerType: 'mouse', buttons: 0 });
      jest.advanceTimersByTime(200);
    });
    expect(screen.getByRole('tooltip')).toBeInTheDocument();

    act(() => {
      fireEvent.pointerOut(trigger, { pointerType: 'mouse' });
      jest.advanceTimersByTime(400);
    });
    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
  });

  it('shares one label across a group and skips the delay while warm', () => {
    render(
      <WarmTooltipGroup delay={100} warmWindow={300}>
        <WarmTooltip content="GitHub">
          <button type="button" aria-label="gh" />
        </WarmTooltip>
        <WarmTooltip content="LinkedIn">
          <button type="button" aria-label="in" />
        </WarmTooltip>
      </WarmTooltipGroup>
    );

    const gh = screen.getByRole('button', { name: 'gh' });
    act(() => {
      fireEvent.pointerOver(gh, { pointerType: 'mouse', buttons: 0 });
      jest.advanceTimersByTime(150);
    });
    expect(screen.getByRole('tooltip')).toHaveTextContent('GitHub');

    const li = screen.getByRole('button', { name: 'in' });
    act(() => {
      fireEvent.pointerOver(li, { pointerType: 'mouse', buttons: 0 });
    });

    // Still warm from the open label: swaps to the next trigger without waiting.
    const tooltips = screen.getAllByRole('tooltip');
    expect(tooltips).toHaveLength(1);
    expect(tooltips[0]).toHaveTextContent('LinkedIn');
  });
});
