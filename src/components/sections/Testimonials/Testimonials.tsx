'use client';

import { useState } from 'react';
import styles from './Testimonials.module.scss';

const REVIEWS = [
  {
    id: 1,
    text: "Green Agronics makhana is always fresh, crunchy, and intensely flavorful. It's become our go-to healthy snack at home.",
    name: 'Jaspal Sharma',
    badge: 'Verified Buyer',
    rating: 5,
  },
  {
    id: 2,
    text: "I feel confident using Green Agronics supplements every day. The purity and quality truly stand out.",
    name: 'Ramesh Patel',
    badge: 'Verified Buyer',
    rating: 5,
  },
  {
    id: 3,
    text: "From farm to packaging, everything feels precise and trustworthy. Green Agronics fits perfectly into my healthy lifestyle.",
    name: 'Neha Verma',
    badge: 'Verified Buyer',
    rating: 5,
  },
  {
    id: 4,
    text: "Excellent quality, fast shipping, and outstanding customer service. The makhana is unlike anything I've had before.",
    name: 'Arjun Mehta',
    badge: 'Verified Buyer',
    rating: 5,
  },
  {
    id: 5,
    text: "Ordered for my yoga studio and all clients love it. Will definitely be reordering every month.",
    name: 'Sunita Rao',
    badge: 'Verified Buyer',
    rating: 5,
  },
];

function Stars() {
  return (
    <div className={styles.stars} aria-hidden="true">
      {[1,2,3,4,5].map((s) => (
        <svg key={s} width="16" height="16" viewBox="0 0 12 12" fill="#f59e0b">
          <path d="M6 0l1.545 3.13 3.455.502-2.5 2.437.59 3.44L6 7.9l-3.09 1.609.59-3.44L1 3.632l3.455-.502z" />
        </svg>
      ))}
    </div>
  );
}

export function Testimonials() {
  const [idx, setIdx] = useState(0);
  const total = REVIEWS.length;
  const visible = [REVIEWS[idx], REVIEWS[(idx + 1) % total], REVIEWS[(idx + 2) % total]];

  return (
    <section className={styles.section}>
      <div className={styles.inner}>

        {/* Header */}
        <div className={styles.header}>
          <Stars />
          <h2 className={styles.heading}>Hear It From Our Epic Customers</h2>
          <p className={styles.sub}>
            Fastest growing Organic supplement brand in the Industry.<br />
            Thousands of 5 Star Reviews.
          </p>
        </div>

        {/* Carousel */}
        <div className={styles.carouselRow}>
          <button
            className={styles.arrow}
            onClick={() => setIdx((i) => (i - 1 + total) % total)}
            aria-label="Previous review"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M11 4L6 9l5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <div className={styles.cards}>
            {visible.map((r, i) => (
              <article key={`${r.id}-${i}`} className={styles.card}>
                <div className={styles.starRow}>
                  {[1,2,3,4,5].map((s) => (
                    <svg key={s} width="14" height="14" viewBox="0 0 12 12" fill="#f59e0b">
                      <path d="M6 0l1.545 3.13 3.455.502-2.5 2.437.59 3.44L6 7.9l-3.09 1.609.59-3.44L1 3.632l3.455-.502z" />
                    </svg>
                  ))}
                </div>
                <p className={styles.quote}>&ldquo;{r.text}&rdquo;</p>
                <div className={styles.cardFooter}>
                  <span className={styles.reviewer}>{r.name}</span>
                  <span className={styles.verified}>✓ {r.badge}</span>
                </div>
              </article>
            ))}
          </div>

          <button
            className={styles.arrow}
            onClick={() => setIdx((i) => (i + 1) % total)}
            aria-label="Next review"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M7 4l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}
