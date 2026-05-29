'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './StatsCounter.module.scss';

gsap.registerPlugin(ScrollTrigger);

const STATS = [
  { value: 12000, label: 'Happy Customers', suffix: '+', prefix: '' },
  { value: 50,    label: 'Countries Exported', suffix: '+', prefix: '' },
  { value: 4.8,   label: 'Average Rating', suffix: '★', prefix: '', decimals: 1 },
  { value: 6,     label: 'Product Categories', suffix: '+', prefix: '' },
  { value: 100,   label: 'Natural Ingredients', suffix: '%', prefix: '' },
];

export function StatsCounter() {
  const sectionRef = useRef<HTMLElement>(null);
  const numRefs    = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      numRefs.current.forEach((el, i) => {
        if (!el) return;
        const stat = STATS[i];
        const decimals = stat.decimals ?? 0;
        const obj = { val: 0 };

        gsap.to(obj, {
          val: stat.value,
          duration: 1.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            once: true,
          },
          onUpdate() {
            if (el) {
              el.textContent = stat.prefix + obj.val.toFixed(decimals) + stat.suffix;
            }
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className={styles.section}>
      <div className={styles.container}>
        {STATS.map((s, i) => (
          <div key={s.label} className={styles.stat}>
            <span
              ref={(el) => { numRefs.current[i] = el; }}
              className={styles.value}
            >
              {s.prefix}0{s.suffix}
            </span>
            <span className={styles.label}>{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
