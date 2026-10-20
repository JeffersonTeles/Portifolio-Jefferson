import type { Metadata, Viewport } from 'next';
import { IBM_Plex_Mono, IBM_Plex_Sans } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import { siteConfig } from '@/config/site';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ThemeProvider } from '@/components/ui/ThemeProvider';
import { ScrollProgress } from '@/components/ui/ScrollProgress';
import { MotionProvider } from '@/components/ui/MotionProvider';

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-ibm-plex-sans',
  display: 'swap',
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-ibm-plex-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s · ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  keywords: [
    'Jefferson Teles',
    'suporte técnico',
    'automação industrial',
    'desenvolvimento frontend',
    'Next.js',
    'React',
    'interfaces web',
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.social.github }],
  creator: siteConfig.name,
  openGraph: {
    type: 'website',
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.shortName,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.shortName} — Suporte, automação e frontend`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  alternates: {
    canonical: '/',
    types: {
      'application/rss+xml': [{ url: '/rss.xml', title: 'RSS Feed' }],
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#14120f' },
    { media: '(prefers-color-scheme: light)', color: '#f4f1eb' },
  ],
  colorScheme: 'dark light',
  width: 'device-width',
  initialScale: 1,
};

const antiFlickerScript = `
(function() {
  try {
    var key = 'jt-theme-preference';
    var stored = localStorage.getItem(key);
    var theme = 'dark';
    if (stored === 'dark' || stored === 'light') {
      theme = stored;
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      theme = 'light';
    }
    var root = document.documentElement;
    root.setAttribute('data-theme', theme);
    root.style.colorScheme = theme;
  } catch (e) {}
})();
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${ibmPlexSans.variable} ${ibmPlexMono.variable}`} suppressHydrationWarning>
      <head>
        <Script id="theme-anti-flicker" strategy="beforeInteractive">
          {antiFlickerScript}
        </Script>
      </head>
      <body>
        <MotionProvider>
          <ThemeProvider>
            <ScrollProgress />
            <a href="#conteudo" className="skip-link">Pular para o conteúdo</a>
            <Navbar />
            <main id="conteudo">{children}</main>
            <Footer />
          </ThemeProvider>
        </MotionProvider>
      </body>
    </html>
  );
}
