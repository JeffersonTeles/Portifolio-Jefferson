import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CalendarDays } from 'lucide-react';
import { formatDate, cn } from '@/lib/utils';
import type { PostMeta } from '@/types/post';
import styles from './PostCard.module.css';

type PostCardProps = {
  post: PostMeta;
  index?: number;
  featured?: boolean;
  showCover?: boolean;
};

export function PostCard({ post, featured = false, showCover = true }: PostCardProps) {
  return (
    <article className={cn(styles.card, featured && styles.cardFeatured)}>
      {showCover && post.cover && (
        <Link href={`/blog/${post.slug}`} className={styles.image}>
          <Image
            src={post.cover}
            alt={post.coverAlt ?? post.title}
            fill
            priority={featured}
            sizes={featured ? '(max-width: 700px) 100vw, 52vw' : '(max-width: 700px) 100vw, 30vw'}
          />
        </Link>
      )}
      <div className={styles.body}>
        <div className={styles.meta}>
          <span>{post.tags.slice(0, 2).join(' · ')}</span>
          <span>{post.readingTime}</span>
        </div>
        <h3 className={styles.title}><Link href={`/blog/${post.slug}`}>{post.title}</Link></h3>
        <p className={styles.description}>{post.description}</p>
        <div className={styles.footer}>
          <span><CalendarDays size={13} aria-hidden /> {formatDate(post.date)}</span>
          <Link href={`/blog/${post.slug}`} aria-label={`Ler ${post.title}`}>
            Ler <ArrowRight size={14} aria-hidden />
          </Link>
        </div>
      </div>
    </article>
  );
}
