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

const connections = [
  {
    title: "Google accounts",
    body: "Business Profile, Ads, Analytics, and the rest of your Google presence in one place.",
  },
  {
    title: "Email & website",
    body: "Your site, domain, and DNS records. Prompt changes and see them before they go live.",
  },
  {
    title: "Social media",
    body: "Connect the channels you post on. Generate, schedule, and approve from the same dashboard.",
  },
  {
    title: "Google Drive",
    body: "Pull your photos, videos, and files. Use your own assets or generate new ones.",
  },
  {
    title: "Voice agents",
    body: "11Labs-powered voice. Answer calls, handle inquiries, and stay consistent with your approved facts.",
  },
  {
    title: "Reception & more",
    body: "Reception.ai and the rest of the stack, wired into the same approve-first system.",
  },
] as const;

const capabilities = [
  {
    title: "Website changes in a sentence",
    body: "“We're closed Thanksgiving.” Studio drafts the update, shows it on your site and listings, and waits for your approval.",
  },
  {
    title: "Ad campaigns",
    body: "Describe the offer. Studio builds the campaign, writes the copy, and generates creative — you see it before it spends.",
  },
  {
    title: "Social content & scheduling",
    body: "A month of posts planned, written, designed, and scheduled. Approve on one page, then it runs.",
  },
  {
    title: "Generated creative",
    body: "Images and video when you need them, powered by tools like Higgsfield. Always grounded in your approved record.",
  },
  {
    title: "Voice that matches you",
    body: "11Labs voice agents that sound like your business and only say what you've approved.",
  },
  {
    title: "Credits that power it",
    body: "Buy credits and run your entire digital presence through the dashboard. No new tools to learn.",
  },
] as const;

