'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { type Currency, convertPrice, detectCurrency, CURRENCY_SYMBOLS } from '@/lib/currency';
import styles from './ProductsShowcase.module.scss';

const PRODUCTS = [
  {
    id: 'raw-makhana',
    name: 'Premium Raw Makhana',
    subtitle: 'Lotus Seeds · Fox Nuts',
    image: '/assets/images/raw-makhan.svg',
    badge: 'Bestseller',
    badgeColor: '#22a058',
    basePrice: 350,
    unit: '/500g',
    moq: 'MOQ: 100 kg',
    href: '/products/raw-makhana',
    tags: ['Bulk Available', 'Export Grade'],
  },
  {
    id: 'flavoured-makhana',
    name: 'Flavored Makhana Range',
    subtitle: 'Peri Peri · Mint · Cheese',
    image: '/assets/images/flavoured-makhana.svg',
    badge: 'Private Label',
    badgeColor: '#8b5cf6',
    basePrice: 420,
    unit: '/400g',
    moq: 'MOQ: 50 kg/flavor',
    href: '/products/flavored-makhana',
    tags: ['OEM Available', '10+ Flavors'],
  },
  {
    id: 'organic-supplement',
    name: 'Organic Supplement Range',
    subtitle: 'Ashwagandha · Moringa · Neem',
    image: '/assets/images/organic-supplement.svg',
    badge: 'Certified Organic',
    badgeColor: '#059669',
    basePrice: 580,
    unit: '/250g',
    moq: 'MOQ: 50 kg',
    href: '/products/organic-supplements',
    tags: ['USDA Organic', 'Lab Tested'],
  },
  {
    id: 'shilajit',
    name: 'Pure Himalayan Shilajit',
    subtitle: 'Resin · Capsules · Powder',
    image: '/assets/images/organic-supplement.svg',
    badge: 'New',
    badgeColor: '#d97706',
    basePrice: 1200,
    unit: '/30g',
    moq: 'MOQ: 20 kg',
    href: '/products/shilajit',
    tags: ['Himalayan Source', 'Lab Tested'],
  },
];

const CURRENCIES: Currency[] = ['INR', 'USD', 'AED', 'GBP', 'EUR'];

export function ProductsShowcase() {
  const [currency, setCurrency] = useState<Currency>('INR');
  const [detected, setDetected] = useState(false);

  useEffect(() => {
    detectCurrency().then((c) => {
      setCurrency(c);
      setDetected(true);
    });
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.headerRow}>
          <div className={styles.headerText}>
            <p className={styles.eyebrow}>Our Products</p>
            <h2 className={styles.heading}>
              Export-Grade <span className={styles.accent}>Organic Products</span>
            </h2>
            <p className={styles.sub}>
              All prices are indicative bulk export pricing. Contact us for custom quotes, MOQ details, and private-label options.
            </p>
          </div>

          {/* Currency switcher */}
          <div className={styles.currencyWrap}>
            <span className={styles.currencyLabel}>Price in</span>
            <div className={styles.currencyBtns} role="group" aria-label="Select currency">
              {CURRENCIES.map((c) => (
                <button
                  key={c}
                  type="button"
                  className={`${styles.currencyBtn} ${currency === c ? styles.currencyActive : ''}`}
                  onClick={() => setCurrency(c)}
                >
                  {CURRENCY_SYMBOLS[c]}{c === 'AED' ? '' : c}
                </button>
              ))}
            </div>
            {detected && <span className={styles.detectedNote}>Auto-detected</span>}
          </div>
        </div>

        <div className={styles.grid}>
          {PRODUCTS.map((p) => (
            <Link key={p.id} href={p.href} className={styles.card}>
              <div className={styles.imageWrap}>
                <Image src={p.image} alt={p.name} fill style={{ objectFit: 'contain', padding: '1rem' }} />
                <span
                  className={styles.badge}
                  style={{ background: p.badgeColor }}
                >
                  {p.badge}
                </span>
              </div>

              <div className={styles.body}>
                <h3 className={styles.name}>{p.name}</h3>
                <p className={styles.subtitle}>{p.subtitle}</p>

                <div className={styles.tags}>
                  {p.tags.map((t) => (
                    <span key={t} className={styles.tag}>{t}</span>
                  ))}
                </div>

                <div className={styles.priceRow}>
                  <div>
                    <span className={styles.price}>{convertPrice(p.basePrice, currency)}</span>
                    <span className={styles.unit}>{p.unit}</span>
                  </div>
                  <span className={styles.moq}>{p.moq}</span>
                </div>

                <div className={styles.enquireBtn}>
                  Enquire Now →
                </div>
              </div>
            </Link>
          ))}
        </div>

        <p className={styles.disclaimer}>
          * Prices shown are approximate and may vary. Final pricing depends on quantity, packaging, and destination. <Link href="/contact">Contact us</Link> for an exact quote.
        </p>
      </div>
    </section>
  );
}
