"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import styles from "./Navbar.module.scss";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "Why Green Agronics" },
  { href: "/mission", label: "Our Mission" },
  { href: "/reviews", label: "Reviews" },
];

const SHOP_ITEMS = [
  { href: "/shop?category=raw-makhana", label: "Raw Makhana" },
  { href: "/shop?category=flavored-makhana", label: "Flavored Makhana" },
  { href: "/shop?category=shilajit", label: "Shilajit" },
  { href: "/shop?category=neem", label: "Neem" },
  { href: "/shop?category=ashwagandha", label: "Ashwagandha" },
  { href: "/shop?category=moringa", label: "Moringa" },
];

const CART_COUNT = 3;

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

function UserIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function CartIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
  );
}

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);
  const [mobileShopOpen, setMobileShopOpen] = useState(false);
  const shopRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (shopRef.current && !shopRef.current.contains(e.target as Node)) {
        setShopOpen(false);
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
    setMobileShopOpen(false);
  };

  return (
    <header className={styles.header}>
      {/* ── Promo strip ── */}
      <div className={styles.topStrip}>
        <p className={styles.topStripText}>
          Free Shipping + Extra 5% Off on Prepaid Orders Above
          <span className={styles.pill}>₹999</span>
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
            <li
              ref={shopRef}
              className={`${styles.shopItem} ${shopOpen ? styles.shopOpen : ""}`}
            >
              <button
                type="button"
                className={styles.shopBtn}
                onClick={() => setShopOpen((v) => !v)}
                aria-expanded={shopOpen}
                aria-haspopup="menu"
              >
                Shop
                <ChevronIcon className={styles.shopChev} />
              </button>

              <ul className={styles.shopDropdown} role="menu" aria-label="Shop categories">
                {SHOP_ITEMS.map(({ href, label }) => (
                  <li key={href}>
                    <Link href={href} role="menuitem" onClick={() => setShopOpen(false)}>
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
            {/* Sign In — hidden on mobile, shown ≥ md */}
            <Link href="/signin" className={styles.signIn}>
              <UserIcon />
              <span>Sign In</span>
            </Link>

            {/* Delivery country — hidden on mobile, shown ≥ md */}
            <button
              type="button"
              className={styles.flagBtn}
              aria-label="Delivery country: India"
            >
              🇮🇳
              <ChevronIcon className={styles.flagChev} />
            </button>

            {/* Cart — always visible */}
            <Link
              href="/cart"
              className={styles.cartBtn}
              aria-label={`Cart, ${CART_COUNT} items`}
            >
              <CartIcon />
              {CART_COUNT > 0 && (
                <span className={styles.cartBadge} aria-hidden="true">
                  {CART_COUNT}
                </span>
              )}
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
          {/* Shop accordion */}
          <li className={styles.mobileShopRow}>
            <button
              type="button"
              className={styles.mobileShopBtn}
              onClick={() => setMobileShopOpen((v) => !v)}
              aria-expanded={mobileShopOpen}
            >
              Shop
              <ChevronIcon
                className={`${styles.mobileChev} ${mobileShopOpen ? styles.mobileChevOpen : ""}`}
              />
            </button>
            <ul
              className={`${styles.mobileShopList} ${mobileShopOpen ? styles.mobileShopListOpen : ""}`}
            >
              {SHOP_ITEMS.map(({ href, label }) => (
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

          {/* Sign In CTA */}
          <li className={styles.mobileCtaRow}>
            <Link href="/signin" className={styles.mobileCta} onClick={closeAll}>
              Sign In
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
