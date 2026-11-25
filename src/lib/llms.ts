import { faq } from "../content/faq";
import {
  AREA_LABEL,
  AREA_ORDER,
  STATUS_LABEL,
  comingFeatures,
  featuresIn,
  liveFeatures,
  roadmap,
} from "../content/features";
import { allRoutes } from "../content/routes";
import {
  COMPANY,
  COMPANY_URL,
  CONTACT_EMAIL,
  LEGAL_ENTITY,
  SITE_URL,
  STUDIO_URL,
  studio,
} from "../content/site";

// /llms.txt and /llms-full.txt: the site in plain Markdown for AI answer
// engines (format: llmstxt.org). Both are built from the same content modules
// as the pages, so a status flip in features.ts or an FAQ edit shows up here too.

const absolute = (p: string) => (p === "/" ? SITE_URL : `${SITE_URL}${p}`);

const SUMMARY =
  "Kinetic keeps a local business right online. It updates the business's website and social posts from the AI app the owner already uses (Claude or ChatGPT), shows exactly what will change, and changes nothing until the owner approves. It never invents facts, reviews, prices or claims.";

const ABOUT = [
  `${COMPANY} created Kinetic Agents. ${COMPANY} (${COMPANY_URL}) is an AI-first company that builds AI agents, online presence and online marketing for businesses. Kinetic is a product of ${LEGAL_ENTITY}.`,
  `Kinetic runs two ways: the owner uses it from Claude or ChatGPT, or ${COMPANY}'s team runs it for them (Kinetic Managed). Pricing isn't published yet. Self-serve sign-up isn't open yet; today the team sets up each business by hand.`,
];

const bullet = (title: string, body: string) => `- **${title}**: ${body}`;

export function llmsTxt(): string {
  return [
    "# Kinetic",
    "",
    `> ${SUMMARY}`,
    "",
    ...ABOUT.flatMap((p) => [p, ""]),
    "## Pages",
    "",
    ...allRoutes.map(
      (r) => `- [${r.title}](${absolute(r.path)}): ${r.description}`,
    ),
    "",
    "## Available now",
    "",
    ...liveFeatures().map((f) =>
      bullet(f.title, `${f.body} (${STATUS_LABEL[f.status]})`),
    ),
    "",
    "## Coming soon",
    "",
    ...comingFeatures().map((f) => bullet(f.title, f.body)),
    ...roadmap.map((r) =>
      bullet(r.title, `${r.body} (${STATUS_LABEL[r.status]})`),
    ),
    "",
    "## Get started",
    "",
    `- [Free website check](${studio.audit}): see what customers and search engines see on a current site. No account needed.`,
    `- [Kinetic app](${STUDIO_URL}): sign in, and connect Claude or ChatGPT.`,
    `- Email: ${CONTACT_EMAIL}`,
    "",
    "## Optional",
    "",
    `- [Full text for AI assistants](${SITE_URL}/llms-full.txt): every feature with its status, and the whole FAQ.`,
    `- [Sitemap](${SITE_URL}/sitemap.xml)`,
    "",
  ].join("\n");
}

export function llmsFullTxt(): string {
  return [
    "# Kinetic",
    "",
    `> ${SUMMARY}`,
    "",
    ...ABOUT.flatMap((p) => [p, ""]),
    `Website: ${SITE_URL}. App: ${STUDIO_URL}. Email: ${CONTACT_EMAIL}.`,
    "",
    "## Features",
    "",
    'Each feature carries its status. "Available now" works in production today. "Now, on Managed" works today when our team runs it for you. "Coming soon" is built and waiting on a last step. "Later" is planned.',
    "",
    ...AREA_ORDER.flatMap((area) => [
      `## ${AREA_LABEL[area]}`,
      "",
      ...featuresIn(area).flatMap((f) => [
        `### ${f.title}`,
        "",
        `Status: ${STATUS_LABEL[f.status]}${f.waitingOn ? `. ${f.waitingOn}` : ""}`,
        "",
        f.body,
        "",
      ]),
    ]),
    "## Later",
    "",
    ...roadmap.flatMap((r) => [
      `### ${r.title}`,
      "",
      `Status: ${STATUS_LABEL[r.status]}`,
      "",
      r.body,
      "",
    ]),
    "## Frequently asked questions",
    "",
    ...faq.flatMap((item) => [`### ${item.q}`, "", item.a, ""]),
    "## Pages",
    "",
    ...allRoutes.map(
      (r) => `- [${r.title}](${absolute(r.path)}): ${r.description}`,
    ),
    "",
  ].join("\n");
}
