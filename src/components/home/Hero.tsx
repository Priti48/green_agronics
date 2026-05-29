'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { SITE } from '@/lib/seo';
import styles from './Hero.module.scss';

const FLAVOR_SHELF = [
  { label: 'Peri Peri',    src: '/assets/images/flavoured-makhana.svg' },
  { label: 'Mint',          src: '/assets/images/flavoured-makhana.svg' },
  { label: 'Spicy Fusion',  src: '/assets/images/flavoured-makhana.svg' },
  { label: 'Tangy Cheese',  src: '/assets/images/flavoured-makhana.svg' },
  { label: 'Raw Makhana',   src: '/assets/images/raw-makhan.svg'        },
  { label: 'Supplements',   src: '/assets/images/supplements.svg'       },
];

const TRUST_PILLS = ['FSSAI Certified', 'GMP Compliant', 'Halal Certified', 'Bulk Export'];

const FEATURE_CARDS = [
  {
    icon: '/assets/icons/hero-icon-vegetarian.png',
    title: '100% Vegetarian',
    subtitle: 'For a better health',
  },
  {
    icon: '/assets/icons/hero-icon-quality.png',
    title: 'Quality Assured',
    subtitle: 'Quality Always Matters',
  },
  {
    icon: '/assets/icons/hero-icon-worldwide.png',
    title: 'World Wide Export',
    subtitle: 'Global Reach, Organic Quality',
  },
];

export default function Hero() {
  const headingRef  = useRef<HTMLHeadingElement>(null);
  const subRef      = useRef<HTMLParagraphElement>(null);
  const pillsRef    = useRef<HTMLUListElement>(null);
  const ctasRef     = useRef<HTMLDivElement>(null);
  const badgeRef    = useRef<HTMLDivElement>(null);
  const imgRef      = useRef<HTMLDivElement>(null);
  const scrollRef   = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        headingRef.current,
        { y: 48, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9 }
      )
      .fromTo(subRef.current, { y: 28, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, '-=0.55')
      .fromTo(pillsRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, '-=0.45')
      .fromTo(ctasRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, '-=0.4')
      .fromTo(imgRef.current, { x: 40, opacity: 0 }, { x: 0, opacity: 1, duration: 0.9 }, '-=0.8')
      .fromTo(badgeRef.current, { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5 }, '-=0.3');

      // Scroll indicator bounce
      if (scrollRef.current) {
        gsap.to(scrollRef.current, {
          y: 8,
          repeat: -1,
          yoyo: true,
          duration: 0.85,
          ease: 'sine.inOut',
          delay: 1.5,
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.hero}>

      {/* ── Flavor shelf strip ── */}
      {/* <div className={styles.shelf} aria-hidden="true">
        <div className={styles.shelfTrack}>
          {[...FLAVOR_SHELF, ...FLAVOR_SHELF].map((f, i) => (
            <div key={i} className={styles.shelfItem}>
              <Image src={f.src} alt={f.label} width={72} height={72} className={styles.shelfImg} />
              <span className={styles.shelfLabel}>{f.label}</span>
            </div>
          ))}
        </div>
      </div> */}

      {/* ── Main hero ── */}
      <div className={styles.main}>
        {/* Background */}
        <div className={styles.bg}>
          <Image
            src="/assets/images/herobanner.png"
            alt=""
            fill
            priority
            style={{ objectFit: 'cover', objectPosition: 'center center' }}
          />
          <div className={styles.bgOverlay} />
        </div>

        <div className={styles.container}>
          <div className={styles.grid}>

            {/* LEFT — text */}
            <div className={styles.textCol}>
              <div className={styles.exportBadge}>
                <span className={styles.badgeDot} />
                Trusted B2B Exporter &bull; Bihar, India
              </div>

              <h1 ref={headingRef} className={styles.h1}>
                Trusted Exporter of<br />
                <em className={styles.h1Accent}>Premium Makhana</em><br />
                &amp; Organic Wellness
              </h1>

              <p ref={subRef} className={styles.sub}>
                Direct from Bihar's farms &bull; Bulk &amp; Private Label supply &bull;
                Export documentation handled &bull; 50+ countries shipped
              </p>

              {/* Trust pills */}
              <ul ref={pillsRef} className={styles.pills} aria-label="Certifications">
                {TRUST_PILLS.map((p) => (
                  <li key={p} className={styles.pill}>{p}</li>
                ))}
              </ul>

              <div ref={ctasRef} className={styles.ctas}>
                <Link href="/contact" className={styles.btnPrimary}>
                  Get Export Quote
                </Link>
                <a
                  href={`https://wa.me/${SITE.whatsapp}?text=Hello%2C%20I%20am%20interested%20in%20bulk%20export%20enquiry.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.btnWa}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp Us
                </a>
              </div>
            </div>

            {/* RIGHT — product image */}
            <div ref={imgRef} className={styles.imageCol}>
              <div ref={badgeRef} className={styles.welcomeBadge}>
                <span>Welcome to</span>
                <strong>Green Agronics</strong>
              </div>

              <Image
                src="/assets/images/flavoured-makhana.svg"
                alt="Flavored Makhana — Premium Export Quality"
                width={440}
                height={440}
                priority
                className={styles.productImg}
              />

              {/* Floating stat chips */}
              <div className={styles.statChipLeft}>
                <strong>50+</strong>
                <span>Countries</span>
              </div>
              <div className={styles.statChipRight}>
                <strong>100%</strong>
                <span>Organic</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div ref={scrollRef} className={styles.scrollIndicator} aria-hidden="true">
          <svg width="20" height="30" viewBox="0 0 20 30" fill="none">
            <rect x="1" y="1" width="18" height="28" rx="9" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5"/>
            <circle cx="10" cy="9" r="3" fill="rgba(255,255,255,0.6)"/>
          </svg>
        </div>
      </div>

      {/* ── Feature benefit cards ── */}
      <div className={styles.cards}>
        <div className={styles.cardsInner}>
          {FEATURE_CARDS.map((card) => (
            <div key={card.title} className={styles.card}>
              <div className={styles.cardBadge}>
                <Image
                  src="/assets/icons/hero-badge-star.png"
                  alt=""
                  fill
                  className={styles.cardBadgeBg}
                />
                <Image
                  src={card.icon}
                  alt=""
                  width={30}
                  height={30}
                  className={styles.cardBadgeIcon}
                />
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
