import Image from 'next/image';
import Link from 'next/link';
import styles from './AboutSection.module.scss';

const CERTS = [
  {
    src: '/assets/icons/certificate-of-analysis.svg',
    alt: 'Certificate of Analysis',
    label: 'COA',
  },
  {
    src: '/assets/icons/quality-assured.svg',
    alt: 'Organic Certified',
    label: 'Organic',
  },
  {
    src: '/assets/icons/fssai.svg',
    alt: 'FSSAI Certified',
    label: 'FSSAI',
  },
  {
    src: '/assets/icons/halal-certificate.svg',
    alt: 'Halal Certified',
    label: 'Halal',
  },
];

export function AboutSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        {/* ── Left — main image + floating thumb ── */}
        <div className={styles.imageCol}>
          <div className={styles.mainImgWrap}>
            <Image
              src="/assets/images/welcome_to.svg"
              alt="Green Agronics team at work"
              fill
              unoptimized
              style={{ objectFit: 'cover' }}
              className={styles.mainImg}
            />
          </div>

          {/* Floating small image — outside mainImgWrap so it isn't clipped */}
          <div className={styles.floatThumb}>
            <Image
              src="/assets/images/welcometosmall.svg"
              alt="Green Agronics facility"
              fill
              unoptimized
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>

        {/* ── Right — text + certifications ── */}
        <div className={styles.textCol}>
          <p className={styles.eyebrow}>Who We Are</p>
          <h2 className={styles.heading}>
            Welcome to<br />
            <span className={styles.brand}>Green Agronics</span>
          </h2>

          <p className={styles.body}>
            Green Agronics Pvt. Ltd. is a purpose-driven organic food and
            wellness company rooted in the fertile lands of Bihar, India — the
            global heartland of premium makhana (fox nuts) and medicinal herbs.
            Guided by the philosophy&nbsp;
            <em>&ldquo;Nurturing Foods with Purity&rdquo;</em>, we are committed
            to delivering 100% organic, natural, and ethically sourced products
            to customers worldwide.
          </p>

          <Link href="/about" className={styles.readMore}>
            Read More About Us
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>

          {/* Certifications */}
          <div className={styles.certBlock}>
            <p className={styles.certHeading}>Certifications &amp; Quality Check</p>
            <div className={styles.certRow}>
              {CERTS.map((c) => (
                <div key={c.label} className={styles.cert}>
                  <div className={styles.certIcon}>
                    <Image src={c.src} alt={c.alt} width={48} height={48} />
                  </div>
                  <span className={styles.certLabel}>{c.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
