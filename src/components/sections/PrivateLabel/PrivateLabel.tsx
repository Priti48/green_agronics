import Link from 'next/link';
import styles from './PrivateLabel.module.scss';

const PACKAGING = [
  {
    emoji: '🫙',
    name: 'Retail Jars',
    desc: 'Premium glass/PET jars with custom label design. 100g–1kg sizes available.',
    moq: 'MOQ: 500 units',
  },
  {
    emoji: '📦',
    name: 'Stand-up Pouches',
    desc: 'Vacuum-sealed, resealable pouches with full-color printing in any language.',
    moq: 'MOQ: 1,000 units',
  },
  {
    emoji: '🎁',
    name: 'Gift / Hamper Boxes',
    desc: 'Luxury gift boxes for festive and corporate gifting. Multi-SKU combinations.',
    moq: 'MOQ: 200 units',
  },
  {
    emoji: '🏭',
    name: 'Bulk / Institutional',
    desc: 'Food-grade HDPE bags or sacks (10–50 kg) for food manufacturers and wholesalers.',
    moq: 'MOQ: 100 kg',
  },
];

const PROCESS = [
  { step: '01', title: 'Share Your Brief', desc: 'Tell us your target market, preferred packaging, and brand guidelines.' },
  { step: '02', title: 'Design & Sampling', desc: 'Our team sends you design mockups and physical product samples within 7 days.' },
  { step: '03', title: 'Approve & Produce', desc: 'You approve the samples; we begin production with your agreed timeline.' },
  { step: '04', title: 'Ship Worldwide', desc: 'Your branded products are packed, certified, and shipped to your destination.' },
];

export function PrivateLabel() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>OEM / Private Label</p>
          <h2 className={styles.heading}>
            Your Brand. <span className={styles.accent}>Our Expertise.</span>
          </h2>
          <p className={styles.sub}>
            Launch your own organic food brand backed by our certified manufacturing,
            quality assurance, and global logistics infrastructure.
          </p>
        </div>

        {/* Packaging options */}
        <div className={styles.packagingGrid}>
          {PACKAGING.map((p) => (
            <div key={p.name} className={styles.packCard}>
              <span className={styles.packEmoji} role="img" aria-hidden="true">{p.emoji}</span>
              <h3 className={styles.packName}>{p.name}</h3>
              <p className={styles.packDesc}>{p.desc}</p>
              <span className={styles.moqTag}>{p.moq}</span>
            </div>
          ))}
        </div>

        {/* Process timeline */}
        <div className={styles.processWrap}>
          <h3 className={styles.processTitle}>How It Works</h3>
          <div className={styles.processSteps}>
            {PROCESS.map((s, i) => (
              <div key={s.step} className={styles.step}>
                <div className={styles.stepNum}>{s.step}</div>
                {i < PROCESS.length - 1 && <div className={styles.stepLine} aria-hidden="true" />}
                <h4 className={styles.stepTitle}>{s.title}</h4>
                <p className={styles.stepDesc}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.ctaRow}>
          <div className={styles.ctaText}>
            <strong>Start your private label journey today</strong>
            <span>Minimum lead time: 15 working days after sample approval</span>
          </div>
          <Link href="/contact?type=private-label" className={styles.ctaBtn}>
            Request Private Label Info
          </Link>
        </div>
      </div>
    </section>
  );
}
