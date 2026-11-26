import type { Metadata } from "next";
import ClosingCTA from "@/components/ClosingCTA";
import s from "@/components/Inner.module.css";
import PageHero from "@/components/PageHero";
import { Arrow } from "@/components/Mark";
import { COMPANY, studio } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";
import { cx } from "@/lib/cx";
import { JsonLd } from "@/components/JsonLd";
import { pageJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = pageMetadata("agents");

const AGENTS_CALL = "/agents-call";

export default function AgentsPage() {
  return (
    <>
      <PageHero
        section="§ 05"
        kicker="Kinetic Agents"
        title={
          <>
            Agents that take on more of the <em>day-to-day work.</em>
          </>
        }
        subtitle={
          <p>
            Kinetic Agents is the third part of Kinetic, after Sites and Social:
            custom agents integrated into your business. Same rules as
            everything else: they propose, you approve. Nothing is invented.
          </p>
        }
      >
        <a href={AGENTS_CALL} className="btn btn--primary">
          Free Agents Call <Arrow />
        </a>
      </PageHero>

      <section className={s.section} aria-labelledby="what-heading">
        <div className="container">
          <header className={s.head}>
            <div className="section-tag">
              <span>§ 01</span>
              <span>What Agents do</span>
            </div>
            <h2 id="what-heading" className={s.h2}>
              Beyond the website and posts.
            </h2>
          </header>
          <div className={cx(s.grid, s.grid2)}>
            <article className={s.card}>
              <span className={s.cardIndex}>01</span>
              <h3 className={s.cardTitle}>Custom integration</h3>
              <p className={s.cardBody}>
                Agents built around your specific workflows, connected to the
                tools you already use.
              </p>
            </article>
            <article className={s.card}>
              <span className={s.cardIndex}>02</span>
              <h3 className={s.cardTitle}>Same rules</h3>
              <p className={s.cardBody}>
                They propose. You approve. Nothing goes live without your OK,
                and nothing is made up.
              </p>
            </article>
            <article className={s.card}>
              <span className={s.cardIndex}>03</span>
              <h3 className={s.cardTitle}>Day-to-day work</h3>
              <p className={s.cardBody}>
                Handling more of the repetitive operational tasks behind the
                business, under the same accuracy promise.
              </p>
            </article>
            <article className={s.card}>
              <span className={s.cardIndex}>04</span>
              <h3 className={s.cardTitle}>Built by {COMPANY}</h3>
              <p className={s.cardBody}>
                Created and supported by the same team behind Kinetic Labs,
                Studio, and Managed.
              </p>
            </article>
          </div>
        </div>
      </section>

      <ClosingCTA
        kicker="Free Agents Call"
        title={
          <>
            See if Agents fit <em>your business.</em>
          </>
        }
        body="Book a free Agents call. We'll walk through what you want handled and what an agent can propose."
        ctaLabel="Free Agents Call"
        ctaHref={AGENTS_CALL}
        secondaryLabel="Start with the free check"
        secondaryHref={studio.audit}
        microcopy="Agents follow the same propose-and-approve rules as everything else in Kinetic."
      />
      <JsonLd data={pageJsonLd("agents")} />
    </>
  );
}
