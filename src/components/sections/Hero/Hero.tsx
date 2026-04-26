import Image from "next/image";
import { Container } from "@/components/ui/Container";
import styles from "./Hero.module.scss";

export function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.background} aria-hidden="true">
        <Image
          src="/assets/images/herobanner.svg"
          alt=""
          fill
          priority
          className={styles.backgroundImage}
        />
        <div className={styles.overlay} />
      </div>

      <Container>
        <div className={styles.grid}>
          <div className={styles.content}>
            <div className={styles.kickerRow} aria-label="Highlights">
              <div className={styles.stars} aria-hidden="true">
                ★★★★★
              </div>
              <span className={styles.kickerText}>Premium Quality Makhana</span>
            </div>

            <h1 id="hero-title" className={styles.title}>
              <span className={styles.titleLine}>Premium Quality</span>
              <span className={styles.titleHighlight}>Makhana</span>
            </h1>

            <p className={styles.subtitle}>
              Honest pricing and total transparency—from harvest to export-ready
              packs.
            </p>

            <div className={styles.ctaRow}>
              <a className={styles.ctaButton} href="/shop">
                Shop makhana
              </a>
              <a className={styles.ctaSecondary} href="/about">
                Read our story
              </a>
            </div>
          </div>

          <div className={styles.visual} aria-hidden="true">
            <div className={styles.productCrop}>
              <Image
                src="/assets/images/herobanner.svg"
                alt=""
                fill
                className={styles.productImage}
                priority
              />
            </div>
          </div>
        </div>
      </Container>

      <div className={styles.featuresSection}>
        <svg
          className={styles.waveDivider}
          viewBox="0 0 1440 72"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            fill="#ffffff"
            d="M0 46 Q45 11 90 46 Q135 11 180 46 Q225 11 270 46 Q315 11 360 46 Q405 11 450 46 Q495 11 540 46 Q585 11 630 46 Q675 11 720 46 Q765 11 810 46 Q855 11 900 46 Q945 11 990 46 Q1035 11 1080 46 Q1125 11 1170 46 Q1215 11 1260 46 Q1305 11 1350 46 Q1395 11 1440 46 L1440 72 L0 72 Z"
          />
        </svg>
        <div className={styles.featuresWhite}>
          <Container className={styles.featuresInner}>
            <ul className={styles.features}>
              <li className={styles.featureCard}>
                <span className={styles.featureIcon} aria-hidden="true">
                  <Image
                    src="/images/icons/leaf.svg"
                    alt=""
                    width={26}
                    height={26}
                  />
                </span>
                <div className={styles.featureText}>
                  <div className={styles.featureTitle}>100% Vegetarian</div>
                  <div className={styles.featureSubtitle}>
                    For a better health
                  </div>
                </div>
              </li>

              <li className={styles.featureCard}>
                <span className={styles.featureIcon} aria-hidden="true">
                  <Image
                    src="/images/icons/badge.svg"
                    alt=""
                    width={26}
                    height={26}
                  />
                </span>
                <div className={styles.featureText}>
                  <div className={styles.featureTitle}>Quality Assured</div>
                  <div className={styles.featureSubtitle}>
                    Quality Always Matters
                  </div>
                </div>
              </li>

              <li className={styles.featureCard}>
                <span className={styles.featureIcon} aria-hidden="true">
                  <Image
                    src="/images/icons/globe.svg"
                    alt=""
                    width={26}
                    height={26}
                  />
                </span>
                <div className={styles.featureText}>
                  <div className={styles.featureTitle}>World Wide Export</div>
                  <div className={styles.featureSubtitle}>
                    Global Reach, Organic Quality
                  </div>
                </div>
              </li>
            </ul>
            <p className={styles.featuresTagline}>
              Rigorously tested to meet the highest quality standards and ensure
              consistent excellence.
            </p>
          </Container>
        </div>
      </div>
    </section>
  );
}
