import type { Metadata } from "next";
import Link from "next/link";
import { Arrow, Crosshair } from "@/components/Mark";
import { SmartLink } from "@/components/SmartLink";
import {
  COMPANY,
  COMPANY_URL,
  STUDIO_URL,
  mailto,
  studio,
} from "@/content/site";
import { pageMetadata } from "@/lib/metadata";
import styles from "./page.module.css";
import { cx } from "@/lib/cx";

export const metadata: Metadata = pageMetadata("home");

const surfaces: readonly { title: string; body: string }[] = [
  { title: "Domain & DNS", body: "Your domain, pointed and kept in step." },
  { title: "Google", body: "Accounts connected to the same record." },
  { title: "Email", body: "Draft and send from the dashboard." },
  { title: "Website", body: "Prompt a change. See it before it ships." },
  { title: "Social", body: "Plan, write, design and schedule posts." },
  { title: "Drive", body: "Your own photos and files, ready to use." },
  {
    title: "Voice",
    body: "Reception.AI by ElevenLabs answers from approved facts.",
  },
  { title: "Ads", body: "Draft campaigns from the same record." },
  { title: "Creative", body: "Images and video for posts and pages." },
];

const prompts: readonly { area: string; text: string }[] = [
  {
    area: "Website",
    text: "Change hours to closed Thanksgiving, open Friday at 7.",
  },
  {
    area: "Social",
    text: "Plan a month of posts about winter service.",
  },
  {
    area: "Campaign",
    text: "Draft a campaign for the holiday special.",
  },
  {
    area: "Voice",
    text: "Put a voice agent on the phones that answers from our approved facts.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className={styles.hero} aria-labelledby="hero-heading">
        <div className={styles.heroGrid} aria-hidden="true" />
        <div className={styles.heroGlow} aria-hidden="true" />
        <div className={styles.regMarks} aria-hidden="true">
          <Crosshair />
          <Crosshair />
        </div>

        <div className={cx("container", styles.heroInner)}>
          <div className={styles.heroMeta}>
            <span className="mono-label mono-label--accent">
              § 00 — Kinetic Labs
            </span>
            <a
              href={COMPANY_URL}
              className={styles.makerLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Created by {COMPANY}
            </a>
          </div>

          <h1 id="hero-heading" className={styles.heroH1}>
            <span className={styles.heroLine1}>We connected</span>
            <span className={styles.heroLine2}>everything.</span>
            <span className={styles.heroLine3}>
              <em>You just prompt it.</em>
              <HeroMark />
            </span>
          </h1>

          <div className={styles.heroSub}>
            <p>
              Connect your domain, socials, email and phones once. Then say
              what you want: change the website, schedule a month of posts,
              draft the campaign, put a voice agent on your phones. See it
              before it goes live. Nothing ships until you say so.
            </p>
            <div className={styles.heroSubRail}>
              <span className="mono-label">See it before it goes live.</span>
              <span className="mono-label mono-label--ink">
                Nothing ships until you say so.
              </span>
            </div>
          </div>

          <div className={styles.heroActions}>
            <a href={STUDIO_URL} className="btn btn--primary">
              Open Kinetic Studio
              <Arrow />
            </a>
            <a href="#loop" className="btn btn--ghost">
              See it in action
            </a>
          </div>

          <div className={styles.trustStrip}>
            <div className={styles.badge}>
              <span className={styles.badgeDot} aria-hidden="true" />
              <div>
                <p className={styles.badgeTitle}>Our accuracy promise</p>
                <p className={styles.badgeSub}>
                  Your facts, only the ones you approved
                </p>
              </div>
            </div>
            <dl className={styles.specLane}>
              <div>
                <dt className="mono-label">Works in</dt>
                <dd>Claude · ChatGPT</dd>
              </div>
              <div>
                <dt className="mono-label">Keeps right</dt>
                <dd>Website · Social · Voice</dd>
              </div>
              <div>
                <dt className="mono-label">Created by</dt>
                <dd>{COMPANY}</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className={styles.problem} aria-labelledby="problem-heading">
        <div className="container">
          <header className={styles.sectionHead}>
            <span className="section-tag">
              <span>§ 01</span>
              <span>The problem</span>
            </span>
            <h2 id="problem-heading" className={styles.sectionH2}>
              Five tools. <em>Nothing talks.</em>
            </h2>
          </header>
          <ol className={styles.problemList}>
            <li>
              <span className={styles.num}>01</span>
              <h3>Five logins.</h3>
              <p>Website in one place. Social in another. Email somewhere else.</p>
            </li>
            <li>
              <span className={styles.num}>02</span>
              <h3>Hours drift.</h3>
              <p>The site says one thing. Google says another. Last year’s post is still up.</p>
            </li>
            <li>
              <span className={styles.num}>03</span>
              <h3>Socials go quiet.</h3>
              <p>Nobody has time to plan a month of posts, then actually send them.</p>
            </li>
            <li>
              <span className={styles.num}>04</span>
              <h3>AI invents facts.</h3>
              <p>Ask a builder for a site and you get a made-up year and quotes from people who don’t exist.</p>
            </li>
          </ol>
        </div>
      </section>

      <section className={styles.system} aria-labelledby="system-heading">
        <div className="container">
          <header className={styles.sectionHead}>
            <span className="section-tag">
              <span>§ 02</span>
              <span>The system</span>
            </span>
            <h2 id="system-heading" className={styles.sectionH2}>
              One place. <em>Everything connected.</em>
            </h2>
          </header>
          <p className={styles.lede}>
            Connect once. Then every surface reads from one approved business
            record. Credits power generation, ads, voice and updates.
          </p>
          <div className={styles.systemMap}>
            <div className={styles.core}>
              <span className="mono-label mono-label--accent">The brain</span>
              <strong>One approved record</strong>
              <span>Name, phone, hours, services, claims.</span>
            </div>
            <ul className={styles.surfaceGrid}>
              {surfaces.map((item) => (
                <li key={item.title} className={styles.surface}>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.loop} id="loop" aria-labelledby="loop-heading">
        <div className="container">
          <header className={styles.sectionHead}>
            <span className="section-tag">
              <span>§ 03</span>
              <span>The loop</span>
            </span>
            <h2 id="loop-heading" className={styles.sectionH2}>
              Prompt. Preview. <em>Approve.</em>
            </h2>
          </header>
          <div className={styles.loopGrid}>
            <div>
              <p className={styles.lede}>
                Say what you want. Kinetic comes back with a card showing
                exactly what will change and where. Nothing goes live until you
                approve. One sentence undoes it.
              </p>
              <ol className={styles.promptList}>
                {prompts.map((item, i) => (
                  <li key={item.area}>
                    <span className={styles.num}>{String(i + 1).padStart(2, "0")}</span>
                    <div>
                      <span className="mono-label mono-label--accent">{item.area}</span>
                      <p>“{item.text}”</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <ChangeCard />
          </div>
        </div>
      </section>

      <section className={styles.promise} aria-labelledby="promise-heading">
        <div className={cx("container", styles.promiseInner)}>
          <div>
            <span className={styles.promiseTag}>§ 04 — The promise</span>
            <h2 id="promise-heading" className={styles.promiseH2}>
              Nothing invented. <em>Nothing ships without you.</em>
            </h2>
          </div>
          <div className={styles.promiseBody}>
            <p>
              Facts come from one record you approve. They are copied, never
              written by AI. AI writes the words around them and is not allowed
              to add a review, a rating, a price, a year, an award, a license
              or a stat.
            </p>
            <dl className={styles.promiseSpec}>
              <div>
                <dt>Your facts</dt>
                <dd>Copied, never invented</dd>
              </div>
              <div>
                <dt>Every change</dt>
                <dd>Shown first, then approved</dd>
              </div>
              <div>
                <dt>Changed your mind</dt>
                <dd>One sentence undoes it</dd>
              </div>
            </dl>
            <Link href="/accuracy" className={styles.promiseLink}>
              Read the full promise <Arrow />
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.ways} aria-labelledby="ways-heading">
        <div className="container">
          <header className={styles.sectionHead}>
            <span className="section-tag">
              <span>§ 05</span>
              <span>Three ways to run it</span>
            </span>
            <h2 id="ways-heading" className={styles.sectionH2}>
              Run it yourself, <em>or hand it to us.</em>
            </h2>
          </header>
          <div className={styles.waysGrid}>
            <article className={styles.way}>
              <span className="mono-label mono-label--accent">01 · Studio</span>
              <h3>Do it yourself</h3>
              <p>
                Prompt from Kinetic Studio, or from Claude or ChatGPT. Same
                record. Same approval card.
              </p>
              <Link href="/studio" className="btn btn--ghost">
                See Studio
              </Link>
            </article>
            <article className={cx(styles.way, styles.wayHero)}>
              <span className="mono-label mono-label--accent">02 · Managed</span>
              <h3>We run it</h3>
              <p>
                Our team runs the same system for your business and checks in
                with you. A person is accountable. You approve what goes out.
              </p>
              <Link href="/managed" className="btn btn--primary">
                See Managed <Arrow />
              </Link>
            </article>
            <article className={styles.way}>
              <span className="mono-label mono-label--accent">03 · Agents</span>
              <h3>Custom agents</h3>
              <p>
                Agents that take on more of the day-to-day work behind the
                business. Same rules: they propose, you approve.
              </p>
              <Link href="/agents" className="btn btn--ghost">
                See Agents
              </Link>
            </article>
          </div>
        </div>
      </section>

      <section className={styles.maker} aria-labelledby="maker-heading">
        <div className={cx("container", styles.makerInner)}>
          <span className="mono-label mono-label--accent">
            § 06 — Who built it
          </span>
          <h2 id="maker-heading" className={styles.makerH2}>
            Kinetic Labs is created by <em>{COMPANY}.</em>
          </h2>
          <p>
            {COMPANY} is an AI-first company building AI agents, online
            presence and online marketing. They did the connecting and the
            coding so you never have to. A person is accountable, not just a
            chatbot.
          </p>
          <a
            href={COMPANY_URL}
            className={styles.makerLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            {COMPANY} <Arrow />
          </a>
        </div>
      </section>

      <section className={styles.cta} aria-labelledby="cta-heading">
        <div className={cx("container", styles.ctaInner)}>
          <span className="mono-label mono-label--accent">§ 07 — Next step</span>
          <h2 id="cta-heading" className={styles.ctaH2}>
            Open Kinetic Studio.
          </h2>
          <p>
            Connect once. Then prompt the change, the posts, the campaign, the
            voice agent. See it before it goes live.
          </p>
          <div className={styles.ctaActions}>
            <a href={STUDIO_URL} className="btn btn--primary">
              Open Kinetic Studio <Arrow />
            </a>
            <a href={studio.audit} className="btn btn--ghost">
              Free website check
            </a>
            <SmartLink href="/contact" className="btn btn--ghost">
              Talk to us
            </SmartLink>
          </div>
          <span className={styles.micro}>
            Or email{" "}
            <a href={mailto("Kinetic")}>hello@gokinetic.tech</a>.
          </span>
        </div>
      </section>
    </>
  );
}

function HeroMark() {
  return (
    <svg
      className={styles.heroMark}
      width="120"
      height="120"
      viewBox="0 0 120 120"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="60" cy="60" r="56" stroke="currentColor" strokeWidth="0.75" strokeDasharray="2 4" />
      <circle cx="60" cy="60" r="40" stroke="currentColor" strokeWidth="0.75" />
      <path d="M20 60 L60 20 L100 60 L60 100 Z" stroke="currentColor" strokeWidth="1" fill="none" />
      <circle cx="60" cy="60" r="6" fill="currentColor" />
    </svg>
  );
}

function ChangeCard() {
  return (
    <figure className={styles.card}>
      <div className={styles.cardChat} aria-hidden="true">
        <span className={styles.cardWho}>You</span>
        <p>We’re closed Thanksgiving, and open Friday at 7.</p>
      </div>
      <div className={styles.cardBody} aria-hidden="true">
        <div className={styles.cardHead}>
          <span className={styles.cardBrand}>
            <span className={styles.cardDot} /> Kinetic · Proposed change
          </span>
          <span className="mono-label">Not live yet</span>
        </div>
        <ul className={styles.cardLines}>
          <CardLine checked label="Business record" detail="Holiday hours" />
          <CardLine checked label="Website" detail="Hours and banner" />
          <CardLine label="Social post" detail="Suggested holiday post" />
          <CardLine label="Voice agent" detail="New hours on the phones" />
        </ul>
        <div className={styles.cardActions}>
          <span className={styles.cardApprove}>Approve</span>
          <span className={styles.cardUndo}>Undo any time</span>
        </div>
      </div>
      <figcaption className="sr">
        Example change card. You say the hours changed. Kinetic proposes the
        record, the website, a social post and the voice agent. Nothing goes
        live until you approve.
      </figcaption>
    </figure>
  );
}

function CardLine({
  label,
  detail,
  checked,
}: {
  label: string;
  detail: string;
  checked?: boolean;
}) {
  return (
    <li className={styles.cardLine}>
      <span className={cx(styles.cardCheck, checked ? styles.cardChecked : "")}>
        {checked ? "✓" : ""}
      </span>
      <span className={styles.cardLabel}>{label}</span>
      <span className={styles.cardDetail}>{detail}</span>
    </li>
  );
}
