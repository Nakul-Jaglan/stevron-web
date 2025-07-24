import ContactClient from "./contact-client";


export const metadata = {
  title: "Contact Stevron Tools - Get Professional Tool Support & Quotes",
  description: "Contact Stevron Tools for professional tool inquiries, product quotes, and expert support. Call +91-8595817577 or email for AC tools, DC tools, hand tools, and accessories. Fast response guaranteed.",
  keywords: [
    "contact Stevron Tools",
    "tool support",
    "professional tool quotes",
    "tool inquiries",
    "customer service",
    "tool consultation",
    "product support",
    "industrial equipment contact",
    "tool supplier contact",
    "+91-8595817577"
  ],
  openGraph: {
    title: "Contact Stevron Tools - Professional Tool Support",
    description: "Get expert support and quotes for professional tools. Fast response for all your AC tools, DC tools, and hand tools needs.",
    images: ['/og-contact.jpg'],
  },
  alternates: {
    canonical: 'https://stevrontools.com/contact',
  },
};

function ContactPage() {
  return (
    <ContactClient/>
  )
}

export default ContactPage;