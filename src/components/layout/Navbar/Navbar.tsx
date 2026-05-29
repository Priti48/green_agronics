"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import styles from "./Navbar.module.scss";

const NAV_LINKS = [
  { href: "/about", label: "About Us" },
  { href: "/export", label: "Export" },
  { href: "/certifications", label: "Certifications" },
  { href: "/blog", label: "Events & Blog" },
  { href: "/contact", label: "Contact" },
];

const PRODUCT_ITEMS = [
  { href: "/products?category=raw-makhana", label: "Raw Makhana" },
  { href: "/products?category=flavored-makhana", label: "Flavored Makhana" },
  { href: "/products?category=shilajit", label: "Shilajit" },
  { href: "/products?category=ashwagandha", label: "Ashwagandha" },
  { href: "/products?category=moringa", label: "Moringa Powder" },
  { href: "/products?category=neem", label: "Neem Products" },
];

function ChevronIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="10"
      height="6"
      viewBox="0 0 10 6"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M1 1L5 5L9 1"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const productsRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (productsRef.current && !productsRef.current.contains(e.target as Node)) {
        setProductsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeAll = () => {
    setMenuOpen(false);
    setMobileProductsOpen(false);
  };

  return (
    <header className={styles.header}>
      {/* ── Promo strip ── */}
      <div className={styles.topStrip}>
        <p className={styles.topStripText}>
          🌿 Certified Organic Exporter from Bihar, India &mdash; FSSAI &bull; GMP &bull; ISO &bull; Halal Certified
          <span className={styles.pill}>B2B Enquiries Welcome</span>
        </p>
      </div>

      {/* ── Main nav bar ── */}
      <div className={styles.navWrap}>
        <nav className={styles.nav} aria-label="Main navigation">

          {/* Logo */}
          <Link href="/" className={styles.logo} onClick={closeAll}>
            <Image
              src="/assets/icons/logo192.svg"
              alt="Green Agronics"
              width={46}
              height={46}
              className={styles.logoImg}
              priority
            />
            <span className={styles.logoText} aria-hidden="true">
              <span>Green</span>
              <span>Agronics</span>
            </span>
          </Link>

          {/* Desktop navigation links (hidden on mobile) */}
          <ul className={styles.desktopLinks} role="list">
            {/* Products dropdown */}
            <li
              ref={productsRef}
              className={`${styles.shopItem} ${productsOpen ? styles.shopOpen : ""}`}
            >
              <button
                type="button"
                className={styles.shopBtn}
                onClick={() => setProductsOpen((v) => !v)}
                aria-expanded={productsOpen}
                aria-haspopup="menu"
              >
                Products
                <ChevronIcon className={styles.shopChev} />
              </button>

              <ul className={styles.shopDropdown} role="menu" aria-label="Product categories">
                {PRODUCT_ITEMS.map(({ href, label }) => (
                  <li key={href}>
                    <Link href={href} role="menuitem" onClick={() => setProductsOpen(false)}>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className={styles.navLink}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right-side controls */}
          <div className={styles.right}>
            {/* WhatsApp — hidden on mobile, shown ≥ md */}
            <a
              href="https://wa.me/918178874181?text=Hello%2C%20I%20am%20interested%20in%20bulk%20export%20of%20your%20products."
              target="_blank"
              rel="noopener noreferrer"
              className={styles.waBtn}
              aria-label="Chat on WhatsApp"
            >
              <WhatsAppIcon />
              <span>WhatsApp</span>
            </a>

            {/* Enquiry CTA — hidden on mobile, shown ≥ md */}
            <Link href="/contact" className={styles.enquiryBtn}>
              Get a Quote
            </Link>

            {/* Hamburger — mobile only */}
            <button
              type="button"
              className={styles.hamburger}
              onClick={() => setMenuOpen((v) => !v)}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              <span className={`${styles.bar} ${menuOpen ? styles.barTop : ""}`} />
              <span className={`${styles.bar} ${menuOpen ? styles.barMid : ""}`} />
              <span className={`${styles.bar} ${menuOpen ? styles.barBot : ""}`} />
            </button>
          </div>
        </nav>
      </div>

      {/* ── Mobile slide-down menu ── */}
      <div
        id="mobile-nav"
        className={`${styles.mobileMenu} ${menuOpen ? styles.menuOpen : ""}`}
        aria-hidden={!menuOpen}
      >
        <ul className={styles.mobileLinks} role="list">
          {/* Products accordion */}
          <li className={styles.mobileShopRow}>
            <button
              type="button"
              className={styles.mobileShopBtn}
              onClick={() => setMobileProductsOpen((v) => !v)}
              aria-expanded={mobileProductsOpen}
            >
              Products
              <ChevronIcon
                className={`${styles.mobileChev} ${mobileProductsOpen ? styles.mobileChevOpen : ""}`}
              />
            </button>
            <ul
              className={`${styles.mobileShopList} ${mobileProductsOpen ? styles.mobileShopListOpen : ""}`}
            >
              {PRODUCT_ITEMS.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} onClick={closeAll}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <Link href={href} onClick={closeAll}>
                {label}
              </Link>
            </li>
          ))}

          {/* WhatsApp CTA */}
          <li className={styles.mobileCtaRow}>
            <a
              href="https://wa.me/918178874181?text=Hello%2C%20I%20am%20interested%20in%20bulk%20export%20of%20your%20products."
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mobileWa}
              onClick={closeAll}
            >
              <WhatsAppIcon />
              WhatsApp Us
            </a>
          </li>

          {/* Enquiry CTA */}
          <li className={styles.mobileCtaRow}>
            <Link href="/contact" className={styles.mobileCta} onClick={closeAll}>
              Get Export Quote
            </Link>
          </li>
        </ul>
      </div>

      {/* Backdrop overlay */}
      {menuOpen && (
        <div
          className={styles.backdrop}
          onClick={closeAll}
          aria-hidden="true"
        />
      )}
    </header>
  );
}
