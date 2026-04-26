import dynamic from "next/dynamic";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { products } from "@/data/products";

const ProductGrid = dynamic(
  () => import("@/components/sections/ProductGrid").then((m) => ({ default: m.ProductGrid })),
  { ssr: true }
);
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Products",
  description: "Explore our range of agricultural export products.",
  path: "/products",
});

export default function ProductsPage() {
  return (
    <>
      <Section>
        <Heading level={1}>Products</Heading>
      </Section>
      <ProductGrid products={products} title="Our Product Range" />
    </>
  );
}
