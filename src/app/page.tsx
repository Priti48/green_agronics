import Hero from "@/components/home/Hero";
import FeaturedProducts from "@/components/sections/FeaturedProducts";
import { ProductRange } from "@/components/sections/ProductRange";
import { WholesaleSection } from "@/components/sections/WholesaleSection";
import { Testimonials } from "@/components/sections/Testimonials";
import TrustBar from "@/components/sections/TrustBar";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <ProductRange />
      <WholesaleSection />
      <Testimonials />
      <TrustBar />
    </>
  );
}
