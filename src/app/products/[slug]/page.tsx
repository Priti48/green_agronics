import { notFound } from "next/navigation";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import {
  getProductBySlug,
  getAllProductSlugs,
} from "@/data/products";
import { buildMetadata } from "@/lib/seo";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllProductSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};

  return buildMetadata({
    title: product.name,
    description: product.description,
    path: `/products/${product.slug}`,
  });
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) notFound();

  return (
    <Section>
      <Heading level={1}>{product.name}</Heading>
      {product.description && <p>{product.description}</p>}
    </Section>
  );
}
