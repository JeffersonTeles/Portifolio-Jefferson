import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { PostMeta } from '@/types/post';
import { formatDate } from '@/lib/utils';
import styles from './Home.module.css';

export function JournalSection({ posts }: { posts: PostMeta[] }) {
  return (
    <section id="journal" className={styles.journalSection}>
      <div className="container">
        <header className={styles.journalHeader}>
          <div>
            <h2>Notas de trabalho e aprendizado.</h2>
          </div>
          <Link href="/blog" className={styles.textLink}>
            Ver anotações <ArrowRight size={15} aria-hidden />
          </Link>
        </header>
        {posts.length > 0 ? (
          <div className={styles.journalList}>
            {posts.map((post) => (
              <article className={styles.journalRow} key={post.slug}>
                <time dateTime={post.date}>{formatDate(post.date)}</time>
                <div>
                  <span>{post.tags.slice(0, 2).join(' · ')}</span>
                  <h3><Link href={`/blog/${post.slug}`}>{post.title}</Link></h3>
                  <p>{post.description}</p>
                </div>
                <ArrowRight size={17} aria-hidden />
              </article>
            ))}
          </div>
        ) : (
          <p className={styles.emptyState}>As primeiras notas ainda estão sendo escritas.</p>
        )}
      </div>
    </section>
  );
}
