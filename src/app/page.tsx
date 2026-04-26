import dynamic from "next/dynamic";
import { Hero } from "@/components/sections/Hero";
import { products } from "@/data/products";

const ProductGrid = dynamic(
  () => import("@/components/sections/ProductGrid").then((m) => ({ default: m.ProductGrid })),
  { ssr: true }
);

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProductGrid products={products} />
    </>
  );
}
