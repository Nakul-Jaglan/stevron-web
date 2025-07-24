import AboutPageClient from './about-client';

export const metadata = {
  title: "About Stevron Tools - Professional Tool Manufacturer & Supplier",
  description: "Learn about Stevron Tools' commitment to manufacturing premium professional-grade AC tools, DC tools, and hand tools. Discover our story, values, and dedication to quality that professionals trust worldwide.",
  keywords: [
    "about Stevron Tools",
    "professional tool manufacturer",
    "tool company history",
    "quality tool supplier",
    "industrial equipment manufacturer",
    "professional grade tools",
    "tool company values",
    "precision tool manufacturing",
    "reliable tool supplier",
    "tool industry leader"
  ],
  openGraph: {
    title: "About Stevron Tools - Professional Tool Manufacturer",
    description: "Learn about our commitment to manufacturing premium professional-grade tools trusted by experts worldwide.",
    images: ['/og-about.jpg'],
  },
  alternates: {
    canonical: 'https://stevrontools.com/about',
  },
};

export default function AboutPage() {
  return <AboutPageClient />;
}