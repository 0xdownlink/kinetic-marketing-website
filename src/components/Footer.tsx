import Link from "next/link";
import {
  COMPANY,
  CONTACT_EMAIL,
  LEGAL_ENTITY,
  footerNav,
  mailto,
} from "@/content/site";
import { Mark } from "./Mark";
import { SmartLink } from "./SmartLink";
import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.lead}>
          <Link
            href="/"
            className={styles.mark}
            aria-label="Kinetic Labs home"
          >
            <Mark size={44} />
          </Link>
          <p className={styles.tag}>
            Your business, right online. <br />
            Nothing made up.
          </p>
          <div className={styles.credit}>
            <span className={styles.creditDot} aria-hidden="true" />
            <p>
              Kinetic Labs is created by <strong>{COMPANY}</strong>, an
              AI-first company building AI agents, online presence and online
              marketing.
            </p>
          </div>
          <a href={mailto()} className={styles.email}>
            {CONTACT_EMAIL}
            <span className={styles.arrow} aria-hidden="true">
              →
            </span>
          </a>
        </div>

        <div className={styles.grid}>
          {footerNav.map((col) => (
            <div key={col.title} className={styles.col}>
              <h2 className="mono-label">{col.title}</h2>
              <ul>
                {col.links.map((l) => (
                  <li key={l.href}>
                    <SmartLink href={l.href}>{l.label}</SmartLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.base}>
        <div className={styles.baseInner}>
          <p>
            © {year} {LEGAL_ENTITY}
          </p>
          <p className={styles.entity}>Kinetic Labs · Created by {COMPANY}</p>
          <p className={styles.made}>
            <span className={styles.indicator} aria-hidden="true" /> You approve
            every change
          </p>
        </div>
      </div>

      <div className={styles.giantWordmark} aria-hidden="true">
        <span>KINETIC</span>
      </div>
    </footer>
  );
}
