import type { Metadata } from "next";
import s from "@/components/Inner.module.css";
import PageHero from "@/components/PageHero";
import { Arrow } from "@/components/Mark";
import { COMPANY, CONTACT_EMAIL, mailto, studio } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/JsonLd";
import { pageJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = pageMetadata("contact");

const reasons: readonly {
  title: string;
  body: string;
  href: string;
  label: string;
}[] = [
  {
    title: "Your business",
    body: "Tell us what you run and what's wrong online today. We'll tell you honestly if Kinetic fits.",
    href: mailto("Kinetic for my business"),
    label: "Email about your business",
  },
  {
    title: "Kinetic Managed",
    body: "Want our team to run it for you? Let's talk through what you need.",
    href: mailto("Kinetic Managed"),
    label: "Email about Managed",
  },
  {
    title: "Already a customer",
    body: "Something not right? Tell us what you saw, and on which page.",
    href: mailto("Kinetic support"),
    label: "Email support",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        section="§ 08"
        kicker="Contact"
        title={
          <>
            Talk to the people <em>behind Kinetic.</em>
          </>
        }
        subtitle={
          <p>
            Kinetic Agents is created and run by {COMPANY}. Email us at{" "}
            <a
              href={mailto()}
              style={{ borderBottom: "1px solid var(--accent)" }}
            >
              {CONTACT_EMAIL}
            </a>
            .
          </p>
        }
      >
        <a href={mailto()} className="btn btn--primary">
          Email us <Arrow />
        </a>
        <a href={studio.audit} className="btn btn--ghost">
          Free website check
        </a>
      </PageHero>

      <section className={s.section} aria-label="Ways to reach us">
        <div className="container">
          <div className={s.grid}>
            {reasons.map((r, i) => (
              <article key={r.title} className={s.card}>
                <span className={s.cardIndex}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className={s.cardTitle}>{r.title}</h2>
                <p className={s.cardBody}>{r.body}</p>
                <p className={s.cardNote}>
                  <a href={r.href}>{r.label} →</a>
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <JsonLd data={pageJsonLd("contact")} />
    </>
  );
}
