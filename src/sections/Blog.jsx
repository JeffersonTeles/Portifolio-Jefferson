import React from 'react';
import { useTranslation } from 'react-i18next';
import AnimatedSection from '../components/AnimatedSection';
import { blogPosts } from '../blog/blogData';

const Blog = () => {
  const { t } = useTranslation();
  const publishedPosts = blogPosts.filter((post) => post.published);

  if (publishedPosts.length === 0) {
    return null; // Don't show blog section if no published posts
  }

  return (
    <AnimatedSection id="blog" className="py-28 section-alt">
      <div className="max-w-[900px] mx-auto px-6 md:px-10">
        <h2 className="text-[1.8rem] font-bold text-white mb-16">{t('blog.heading', 'Blog')}</h2>

        <div className="space-y-8">
          {publishedPosts.map((post) => (
            <article
              key={post.id}
              className="group rounded-xl p-6 -mx-6 hover:bg-white/[0.015] transition-colors duration-500 cursor-pointer border border-transparent hover:border-white/[0.04]"
            >
              <div className="flex items-center gap-3 mb-3">
                <time className="text-[0.75rem] text-[#555] font-mono">
                  {new Date(post.date).toLocaleDateString('pt-BR')}
                </time>
                <div className="flex gap-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className="text-[0.7rem] text-accent/60 font-mono">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <h3 className="text-[1.2rem] font-bold text-white mb-3 group-hover:text-accent/90 transition-colors duration-300">
                {post.title}
              </h3>

              <p className="text-[0.95rem] text-[#777] leading-relaxed">{post.excerpt}</p>

              <div className="mt-4 text-[0.85rem] text-[#888] group-hover:text-accent transition-colors duration-300 inline-flex items-center gap-2">
                Ler artigo{' '}
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-[-10px] group-hover:translate-x-0">
                  →
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Blog;
