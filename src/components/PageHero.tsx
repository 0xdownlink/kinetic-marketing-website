import type { ReactNode } from "react";
import styles from "./PageHero.module.css";
import { cx } from "@/lib/cx";

export default function PageHero({
  section,
  kicker,
  title,
  subtitle,
  children,
}: {
  /** e.g. "§ 02" */
  section: string;
  kicker: string;
  title: ReactNode;
  subtitle?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <header className={styles.hero}>
      <div className={cx("container", styles.inner)}>
        <div className={styles.meta}>
          <span className="mono-label mono-label--accent">
            {section} — {kicker}
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
            className={cx(styles.extra, "rise")}
            style={{ animationDelay: "0.24s" }}
          >
            {children}
          </div>
        )}
      </div>
    </header>
  );
}
