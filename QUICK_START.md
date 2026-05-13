# ⚡ Quick Start - Início Rápido

## 🎯 Em 2 Minutos

### 1️⃣ Instalar Dependências
```bash
cd /workspaces/Portifolio-Jefferson
npm install
```

### 2️⃣ Iniciar Servidor
```bash
npm run dev
```

### 3️⃣ Abrir no Navegador
```
http://localhost:5173
```

✨ **Pronto!** Seu website está rodando!

---

## 📂 Estrutura de Arquivos Importante

```
src/
├── sections/          ← Editar conteúdo aqui
│   ├── Hero.jsx      ← Mudar nome, subtítulo
│   ├── About.jsx     ← Informações sobre você
│   ├── Projects.jsx  ← Seus projetos
│   ├── Contact.jsx   ← Email, links de contato
│   └── ... mais 4 seções
│
├── components/        ← Não alterar (geralmente)
│   ├── Navbar.jsx    ← Barra de navegação
│   └── ParticlesBackground.jsx
│
└── index.css         ← Estilos globais
```

---

## 🔧 Alterações Mais Comuns

### Mudar Nome (Hero)
**Arquivo:** `src/sections/Hero.jsx`
```javascript
Linha 10: fullText = 'Seu Novo Subtítulo'
```

### Trocar Links de Redes Sociais
**Arquivo:** `src/sections/Contact.jsx`
```javascript
Linhas 25-40: Atualize os 'href' para suas URLs
```

### Adicionar Seus Projetos
**Arquivo:** `src/sections/Projects.jsx`
```javascript
Linhas 8-47: Edite o array 'projects'
```

### Alterar Cores Neon
**Arquivo:** `tailwind.config.js`
```javascript
Linhas 11-15: Edite as cores do 'neon'
```

---

## 🎨 Cores Atuais

| Nome | Valor | Uso |
|------|-------|-----|
| Cyan | #00d9ff | Principal |
| Blue | #0066ff | Secundária |
| Purple | #9d4edd | Acentuação |

---

## 📝 Próximos Passos

1. **Personalize o Conteúdo**
   - Edite seções em `src/sections/`
   - Atualize links e informações

2. **Configure Formulário**
   - Use [Formspree](https://formspree.io) (recomendado)
   - Ou [EmailJS](https://www.emailjs.com)

3. **Deploy em Produção**
   - Vercel, Netlify, ou GitHub Pages
   - Veja `DEPLOYMENT_GUIDE.md`

4. **Otimize**
   - Execute `npm run build`
   - Teste com `npm run preview`

---

## ✅ Guias Completos

- 📖 **Personalização**: `CUSTOMIZATION_GUIDE.md`
- 🚀 **Deployment**: `DEPLOYMENT_GUIDE.md`
- 🛠️ **Manutenção**: `MAINTENANCE_GUIDE.md`
- 📋 **Resumo Projeto**: `PROJECT_SUMMARY.md`

---

## 🆘 Problema? Solução!

| Problema | Solução |
|----------|---------|
| Erro ao npm install | `rm -rf node_modules && npm install` |
| Vite não atualiza | `rm -rf .vite && npm run dev` |
| Porta 5173 em uso | `npm run dev -- --port 3000` |
| Animações lentas | Reduza `particleCount` em ParticlesBackground.jsx |

---

## 🎓 Estrutura das Seções

Cada seção segue este padrão:
```javascript
import { motion } from 'framer-motion';

const MinhaSecao = () => {
  return (
    <section id="id-secao" className="py-20">
      {/* Seu conteúdo */}
    </section>
  );
};
```

---

## 🔗 Links Úteis

- **Localhost**: http://localhost:5173
- **Documentação React**: https://react.dev
- **TailwindCSS**: https://tailwindcss.com
- **Framer Motion**: https://www.framer.com/motion/

---

## 📊 Scripts Úteis

```bash
npm run dev      # Iniciar desenvolvimento
npm run build    # Criar versão produção
npm run preview  # Testar build localmente
npm update       # Atualizar dependências
npm audit        # Verificar segurança
```

---

## 🎯 Seu Checklist de Início

- [ ] Instalou dependências (`npm install`)
- [ ] Servidor rodando (`npm run dev`)
- [ ] Acessou http://localhost:5173
- [ ] Editou nome em Hero.jsx
- [ ] Alterou links de contato
- [ ] Adicionou seus projetos
- [ ] Testou em mobile
- [ ] Leu CUSTOMIZATION_GUIDE.md
- [ ] Pronto para deploy!

---

**Qualquer dúvida? Consulte os guias de documentação! 📚**

Bom desenvolvimento! 🚀
