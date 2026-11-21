import type { Metadata, Viewport } from 'next';
import { Inter, Instrument_Serif } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Reveal from '@/components/Reveal';
import { personalInfo } from '@/lib/data';

const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-inter' });
const display = Instrument_Serif({ subsets: ['latin'], weight: '400', style: ['normal', 'italic'], display: 'swap', variable: '--font-display' });

export const viewport: Viewport = { themeColor: '#05070d' };

export const metadata: Metadata = {
  metadataBase: new URL(personalInfo.siteUrl),
  title: {
    default: `${personalInfo.name} - ${personalInfo.title}`,
    template: `%s | ${personalInfo.name}`,
  },
  description: personalInfo.description,
  keywords: ['desarrollador de software', 'full stack', 'android', 'kotlin', 'next.js', 'react', 'typescript', 'portafolio', 'Lima', 'Tecsup'],
  authors: [{ name: personalInfo.fullName, url: personalInfo.github }],
  creator: personalInfo.fullName,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'es_PE',
    url: personalInfo.siteUrl,
    title: `${personalInfo.name} - ${personalInfo.title}`,
    description: personalInfo.description,
    siteName: personalInfo.name,
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: `${personalInfo.name} - Portafolio` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${personalInfo.name} - ${personalInfo.title}`,
    description: personalInfo.description,
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
};

// Datos estructurados (schema.org) para que Google entienda quién es la persona del portafolio
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: personalInfo.fullName,
  jobTitle: personalInfo.title,
  url: personalInfo.siteUrl,
  image: `${personalInfo.siteUrl}${personalInfo.avatar}`,
  email: `mailto:${personalInfo.email}`,
  address: { '@type': 'PostalAddress', addressLocality: 'Lima', addressCountry: 'PE' },
  alumniOf: { '@type': 'CollegeOrUniversity', name: 'Tecsup' },
  sameAs: [personalInfo.github, personalInfo.linkedin],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} ${display.variable}`}>
      <body className="letterbox flex min-h-screen flex-col font-sans">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <div className="grain" aria-hidden />
        <Header />
        <main className="grow">{children}</main>
        <Footer />
        <Reveal />
      </body>
    </html>
  );
}
