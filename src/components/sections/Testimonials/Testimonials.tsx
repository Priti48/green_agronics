import styles from './Testimonials.module.scss';

const REVIEWS = [
  {
    name: 'Priya Sharma',
    location: 'Mumbai, India',
    rating: 5,
    text: 'Absolutely love the Peri Peri Makhana! It arrived super fresh and the packaging is really sturdy. My kids can\'t stop snacking on it — finally a healthy option they actually enjoy.',
    avatar: 'PS',
    color: '#22a058',
  },
  {
    name: 'Rahul Verma',
    location: 'Delhi, India',
    rating: 5,
    text: 'Ordered the raw makhana in bulk for my yoga studio. Green Agronics gave me a great bulk price and the quality is consistently excellent every single time. Highly recommended!',
    avatar: 'RV',
    color: '#3b82f6',
  },
  {
    name: 'Anjali Mehta',
    location: 'Bangalore, India',
    rating: 5,
    text: 'I tried the Shilajit and the Ashwagandha supplement combo. My energy levels have genuinely improved. Love that everything is lab-tested and certified. Will definitely reorder.',
    avatar: 'AM',
    color: '#f59e0b',
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <span className={styles.stars} aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill={i < count ? '#f59e0b' : '#e5e7eb'}
          aria-hidden="true"
        >
          <path d="M7 0l1.803 3.655L13 4.254l-3 2.924.708 4.127L7 9.1l-3.708 2.205L4 7.178 1 4.254l4.197-.599z" />
        </svg>
      ))}
    </span>
  );
}

export function Testimonials() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        <div className={styles.header}>
          <p className={styles.eyebrow}>Reviews</p>
          <h2 className={styles.heading}>Hear It From Our Epic Customers</h2>
          <p className={styles.sub}>
            Over 12,000 happy customers — real reviews, real results.
          </p>
        </div>

        {/* Summary bar */}
        <div className={styles.summaryBar}>
          <div className={styles.summaryScore}>
            <span className={styles.bigScore}>4.8</span>
            <StarRating count={5} />
            <span className={styles.scoreSub}>Based on 12k+ reviews</span>
          </div>
          <div className={styles.summaryDivider} />
          <div className={styles.summaryStats}>
            {[
              { pct: 92, label: '5 Star' },
              { pct: 6,  label: '4 Star' },
              { pct: 2,  label: '3 Star' },
            ].map(({ pct, label }) => (
              <div key={label} className={styles.ratingBar}>
                <span className={styles.ratingBarLabel}>{label}</span>
                <div className={styles.ratingBarTrack}>
                  <div
                    className={styles.ratingBarFill}
                    style={{ width: `${pct}%` }}
                  />
                </div>
                <span className={styles.ratingBarPct}>{pct}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Review cards */}
        <div className={styles.grid}>
          {REVIEWS.map((r) => (
            <article key={r.name} className={styles.card}>
              <div className={styles.cardTop}>
                <div
                  className={styles.avatar}
                  style={{ background: r.color }}
                  aria-hidden="true"
                >
                  {r.avatar}
                </div>
                <div>
                  <p className={styles.reviewer}>{r.name}</p>
                  <p className={styles.location}>{r.location}</p>
                </div>
                <div className={styles.verifiedBadge}>✓ Verified</div>
              </div>

              <StarRating count={r.rating} />

              <p className={styles.review}>&ldquo;{r.text}&rdquo;</p>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
