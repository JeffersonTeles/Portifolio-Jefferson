import type { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';
import { getProjectSlugs } from '@/config/projects';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${siteConfig.url}/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${siteConfig.url}/projetos`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${siteConfig.url}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${siteConfig.url}/contact`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.6,
    },
  ];

  const projects = getProjectSlugs().map<MetadataRoute.Sitemap[number]>((slug) => ({
    url: `${siteConfig.url}/projetos/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [...staticRoutes, ...projects];
}
