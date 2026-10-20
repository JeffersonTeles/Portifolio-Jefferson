# Contributing

## Prerequisites

- Node.js 18.18 or newer
- npm
- Git

## Setup

```bash
npm ci
cp .env.example .env
npm run dev
```

The local application runs at `http://localhost:3000` by default.

## Scripts

- `npm run dev` starts the Next.js development server.
- `npm run build` creates the production build.
- `npm start` starts the production server.
- `npm run lint` runs ESLint with warnings treated as errors.
- `npm run typecheck` generates Next route types and runs strict TypeScript validation.
- `npm run check` runs lint and typecheck together.

## Architecture

```text
app/                  Next.js routes, metadata and HTTP adapters
content/posts/        MDX source of truth for published content
public/               Static public assets
src/components/       Shared UI and feature components
src/config/           Public site configuration
src/lib/              Server-only and isomorphic helpers
src/types/            Shared TypeScript contracts
```

Keep pages focused on metadata, data loading and composition. Put reusable visual behavior in `src/components`, public identity values in `src/config/site.ts`, and filesystem access in server-only modules such as `src/lib/posts.server.ts`.

Client components must start with `'use client'` and should be limited to interactive behavior. Route handlers must keep secrets server-side and validate untrusted input.

## Adding Posts

Create `content/posts/<slug>.mdx` with `title`, `description`, `date`, `tags` and optional `cover`, `coverAlt`, `author`, `readingTime` and `draft` frontmatter.

Interactive MDX widgets belong in `src/components/widgets` and must be registered in `src/components/mdx/MDXComponents.tsx`.

## Validation

Before opening a pull request:

```bash
npm run check
npm run build
npm audit --omit=dev --audit-level=high
```

## Accessibility

- Use semantic HTML.
- Preserve visible focus states.
- Provide labels and alternative text.
- Respect reduced-motion preferences.
- Maintain WCAG AA contrast in both themes.

## Commit Convention

Use concise Conventional Commit messages such as `feat:`, `fix:`, `docs:`, `refactor:` and `chore:`.
