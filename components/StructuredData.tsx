interface StructuredDataProps {
  type?: 'organization' | 'website' | 'both';
}

export default function StructuredData({ type = 'both' }: StructuredDataProps) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${baseUrl}/#organization`,
    "name": "Birds of Eden",
    "url": baseUrl,
    "logo": `${baseUrl}/assets/logo.jpeg`,
    "description": "A cutting-edge software company dedicated to transforming ideas into reality through innovative technology solutions",
    "foundingDate": "2024",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "BD"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "availableLanguage": ["English", "Bengali", "Arabic"]
    },
    "sameAs": [
      "https://twitter.com/birdsofeden",
      "https://linkedin.com/company/birds-of-eden",
      "https://github.com/birds-of-eden"
    ],
    "knowsAbout": [
      "Web Development",
      "Mobile App Development",
      "Custom Software Solutions",
      "Technology Consulting",
      "Digital Transformation"
    ]
  };

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    "name": "Birds of Eden",
    "url": baseUrl,
    "description": "Transforming ideas into reality through innovative technology solutions",
    "publisher": {
      "@type": "Organization",
      "@id": `${baseUrl}/#organization`,
      "name": "Birds of Eden",
      "url": baseUrl
    }
  };

  const structuredData = type === 'organization' ? organizationData : 
                        type === 'website' ? websiteData : 
                        [organizationData, websiteData];

  return (
    <>
      {Array.isArray(structuredData) ? (
        structuredData.map((data, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
          />
        ))
      ) : (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}
    </>
  );
}
