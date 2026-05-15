'use client';

import Image from 'next/image';
import Link from 'next/link';
import { trackBuyNowClick } from '@/lib/analytics';
import styles from './Hero.module.scss';

const FLAVOR_SHELF = [
  { label: 'Peri Peri',    src: '/assets/images/flavoured-makhana.svg' },
  { label: 'Mint',          src: '/assets/images/flavoured-makhana.svg' },
  { label: 'Spicy Fusion',  src: '/assets/images/flavoured-makhana.svg' },
  { label: 'Tangy Cheese',  src: '/assets/images/flavoured-makhana.svg' },
  { label: 'Raw',           src: '/assets/images/raw-makhan.svg'        },
  { label: 'Supplements',   src: '/assets/images/supplements.svg'       },
];

const TRUST_PILLS = ['100% Organic', 'No Preservatives', 'Lab Tested', 'Farm Fresh'];

const FEATURE_CARDS = [
  {
    icon: '/assets/icons/leaf.svg',
    title: '100% Vegetarian',
    subtitle: 'For a better health',
  },
  {
    icon: '/assets/icons/quality-assured.svg',
    title: 'Quality Assured',
    subtitle: 'Quality Always Matters',
  },
  {
    icon: '/assets/icons/world-wide.svg',
    title: 'World Wide Export',
    subtitle: 'Global reach, Organic quality',
  },
];

export default function Hero() {
  return (
    <section className={styles.hero}>

      {/* ── Flavor shelf strip ── */}
      <div className={styles.shelf} aria-hidden="true">
        <div className={styles.shelfTrack}>
          {[...FLAVOR_SHELF, ...FLAVOR_SHELF].map((f, i) => (
            <div key={i} className={styles.shelfItem}>
              <Image src={f.src} alt={f.label} width={72} height={72} className={styles.shelfImg} />
              <span className={styles.shelfLabel}>{f.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Main hero ── */}
      <div className={styles.main}>
        {/* Background */}
        <div className={styles.bg}>
          <Image
            src="/assets/images/herobanner.svg"
            alt=""
            fill
            priority
            style={{ objectFit: 'cover', objectPosition: 'center top' }}
          />
          <div className={styles.bgOverlay} />
        </div>

        <div className={styles.container}>
          <div className={styles.grid}>

            {/* LEFT — text */}
            <div className={styles.textCol}>
              <div className={styles.ratingPill}>
                <span className={styles.stars}>★★★★★</span>
                <span>4.8&nbsp;(2.5k+ reviews)</span>
              </div>

              <h1 className={styles.h1}>
                Premium Quality.<br />
                Honest Pricing.<br />
                <span className={styles.h1Accent}>Total Transparency.</span>
              </h1>

              <p className={styles.sub}>
                Direct from farmers&nbsp;·&nbsp;No middlemen&nbsp;·&nbsp;
                Lab tested&nbsp;·&nbsp;Fresh delivery
              </p>

              {/* Trust pills */}
              <ul className={styles.pills} aria-label="Product guarantees">
                {TRUST_PILLS.map((p) => (
                  <li key={p} className={styles.pill}>{p}</li>
                ))}
              </ul>

              <div className={styles.ctas}>
                <Link
                  href="/shop"
                  className={styles.btnPrimary}
                  onClick={() => trackBuyNowClick('hero', 'Hero CTA', 0)}
                >
                  Shop All
                </Link>
                <Link href="/about" className={styles.btnOutline}>
                  Watch our Story
                </Link>
              </div>
            </div>

            {/* RIGHT — product image */}
            <div className={styles.imageCol}>
              <div className={styles.welcomeBadge}>
                <span>Welcome to</span>
                <strong>Green Agronics</strong>
              </div>

              <Image
                src="/assets/images/flavoured-makhana.svg"
                alt="Flavored Makhana"
                width={440}
                height={440}
                priority
                className={styles.productImg}
              />

              {/* Floating stat chips */}
              <div className={styles.statChipLeft}>
                <strong>12k+</strong>
                <span>Happy Customers</span>
              </div>
              <div className={styles.statChipRight}>
                <strong>100%</strong>
                <span>Natural</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Feature benefit cards ── */}
      <div className={styles.cards}>
        <div className={styles.cardsInner}>
          {FEATURE_CARDS.map((card) => (
            <div key={card.title} className={styles.card}>
              <div className={styles.cardIcon}>
                <Image src={card.icon} alt="" width={24} height={24} />
              </div>
              <div>
                <p className={styles.cardTitle}>{card.title}</p>
                <p className={styles.cardSub}>{card.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
