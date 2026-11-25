import type { Metadata } from "next";
import Link from "next/link";
import ClosingCTA from "@/components/ClosingCTA";
import s from "@/components/Inner.module.css";
import PageHero from "@/components/PageHero";
import { Arrow } from "@/components/Mark";
import { studio } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/JsonLd";
import { pageJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = pageMetadata("howItWorks");

const steps: readonly { title: string; body: readonly string[] }[] = [
  {
    title: "Check your site",
    body: [
      "Paste your site's address. Kinetic reads it like a customer and like Google would: phone number, email, address, hours, broken links, and whether your pages can be listed.",
      "It's free, read-only, and needs no account.",
    ],
  },
  {
    title: "Approve your business record",
    body: [
      "Kinetic proposes one record from what your site says. Where your site contradicts itself, like two phone numbers or different Saturday hours, it asks you instead of picking one.",
      "You add your services and anything you want customers to know, in your words, and approve it. From then on, this record is the source of truth.",
    ],
  },
  {
    title: "Get your draft site",
    body: [
      "Kinetic builds a draft from the record. Contact details, hours and service names are copied exactly. AI writes the descriptions around them, under rules: no invented reviews, prices, statistics or credentials.",
      "A fact-check flags anything that isn't backed by your record, and our team reviews the draft with you before anything goes live.",
    ],
  },
  {
    title: "Approve and go live",
    body: [
      "You see the draft, ask for changes in plain sentences, and approve. Your site goes live on your domain, and we walk you through pointing it there.",
    ],
  },
  {
    title: "Every week after",
    body: [
      "Tell Kinetic what changed. Every change comes back as a card: what changes, and where. Untick anything you don't want, approve the rest, and undo it later if you change your mind.",
      "Your social posts follow the same loop: a month planned, approved on one page, then scheduled.",
    ],
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        section="§ 01"
        kicker="How it works"
        title={
          <>
            From your current site to a business that <em>stays right.</em>
          </>
        }
        subtitle={
          <p>
            Five steps, in plain words. You approve each one, and nothing about
            your business is made up along the way.
          </p>
        }
      >
        <a href={studio.audit} className="btn btn--primary">
          Start with a free website check <Arrow />
        </a>
      </PageHero>

      <section className={s.section} aria-labelledby="loop-heading">
        <div className="container">
          <header className={s.head}>
            <div className="section-tag">
              <span>§ 01</span>
              <span>The loop</span>
            </div>
            <h2 id="loop-heading" className={s.h2}>
              Check. Approve. Publish. <em>Keep it right.</em>
            </h2>
          </header>
          <ol className={s.steps}>
            {steps.map((step, i) => (
              <li key={step.title} className={s.step}>
                <span className={s.stepNum} aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className={s.stepTitle}>{step.title}</h3>
                <div className={s.stepBody}>
                  {step.body.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className={s.section} aria-labelledby="pau-heading">
        <div className="container">
          <div className={s.aside}>
            <h2 id="pau-heading">
              What &ldquo;propose, approve, undo&rdquo; means
            </h2>
            <div className={s.asideBody}>
              <p>
                Kinetic never changes anything on its own. It proposes; you
                approve. Every approved change is recorded, so you can see what
                changed, when, and who approved it, and roll it back.
              </p>
              <p>
                <Link href="/accuracy" className="btn btn--ghost">
                  Our accuracy promise
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <ClosingCTA
        title={
          <>
            Step one is <em>free.</em>
          </>
        }
        body="See what customers and Google see on your current site today. Read-only, and no account needed."
      />
      <JsonLd data={pageJsonLd("howItWorks")} />
    </>
  );
}
