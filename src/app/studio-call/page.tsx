import type { Metadata } from "next";
import s from "@/components/Inner.module.css";
import PageHero from "@/components/PageHero";
import { Arrow } from "@/components/Mark";
import {
  COMPANY,
  STUDIO_CALL_EMBED_URL,
  mailto,
  studio,
} from "@/content/site";
import { pageMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/JsonLd";
import { pageJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = pageMetadata("studioCall");

export default function StudioCallPage() {
  return (
    <>
      <PageHero
        section="§ 03"
        kicker="Studio Strategy Call"
        title={
          <>
            Book a free <em>Studio call.</em>
          </>
        }
        subtitle={
          <p>
            Talk with the {COMPANY} team about Kinetic Studio. We'll walk
            through the dashboard, what you can connect, and how you run your
            digital presence by prompting. You approve every change. Nothing is
            invented.
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
          {STUDIO_CALL_EMBED_URL ? (
            <iframe
              title="Book a Studio Strategy Call"
              src={STUDIO_CALL_EMBED_URL}
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
                <a
                  href={mailto("Studio Strategy Call")}
                  className="btn btn--primary"
                >
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
              <h3 className={s.cardTitle}>Your presence</h3>
              <p className={s.cardBody}>
                Website, Google, socials, and the other places customers look
                you up today.
              </p>
            </article>
            <article className={s.card}>
              <span className={s.cardIndex}>02</span>
              <h3 className={s.cardTitle}>What Studio runs</h3>
              <p className={s.cardBody}>
                How prompting covers site changes, ads, content, and voice
                from one dashboard.
              </p>
            </article>
            <article className={s.card}>
              <span className={s.cardIndex}>03</span>
              <h3 className={s.cardTitle}>Whether it fits</h3>
              <p className={s.cardBody}>
                Honest answer on if Kinetic Studio is the right way for you to
                run it yourself.
              </p>
            </article>
          </div>
        </div>
      </section>

      <JsonLd data={pageJsonLd("studioCall")} />
    </>
  );
}
