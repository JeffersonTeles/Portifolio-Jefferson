# QA NIGHT LOG — QUALIDADE, TESTES E CONFIABILIDADE

- **Data:** 2026-10-20
- **Projeto:** Portfólio Jefferson Teles (`portfolio-jefferson`)
- **Responsável:** Agente Autônomo de Engenharia & QA
- **Ambiente:** Node.js v22.23.3, Next.js 15.5.28, TypeScript 5.5.0

---

## 1. Escopo Avaliado

- Páginas e rotas estáticas: `/`, `/projetos`, `/projetos/[slug]`, `/about`, `/contact`, `/blog`, `/blog/[slug]`, `/robots.txt`, `/rss.xml`, `/sitemap.xml`.
- Rota dinâmica de API: `app/api/contact/route.ts`.
- Módulos utilitários e fontes da verdade: `src/lib/utils.ts`, `src/lib/posts.server.ts`, `src/config/projects.ts`, `src/config/site.ts`, `src/config/profile.ts`.
- Componentes com comportamento de estado: `ThemeProvider`, `ThemeToggle`, `ProjectFlipCard`, `Navbar`.

---

## 2. Matriz de Testes Executados

| ID | Cenário | Alvo | Resultado |
|---|---|---|---|
| TC-01 | Rejeição de payload > 16KB na API de contato | `app/api/contact/route.ts` | **APROVADO** (HTTP 413) |
| TC-02 | Rejeição de JSON malformado na API de contato | `app/api/contact/route.ts` | **APROVADO** (HTTP 400) |
| TC-03 | Validação de campos obrigatórios e formato de email | `app/api/contact/route.ts` | **APROVADO** (HTTP 400) |
| TC-04 | Resposta graciosa sem credencial upstream de envio | `app/api/contact/route.ts` | **APROVADO** (HTTP 500 amigável) |
| TC-05 | Ordenação decrescente por data dos posts do blog | `src/lib/posts.server.ts` | **APROVADO** |
| TC-06 | Validação de frontmatter e metadados de posts MDX | `src/lib/posts.server.ts` | **APROVADO** |
| TC-07 | Leitura de post individual e estrutura de sumário | `src/lib/posts.server.ts` | **APROVADO** |
| TC-08 | Rejeição de slugs inválidos e proteção contra path traversal | `src/lib/posts.server.ts` | **APROVADO** |
| TC-09 | Limitação de posts recentes (`getRecentPosts`) | `src/lib/posts.server.ts` | **APROVADO** |
| TC-10 | Campos obrigatórios dos registros de projetos | `src/config/projects.ts` | **APROVADO** |
| TC-11 | Existência física das imagens dos projetos em `public/` | `src/config/projects.ts` | **APROVADO** |
| TC-12 | Unicidade de slugs e integridade de busca de projetos | `src/config/projects.ts` | **APROVADO** |
| TC-13 | Integridade de `siteConfig`, links e arquivos públicos | `src/config/site.ts` | **APROVADO** |
| TC-14 | Integridade de dados de histórico e formação | `src/config/profile.ts` | **APROVADO** |
| TC-15 | Função utilitária `cn()` para combinação de classes CSS | `src/lib/utils.ts` | **APROVADO** |
| TC-16 | Estimativa de leitura `estimateReadingTime()` para texto vazio e com conteúdo | `src/lib/utils.ts` | **APROVADO** |
| TC-17 | Formatação de data `formatDate()` com dados normais e inválidos | `src/lib/utils.ts` | **APROVADO** |
| TC-18 | Geração de data ISO `formatDateISO()` com entradas inválidas | `src/lib/utils.ts` | **APROVADO** |
| TC-19 | Mapeamento de cor de tag `tagBadgeColor()` com tags mistas e nulas | `src/lib/utils.ts` | **APROVADO** |

---

## 3. Falhas Reproduzidas e Resoluções

1. **`estimateReadingTime("")` contabilizava 1 palavra:**
   - *Reprodução:* `estimateReadingTime("").words` retornava `1`.
   - *Correção:* Tratamento explícito de string vazia ou apenas com espaços retornando `words: 0`.
2. **`formatDate("invalida")` gerava `RangeError: Invalid time value`:**
   - *Reprodução:* Chamada com data malformada derrubava a execução com exceção não tratada.
   - *Correção:* Verificação prévia de `isNaN(date.getTime())` com fallback seguro.
3. **`tagBadgeColor(null)` gerava `TypeError`:**
   - *Reprodução:* Chamada sem string gerava erro ao tentar acessar `.toLowerCase()`.
   - *Correção:* Guarda defensiva `if (!tag || typeof tag !== 'string') return 'blue'`.
4. **Link incorreto em card de projeto (`ProjectFlipCard`):**
   - *Reprodução:* Projetos com `repository` aberto e label "Ver repositório" direcionavam para a URL do site da aplicação.
   - *Correção:* Resolução precisa da URL alvo de acordo com o tipo de projeto e disponibilidade do repositório.

---

## 4. Testes de Regressão e Verificações de Sistema

- **TypeScript (`next typegen && tsc --noEmit`):** 0 erros de tipo.
- **ESLint (`eslint . --ext .js,.mjs,.ts,.tsx --max-warnings 0`):** 0 avisos, 0 erros.
- **Next.js Production Build (`next build`):** 19 rotas compiladas com sucesso em SSG/SSR sem advertências de hidratação.
- **Suíte de Testes Automatizados (`npm test`):** 19 testes passaram em 451ms.

---

## 5. Bloqueios e Limitações Externas

- `npm audit`: O endpoint público de auditoria do npm registry não estava acessível na rede do ambiente de execução, o que impediu a verificação online de vulnerabilidades.
