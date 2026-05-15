import Image from 'next/image';
import Link from 'next/link';
import styles from './WholesaleSection.module.scss';

const HIGHLIGHTS = [
  { stat: '50+', label: 'Countries Exported' },
  { stat: '500T', label: 'Monthly Capacity' },
  { stat: 'FSSAI', label: 'Certified' },
  { stat: 'GMP', label: 'Compliant' },
];

export function WholesaleSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        {/* Text side */}
        <div className={styles.textCol}>
          <p className={styles.eyebrow}>For Businesses</p>
          <h2 className={styles.heading}>
            Worldwide B2B<br />
            <span className={styles.headingAccent}>Supply &amp; Partnerships</span>
          </h2>
          <p className={styles.body}>
            Green Agronics partners with global distributors, health brands, and
            retail chains. We offer custom packaging, private labelling, and
            bulk-rate pricing — all backed by certifications and traceability from
            farm to freight.
          </p>

          {/* Stats */}
          <ul className={styles.stats}>
            {HIGHLIGHTS.map((h) => (
              <li key={h.label} className={styles.stat}>
                <strong>{h.stat}</strong>
                <span>{h.label}</span>
              </li>
            ))}
          </ul>

          <div className={styles.actions}>
            <Link href="/contact" className={styles.btnPrimary}>
              Get in Touch
            </Link>
            <Link href="/export" className={styles.btnGhost}>
              Learn More
            </Link>
          </div>
        </div>

        {/* Image side */}
        <div className={styles.imageCol}>
          <div className={styles.imgFrame}>
            <Image
              src="/assets/images/green-agronics-truck.svg"
              alt="Green Agronics global export"
              width={580}
              height={480}
              className={styles.img}
            />
          </div>

          {/* Floating badge */}
          <div className={styles.floatBadge}>
            <span className={styles.floatNum}>50+</span>
            <span className={styles.floatLabel}>Countries</span>
          </div>
        </div>
      </div>
    </section>
  );
}
