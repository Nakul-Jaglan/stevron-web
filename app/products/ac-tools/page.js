export const metadata = {
  title: 'Professional AC Tools & HVAC Equipment | Stevron Tools - Refrigeration Specialists',
  description: 'Premium AC tools and HVAC equipment for professional technicians. Manifold gauges, vacuum pumps, refrigeration tools, leak detectors, and specialized AC equipment with expert quotes.',
  keywords: 'AC tools, HVAC equipment, manifold gauges, vacuum pumps, refrigeration tools, leak detectors, AC repair tools, HVAC technician equipment, professional AC tools, air conditioning tools',
  authors: [{ name: 'Stevron Tools' }],
  creator: 'Stevron Tools',
  publisher: 'Stevron Tools',
  openGraph: {
    title: 'Professional AC Tools & HVAC Equipment | Stevron Tools',
    description: 'Premium AC tools and HVAC equipment for professional technicians. Manifold gauges, vacuum pumps, refrigeration tools, and specialized equipment.',
    type: 'website',
    url: 'https://stevrontools.com/products/ac-tools',
    siteName: 'Stevron Tools',
    locale: 'en_US',
    images: [
      {
        url: '/api/placeholder/1200/630',
        width: 1200,
        height: 630,
        alt: 'Professional AC Tools and HVAC Equipment by Stevron Tools',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@stevrontools',
    title: 'Professional AC Tools & HVAC Equipment | Stevron Tools',
    description: 'Premium AC tools and HVAC equipment for professional technicians. Manifold gauges, vacuum pumps, and specialized equipment.',
    images: ['/api/placeholder/1200/630'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://stevrontools.com/products/ac-tools',
  },
};

import ACClient from "./ac-client";

function ACPage() {
    return(
      <ACClient/>
    )
}

export default ACPage;