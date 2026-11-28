import type { Metadata } from "next";
import Link from "next/link";
import ClosingCTA from "@/components/ClosingCTA";
import { Arrow, Crosshair } from "@/components/Mark";
import { StatusPill } from "@/components/StatusPill";
import {
  AREA_LABEL,
  AREA_ORDER,
  featuresIn,
  type FeatureArea,
  type FeatureStatus,
} from "@/content/features";
import { COMPANY, mailto, studio } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";
import styles from "./page.module.css";
import { cx } from "@/lib/cx";

export const metadata: Metadata = pageMetadata("home");

const AREA_BLURB: Record<FeatureArea, string> = {
  sites:
    "Rebuild, change, and modify your site from a prompt. See it before it goes live, from the same approved change.",
  social:
    "A month of posts planned, written and designed, approved on one page, then scheduled.",
  google:
    "Your Google listing and review replies from the same approved change.",
  media:
    "Your own photos and footage, plus AI generated photos and videos for when you need them for social content and more.",
  control:
    "Claude, ChatGPT or our team. Every change is a card you approve, and can undo.",
};

/** An area's status on the home tiles: the best status of anything in it. */
function areaStatus(area: FeatureArea): FeatureStatus {
  const order: FeatureStatus[] = ["now", "managed", "soon", "later"];
  const statuses = featuresIn(area).map((f) => order.indexOf(f.status));
  return order[Math.min(...statuses)] ?? "later";
}

