import { notFound } from "next/navigation";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import {
  getMarketByCountry,
  getAllMarketCountries,
} from "@/data/markets";
import { buildMetadata } from "@/lib/seo";

interface MarketPageProps {
  params: Promise<{ country: string }>;
}

export async function generateStaticParams() {
  return getAllMarketCountries().map((country) => ({ country }));
}

export async function generateMetadata({ params }: MarketPageProps) {
  const { country } = await params;
  const market = getMarketByCountry(country);
  if (!market) return {};

  return buildMetadata({
    title: market.name,
    description: `Export to ${market.name}`,
    path: `/markets/${market.country}`,
  });
}

export default async function MarketPage({ params }: MarketPageProps) {
  const { country } = await params;
  const market = getMarketByCountry(country);

  if (!market) notFound();

  return (
    <Section>
      <Heading level={1}>{market.name}</Heading>
      <p>Export destination: {market.code}</p>
    </Section>
  );
}
