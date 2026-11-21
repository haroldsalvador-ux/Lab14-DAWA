import { MetadataRoute } from 'next';
import { projects, personalInfo } from '@/lib/data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = personalInfo.siteUrl;

  // Páginas estáticas (incluye la nueva página de contacto)
  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/projects`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.6 },
  ];

  // Páginas dinámicas de proyectos, con su imagen principal
  const projectPages: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: project.featured ? 0.8 : 0.7,
    images: [project.image.startsWith('http') ? project.image : `${baseUrl}${project.image}`],
  }));

  return [...staticPages, ...projectPages];
}