export default function HomePage() {
  return (
    <>
      {/* =========== HERO =========== */}
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
            <span className="mono-label">Created by {COMPANY} · Rev. 2026</span>
          </div>

          <h1 id="hero-heading" className={cx(styles.heroH1, "rise")}>
            <span className={styles.heroLine1}>Your business,</span>
            <span className={styles.heroLine2}>right online.</span>
            <span className={styles.heroLine3}>
              <em>Nothing made up.</em>
              <HeroMark />
            </span>
          </h1>

          <div
            className={cx(styles.heroSub, "rise")}
            style={{ animationDelay: "0.18s" }}
          >
            <p>
              AI builders make you a website. Kinetic keeps your website and
              social posts right every week, from the AI app you already use.
              You approve every change, and nothing about your business is
              invented.
            </p>
            <div className={styles.heroSubRail}>
              <span className="mono-label">Run it in Claude or ChatGPT,</span>
              <span className="mono-label mono-label--ink">
                or let our team run it for you.
              </span>
            </div>
          </div>

          <div
            className={cx(styles.heroActions, "rise")}
            style={{ animationDelay: "0.34s" }}
          >
            <a href={studio.audit} className="btn btn--primary">
              Get your free website check
              <Arrow />
            </a>
            <Link href="/how-it-works" className="btn btn--ghost">
              See how it works
            </Link>
          </div>

          <div
            className={cx(styles.trustStrip, "rise")}
            style={{ animationDelay: "0.5s" }}
          >
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
                <dd>Website · Social · Google (soon)</dd>
              </div>
              <div>
                <dt className="mono-label">Created by</dt>
                <dd>{COMPANY}</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* =========== PROBLEM =========== */}
      <section className={styles.problem} aria-labelledby="problem-heading">
        <div className="container">
          <header className={styles.sectionHead}>
            <div className="section-tag">
              <span>§ 01</span>
              <span>The problem</span>
            </div>
            <h2 id="problem-heading" className={styles.sectionH2}>
              The website was the easy part.
            </h2>
          </header>

          <ol className={styles.problemList}>
            <li className={styles.problemItem}>
              <span className={styles.problemNum}>01</span>
              <h3>Your hours are wrong somewhere.</h3>
              <p>
                The site says one thing, Google says another, and last
                year&apos;s holiday post is still pinned.
              </p>
            </li>
            <li className={styles.problemItem}>
              <span className={styles.problemNum}>02</span>
              <h3>Nobody has time to post.</h3>
              <p>
                The Instagram went quiet in spring. The reviews are still
                waiting for a reply.
              </p>
            </li>
            <li className={styles.problemItem}>
              <span className={styles.problemNum}>03</span>
              <h3>AI tools guess.</h3>
              <p>
                Ask a builder for a site and you get a made-up &ldquo;serving
                the area since 2005&rdquo; and five-star quotes from people who
                don&apos;t exist.
              </p>
            </li>
          </ol>
        </div>
      </section>

      {/* =========== ONE SENTENCE =========== */}
      <section className={styles.sentence} aria-labelledby="sentence-heading">
        <div className="container">
          <header className={styles.sectionHead}>
            <div className="section-tag">
              <span>§ 02</span>
              <span>One sentence</span>
            </div>
            <h2 id="sentence-heading" className={styles.sectionH2}>
              Say it once. <em>See it before it ships.</em>
            </h2>
          </header>

          <div className={styles.sentenceGrid}>
            <div className={styles.sentenceCopy}>
              <p className={styles.sentenceLede}>
                Tell Kinetic what changed, in your own words, from Claude or
                ChatGPT. It comes back with a card showing exactly what will
                change and where.
              </p>
              <ul className={styles.sentencePoints}>
                <li>
                  <span className="mono-label mono-label--accent">Propose</span>
                  Kinetic drafts the change. Nothing goes live yet.
                </li>
                <li>
                  <span className="mono-label mono-label--accent">Approve</span>
                  Untick anything you don&apos;t want, then approve in one tap.
                </li>
                <li>
                  <span className="mono-label mono-label--accent">Undo</span>
                  Changed your mind? One sentence puts it back.
                </li>
              </ul>
              <Link href="/connect" className={styles.textLink}>
                How it works in Claude and ChatGPT <Arrow />
              </Link>
            </div>

            <ChangeCard />
          </div>
        </div>
      </section>

      {/* =========== WHAT IT KEEPS RIGHT =========== */}
      <section className={styles.whatWeDo} aria-labelledby="what-heading">
        <div className="container">
          <header className={styles.sectionHead}>
            <div className="section-tag">
              <span>§ 03</span>
              <span>What Kinetic keeps right</span>
            </div>
            <h2 id="what-heading" className={styles.sectionH2}>
              One approved record. <br />
              <em>Every place</em> customers look.
            </h2>
          </header>

          <div className={styles.tiles}>
            {AREA_ORDER.map((area, i) => (
              <Link
                key={area}
                href={`/features#${area}`}
                className={cx(styles.tile, i === 0 ? styles.tileFlame : "")}
              >
                <div className={styles.tileTop}>
                  <span className={styles.tileIndex}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <StatusPill status={areaStatus(area)} />
                </div>
                <h3 className={styles.tileTitle}>{AREA_LABEL[area]}</h3>
                <p className={styles.tileBody}>{AREA_BLURB[area]}</p>
                <div className={styles.tileTag}>
                  <span className="hairline" />
                  <span className={styles.tileMore}>
                    <span className="mono-label">
                      {featuresIn(area).length} features
                    </span>
                    <span className={styles.tileArrow} aria-hidden="true">
                      <svg
                        width="20"
                        height="14"
                        viewBox="0 0 20 14"
                        fill="none"
                      >
                        <path
                          d="M1 7h17M13 1l5 6-5 6"
                          stroke="currentColor"
                          strokeWidth="1.2"
                          strokeLinecap="square"
                        />
                      </svg>
                    </span>
                  </span>
                </div>
              </Link>
            ))}
            <Link
              href="/studio"
              className={cx(styles.tile, styles.tileGhost)}
            >
              <div className={styles.tileTop}>
                <span className={styles.tileIndex}>06</span>
                <StatusPill status="soon" />
              </div>
              <h3 className={styles.tileTitle}>Voice</h3>
              <p className={styles.tileBody}>
                Voice agents powered by Reception.AI by ElevenLabs. They answer
                and handle calls the way a person would, from the same approved
                record.
              </p>
              <div className={styles.tileTag}>
                <span className="hairline" />
                <span className="mono-label">In Kinetic Studio</span>
              </div>
            </Link>
            <Link
              href="/studio"
              className={cx(styles.tile, styles.tileGhost)}
            >
              <div className={styles.tileTop}>
                <span className={styles.tileIndex}>07</span>
                <StatusPill status="soon" />
              </div>
              <h3 className={styles.tileTitle}>Email</h3>
              <p className={styles.tileBody}>
                Draft and send email from Kinetic Studio. Same record, same
                approve-first rule.
              </p>
              <div className={styles.tileTag}>
                <span className="hairline" />
                <span className="mono-label">In Kinetic Studio</span>
              </div>
            </Link>
            <Link
              href="/studio"
              className={cx(styles.tile, styles.tileGhost)}
            >
              <div className={styles.tileTop}>
                <span className={styles.tileIndex}>08</span>
                <StatusPill status="soon" />
              </div>
              <h3 className={styles.tileTitle}>Analytics</h3>
              <p className={styles.tileBody}>
                Every data point from the business in one place. The AI app you
                already use reads the numbers and tells you what they mean.
              </p>
              <div className={styles.tileTag}>
                <span className="hairline" />
                <span className="mono-label">Your command center</span>
              </div>
            </Link>
            <Link
              href="/features#coming-soon"
              className={cx(styles.tile, styles.tileGhost)}
            >
              <div className={styles.tileTop}>
                <span className={styles.tileIndex}>09</span>
                <StatusPill status="later" />
              </div>
              <h3 className={styles.tileTitle}>Kinetic Agents</h3>
              <p className={styles.tileBody}>
                The next part of Kinetic: agents that take on more of the
                day-to-day work behind your business.
              </p>
              <div className={styles.tileTag}>
                <span className="hairline" />
                <span className="mono-label">See what&apos;s coming</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* =========== HOW IT WORKS =========== */}
      <section className={styles.how} aria-labelledby="how-heading">
        <div className="container">
          <header className={styles.sectionHead}>
            <div className="section-tag">
              <span>§ 04</span>
              <span>How it works</span>
            </div>
            <h2 id="how-heading" className={styles.sectionH2}>
              Four steps. No black boxes.
            </h2>
          </header>

          <ol className={styles.steps}>
            <Step
              step="01"
              title="Check your site"
              body="Paste your website. Kinetic reads it like a customer and like Google would, and shows what doesn't match."
              deliverable="Free website check"
            />
            <Step
              step="02"
              title="Approve your record"
              body="Your name, phone, hours, services and the claims you stand behind, in one record. It asks about anything that doesn't match."
              deliverable="One source of truth"
            />
            <Step
              step="03"
              title="Get your site"
              body="Kinetic drafts a site from that record, word for word where it matters. Our team reviews it with you before it goes live."
              deliverable="A live site on your domain"
            />
            <Step
              step="04"
              title="Keep it right"
              body="Tell Kinetic what changed. Approve the card, and it's live. Undo any time."
              deliverable="Every week after launch"
            />
          </ol>
          <Link href="/how-it-works" className={styles.textLink}>
            The whole loop, step by step <Arrow />
          </Link>
        </div>
      </section>

      {/* =========== ACCURACY (the light band) =========== */}
      <section className={styles.accuracy} aria-labelledby="accuracy-heading">
        <div className={cx("container", styles.accuracyInner)}>
          <div className={styles.accuracyHead}>
            <span className={styles.accuracyTag}>
              § 05 — Our accuracy promise
            </span>
            <h2 id="accuracy-heading" className={styles.accuracyH2}>
              We never make up a review, a price <em>or a fact.</em>
            </h2>
          </div>
          <div className={styles.accuracyBody}>
            <p>
              Your facts come from one record you approve. AI writes the words
              around them and isn&apos;t allowed to add anything new. If
              something isn&apos;t confirmed, Kinetic asks you instead of
              guessing.
            </p>
            <dl className={styles.accuracySpec}>
              <div>
                <dt>Your facts</dt>
                <dd>Copied, never written by AI</dd>
              </div>
              <div>
                <dt>Before publishing</dt>
                <dd>Fact-checked against your record</dd>
              </div>
              <div>
                <dt>Every change</dt>
                <dd>Shown first, approved by you, undoable</dd>
              </div>
            </dl>
            <Link href="/accuracy" className={styles.accuracyLink}>
              Read the full promise <Arrow />
            </Link>
          </div>
        </div>
      </section>

      {/* =========== TWO WAYS =========== */}
      <section className={styles.ways} aria-labelledby="ways-heading">
        <div className="container">
          <header className={styles.sectionHead}>
            <div className="section-tag">
              <span>§ 06</span>
              <span>Two ways to use it</span>
            </div>
            <h2 id="ways-heading" className={styles.sectionH2}>
              Do it in a sentence, <em>or hand it to us.</em>
            </h2>
          </header>

          <div className={styles.waysGrid}>
            <article className={styles.wayCard}>
              <span className="mono-label mono-label--accent">
                A · Yourself
              </span>
              <h3>In your AI app</h3>
              <p>
                Connect Kinetic to Claude or ChatGPT and run your business
                online in plain sentences. No new dashboard to learn.
              </p>
              <Link href="/connect" className="btn btn--ghost">
                Connect Kinetic
              </Link>
            </article>
            <article className={cx(styles.wayCard, styles.wayCardHero)}>
              <span className="mono-label mono-label--accent">
                B · Done for you
              </span>
              <h3>Kinetic Managed</h3>
              <p>
                {COMPANY}&apos;s team runs Kinetic for your business, checks in
                with you, and is accountable for the result. You only approve
                what goes out.
              </p>
              <Link href="/managed" className="btn btn--primary">
                See Managed <Arrow />
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* =========== HONEST FIT =========== */}
      <section className={styles.fit} aria-labelledby="fit-heading">
        <div className="container">
          <header className={styles.sectionHead}>
            <div className="section-tag">
              <span>§ 08</span>
              <span>Honest fit</span>
            </div>
            <h2 id="fit-heading" className={styles.sectionH2}>
              Who it&apos;s for. <em>Who it isn&apos;t.</em>
            </h2>
          </header>
          <div className={styles.fitGrid}>
            <div className={styles.fitCol}>
              <p className="mono-label mono-label--accent">A good fit if you</p>
              <ul>
                <li>Run a local service business or restaurant</li>
                <li>
                  Want your site, listings and posts right without doing it
                  every week
                </li>
                <li>Would rather approve than build</li>
              </ul>
            </div>
            <div className={cx(styles.fitCol, styles.fitColNo)}>
              <p className="mono-label">Not for you if you</p>
              <ul>
                <li>Are building an app or a software product</li>
                <li>Want to design pages by hand</li>
                <li>Run a large online store</li>
              </ul>
              <p className={styles.fitNote}>
                An app builder or site builder will suit you better, and
                we&apos;ll say so.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========== CREATED BY =========== */}
      <section className={styles.maker} aria-labelledby="maker-heading">
        <div className={cx("container", styles.makerInner)}>
          <span className="mono-label mono-label--accent">
            § 09 — Who&apos;s behind it
          </span>
          <h2 id="maker-heading" className={styles.makerH2}>
            Kinetic Labs is created by <em>{COMPANY}.</em>
          </h2>
          <p>
            {COMPANY} is an AI-first company that builds AI agents, online
            presence and online marketing for businesses. We build Kinetic,
            support it, and run it for Managed clients. A person is accountable,
            not just a chatbot.
          </p>
        </div>
      </section>

      <ClosingCTA
        title={
          <>
            See what&apos;s wrong online today. <em>Free.</em>
          </>
        }
        body="Paste your website and Kinetic checks your phone, hours, address, broken links and whether Google can list your pages. Read-only, and no account needed."
        secondaryHref={mailto("Kinetic for my business")}
      />
    </>
  );
}

