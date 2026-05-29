import Image from 'next/image';
import styles from './WhyTrustUs.module.scss';

const TRUST_POINTS = [
  {
    icon: '/assets/icons/certificate-of-analysis.svg',
    title: 'Certified Products',
    desc: 'FSSAI, GMP, ISO, and Halal certified. Every batch comes with a Certificate of Analysis.',
  },
  {
    icon: '/assets/icons/quality-assured.svg',
    title: 'Export Documentation',
    desc: 'We handle all phytosanitary certificates, COO, commercial invoices, and customs paperwork.',
  },
  {
    icon: '/assets/icons/world-wide.svg',
    title: 'Bulk Supply Ready',
    desc: 'From 100 kg trial orders to 500+ MT container shipments — we scale with your business.',
  },
  {
    icon: '/assets/icons/leaf.svg',
    title: 'OEM / Private Label',
    desc: 'Custom packaging, branding, and formulations available for retail and wholesale buyers.',
  },
  {
    icon: '/assets/icons/fssai.svg',
    title: 'International Packaging',
    desc: 'Export-grade vacuum packs, retail pouches, bulk bags, and custom labelling in any language.',
  },
  {
    icon: '/assets/icons/world-wide.svg',
    title: 'Timely Shipment',
    desc: 'Dedicated logistics team ensures on-time delivery to 50+ countries via air and sea freight.',
  },
  {
    icon: '/assets/icons/quality-assured.svg',
    title: 'Global Logistics',
    desc: 'FCL & LCL shipments, DDP/DAP terms available. We work with leading freight forwarders worldwide.',
  },
  {
    icon: '/assets/icons/certificate-of-analysis.svg',
    title: 'Quality Assurance',
    desc: 'In-house lab testing + third-party audits on every lot before dispatch. Zero compromise.',
  },
];

export function WhyTrustUs() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Why Choose Us</p>
          <h2 className={styles.heading}>
            8 Reasons Importers Trust<br />
            <span className={styles.accent}>Green Agronics</span>
          </h2>
          <p className={styles.sub}>
            From farm to port — we manage every step of your export supply chain
            with transparency, certifications, and on-time delivery.
          </p>
        </div>

        <div className={styles.grid}>
          {TRUST_POINTS.map((pt, i) => (
            <div key={pt.title} className={styles.card}>
              <div className={styles.iconWrap}>
                <Image src={pt.icon} alt="" width={32} height={32} />
              </div>
              <span className={styles.number}>0{i + 1}</span>
              <h3 className={styles.cardTitle}>{pt.title}</h3>
              <p className={styles.cardDesc}>{pt.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
