import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Shop",
  description: "E-commerce coming soon.",
  path: "/shop",
});

export default function ShopPage() {
  return (
    <Section>
      <Heading level={1}>Shop</Heading>
      <p>E-commerce placeholder - future ready.</p>
    </Section>
  );
}
