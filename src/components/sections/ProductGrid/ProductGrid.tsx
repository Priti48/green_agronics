import type { Product } from "@/data/products";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import styles from "./ProductGrid.module.scss";

interface ProductGridProps {
  products: Product[];
  title?: string;
}

export function ProductGrid({
  products,
  title = "Our Products",
}: ProductGridProps) {
  return (
    <Section>
      <Heading level={2} className={styles.title}>
        {title}
      </Heading>
      <ul className={styles.grid} role="list">
        {products.map((product) => (
          <li key={product.slug}>
            <Link href={`/products/${product.slug}`} className={styles.card}>
              <span className={styles.name}>{product.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}
