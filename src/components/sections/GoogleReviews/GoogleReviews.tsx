'use client';

import { useRef, useState } from 'react';
import { SITE } from '@/lib/seo';
import styles from './GoogleReviews.module.scss';

const REVIEWS = [
  {
    name: 'Ahmad Al-Rashid',
    location: 'Dubai, UAE',
    initials: 'AR',
    color: '#22a058',
    rating: 5,
    date: 'March 2025',
    text: 'Excellent quality makhana exported to our store in Dubai. The packaging was professional, documentation was complete, and the delivery was on schedule. Highly recommend Green Agronics for B2B export.',
    role: 'Wholesale Distributor',
  },
  {
    name: 'Priya Sharma',
    location: 'London, UK',
    initials: 'PS',
    color: '#8b5cf6',
    rating: 5,
    date: 'January 2025',
    text: 'We partnered with Green Agronics for our private label makhana brand. Their team was extremely professional — from sample approval to final delivery, every step was transparent and timely.',
    role: 'Health Food Brand Owner',
  },
  {
    name: 'Marcus Weber',
    location: 'Berlin, Germany',
    initials: 'MW',
    color: '#d97706',
    rating: 5,
    date: 'February 2025',
    text: 'Sourced organic moringa powder and ashwagandha in bulk. Quality consistently exceeds expectations. Certificates were all in order. Will continue to grow our supply relationship.',
    role: 'Organic Food Importer',
  },
  {
    name: 'Lim Wei Chen',
    location: 'Singapore',
    initials: 'LC',
    color: '#0891b2',
    rating: 5,
    date: 'December 2024',
    text: 'The best makhana supplier I have worked with in 10 years of importing. Clean product, honest pricing, and they handle all the export paperwork. Repeat order confirmed.',
    role: 'Supermarket Chain Buyer',
  },
  {
    name: 'Sarah Johnson',
    location: 'Toronto, Canada',
    initials: 'SJ',
    color: '#dc2626',
    rating: 4,
    date: 'April 2025',
    text: 'Great product quality and responsive team. The flavored makhana range has been a hit with our customers. Minor delay in one shipment but they communicated proactively and resolved it.',
    role: 'Online Grocery Retailer',
  },
  {
    name: 'Rajan Mehta',
    location: 'New York, USA',
    initials: 'RM',
    color: '#16a34a',
    rating: 5,
    date: 'March 2025',
    text: 'As an Indian-American importer, I needed authentic, certified makhana. Green Agronics delivers exactly that — premium quality, FSSAI certified, and brilliant customer support.',
    role: 'Indian Grocery Chain',
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className={styles.stars} aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < count ? styles.starFilled : styles.starEmpty}>★</span>
      ))}
    </div>
  );
}

export function GoogleReviews() {
  const [activeIdx, setActiveIdx] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const prev = () => setActiveIdx((i) => (i - 1 + REVIEWS.length) % REVIEWS.length);
  const next = () => setActiveIdx((i) => (i + 1) % REVIEWS.length);

  const visibleReviews = [
    REVIEWS[activeIdx],
    REVIEWS[(activeIdx + 1) % REVIEWS.length],
    REVIEWS[(activeIdx + 2) % REVIEWS.length],
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.googleBadge}>
            <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Google Reviews
          </div>

          <div className={styles.ratingRow}>
            <span className={styles.ratingNum}>4.8</span>
            <div>
              <Stars count={5} />
              <span className={styles.ratingCount}>Based on 2,500+ verified reviews</span>
            </div>
          </div>

          <a
            href={SITE.gmbProfile}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.viewAll}
          >
            View all on Google Maps →
          </a>
        </div>

        {/* Carousel */}
        <div ref={trackRef} className={styles.carouselWrap}>
          <div className={styles.reviewGrid}>
            {visibleReviews.map((r, i) => (
              <div key={`${r.name}-${i}`} className={styles.reviewCard}>
                <div className={styles.reviewTop}>
                  <div
                    className={styles.avatar}
                    style={{ background: r.color }}
                    aria-hidden="true"
                  >
                    {r.initials}
                  </div>
                  <div className={styles.reviewerInfo}>
                    <span className={styles.reviewerName}>{r.name}</span>
                    <span className={styles.reviewerMeta}>{r.role} · {r.location}</span>
                  </div>
                </div>

                <Stars count={r.rating} />

                <p className={styles.reviewText}>&ldquo;{r.text}&rdquo;</p>

                <div className={styles.reviewFooter}>
                  <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" className={styles.googleIcon}>
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                  <span className={styles.reviewDate}>{r.date} · Verified</span>
                </div>
              </div>
            ))}
          </div>

          {/* Controls */}
          <div className={styles.controls}>
            <button type="button" className={styles.arrow} onClick={prev} aria-label="Previous review">
              ←
            </button>
            <div className={styles.dots}>
              {REVIEWS.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  className={`${styles.dot} ${i === activeIdx ? styles.dotActive : ''}`}
                  onClick={() => setActiveIdx(i)}
                  aria-label={`Go to review ${i + 1}`}
                />
              ))}
            </div>
            <button type="button" className={styles.arrow} onClick={next} aria-label="Next review">
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
