# TECHNICAL NIGHT LOG — AUDITORIA E MELHORIA TÉCNICA

- **Data:** 2026-10-20
- **Projeto:** Portfólio Jefferson Teles (`portfolio-jefferson`)
- **Ambiente:** Node.js v22.23.3, Next.js 15.5.28, TypeScript 5.5.0, Linux
- **Status geral:** Concluído com sucesso

---

## 1. Estado Inicial

- **Repositório:** Ramo `main`, sincronizado com `origin/main`.
- **Modificações não commitadas prévias:**
  - Alterações de layout, CSS e ficha técnica dos projetos (`src/config/projects.ts`, `app/projetos/[slug]/page.tsx`, etc.). Todas as modificações existentes foram preservadas com integridade.
- **Verificações executadas:**
  - `npm run check` (`eslint` + `next typegen && tsc --noEmit`): Aprovado.
  - `npm run build`: Aprovado (19/19 páginas estáticas geradas).
- **Testes automatizados:** Não existia infraestrutura de testes (`npm test`) nem suíte automatizada.

---

## 2. Problemas Identificados e Causa Raiz

1. **[Confiabilidade] Ausência de Error Boundary de rota (`app/error.tsx`):**
   - *Causa:* Ausência de manipulador de erro padrão do Next.js App Router.
   - *Impacto:* Exceções não tratadas durante o ciclo de renderização deixavam o usuário na tela de erro genérica sem navegação nem recuperação.
2. **[Bug UI/Lógica] Inconsistência de Link em `ProjectFlipCard` e case study (`app/projetos/[slug]/page.tsx`):**
   - *Causa:* Quando `project.repository` existia, o label exibia `"Ver repositório"`, mas o link `<a>` apontava para `project.url`.
   - *Impacto:* No projeto Casamento, clicar em "Ver repositório" abria o site na Vercel e impedia o acesso ao código-fonte público no GitHub.
3. **[Fragilidade / Erros não tratados] Falhas em funções de `src/lib/utils.ts`:**
   - *Causa:* Falta de guardas defensivas para strings vazias e datas inválidas.
   - *Impacto:* `estimateReadingTime("")` contava 1 palavra para texto vazio; `formatDate("invalida")` e `formatDateISO("invalida")` disparavam `RangeError: Invalid time value` travando a renderização; `tagBadgeColor(null)` disparava `TypeError`.
4. **[Bug de UX/Flicker] Efeito colateral em `src/components/ui/ThemeProvider.tsx`:**
   - *Causa:* O segundo `useEffect` executava no primeiro render com o estado padrão `'dark'` antes de `getInitialTheme()` atualizar o estado, gravando `'dark'` no `localStorage` prematuramente.
   - *Impacto:* Sobrescrita de preferência salva e potencial flash de tema.
5. **[SSR Warning] `useLayoutEffect` em `src/components/layout/Navbar.tsx`:**
   - *Causa:* Pré-renderização no servidor acionava warning de `useLayoutEffect` durante SSR.
   - *Impacto:* Alertas desnecessários no console do servidor e risco de descompasso de hidratação.
6. **[Acessibilidade WCAG] Inconsistência de atributos ARIA no `src/components/ui/ThemeToggle.tsx`:**
   - *Causa:* Uso de `aria-label` imperativo dinâmico em conjunto com `aria-pressed`.
   - *Impacto:* Leitores de tela anunciavam estado ambíguo ("Ativar modo claro, pressionado").
7. **[Infraestrutura de QA] Falta de suíte de testes automatizados:**
   - *Causa:* Não havia script `"test"` no `package.json` nem testes automatizados implementados.

---

## 3. Correções Realizadas

1. **Criação de `app/error.tsx`:**
   - Implementado Error Boundary com `'use client'`, registro de erro no console, botão de recuperação (`reset()`) e botão de retorno à página inicial, alinhado aos tokens de design do portfólio.
