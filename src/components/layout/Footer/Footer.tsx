import Link from "next/link";
import { Container } from "@/components/ui/Container";
import styles from "./Footer.module.scss";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/markets", label: "Markets" },
  { href: "/export", label: "Export" },
  { href: "/certifications", label: "Certifications" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <Container>
        <nav className={styles.nav} aria-label="Footer navigation">
          <ul className={styles.links}>
            {footerLinks.map(({ href, label }) => (
              <li key={href}>
                <Link href={href}>{label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <p className={styles.copyright}>
          © {currentYear} Green Agronics. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
