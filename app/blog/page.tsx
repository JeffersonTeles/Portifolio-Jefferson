import { BookOpen, Rss } from 'lucide-react';
import { PostCard } from '@/components/ui/PostCard';
import { getAllPosts } from '@/lib/posts.server';
import { createPageMetadata } from '@/lib/metadata';
import styles from '@/components/ui/BlogIndex.module.css';

const pageMetadata = createPageMetadata({
  title: 'Blog',
  description: 'Notas de Jefferson Teles sobre frontend, Linux, suporte e a construção de interfaces.',
  path: '/blog',
});

export const metadata = {
  ...pageMetadata,
  robots: { index: false, follow: false },
};

export default function BlogIndexPage() {
  const posts = getAllPosts();
  const allTags = Array.from(new Set(posts.flatMap((post) => post.tags))).sort();

  return (
    <section className={styles.page}>
      <div className="container">
        <header className={styles.header}>
          <div>
            <span className={styles.kicker}>Notas da jornada</span>
            <h1>O que eu aprendi <span>no caminho.</span></h1>
          </div>
          <div>
            <p>
              Registro de trabalho, estudos e perguntas sobre a transição entre suporte técnico
              e desenvolvimento frontend.
            </p>
            <div className={styles.meta}>
              <span><BookOpen size={13} aria-hidden /> {posts.length} posts</span>
              <span><Rss size={13} aria-hidden /> RSS disponível</span>
            </div>
            {allTags.length > 0 && (
              <div className={styles.tags}>
                {allTags.map((tag) => <span className={styles.tag} key={tag}>#{tag}</span>)}
              </div>
            )}
          </div>
        </header>

        {posts.length > 0 ? (
          <div className={styles.list}>
            {posts.map((post, index) => (
              <PostCard key={post.slug} post={post} featured={index === 0} />
            ))}
          </div>
        ) : (
          <p className={styles.empty}>As primeiras notas ainda estão sendo escritas.</p>
        )}
      </div>
    </section>
  );
}