export default function StudioPage() {
  return (
    <>
      <PageHero
        section="§ 03"
        kicker="Kinetic Studio"
        title={
          <>
            One dashboard. <em>Your entire digital presence.</em>
          </>
        }
        subtitle={
          <p>
            Kinetic Studio is the place where you connect everything — Google,
            email, website, DNS, socials, Drive, voice — and run it by
            prompting. Claude and ChatGPT are the brain. You approve every
            change. Nothing is invented.
          </p>
        }
      >
        <a
          href={STUDIO_URL}
          className="btn btn--primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open Kinetic Studio <Arrow />
        </a>
        <a href={studio.audit} className="btn btn--ghost">
          Free website check first
        </a>
      </PageHero>

      <section className={s.section} aria-labelledby="problem-heading">
        <div className="container">
          <header className={s.head}>
            <div className="section-tag">
              <span>§ 01</span>
              <span>The problem</span>
            </div>
            <h2 id="problem-heading" className={s.h2}>
              Your online presence is <em>scattered.</em>
            </h2>
          </header>
          <div className={cx(s.grid, s.grid2)}>
            <article className={s.card}>
              <span className={s.cardIndex}>01</span>
              <h3 className={s.cardTitle}>Too many tools</h3>
              <p className={s.cardBody}>
                Website in one place, posts in another, ads somewhere else,
                phone calls nowhere. Nothing talks to each other.
              </p>
            </article>
            <article className={s.card}>
              <span className={s.cardIndex}>02</span>
              <h3 className={s.cardTitle}>No time to keep it right</h3>
              <p className={s.cardBody}>
                Hours change. Holidays happen. Social goes quiet. The site and
                Google drift apart.
              </p>
            </article>
            <article className={s.card}>
              <span className={s.cardIndex}>03</span>
              <h3 className={s.cardTitle}>AI that guesses</h3>
              <p className={s.cardBody}>
                Other tools invent facts, reviews, and history. You end up
                fixing the damage instead of running the business.
              </p>
            </article>
            <article className={s.card}>
              <span className={s.cardIndex}>04</span>
              <h3 className={s.cardTitle}>No single place to approve</h3>
              <p className={s.cardBody}>
                Changes go live before you see them. Or they never happen
                because you're the bottleneck.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className={s.sectionAlt} aria-labelledby="connect-heading">
        <div className="container">
          <header className={s.head}>
            <div className="section-tag">
              <span>§ 02</span>
              <span>Connect everything</span>
            </div>
            <h2 id="connect-heading" className={s.h2}>
              One record. <em>Every surface.</em>
            </h2>
          </header>
          <p className={s.lede}>
            Studio starts with the same approved business record as the rest of
            Kinetic. Then it connects the places customers actually look.
          </p>
          <div className={cx(s.grid, s.grid2)}>
            {connections.map((item, i) => (
              <article key={item.title} className={s.card}>
                <span className={s.cardIndex}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className={s.cardTitle}>{item.title}</h3>
                <p className={s.cardBody}>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={s.section} aria-labelledby="brain-heading">
        <div className="container">
          <header className={s.head}>
            <div className="section-tag">
              <span>§ 03</span>
              <span>The brain</span>
            </div>
            <h2 id="brain-heading" className={s.h2}>
              Claude and ChatGPT. <em>Plus the specialists.</em>
            </h2>
          </header>
          <div className={s.aside}>
            <h2>You prompt. Studio proposes.</h2>
            <div className={s.asideBody}>
              <p>
                The core is Claude and ChatGPT — the AI you already know. Studio
                gives them your approved record so they can't invent facts.
                Specialists handle the rest: Higgsfield for creative, 11Labs for
                voice, Reception.ai for calls, and more as we add them.
              </p>
              <p>
                Every output is a card you approve. Nothing ships until you say
                so. Undo is one sentence away.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={s.sectionAlt} aria-labelledby="capabilities-heading">
        <div className="container">
          <header className={s.head}>
            <div className="section-tag">
              <span>§ 04</span>
              <span>What you can do</span>
            </div>
            <h2 id="capabilities-heading" className={s.h2}>
              Run the whole thing <em>by prompting.</em>
            </h2>
          </header>
          <div className={cx(s.grid, s.grid2)}>
            {capabilities.map((item, i) => (
              <article key={item.title} className={s.card}>
                <span className={s.cardIndex}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className={s.cardTitle}>{item.title}</h3>
                <p className={s.cardBody}>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={s.section} aria-labelledby="loop-heading">
        <div className="container">
          <header className={s.head}>
            <div className="section-tag">
              <span>§ 05</span>
              <span>The loop</span>
            </div>
            <h2 id="loop-heading" className={s.h2}>
              Prompt. Preview. <em>Approve.</em>
            </h2>
          </header>
          <ol className={s.steps}>
            <li className={s.step}>
              <span className={s.stepNum}>01</span>
              <h3 className={s.stepTitle}>Say it once</h3>
              <div className={s.stepBody}>
                <p>
                  Tell Studio what changed or what you want, in plain language.
                  From Claude, ChatGPT, or right in the dashboard.
                </p>
              </div>
            </li>
            <li className={s.step}>
              <span className={s.stepNum}>02</span>
              <h3 className={s.stepTitle}>See the card</h3>
              <div className={s.stepBody}>
                <p>
                  Studio shows exactly what will change — on the site, in ads, in
                  posts, in voice — and where. Nothing is live yet.
                </p>
              </div>
            </li>
            <li className={s.step}>
              <span className={s.stepNum}>03</span>
              <h3 className={s.stepTitle}>Approve or undo</h3>
              <div className={s.stepBody}>
                <p>
                  One tap to ship. One sentence to take it back. The same rule
                  everywhere in Kinetic Labs.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      <section className={s.sectionAlt} aria-labelledby="credits-heading">
        <div className="container">
          <div className={s.aside}>
            <h2 id="credits-heading">Credits power the suite.</h2>
            <div className={s.asideBody}>
              <p>
                Buy credits inside Studio and use them for generation, ads,
                voice, and updates. No surprise bills from five different tools.
                You control the spend, and every use still goes through the
                approval loop.
              </p>
              <p>
                Studio is the self-serve layer of Kinetic Labs. Managed and
                Agents sit on top of the same system when you want more help or
                deeper automation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ClosingCTA
        kicker="Open the dashboard"
        title={
          <>
            See what one place <em>can run.</em>
          </>
        }
        body="Connect your accounts, try a prompt, and approve the result. Or start with the free website check."
        ctaLabel="Open Kinetic Studio"
        ctaHref={STUDIO_URL}
        secondaryLabel="Free website check"
        secondaryHref={studio.audit}
        microcopy={`Built by ${COMPANY}. Same accuracy promise as everything else in Kinetic Labs.`}
      />
      <JsonLd data={pageJsonLd("studio")} />
    </>
  );
}
