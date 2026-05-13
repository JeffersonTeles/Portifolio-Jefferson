import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import {
  FaArrowRight,
  FaBrain,
  FaChartLine,
  FaCode,
  FaEnvelope,
  FaGithub,
  FaGlobe,
  FaLaptopCode,
  FaLinkedin,
  FaRobot,
  FaServer,
  FaWhatsapp,
} from 'react-icons/fa'
import {
  SiDocker,
  SiFirebase,
  SiGithub,
  SiNodedotjs,
  SiOpenai,
  SiPostgresql,
  SiPython,
  SiReact,
  SiSupabase,
  SiTailwindcss,
} from 'react-icons/si'

const socialLinks = [
  { icon: FaGithub, label: 'GitHub', href: 'https://github.com/JeffersonTeles' },
  { icon: FaLinkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/jeffersonteles/' },
  { icon: FaWhatsapp, label: 'WhatsApp', href: 'https://wa.me/5500000000000' },
  { icon: FaEnvelope, label: 'Email', href: 'mailto:jeffersonteles.dev@gmail.com' },
]

const skills = [
  'JavaScript',
  'TypeScript',
  'React',
  'Node.js',
  'Python',
  'Firebase',
  'Supabase',
  'APIs REST',
  'IA Generativa',
  'Automação',
  'Git/GitHub',
]

const projects = [
  {
    name: 'FluxZap AI',
    category: 'Automação',
    description: 'Plataforma de automação WhatsApp com funis, respostas inteligentes e gestão de leads.',
    tech: ['Node.js', 'OpenAI', 'WhatsApp API'],
  },
  {
    name: 'Finance Vision',
    category: 'Dashboards',
    description: 'Dashboard financeiro inteligente com insights preditivos e alertas automáticos.',
    tech: ['React', 'Supabase', 'Python'],
  },
  {
    name: 'AffiliAI Engine',
    category: 'IA',
    description: 'Sistema de afiliados com recomendação de campanhas orientada por IA generativa.',
    tech: ['TypeScript', 'PostgreSQL', 'OpenAI API'],
  },
  {
    name: 'LP Forge',
    category: 'Landing Pages',
    description: 'Gerador de landing pages com IA para criação de copy, layout e testes A/B.',
    tech: ['Next.js', 'TailwindCSS', 'Firebase'],
  },
  {
    name: 'Smart CRM Flow',
    category: 'Sistemas Inteligentes',
    description: 'CRM automatizado com enriquecimento de dados, segmentação e jornada omnichannel.',
    tech: ['React', 'Node.js', 'APIs REST'],
  },
  {
    name: 'Pulse Analytics',
    category: 'SaaS',
    description: 'Painel analytics moderno para produtos digitais com métricas de retenção e receita.',
    tech: ['React', 'Supabase', 'Docker'],
  },
]

const timeline = [
  { year: '2021', title: 'Base sólida em desenvolvimento', text: 'Início intenso em front-end, lógica de sistemas e arquitetura web.' },
  { year: '2022', title: 'Integrações e APIs', text: 'Construção de soluções conectadas com APIs REST e automações orientadas a negócio.' },
  { year: '2023', title: 'IA e automação avançada', text: 'Evolução para bots, fluxos inteligentes e aplicações com IA generativa.' },
  { year: '2024+', title: 'Produtos SaaS e escala', text: 'Foco em sistemas escaláveis, performance e empreendedorismo digital.' },
]

const services = [
  { icon: FaLaptopCode, title: 'Desenvolvimento Web', desc: 'Aplicações modernas com foco em performance e UX premium.' },
  { icon: FaCode, title: 'Sistemas Personalizados', desc: 'Soluções sob medida para operações e processos críticos.' },
  { icon: FaBrain, title: 'Automação com IA', desc: 'Fluxos inteligentes para reduzir custo e ganhar escala.' },
  { icon: FaRobot, title: 'Bots WhatsApp', desc: 'Bots estratégicos para vendas, suporte e relacionamento.' },
  { icon: FaServer, title: 'APIs e Integrações', desc: 'Integração robusta entre sistemas e plataformas digitais.' },
  { icon: FaChartLine, title: 'Dashboards', desc: 'Painéis de dados claros para decisões orientadas por métricas.' },
  { icon: FaGlobe, title: 'Landing Pages', desc: 'Páginas de alta conversão com design e copy estratégica.' },
  { icon: FaArrowRight, title: 'Consultoria Tecnológica', desc: 'Direcionamento técnico para produtos digitais escaláveis.' },
]

const stack = [
  { label: 'React', icon: SiReact },
  { label: 'Next.js', icon: FaCode },
  { label: 'Node.js', icon: SiNodedotjs },
  { label: 'Python', icon: SiPython },
  { label: 'Firebase', icon: SiFirebase },
  { label: 'Supabase', icon: SiSupabase },
  { label: 'PostgreSQL', icon: SiPostgresql },
  { label: 'TailwindCSS', icon: SiTailwindcss },
  { label: 'Docker', icon: SiDocker },
  { label: 'OpenAI API', icon: SiOpenai },
  { label: 'GitHub', icon: SiGithub },
]

const testimonials = [
  {
    name: 'Marina Alves',
    role: 'Head de Growth • Startup SaaS',
    quote: 'Jefferson trouxe clareza técnica e velocidade. Entregou uma solução de automação que aumentou nossa conversão em poucas semanas.',
  },
  {
    name: 'Rafael Mendes',
    role: 'CEO • Agência Digital',
    quote: 'Profissional extremamente estratégico. O dashboard inteligente criado por ele virou peça central no nosso processo de decisão.',
  },
  {
    name: 'Larissa Costa',
    role: 'COO • E-commerce',
    quote: 'A integração com IA e bots WhatsApp feita pelo Jefferson elevou nosso atendimento e reduziu tarefas manuais drasticamente.',
  },
]

const stats = [
  { label: 'Projetos entregues', target: 42 },
  { label: 'Automações ativas', target: 26 },
  { label: 'Integrações concluídas', target: 75 },
]

const sectionFade = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

function useCountUp(target) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    let frame
    let start
    const duration = 1100

    const step = (time) => {
      if (!start) start = time
      const progress = Math.min((time - start) / duration, 1)
      setValue(Math.floor(progress * target))
      if (progress < 1) frame = requestAnimationFrame(step)
    }

    frame = requestAnimationFrame(step)
    return () => cancelAnimationFrame(frame)
  }, [target])

  return value
}

