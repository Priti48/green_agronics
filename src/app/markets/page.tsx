import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { markets } from "@/data/markets";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Markets",
  description: "Countries we export to.",
  path: "/markets",
});

export default function MarketsPage() {
  return (
    <Section>
      <Heading level={1}>Markets</Heading>
      <ul>
        {markets.map((market) => (
          <li key={market.country}>
            <Link href={`/markets/${market.country}`}>{market.name}</Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}
