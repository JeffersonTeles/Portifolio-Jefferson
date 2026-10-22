# Portfolio Cyber HUD Redesign - Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform the Jefferson Teles portfolio (Portifolio-Jefferson, Next.js 15 App Router) into a production-ready Cyber HUD aesthetic while preserving real content, routes, deploy path, and quality gates.

**Architecture:** Spec-first redesign layered on the existing Next.js App Router codebase.

**Tech Stack:** Next.js 15, React 18, TypeScript strict, Tailwind CSS, Framer Motion 11, next/font/google.

**Spec:** docs/superpowers/specs/2026-10-22-portfolio-cyber-hud-design.md

## Tasks

### Task 1: Scaffold Tailwind and migrate font stack
- [ ] Write failing design-system test
- [ ] Run test to verify it fails
- [ ] Install Tailwind and write config
- [ ] Migrate fonts in app/layout.tsx
- [ ] Update design token values in globals.css
- [ ] Run test to verify it passes
- [ ] Commit

### Task 2: Apply Cyber HUD design tokens to globals.css
- [ ] Replace dark theme tokens
- [ ] Replace light theme tokens
- [ ] Add shared utility classes
- [ ] Run npm run check
- [ ] Commit

### Task 3: Restyle layout chrome to glass HUD
- [ ] Update navbar classes to glass
- [ ] Update footer
- [ ] Update scroll progress accent
- [ ] Run npm run check
- [ ] Commit

### Task 4: Create Cyber HUD primitives
- [ ] Write failing source-presence tests
- [ ] Implement primitives
- [ ] Run tests + npm run check
- [ ] Commit

### Task 5: Build CyberHero and wire into home hero composition
- [ ] Write failing source test
- [ ] Implement CyberHero
- [ ] Re-point home hero to CyberHero
- [ ] Run npm run check, npm test, npm run build
- [ ] Commit

### Task 6: Add projects Bento + magnetic tilt + case-study chrome
- [ ] Write failing test for ProjectBento
- [ ] Implement ProjectBento
- [ ] Wire home composition and /projetos
- [ ] Restyle /projetos/[slug] chrome
- [ ] Run gates
- [ ] Commit

### Task 7: Add SkillsTerminal and slim Journey; restyle About
- [ ] Write failing test for SkillsTerminal
- [ ] Implement terminal
- [ ] Slim Journey
- [ ] Run gates
- [ ] Commit

### Task 8: Contact redesign - ContactPulse + Data Transfer Complete success
- [ ] Write failing test for success copy
- [ ] Implement success/loading copy + HUD styling
- [ ] Run gates
- [ ] Commit

### Task 9: Wire home composition and remove superseded home components
- [ ] Recompose app/page.tsx home sections
- [ ] Delete superseded home components
- [ ] Grep and run npm run check
- [ ] Commit

### Task 10: Verification gates and regression fixes
- [ ] Run full gate suite
- [ ] Fix failures
- [ ] Manual smoke checklist
- [ ] Final commit

## Execution Handoff

**Plan complete and saved to docs/superpowers/plans/2026-10-22-portfolio-cyber-hud-plan.md. Please review the plan.**

Which execution approach should we use?

- **Subagent-driven** - a fresh subagent implements each task and a fresh reviewer checks it before the next one starts.
- **Native** - I implement every task myself in this session, then one fresh reviewer checks the whole branch.

For this plan I recommend **subagent-driven**.