/* ------------------------------------------------------------------ */

function Step({
  step,
  title,
  body,
  deliverable,
}: {
  step: string;
  title: string;
  body: string;
  deliverable: string;
}) {
  return (
    <li className={styles.step}>
      <div className={styles.stepHead}>
        <span className={styles.stepNum}>{step}</span>
        <span className={styles.stepRule} aria-hidden="true" />
      </div>
      <h3 className={styles.stepTitle}>{title}</h3>
      <p className={styles.stepBody}>{body}</p>
      <p className={styles.stepDeliverable}>
        <span className="mono-label">You get</span>
        <span>{deliverable}</span>
      </p>
    </li>
  );
}

/**
 * An illustration of a change card, the way Kinetic shows one in an AI app.
 * It's a picture of the flow, not a live control, so it's hidden from the
 * accessibility tree and described in text beside it.
 */
function ChangeCard() {
  return (
    <figure className={styles.card}>
      <div className={styles.cardChat} aria-hidden="true">
        <span className={styles.cardWho}>You</span>
        <p>We&apos;re closed Thanksgiving, and open Black Friday at 7.</p>
      </div>
      <div className={styles.cardBody} aria-hidden="true">
        <div className={styles.cardHead}>
          <span className={styles.cardBrand}>
            <span className={styles.cardDot} /> Kinetic · Proposed change
          </span>
          <span className="mono-label">Not live yet</span>
        </div>
        <ul className={styles.cardLines}>
          <CardLine
            checked
            label="Business record"
            detail="Holiday hours for Nov 26 and Nov 27"
          />
          <CardLine
            checked
            label="Website"
            detail="Hours updated, holiday banner added"
          />
          <CardLine
            label="Social post"
            detail="Suggested: a post about the holiday hours"
          />
          <CardLine soon label="Google listing" detail="Special hours" />
        </ul>
        <div className={styles.cardActions}>
          <span className={styles.cardApprove}>Approve</span>
          <span className={styles.cardUndo}>Undo any time</span>
        </div>
      </div>
      <figcaption className="sr">
        Example: you tell Kinetic you&apos;re closed on Thanksgiving. Kinetic
        proposes one change with a line for your business record, your website
        and an optional social post, and nothing goes live until you approve.
        The Google listing line is coming soon.
      </figcaption>
    </figure>
  );
}

function CardLine({
  label,
  detail,
  checked,
  soon,
}: {
  label: string;
  detail: string;
  checked?: boolean;
  soon?: boolean;
}) {
  return (
    <li className={cx(styles.cardLine, soon ? styles.cardLineSoon : "")}>
      <span className={cx(styles.cardCheck, checked ? styles.cardChecked : "")}>
        {checked ? "✓" : ""}
      </span>
      <span className={styles.cardLabel}>{label}</span>
      <span className={styles.cardDetail}>{soon ? "Coming soon" : detail}</span>
    </li>
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
      <circle
        cx="60"
        cy="60"
        r="56"
        stroke="currentColor"
        strokeWidth="0.75"
        strokeDasharray="2 4"
      />
      <circle cx="60" cy="60" r="40" stroke="currentColor" strokeWidth="0.75" />
      <path
        d="M20 60 L60 20 L100 60 L60 100 Z"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
      />
      <circle cx="60" cy="60" r="6" fill="currentColor" />
      <text
        x="60"
        y="118"
        textAnchor="middle"
        fontFamily="var(--font-plex-mono)"
        fontSize="6"
        letterSpacing="2"
        fill="currentColor"
      >
        KIN-A · 001
      </text>
    </svg>
  );
}
