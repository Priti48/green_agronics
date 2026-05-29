import Link from 'next/link';
import styles from './IndustriesServed.module.scss';

const INDUSTRIES = [
  {
    emoji: '🏪',
    name: 'Supermarket Chains',
    desc: 'Ready-to-retail SKUs with full traceability, shelf-life guarantees, and compliant labelling for major retail chains worldwide.',
  },
  {
    emoji: '🌿',
    name: 'Organic Food Stores',
    desc: 'USDA/EU organic certified products for specialty health food shops and organic supermarkets in the EU, UK, and North America.',
  },
  {
    emoji: '💊',
    name: 'Health & Wellness Brands',
    desc: 'Bulk powders, extracts, and capsule-grade ingredients for nutraceutical, Ayurvedic, and supplement manufacturers.',
  },
  {
    emoji: '🚢',
    name: 'Import & Distribution',
    desc: 'Established distributors who handle FCL container orders and last-mile distribution across their region.',
  },
  {
    emoji: '🛒',
    name: 'E-commerce Platforms',
    desc: 'Amazon FBA ready, Shopify-sourced products with export-compliant barcodes, FNSKU labelling, and prep services.',
  },
  {
    emoji: '🏨',
    name: 'HoReCa / Hospitality',
    desc: 'Bulk institutional supply for hotels, resorts, airlines, and restaurant chains looking for premium snack alternatives.',
  },
];

export function IndustriesServed() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Industries We Serve</p>
          <h2 className={styles.heading}>
            Supplying Across <span className={styles.accent}>Every Channel</span>
          </h2>
          <p className={styles.sub}>
            Whether you run a retail brand, an import business, or an e-commerce store,
            we have the right product format, MOQ, and documentation to serve you.
          </p>
        </div>

        <div className={styles.grid}>
          {INDUSTRIES.map((ind) => (
            <div key={ind.name} className={styles.card}>
              <span className={styles.emoji} role="img" aria-hidden="true">{ind.emoji}</span>
              <h3 className={styles.name}>{ind.name}</h3>
              <p className={styles.desc}>{ind.desc}</p>
            </div>
          ))}
        </div>

        <div className={styles.cta}>
          <p>Not sure if we supply your industry? Let&apos;s talk.</p>
          <Link href="/contact" className={styles.ctaBtn}>
            Discuss Your Requirements
          </Link>
        </div>
      </div>
    </section>
  );
}
