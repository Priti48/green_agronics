'use client';

import Image from 'next/image';
import Link from 'next/link';
import { trackAddToCart } from '@/lib/analytics';
import styles from './FeaturedProducts.module.scss';

interface FeaturedProduct {
  id: string;
  name: string;
  weight: string;
  price: number;
  originalPrice: number;
  image: string;
  badge?: string;
  rating: number;
  reviews: number;
}

const PRODUCTS: FeaturedProduct[] = [
  {
    id: 'peri-peri-makhana',
    name: 'Peri Peri Makhana',
    weight: '100g',
    price: 199,
    originalPrice: 249,
    image: '/assets/images/flavoured-makhana.svg',
    badge: 'Best Seller',
    rating: 4.8,
    reviews: 1240,
  },
  {
    id: 'mint-makhana',
    name: 'Mint Makhana',
    weight: '100g',
    price: 199,
    originalPrice: 249,
    image: '/assets/images/flavoured-makhana.svg',
    badge: 'Popular',
    rating: 4.7,
    reviews: 860,
  },
  {
    id: 'raw-makhana',
    name: 'Premium Raw Makhana',
    weight: '200g',
    price: 299,
    originalPrice: 399,
    image: '/assets/images/raw-makhan.svg',
    badge: 'Farm Fresh',
    rating: 4.9,
    reviews: 2100,
  },
  {
    id: 'spicy-fusion-makhana',
    name: 'Spicy Fusion Makhana',
    weight: '100g',
    price: 199,
    originalPrice: 249,
    image: '/assets/images/flavoured-makhana.svg',
    badge: 'New',
    rating: 4.6,
    reviews: 540,
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <span className={styles.stars} aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((s) => (
        <svg
          key={s}
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill={s <= Math.round(rating) ? '#f59e0b' : '#d1d5db'}
          aria-hidden="true"
        >
          <path d="M6 0l1.545 3.13 3.455.502-2.5 2.437.59 3.44L6 7.9l-3.09 1.609.59-3.44L1 3.632l3.455-.502z" />
        </svg>
      ))}
    </span>
  );
}

export default function FeaturedProducts() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        {/* Header */}
        <div className={styles.header}>
          <div>
            <p className={styles.eyebrow}>Our Selection</p>
            <h2 className={styles.heading}>Featured Products</h2>
          </div>
          <Link href="/shop" className={styles.viewAll}>
            View All
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        {/* Product grid */}
        <div className={styles.grid}>
          {PRODUCTS.map((product) => (
            <article key={product.id} className={styles.card}>

              {/* Image */}
              <div className={styles.imageWrap}>
                {product.badge && (
                  <span className={styles.badge}>{product.badge}</span>
                )}
                <Image
                  src={product.image}
                  alt={product.name}
                  width={280}
                  height={280}
                  className={styles.image}
                />
                <button
                  type="button"
                  className={styles.quickAdd}
                  onClick={() => trackAddToCart(product.id, product.name, 1, product.price)}
                  aria-label={`Quick add ${product.name}`}
                >
                  + Quick Add
                </button>
              </div>

              {/* Info */}
              <div className={styles.info}>
                <div className={styles.ratingRow}>
                  <StarRating rating={product.rating} />
                  <span className={styles.reviewCount}>({product.reviews.toLocaleString()})</span>
                </div>

                <h3 className={styles.name}>{product.name}</h3>
                <p className={styles.weight}>{product.weight}</p>

                <div className={styles.priceRow}>
                  <span className={styles.price}>₹{product.price}</span>
                  <span className={styles.originalPrice}>₹{product.originalPrice}</span>
                  <span className={styles.discount}>
                    {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% off
                  </span>
                </div>

                <button
                  type="button"
                  className={styles.addBtn}
                  onClick={() => trackAddToCart(product.id, product.name, 1, product.price)}
                >
                  Add to Cart
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
