"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import styles from "./Navbar.module.scss";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "Why Green Agronics" },
  { href: "/mission", label: "Our Mission" },
  { href: "/reviews", label: "Reviews" },
];

const shopChildren = [
  { href: "/shop?category=raw-makhana", label: "Raw Makhana" },
  { href: "/shop?category=flavored-makhana", label: "Flavored Makhana" },
  { href: "/shop?category=shilajit", label: "Shilajit" },
  { href: "/shop?category=neem", label: "Neem" },
  { href: "/shop?category=ashwagandha", label: "Ashwagandha" },
  { href: "/shop?category=moringa", label: "Moringa" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [shopMenuOpen, setShopMenuOpen] = useState(false);
  const shopDropdownRef = useRef<HTMLLIElement | null>(null);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setShopMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        shopDropdownRef.current &&
        !shopDropdownRef.current.contains(event.target as Node)
      ) {
        setShopMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.topStrip}>
        <div className={styles.navInner}>
          <p className={styles.topStripText}>
            Free Shipping + Extra 5% Off on Prepaid Order Above
            <span className={styles.offerPill}>₹999</span>
          </p>
        </div>
      </div>

      <div className={styles.navInner}>
        <nav className={styles.nav} aria-label="Main navigation">
          <Link href="/" className={styles.logo} onClick={closeMobileMenu}>
            <Image
              src="/logo192.svg"
              alt="Green Agronics"
              width={42}
              height={42}
              className={styles.logoIcon}
            />
            <span className={styles.logoText}>Green Agronics</span>
          </Link>

          <ul className={styles.links}>
            <li
              className={`${styles.hasChevron} ${
                shopMenuOpen ? styles.openDropdown : ""
              }`}
              ref={shopDropdownRef}
            >
              <button
                type="button"
                className={styles.shopTrigger}
                onClick={() => setShopMenuOpen((prev) => !prev)}
                aria-expanded={shopMenuOpen}
                aria-haspopup="menu"
              >
                Shop
              </button>
              <ul className={styles.shopDropdown} role="menu" aria-label="Shop categories">
                {shopChildren.map(({ href, label }) => (
                  <li key={href}>
                    <Link href={href} role="menuitem" onClick={() => setShopMenuOpen(false)}>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link href={href}>{label}</Link>
              </li>
            ))}
          </ul>

          <div className={styles.rightControls}>
            <label className={styles.searchBox} aria-label="Search">
              <span className={styles.searchIcon} aria-hidden="true">
                🔍
              </span>
              <input type="search" placeholder="Search" />
            </label>

            <Link href="/signin" className={styles.signInButton}>
              <span className={styles.userIcon} aria-hidden="true">
                👤
              </span>
              Sign In
            </Link>

            <button type="button" className={styles.deliveryButton}>
              Deliver to: <span className={styles.flag}>🇮🇳</span>
              <span className={styles.chev} aria-hidden="true">
                ▾
              </span>
            </button>

            <Link href="/cart" className={styles.cartButton} aria-label="Cart">
              🛒
              <span className={styles.cartBadge}>3</span>
            </Link>
          </div>

          <button
            type="button"
            className={styles.menuButton}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <span className={styles.menuIcon}>
              <span className={mobileMenuOpen ? styles.open : ""} />
              <span className={mobileMenuOpen ? styles.open : ""} />
              <span className={mobileMenuOpen ? styles.open : ""} />
            </span>
          </button>
        </nav>
      </div>

      <div
        id="mobile-menu"
        className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.open : ""}`}
        aria-hidden={!mobileMenuOpen}
      >
        <ul className={styles.mobileLinks}>
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link href={href} onClick={closeMobileMenu}>
                {label}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/shop" onClick={closeMobileMenu}>
              Shop
            </Link>
          </li>
          <li>
            <Link
              href="/signin"
              className={styles.mobileCta}
              onClick={closeMobileMenu}
            >
              Sign In
            </Link>
          </li>
        </ul>
      </div>

      {mobileMenuOpen && (
        <div
          className={styles.backdrop}
          onClick={closeMobileMenu}
          aria-hidden="true"
        />
      )}
    </header>
  );
}
