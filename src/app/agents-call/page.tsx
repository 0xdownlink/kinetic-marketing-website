import type { Metadata } from "next";
import s from "@/components/Inner.module.css";
import PageHero from "@/components/PageHero";
import { Arrow } from "@/components/Mark";
import {
  AGENTS_CALL_EMBED_URL,
  COMPANY,
  mailto,
  studio,
} from "@/content/site";
import { pageMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/JsonLd";
import { pageJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = pageMetadata("agentsCall");

export default function AgentsCallPage() {
  return (
    <>
      <PageHero
        section="§ 05"
        kicker="Free Agents Call"
        title={
          <>
            Book a free <em>Agents call.</em>
          </>
        }
        subtitle={
          <p>
            Talk with the {COMPANY} team about Kinetic Agents. We'll look at
            the day-to-day work behind your business and what a custom agent
            could propose. Same rules as everything else: nothing invented, you
            approve.
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

      <section className={s.section} id="book" aria-labelledby="book-heading">
        <div className="container">
          <header className={s.head}>
            <div className="section-tag">
              <span>§ 01</span>
              <span>Book</span>
            </div>
            <h2 id="book-heading" className={s.h2}>
              Pick a time.
            </h2>
          </header>
          {AGENTS_CALL_EMBED_URL ? (
            <iframe
              title="Book a Free Agents Call"
              src={AGENTS_CALL_EMBED_URL}
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
                <a href={mailto("Free Agents Call")} className="btn btn--primary">
                  Email to book <Arrow />
                </a>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className={s.sectionAlt} aria-labelledby="expect-heading">
        <div className="container">
          <header className={s.head}>
            <div className="section-tag">
              <span>§ 02</span>
              <span>What to expect</span>
            </div>
            <h2 id="expect-heading" className={s.h2}>
              A short call. <em>A clear answer.</em>
            </h2>
          </header>
          <div className={s.grid}>
            <article className={s.card}>
              <span className={s.cardIndex}>01</span>
              <h3 className={s.cardTitle}>Your workflows</h3>
              <p className={s.cardBody}>
                The repetitive work behind the business that takes time every
                week.
              </p>
            </article>
            <article className={s.card}>
              <span className={s.cardIndex}>02</span>
              <h3 className={s.cardTitle}>What an agent can propose</h3>
              <p className={s.cardBody}>
                How a custom agent would handle those tasks under the same
                propose-and-approve rules.
              </p>
            </article>
            <article className={s.card}>
              <span className={s.cardIndex}>03</span>
              <h3 className={s.cardTitle}>Whether it fits</h3>
              <p className={s.cardBody}>
                Honest answer on if Kinetic Agents is right for you, and what
                the next step looks like.
              </p>
            </article>
          </div>
        </div>
      </section>

      <JsonLd data={pageJsonLd("agentsCall")} />
    </>
  );
}
