import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { RFQForm } from "@/components/forms/RFQForm";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact",
  description: "Get in touch for RFQ and inquiries.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <Section>
      <Heading level={1}>Contact</Heading>
      <p>Submit your Request for Quote below.</p>
      <RFQForm />
    </Section>
  );
}
