import type { ReactNode } from "react";
import { mailto, studio } from "@/content/site";
import { Arrow } from "./Mark";
import { SmartLink } from "./SmartLink";
import styles from "./ClosingCTA.module.css";
import { cx } from "@/lib/cx";

export default function ClosingCTA({
  kicker = "Next step",
  title,
  body,
  ctaLabel = "Get your free website check",
  ctaHref = studio.audit,
  secondaryLabel = "Or talk to us",
  secondaryHref = mailto("Kinetic"),
  microcopy = "Free. Read-only. No account needed.",
}: {
  kicker?: string;
  title: ReactNode;
  body: ReactNode;
  ctaLabel?: string;
  ctaHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  microcopy?: ReactNode;
}) {
  return (
    <section className={styles.band}>
      <div className={cx("container", styles.inner)}>
        <span className="mono-label mono-label--accent">§ — {kicker}</span>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.body}>{body}</p>
        <div className={styles.actions}>
          <SmartLink href={ctaHref} className="btn btn--primary">
            {ctaLabel}
            <Arrow />
          </SmartLink>
          <SmartLink href={secondaryHref} className="btn btn--ghost">
            {secondaryLabel}
          </SmartLink>
        </div>
        {microcopy && <span className={styles.micro}>{microcopy}</span>}
      </div>
    </section>
  );
}
