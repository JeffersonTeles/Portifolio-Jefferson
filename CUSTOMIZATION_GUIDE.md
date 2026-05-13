# 🎨 Guia de Personalização - Jefferson Teles Portfolio

## 🔧 Como Personalizar o Website

### 1. Informações Pessoais

#### Trocar Nome e Texto do Hero
Edite `src/sections/Hero.jsx`:
```javascript
fullText = 'Seu Novo Subtítulo aqui' // Altere o subtítulo com digitação
```

#### Atualizar Descrição "Sobre"
Edite `src/sections/About.jsx`:
```javascript
// Altere o texto na seção "Sobre Mim"
<p className="text-gray-300 text-lg leading-relaxed">
  Seu novo texto aqui
</p>
```

### 2. Links de Redes Sociais

Atualize os links em vários lugares:

**Em `src/sections/Hero.jsx`**:
```javascript
socialLinks = [
  {
    icon: FiGithub,
    href: 'https://github.com/seu-usuario',  // ← Seu URL real
    label: 'GitHub',
  },
  // ... outros links
]
```

**Em `src/sections/Contact.jsx`**:
```javascript
contactLinks = [
  {
    icon: FiMail,
    value: 'seu@email.com',  // ← Seu email
    href: 'mailto:seu@email.com',
  },
  // ... outros links
]
```

**Em `src/sections/Footer.jsx`**:
```javascript
socialLinks = [
  { icon: FiGithub, href: 'https://github.com/seu-usuario', label: 'GitHub' },
  // ... outros
]
```

### 3. Substituir Projetos Fictícios

Edite `src/sections/Projects.jsx`:
```javascript
projects = [
  {
    id: 1,
    title: 'Seu Projeto Real',
    description: 'Descrição do seu projeto',
    image: '🎨',  // ou URL de imagem
    technologies: ['React', 'Node.js'],
    category: 'ia',
    github: 'https://github.com/seu-usuario/projeto',
    demo: 'https://seu-projeto.com',
  },
  // ... mais projetos
]
```

### 4. Atualizar Timeline de Experiência

Edite `src/sections/Experience.jsx`:
```javascript
timeline = [
  {
    year: '2020',
    title: 'Seu Marco',
    description: 'Descrição do marco',
    icon: '🚀',
  },
  // ... mais marcos
]
```

### 5. Configurar Formulário de Contato

Para que o formulário funcione com envio de email real, use um serviço como:

**Opção 1: Formspree**
```javascript
// Em Contact.jsx, altere o handleSubmit:
const handleSubmit = async (e) => {
  e.preventDefault();
  await fetch('https://formspree.io/f/seu-id', {
    method: 'POST',
    body: JSON.stringify(formData),
    headers: { 'Content-Type': 'application/json' }
  });
}
```

**Opção 2: EmailJS**
```bash
npm install @emailjs/browser
```

Depois configure no seu componente.

### 6. Personalizar Cores

Edite `tailwind.config.js`:
```javascript
colors: {
  neon: {
    cyan: '#seu-cyan',    // Altere cores neon
    blue: '#seu-blue',
    purple: '#seu-purple',
  }
}
```

### 7. Adicionar Imagens Reais

1. **Avatar/Foto Profissional**:
   - Coloque a imagem em `public/`
   - Em `About.jsx`, substitua:
   ```javascript
   <img src="/sua-foto.jpg" alt="Jefferson" className="w-full h-full object-cover rounded-2xl" />
   ```

2. **Thumbs de Projetos**:
   - Em `Projects.jsx`, substitua o emoji por:
   ```javascript
   <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
   ```

### 8. Adicionar Google Analytics

Edite `index.html`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

### 9. SEO - Metadados

Edite `index.html`:
```html
<meta name="description" content="Sua descrição SEO aqui" />
<meta name="keywords" content="suas, palavras, chave" />
<meta name="author" content="Seu Nome" />
<meta property="og:title" content="Seu Título" />
<meta property="og:image" content="https://seu-dominio.com/imagem.jpg" />
```

### 10. Alterar Tipografia

Para usar fonts customizadas, edite `index.html`:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Sua+Font&display=swap" rel="stylesheet">
```

E em `src/index.css`:
```css
body {
  font-family: 'Sua Font', sans-serif;
}
```

## 🚀 Deploy

### Deploy no Vercel (Recomendado)

1. Instale Vercel CLI:
```bash
npm i -g vercel
```

2. Execute na pasta do projeto:
```bash
vercel
```

3. Configure as variáveis de ambiente se necessário

### Deploy no GitHub Pages

```bash
npm run build
gh-pages -d dist
```

### Deploy no Netlify

1. Faça push para GitHub
2. Conecte seu repositório no Netlify
3. Configure build command: `npm run build`
4. Output: `dist`

## 📊 Performance

### Otimizar Imagens
```bash
npm install --save-dev imagemin
```

### Ativar Compressão
O Vite já comprime automaticamente no build.

### SEO Básico
- ✅ Métadados corretos
- ✅ Alt text em imagens
- ✅ Heading hierarchy (H1, H2, H3)
- ✅ Links internos com rel="canonical"

## 🎯 Checklist Final

- [ ] Atualizar todos os links de redes sociais
- [ ] Adicionar foto profissional real
- [ ] Substituir projetos fictícios pelos seus reais
- [ ] Configurar formulário de contato (Formspree/EmailJS)
- [ ] Atualizar texto "Sobre Mim"
- [ ] Ajustar cores para sua marca
- [ ] Adicionar Google Analytics
- [ ] Testar responsividade em mobile
- [ ] Verificar links e URLs
- [ ] Fazer deploy em produção
- [ ] Configurar domínio personalizado

## 🐛 Troubleshooting

### Erro de CORS no formulário
- Use um serviço como Formspree, Netlify Forms ou EmailJS

### Animações lentas
- Reduza quantidade de partículas em `ParticlesBackground.jsx`
- Desabilite motion em conexões lentas usando `prefers-reduced-motion`

### Problema com scroll smooth
- Verifique se `react-scroll` está instalado
- Limpe cache e rebuild

## 📚 Recursos Úteis

- [TailwindCSS Docs](https://tailwindcss.com)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [React Icons](https://react-icons.github.io/react-icons)
- [Vercel Deployment](https://vercel.com)

---

Qualquer dúvida, consulte a documentação das bibliotecas ou peça ajuda! 🚀
