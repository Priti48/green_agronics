import type { Metadata } from "next";

const SITE_NAME = "Green Agronics";
const DEFAULT_DESCRIPTION =
  "Global agricultural export solutions. Quality products, reliable delivery.";

interface SEOConfig {
  title?: string;
  description?: string;
  path?: string;
  noIndex?: boolean;
}

export function buildMetadata({
  title,
  description = DEFAULT_DESCRIPTION,
  path = "",
  noIndex = false,
}: SEOConfig = {}): Metadata {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://greenagronics.com";

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(siteUrl),
    openGraph: {
      title: fullTitle,
      description,
      url: `${siteUrl}${path}`,
      siteName: SITE_NAME,
    },
    robots: noIndex ? { index: false, follow: false } : undefined,
  };
}
