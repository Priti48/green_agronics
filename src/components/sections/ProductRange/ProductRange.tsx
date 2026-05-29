import Image from 'next/image';
import Link from 'next/link';
import styles from './ProductRange.module.scss';

const PRODUCTS = [
  {
    slug: 'tulsi',
    label: 'Tulsi',
    image: '/assets/images/organic-supplement.svg',
  },
  {
    slug: 'moringa',
    label: 'Moringa',
    image: '/assets/images/ashwagandha.svg',
  },
  {
    slug: 'raw-makhana',
    label: 'Raw Makhana',
    image: '/assets/images/raw-makhan.svg',
  },
  {
    slug: 'flavored-makhana',
    label: 'Flavored Makhana',
    image: '/assets/images/flavoured-makhana.svg',
  },
  {
    slug: 'ashwagandha',
    label: 'Ashwagandha',
    image: '/assets/images/ashwagandha.svg',
  },
  {
    slug: 'neem',
    label: 'Neem',
    image: '/assets/images/supplements.svg',
  },
  {
    slug: 'shilajit',
    label: 'Shilajit',
    image: '/assets/images/shilajit-drop.svg',
  },
];

export function ProductRange() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>

        {/* Header */}
        <div className={styles.header}>
          <p className={styles.tagline}>
            Shop our best-selling products and start your new routine today
          </p>
          <h2 className={styles.heading}>Our Product Range</h2>
        </div>

        {/* Horizontal scroll track */}
        <div className={styles.track}>
          {PRODUCTS.map((p) => (
            <Link
              key={p.slug}
              href={`/shop?category=${p.slug}`}
              className={styles.card}
            >
              <div className={styles.imgWrap}>
                <Image
                  src={p.image}
                  alt={p.label}
                  fill
                  unoptimized
                  className={styles.img}
                />
              </div>
              <span className={styles.label}>{p.label}</span>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
