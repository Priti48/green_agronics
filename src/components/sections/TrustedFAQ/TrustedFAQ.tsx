'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './TrustedFAQ.module.scss';

const FAQS = [
  {
    q: 'Are your products certified organic?',
    a: 'Yes. All Green Agronics products comply with recognised organic and quality standards. We follow strict sourcing, processing, and testing protocols to ensure purity, safety, and consistency in every batch, meeting both domestic and international export requirements.',
  },
  {
    q: 'Can you provide bulk orders for B2B clients?',
    a: 'Absolutely. We supply bulk orders starting from 100 kg, with flexible quantities for distributors and large retailers. Contact us for a custom quote.',
  },
  {
    q: 'Is white-label or private labeling available?',
    a: 'Yes. We offer full white-label and private branding services — custom packaging, logo, and formulations. Lead time is typically 15–20 working days post sample approval.',
  },
  {
    q: 'Do you ensure product quality?',
    a: 'Every batch undergoes rigorous quality checks and ships with a Certificate of Analysis (CoA). We are FSSAI, GMP, Halal, and Organic certified.',
  },
  {
    q: 'Do you export internationally?',
    a: 'Yes. We export to 50+ countries including UAE, USA, UK, Canada, Germany, Singapore, and more. We handle all export documentation and logistics.',
  },
  {
    q: 'How can I place a bulk or B2B enquiry?',
    a: 'Use the Bulk Order Enquiry button or visit our Contact page. Our team responds within 24 hours with pricing and availability details.',
  },
];

export function TrustedFAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className={styles.section}>
      <div className={styles.container}>

        {/* Left — trust copy */}
        <div className={styles.leftCol}>
          <h2 className={styles.heading}>
            Trusted and<br />Used by the Best
          </h2>
          <p className={styles.body}>
            We offers a wide range of tools and knowledge backed by
            world-renowned experts. Together we&apos;re committed to helping
            you achieve your health and wellness goals.
          </p>
          <Link href="/about" className={styles.watchBtn}>
            Watch Our Story
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>

        {/* Right — FAQ accordion */}
        <div className={styles.rightCol}>
          {FAQS.map((faq, i) => (
            <div key={i} className={`${styles.item} ${open === i ? styles.itemOpen : ''}`}>
              <button
                className={styles.question}
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span>{faq.q}</span>
                <span className={styles.icon} aria-hidden="true">
                  {open === i ? (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 10l5-5 5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  ) : (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 6l5 5 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </span>
              </button>
              {open === i && (
                <p className={styles.answer}>{faq.a}</p>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
