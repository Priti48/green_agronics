import type { Metadata } from "next";
import Script from "next/script";
import { buildMetadata } from "@/lib/seo";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "@/styles/globals.scss";

export const metadata: Metadata = {
  title: "Buy Organic Makhana Online | Premium Fox Nuts Direct From Farmers",
  description:
    "Premium organic makhana (fox nuts) delivered fresh across India. No middlemen, lab-tested, 4.8★ rating. Free delivery on orders. Buy now!",
  keywords: [
    "buy organic makhana online",
    "fox nuts healthy snack",
    "makhana online shopping",
    "organic fox nuts India",
    "healthy snacks delivery",
  ],
  openGraph: {
    title: "Premium Organic Makhana Direct From Farmers",
    description: "No middlemen • Lab tested • Delivered fresh across India",
    url: "https://greenagaronics.com",
    siteName: "Green Agaronics",
    images: [
      {
        url: "https://greenagaronics.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Premium Organic Makhana",
      },
    ],
    type: "website",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  return (
    <html lang="en">
      <head>
        {/* GA4 Script */}
        {gaId && (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            />
            <Script
              id="gtag-init"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${gaId}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </>
        )}
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

