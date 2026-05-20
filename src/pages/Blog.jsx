import React from 'react';
import ReactMarkdown from 'react-markdown';
import { motion } from 'framer-motion';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "O Futuro da Automação com Agentes de IA",
      date: "19 Mai, 2026",
      excerpt: "Como a integração de LLMs em fluxos de trabalho está mudando o paradigma da eficiência operacional.",
      content: `
# O Futuro da Automação com Agentes de IA

A automação clássica baseada em regras está dando lugar a um novo paradigma: os **Agentes Autônomos**. Diferente dos scripts tradicionais, esses agentes conseguem tomar decisões em tempo real com base no contexto.

### Por que isso importa?
Empresas que adotam agentes de IA conseguem:
1. Reduzir custos operacionais em até 60%.
2. Escalar processos sem aumentar a força de trabalho.
3. Obter insights proativos de grandes volumes de dados.

O uso de ferramentas como **LangChain** e **AutoGPT** permite que desenvolvedores criem sistemas que não apenas executam, mas "pensam" sobre o próximo passo ideal.
      `
    }
  ];

  return (
    <div className="pt-32 pb-20 container-lusion min-h-screen">
      <Link to="/" className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-lusion-primary mb-12 hover:translate-x-[-4px] transition-transform">
        <FiArrowLeft /> Voltar ao Portfólio
      </Link>

      <div className="max-w-4xl">
        <span className="text-sm font-bold tracking-lusion-wide uppercase text-lusion-primary flex items-center gap-4 mb-8">
          <span className="w-8 h-px bg-lusion-primary" />
          Pensamentos Técnicos
        </span>
        <h1 className="mb-20">Insights &<br/>Engenharia</h1>

        <div className="space-y-24">
          {posts.map((post) => (
            <motion.article 
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group"
            >
              <p className="text-[10px] font-bold tracking-widest uppercase text-lusion-text/30 mb-4">{post.date}</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-8 group-hover:text-lusion-primary transition-colors">
                {post.title}
              </h2>
              <div className="prose dark:prose-invert prose-lusion max-w-none text-lusion-text/60 leading-relaxed">
                <ReactMarkdown>{post.content}</ReactMarkdown>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
