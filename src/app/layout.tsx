import type { Metadata, MetadataRoute } from 'next';
import { Barlow_Condensed, DM_Sans } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-barlow',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
  variable: '--font-dm-sans',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://thejerseyjoint.com.au'),
  title: {
    default: 'The Jersey Joint | Custom Basketball Uniforms Australia',
    template: '%s | The Jersey Joint',
  },
  description: "Australia's premier custom basketball uniform maker. Fully sublimated, 100% custom design, fast turnaround. Request your design today.",
  keywords: [
    'custom basketball uniforms australia',
    'basketball jersey design',
    'sublimated basketball uniforms',
    'custom basketball kit australia',
    'basketball uniform maker',
    'jersey joint',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: 'https://thejerseyjoint.com.au',
    siteName: 'The Jersey Joint',
    images: [{
      url: '/images/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'The Jersey Joint — Custom Basketball Uniforms',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  alternates: {
    canonical: 'https://thejerseyjoint.com.au',
  },
  icons: {
    icon: '/images/logo.jpeg',
    shortcut: '/images/logo.jpeg',
    apple: '/images/logo.jpeg',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'The Jersey Joint',
  description: 'Custom basketball uniform manufacturer in Australia',
  url: 'https://thejerseyjoint.com.au',
  logo: 'https://thejerseyjoint.com.au/images/logo.png',
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    availableLanguage: 'English',
  },
  areaServed: 'AU',
  priceRange: '$$',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${barlowCondensed.variable} ${dmSans.variable} scroll-smooth`} data-scroll-behavior="smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-dark-primary text-white selection:bg-gold selection:text-dark-primary">
        <div id="root-layout-wrapper">
          <a href="#main-content" className="skip-link">Skip to main content</a>
          <div className="grain-overlay" />
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
