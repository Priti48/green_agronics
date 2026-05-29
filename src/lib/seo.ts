import type { Metadata } from "next";

export const SITE = {
  name:        "Green Agronics",
  tagline:     "Premium Makhana Exporter & Organic Wellness Supplier",
  url:         process.env.NEXT_PUBLIC_SITE_URL || "https://greenagronics.com",
  locale:      "en_IN",
  email:       "export@greenagronics.com",
  phone:       "+91-8178874181",
  whatsapp:    "918178874181",
  address:     "Bihar, India",
  gmbProfile:  "https://g.page/greenagronics",
  logo:        "/assets/icons/logo192.svg",
  ogImage:     "/assets/images/herobanner.svg",
};

const DEFAULT_KEYWORDS = [
  "makhana exporter India",
  "flavoured makhana supplier",
  "fox nut exporter",
  "bulk makhana supplier",
  "organic supplement exporter",
  "healthy snacks India export",
  "moringa powder supplier",
  "ashwagandha supplier India",
  "healthy snack export India",
  "private label makhana",
  "raw makhana wholesale",
  "green agronics",
  "organic food export Bihar",
];

// ── Metadata builder ──────────────────────────────────────────────────────────
interface SEOConfig {
  title?: string;
  description?: string;
  keywords?: string[];
  path?: string;
  noIndex?: boolean;
  image?: string;
  type?: "website" | "article";
}

export function buildMetadata({
  title,
  description = `${SITE.tagline} — Direct from the farmlands of Bihar, India.`,
  keywords = DEFAULT_KEYWORDS,
  path = "",
  noIndex = false,
  image = SITE.ogImage,
  type = "website",
}: SEOConfig = {}): Metadata {
  const fullTitle = title ? `${title} | ${SITE.name}` : `${SITE.name} | ${SITE.tagline}`;
  const canonical = `${SITE.url}${path}`;

  return {
    title:       fullTitle,
    description,
    keywords:    keywords.join(", "),
    metadataBase: new URL(SITE.url),
    alternates:  { canonical },
    openGraph: {
      title:       fullTitle,
      description,
      url:         canonical,
      siteName:    SITE.name,
      locale:      SITE.locale,
      type,
      images: [{ url: image, width: 1200, height: 630, alt: fullTitle }],
    },
    twitter: {
      card:        "summary_large_image",
      title:       fullTitle,
      description,
      images:      [image],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true, "max-image-preview": "large" },
    verification: {
      google: process.env.NEXT_PUBLIC_GSC_VERIFICATION,
    },
  };
}

// ── JSON-LD schemas ───────────────────────────────────────────────────────────

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
    logo: `${SITE.url}${SITE.logo}`,
    description: SITE.tagline,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: SITE.phone,
      contactType: "customer service",
      areaServed: "Worldwide",
      availableLanguage: ["English", "Hindi"],
    },
    address: {
      "@type": "PostalAddress",
      addressRegion: "Bihar",
      addressCountry: "IN",
    },
    sameAs: [
      "https://www.instagram.com/greenagronics",
      "https://www.linkedin.com/company/greenagronics",
      SITE.gmbProfile,
    ],
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "FoodEstablishment"],
    name: SITE.name,
    url: SITE.url,
    telephone: SITE.phone,
    email: SITE.email,
    priceRange: "$$",
    servesCuisine: "Organic Health Foods",
    address: {
      "@type": "PostalAddress",
      addressRegion: "Bihar",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 25.5941,
      longitude: 85.1376,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "18:00",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "2500",
      bestRating: "5",
    },
  };
}

export function productSchema(product: {
  name: string;
  description: string;
  image: string;
  price?: number;
  currency?: string;
  sku?: string;
  rating?: number;
  reviewCount?: number;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: `${SITE.url}${product.image}`,
    brand: { "@type": "Brand", name: SITE.name },
    sku: product.sku,
    offers: product.price
      ? {
          "@type": "Offer",
          price: product.price,
          priceCurrency: product.currency || "INR",
          availability: "https://schema.org/InStock",
          seller: { "@type": "Organization", name: SITE.name },
        }
      : undefined,
    aggregateRating: product.rating
      ? {
          "@type": "AggregateRating",
          ratingValue: product.rating,
          reviewCount: product.reviewCount || 100,
        }
      : undefined,
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE.url}${item.url}`,
    })),
  };
}

export function articleSchema(article: {
  title: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  authorName?: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    image: `${SITE.url}${article.image}`,
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    author: {
      "@type": "Person",
      name: article.authorName || SITE.name,
    },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      logo: { "@type": "ImageObject", url: `${SITE.url}${SITE.logo}` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE.url}${article.url}` },
  };
}
