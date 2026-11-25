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

export const metadata: Metadata = pageMetadata("connect");

const prompts: readonly { label: string; text: string }[] = [
  {
    label: "Hours",
    text: "We're closed Thanksgiving, and open Black Friday at 7.",
  },
  { label: "Services", text: "Add gutter cleaning to our services." },
  { label: "Your site", text: "Check my website and tell me what's wrong." },
  { label: "Social", text: "Plan next month's posts around the holidays." },
  { label: "Leads", text: "Any new quote requests this week?" },
  { label: "Undo", text: "Undo that last change." },
];

export default function ConnectPage() {
  return (
    <>
      <PageHero
        section="§ 03"
        kicker="Claude & ChatGPT"
        title={
          <>
            Run your business online <em>in a sentence.</em>
          </>
        }
        subtitle={
          <p>
            Kinetic works inside Claude and ChatGPT as a connector. Say what
            changed, see a card with exactly what will change, and approve it.
            No new dashboard to learn.
          </p>
        }
      >
        <a href={studio.connector} className="btn btn--primary">
          Connector setup <Arrow />
        </a>
      </PageHero>

      <section className={s.section} aria-labelledby="setup-heading">
        <div className="container">
          <header className={s.head}>
            <div className="section-tag">
              <span>§ 01</span>
              <span>Setup</span>
            </div>
            <h2 id="setup-heading" className={s.h2}>
              Three steps, <em>a few minutes.</em>
            </h2>
          </header>
          <ol className={s.steps}>
            <li className={s.step}>
              <span className={s.stepNum} aria-hidden="true">
                01
              </span>
              <h3 className={s.stepTitle}>Copy the address</h3>
              <div className={s.stepBody}>
                <p>
                  The connector setup page has Kinetic&apos;s connector address
                  and lists which plans of each app can add a connector.
                </p>
              </div>
            </li>
            <li className={s.step}>
              <span className={s.stepNum} aria-hidden="true">
                02
              </span>
              <h3 className={s.stepTitle}>Add it to your AI app</h3>
              <div className={s.stepBody}>
                <p>
                  Add Kinetic as a custom connector in Claude or ChatGPT. The
                  setup page has the exact step for each app.
                </p>
              </div>
            </li>
            <li className={s.step}>
              <span className={s.stepNum} aria-hidden="true">
                03
              </span>
              <h3 className={s.stepTitle}>Sign in and say what changed</h3>
              <div className={s.stepBody}>
                <p>
                  Sign in to Kinetic once, then just talk. Every change comes
                  back as a card for you to approve.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      <section className={s.sectionAlt} aria-labelledby="say-heading">
        <div className="container">
          <header className={s.head}>
            <div className="section-tag">
              <span>§ 02</span>
              <span>Things to say</span>
            </div>
            <h2 id="say-heading" className={s.h2}>
              Talk like you&apos;d talk <em>to a person.</em>
            </h2>
          </header>
          <ul className={s.prompts}>
            {prompts.map((p) => (
              <li key={p.label} className={s.prompt}>
                <span>{p.label}</span>
                &ldquo;{p.text}&rdquo;
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={s.section} aria-labelledby="noapp-heading">
        <div className="container">
          <div className={s.aside}>
            <h2 id="noapp-heading">Don&apos;t use Claude or ChatGPT?</h2>
            <div className={s.asideBody}>
              <p>
                That&apos;s fine. On Kinetic Managed, our team does the work and
                you only approve what goes out.
              </p>
              <p>
                <Link href="/managed" className="btn btn--ghost">
                  See Kinetic Managed
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <ClosingCTA
        title={
          <>
            Try it on <em>your own site.</em>
          </>
        }
        body="The free website check is the same check the connector runs. Start there, then connect Kinetic to keep it right."
      />
      <JsonLd data={pageJsonLd("connect")} />
    </>
  );
}
