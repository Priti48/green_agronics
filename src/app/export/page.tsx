import dynamic from "next/dynamic";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { buildMetadata } from "@/lib/seo";

const ExportProcess = dynamic(
  () => import("@/components/sections/ExportProcess").then((m) => ({ default: m.ExportProcess })),
  { ssr: true }
);

export const metadata = buildMetadata({
  title: "Export",
  description: "Our export process and capabilities.",
  path: "/export",
});

export default function ExportPage() {
  return (
    <>
      <Section>
        <Heading level={1}>Export</Heading>
        <p>Placeholder for export process overview.</p>
      </Section>
      <ExportProcess />
    </>
  );
}
