import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import styles from "./Testimonials.module.scss";

export function Testimonials() {
  return (
    <Section>
      <Heading level={2} className={styles.title}>
        Testimonials
      </Heading>
      <p className={styles.placeholder}>Placeholder for testimonials section.</p>
    </Section>
  );
}
