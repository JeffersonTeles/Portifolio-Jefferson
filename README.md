# Jefferson Teles — Engenharia de Software, QA & Automação

[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Strict-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Deploy](https://img.shields.io/badge/Deploy-Vercel-000000?logo=vercel)](https://vercel.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

Portfólio profissional de **Jefferson Teles**, estudante do último ano de Engenharia de Software e Analista de Suporte/QA com sólida vivência em testes de integração de APIs, automações inteligentes e ecossistema Linux. 

Construído com Next.js 15 App Router, TypeScript strict, CSS Modules e MDX, utilizando um sistema visual editorial com contraste refinado (dark-first), tipografia calibrada e transições acessíveis com respeito estrito a `prefers-reduced-motion`.

---

## 🏛️ Arquitetura do Projeto

```text
├── app/                       # Next.js 15 App Router (rotas, layouts, metadados)
│   ├── about/                 # Trajetória, princípios e formação técnica
│   ├── contact/               # Formulário seguro server-side (Web3Forms)
│   ├── projetos/              # Vitrine e páginas dinâmicas de case studies
│   └── globals.css            # Tokens semânticos e Signal Systems
├── src/
│   ├── components/            # Componentes visuais isolados e widgets MDX
│   └── config/                # Fontes únicas de verdade (site.ts, projects.ts)
├── content/posts/             # Artigos técnicos escritos em MDX com Shiki
└── public/                    # Assets estáticos, ícones e currículo em PDF
```

---

## 🚀 Como Executar Localmente

```bash
# 1. Instalar dependências
npm ci

# 2. Configurar variáveis de ambiente
cp .env.example .env

# 3. Iniciar servidor local
npm run dev
```

A aplicação fica disponível em `http://localhost:3000` por padrão.

---

## 🧪 Verificações de Qualidade e QA

Este repositório segue rigorosos critérios de qualidade antes de qualquer integração ou deploy:

```bash
# Validação de integridade e checagens completas
npm run check

# Execução da suíte de testes automatizados
npm test

# Validação rigorosa de tipos TypeScript (executa next typegen)
npm run typecheck

# Build de produção otimizado
npm run build

# Auditoria de segurança de dependências
npm audit --omit=dev --audit-level=high
```

---

## 🧭 Rotas Principais

- `/`: Home com hero editorial, percurso, projetos em destaque, metodologia e contato.
- `/projetos`: Catálogo completo de projetos com filtros e visão arquitetural.
- `/projetos/[slug]`: Estudo de caso aprofundado com contexto de negócio, desafios superados e links.
- `/about`: Trajetória profissional, stack e formação em Engenharia de Software.
- `/contact`: Canais de contato direto com formulário processado exclusivamente no servidor.

---

## 🎨 Design System: Signal Systems

- **Tema Dark-First:** Fundo de carvão profundo, superfícies quentes e tipografia legível off-white, com suporte a modo claro via atributo `data-theme`.
- **Acento Estratégico:** Destaques pontuais em laranja internacional para guiar o olhar sem ruído visual.
- **Micro-Motion Consciente:** Animações concentradas no `PortfolioIntro`, carrossel de profundidade e leitor de progresso, com fallback estático automático via `useReducedMotion`.
- **Acessibilidade:** Suporte a leitores de tela, navegação por teclado e componente `Reveal` sem estado invisível para usuários sem JavaScript.

---

## 🛠️ Stack Tecnológica

- **Core:** Next.js 15, React 18, TypeScript (Strict Mode)
- **Estilização:** CSS Custom Properties, CSS Modules nativo
- **Conteúdo:** `@mdx-js/mdx`, `gray-matter`, `shiki` (syntax highlighting)
- **Motion:** `framer-motion` (motion interativo e barra de progresso)
- **Ícones:** `lucide-react`
- **Infraestrutura:** Vercel (Edge Network e Serverless Functions)

---

## 📄 Licença

Distribuído sob a licença MIT. Consulte `LICENSE` para mais informações.
