'use client';

import { useRef, useState } from 'react';
import styles from './GreenDifference.module.scss';

const FEATURES = [
  {
    id: 'quality',
    title: 'Premium Quality',
    desc: 'Pure makhana and organic supplements for everyday wellness',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2L4 6v6c0 5.25 3.5 10.15 8 11.35C16.5 22.15 20 17.25 20 12V6l-8-4z" stroke="white" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 'pricing',
    title: 'Honest Pricing',
    desc: 'No retail markups. No fake discounts. Just fair prices.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="9" stroke="white" strokeWidth="1.8" />
        <path d="M12 7v1.5M12 15.5V17" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M9.5 10a2.5 2 0 015 0c0 1.5-1.5 2-2.5 2.5S9.5 14 9.5 15.5h5" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 'transparency',
    title: 'Total Transparency',
    desc: 'Every ingredient. Every test. Always visible to you.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="4" y="3" width="12" height="16" rx="1.5" stroke="white" strokeWidth="1.8" />
        <path d="M8 7h6M8 11h6M8 15h4" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="17" cy="17" r="3.5" stroke="white" strokeWidth="1.6" />
        <path d="M19.5 19.5L21 21" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
];

export function GreenDifference() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (playing) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setPlaying(!playing);
  };

  return (
    <section className={styles.section}>
      <div className={styles.inner}>

        {/* Video block */}
        <div className={styles.videoBlock}>
          <div className={styles.videoWrap}>

            {/* Logo top-left */}
            <div className={styles.videoLogo} aria-hidden="true">
              <span className={styles.logoText}>Green<br />Agronics</span>
            </div>

            {/* Video element — replace src with real video when available */}
            <video
              ref={videoRef}
              className={styles.video}
              src="https://www.w3schools.com/html/mov_bbb.mp4"
              poster="/assets/images/green-difference-poster.png"
              playsInline
              loop
              onEnded={() => setPlaying(false)}
            />

            {/* Dark overlay */}
            <div className={styles.videoOverlay} />

            {/* Play / Pause button */}
            <button
              className={`${styles.playBtn} ${playing ? styles.playing : ''}`}
              onClick={togglePlay}
              aria-label={playing ? 'Pause video' : 'Play video'}
            >
              {playing ? (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                  <rect x="6" y="4" width="4" height="16" rx="1" />
                  <rect x="14" y="4" width="4" height="16" rx="1" />
                </svg>
              ) : (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                  <path d="M8 5l13 7-13 7V5z" />
                </svg>
              )}
            </button>

            {/* Caption bottom */}
            <p className={styles.caption}>The Green Agronics Difference</p>
          </div>
        </div>

        {/* Feature cards */}
        <div className={styles.cards}>
          {FEATURES.map((f) => (
            <div key={f.id} className={styles.card}>
              <div className={styles.iconWrap}>{f.icon}</div>
              <h3 className={styles.cardTitle}>{f.title}</h3>
              <p className={styles.cardDesc}>{f.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
