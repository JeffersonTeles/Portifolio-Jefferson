import React, { useEffect, useRef, useState } from "react";
import useReducedMotion from "../hooks/useReducedMotion";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!isFinePointer || prefersReducedMotion) return undefined;

    let rafId = 0;
    let x = -100;
    let y = -100;

    const render = () => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${x - 8}px, ${y - 8}px, 0)`;
      }
      rafId = 0;
    };

    const scheduleRender = () => {
      if (!rafId) rafId = requestAnimationFrame(render);
    };

    const handlePointerMove = (event) => {
      x = event.clientX;
      y = event.clientY;
      setVisible(true);
      scheduleRender();
    };

    const handlePointerOver = (event) => {
      const target = event.target;
      setActive(Boolean(target.closest("a, button, input, textarea, select")));
    };

    const handlePointerLeave = () => setVisible(false);

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerover", handlePointerOver, { passive: true });
    document.documentElement.addEventListener("mouseleave", handlePointerLeave);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerover", handlePointerOver);
      document.documentElement.removeEventListener("mouseleave", handlePointerLeave);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [prefersReducedMotion]);

  if (prefersReducedMotion) return null;

  return (
    <div
      ref={cursorRef}
      className={`cursor-dot ${visible ? "is-visible" : ""} ${active ? "is-active" : ""}`}
      aria-hidden="true"
    />
  );
};

export default CustomCursor;
