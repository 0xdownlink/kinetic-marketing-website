import type { Metadata } from "next";
import Link from "next/link";
import ClosingCTA from "@/components/ClosingCTA";
import s from "@/components/Inner.module.css";
import PageHero from "@/components/PageHero";
import { Arrow } from "@/components/Mark";
import { mailto, studio } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";
import { cx } from "@/lib/cx";
import { JsonLd } from "@/components/JsonLd";
import { pageJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = pageMetadata("pricing");

// Prices stay off this page until Anthony and Brayden sign them off
// (notes/credit-pricing-model.md is a proposal, not a price list).

export default function PricingPage() {
  return (
    <>
      <PageHero
        section="§ 06"
        kicker="Pricing"
        title={
          <>
            Pricing is <em>coming soon.</em>
          </>
        }
        subtitle={
          <p>
            We&apos;re finalizing Kinetic&apos;s plans. Until then, the website
            check is free, and we&apos;ll talk through what your business needs.
          </p>
        }
      >
        <a href={studio.audit} className="btn btn--primary">
          Free website check <Arrow />
        </a>
        <a href={mailto("Kinetic pricing")} className="btn btn--ghost">
          Talk to us
        </a>
      </PageHero>

      <section className={s.section} aria-labelledby="ways-heading">
        <div className="container">
          <header className={s.head}>
            <div className="section-tag">
              <span>§ 01</span>
              <span>Two ways to buy</span>
            </div>
            <h2 id="ways-heading" className={s.h2}>
              Yourself, <em>or done for you.</em>
            </h2>
          </header>
          <div className={cx(s.grid, s.grid2)}>
            <article className={s.card}>
              <span className="status status--soon">Plans coming soon</span>
              <h3 className={s.cardTitle}>Kinetic</h3>
              <p className={s.cardBody}>
                Run it yourself from Claude or ChatGPT: your site, your posts,
                and every change approved by you.
              </p>
              <p className={s.cardNote}>
                <Link href="/connect">How the connector works →</Link>
              </p>
            </article>
            <article className={s.card}>
              <span className="status status--soon">Pricing coming soon</span>
              <h3 className={s.cardTitle}>Kinetic Managed</h3>
              <p className={s.cardBody}>
                Our team runs it for you. You approve what goes out, without
                learning a tool.
              </p>
              <p className={s.cardNote}>
                <Link href="/managed">What Managed includes →</Link>
              </p>
            </article>
          </div>
        </div>
      </section>

      <ClosingCTA
        title={
          <>
            Start free. <em>Decide later.</em>
          </>
        }
        body="The website check costs nothing and needs no account. It shows what's wrong online today."
      />
      <JsonLd data={pageJsonLd("pricing")} />
    </>
  );
}
