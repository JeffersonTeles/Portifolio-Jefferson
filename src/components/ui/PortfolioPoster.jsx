import { useLayoutEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const DEFAULT_DURATION = 3.6;
const AVATAR_URL = 'https://avatars.githubusercontent.com/u/70072903?v=4';

/**
 * Mosaic tiles: Jefferson's real project screenshots arranged like a poster
 * collage, plus the avatar as the center piece. Geometry is in % of the
 * (square) stage; `initialScale` drives the zoom-out parallax cascade.
 */
const DEFAULT_TILES = [
  {
    src: '/screenshot-maestria.png',
    name: 'Maestria Docente — TCC',
    x: 3,
    y: 5,
    w: 45,
    h: 42,
    initialScale: 1.9,
    revealDelay: 0.46,
  },
  {
    src: '/screenshot-casamento.png',
    name: 'Site de Casamento',
    x: 52,
    y: 5,
    w: 45,
    h: 42,
    initialScale: 2.05,
    revealDelay: 0.58,
  },
  {
    src: '/og-image.png',
    name: 'Telesseg — Landing Page',
    x: 3,
    y: 51,
    w: 45,
    h: 30,
    initialScale: 2.2,
    revealDelay: 0.7,
  },
  {
    src: '/screenshot-x11.png',
    name: 'Mouse X11 GUI',
    x: 52,
    y: 51,
    w: 45,
    h: 30,
    initialScale: 2.35,
    revealDelay: 0.82,
  },
  {
    src: AVATAR_URL,
    name: 'Jefferson Teles',
    x: 37,
    y: 24,
    w: 26,
    h: 26,
    circle: true,
    initialScale: 1.6,
    revealDelay: 1.05,
  },
];

// framer-motion 10 has no spring `visualDuration`; these stiffness/damping values
// approximate the original visualDuration: 4, bounce: 0.5 spring.
const DEFAULT_LOGO_SPRING = { type: 'spring', stiffness: 42, damping: 9, mass: 1 };

export function PortfolioPoster({
  title = 'Jefferson Teles',
  tiles = DEFAULT_TILES,
  duration = DEFAULT_DURATION,
  cameraScale = 1.14,
  fit = 0.96,
  depth = 1,
  logoBlur = 4,
  posterRadius = 0,
  background = 'radial-gradient(circle at 50% 28%, #1b130a, #050505 72%)',
  showReplay = true,
  logoSpring = DEFAULT_LOGO_SPRING,
  className,
}) {
  const stageRef = useRef(null);
  const [size, setSize] = useState(0);
  const [playKey, setPlayKey] = useState(0);
  const timeScale = duration / DEFAULT_DURATION;

  useLayoutEffect(() => {
    const element = stageRef.current;
    if (!element) return undefined;

    const update = () => {
      const bounds = element.getBoundingClientRect();
      setSize(Math.min(bounds.width, bounds.height) * fit);
    };

    update();
    const observer = new ResizeObserver(update);
    observer.observe(element);
    return () => observer.disconnect();
  }, [fit]);

  const logoTransition = {
    clipPath: { ...logoSpring, delay: 0.8 * timeScale },
    // A spring on `filter` overshoots below 0px and emits invalid blur() keyframes;
    // a tween reaches the same settle without the invalid frames.
    filter: { duration: 0.6 * Math.max(0.5, timeScale), delay: 0.8 * timeScale, ease: 'easeOut' },
  };

  const tileRadius = Math.max(6, Math.round(size * 0.022));

  return (
    <div
      ref={stageRef}
      className={`relative flex h-dvh w-full items-center justify-center overflow-hidden ${className ?? ''}`}
      style={{ background }}
    >
      {size > 0 ? (
        <motion.div
          key={playKey}
          className="relative"
          style={{
            width: size,
            height: size,
            borderRadius: posterRadius,
            transformOrigin: 'center',
          }}
          initial={{ scale: cameraScale, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration, ease: [0.33, 0, 0.2, 1] }}
        >
          {tiles.map((tile, index) => (
            <motion.img
              key={tile.src}
              src={tile.src}
              alt={tile.name}
              draggable={false}
              className="pointer-events-none absolute select-none"
              style={{
                left: `${tile.x}%`,
                top: `${tile.y}%`,
                width: `${tile.w}%`,
                height: `${tile.h}%`,
                objectFit: 'cover',
                borderRadius: tile.circle ? '50%' : tileRadius,
                border: tile.circle
                  ? '3px solid rgba(226, 166, 61, 0.65)'
                  : '1px solid rgba(255, 255, 255, 0.08)',
                boxShadow: '0 18px 50px -18px rgba(0, 0, 0, 0.8)',
                zIndex: tile.circle ? 10 : index,
                transformOrigin: 'center',
                willChange: 'transform, opacity',
              }}
              initial={{
                opacity: 0,
                scale: 1 + (tile.initialScale - 1) * depth,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                scale: { duration, ease: [0.16, 1, 0.3, 1] },
                opacity: {
                  duration: 0.7 * timeScale,
                  delay: tile.revealDelay * timeScale,
                  ease: 'easeOut',
                },
              }}
            />
          ))}

          <motion.div
            className="pointer-events-none absolute z-20 flex items-center justify-center"
            style={{
              left: '18%',
              right: '18%',
              top: '63%',
              height: '9%',
              borderRadius: 999,
              background: 'rgba(5, 5, 5, 0.55)',
              backdropFilter: 'blur(6px)',
              WebkitBackdropFilter: 'blur(6px)',
              border: '1px solid rgba(226, 166, 61, 0.35)',
              willChange: 'clip-path, filter',
            }}
            initial={{
              opacity: 1,
              clipPath: 'inset(0% 0% 100% 0%)',
              filter: `blur(${logoBlur}px)`,
            }}
            animate={{
              clipPath: 'inset(0% 0% 0% 0%)',
              filter: 'blur(0px)',
            }}
            transition={logoTransition}
          >
            <span
              className="font-heading font-bold text-accent"
              style={{
                fontSize: Math.max(12, size * 0.042),
                letterSpacing: '0.04em',
                textShadow: '0 2px 18px rgba(0, 0, 0, 0.6)',
              }}
            >
              {title}
            </span>
          </motion.div>
        </motion.div>
      ) : null}

      {showReplay ? (
        <button
          type="button"
          onClick={() => setPlayKey((key) => key + 1)}
          aria-label="Replay poster intro"
          className="absolute top-4 left-4 z-10 flex size-10 items-center justify-center rounded-full bg-white/10 text-sm font-medium text-white backdrop-blur-md transition hover:bg-white/20 active:scale-[0.98]"
        >
          <ReplayIcon className="size-4" />
        </button>
      ) : null}
    </div>
  );
}

const ReplayIcon = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M19.933 13.041a8 8 0 1 1 -9.925 -8.788c3.899 -1 7.935 1.007 9.425 4.747" />
      <path d="M20 4v5h-5" />
    </svg>
  );
};

export default PortfolioPoster;
