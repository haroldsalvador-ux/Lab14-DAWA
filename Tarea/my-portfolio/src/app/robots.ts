import { MetadataRoute } from 'next';
import { personalInfo } from '@/lib/data';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/_next/'],
      },
      {
        userAgent: 'Googlebot',
        allow: ['/', '/contact'],
        disallow: ['/api/', '/admin/'],
      },
      {
        // Bloquea rastreadores de IA que solo recopilan contenido
        userAgent: ['GPTBot', 'CCBot'],
        disallow: '/',
      },
    ],
    sitemap: `${personalInfo.siteUrl}/sitemap.xml`,
    host: personalInfo.siteUrl,
  };
}
