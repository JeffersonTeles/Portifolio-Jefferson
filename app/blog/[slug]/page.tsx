import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CalendarDays, ChevronLeft, Clock, Tag, User } from 'lucide-react';
import { TableOfContents } from '@/components/ui/TableOfContents';
import { PostCard } from '@/components/ui/PostCard';
import { PostMDXRenderer } from '@/components/mdx/PostMDXRenderer';
import { getAllPostSlugs, getPostBySlug, getRecentPosts } from '@/lib/posts.server';
import { formatDate, formatDateISO } from '@/lib/utils';
import styles from '@/components/ui/PostPage.module.css';

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: 'Post não encontrado' };

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `/blog/${post.slug}`,
      types: { 'application/rss+xml': [{ url: '/rss.xml', title: 'RSS Feed' }] },
    },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.description,
      url: `/blog/${post.slug}`,
      publishedTime: formatDateISO(post.date),
      authors: post.author ? [post.author] : undefined,
      tags: post.tags,
      images: post.cover ? [{ url: post.cover, alt: post.coverAlt ?? post.title }] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: post.cover ? [post.cover] : undefined,
    },
    robots: { index: false, follow: false },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post || post.draft) notFound();

  const relatedPosts = getRecentPosts(3).filter((item) => item.slug !== post.slug).slice(0, 2);

  return (
    <article className={styles.page}>
      <div className="container">
        <header className={styles.header}>
          <Link href="/blog" className={styles.back}>
            <ChevronLeft size={15} aria-hidden /> Voltar para o blog
          </Link>
          <div className={styles.tags}>
            {post.tags.map((tag) => (
              <span className={styles.tag} key={tag}><Tag size={11} aria-hidden /> {tag}</span>
            ))}
          </div>
          <h1>{post.title}</h1>
          <p className={styles.description}>{post.description}</p>
          <div className={styles.meta}>
            <span><User size={14} aria-hidden /> {post.author}</span>
            <span><CalendarDays size={14} aria-hidden /> {formatDate(post.date)}</span>
            <span><Clock size={14} aria-hidden /> {post.readingTime}</span>
          </div>
        </header>

        {post.cover && (
          <div className={styles.cover}>
            <Image
              src={post.cover}
              alt={post.coverAlt ?? post.title}
              fill
              priority
              sizes="(max-width: 1200px) 100vw, 1160px"
            />
          </div>
        )}

        <div className={styles.content}>
          <div className={styles.contentMain}>
            <PostMDXRenderer source={post.content} />
          </div>
          {post.headings.length > 0 && (
            <aside aria-label="Índice do artigo" className="hidden lg:block">
              <TableOfContents headings={post.headings} />
            </aside>
          )}
        </div>

        {relatedPosts.length > 0 && (
          <section className={styles.related}>
            <header className={styles.relatedHeader}>
              <h2>Continue lendo</h2>
              <Link href="/blog">Ver todas as notas</Link>
            </header>
            {relatedPosts.map((relatedPost, index) => (
              <PostCard key={relatedPost.slug} post={relatedPost} featured={index === 0} />
            ))}
          </section>
        )}
      </div>
    </article>
  );
}
