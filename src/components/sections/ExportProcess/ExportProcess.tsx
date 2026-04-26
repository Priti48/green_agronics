import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import styles from "./ExportProcess.module.scss";

const steps = [
  { title: "Inquiry", description: "Submit your RFQ" },
  { title: "Quote", description: "Receive competitive pricing" },
  { title: "Order", description: "Confirm and proceed" },
  { title: "Shipment", description: "Global delivery" },
];

export function ExportProcess() {
  return (
    <Section>
      <Heading level={2} className={styles.title}>
        Export Process
      </Heading>
      <ol className={styles.steps} role="list">
        {steps.map((step, index) => (
          <li key={step.title} className={styles.step}>
            <span className={styles.number}>{index + 1}</span>
            <div>
              <strong>{step.title}</strong>
              <p>{step.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
