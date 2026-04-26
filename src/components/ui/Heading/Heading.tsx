import type { ReactNode } from "react";
import styles from "./Heading.module.scss";

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
  as?: HeadingLevel;
  level?: HeadingLevel;
  className?: string;
}

export function Heading({
  children,
  as,
  level = 1,
  className = "",
  ...props
}: HeadingProps) {
  const tagMap = { 1: "h1", 2: "h2", 3: "h3", 4: "h4", 5: "h5", 6: "h6" } as const;
  const Tag = tagMap[as ?? level];
  const sizeClass = styles[`h${level}`];

  return (
    <Tag className={`${sizeClass} ${className}`.trim()} {...props}>
      {children}
    </Tag>
  );
}
