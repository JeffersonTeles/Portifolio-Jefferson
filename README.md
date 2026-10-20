# Jefferson Teles — Suporte, automação e frontend

Portfólio de Jefferson Teles construído com Next.js App Router, TypeScript, CSS nativo e MDX. A interface usa um sistema visual editorial com contraste claro, um único acento laranja e movimento reservado para a narrativa principal.

## Rodar localmente

```bash
npm ci
cp .env.example .env
npm run dev
```

A aplicação fica disponível em `http://localhost:3000` por padrão.

### Verificações

```bash
npm run check
npm run build
npm audit --omit=dev --audit-level=high
```

`npm run typecheck` executa `next typegen` antes do TypeScript para funcionar também em um checkout sem `.next`.

## Rotas

- `/`: home com hero, percurso, projetos, método e contato.
- `/projetos`: índice dos projetos.
- `/projetos/[slug]`: case study com contexto, highlights e link externo.
- `/about`: trajetória, base técnica e princípios.
- `/contact`: canais de contato e formulário server-side.

## Fontes de verdade

- `src/config/site.ts`: identidade, URL pública, e-mail, redes e navegação.
- `src/config/projects.ts`: projetos, descrições, imagens, highlights e URLs externas.
- `content/posts/*.mdx`: conteúdo publicado do blog.
- `public/`: screenshots dos projetos, currículo e imagem social.

Não adicione métricas, clientes, cargos ou resultados sem confirmação. O texto deve distinguir fatos observáveis de Goals ou Direções de trabalho.

## Design System

- Tema dark-first com alternativa light via `data-theme`.
- Tokens semânticos em `app/globals.css`; componentes de página usam CSS Modules.
- `Signal Systems`: fundo de carvão, superfícies quentes, texto off-white e um acento laranja.
- Forma predominante: lines, grid e divisores; cards são usados apenas quando há hierarquia real.
- Motion fica isolado no `PortfolioIntro`, `DepthProjectCarousel`, `ProjectFlipCard`, `ThemeToggle`, `WarmTooltip` e `ScrollProgress`, com `useReducedMotion` e fallback estático.
- `Reveal` é um wrapper sem estado invisível para preservar conteúdo sem JavaScript.

## Projetos

Os quatro registros atuais são TELESSEG, Maestria Docente, Jefferson & Beatriz e Attack Shark X11. URLs e descrições vivem em `src/config/projects.ts`; as páginas `/projetos` e `/projetos/[slug]` são geradas a partir dessa configuração.

## Blog

Crie um arquivo `.mdx` em `content/posts` com o frontmatter:

```yaml
---
title: Título do post
description: Resumo curto para listagem e SEO.
date: 2026-09-24
tags:
  - frontend
cover: /images/capa.png
coverAlt: Descrição da imagem
draft: false
---
```

Widgets interativos ficam em `src/components/widgets` e precisam ser registrados em `src/components/mdx/MDXComponents.tsx`.

## Contato

O formulário usa Web3Forms no servidor. Defina `WEB3FORMS_KEY` no ambiente de execução; a chave nunca deve ser exposta em código cliente. `NEXT_PUBLIC_SITE_URL` deve ser a URL pública usada em metadata, sitemap, RSS e links canônicos.

## Stack

- Next.js 15 e React 18
- TypeScript strict
- CSS Custom Properties, CSS Modules e CSS nativo
- `@mdx-js/mdx`, `gray-matter` e Shiki
- Framer Motion apenas para motion interativo e progresso de leitura
- Lucide React para ícones

## Deploy

O projeto está preparado para Vercel. Configure `NEXT_PUBLIC_SITE_URL` e `WEB3FORMS_KEY` no ambiente do deploy. O domínio canônico deve ser confirmado antes de trocar o fallback em `src/config/site.ts`.
