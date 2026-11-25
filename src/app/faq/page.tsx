import type { Metadata } from "next";
import ClosingCTA from "@/components/ClosingCTA";
import s from "@/components/Inner.module.css";
import { JsonLd } from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import { faq } from "@/content/faq";
import { mailto, studio } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";
import { faqJsonLd, pageJsonLd } from "@/lib/structured-data";
import { cx } from "@/lib/cx";

export const metadata: Metadata = pageMetadata("faq");

export default function FaqPage() {
  return (
    <>
      <PageHero
        section="§ 07"
        kicker="FAQ"
        title={
          <>
            Straight answers. <em>No fine print.</em>
          </>
        }
      />
      <section className={s.section} aria-label="Questions">
        <div className={cx("container", s.faq)}>
          {faq.map((item, i) => (
            <details key={item.q} open={i < 2}>
              <summary>
                <span className={s.faqNum}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{item.q}</span>
              </summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </section>
      <ClosingCTA
        kicker="Still wondering?"
        title={
          <>
            Ask us <em>anything.</em>
          </>
        }
        body="Or start with the free website check and see what Kinetic finds on your site."
        ctaLabel="Email us"
        ctaHref={mailto("A question about Kinetic")}
        secondaryLabel="Free website check"
        secondaryHref={studio.audit}
      />
      <JsonLd data={faqJsonLd()} />
      <JsonLd data={pageJsonLd("faq")} />
    </>
  );
}
