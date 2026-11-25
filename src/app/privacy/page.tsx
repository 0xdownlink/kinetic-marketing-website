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

export const metadata: Metadata = pageMetadata("privacy");

// [VERIFY] counsel: this notice covers only this marketing website, as built on
// 2026-11-25. The Kinetic app's own privacy policy is separate and still with
// counsel, so this page doesn't describe it.
//
// No cookie consent banner: Anthony's decision (2026-11-25). The audience is US
// local businesses, and GA4 runs with no ad features. [VERIFY] counsel: revisit
// if the site starts marketing to the EU or UK, or if Google signals or Google
// Ads linking is switched on in GA4 (then Google needs Consent Mode for EU/UK
// visitors, and "we don't sell or share" needs a second look).
//
// What's true as built: the only third-party script is the Google tag
// (GOOGLE_TAG_ID in site.ts, running GA4); there are no forms, accounts, ads or embeds;
// fonts are self-hosted; hosting keeps request logs; email to hello@ forwards
// through Cloudflare Email Routing. Update this page when Tag Manager gets a
// new tag. [VERIFY] the GA4 data-retention setting and the cookie lifetime
// (GA4's default is two years) in the Google Analytics admin. [VERIFY] whether
// counsel wants a mailing address for Kinetic Tech LLC added under Contact.

const sections = [
  { id: "who", title: "Who we are" },
  { id: "collect", title: "What we collect" },
  { id: "use", title: "How we use it" },
  { id: "cookies", title: "Cookies" },
  { id: "share", title: "Who we share it with" },
  { id: "keep", title: "How long we keep it" },
  { id: "choices", title: "Your choices" },
  { id: "rights", title: "Your rights" },
  { id: "children", title: "Children" },
  { id: "security", title: "Security and location" },
  { id: "changes", title: "Changes" },
  { id: "contact", title: "Contact" },
] as const;