function CountStat({ label, target }) {
  const value = useCountUp(target)
  return (
    <div className="glass-card rounded-2xl p-4 text-center">
      <p className="text-2xl font-semibold text-slate-100">{value}+</p>
      <p className="text-xs text-slate-400">{label}</p>
    </div>
  )
}

function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="mb-10 max-w-2xl">
      <p className="mb-3 text-sm uppercase tracking-[0.25em] text-cyan-300/80">{eyebrow}</p>
      <h2 className="text-3xl font-semibold text-white md:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-slate-400">{description}</p>}
    </div>
  )
}

function App() {
  const [loading, setLoading] = useState(true)
  const [typed, setTyped] = useState('')
  const [filter, setFilter] = useState('Todos')
  const [sent, setSent] = useState(false)
  const [cursor, setCursor] = useState({ x: 0, y: 0 })

  const subtitle = 'Desenvolvedor • IA • Automação • Sistemas Inteligentes'

  useEffect(() => {
    const loadTimer = setTimeout(() => setLoading(false), 1000)
    return () => clearTimeout(loadTimer)
  }, [])

  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      index += 1
      setTyped(subtitle.slice(0, index))
      if (index === subtitle.length) clearInterval(interval)
    }, 45)
    return () => clearInterval(interval)
  }, [subtitle])

  useEffect(() => {
    const move = (event) => setCursor({ x: event.clientX, y: event.clientY })
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  const categories = useMemo(() => ['Todos', ...new Set(projects.map((project) => project.category))], [])

  const filteredProjects = useMemo(
    () => (filter === 'Todos' ? projects : projects.filter((project) => project.category === filter)),
    [filter],
  )

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-950 text-slate-200">
        <div className="text-center">
          <p className="text-lg tracking-[0.3em] text-cyan-300">JT</p>
          <div className="mx-auto mt-4 h-1 w-44 overflow-hidden rounded-full bg-slate-800">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400"
              initial={{ x: '-100%' }}
              animate={{ x: '0%' }}
              transition={{ duration: 0.9, ease: 'easeInOut' }}
            />
          </div>
          <p className="mt-4 text-xs uppercase tracking-[0.2em] text-slate-400">Carregando experiência premium</p>
        </div>
      </div>
    )
  }

  return (
    <div className="relative overflow-hidden bg-slate-950 text-slate-200">
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="grid-overlay" />
        <div className="glow-one" />
        <div className="glow-two" />
        {Array.from({ length: 20 }).map((_, index) => (
          <span
            key={`particle-${index}`}
            className="particle"
            style={{ left: `${(index * 13) % 100}%`, top: `${(index * 17) % 100}%`, animationDelay: `${index * 0.6}s` }}
          />
        ))}
      </div>

      <div
        className="custom-cursor hidden md:block"
        style={{ transform: `translate3d(${cursor.x - 12}px, ${cursor.y - 12}px, 0)` }}
      />

      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/60 backdrop-blur-xl">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 md:px-6">
          <a href="#inicio" className="text-sm font-semibold tracking-[0.2em] text-white">JT</a>
          <div className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            {['sobre', 'projetos', 'servicos', 'stack', 'contato'].map((item) => (
              <a key={item} className="transition hover:text-cyan-300" href={`#${item}`}>
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <main className="relative z-10">
        <section id="inicio" className="mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center px-4 pt-24 md:px-6">
          <motion.div initial="hidden" animate="show" variants={sectionFade}>
            <p className="mb-4 inline-flex rounded-full border border-cyan-300/30 bg-cyan-400/10 px-4 py-1 text-xs uppercase tracking-[0.2em] text-cyan-200">
              Tecnologia • IA • Inovação
            </p>
            <h1 className="text-5xl font-bold leading-tight text-white md:text-7xl">Jefferson Teles</h1>
            <p className="mt-4 min-h-7 text-lg text-blue-200 md:text-2xl">{typed}<span className="typing">|</span></p>
            <p className="mt-6 max-w-2xl text-slate-300">
              Construindo soluções digitais modernas com inteligência artificial, automação e tecnologia escalável.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#projetos" className="btn-primary">Ver Projetos</a>
              <a href="#contato" className="btn-secondary">Entrar em Contato</a>
            </div>
            <div className="mt-8 flex items-center gap-4">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="glass-card rounded-full p-3 transition hover:scale-105 hover:text-cyan-300"
                  aria-label={label}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </motion.div>
          <motion.div
            className="mt-12 grid gap-4 md:max-w-xl md:grid-cols-3"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.15 }}
          >
            {stats.map((stat) => (
              <CountStat key={stat.label} {...stat} />
            ))}
          </motion.div>
        </section>

        <motion.section id="sobre" className="mx-auto w-full max-w-6xl px-4 py-24 md:px-6" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={sectionFade}>
          <SectionTitle
            eyebrow="Sobre mim"
            title="Desenvolvimento orientado por tecnologia, estratégia e escala"
            description="Desenvolvedor focado em IA, automações, APIs, bots, sistemas web e soluções digitais com visão empreendedora e alta capacidade de aprendizado rápido."
          />
          <div className="grid gap-8 md:grid-cols-[1fr_1.4fr]">
            <div className="glass-card flex min-h-72 items-center justify-center rounded-3xl p-6">
              <div className="avatar-glow flex h-56 w-56 items-center justify-center rounded-full text-6xl font-semibold text-white">JT</div>
            </div>
            <div>
              <div className="grid gap-3 sm:grid-cols-2">
                {skills.map((skill) => (
                  <div key={skill} className="glass-card rounded-xl px-4 py-3 text-sm text-slate-200">
                    {skill}
                    <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-800">
                      <motion.div
                        className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${70 + (skill.length % 30)}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section id="projetos" className="mx-auto w-full max-w-6xl px-4 py-24 md:px-6" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }} variants={sectionFade}>
          <SectionTitle
            eyebrow="Projetos"
            title="Portfólio moderno com foco em IA, automação e produtos digitais"
            description="Projetos autorais com design premium, arquitetura limpa e foco em resultado real de negócio."
          />

          <div className="mb-8 flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setFilter(category)}
                className={`rounded-full border px-4 py-2 text-sm transition ${
                  filter === category
                    ? 'border-cyan-300/50 bg-cyan-400/20 text-cyan-200'
                    : 'border-white/15 bg-white/5 text-slate-300 hover:border-cyan-400/40'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project, index) => (
              <motion.article
                key={project.name}
                className="glass-card group overflow-hidden rounded-2xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
              >
                <div className="h-36 bg-gradient-to-r from-blue-500/20 via-purple-500/25 to-cyan-400/20" />
                <div className="p-5">
                  <p className="text-xs uppercase tracking-[0.16em] text-cyan-300/80">{project.category}</p>
                  <h3 className="mt-2 text-xl font-semibold text-white">{project.name}</h3>
                  <p className="mt-3 text-sm text-slate-300">{project.description}</p>
                  <p className="mt-3 text-xs text-slate-400">{project.tech.join(' • ')}</p>
                  <div className="mt-5 flex gap-3">
                    <a href="#" className="btn-primary flex-1 text-center">Demo</a>
                    <a href="#" className="btn-secondary flex-1 text-center">GitHub</a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section id="jornada" className="mx-auto w-full max-w-6xl px-4 py-24 md:px-6" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={sectionFade}>
          <SectionTitle
            eyebrow="Experiência"
            title="Jornada de evolução em tecnologia e produtos inteligentes"
          />
          <div className="relative border-l border-cyan-400/30 pl-6">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                className="relative mb-10"
                initial={{ opacity: 0, x: -18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <span className="absolute -left-[33px] top-1 h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_16px_#22d3ee]" />
                <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">{item.year}</p>
                <h3 className="mt-2 text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-slate-400">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section id="servicos" className="mx-auto w-full max-w-6xl px-4 py-24 md:px-6" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} variants={sectionFade}>
          <SectionTitle eyebrow="Serviços" title="Soluções premium para crescimento digital" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map(({ icon: Icon, title, desc }) => (
              <article key={title} className="glass-card rounded-2xl p-5 transition hover:-translate-y-1 hover:border-cyan-300/40">
                <Icon className="text-2xl text-cyan-300" />
                <h3 className="mt-4 font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm text-slate-400">{desc}</p>
              </article>
            ))}
          </div>
        </motion.section>

        <motion.section id="stack" className="mx-auto w-full max-w-6xl px-4 py-24 md:px-6" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={sectionFade}>
          <SectionTitle eyebrow="Stack Tecnológica" title="Ecossistema moderno de desenvolvimento" />
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {stack.map(({ label, icon: Icon }) => (
              <div key={label} className="glass-card group relative rounded-xl p-4 text-center">
                <Icon className="mx-auto text-3xl text-cyan-300 transition group-hover:drop-shadow-[0_0_14px_rgba(34,211,238,0.7)]" />
                <p className="mt-3 text-sm text-slate-300">{label}</p>
                <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 rounded bg-slate-900 px-2 py-1 text-xs text-cyan-200 opacity-0 transition group-hover:opacity-100">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section id="depoimentos" className="mx-auto w-full max-w-6xl px-4 py-24 md:px-6" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={sectionFade}>
          <SectionTitle eyebrow="Depoimentos" title="Resultados percebidos por clientes e parceiros" />
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((item) => (
              <article key={item.name} className="glass-card rounded-2xl p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 font-semibold text-white">
                  {item.name.split(' ').map((name) => name[0]).join('').slice(0, 2)}
                </div>
                <h3 className="font-semibold text-white">{item.name}</h3>
                <p className="text-sm text-cyan-300">{item.role}</p>
                <p className="mt-4 text-sm text-slate-300">“{item.quote}”</p>
              </article>
            ))}
          </div>
        </motion.section>

        <motion.section id="contato" className="mx-auto w-full max-w-6xl px-4 pb-24 pt-24 md:px-6" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} variants={sectionFade}>
          <SectionTitle eyebrow="Contato" title="Vamos construir algo incrível juntos." />
          <div className="grid gap-8 md:grid-cols-2">
            <form
              className="glass-card rounded-2xl p-6"
              onSubmit={(event) => {
                event.preventDefault()
                setSent(true)
              }}
            >
              <div className="space-y-4">
                <label className="block text-sm text-slate-300">
                  Nome
                  <input required className="mt-2 w-full rounded-lg border border-white/10 bg-slate-900/70 px-4 py-3 text-slate-100 focus:border-cyan-300 focus:outline-none" />
                </label>
                <label className="block text-sm text-slate-300">
                  Email
                  <input required type="email" className="mt-2 w-full rounded-lg border border-white/10 bg-slate-900/70 px-4 py-3 text-slate-100 focus:border-cyan-300 focus:outline-none" />
                </label>
                <label className="block text-sm text-slate-300">
                  Mensagem
                  <textarea required rows="5" className="mt-2 w-full rounded-lg border border-white/10 bg-slate-900/70 px-4 py-3 text-slate-100 focus:border-cyan-300 focus:outline-none" />
                </label>
              </div>
              <button type="submit" className="btn-primary mt-5 w-full justify-center">Enviar</button>
              {sent && <p className="mt-3 text-sm text-cyan-300">Mensagem enviada com sucesso. Retorno em breve.</p>}
            </form>
            <div className="glass-card rounded-2xl p-6">
              <p className="text-slate-300">Canais para contato direto:</p>
              <div className="mt-5 space-y-3 text-sm">
                {socialLinks.map(({ icon: Icon, label, href }) => (
                  <a key={label} href={href} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-4 py-3 transition hover:border-cyan-300/50 hover:text-cyan-200">
                    <Icon />
                    <span>{label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.section>
      </main>

      <footer className="relative z-10 border-t border-white/10 bg-slate-950/80">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-10 md:grid-cols-3 md:px-6">
          <div>
            <p className="text-xl font-semibold text-white">Jefferson Teles</p>
            <p className="mt-2 text-sm text-slate-400">Tecnologia avançada para produtos digitais de alto nível.</p>
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Navegação</p>
            <div className="mt-3 flex flex-wrap gap-3 text-sm text-slate-300">
              {['inicio', 'sobre', 'projetos', 'servicos', 'contato'].map((item) => (
                <a key={item} href={`#${item}`} className="hover:text-cyan-300">{item}</a>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Redes</p>
            <div className="mt-3 flex gap-3">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" className="glass-card rounded-full p-3 hover:text-cyan-300" aria-label={label}>
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>
        <p className="border-t border-white/10 py-4 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Jefferson Teles — Arquitetando experiências digitais inteligentes.
        </p>
      </footer>
    </div>
  )
}

export default App
