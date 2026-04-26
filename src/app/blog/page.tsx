import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Blog",
  description: "Latest news and insights from Green Agronics.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <Section>
      <Heading level={1}>Blog</Heading>
      <p>Placeholder for blog listing.</p>
    </Section>
  );
}
