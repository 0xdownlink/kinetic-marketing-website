import type { Metadata } from "next";
import ClosingCTA from "@/components/ClosingCTA";
import s from "@/components/Inner.module.css";
import PageHero from "@/components/PageHero";
import { Arrow } from "@/components/Mark";
import { COMPANY, STUDIO_URL, studio } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";
import { cx } from "@/lib/cx";
import { JsonLd } from "@/components/JsonLd";
import { pageJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = pageMetadata("studio");

export default function StudioPage() {
  return (
    <>
      <PageHero
        section="§ 03"
        kicker="Kinetic Studio"
        title={
          <>
            Run your digital presence <em>by prompting.</em>
          </>
        }
        subtitle={
          <p>
            Kinetic Studio is the dashboard from {COMPANY}. Connect your
            accounts, prompt for website changes, ads, and content, then see
            exactly what will change before it goes live. Same rules: nothing
            invented, you approve everything.
          </p>
        }
      >
        <a href={STUDIO_URL} className="btn btn--primary" target="_blank" rel="noopener noreferrer">
          Open Kinetic Studio <Arrow />
        </a>
      </PageHero>

      <section className={s.section} aria-labelledby="what-heading">
        <div className="container">
          <header className={s.head}>
            <div className="section-tag">
              <span>§ 01</span>
              <span>What you can do</span>
            </div>
            <h2 id="what-heading" className={s.h2}>
              One place for your <em>online presence.</em>
            </h2>
          </header>
          <div className={cx(s.grid, s.grid2)}>
            <article className={s.card}>
              <span className={s.cardIndex}>01</span>
              <h3 className={s.cardTitle}>Connect everything</h3>
              <p className={s.cardBody}>
                Google accounts, email, website, DNS, socials, and Google Drive
                — all in one dashboard.
              </p>
            </article>
            <article className={s.card}>
              <span className={s.cardIndex}>02</span>
              <h3 className={s.cardTitle}>Prompt for changes</h3>
              <p className={s.cardBody}>
                Ask for website updates, ad campaigns, or social content in
                plain language. See the result before it publishes.
              </p>
            </article>
            <article className={s.card}>
              <span className={s.cardIndex}>03</span>
              <h3 className={s.cardTitle}>Generate and schedule</h3>
              <p className={s.cardBody}>
                Create content for ads and posts, then schedule them. You stay
                in control of what goes out.
              </p>
            </article>
            <article className={s.card}>
              <span className={s.cardIndex}>04</span>
              <h3 className={s.cardTitle}>Credits and control</h3>
              <p className={s.cardBody}>
                Buy credits to run your presence through the platform. Every
                change still follows the propose-and-approve rule.
              </p>
            </article>
          </div>
        </div>
      </section>

      <ClosingCTA
        kicker="Get started"
        title={
          <>
            Open Studio and <em>see it.</em>
          </>
        }
        body="Start with a free website check, or go straight into the dashboard."
        ctaLabel="Open Kinetic Studio"
        ctaHref={STUDIO_URL}
        secondaryLabel="Free website check"
        secondaryHref={studio.audit}
        microcopy="Studio is the self-serve way to use Kinetic Labs."
      />
      <JsonLd data={pageJsonLd("studio")} />
    </>
  );
}
