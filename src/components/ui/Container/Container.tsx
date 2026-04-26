import type { ReactNode } from "react";
import styles from "./Container.module.scss";

interface ContainerProps {
  children: ReactNode;
  as?: "div" | "section" | "main" | "article";
  className?: string;
}

export function Container({
  children,
  as: Component = "div",
  className = "",
}: ContainerProps) {
  return (
    <Component className={`${styles.container} ${className}`.trim()}>
      {children}
    </Component>
  );
}
