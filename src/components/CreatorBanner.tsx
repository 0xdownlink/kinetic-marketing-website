import { COMPANY, COMPANY_URL } from "@/content/site";
import styles from "./CreatorBanner.module.css";

/** The thin bar above the nav: Kinetic Labs is created by Anth.Tech. */
export default function CreatorBanner() {
  return (
    <aside className={styles.banner} aria-label={`Created by ${COMPANY}`}>
      <div className={styles.inner}>
        <span className={styles.mark} aria-hidden="true" />
        <p className={styles.text}>
          Kinetic Labs is created by <strong>{COMPANY}</strong>
          <span className={styles.more}>
            , an AI-first company building AI agents, online presence and online
            marketing
          </span>
          .
        </p>
        <a
          href={COMPANY_URL}
          className={styles.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit {COMPANY}
          <span aria-hidden="true"> →</span>
        </a>
      </div>
    </aside>
  );
}
