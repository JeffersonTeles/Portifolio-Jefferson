import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

import './StackSpread.css';

/*
 * Stack Spread — adapted from Hyperiux's component on 21st.dev
 * (https://21st.dev/@hyperiux/components/stack-spread).
 * Converted to JSX + framer-motion 10, re-themed for this portfolio.
 */

const SCATTER_START = 0.12;
const SCATTER_END = 0.9;

const PARALLAX_X = 2.6;
const PARALLAX_Y = 2.2;
const PARALLAX_SPRING = { stiffness: 90, damping: 22, mass: 0.6 };
const parallaxDepth = (i, total) => (total <= 1 ? 1 : 0.55 + (i / (total - 1)) * 0.75);

export const DEFAULT_CARDS = [
  {
    src: '/screenshot-maestria.png',
    alt: 'Projeto Maestria — TCC',
    stackOffset: { x: -6, y: -8 },
    stackRotate: -14,
    target: { x: -27, y: -24, rotate: -5, w: 24, h: 16 },
    targetSm: { x: -22, y: -40 },
    z: 4,
  },
  {
    src: '/screenshot-casamento.png',
    alt: 'Projeto Casamento',
    stackOffset: { x: 8, y: -6 },
    stackRotate: 12,
    target: { x: 27, y: -22, rotate: 4, w: 24, h: 16 },
    targetSm: { x: 22, y: -19 },
    z: 3,
  },
  {
    src: '/screenshot-x11.png',
    alt: 'Sistema X11',
    stackOffset: { x: -8, y: 8 },
    stackRotate: 8,
    target: { x: -25, y: 25, rotate: 3, w: 24, h: 16 },
    targetSm: { x: -22, y: 20 },
    z: 2,
  },
  {
    src: '/og-image.png',
    alt: 'Portfólio Jefferson Teles',
    stackOffset: { x: 10, y: 10 },
    stackRotate: -6,
    target: { x: 25, y: 23, rotate: -4, w: 24, h: 16 },
    targetSm: { x: 22, y: 40 },
    z: 5,
  },
];

const RESPONSIVE = {
  desktop: { small: false, colX: null, card: null },
  small: { small: true, colX: 22, card: { w: 40, h: 20 } },
};

function useResponsive() {
  const [r, setR] = useState(RESPONSIVE.desktop);
  useEffect(() => {
    // Touch vs. mouse, not raw width: only real touch devices drop to the
    // stacked column layout; narrow mouse-driven frames keep the scatter.
    const mq = window.matchMedia('(pointer: coarse)');
    const read = () => setR(mq.matches ? RESPONSIVE.small : RESPONSIVE.desktop);
    read();
    mq.addEventListener('change', read);
    return () => mq.removeEventListener('change', read);
  }, []);
  return r;
}

function usePointerParallax(active) {
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, PARALLAX_SPRING);
  const y = useSpring(rawY, PARALLAX_SPRING);

  useEffect(() => {
    if (!active) {
      rawX.set(0);
      rawY.set(0);
      return undefined;
    }

    const onMove = (event) => {
      rawX.set((event.clientX / window.innerWidth) * 2 - 1);
      rawY.set((event.clientY / window.innerHeight) * 2 - 1);
    };
    const onLeave = () => {
      rawX.set(0);
      rawY.set(0);
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    document.addEventListener('pointerleave', onLeave);

    return () => {
      window.removeEventListener('pointermove', onMove);
      document.removeEventListener('pointerleave', onLeave);
    };
  }, [active, rawX, rawY]);

  return { x, y };
}

function CardFace({ src, alt, cardRadius }) {
  return (
    <img
      src={src}
      alt={alt}
      draggable={false}
      className="scroll-spread__face"
      style={{ borderRadius: cardRadius }}
    />
  );
}

function Card({ card, progress, reduce, isSmall, colX, fixedCard, cardRadius, pointer, depth }) {
  const { stackOffset = { x: 0, y: 0 }, stackRotate = 0, target, targetSm, z = 1 } = card;

  const flat = reduce === true;
  const clusterRotate = flat ? 0 : stackRotate;

  const sm = isSmall && targetSm ? targetSm : null;
  const endX = sm ? (colX != null ? Math.sign(sm.x) * colX : sm.x) : target.x;
  const endY = sm ? sm.y : target.y;
  const endRotate = flat || isSmall ? 0 : target.rotate || 0;
  const w = fixedCard ? fixedCard.w : target.w;
  const h = fixedCard ? fixedCard.h : target.h;

  // -50% keeps the card centred on its anchor; calc strings are set per-frame.
  const x = useTransform([progress, pointer.x, pointer.y], ([p, px]) => {
    const tx = stackOffset.x + (endX - stackOffset.x) * p;
    const dx = tx - px * PARALLAX_X * depth * p;
    return `calc(-50% + ${dx}vw)`;
  });
  const y = useTransform([progress, pointer.x, pointer.y], ([p, , py]) => {
    const ty = stackOffset.y + (endY - stackOffset.y) * p;
    const dy = ty - py * PARALLAX_Y * depth * p;
    return `calc(-50% + ${dy}vh)`;
  });
  const rotate = useTransform(progress, [0, 1], [clusterRotate, endRotate]);
  const scale = useTransform(progress, [0, 1], [0.55, 1]);

  return (
    <motion.div
      className="scroll-spread__card"
      style={{ width: `${w}vw`, height: `${h}vh`, zIndex: z, x, y, rotate, scale }}
    >
      <CardFace src={card.src} alt={card.alt} cardRadius={cardRadius} />
    </motion.div>
  );
}

const StackSpread = ({
  cards = DEFAULT_CARDS,
  title = '',
  subtitle = '',
  hint = '',
  scrollDistance = 1.2,
  cardRadius = 14,
  className = '',
  ...rest
}) => {
  const trackRef = useRef(null);
  const reduce = useReducedMotion();
  const { small, colX, card: fixedCard } = useResponsive();
  const pointer = usePointerParallax(!small && reduce !== true);

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ['start start', 'end end'],
  });
  const progress = useTransform(scrollYProgress, [SCATTER_START, SCATTER_END], [0, 1], {
    clamp: true,
  });

  const titleScale = useTransform(progress, [0, 1], [1, 0.94]);
  const titleOpacity = useTransform(progress, [0, 0.5], [1, 0.85]);
  const hintOpacity = useTransform(progress, [0, 0.15], [1, 0]);

  return (
    <div className={`scroll-spread ${className}`.trim()} {...rest}>
      <div
        ref={trackRef}
        className="scroll-spread__track"
        style={{ height: `${(1 + Math.max(0.2, scrollDistance)) * 100}vh` }}
      >
        <div className="scroll-spread__stage">
          {cards.map((card, i) => (
            <Card
              key={card.src + i}
              card={card}
              progress={progress}
              reduce={reduce}
              isSmall={small}
              colX={colX}
              fixedCard={fixedCard}
              cardRadius={cardRadius}
              pointer={pointer}
              depth={parallaxDepth(i, cards.length)}
            />
          ))}

          <motion.header
            className="scroll-spread__heading"
            style={{ scale: titleScale, opacity: titleOpacity }}
          >
            {title ? <h2>{title}</h2> : null}
            {subtitle ? <p>{subtitle}</p> : null}
          </motion.header>

          {hint ? (
            <motion.p className="scroll-spread__hint" style={{ opacity: hintOpacity }}>
              {hint}
            </motion.p>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default StackSpread;
