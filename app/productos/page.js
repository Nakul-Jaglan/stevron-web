
import ProductsClient from "./product-client";

export const metadata = {
  title: 'Professional Tools & Equipment Catalog | Stevron Tools - HVAC & Electrical',
  description: 'Browse our extensive catalog of professional-grade AC tools, hand tools, and electrical equipment. Premium tools for HVAC technicians, contractors, and professionals. Get quotes on specialized equipment.',
  keywords: 'professional tools catalog, AC tools, hand tools, HVAC equipment, electrical tools, technician tools, contractor equipment, tool quotes, professional grade tools, refrigeration tools',
  authors: [{ name: 'Stevron Tools' }],
  creator: 'Stevron Tools',
  publisher: 'Stevron Tools',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Professional Tools & Equipment Catalog | Stevron Tools',
    description: 'Browse our extensive catalog of professional-grade AC tools, hand tools, and electrical equipment. Premium tools for HVAC technicians and contractors.',
    type: 'website',
    url: 'https://stevrontools.com/productos',
    siteName: 'Stevron Tools',
    locale: 'en_US',
    images: [
      {
        url: '/api/placeholder/1200/630',
        width: 1200,
        height: 630,
        alt: 'Stevron Tools Professional Equipment Catalog - AC Tools and Hand Tools',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@stevrontools',
    title: 'Professional Tools & Equipment Catalog | Stevron Tools',
    description: 'Browse our extensive catalog of professional-grade AC tools, hand tools, and electrical equipment for HVAC professionals.',
    images: ['/api/placeholder/1200/630'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'verification_token_here',
  },
  alternates: {
    canonical: 'https://stevrontools.com/productos',
  },
};

function ProductsPage() {
  return (
    <ProductsClient/>
  );
}

export default ProductsPage;