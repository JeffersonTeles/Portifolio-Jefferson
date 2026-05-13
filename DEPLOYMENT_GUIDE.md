# 🚀 Guia de Deployment e Otimização

## 📦 Produção - Build

### Build local
```bash
cd /workspaces/Portifolio-Jefferson
npm run build
```

Isso criará a pasta `dist/` com os arquivos otimizados prontos para produção.

### Testar build localmente
```bash
npm run preview
```

## 🌐 Opções de Deployment

### 1️⃣ Vercel (Recomendado - Melhor para React/Next.js)

#### Vantagens:
- ✅ Deploy automático ao fazer push no GitHub
- ✅ Serverless functions
- ✅ Preview deployments
- ✅ Analytics nativo
- ✅ Muito rápido

#### Como fazer:
1. Instale Vercel CLI:
```bash
npm i -g vercel
```

2. Na pasta do projeto:
```bash
vercel
```

3. Siga as instruções e autentique com sua conta GitHub

4. Configure domínio personalizado nos settings do Vercel

#### Variáveis de Ambiente (se usar formulário):
- Crie `.env.local`
- Adicione suas variáveis
- Vercel auto-sincroniza

### 2️⃣ Netlify

#### Vantagens:
- ✅ Hospedagem gratuita
- ✅ Builds automáticos
- ✅ Functions nativas
- ✅ Forms integrado (para formulários)
- ✅ CDN global

