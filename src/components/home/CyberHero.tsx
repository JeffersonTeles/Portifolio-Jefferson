'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDownRight, ArrowRight } from 'lucide-react';
import { ResumeLink } from '@/components/ui/ResumeLink';
import { HudLabel } from '@/components/ui/HudLabel';
import { profile } from '@/config/profile';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export function CyberHero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden px-6 py-24 md:py-32">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          variants={reduceMotion ? undefined : container}
          initial={reduceMotion ? false : 'hidden'}
          animate={reduceMotion ? false : 'show'}
          className="flex flex-col gap-8"
        >
          <HudLabel>Jefferson Teles / Software Engineer</HudLabel>
          <motion.h1
            variants={reduceMotion ? undefined : item}
            className="font-display text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl"
          >
            Jefferson Teles
            <br />
            <span className="text-accent">Software Engineer</span>
          </motion.h1>
          <motion.p
            variants={reduceMotion ? undefined : item}
            className="max-w-2xl text-lg text-muted md:text-xl"
          >
            Do diagnóstico técnico à construção de interfaces. Suporte N3, automação industrial e
            desenvolvimento frontend — transformando processos complexos em sistemas claros.
          </motion.p>
          <motion.ul
            variants={reduceMotion ? undefined : item}
            className="flex flex-wrap gap-3 font-mono text-xs text-muted"
            aria-label="Situação profissional"
          >
            <li className="rounded-full border border-border px-3 py-1">{profile.location}</li>
            <li className="rounded-full border border-border px-3 py-1">{profile.availability}</li>
            <li className="rounded-full border border-border px-3 py-1">{profile.goal}</li>
            <li className="rounded-full border border-border px-3 py-1">{profile.workMode}</li>
          </motion.ul>
          <motion.div
            variants={reduceMotion ? undefined : item}
            className="flex flex-wrap items-center gap-4"
          >
            <a href="#projetos" className="btn btn--primary">
              Ver meu trabalho <ArrowDownRight size={16} aria-hidden />
            </a>
            <ResumeLink className="btn btn--ghost" />
            <Link href="/about" className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent">
              Sobre Jefferson <ArrowRight size={15} aria-hidden />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
