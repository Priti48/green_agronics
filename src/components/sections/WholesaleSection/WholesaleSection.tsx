import Image from 'next/image';
import Link from 'next/link';
import styles from './WholesaleSection.module.scss';

const OFFERS = [
  'Bulk & Wholesale-Level Orders',
  'White-Label & Private Branding',
  'Export-Ready Packaging & Compliance',
  'Consistent Quality & Scalable Supply',
  'Worldwide Shipping & Logistics Support',
];

export function WholesaleSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        {/* ── Left — truck image + floating card ── */}
        <div className={styles.imageCol}>
          <div className={styles.imgFrame}>
            <Image
              src="/assets/images/green-agronics-truck.svg"
              alt="Green Agronics export truck"
              fill
              unoptimized
              className={styles.img}
            />
          </div>

          {/* Floating "What We Offer" card */}
          <div className={styles.offerCard}>
            <div className={styles.offerLeft}>
              <h3 className={styles.offerTitle}>What We Offer</h3>
              <Link href="/contact" className={styles.enquiryBtn}>
                Bulk Order Enquiry
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
            <ul className={styles.offerList}>
              {OFFERS.map((o) => (
                <li key={o} className={styles.offerItem}>
                  <span className={styles.bullet} aria-hidden="true">•</span>
                  {o}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Right — text ── */}
        <div className={styles.textCol}>
          <h2 className={styles.heading}>
            Worldwide B2B<br />
            Supply &amp; Partnerships
          </h2>
          <p className={styles.body}>
            <strong>Green Agronics Partners</strong> with global distributors,
            wholesalers, retailers, and brands. We offer bulk supply and
            white-labeling solutions for premium makhana and organic
            supplements—crafted to meet international quality and export
            standards.
          </p>
        </div>

      </div>
    </section>
  );
}
