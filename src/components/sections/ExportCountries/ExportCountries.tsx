import styles from './ExportCountries.module.scss';
import Link from 'next/link';

const COUNTRIES = [
  { flag: '🇦🇪', name: 'UAE',          code: 'Dubai & Abu Dhabi' },
  { flag: '🇺🇸', name: 'USA',          code: 'New York & LA' },
  { flag: '🇬🇧', name: 'UK',           code: 'London & Manchester' },
  { flag: '🇨🇦', name: 'Canada',       code: 'Toronto & Vancouver' },
  { flag: '🇩🇪', name: 'Germany',      code: 'Berlin & Frankfurt' },
  { flag: '🇦🇺', name: 'Australia',    code: 'Sydney & Melbourne' },
  { flag: '🇸🇬', name: 'Singapore',    code: 'South-East Asia Hub' },
  { flag: '🇸🇦', name: 'Saudi Arabia', code: 'Riyadh & Jeddah' },
  { flag: '🇳🇱', name: 'Netherlands',  code: 'Rotterdam Port' },
  { flag: '🇯🇵', name: 'Japan',        code: 'Tokyo & Osaka' },
  { flag: '🇿🇦', name: 'South Africa', code: 'Cape Town & Joburg' },
  { flag: '🇫🇷', name: 'France',       code: 'Paris Distribution' },
];

const REGIONS = [
  { label: 'Middle East', count: '12+ Distributors' },
  { label: 'Europe',      count: '18+ Distributors' },
  { label: 'Americas',    count: '8+ Distributors' },
  { label: 'Asia Pacific', count: '15+ Distributors' },
];

export function ExportCountries() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Global Reach</p>
          <h2 className={styles.heading}>
            Exporting to <span className={styles.accent}>50+ Countries</span> Worldwide
          </h2>
          <p className={styles.sub}>
            Our organic products reach health food stores, supermarket chains, and wellness brands
            across every major continent.
          </p>
        </div>

        {/* Region stats */}
        <div className={styles.regions}>
          {REGIONS.map((r) => (
            <div key={r.label} className={styles.region}>
              <span className={styles.regionCount}>{r.count}</span>
              <span className={styles.regionLabel}>{r.label}</span>
            </div>
          ))}
        </div>

        {/* Country flags grid */}
        <div className={styles.grid}>
          {COUNTRIES.map((c) => (
            <div key={c.name} className={styles.countryCard}>
              <span className={styles.flag} role="img" aria-label={c.name}>{c.flag}</span>
              <span className={styles.countryName}>{c.name}</span>
              <span className={styles.countryCode}>{c.code}</span>
            </div>
          ))}
        </div>

        <div className={styles.cta}>
          <p className={styles.ctaText}>Looking to import? We ship to your country.</p>
          <Link href="/contact" className={styles.ctaBtn}>
            Start Export Enquiry
          </Link>
        </div>
      </div>
    </section>
  );
}
