import type { ReactNode } from "react";
import { Container } from "../Container";
import styles from "./Section.module.scss";

interface SectionProps {
  children: ReactNode;
  as?: "section" | "div";
  className?: string;
}

export function Section({
  children,
  as: Component = "section",
  className = "",
}: SectionProps) {
  return (
    <Component className={`${styles.section} ${className}`.trim()}>
      <Container>{children}</Container>
    </Component>
  );
}
