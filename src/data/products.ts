export interface Product {
  slug: string;
  name: string;
  description?: string;
}

export const products: Product[] = [
  { slug: "rice", name: "Rice", description: "Premium quality rice" },
  { slug: "wheat", name: "Wheat", description: "Export-grade wheat" },
  { slug: "spices", name: "Spices", description: "Organic spices" },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getAllProductSlugs(): string[] {
  return products.map((p) => p.slug);
}
