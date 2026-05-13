# 🛠️ Guia de Manutenção e Atualizações

## 📅 Manutenção Regular

### ✅ Checklist Semanal
- Verificar se há erros no console do navegador
- Testar formulário de contato
- Verificar performance em mobile
- Revisar Google Analytics

### ✅ Checklist Mensal
- Atualizar dependências: `npm update`
- Revisar e atualizar conteúdo
- Verificar links externos
- Analisar performance (Lighthouse)
- Backup do código

### ✅ Checklist Trimestral
- `npm audit` - verificar vulnerabilidades
- Atualizar versões maiores se necessário
- Revisar estratégia de SEO
- Analisar dados de usuários

## 🔄 Atualizando Dependências

### Verificar Atualizações Disponíveis
```bash
npm outdated
```

### Atualizar tudo seguramente
```bash
npm update
npm audit fix
```

### Atualizar versão específica
```bash
npm install react@latest
npm install framer-motion@latest
```

### Atualizar major version (cuidado!)
```bash
npm install react@19  # Pode quebrar coisas
```

## 🐛 Bugs Comuns e Soluções

### Problema: Animações lentas
**Solução:**
```javascript
// Em ParticlesBackground.jsx, reduza particleCount
const particleCount = 30; // antes era 100
```

### Problema: Mobile muito lento
**Solução:**
```javascript
// Desabilite partículas em mobile
const isMobile = window.innerWidth < 768;
if (!isMobile) {
  // Render particles só em desktop
}
```

### Problema: Formulário não funciona
**Solução:**
- Instale Formspree ou EmailJS
- Configure credenciais
- Teste com console.log()

### Problema: Links quebrados após deploy
**Solução:**
- Verifique `base` em `vite.config.js`
- Teste todos os links manualmente
- Use ferramenta como Dead Link Checker

### Problema: CSS não carrega após deploy
**Solução:**
```javascript
// vite.config.js
export default {
  build: {
    assetsDir: 'assets',
    minify: 'terser',
  }
}
```

## 📝 Atualizando Conteúdo

### Adicionar Nova Seção
1. Crie arquivo em `src/sections/NovaSessao.jsx`
2. Importe em `App.jsx`
3. Adicione em ordem correta
4. Adicione item no Navbar

### Modificar Cores
```javascript
// tailwind.config.js
colors: {
  neon: {
    cyan: '#nova-cor',
  }
}
```

### Adicionar Novo Projeto
```javascript
// Em Projects.jsx
{
  id: 7,
  title: 'Seu Novo Projeto',
  description: 'Descrição',
  image: '🎨',
  technologies: ['React', 'Node.js'],
  category: 'ia',
  github: 'https://github.com/...',
  demo: 'https://...',
}
```

## 🎨 Customizações Avançadas

### Adicionar Nova Animação
1. Crie em `utils/animations.js`:
```javascript
export const meuaEfeito = {
  initial: { /* ... */ },
  whileInView: { /* ... */ },
  transition: { /* ... */ },
  viewport: { /* ... */ },
};
```

2. Use em componentes:
```javascript
<motion.div {...meuEfeito}>Conteúdo</motion.div>
```

### Customizar Tipografia
```css
/* src/index.css */
@import url('https://fonts.googleapis.com/css2?family=Sua+Font');

body {
  font-family: 'Sua Font', sans-serif;
}
```

### Adicionar Dark Mode Toggle
```javascript
import { useState } from 'react';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  
  return (
    <div className={darkMode ? 'dark' : 'light'}>
      {/* conteúdo */}
    </div>
  );
}
```

## 📊 Análise de Performance

### Usando Lighthouse
1. Abra DevTools (F12)
2. Vá para "Lighthouse"
3. Clique "Analyze page load"
4. Corrija problemas encontrados

### Otimizações Automáticas
```bash
npm run build
# Vite otimiza automaticamente
```

### Analisar Tamanho de Bundle
```bash
npm install --save-dev rollup-plugin-visualizer
```

Em `vite.config.js`:
```javascript
import { visualizer } from 'rollup-plugin-visualizer';

export default {
  plugins: [visualizer()]
}
```

Execute e abra `dist/stats.html`

## 🔐 Segurança Contínua

### Verificar Vulnerabilidades
```bash
npm audit
```

### Corrigir Vulnerabilidades
```bash
npm audit fix
```

### Forçar Atualização
```bash
npm audit fix --force  # use com cuidado!
```

### Verificar Dependências Não Usadas
```bash
npm install --save-dev depcheck
npx depcheck
```

## 📱 Testes Regulares

### Em Desktop
- Chrome
- Firefox
- Safari
- Edge

### Em Mobile
- iPhone
- Android
- Tablet

### Performance
- PageSpeed Insights: https://pagespeed.web.dev
- GTmetrix: https://gtmetrix.com
- WebPageTest: https://webpagetest.org

## 🚀 Melhorias Contínuas

### Adicionar Features Novas
1. Planeje a feature
2. Crie branch: `git checkout -b feature/nova-feature`
3. Desenvolva e teste
4. Faça PR para review
5. Merge após aprovação

### Melhorar SEO
1. Adicione schema.json
2. Implemente Open Graph tags
3. Crie sitemap.xml
4. Submeta para Google Search Console

### Monitorar Usuários
1. Configure Google Analytics 4
2. Crie eventos customizados
3. Acompanhe conversões
4. Analise comportamento

## 📚 Recursos para Aprender Mais

- [React Docs](https://react.dev)
- [Vite Guide](https://vitejs.dev/guide/)
- [TailwindCSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [Web Vitals](https://web.dev/vitals/)

## 🆘 Quando Pedir Ajuda

### Stack Overflow
- Tag: react, vite, tailwindcss
- Forneça: erro exato, código relevante, versões

### GitHub Issues
- Abra issue no repo da lib
- Descreva problema claramente
- Forneça exemplo reproduzível

### Comunidades
- React Community Discord
- Tailwind Discord
- Dev.to

## 📋 Checklist de Manutenção Mensal

```markdown
- [ ] npm update
- [ ] npm audit fix
- [ ] Verificar links externos
- [ ] Testar formulário
- [ ] Revisar console (erros)
- [ ] Analisar Google Analytics
- [ ] Lighthouse audit
- [ ] Teste em mobile
- [ ] Backup do código
- [ ] Documentar mudanças
```

## 🎯 Roadmap de Melhorias Sugeridas

1. **Fase 1** (1-2 semanas)
   - [ ] Configurar formulário real
   - [ ] Adicionar Google Analytics
   - [ ] Otimizar imagens

2. **Fase 2** (2-4 semanas)
   - [ ] Adicionar blog/artigos
   - [ ] Integrar com CMS
   - [ ] Implementar PWA

3. **Fase 3** (Longo prazo)
   - [ ] Multilíngue
   - [ ] Dark/Light mode toggle
   - [ ] Integração com APIs externas

## 🎓 Exemplos de Código para Manutenção

### Adicionar Métrica de Código
```bash
npm install --save-dev @code-metrics/cli
npx code-metrics .
```

### Linting e Formatação
```bash
npm install --save-dev eslint prettier
npx eslint . --fix
npx prettier . --write
```

### Testes (opcional)
```bash
npm install --save-dev vitest @testing-library/react
```

## 📞 Contatos Úteis

- **Vercel Support**: https://vercel.com/support
- **GitHub Support**: https://support.github.com
- **Netlify Support**: https://support.netlify.com

---

**Lembre-se:** A manutenção regular garante um site seguro, rápido e sempre atualizado! 🚀

Última atualização: Maio 2026
