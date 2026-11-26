// Addresses and names the whole site uses. Change them here, not in pages.

/** The marketing site's production address: canonical URLs, sitemap, share tags. */
export const SITE_URL = "https://gokinetic.tech";

/** The Kinetic app (sign-in, the free audit, the connector help, plan sign-up). */
export const STUDIO_URL = "https://studio.gokinetic.tech";

export const SITE_NAME = "Kinetic Labs";

/** The company that created Kinetic Labs, always with the dot. */
export const COMPANY = "Anth.Tech";

/** Anth.Tech's own website. */
export const COMPANY_URL = "https://anth.tech";

/** The legal entity in the footer (Anthony, 2026-11-25). */
export const LEGAL_ENTITY = "Kinetic Tech LLC";

/** The date on the privacy and terms pages. Change it whenever either changes. */
export const LEGAL_UPDATED = "November 25, 2026";

/** The public contact inbox (forwards via Cloudflare Email Routing). */
export const CONTACT_EMAIL = "hello@gokinetic.tech";

/**
 * The Google tag container (Google Tag Manager) that runs Google Analytics 4 on
 * every page (Anthony, 2026-11-25). It's a public ID, not a secret. The privacy
 * page discloses it; keep the two in step.
 */
export const GOOGLE_TAG_ID = "GTM-M3TH3Q9C";

/**
 * Free Strategy Call booking page. Drop a Calendly or Cal.com embed URL here
 * when ready; the page uses it as an iframe.
 */
export const STRATEGY_CALL_EMBED_URL = "";

/** Pages in the Kinetic app that this site links to. */
export const studio = {
  audit: `${STUDIO_URL}/audit`,
  connector: `${STUDIO_URL}/connector`,
  signIn: `${STUDIO_URL}/sign-in`,
} as const;

export const mailto = (subject?: string): string =>
  subject
    ? `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}`
    : `mailto:${CONTACT_EMAIL}`;

export interface NavLink {
  href: string;
  label: string;
}

export const primaryNav: readonly NavLink[] = [
  { href: "/studio", label: "Kinetic Studio" },
  { href: "/managed", label: "Kinetic Managed" },
  { href: "/agents", label: "Kinetic Agents" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/features", label: "Features" },
  { href: "/connect", label: "Claude & ChatGPT" },
  { href: "/pricing", label: "Pricing" },
];

export const footerNav: readonly {
  title: string;
  links: readonly NavLink[];
}[] = [
  {
    title: "Product",
    links: [
      { href: "/how-it-works", label: "How it works" },
      { href: "/features", label: "Features" },
      { href: "/features#coming-soon", label: "Coming soon" },
      { href: "/pricing", label: "Pricing" },
    ],
  },
  {
    title: "Use it",
    links: [
      { href: "/studio", label: "Kinetic Studio" },
      { href: "/managed", label: "Kinetic Managed" },
      { href: "/agents", label: "Kinetic Agents" },
      { href: "/connect", label: "Claude & ChatGPT" },
      { href: studio.audit, label: "Free website check" },
      { href: studio.signIn, label: "Sign in" },
    ],
  },
  {
    title: "Trust",
    links: [
      { href: "/accuracy", label: "Accuracy promise" },
      { href: "/faq", label: "FAQ" },
      { href: "/privacy", label: "Privacy" },
      { href: "/terms", label: "Terms" },
      { href: "/contact", label: "Contact" },
    ],
  },
];
