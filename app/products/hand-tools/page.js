export const metadata = {
  title: 'Professional Hand Tools & Manual Equipment | Stevron Tools - Precision Instruments',
  description: 'Premium hand tools and manual equipment for professionals. Wrenches, pliers, screwdrivers, measuring tools, and precision instruments for contractors, mechanics, and technicians.',
  keywords: 'hand tools, manual tools, wrenches, pliers, screwdrivers, measuring tools, precision instruments, contractor tools, mechanic tools, professional hand tools, manual equipment',
  authors: [{ name: 'Stevron Tools' }],
  creator: 'Stevron Tools',
  publisher: 'Stevron Tools',
  openGraph: {
    title: 'Professional Hand Tools & Manual Equipment | Stevron Tools',
    description: 'Premium hand tools and manual equipment for professionals. Wrenches, pliers, screwdrivers, measuring tools, and precision instruments.',
    type: 'website',
    url: 'https://stevrontools.com/products/hand-tools',
    siteName: 'Stevron Tools',
    locale: 'en_US',
    images: [
      {
        url: '/api/placeholder/1200/630',
        width: 1200,
        height: 630,
        alt: 'Professional Hand Tools and Manual Equipment by Stevron Tools',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@stevrontools',
    title: 'Professional Hand Tools & Manual Equipment | Stevron Tools',
    description: 'Premium hand tools and manual equipment for professionals. Wrenches, pliers, screwdrivers, and precision instruments.',
    images: ['/api/placeholder/1200/630'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://stevrontools.com/products/hand-tools',
  },
};

import HandClient from "./hand-client";

function HandPage() {
  return (
    <HandClient/>
  )
}

export default HandPage;