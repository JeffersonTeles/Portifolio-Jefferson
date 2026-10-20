import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
};

export function createPageMetadata({ title, description, path, image = siteConfig.ogImage }: PageMetadataInput): Metadata {
  const pageTitle = path === '/' ? siteConfig.title : `${title} · ${siteConfig.shortName}`;
  const url = path === '/' ? siteConfig.url : `${siteConfig.url}${path}`;

  return {
    title: path === '/' ? { absolute: siteConfig.title } : title,
    description,
    alternates: {
      canonical: path,
      types: {
        'application/rss+xml': [{ url: '/rss.xml', title: 'RSS Feed' }],
      },
    },
    openGraph: {
      type: 'website',
      locale: siteConfig.locale,
      url,
      siteName: siteConfig.shortName,
      title: pageTitle,
      description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${title} · ${siteConfig.shortName}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description,
      images: [image],
    },
  };
}
