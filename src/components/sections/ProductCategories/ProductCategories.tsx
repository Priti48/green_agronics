import Image from 'next/image';
import Link from 'next/link';
import styles from './ProductCategories.module.scss';

const CATEGORIES = [
  {
    id: 'flavored',
    eyebrow: 'FLAVORED',
    name: 'Makhana',
    href: '/shop?category=flavored-makhana',
    image: '/assets/images/flavoured-makhana.svg',
    bg: '#f5c535',
    eyebrowColor: '#7a4d00',
    nameColor: '#3b2000',
    btnBg: '#3b2000',
    btnColor: '#f5c535',
  },
  {
    id: 'raw',
    eyebrow: 'RAW',
    name: 'Makhana',
    href: '/shop?category=raw-makhana',
    image: '/assets/images/raw-makhan.svg',
    bg: '#1a3d24',
    eyebrowColor: 'rgba(255,255,255,0.7)',
    nameColor: '#b8ea49',
    btnBg: '#b8ea49',
    btnColor: '#1a3d24',
  },
  {
    id: 'organic',
    eyebrow: 'ORGANIC',
    name: 'Supplement',
    href: '/shop?category=organic-supplements',
    image: '/assets/images/organic-supplement.svg',
    bg: '#f0ede4',
    eyebrowColor: '#5a6e3a',
    nameColor: '#1a3d24',
    btnBg: '#1a3d24',
    btnColor: '#ffffff',
  },
];

export function ProductCategories() {
  return (
    <section className={styles.section}>
      {/* Tagline above cards */}
      <div className={styles.taglineWrap}>
        <p className={styles.tagline}>
          Rigorously tested to meet the highest quality standards and ensure consistent excellence.
        </p>
      </div>

      {/* 3 category cards */}
      <div className={styles.grid}>
        {CATEGORIES.map((cat) => (
          <Link
            key={cat.id}
            href={cat.href}
            className={styles.card}
            style={{ background: cat.bg }}
          >
            {/* Text side */}
            <div className={styles.cardText}>
              <span
                className={styles.eyebrow}
                style={{ color: cat.eyebrowColor }}
              >
                {cat.eyebrow}
              </span>
              <h3
                className={styles.cardName}
                style={{ color: cat.nameColor }}
              >
                {cat.name}
              </h3>
              <span
                className={styles.shopBtn}
                style={{ background: cat.btnBg, color: cat.btnColor }}
              >
                Shop Now
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </div>

            {/* Image side */}
            <div className={styles.cardImg}>
              <div className={styles.imgWrapper}>
                <Image
                  src={cat.image}
                  alt={`${cat.eyebrow} ${cat.name}`}
                  fill
                  unoptimized
                  className={styles.img}
                />
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* B2B partners text */}
      <div className={styles.b2bStrip}>
        <p className={styles.b2bText}>
          <strong>Green Agronics</strong> partners with global distributors,
          wholesalers, retailers, and brands.
        </p>
      </div>
    </section>
  );
}
