'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import styles from './FeaturedProducts.module.scss';

const PRODUCTS = [
  {
    id: 'shilajit-resin',
    name: 'Pure Shilajit Resin with Gold Dust 20g',
    price: 549,
    originalPrice: 936,
    image: '/assets/images/shilajit-drop.svg',
    rating: 5,
    reviews: 845,
    featured: false,
  },
  {
    id: 'raw-makhana',
    name: 'Pure Raw Makhana Premium Quality',
    price: 549,
    originalPrice: 936,
    image: '/assets/images/raw-makhan.svg',
    rating: 5,
    reviews: 845,
    featured: true,
  },
  {
    id: 'shilajit-drops',
    name: 'Pure Shilajit Resin with Gold Dust 20g',
    price: 549,
    originalPrice: 936,
    image: '/assets/images/shilajit-drop.svg',
    rating: 5,
    reviews: 845,
    featured: false,
  },
  {
    id: 'neem',
    name: 'Pure Shilajit Resin with Gold Dust 20g',
    price: 549,
    originalPrice: 936,
    image: '/assets/images/supplements.svg',
    rating: 5,
    reviews: 845,
    featured: false,
  },
  {
    id: 'organic-wellness',
    name: 'Pure Shilajit Resin with Gold Dust 20g',
    price: 549,
    originalPrice: 936,
    image: '/assets/images/organic-supplement.svg',
    rating: 5,
    reviews: 845,
    featured: false,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <span className={styles.stars} aria-label={`${count} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((s) => (
        <svg key={s} width="13" height="13" viewBox="0 0 12 12" fill={s <= count ? '#f59e0b' : '#d1d5db'} aria-hidden="true">
          <path d="M6 0l1.545 3.13 3.455.502-2.5 2.437.59 3.44L6 7.9l-3.09 1.609.59-3.44L1 3.632l3.455-.502z" />
        </svg>
      ))}
    </span>
  );
}

export default function FeaturedProducts() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 'left' | 'right') => {
    if (!trackRef.current) return;
    trackRef.current.scrollBy({ left: dir === 'right' ? 300 : -300, behavior: 'smooth' });
  };

  return (
    <section className={styles.section}>
      <div className={styles.inner}>

        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.heading}>Featured Products</h2>
          <Link href="/shop" className={styles.seeAll}>
            See All
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        {/* Carousel */}
        <div className={styles.carouselWrap}>
          <button
            className={styles.arrow}
            onClick={() => scroll('left')}
            aria-label="Scroll left"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M11 4L6 9l5 5" stroke="#1a2110" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div className={styles.track} ref={trackRef}>
            {PRODUCTS.map((p) => (
              <article key={p.id} className={`${styles.card} ${p.featured ? styles.cardFeatured : ''}`}>
                <div className={styles.imgWrap}>
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    unoptimized
                    className={styles.img}
                  />
                </div>

                <div className={styles.info}>
                  <div className={styles.ratingRow}>
                    <Stars count={p.rating} />
                    <span className={styles.reviewText}>{p.reviews} reviews</span>
                  </div>

                  <h3 className={styles.name}>{p.name}</h3>

                  <div className={styles.priceRow}>
                    <span className={styles.originalPrice}>Rs. {p.originalPrice}.00</span>
                    <span className={styles.price}>Rs. {p.price}.00</span>
                  </div>

                  <button
                    type="button"
                    className={`${styles.orderBtn} ${p.featured ? styles.orderBtnFeatured : ''}`}
                  >
                    Order Now
                    <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
              </article>
            ))}
          </div>

          <button
            className={styles.arrow}
            onClick={() => scroll('right')}
            aria-label="Scroll right"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M7 4l5 5-5 5" stroke="#1a2110" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}