2. **Correção de links em `ProjectFlipCard.tsx` e `app/projetos/[slug]/page.tsx`:**
   - Diferenciação precisa entre projetos de formato ferramenta (`tool`) e aplicações/sites (`site`/`platform`).
   - Apontamento correto do link de repositório para `project.repository`.
   - Inclusão de acesso duplo (Abrir projeto + Ver no GitHub) no case study quando o projeto possui site no ar e repositório público.
3. **Endurecimento defensivo em `src/lib/utils.ts`:**
   - `estimateReadingTime`: retorna `words: 0` quando o conteúdo for vazio.
   - `formatDate` e `formatDateISO`: validação de datas inválidas retornando valor seguro em vez de disparar `RangeError`.
   - `tagBadgeColor`: proteção contra valores nulos/indefinidos.
4. **Estabilidade de tema em `src/components/ui/ThemeProvider.tsx`:**
   - Adicionada referência `isInitialized` para que a sincronização do `localStorage` só ocorra após a carga do tema inicial do cliente.
5. **Compatibilidade SSR em `src/components/layout/Navbar.tsx`:**
   - Criado e adotado `useIsomorphicLayoutEffect` (`typeof window !== 'undefined' ? useLayoutEffect : useEffect`).
6. **Acessibilidade em `src/components/ui/ThemeToggle.tsx`:**
   - Removido `aria-pressed` conflitante, mantendo `aria-label` e `title` descritivos da ação.
7. **Criação de suíte de testes com Node.js nativo:**
   - Criados 19 testes automatizados cobrindo utilitários, integridade de projetos e assets, configuração do site e API de contato.
   - Adicionado script `"test"` ao `package.json` e incluído no fluxo de CI (`.github/workflows/ci-cd.yml`).

---

## 4. Arquivos Modificados e Criados

### Criados:
- `app/error.tsx`: Error Boundary de rota do App Router.
- `tests/utils.test.mjs`: Testes de funções utilitárias.
- `tests/projects.test.mjs`: Testes de integridade de dados e assets de projetos.
- `tests/site-config.test.mjs`: Testes de configuração e perfil.
- `tests/posts.test.mjs`: Testes de carregamento, metadados e segurança de posts MDX.
- `tests/contact-api.test.mjs`: Testes de validação, limites e erros da rota de contato.
- `tests/loader.mjs`: Loader ESM para resolução de módulos nos testes.
- `TECHNICAL_NIGHT_LOG.md`: Registro técnico da missão.
- `QA_NIGHT_LOG.md`: Registro de qualidade e testes.

### Modificados:
- `src/lib/utils.ts`: Guardas defensivas e tratamento de exceções.
- `src/components/ui/ThemeProvider.tsx`: Prevenção de sobrescrita prematura de tema.
- `src/components/layout/Navbar.tsx`: Isomorphic layout effect para SSR.
- `src/components/ui/ThemeToggle.tsx`: Correção de atributos ARIA.
- `src/components/projects/ProjectFlipCard.tsx`: Resolução correta de URLs de projeto e repositório.
- `app/projetos/[slug]/page.tsx`: Suporte a link duplo de site e repositório.
- `package.json`: Adicionado script `"test"`.
- `README.md`: Documentação atualizada com `npm test`.
- `.github/workflows/ci-cd.yml`: Passo `npm test` integrado na esteira.

---

## 5. Testes Executados e Resultados

- **`npm test`:** 19/19 testes aprovados (0 falhas, duração ~450ms).
- **`npm run check`:** Lint e verificação de tipos TypeScript aprovados com zero erros e zero advertências.
- **`npm run build`:** Build de produção bem-sucedido com todas as 19 rotas estáticas pré-renderizadas.

---

## 6. Resultados e Limitações

- Todas as melhorias foram verificadas e validadas localmente.
- Nenhuma dependência externa adicional foi introduzida no `package.json`.
- A auditoria remota via `npm audit` foi limitada pela indisponibilidade de conexão com o endpoint público do npm registry no ambiente sandbox local.
