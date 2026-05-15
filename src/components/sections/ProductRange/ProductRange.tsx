import Image from 'next/image';
import Link from 'next/link';
import styles from './ProductRange.module.scss';

const CATEGORIES = [
  {
    slug: 'raw-makhana',
    label: 'Raw Makhana',
    desc: 'Premium fox nuts, sun-dried & hand-sorted',
    image: '/assets/images/raw-makhan.svg',
    color: '#c8f57a',
  },
  {
    slug: 'flavored-makhana',
    label: 'Flavored Makhana',
    desc: 'Bold flavors — Peri Peri, Mint, Cheese & more',
    image: '/assets/images/flavoured-makhana.svg',
    color: '#fde68a',
  },
  {
    slug: 'shilajit',
    label: 'Shilajit',
    desc: 'Pure Himalayan resin for strength & vitality',
    image: '/assets/images/shilajit-drop.svg',
    color: '#a7f3d0',
  },
  {
    slug: 'ashwagandha',
    label: 'Ashwagandha',
    desc: 'Adaptogen root for stress relief & energy',
    image: '/assets/images/ashwagandha.svg',
    color: '#fca5a5',
  },
  {
    slug: 'organic-supplements',
    label: 'Organic Supplements',
    desc: 'Natural wellness blends from farm to shelf',
    image: '/assets/images/organic-supplement.svg',
    color: '#93c5fd',
  },
  {
    slug: 'neem',
    label: 'Neem Products',
    desc: 'Immunity & skin care from neem leaf extract',
    image: '/assets/images/supplements.svg',
    color: '#86efac',
  },
];

export function ProductRange() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        <div className={styles.header}>
          <p className={styles.eyebrow}>Explore</p>
          <h2 className={styles.heading}>Our Product Range</h2>
          <p className={styles.sub}>
            From the farms of Bihar to your wellness routine — pure, tested, transparent.
          </p>
        </div>

        <div className={styles.grid}>
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.slug}
              href={`/shop?category=${cat.slug}`}
              className={styles.card}
            >
              <div className={styles.imgWrap} style={{ '--accent': cat.color } as React.CSSProperties}>
                <Image
                  src={cat.image}
                  alt={cat.label}
                  width={160}
                  height={160}
                  className={styles.img}
                />
              </div>
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{cat.label}</h3>
                <p className={styles.cardDesc}>{cat.desc}</p>
                <span className={styles.shopNow}>
                  Shop Now
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
