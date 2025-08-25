// Schema.org structured data for Stevron Tools
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Stevron Tools",
  "alternateName": "Stevron Professional Tools",
  "url": "https://stevrontools.com",
  "logo": "https://stevrontools.com/logo.png",
  "image": "https://stevrontools.com/api/placeholder/1200/630",
  "description": "Professional tools and equipment supplier specializing in AC tools, hand tools, and HVAC equipment for technicians, contractors, and professionals.",
  "foundingDate": "2020",
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+1-800-STEVRON",
      "contactType": "customer service",
      "availableLanguage": ["English"],
      "areaServed": "US"
    },
    {
      "@type": "ContactPoint",
      "telephone": "+1-800-STEVRON",
      "contactType": "sales",
      "availableLanguage": ["English"],
      "areaServed": "US"
    }
  ],
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "US",
    "addressRegion": "CA",
    "addressLocality": "Los Angeles"
  },
  "sameAs": [
    "https://www.facebook.com/stevrontools",
    "https://www.twitter.com/stevrontools",
    "https://www.linkedin.com/company/stevrontools",
    "https://www.instagram.com/stevrontools"
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "247",
    "bestRating": "5",
    "worstRating": "1"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Professional Tools Catalog",
    "itemListElement": [
      {
        "@type": "OfferCatalog",
        "name": "AC Tools & HVAC Equipment",
        "description": "Professional AC tools and HVAC equipment for technicians"
      },
      {
        "@type": "OfferCatalog", 
        "name": "Hand Tools & Manual Equipment",
        "description": "Premium hand tools and manual equipment for professionals"
      }
    ]
  }
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Stevron Tools",
  "alternateName": "Stevron Professional Tools",
  "url": "https://stevrontools.com",
  "description": "Professional tools and equipment supplier specializing in AC tools, hand tools, and HVAC equipment.",
  "publisher": {
    "@type": "Organization",
    "name": "Stevron Tools"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://stevrontools.com/search?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  },
  "mainEntity": {
    "@type": "ItemList",
    "name": "Product Categories",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "ProductGroup",
          "name": "AC Tools & HVAC Equipment",
          "url": "https://stevrontools.com/productos/herramientas-electricas"
        }
      },
      {
        "@type": "ListItem", 
        "position": 2,
        "item": {
          "@type": "ProductGroup",
          "name": "Hand Tools & Manual Equipment",
          "url": "https://stevrontools.com/productos/hand-tools"
        }
      }
    ]
  }
};

export const breadcrumbSchema = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

export const productSchema = (product) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  "name": product.name,
  "description": product.description,
  "brand": {
    "@type": "Brand",
    "name": "Stevron Tools"
  },
  "manufacturer": {
    "@type": "Organization",
    "name": "Stevron Tools"
  },
  "image": product.image,
  "sku": product.sku || product.id,
  "mpn": product.mpn || product.id,
  "category": product.category,
  "offers": {
    "@type": "Offer",
    "price": product.price?.replace('$', '') || "0",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock",
    "priceValidUntil": new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    "seller": {
      "@type": "Organization",
      "name": "Stevron Tools"
    }
  },
  "aggregateRating": product.rating ? {
    "@type": "AggregateRating",
    "ratingValue": product.rating,
    "reviewCount": product.reviews || "1",
    "bestRating": "5",
    "worstRating": "1"
  } : undefined
});

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Stevron Tools",
  "image": "https://stevrontools.com/api/placeholder/1200/630",
  "telephone": "+1-800-STEVRON",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Industrial Blvd",
    "addressLocality": "Los Angeles",
    "addressRegion": "CA",
    "postalCode": "90001",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "34.0522",
    "longitude": "-118.2437"
  },
  "url": "https://stevrontools.com",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday", 
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "08:00",
      "closes": "17:00"
    }
  ],
  "priceRange": "$$",
  "servedCuisine": "Professional Tools",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "247"
  }
};

export const faqSchema = (faqs) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});
