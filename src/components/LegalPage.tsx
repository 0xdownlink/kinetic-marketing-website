import type { ReactNode } from "react";
import { LEGAL_ENTITY, LEGAL_UPDATED } from "@/content/site";
import { cx } from "@/lib/cx";
import PageHero from "./PageHero";
import p from "./Prose.module.css";

export interface LegalSection {
  id: string;
  title: string;
}

/**
 * The shared frame for the privacy and terms pages: the hero, a numbered
 * "On this page" list, the date and the company, then the page's sections.
 * Each section in `children` uses the same id as its entry in `sections`.
 */
export default function LegalPage({
  section,
  kicker,
  title,
  sections,
  children,
}: {
  section: string;
  kicker: string;
  title: string;
  sections: readonly LegalSection[];
  children: ReactNode;
}) {
  return (
    <>
      <PageHero section={section} kicker={kicker} title={title} />
      <div className={p.wrap}>
        <div className={cx("container", p.wrapInner)}>
          <nav className={p.toc} aria-label="On this page">
            <p className={p.tocTitle}>On this page</p>
            <ol className={p.tocList}>
              {sections.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`}>{s.title}</a>
                </li>
              ))}
            </ol>
            <div className={p.tocMeta}>
              <span>Last updated {LEGAL_UPDATED}</span>
              <span>{LEGAL_ENTITY}</span>
            </div>
          </nav>
          <article className={p.prose}>{children}</article>
        </div>
      </div>
    </>
  );
}
