import { faq } from "../content/faq";
import { liveFeatures } from "../content/features";
import { routes, type RouteKey } from "../content/routes";
import {
  COMPANY,
  COMPANY_URL,
  CONTACT_EMAIL,
  LEGAL_ENTITY,
  SITE_URL,
} from "../content/site";

// schema.org data for search engines and AI answer engines. No aggregateRating,
// no review, no offers or prices, nothing we can't back up (01-positioning.md,
// SEO basics). Without offers or a rating, Google won't show a software rich
// result; that's the trade for not inventing either.

const absolute = (p: string) => (p === "/" ? SITE_URL : `${SITE_URL}${p}`);

const ANTH_TECH_URL = COMPANY_URL;

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#org`,
        name: "Kinetic Agents",
        alternateName: "Kinetic",
        legalName: LEGAL_ENTITY,
        url: SITE_URL,
        logo: `${SITE_URL}/icon.svg`,
        email: CONTACT_EMAIL,
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer support",
          email: CONTACT_EMAIL,
          availableLanguage: "en",
        },
        description:
          "Kinetic keeps a local business right online, from the AI app the owner already uses. Created by Anth.Tech.",
        founder: { "@id": `${ANTH_TECH_URL}/#org` },
        parentOrganization: { "@id": `${ANTH_TECH_URL}/#org` },
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${SITE_URL}/#app`,
        name: "Kinetic",
        url: SITE_URL,
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        description:
          "Kinetic keeps a local business's website and social posts right, from Claude or ChatGPT. The owner approves every change, and nothing is invented.",
        // Only what works in production today (features.ts), never what's coming.
        featureList: liveFeatures().map((f) => f.title),
        publisher: { "@id": `${SITE_URL}/#org` },
        creator: { "@id": `${ANTH_TECH_URL}/#org` },
      },
      {
        "@type": "Organization",
        "@id": `${ANTH_TECH_URL}/#org`,
        name: COMPANY,
        url: ANTH_TECH_URL,
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "Kinetic Agents",
        inLanguage: "en-US",
        publisher: { "@id": `${SITE_URL}/#org` },
      },
    ],
  };
}

/** A page's own node and its breadcrumb (Home › Page), for every inner page. */
export function pageJsonLd(key: Exclude<RouteKey, "home">) {
  const route = routes[key];
  const url = absolute(route.path);
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#page`,
        url,
        name: route.title,
        description: route.description,
        inLanguage: "en-US",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#app` },
        breadcrumb: { "@id": `${url}#breadcrumb` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: route.kicker, item: url },
        ],
      },
    ],
  };
}

export function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

/** Serializes for a <script type="application/ld+json">, safe inside HTML. */
export function jsonLdScript(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
