import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Certifications",
  description: "Our quality certifications and standards.",
  path: "/certifications",
});

export default function CertificationsPage() {
  return (
    <Section>
      <Heading level={1}>Certifications</Heading>
      <p>Placeholder for certifications.</p>
    </Section>
  );
}
