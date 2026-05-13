import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { FiGithub, FiLinkedin, FiMail, FiArrowDown, FiTerminal } from 'react-icons/fi';
import { SiWhatsapp } from 'react-icons/si';

const TYPING_LINES = [
  'Desenvolvedor Full Stack',
  'Especialista em IA & Automação',
  'Arquiteto de Sistemas Inteligentes',
];

const GlitchText = ({ text }) => {
  const [glitching, setGlitching] = useState(false);

  useEffect(() => {
    const trigger = () => {
      setGlitching(true);
      setTimeout(() => setGlitching(false), 400);
    };
    const interval = setInterval(trigger, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className={`relative inline-block ${glitching ? 'glitch' : ''}`} data-text={text}>
      {text}
      <style>{`
        .glitch {
          animation: glitch 0.4s steps(2) forwards;
        }
        .glitch::before,
        .glitch::after {
          content: attr(data-text);
          position: absolute;
          inset: 0;
          opacity: 0.8;
        }
        .glitch::before {
          color: #00d9ff;
          animation: glitch-top 0.4s steps(2) forwards;
          clip-path: polygon(0 0, 100% 0, 100% 40%, 0 40%);
        }
        .glitch::after {
          color: #9d4edd;
          animation: glitch-bot 0.4s steps(2) forwards;
          clip-path: polygon(0 60%, 100% 60%, 100% 100%, 0 100%);
        }
        @keyframes glitch {
          0%   { transform: translate(0); }
          25%  { transform: translate(-3px, 1px); }
          50%  { transform: translate(3px, -1px); }
          75%  { transform: translate(-2px, 2px); }
          100% { transform: translate(0); }
        }
        @keyframes glitch-top {
          0%   { transform: translate(0); }
          25%  { transform: translate(4px, 0); }
          75%  { transform: translate(-4px, 0); }
          100% { transform: translate(0); }
        }
        @keyframes glitch-bot {
          0%   { transform: translate(0); }
          25%  { transform: translate(-4px, 0); }
          75%  { transform: translate(4px, 0); }
          100% { transform: translate(0); }
        }
        @keyframes scanline {
          0%   { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }
        @keyframes blink-cursor {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
        @keyframes flicker {
          0%, 100% { opacity: 1; }
          92%       { opacity: 1; }
          93%       { opacity: 0.4; }
          94%       { opacity: 1; }
          96%       { opacity: 0.6; }
          97%       { opacity: 1; }
        }
        .terminal-cursor {
          animation: blink-cursor 1s step-end infinite;
        }
        .neon-flicker {
          animation: flicker 6s infinite;
        }
        .holo-border {
          background: linear-gradient(90deg, #00d9ff22, #9d4edd44, #00d9ff22);
          background-size: 200% 100%;
          animation: shimmer 3s linear infinite;
        }
        @keyframes shimmer {
          0%   { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
    </span>
  );
};

const TypingCycle = () => {
  const [lineIdx, setLineIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [displayed, setDisplayed] = useState('');

  useEffect(() => {
    const current = TYPING_LINES[lineIdx];
    let timeout;

    if (!deleting && charIdx <= current.length) {
      setDisplayed(current.slice(0, charIdx));
      timeout = setTimeout(() => setCharIdx(c => c + 1), 45);
    } else if (!deleting && charIdx > current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && charIdx > 0) {
      setDisplayed(current.slice(0, charIdx));
      timeout = setTimeout(() => setCharIdx(c => c - 1), 25);
    } else if (deleting && charIdx === 0) {
      setDeleting(false);
      setLineIdx(i => (i + 1) % TYPING_LINES.length);
    }

    return () => clearTimeout(timeout);
  }, [charIdx, deleting, lineIdx]);

  return (
    <span className="font-mono text-neon-cyan">
      {displayed}
      <span className="terminal-cursor text-neon-cyan">▋</span>
    </span>
  );
};

const DataStream = ({ x, delay }) => (
  <motion.div
    className="absolute top-0 w-px pointer-events-none"
    style={{ left: `${x}%`, opacity: 0.15 }}
    initial={{ scaleY: 0, originY: 0 }}
    animate={{ scaleY: [0, 1, 1, 0] }}
    transition={{ duration: 3, delay, repeat: Infinity, repeatDelay: Math.random() * 4 }}
  >
    <div
      className="w-full bg-gradient-to-b from-transparent via-neon-cyan to-transparent"
      style={{ height: '120px' }}
    />
  </motion.div>
);

const HexGrid = () => (
  <svg
    className="absolute inset-0 w-full h-full pointer-events-none"
    style={{ opacity: 0.04 }}
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <pattern id="hex" x="0" y="0" width="56" height="48" patternUnits="userSpaceOnUse">
        <polygon
          points="28,2 52,14 52,38 28,50 4,38 4,14"
          fill="none"
          stroke="#00d9ff"
          strokeWidth="0.8"
        />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#hex)" />
  </svg>
);

const StatBadge = ({ value, label, delay }) => (
  <motion.div
    className="flex flex-col items-center"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.6 }}
  >
    <span className="text-2xl sm:text-3xl font-bold text-neon-cyan neon-flicker">{value}</span>
    <span className="text-xs text-gray-500 uppercase tracking-widest mt-1">{label}</span>
  </motion.div>
);

const Hero = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-300, 300], [4, -4]);
  const rotateY = useTransform(mouseX, [-300, 300], [-4, 4]);

  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  const socialLinks = [
    { icon: FiGithub,    href: 'https://github.com/jefferson-teles',           label: 'GitHub',    color: 'hover:text-white hover:drop-shadow-[0_0_8px_#fff]' },
    { icon: FiLinkedin,  href: 'https://linkedin.com/in/jefferson-teles',       label: 'LinkedIn',  color: 'hover:text-neon-blue hover:drop-shadow-[0_0_8px_#4361ee]' },
    { icon: SiWhatsapp,  href: '#',                                              label: 'WhatsApp',  color: 'hover:text-neon-cyan hover:drop-shadow-[0_0_8px_#00d9ff]' },
    { icon: FiMail,      href: 'mailto:jefferson@example.com',                  label: 'Email',     color: 'hover:text-neon-purple hover:drop-shadow-[0_0_8px_#9d4edd]' },
  ];

  const dataStreams = [8, 18, 27, 38, 52, 63, 74, 85, 91];

  return (
    <section
      id="hero"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-4"
    >
      {/* Hex grid background */}
      <HexGrid />

      {/* Scanline sweep */}
      <div
        className="absolute inset-x-0 h-32 pointer-events-none z-0"
        style={{
          background: 'linear-gradient(to bottom, transparent, rgba(0,217,255,0.03), transparent)',
          animation: 'scanline 8s linear infinite',
        }}
      />

      {/* Data stream columns */}
      {dataStreams.map((x, i) => (
        <DataStream key={i} x={x} delay={i * 0.4} />
      ))}

      {/* Ambient glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-neon-cyan/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-neon-purple/8 rounded-full blur-[100px] pointer-events-none" />

      {/* Corner decorations */}
      <div className="absolute top-24 left-6 w-12 h-12 border-l-2 border-t-2 border-neon-cyan/40 pointer-events-none" />
      <div className="absolute top-24 right-6 w-12 h-12 border-r-2 border-t-2 border-neon-cyan/40 pointer-events-none" />
      <div className="absolute bottom-16 left-6 w-12 h-12 border-l-2 border-b-2 border-neon-cyan/40 pointer-events-none" />
      <div className="absolute bottom-16 right-6 w-12 h-12 border-r-2 border-b-2 border-neon-cyan/40 pointer-events-none" />

      <div className="max-w-5xl mx-auto w-full relative z-10">

        {/* Terminal badge */}
        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-neon-cyan/30 bg-neon-cyan/5 text-neon-cyan text-xs font-mono tracking-widest">
            <FiTerminal size={12} />
            <span>SISTEMA ONLINE • v2.0.26</span>
            <span className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse" />
          </div>
        </motion.div>

        {/* Name with 3D tilt */}
        <motion.div
          className="text-center mb-4"
          style={{ rotateX, rotateY, perspective: 1000 }}
        >
          <motion.h1
            className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-none mb-2"
            style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #00d9ff 40%, #9d4edd 70%, #ffffff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: 'none',
            }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <GlitchText text="Jefferson" />
          </motion.h1>
          <motion.h1
            className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-none"
            style={{
              background: 'linear-gradient(135deg, #9d4edd 0%, #00d9ff 60%, #ffffff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            Teles
          </motion.h1>
        </motion.div>

        {/* Typing subtitle */}
        <motion.div
          className="flex justify-center items-center h-12 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <span className="text-lg sm:text-xl lg:text-2xl font-mono">
            <TypingCycle />
          </span>
        </motion.div>

        {/* Holographic divider */}
        <motion.div
          className="holo-border h-px max-w-md mx-auto mb-8"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        />

        {/* Description */}
        <motion.p
          className="text-gray-400 text-base sm:text-lg max-w-xl mx-auto text-center mb-10 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          Construindo soluções com{' '}
          <span className="text-neon-cyan">inteligência artificial</span>,{' '}
          <span className="text-neon-purple">automação</span> e tecnologia escalável.
          Transformando ideias em sistemas reais.
        </motion.p>

        {/* Stats row */}
        <motion.div
          className="flex justify-center gap-10 sm:gap-16 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <StatBadge value="3+" label="Anos de código" delay={1.3} />
          <div className="w-px bg-neon-cyan/20 self-stretch" />
          <StatBadge value="10+" label="Projetos entregues" delay={1.4} />
          <div className="w-px bg-neon-cyan/20 self-stretch" />
          <StatBadge value="5+" label="Tecnologias core" delay={1.5} />
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.6 }}
        >
          <ScrollLink to="projects" smooth offset={-80} spy>
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: '0 0 40px rgba(0,217,255,0.5), 0 0 80px rgba(0,217,255,0.2)',
              }}
              whileTap={{ scale: 0.97 }}
              className="relative px-8 py-4 font-bold text-dark-900 rounded-lg cursor-pointer overflow-hidden group"
              style={{ background: 'linear-gradient(135deg, #00d9ff, #4361ee)' }}
            >
              <span className="relative z-10 tracking-wide">VER PROJETOS</span>
              <motion.div
                className="absolute inset-0 bg-white/20"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.4 }}
              />
            </motion.button>
          </ScrollLink>

          <ScrollLink to="contact" smooth offset={-80} spy>
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: '0 0 40px rgba(157,78,221,0.4)',
              }}
              whileTap={{ scale: 0.97 }}
              className="relative px-8 py-4 font-bold text-neon-purple border-2 border-neon-purple rounded-lg cursor-pointer overflow-hidden group tracking-wide"
            >
              ENTRAR EM CONTATO
              <motion.div
                className="absolute inset-0 bg-neon-purple/10"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </ScrollLink>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex justify-center gap-8 mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
        >
          {socialLinks.map(({ icon: Icon, href, label, color }, i) => (
            <motion.a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              title={label}
              className={`text-gray-500 text-xl transition-all duration-300 ${color}`}
              whileHover={{ scale: 1.3, y: -4 }}
              whileTap={{ scale: 0.9 }}
            >
              <Icon />
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="flex flex-col items-center gap-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ScrollLink to="about" smooth offset={-80} spy>
            <button className="flex flex-col items-center gap-1 text-gray-600 hover:text-neon-cyan transition-colors duration-300 cursor-pointer group">
              <span className="text-xs font-mono tracking-widest uppercase group-hover:text-neon-cyan">scroll</span>
              <FiArrowDown className="text-lg" />
            </button>
          </ScrollLink>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;