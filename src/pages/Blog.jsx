import React from "react";
import ReactMarkdown from "react-markdown";
import { motion } from "framer-motion";
import { FiArrowLeft, FiCalendar, FiClock } from "react-icons/fi";
import { Link } from "react-router-dom";

const posts = [
  {
    id: 1,
    title: "O Futuro da Automação com Agentes de IA",
    date: "19 Mai, 2026",
    readTime: "5 min",
    excerpt:
      "Como a integração de LLMs em fluxos de trabalho está mudando o paradigma da eficiência operacional.",
    content: `
## O Futuro da Automação com Agentes de IA

A automação clássica baseada em regras está dando lugar a um novo paradigma: os **Agentes Autônomos**. Diferente dos scripts tradicionais, esses agentes conseguem tomar decisões em tempo real com base no contexto.

### Por que isso importa?

Empresas que adotam agentes de IA conseguem:

1. Reduzir custos operacionais em até 60%
2. Escalar processos sem aumentar a força de trabalho
3. Obter insights proativos de grandes volumes de dados

O uso de ferramentas como **LangChain** e modelos de linguagem modernos permite que desenvolvedores criem sistemas que não apenas executam, mas "pensam" sobre o próximo passo ideal.

### A stack que uso

Para construir automações inteligentes, minha stack atual combina Node.js para orquestração, Python para os modelos de IA, e Supabase para persistência de estado entre execuções.
    `,
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-20">
      <div className="premium-container">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-white/40 hover:text-white transition-colors mb-16 group"
        >
          <FiArrowLeft
            size={14}
            className="group-hover:-translate-x-1 transition-transform"
          />
          Voltar ao Portfólio
        </Link>

        <div className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-[11px] font-medium uppercase tracking-[0.5em] text-white/30 mb-8 block"
          >
            Pensamentos Técnicos
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[0.9] text-white mb-20 uppercase"
          >
            Insights &<br />
            <span className="text-white/40 italic font-light">Engenharia.</span>
          </motion.h1>

          <div className="space-y-20">
            {posts.map((post, i) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="group border-t border-white/[0.05] pt-12"
              >
                <div className="flex items-center gap-6 mb-6">
                  <div className="flex items-center gap-2 text-white/20">
                    <FiCalendar size={12} />
                    <span className="text-[10px] font-mono uppercase tracking-widest">
                      {post.date}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-white/20">
                    <FiClock size={12} />
                    <span className="text-[10px] font-mono uppercase tracking-widest">
                      {post.readTime} de leitura
                    </span>
                  </div>
                </div>

                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-6 group-hover:text-white/80 transition-colors">
                  {post.title}
                </h2>

                <p className="text-white/40 text-lg font-light leading-relaxed mb-8">
                  {post.excerpt}
                </p>

                <div className="prose prose-invert prose-sm max-w-none text-white/50 leading-relaxed [&_h2]:text-white [&_h2]:font-bold [&_h2]:text-xl [&_h3]:text-white/80 [&_h3]:font-semibold [&_strong]:text-white [&_ol]:text-white/50">
                  <ReactMarkdown>{post.content}</ReactMarkdown>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
