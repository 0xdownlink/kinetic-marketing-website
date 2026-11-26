import type { Metadata } from "next";
import s from "@/components/Inner.module.css";
import PageHero from "@/components/PageHero";
import { Arrow } from "@/components/Mark";
import {
  COMPANY,
  STRATEGY_CALL_EMBED_URL,
  mailto,
  studio,
} from "@/content/site";
import { pageMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/JsonLd";
import { pageJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = pageMetadata("strategyCall");

export default function StrategyCallPage() {
  return (
    <>
      <PageHero
        section="§ 06"
        kicker="Free Strategy Call"
        title={
          <>
            Book a free <em>strategy call.</em>
          </>
        }
        subtitle={
          <p>
            Talk with the {COMPANY} team about Kinetic Managed. We'll look at
            your business, what needs to stay right online, and whether our
            team running it is the right fit. No pitch deck. Just a clear next
            step.
          </p>
        }
      >
        <a href="#book" className="btn btn--primary">
          Pick a time <Arrow />
        </a>
        <a href={studio.audit} className="btn btn--ghost">
          Free website check first
        </a>
      </PageHero>

      <section className={s.section} aria-labelledby="expect-heading">
        <div className="container">
          <header className={s.head}>
            <div className="section-tag">
              <span>§ 01</span>
              <span>What to expect</span>
            </div>
            <h2 id="expect-heading" className={s.h2}>
              A short call. <em>A clear answer.</em>
            </h2>
          </header>
          <div className={s.grid}>
            <article className={s.card}>
              <span className={s.cardIndex}>01</span>
              <h3 className={s.cardTitle}>Your business</h3>
              <p className={s.cardBody}>
                What you run, where customers look you up, and what's off
                online today.
              </p>
            </article>
            <article className={s.card}>
              <span className={s.cardIndex}>02</span>
              <h3 className={s.cardTitle}>What Managed covers</h3>
              <p className={s.cardBody}>
                How we set up your record and site, keep posts and details
                current, and check in with you.
              </p>
            </article>
            <article className={s.card}>
              <span className={s.cardIndex}>03</span>
              <h3 className={s.cardTitle}>Whether it fits</h3>
              <p className={s.cardBody}>
                Honest answer on if Kinetic Managed is right for you, and what
                the next step looks like.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className={s.sectionAlt} id="book" aria-labelledby="book-heading">
        <div className="container">
          <header className={s.head}>
            <div className="section-tag">
              <span>§ 02</span>
              <span>Book</span>
            </div>
            <h2 id="book-heading" className={s.h2}>
              Pick a time.
            </h2>
          </header>
          {STRATEGY_CALL_EMBED_URL ? (
            <iframe
              title="Book a Free Strategy Call"
              src={STRATEGY_CALL_EMBED_URL}
              style={{
                width: "100%",
                minHeight: "680px",
                border: "1px solid var(--rule)",
                background: "var(--paper)",
              }}
            />
          ) : (
            <div className={s.aside}>
              <h2>Calendar coming soon.</h2>
              <div className={s.asideBody}>
                <p>
                  The booking calendar will live here. For now, email us and
                  we'll find a time that works.
                </p>
                <a href={mailto("Free Strategy Call")} className="btn btn--primary">
                  Email to book <Arrow />
                </a>
              </div>
            </div>
          )}
        </div>
      </section>

      <JsonLd data={pageJsonLd("strategyCall")} />
    </>
  );
}
