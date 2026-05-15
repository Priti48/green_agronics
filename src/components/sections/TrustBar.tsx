import Image from 'next/image';
import styles from './TrustBar.module.scss';

const CERTS = [
  {
    src: '/assets/icons/fssai.svg',
    alt: 'FSSAI Certified',
    label: 'FSSAI Certified',
  },
  {
    src: '/assets/icons/certificate-of-analysis.svg',
    alt: 'Certificate of Analysis',
    label: 'Lab Tested (CoA)',
  },
  {
    src: '/assets/icons/halal-certificate.svg',
    alt: 'Halal Certified',
    label: 'Halal Certified',
  },
  {
    src: '/assets/icons/quality-assured.svg',
    alt: 'Quality Assured',
    label: 'Quality Assured',
  },
];

const TRUST_STATS = [
  { value: '12k+', label: 'Happy Customers' },
  { value: '4.8★', label: 'Avg Rating' },
  { value: '50+',  label: 'Countries' },
  { value: '100%', label: 'Natural' },
];

export default function TrustBar() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        <div className={styles.header}>
          <p className={styles.eyebrow}>Our Promise</p>
          <h2 className={styles.heading}>Trusted and Used by the Best</h2>
          <p className={styles.sub}>
            Every product is certified, lab-tested, and approved by global
            quality standards so you get nothing but the best.
          </p>
        </div>

        {/* Stats row */}
        <ul className={styles.stats}>
          {TRUST_STATS.map(({ value, label }) => (
            <li key={label} className={styles.stat}>
              <strong>{value}</strong>
              <span>{label}</span>
            </li>
          ))}
        </ul>

        {/* Certifications */}
        <div className={styles.certs}>
          {CERTS.map(({ src, alt, label }) => (
            <div key={label} className={styles.cert}>
              <div className={styles.certImg}>
                <Image src={src} alt={alt} width={72} height={72} />
              </div>
              <p className={styles.certLabel}>{label}</p>
            </div>
          ))}
        </div>

        {/* Divider + tagline */}
        <p className={styles.tagline}>
          Direct from farmers &middot; Zero middlemen &middot; Farm to your door
        </p>
      </div>
    </section>
  );
}