export default function PrivacyPage() {
  return (
    <>
      <LegalPage
        section="§ 09"
        kicker="Privacy"
        title="Privacy on this website"
        sections={sections}
      >
        <p className={p.lede}>
          This notice covers gokinetic.tech, the website about Kinetic. It
          explains what the site collects when you visit, why, and the choices
          you have. In short: we use Google Analytics to see how the site is
          used, the site has no forms or accounts, and we don&apos;t sell your
          information. Last updated {LEGAL_UPDATED}.
        </p>

        <section id="who">
          <h2 data-num="01">Who we are</h2>
          <p>
            This website is run by {LEGAL_ENTITY} (&ldquo;Kinetic&rdquo;,
            &ldquo;we&rdquo;, &ldquo;us&rdquo;). Kinetic Agents was created by{" "}
            {COMPANY}.
          </p>
          <p>
            This notice covers only this website. The Kinetic app at{" "}
            {STUDIO_URL.replace("https://", "")}, including the free website
            check and sign-in, isn&apos;t covered here.
          </p>
        </section>

        <section id="collect">
          <h2 data-num="02">What we collect</h2>
          <h3>When you visit</h3>
          <ul>
            <li>
              <span>
                <strong>Analytics.</strong> Google Analytics records how you use
                the site: the pages you view, how you arrived (such as a search
                or a link), your browser and device type, your IP address and
                the approximate location it suggests, and a random ID stored in
                a cookie so repeat visits can be counted.
              </span>
            </li>
            <li>
              <span>
                <strong>Server logs.</strong> Like any website, our hosting
                provider records each request: your IP address, browser, the
                page you asked for and the time.
              </span>
            </li>
          </ul>
          <h3>When you email us</h3>
          <p>
            Your email address, your name if you include it, and whatever you
            write.
          </p>
          <h3>What we don&apos;t collect</h3>
          <p>
            The site has no forms, accounts, comments, payments, advertising or
            embedded social media. We don&apos;t ask for sensitive information,
            and we don&apos;t combine analytics with other data to identify you.
          </p>
        </section>

        <section id="use">
          <h2 data-num="03">How we use it</h2>
          <ul>
            <li>
              <span>To understand how the site is used and to improve it.</span>
            </li>
            <li>
              <span>
                To keep the site running and secure, and to stop abuse.
              </span>
            </li>
            <li>
              <span>To answer your email.</span>
            </li>
            <li>
              <span>When the law requires it.</span>
            </li>
          </ul>
          <p>
            We don&apos;t use this information for advertising, and we
            don&apos;t add you to a mailing list.
          </p>
        </section>

        <section id="cookies">
          <h2 data-num="04">Cookies</h2>
          <p>
            The site uses Google Analytics cookies (named <code>_ga</code> and{" "}
            <code>_ga_</code> followed by an ID). They hold a random ID for your
            browser so Google Analytics can tell new visits from repeat ones.
            They last up to two years unless you delete them. We load Google
            Analytics through Google Tag Manager.
          </p>
          <p>
            The site sets no other cookies. Everything on it works the same if
            you block cookies.
          </p>
        </section>

        <section id="share">
          <h2 data-num="05">Who we share it with</h2>
          <ul>
            <li>
              <span>
                <strong>Google</strong>, which provides Google Analytics and
                Google Tag Manager and processes visit data for us.
              </span>
            </li>
            <li>
              <span>
                <strong>Our hosting and email providers</strong>, which run the
                site and deliver your email to us.
              </span>
            </li>
            <li>
              <span>
                <strong>Authorities</strong>, when the law requires it, or to
                protect people, the site or our rights.
              </span>
            </li>
          </ul>
          <p>
            We don&apos;t sell your personal information, and we don&apos;t
            share it for targeted advertising.
          </p>
        </section>

        <section id="keep">
          <h2 data-num="06">How long we keep it</h2>
          <p>
            Google Analytics keeps visit data for the retention period set in
            our account, after which Google deletes it. Server logs are kept for
            the period our hosting provider uses to run and protect the site. We
            keep emails for as long as we need them to help you and to keep a
            record of what we agreed.
          </p>
        </section>

        <section id="choices">
          <h2 data-num="07">Your choices</h2>
          <ul>
            <li>
              <span>
                Block or delete cookies in your browser&apos;s settings.
              </span>
            </li>
            <li>
              <span>
                Install Google&apos;s{" "}
                <a href="https://tools.google.com/dlpage/gaoptout">
                  Google Analytics opt-out browser add-on
                </a>
                .
              </span>
            </li>
            <li>
              <span>
                Use a browser or extension that blocks analytics scripts.
              </span>
            </li>
          </ul>
          <p>
            <strong>Do Not Track.</strong> Browsers can send a &ldquo;Do Not
            Track&rdquo; signal. There&apos;s no common standard for it, so this
            site doesn&apos;t change what it does when it receives one. The
            choices above work instead.
          </p>
        </section>

        <section id="rights">
          <h2 data-num="08">Your rights</h2>
          <p>
            Depending on where you live, you may have the right to ask what
            personal information we hold about you, to get a copy, to have it
            corrected or deleted, and to opt out of its sale or use for targeted
            advertising. Email us and we&apos;ll respond within the time the law
            allows. We may need to confirm it&apos;s you first. We won&apos;t
            treat you differently for asking.
          </p>
          <p>
            <strong>California residents:</strong> the information we collect
            through this site is described under &ldquo;What we collect&rdquo;,
            for the purposes under &ldquo;How we use it&rdquo;. We don&apos;t
            sell it or share it for cross-context behavioral advertising.
          </p>
        </section>

        <section id="children">
          <h2 data-num="09">Children</h2>
          <p>
            This site is for businesses and isn&apos;t aimed at children under
            13. We don&apos;t knowingly collect their information. If you think
            a child has emailed us, tell us and we&apos;ll delete it.
          </p>
        </section>

        <section id="security">
          <h2 data-num="10">Security and location</h2>
          <p>
            The site is served only over an encrypted connection (HTTPS). No
            system is perfectly secure, so we can&apos;t promise that nothing
            will ever go wrong, but we keep access to this data to the people
            who need it.
          </p>
          <p>
            We&apos;re in the United States. Our providers may process data in
            the United States and other countries.
          </p>
        </section>

        <section id="changes">
          <h2 data-num="11">Changes</h2>
          <p>
            When this notice changes, we&apos;ll update it here and change the
            date at the top.
          </p>
        </section>

        <section id="contact">
          <h2 data-num="12">Contact</h2>
          <p>
            Questions or requests about your information: email{" "}
            <a href={mailto("Privacy")}>{CONTACT_EMAIL}</a>.
          </p>
        </section>
      </LegalPage>
      <JsonLd data={pageJsonLd("privacy")} />
    </>
  );
}
