import type { Metadata } from "next";
import ClosingCTA from "@/components/ClosingCTA";
import s from "@/components/Inner.module.css";
import PageHero from "@/components/PageHero";
import { StatusPill } from "@/components/StatusPill";
import {
  AREA_HEADLINE,
  AREA_LABEL,
  AREA_ORDER,
  comingFeatures,
  featuresIn,
  roadmap,
  type Feature,
} from "@/content/features";
import { mailto } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";
import { cx } from "@/lib/cx";
import { JsonLd } from "@/components/JsonLd";
import { pageJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = pageMetadata("features");

export default function FeaturesPage() {
  const coming = comingFeatures();
  return (
    <>
      <PageHero
        section="§ 02"
        kicker="Features"
        title={
          <>
            Everything Kinetic does. <em>Labeled honestly.</em>
          </>
        }
        subtitle={
          <p>
            Kinetic keeps your website, social posts and, soon, your Google
            listing right from one record you approve. Each feature below says
            whether it works today or is still coming.
          </p>
        }
      >
        <nav className={s.anchorNav} aria-label="Feature areas">
          {AREA_ORDER.map((area) => (
            <a key={area} href={`#${area}`}>
              {AREA_LABEL[area]}
            </a>
          ))}
          <a href="#coming-soon">Coming soon</a>
        </nav>
      </PageHero>

      <section className={s.legendSection} aria-label="What the labels mean">
        <div className={cx("container", s.legend)}>
          <StatusPill status="now" />
          <p>Works today.</p>
          <StatusPill status="managed" />
          <p>Works today when our team runs it for you.</p>
          <StatusPill status="soon" />
          <p>Built, waiting on a last step.</p>
        </div>
      </section>

      {AREA_ORDER.map((area, i) => (
        <section
          key={area}
          id={area}
          className={i % 2 === 1 ? s.sectionAlt : s.section}
          aria-labelledby={`${area}-heading`}
        >
          <div className="container">
            <header className={s.head}>
              <div className="section-tag">
                <span>§ {String(i + 1).padStart(2, "0")}</span>
                <span>{AREA_LABEL[area]}</span>
              </div>
              <h2 id={`${area}-heading`} className={s.h2}>
                {AREA_HEADLINE[area]}
              </h2>
            </header>
            <div className={s.grid}>
              {featuresIn(area).map((f, j) => (
                <FeatureCard key={f.id} feature={f} index={j + 1} />
              ))}
            </div>
          </div>
        </section>
      ))}

      <section
        id="coming-soon"
        className={s.section}
        aria-labelledby="coming-heading"
      >
        <div className="container">
          <header className={s.head}>
            <div className="section-tag">
              <span>§ 06</span>
              <span>Coming soon</span>
            </div>
            <h2 id="coming-heading" className={s.h2}>
              What&apos;s next, <em>said plainly.</em>
            </h2>
          </header>
          <p className={s.lede}>
            We only call something live when it is. These are built and waiting
            on a last step, or planned next.
          </p>
          <div className={s.grid}>
            {coming.map((f, j) => (
              <FeatureCard key={f.id} feature={f} index={j + 1} />
            ))}
            {roadmap.map((r, j) => (
              <article key={r.title} className={cx(s.card, s.cardSoon)}>
                <div className={s.cardTop}>
                  <span className={s.cardIndex}>
                    {String(coming.length + j + 1).padStart(2, "0")}
                  </span>
                  <StatusPill status={r.status} />
                </div>
                <h3 className={s.cardTitle}>{r.title}</h3>
                <p className={s.cardBody}>{r.body}</p>
                <p className={s.cardNote}>
                  <a href={mailto(`Tell me when ${r.title} is ready`)}>
                    Tell me when it&apos;s ready →
                  </a>
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ClosingCTA
        title={
          <>
            Start with what&apos;s wrong <em>today.</em>
          </>
        }
        body="The free website check shows what customers and Google see on your current site, and what doesn't match."
      />
      <JsonLd data={pageJsonLd("features")} />
    </>
  );
}

function FeatureCard({ feature, index }: { feature: Feature; index: number }) {
  const soon = feature.status === "soon" || feature.status === "later";
  return (
    <article className={cx(s.card, soon ? s.cardSoon : "")}>
      <div className={s.cardTop}>
        <span className={s.cardIndex}>{String(index).padStart(2, "0")}</span>
        <StatusPill status={feature.status} />
      </div>
      <h3 className={s.cardTitle}>{feature.title}</h3>
      <p className={s.cardBody}>{feature.body}</p>
      {feature.waitingOn && <p className={s.cardNote}>{feature.waitingOn}</p>}
    </article>
  );
}