#### Como fazer:
1. Push seu repositório para GitHub
2. Crie conta em [netlify.com](https://netlify.com)
3. Clique "New site from Git"
4. Conecte seu repositório GitHub
5. Configure:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Deploy automático!

#### Usar Netlify Forms (sem servidor necessário):
Em `Contact.jsx`, altere o form:
```javascript
<form name="contact" method="POST" netlify>
  <input type="text" name="name" required />
  <input type="email" name="email" required />
  <textarea name="message" required></textarea>
  <button type="submit">Enviar</button>
</form>
```

### 3️⃣ GitHub Pages (Gratuito mas limitado)

#### Como fazer:
1. Edite `vite.config.js`:
```javascript
export default {
  base: '/seu-repositorio/',  // se for em repo pessoal
  // ... resto da config
}
```

2. Instale gh-pages:
```bash
npm install --save-dev gh-pages
```

3. Edite `package.json`:
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

4. Execute:
```bash
npm run deploy
```

5. Vá para Settings > Pages e selecione `gh-pages` como source

### 4️⃣ AWS (Para mais controle)

#### Opções:
- **S3 + CloudFront**: Estático rápido
- **Amplify**: Deploy automático, mais fácil
- **EC2**: Controle total

#### Recomendado: AWS Amplify
```bash
npm install -g @aws-amplify/cli
amplify init
amplify publish
```

### 5️⃣ Docker (Para quem prefere containerizar)

Crie `Dockerfile`:
```dockerfile
# Build stage
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Production stage
FROM node:18-alpine
WORKDIR /app
RUN npm install -g serve
COPY --from=builder /app/dist ./dist
EXPOSE 3000
CMD ["serve", "-s", "dist", "-l", "3000"]
```

Build e run:
```bash
docker build -t jefferson-portfolio .
docker run -p 3000:3000 jefferson-portfolio
```

## ⚡ Otimizações de Performance

### 1. Lazy Loading de Componentes

Em `App.jsx`, use `lazy` + `Suspense`:
```javascript
import { lazy, Suspense } from 'react';

const Projects = lazy(() => import('./sections/Projects'));

export default function App() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <Projects />
    </Suspense>
  );
}
```

### 2. Image Optimization

Para imagens, use:
```bash
npm install --save-dev @vite/plugin-react-swc
```

### 3. Minificar e Comprimir

Vite já faz isso automaticamente no build. Verifique tamanho:
```bash
npm run build
# Tamanho final está em dist/
```

### 4. Reduzir Partículas

Se o site fica lento, em `ParticlesBackground.jsx` reduza:
```javascript
const particleCount = Math.min(50, Math.floor(window.innerWidth / 20)); // Era 100
```

### 5. Code Splitting

Vite já faz isso automaticamente. Verifique em `dist/assets/`

### 6. Service Worker (PWA)

Para trabalhar offline:
```bash
npm install --save-dev vite-plugin-pwa
```

### 7. CSS Purging

TailwindCSS já remove CSS não usado. Verifique que `content` está correto em `tailwind.config.js`.

## 📊 Monitoramento em Produção

### 1. Sentry (Error Tracking)
```bash
npm install @sentry/react @sentry/tracing
```

Em `main.jsx`:
```javascript
import * as Sentry from '@sentry/react';

Sentry.init({
  dsn: 'seu-dsn-aqui',
  environment: 'production',
});
```

### 2. Google Analytics
```html
<!-- No index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

### 3. Lighthouse (Performance Check)
1. Abra DevTools (F12)
2. Vá para "Lighthouse"
3. Rode auditoria
4. Corrija problemas apontados

## 🔐 Segurança

### 1. Variáveis de Ambiente
Nunca commite dados sensíveis:

`.env.local` (não commitar):
```
VITE_API_KEY=sua_chave_aqui
```

Em código:
```javascript
const apiKey = import.meta.env.VITE_API_KEY;
```

### 2. Headers de Segurança

Se usar servidor (Node.js/Express):
```javascript
app.use(helmet());  // npm install helmet
```

### 3. CORS (se necessário)
```javascript
app.use(cors({
  origin: 'https://seu-dominio.com'
}));
```

## 📱 Testes

### Teste de Responsividade
```bash
# Chrome DevTools
F12 → Toggle Device Toolbar (Ctrl+Shift+M)
```

### Teste de Performance
```bash
npm run build
npm run preview
# Abra DevTools → Performance
```

### Teste de Acessibilidade
```bash
# DevTools → Lighthouse → Accessibility
```

## 🎯 Checklist de Produção

- [ ] Remover console.log() do código
- [ ] Atualizar todos os links para URLs reais
- [ ] Configurar formulário de contato
- [ ] Adicionar favicon (`public/favicon.ico`)
- [ ] Adicionar sitemap.xml
- [ ] Configurar robots.txt
- [ ] Testar em navegadores modernos
- [ ] Testar em mobile
- [ ] Verificar velocidade (PageSpeed Insights)
- [ ] Configurar HTTPS/SSL
- [ ] Ativar compressão GZIP
- [ ] Configurar cache headers
- [ ] Fazer backup do código
- [ ] Documentar processo de deploy

## 📈 Após Deploy

### Análise
1. Monitore Google Analytics
2. Verifique erros no Sentry
3. Acompanhe Core Web Vitals

### Otimizações Contínuas
1. Analise dados de usuários
2. Melhore CTA (Call-To-Action)
3. Atualize conteúdo regularmente
4. Mantenha dependências atualizadas: `npm update`

## 🆘 Troubleshooting

### Erro: "Cannot find module"
```bash
rm -rf node_modules package-lock.json
npm install
```

### Vite não recompila
```bash
rm -rf .vite
npm run dev
```

### Build muito grande
```bash
npm run build -- --analyze
# ou use: npm install --save-dev rollup-plugin-visualizer
```

### Problema com imagens no build
Verifique paths em `vite.config.js`:
```javascript
export default {
  base: '/seu-path/',  // se em subpasta
}
```

---

## 📞 Suporte

- Vercel: https://vercel.com/support
- Netlify: https://docs.netlify.com
- GitHub Pages: https://pages.github.com
- React: https://react.dev
- Vite: https://vitejs.dev

---

**Dicas Finais:**
- 🚀 Comece com Vercel - é o mais fácil
- 📊 Sempre monitore performance
- 🔐 Nunca commite dados sensíveis
- ♻️ Atualize dependências regularmente
- 🧪 Teste sempre antes de deploy

Bom deployment! 🎉
