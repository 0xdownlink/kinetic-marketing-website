import type { Metadata } from "next";
import ClosingCTA from "@/components/ClosingCTA";
import PageHero from "@/components/PageHero";
import p from "@/components/Prose.module.css";
import { pageMetadata } from "@/lib/metadata";
import { cx } from "@/lib/cx";
import { JsonLd } from "@/components/JsonLd";
import { pageJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = pageMetadata("accuracy");

const sections = [
  { id: "record", title: "One record, approved by you" },
  { id: "copied", title: "Facts are copied, not written" },
  { id: "rules", title: "AI has rules" },
  { id: "check", title: "A fact-check before publishing" },
  { id: "stopped", title: "Unconfirmed means stopped" },
  { id: "undo", title: "You see every change first" },
  { id: "limits", title: "What we can't promise" },
] as const;

export default function AccuracyPage() {
  return (
    <>
      <PageHero
        section="§ 05"
        kicker="Accuracy promise"
        title={
          <>
            We never make things up <em>about your business.</em>
          </>
        }
      />
      <div className={p.wrap}>
        <div className={cx("container", p.wrapInner)}>
          <nav className={p.toc} aria-label="On this page">
            <p className={p.tocTitle}>On this page</p>
            <ol className={p.tocList}>
              {sections.map((x) => (
                <li key={x.id}>
                  <a href={`#${x.id}`}>{x.title}</a>
                </li>
              ))}
            </ol>
          </nav>
          <article className={p.prose}>
            {/* The promise, word for word from 01-positioning.md §5. The
                "same day" fix sentence is left out until Anthony confirms it. */}
            <p className={p.lede}>
              Kinetic never invents facts about your business. Your hours,
              prices, phone number, services and claims come only from what
              you&apos;ve approved. AI helps with the wording, and it isn&apos;t
              allowed to add a review, a price, a statistic or a credential you
              didn&apos;t give us. Every change shows you exactly what will
              change before it goes live, and you can undo it.
            </p>

            <section id="record">
              <h2 data-num="01">One record, approved by you</h2>
              <p>
                Your name, phone, email, address, hours, special hours, services
                and prices, and the claims you stand behind live in one business
                record. Nothing goes in it without your approval.
              </p>
            </section>
            <section id="copied">
              <h2 data-num="02">Facts are copied, not written</h2>
              <p>
                Contact details, hours and service names are placed exactly as
                recorded. AI doesn&apos;t retype them, so it can&apos;t get them
                wrong.
              </p>
            </section>
            <section id="rules">
              <h2 data-num="03">AI has rules</h2>
              <p>
                It can describe your services from your own words. It can&apos;t
                add:
              </p>
              <ul>
                <li>a review or a rating</li>
                <li>a price you didn&apos;t set</li>
                <li>a year, an award or a license</li>
                <li>a statistic or a claim you didn&apos;t approve</li>
              </ul>
            </section>
            <section id="check">
              <h2 data-num="04">A fact-check before publishing</h2>
              <p>
                Each page is checked against your record before it goes out, and
                anything unsupported is flagged for you instead of published.
              </p>
            </section>
            <section id="stopped">
              <h2 data-num="05">Unconfirmed means stopped</h2>
              <p>
                If Kinetic isn&apos;t sure about something, it asks you.
                Anything marked to verify can&apos;t be published until
                it&apos;s confirmed.
              </p>
            </section>
            <section id="undo">
              <h2 data-num="06">You see every change first</h2>
              <p>
                Every change comes back as a card showing what will change and
                where. You approve it, and you can undo it afterwards.
              </p>
            </section>
            <section id="limits">
              <h2 data-num="07">What we can&apos;t promise</h2>
              <p>
                That Google, Yelp or other sites show what we send them. They
                decide what they display, and some changes take time to appear
                there.
              </p>
            </section>
          </article>
        </div>
      </div>
      <ClosingCTA
        title={
          <>
            See what&apos;s wrong on <em>your site today.</em>
          </>
        }
        body="The free website check shows where your phone, hours and address don't match, before anything changes."
      />
      <JsonLd data={pageJsonLd("accuracy")} />
    </>
  );
}
