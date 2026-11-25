import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import LegalPage from "@/components/LegalPage";
import p from "@/components/Prose.module.css";
import {
  COMPANY,
  CONTACT_EMAIL,
  LEGAL_ENTITY,
  LEGAL_UPDATED,
  STUDIO_URL,
  mailto,
} from "@/content/site";
import { pageMetadata } from "@/lib/metadata";
import { pageJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = pageMetadata("terms");

// [VERIFY] counsel: website terms of use for the marketing site only (no
// purchases, accounts or forms happen here). The Kinetic app's customer terms
// are separate and still with counsel, so this page doesn't describe them.
// [VERIFY] counsel: governing law and venue are left out until counsel names
// the state Kinetic Tech LLC is organized in; add a "Governing law" section then.
// [VERIFY] counsel: whether to add a dispute-resolution or arbitration clause.

const sections = [
  { id: "about", title: "About these terms" },
  { id: "information", title: "The information on this site" },
  { id: "use", title: "Using this site" },
  { id: "ownership", title: "Who owns what" },
  { id: "links", title: "Other sites" },
  { id: "warranty", title: "No warranty" },
  { id: "liability", title: "Limits on liability" },
  { id: "changes", title: "Changes" },
  { id: "contact", title: "Contact" },
] as const;

export default function TermsPage() {
  return (
    <>
      <LegalPage
        section="§ 10"
        kicker="Terms"
        title="Website terms of use"
        sections={sections}
      >
        <p className={p.lede}>
          These terms cover your use of gokinetic.tech, the website about
          Kinetic. By using the site, you agree to them. If you don&apos;t
          agree, please don&apos;t use the site. Last updated {LEGAL_UPDATED}.
        </p>

        <section id="about">
          <h2 data-num="01">About these terms</h2>
          <p>
            This website is run by {LEGAL_ENTITY} (&ldquo;Kinetic&rdquo;,
            &ldquo;we&rdquo;, &ldquo;us&rdquo;). Kinetic Agents was created by{" "}
            {COMPANY}.
          </p>
          <p>
            These terms cover this website only. They don&apos;t cover the
            Kinetic app at {STUDIO_URL.replace("https://", "")}, or any service
            we provide to your business. Our{" "}
            <a href="/privacy">privacy notice</a> explains what this site
            collects.
          </p>
        </section>

        <section id="information">
          <h2 data-num="02">The information on this site</h2>
          <p>
            This site describes Kinetic for general information. Each feature is
            labeled with its status. A feature marked &ldquo;Coming soon&rdquo;
            or &ldquo;Later&rdquo; isn&apos;t available yet, and we don&apos;t
            promise when, or whether, it will be.
          </p>
          <p>
            We work to keep the site accurate and up to date, but features,
            plans and availability can change without notice. Nothing on this
            site is an offer, a price or a contract.
          </p>
        </section>

        <section id="use">
          <h2 data-num="03">Using this site</h2>
          <p>
            You&apos;re welcome to read, link to and share this site. Please
            don&apos;t:
          </p>
          <ul>
            <li>
              <span>use it for anything unlawful or misleading;</span>
            </li>
            <li>
              <span>
                try to break, overload or get around the security of the site or
                the systems behind it;
              </span>
            </li>
            <li>
              <span>
                copy the site to pass it off as your own, or suggest we endorse
                you when we don&apos;t.
              </span>
            </li>
          </ul>
          <p>
            Search engines and AI assistants are welcome to read and quote the
            site, as set out in our robots.txt file.
          </p>
        </section>

        <section id="ownership">
          <h2 data-num="04">Who owns what</h2>
          <p>
            The text, design, graphics and code of this site belong to{" "}
            {LEGAL_ENTITY} or the people who licensed them to us. The Kinetic
            and Kinetic Agents names and marks are ours. The {COMPANY} name
            belongs to {COMPANY}.
          </p>
          <p>
            Claude, ChatGPT, Google and other names mentioned on this site
            belong to their owners. We name them to explain what Kinetic works
            with. It doesn&apos;t mean they endorse us.
          </p>
        </section>

        <section id="links">
          <h2 data-num="05">Other sites</h2>
          <p>
            This site links to other websites, including the Kinetic app and
            sites run by others. We&apos;re not responsible for other
            people&apos;s sites, and their own terms and policies apply there.
          </p>
        </section>

        <section id="warranty">
          <h2 data-num="06">No warranty</h2>
          <p>
            This site is provided &ldquo;as is&rdquo; and &ldquo;as
            available&rdquo;. To the extent the law allows, we make no
            warranties about it, express or implied, including that it will be
            accurate, complete, uninterrupted or free of errors.
          </p>
        </section>

        <section id="liability">
          <h2 data-num="07">Limits on liability</h2>
          <p>
            To the extent the law allows, {LEGAL_ENTITY} isn&apos;t liable for
            any indirect, incidental, special or consequential loss, or for lost
            profits, revenue or data, that comes from using this site or relying
            on it. Some places don&apos;t allow these limits, so they may not
            all apply to you.
          </p>
        </section>

        <section id="changes">
          <h2 data-num="08">Changes</h2>
          <p>
            We may update these terms. When we do, we&apos;ll post the new
            version here and change the date at the top. Using the site after
            that means you accept the update.
          </p>
        </section>

        <section id="contact">
          <h2 data-num="09">Contact</h2>
          <p>
            Questions about these terms: email{" "}
            <a href={mailto("Terms")}>{CONTACT_EMAIL}</a>.
          </p>
        </section>
      </LegalPage>
      <JsonLd data={pageJsonLd("terms")} />
    </>
  );
}
