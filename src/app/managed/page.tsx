import type { Metadata } from "next";
import ClosingCTA from "@/components/ClosingCTA";
import s from "@/components/Inner.module.css";
import PageHero from "@/components/PageHero";
import { Arrow } from "@/components/Mark";
import { COMPANY, mailto, studio } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";
import { cx } from "@/lib/cx";
import { JsonLd } from "@/components/JsonLd";
import { pageJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = pageMetadata("managed");

// [VERIFY] Anthony: confirm this list against what Managed clients get
// (docs/managed-runbook.md) and the approval channels you'll offer.
const included: readonly { title: string; body: string }[] = [
  {
    title: "Setup",
    body: "The website check, your business record, your site and your domain.",
  },
  {
    title: "Your social calendar",
    body: "A month of posts planned, written and designed, then scheduled after you approve.",
  },
  {
    title: "Updates",
    body: "Hours, holiday hours, services and contact details kept current on your site.",
  },
  {
    title: "A monthly check-in",
    body: "A short report on what changed and what's waiting on you.",
  },
];

export default function ManagedPage() {
  return (
    <>
      <PageHero
        section="§ 04"
        kicker="Kinetic Managed"
        title={
          <>
            Rather not do it yourself? <em>We&apos;ll run it.</em>
          </>
        }
        subtitle={
          <p>
            Kinetic Managed is Kinetic run by {COMPANY}&apos;s team. We set up
            your record and site, keep your site and posts current, and check in
            with you on anything that needs your answer. You approve what goes
            out, without learning any tool.
          </p>
        }
      >
        <a href={mailto("Kinetic Managed")} className="btn btn--primary">
          Talk to us <Arrow />
        </a>
      </PageHero>

      <section className={s.section} aria-labelledby="included-heading">
        <div className="container">
          <header className={s.head}>
            <div className="section-tag">
              <span>§ 01</span>
              <span>What&apos;s included</span>
            </div>
            <h2 id="included-heading" className={s.h2}>
              The jobs nobody <em>has time for.</em>
            </h2>
          </header>
          <div className={cx(s.grid, s.grid2)}>
            {included.map((item, i) => (
              <article key={item.title} className={s.card}>
                <span className={s.cardIndex}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className={s.cardTitle}>{item.title}</h3>
                <p className={s.cardBody}>{item.body}</p>
              </article>
            ))}
          </div>
          <p className={s.lede} style={{ marginTop: "1.5rem" }}>
            Google listing updates and review replies join Managed as soon as
            Google approves our access.
          </p>
        </div>
      </section>

      <section className={s.sectionAlt} aria-labelledby="who-heading">
        <div className="container">
          <div className={s.aside}>
            <h2 id="who-heading">A person is accountable.</h2>
            <div className={s.asideBody}>
              <p>
                {COMPANY} created Kinetic Agents and runs Managed on the same
                system you&apos;d use yourself, under the same rules: nothing
                invented, and nothing goes out without your OK.
              </p>
              <p>Managed is for owners who want results, not a tool.</p>
            </div>
          </div>
        </div>
      </section>

      <ClosingCTA
        kicker="Talk to us"
        title={
          <>
            Tell us about <em>your business.</em>
          </>
        }
        body="Pricing for Managed is coming soon. Email us and we'll talk through what you need."
        ctaLabel="Email us"
        ctaHref={mailto("Kinetic Managed")}
        secondaryLabel="Free website check first"
        secondaryHref={studio.audit}
        microcopy="For now we set up each business by hand, one at a time."
      />
      <JsonLd data={pageJsonLd("managed")} />
    </>
  );
}
