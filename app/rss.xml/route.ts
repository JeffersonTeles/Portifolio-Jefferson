import { Feed } from 'feed';
import { siteConfig } from '@/config/site';
import { getAllPosts } from '@/lib/posts.server';

export async function GET() {
  const date = new Date();
  const author = {
    name: siteConfig.name,
    email: siteConfig.email,
    link: siteConfig.social.linkedin,
  };

  const feed = new Feed({
    title: `${siteConfig.shortName} — Blog`,
    description: siteConfig.description,
    id: siteConfig.url,
    link: siteConfig.url,
    image: `${siteConfig.url}${siteConfig.ogImage}`,
    favicon: `${siteConfig.url}/apple-touch-icon.png`,
    copyright: `© ${date.getFullYear()} ${siteConfig.name}. Todos os direitos reservados.`,
    updated: date,
    generator: 'Next.js + feed',
    feedLinks: {
      rss2: `${siteConfig.url}/rss.xml`,
    },
    author,
  });

  getAllPosts().forEach((post) => {
    const url = `${siteConfig.url}/blog/${post.slug}`;
    feed.addItem({
      title: post.title,
      id: url,
      link: url,
      description: post.description,
      content: post.description,
      author: [author],
      contributor: [author],
      date: new Date(post.date),
      image: post.cover ? `${siteConfig.url}${post.cover}` : undefined,
      category: post.tags.map((tag) => ({ name: tag })),
      published: new Date(post.date),
    });
  });

  return new Response(feed.rss2(), {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      'x-content-type-options': 'nosniff',
    },
  });
}
