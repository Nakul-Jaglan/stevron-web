import { Titillium_Web } from "next/font/google";
import "./globals.css";
import ChatbaseBot from "../components/ChatbaseBot";

const titilliumWeb = Titillium_Web({
  variable: "--font-titillium-web",
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700", "900"],
});

export const metadata = {
  title: {
    default: "Stevron Tools - Professional AC, DC & Hand Tools | Industrial Equipment Supplier",
    template: "%s | Stevron Tools"
  },
  description: "Stevron Tools offers premium professional-grade AC tools, DC tools, hand tools, and accessories. Trusted by professionals worldwide for precision, reliability, and durability. Shop quality industrial equipment online.",
  keywords: [
    "Stevron Tools",
    "professional tools",
    "AC tools",
    "DC tools", 
    "hand tools",
    "power tools",
    "industrial equipment",
    "cordless tools",
    "precision tools",
    "tool accessories",
    "professional grade tools",
    "electrical tools",
    "workshop tools",
    "construction tools",
    "mechanical tools"
  ],
  authors: [{ name: "Stevron Tools" }],
  creator: "Stevron Tools",
  publisher: "Stevron Tools",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://stevrontools.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Stevron Tools - Professional AC, DC & Hand Tools | Industrial Equipment Supplier",
    description: "Stevron Tools offers premium professional-grade AC tools, DC tools, hand tools, and accessories. Trusted by professionals worldwide for precision, reliability, and durability.",
    url: 'https://stevrontools.com',
    siteName: 'Stevron Tools',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Stevron Tools - Professional Grade Tools',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Stevron Tools - Professional AC, DC & Hand Tools",
    description: "Premium professional-grade tools trusted by professionals worldwide. AC tools, DC tools, hand tools & accessories.",
    images: ['/twitter-image.jpg'],
    creator: '@stevrontools',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  category: 'Industrial Tools & Equipment',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to external domains for faster loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" />
        
        {/* DNS Prefetch for external resources */}
        <link rel="dns-prefetch" href="https://formsubmit.co" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        
        {/* Favicon and Apple Touch Icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Theme Color for mobile browsers */}
        <meta name="theme-color" content="#989b2e" />
        <meta name="msapplication-TileColor" content="#989b2e" />
        
        {/* Viewport for responsive design */}
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        
        {/* Font Awesome with proper integrity hash */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
          integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        
        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Stevron Tools",
              "url": "https://stevrontools.com",
              "logo": "https://stevrontools.com/logo.png",
              "description": "Professional-grade AC tools, DC tools, hand tools, and accessories. Trusted by professionals worldwide for precision, reliability, and durability.",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-8595817577",
                "contactType": "customer service",
                "availableLanguage": ["English"]
              },
              "sameAs": [
                "https://www.facebook.com/stevrontools",
                "https://www.linkedin.com/company/stevrontools",
                "https://twitter.com/stevrontools"
              ],
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "IN"
              }
            })
          }}
        />
        
        {/* Structured Data - Website */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Stevron Tools",
              "url": "https://stevrontools.com",
              "description": "Professional tools and equipment supplier",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://stevrontools.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </head>
      <body
        className={`${titilliumWeb.variable} antialiased`}
      >
        {children}
        <ChatbaseBot />
      </body>
    </html>
  );
}
