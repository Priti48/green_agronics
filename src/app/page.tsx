import { buildMetadata, faqSchema } from "@/lib/seo";
import type { Metadata } from "next";
import Script from "next/script";

import Hero from "@/components/home/Hero";
import { StatsCounter } from "@/components/sections/StatsCounter";
import { ProductCategories } from "@/components/sections/ProductCategories";
import { AboutSection } from "@/components/sections/AboutSection";
import { WhyTrustUs } from "@/components/sections/WhyTrustUs";
import { ProductsShowcase } from "@/components/sections/ProductsShowcase";
import { ExportCountries } from "@/components/sections/ExportCountries";
import { PrivateLabel } from "@/components/sections/PrivateLabel";
import { IndustriesServed } from "@/components/sections/IndustriesServed";
import FeaturedProducts from "@/components/sections/FeaturedProducts";
import { GreenDifference } from "@/components/sections/GreenDifference";
import { ProductRange } from "@/components/sections/ProductRange";
import { WholesaleSection } from "@/components/sections/WholesaleSection";
import { TrustedFAQ } from "@/components/sections/TrustedFAQ";
import { GoogleReviews } from "@/components/sections/GoogleReviews";
import { Testimonials } from "@/components/sections/Testimonials";
import TrustBar from "@/components/sections/TrustBar";

export const metadata: Metadata = buildMetadata({
  title: "Trusted Exporter of Premium Makhana & Organic Wellness Products",
  description:
    "Green Agronics — Certified organic makhana exporter from Bihar, India. FSSAI, GMP, Halal certified. Bulk supply, private label, and OEM services. Export to 50+ countries.",
  path: "/",
});

const HOME_FAQS = [
  {
    question: "What is the minimum order quantity (MOQ) for export?",
    answer: "Our MOQ starts at 100 kg for most products. For private label orders, MOQ varies by packaging type — typically 500 units for retail packs.",
  },
  {
    question: "Which countries does Green Agronics export to?",
    answer: "We export to 50+ countries including UAE, USA, UK, Canada, Germany, Australia, Singapore, Saudi Arabia, and many more.",
  },
  {
    question: "Is Green Agronics FSSAI and GMP certified?",
    answer: "Yes. Green Agronics holds FSSAI, GMP, ISO 22000, Halal, and Organic certifications. Every batch ships with a Certificate of Analysis (CoA).",
  },
  {
    question: "Can you do private label / OEM packaging?",
    answer: "Yes, we offer full private label and OEM services — custom packaging, branding, and formulations. Lead time is typically 15–20 working days after sample approval.",
  },
  {
    question: "What products does Green Agronics export?",
    answer: "We export raw makhana (fox nuts), flavored makhana, ashwagandha, moringa powder, shilajit, neem products, and other organic wellness supplements.",
  },
];

export default function HomePage() {
  const faqJsonLd = JSON.stringify(faqSchema(HOME_FAQS));

  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: faqJsonLd }}
      />

      {/* 1. Hero — export-focused heading + WhatsApp CTA */}
      <Hero />

      {/* 2. Animated stats counters */}
      {/* <StatsCounter /> */}

      {/* 3. Product category cards + B2B strip */}
      <ProductCategories />

      {/* 4. About Green Agronics */}
      <AboutSection />
      
      {/* 10. Featured products (domestic / retail) */}
      <FeaturedProducts />

      {/* 10a. The Green Agronics Difference — video + 3 feature cards */}
      <GreenDifference />

      {/* 10b. Our Product Range — horizontal scroll */}
      <ProductRange />

      {/* 10c. Worldwide B2B Supply & Partnerships */}
      <WholesaleSection />

      {/* 10d. Customer testimonials carousel */}
      <Testimonials />

      {/* 10e. Trusted & FAQ */}
      <TrustedFAQ />

      {/* 5. 8 reasons why importers trust us */}
      <WhyTrustUs />

      {/* 6. Products with live currency pricing */}
      {/* <ProductsShowcase /> */}

      {/* 7. Export countries grid */}
      <ExportCountries />

      {/* 8. Private label / OEM section */}
      <PrivateLabel />

      {/* 9. Industries served */}
      <IndustriesServed />

      {/* 13. Google reviews carousel */}
      <GoogleReviews />

      {/* 14. Customer testimonials */}
      {/* <Testimonials /> */}

      {/* 15. Trust bar — certifications */}
      <TrustBar />
    </>
  );
}
