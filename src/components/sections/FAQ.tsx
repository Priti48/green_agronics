'use client';

import { useState } from 'react';
import styles from './FAQ.module.scss';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What is makhana and why is it healthy?',
    answer:
      'Makhana, also known as fox nuts, is a nutrient-dense superfood rich in protein, fiber, and antioxidants. It\'s low in calories and fat, making it perfect for weight management. Our organic makhana is 100% pure with no additives.',
  },
  {
    id: 'faq-2',
    question: 'Is your makhana really organic and lab-tested?',
    answer:
      'Yes, all our makhana is certified organic and lab-tested for purity. We work directly with farmers and conduct rigorous quality checks to ensure you receive the best product.',
  },
  {
    id: 'faq-3',
    question: 'How long does delivery take?',
    answer:
      'We offer next-day delivery across major Indian cities. Standard delivery takes 2-3 business days. Delivery is completely free on all orders.',
  },
  {
    id: 'faq-4',
    question: 'What if I\'m not satisfied with the product?',
    answer:
      '100% satisfaction guaranteed! If you\'re not happy with your purchase, we offer a full refund within 30 days, no questions asked.',
  },
  {
    id: 'faq-5',
    question: 'Do you ship internationally?',
    answer:
      'Currently, we deliver across India. We\'re working on international shipping and will announce it soon. Subscribe to our newsletter for updates.',
  },
  {
    id: 'faq-6',
    question: 'How should I store makhana?',
    answer:
      'Store in a cool, dry place in an airtight container. Properly stored makhana stays fresh for 3-6 months. Keep away from moisture and direct sunlight.',
  },
];

export default function FAQ() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className={styles.faq}>
      <div className={styles.faq__container}>
        <h2 className={styles.faq__heading}>Frequently Asked Questions</h2>
        <p className={styles.faq__subheading}>
          Everything you need to know about our organic makhana
        </p>

        <div className={styles.faq__list}>
          {faqItems.map((item) => (
            <div
              key={item.id}
              className={`${styles.faqItem} ${
                expandedId === item.id ? styles['faqItem--expanded'] : ''
              }`}
            >
              <button
                className={styles.faqItem__question}
                onClick={() => toggleExpand(item.id)}
                aria-expanded={expandedId === item.id}
              >
                <span>{item.question}</span>
                <span className={styles.faqItem__icon}>+</span>
              </button>
              {expandedId === item.id && (
                <div className={styles.faqItem__answer}>{item.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* SEO Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqItems.map((item) => ({
              '@type': 'Question',
              name: item.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: item.answer,
              },
            })),
          }),
        }}
      />
    </section>
  );
}
