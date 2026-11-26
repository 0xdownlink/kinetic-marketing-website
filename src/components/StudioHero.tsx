import type { ReactNode } from "react";
import styles from "./StudioHero.module.css";
import { cx } from "@/lib/cx";

const categories = [
  "Google",
  "Website & DNS",
  "Social",
  "Ads",
  "Drive",
  "Voice",
  "Credits",
] as const;

export default function StudioHero({
  title,
  subtitle,
  children,
}: {
  title: ReactNode;
  subtitle?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <header className={styles.hero}>
      <div className={cx("container", styles.inner)}>
        <div className={styles.content}>
          <div className={styles.meta}>
            <span className="mono-label mono-label--accent">
              § 03 — Kinetic Studio
            </span>
            <span className="mono-label">Kinetic Labs · Rev. 2026</span>
          </div>
          <h1 className={cx(styles.title, "rise")}>{title}</h1>
          {subtitle && (
            <div
              className={cx(styles.subtitle, "rise")}
              style={{ animationDelay: "0.12s" }}
            >
              {subtitle}
            </div>
          )}
          {children && (
            <div
              className={cx(styles.actions, "rise")}
              style={{ animationDelay: "0.24s" }}
            >
              {children}
            </div>
          )}
        </div>

        <div className={cx(styles.frame, "rise")} style={{ animationDelay: "0.18s" }}>
          <div className={styles.mock} aria-hidden="true">
            <div className={styles.mockTop}>
              <span className={styles.dot} />
              <span className={styles.dot} />
              <span className={styles.dot} />
              <span className={styles.mockTitle}>Kinetic Studio</span>
            </div>
            <div className={styles.mockBody}>
              <aside className={styles.sidebar}>
                <div className={styles.sideLabel}>Categories</div>
                {categories.map((cat, i) => (
                  <div
                    key={cat}
                    className={cx(
                      styles.sideItem,
                      i === 0 ? styles.sideItemActive : "",
                    )}
                  >
                    <span className={styles.sideDot} />
                    {cat}
                  </div>
                ))}
              </aside>
              <div className={styles.main}>
                <div className={styles.mainHead}>
                  <h3>Overview</h3>
                  <span>Live preview</span>
                </div>
                <div className={styles.cards}>
                  <div className={styles.card}>
                    <div className={styles.cardLabel}>Website</div>
                    <div className={styles.cardValue}>Hours updated</div>
                    <div className={styles.bar}>
                      <div className={styles.barFill} />
                    </div>
                  </div>
                  <div className={styles.card}>
                    <div className={styles.cardLabel}>Social</div>
                    <div className={styles.cardValue}>4 posts scheduled</div>
                    <div className={styles.bar}>
                      <div className={styles.barFill} style={{ width: "45%" }} />
                    </div>
                  </div>
                  <div className={styles.card}>
                    <div className={styles.cardLabel}>Ads</div>
                    <div className={styles.cardValue}>Campaign ready</div>
                    <div className={styles.bar}>
                      <div className={styles.barFill} style={{ width: "78%" }} />
                    </div>
                  </div>
                  <div className={styles.card}>
                    <div className={styles.cardLabel}>Voice</div>
                    <div className={styles.cardValue}>Reception.AI</div>
                    <div className={styles.bar}>
                      <div className={styles.barFill} style={{ width: "55%" }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
