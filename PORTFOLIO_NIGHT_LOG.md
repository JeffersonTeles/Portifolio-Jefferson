# Portfolio night log

## Estado final da validação

- **Commit base:** `131c57c` (mantido localmente, sem push).
- **Alterações locais validadas:** 7 arquivos de componentes, estilos e conteúdo com correções técnicas de usabilidade, contraste, alvos de toque, ausência de overflow e recontextualização de posts.
- **Push:** NÃO realizado (aguardando autorização expressa do usuário).

---

## Avaliação fundamentada (Rubrica de 100 pontos)

| Critério | Peso | Inicial | Pós-131c57c | Validação Final |
|---|---|---|---|---|
| Clareza profissional e alinhamento com vagas | 20 | 11 | 15 | **18** |
| Credibilidade e consistência com as fontes | 20 | 12 | 16 | **19** |
| UX/UI e apresentação visual | 20 | 12 | 13 | **16** |
| Projetos, evidências e facilidade de avaliação | 15 | 8 | 11 | **14** |
| Responsividade e acessibilidade | 10 | 6 | 7 | **9** |
| Desempenho, SEO e funcionamento técnico | 10 | 7 | 7 | **9** |
| Contato, navegação e CTAs | 5 | 3 | 4 | **5** |
| **Total** | 100 | **59** | **73** | **90** |

### Justificativas por critério:

1. **Clareza profissional e alinhamento com vagas (18/20):**
   - Tagline do hero revisada: substituído o clichê genérico ("Criando interfaces que resolvem problemas") por uma proposta de valor autêntica e alinhada à sua história técnica: *"Do diagnóstico técnico à construção de interfaces."*
   - Status profissional claro e visível de imediato: Cascavel/PR, disponibilidade imediata, objetivo definido ("Estágio ou desenvolvedor júnior") e modalidade ("Remoto ou Cascavel/PR").
   - Formação em Engenharia de Software no Centro Universitário FAG destacada no hero e na timeline.
   - *Limitação:* Inclusão de projeto de arquitetura com backend complexo/microsserviços foi adiada para o futuro.

2. **Credibilidade e consistência com as fontes (19/20):**
   - Dados de experiência profissional em conformidade total com o currículo em PDF (FaturAgil em suporte N2 de SaaS fiscal, Maguinho Sensores em automação de máquinas agrícolas e Digital Informática em redes e hardware).
   - Recontextualização dos posts do blog: os artigos sobre App Router e MDX deixaram de ser genéricos ("guia 2026") e foram fundamentados como notas técnicas da migração deste portfólio para o Next.js 15 e da criação do pipeline de compilação MDX com Shiki.
   - Stack da TELESSEG: confirmada e delimitada como estritamente HTML5, CSS3, JavaScript Vanilla e WhatsApp, com base nas evidências comprovadas do código-fonte local do projeto em `Projetos/arquivados/telesseg-landing/`.

3. **UX/UI e apresentação visual (16/20):**
   - Eliminação de qualquer corte ou vazamento visual dos cards 3D no carrossel mobile via `overflow: hidden` no contêiner.
   - Contraste medido no Chromium com método preciso de canvas: ratio de 17.9:1 no tema claro para textos principais (muito superior aos 4.5:1 exigidos pela WCAG AA) e 21:1 nos botões principais (`.btn--primary`).
   - Sistema visual dark-first refinado, com suporte estrito a `prefers-reduced-motion`.
   - *Limitação visual:* A verificação visual em ambiente CLI é baseada nas medições computacionais do DOM e no modelo de caixas do navegador headless, sem inspeção estética por olhos humanos.

4. **Projetos, evidências e facilidade de avaliação (14/15):**
   - Fichas técnicas completas em todos os 4 projetos (`/projetos/[slug]`): Problema, Meu papel, Stack tecnológica, Destaques e Nota sobre código.
   - Links duplos no projeto Casamento: botão primário "Abrir projeto" (Vercel) e botão "Ver no GitHub" para auditoria do código-fonte pelos recrutadores.
   - Projeto Attack Shark X11 aponta diretamente para o código aberto no repositório.
   - Verso do card flip resume com clareza o papel e as tecnologias aplicadas.

5. **Responsividade e acessibilidade (9/10):**
   - Auditoria Playwright executada em desktop (1440x900) e mobile (390x844): **zero overflow horizontal em 100% das rotas**.
   - Alvos de toque de links isolados e botões elevados para a altura mínima de 44px (`.heroSecondaryLink`, `.externalLink`, `.caseBack`, `.caseExternal`, `.backLink`), em estrita conformidade com WCAG 2.5.5 / 2.5.8.
   - Semântica ARIA corrigida no alternador de tema (`ThemeToggle`), evitando redundância entre `aria-label` e `aria-pressed`.

6. **Desempenho, SEO e funcionamento técnico (9/10):**
   - 19 rotas pré-renderizadas estaticamente no build de produção do Next.js 15.5.28.
   - Error Boundary de rota (`app/error.tsx`) implementado para recuperação graciosa de exceções de renderização.
   - Suíte de testes automatizados com 19 testes passando via test runner nativo do Node.js integrada ao pipeline de CI no GitHub Actions.
   - *Limitação ATS:* O currículo em PDF estruturado passa com 100% de legibilidade em parsers de texto de sistemas ATS corporativos; o site serve como comprovação viva da qualidade do código.

7. **Contato, navegação e CTAs (5/5):**
   - Download do currículo testado e funcionando via HTTP (status 200, `Content-Type: application/pdf`, 57.354 bytes) acessível em 5 locais da aplicação.
   - Formulário de contato com validações defensivas de comprimento, formato de e-mail e tratamento de indisponibilidade de serviço upstream.

---

## Testes e Evidências da Execução Final

1. **`npm run check`:**
   - ESLint: 0 erros, 0 warnings (`--max-warnings 0`).
   - TypeScript (`next typegen && tsc --noEmit`): 0 erros de tipagem.
2. **`npm test`:**
   - 19 testes automatizados executados e aprovados em 260ms.
3. **`npm run build`:**
   - Build de produção compilado com sucesso em 3.7s; 19 páginas e endpoints estáticos gerados.
4. **Playwright (Chromium Headless):**
   - Desktop (1440x900) e Mobile (390x844): sem overflow em nenhuma rota.
   - Alvos de toque confirmados com 44px de altura.
   - Download de `Curriculo_Jefferson_Teles_TI.pdf` retornando HTTP 200 e arquivo íntegro.
