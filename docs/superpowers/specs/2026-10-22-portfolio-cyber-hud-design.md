# Portfolio Cyber HUD Redesign

**Date:** 2026-10-22  
**Status:** Draft for review  
**Project:** Portifolio-Jefferson (Next.js 15 App Router)

## Intent

Rewrite the visual system of Jefferson Teles’s portfolio into a **Cyber HUD** aesthetic — OLED dark, subtle cyan neon, light glassmorphism, terminal/HUD about — while keeping production stack, real content, SEO, and deploy path intact.

**Audience:** recruiters and hiring managers scanning in ~30 seconds for a junior Software Engineer / QA / N3 support profile.

**Success criteria:**

- First viewport reads as brand-forward and futuristic without generic neon AI-slop.
- Recruiter path: hero → projects → proof (experience/skills) → contact ≤ 3 clicks.
- `npm run check`, `npm test`, and `npm run build` pass.
- Deployable on Vercel with existing env (`NEXT_PUBLIC_SITE_URL`, `WEB3FORMS_KEY`).
- No invented metrics, clients, or results; only data from `src/config/*`.

## Non-goals

- Vite rewrite.
- Full cyberpunk overload (magenta grids everywhere, custom cursor, heavy glitch).
- Rewriting MDX blog content or post pipeline.
- Changing project facts, experience bullets, or contact API contract.
- Unrelated work outside this portfolio repo.

## Phase 1 audit (baseline)

| Pillar | Score | Notes |
|--------|-------|--------|
| Design & UI | 6.5/10 | Mature editorial dark; monochrome; weak “future” presence |
| UX & Nav | 7.5/10 | Clear journey; home dense for 30s scan |
| Performance & Code | 8/10 | Next 15, TS strict, CSS Modules; no Tailwind |
| Professional impact | 6/10 | Real work; headline undersells Software Engineer |

**Average ~7.0/10** — solid product, weak futuristic showcase.

## Decisions locked

1. **Stack:** Keep Next.js 15 App Router; add Tailwind CSS + keep Framer Motion.
2. **Visual intensity:** Cyber HUD (not full cyberpunk, not minimal OLED-only).
3. **Routes:** Keep `/`, `/projetos`, `/projetos/[slug]`, `/about`, `/contact`, `/blog`, `/api/contact`.
4. **Content source of truth:** `src/config/site.ts`, `profile.ts`, `projects.ts`, experience in `profile.ts`.

## Design system

### Color

| Token | Value | Use |
|-------|-------|-----|
| `--bg` | `#050508` | Page background (OLED) |
| `--surface` | `#0c0e14` | Elevated panels |
| `--border` | `rgba(34, 211, 238, 0.15)` | Glass edges |
| `--accent` | `#22d3ee` | Cyan neon CTAs, focus, HUD labels |
| `--text` | `#f4f4f5` | Primary text |
| `--text-muted` | `#a1a1aa` | Secondary |
| Magenta | hover-only, rare | Interactive accents — not a second brand color |

No purple-on-white gradients. Glow is restrained (CTA hover + focus rings).

### Typography

- **Display:** Space Grotesk (hero title, section heads).
- **Body:** Geist Sans via `next/font`.
- **Mono / HUD:** JetBrains Mono (skills terminal, kicker labels, code-like metadata).
- **Theme:** Dark-first Cyber HUD is the product default. Keep `data-theme` light as a secondary readable mode (same cyan accent, no neon glow requirement); do not design light as a second brand system.

### Shape & glass

- Glass panels: `backdrop-blur` + 1px cyan-tint border + translucent fill.
- Prefer lines, grid, and HUD frames over card stacks.
- Cards only where interaction needs a container (projects, tilt).
- Radius: small–medium (6–12px); avoid pill clusters.

### Motion

| Surface | Behavior |
|---------|----------|
| Hero | Staggered fade/slide; light glitch on name (1–2 cycles on load) |
| Project cards | Magnetic tilt (max ~8°) on pointer; reset on leave |
| Sections | Scroll reveal once; no endless loops |
| CTA | Neon glow intensify on hover |
| Reduced motion | Static hero, no tilt, no glitch |

Motion stays in dedicated client components; content remains visible without JS.

## Information architecture

### Home (`/`)

1. **CyberHero** — brand name hero-level; one headline; one support line; CTA group (projects + resume); availability from `profile`.
2. **Journey** — slim experience strip.
3. **ProjectBento** — glass bento/grid of 4 projects with tilt cards linking to `/projetos/[slug]`.
4. **SkillsTerminal** — HUD listing real skills only (React, Next.js, Java, Python, C++, Supabase, Docker, Linux, QA automation, etc.).
5. **ContactPulse** — minimal CTA into `/contact` or social links.

### Other routes

- **`/projetos`:** index with glass cards.
- **`/projetos/[slug]`:** keep case-study structure; restyle chrome to Cyber HUD.
- **`/about`:** HUD panels for trajectory, education, principles, tech grid.
- **`/contact`:** existing Web3Forms server flow; success state “Data Transfer Complete”.
- **`/blog`:** visual restyle only; MDX pipeline unchanged. Blog stays out of primary nav unless requested later.

### Layout chrome

- **Navbar:** glass, compact; Projetos / Sobre / Contato; theme toggle if kept.
- **Footer:** minimal links + social from `siteConfig`.

## Component map

| Component | Role |
|-----------|------|
| `CyberHero` | First viewport |
| `GlowButton` | Primary/secondary neon CTAs |
| `MagneticTiltCard` | Project interaction |
| `GlassPanel` | Shared glass surface |
| `HudLabel` | Mono kicker / status |
| `SkillsTerminal` | Skills HUD |
| Contact form restyle | “Data Transfer Complete” success |
| `ThemeProvider`, `MotionProvider`, contact API | Keep and adapt |

## Technical approach

1. Add Tailwind compatible with current PostCSS/Next 15; content paths cover `app/` and `src/`.
2. Map design tokens into CSS variables in `app/globals.css`; Tailwind theme extends those tokens.
3. Migrate home and layout chrome first; then projects, about, contact; blog chrome last.
4. Prefer Tailwind utilities; CSS Modules only for complex tilt/perspective rules.
5. Keep TypeScript strict, lint `--max-warnings 0`, and existing tests.
6. Copy shift: position as Software Engineer júnior with support/QA/automation depth — no invented titles or employers.

## Error handling & a11y

- Focus rings use cyan accent; keyboard nav preserved.
- Contact errors stay server-validated; success animation is cosmetic.
- Images keep `alt` from project config.
- Cyan is accent, not body text; body contrast must remain readable on OLED.

## Testing

- `npm test` must pass (update selectors only if tests assert old class names).
- Manual: first viewport mobile + desktop; tilt off under reduced motion; contact success path; `npm run check` + `npm run build`.

## Rollout

1. Spec approval (this doc).
2. Implementation plan via writing-plans.
3. Implement per plan (feature branch preferred).
4. Verify + deploy on Vercel with existing env vars.

## Resolved defaults

| Topic | Resolution |
|-------|------------|
| Vite vs Next | Next 15 + Tailwind |
| Intensity | Cyber HUD |
| Blog in primary nav | Out unless requested |
| Custom cursor | Out of scope |
