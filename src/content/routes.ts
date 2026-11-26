// Every page on the site with its search title and description, in sitemap order.
// Titles stay at 60 characters or fewer and descriptions at 155 or fewer
// (test/content.test.ts), so search results show them whole.

export interface RouteInfo {
  path: string;
  title: string;
  description: string;
  /** The kicker on the page's share image. */
  kicker: string;
  /** Sitemap priority, 0 to 1. */
  priority: number;
}

export const routes = {
  home: {
    path: "/",
    title: "Kinetic: keep your local business right online",
    description:
      "Your website and social posts, kept right every week from the AI app you already use. You approve every change. Nothing is invented. Created by Anth.Tech.",
    kicker: "Kinetic Labs",
    priority: 1,
  },
  howItWorks: {
    path: "/how-it-works",
    title: "How Kinetic works: check, approve, keep it right",
    description:
      "From your current site to one approved business record, a new site, and weekly changes you approve in one tap.",
    kicker: "How it works",
    priority: 0.9,
  },
  features: {
    path: "/features",
    title: "Kinetic features: what works today and what's next",
    description:
      "Everything Kinetic does for your website, social posts, Google listing and photos, with an honest label on what's live and what's coming soon.",
    kicker: "Features",
    priority: 0.9,
  },
  connect: {
    path: "/connect",
    title: "Use Kinetic in Claude and ChatGPT",
    description:
      "Connect Kinetic to the AI app you already use. Ask for a change in plain words, see exactly what will change, and approve it.",
    kicker: "Claude & ChatGPT",
    priority: 0.8,
  },
  studio: {
    path: "/studio",
    title: "Kinetic Studio: run your digital presence by prompting",
    description:
      "The Kinetic Labs dashboard. Connect your accounts, prompt for site changes, ads, and content, and approve everything before it goes live.",
    kicker: "Kinetic Studio",
    priority: 0.8,
  },
  managed: {
    path: "/managed",
    title: "Kinetic Managed: we run it for you",
    description:
      "Anth.Tech's team runs Kinetic for your business. You approve what goes out, without learning a tool.",
    kicker: "Kinetic Managed",
    priority: 0.8,
  },
  agents: {
    path: "/agents",
    title: "Kinetic Agents: custom agents for your business",
    description:
      "The third part of Kinetic, after Sites and Social: agents that take on more of the day-to-day work. Same rules: they propose, you approve.",
    kicker: "Kinetic Agents",
    priority: 0.8,
  },
  studioCall: {
    path: "/studio-call",
    title: "Studio Strategy Call",
    description:
      "Book a free strategy call with Anth.Tech about Kinetic Studio. We'll walk through the dashboard and how you run your presence by prompting.",
    kicker: "Studio Strategy Call",
    priority: 0.7,
  },
  strategyCall: {
    path: "/strategy-call",
    title: "Free Strategy Call",
    description:
      "Book a free strategy call with Anth.Tech about Kinetic Managed. We'll walk through your business and what we can run for you.",
    kicker: "Managed Strategy Call",
    priority: 0.7,
  },
  agentsCall: {
    path: "/agents-call",
    title: "Free Agents Call",
    description:
      "Book a free call with Anth.Tech about Kinetic Agents. We'll walk through what day-to-day work an agent can propose for your business.",
    kicker: "Agents Strategy Call",
    priority: 0.7,
  },
  accuracy: {
    path: "/accuracy",
    title: "Our accuracy promise: we never make things up",
    description:
      "Your facts come only from what you approve. AI can't add reviews, prices or claims. Here's how Kinetic keeps that promise.",
    kicker: "Accuracy promise",
    priority: 0.7,
  },
  pricing: {
    path: "/pricing",
    title: "Kinetic pricing",
    description:
      "Kinetic's plans are being finalized. Start with a free website check, or talk to us about your business.",
    kicker: "Pricing",
    priority: 0.6,
  },
  faq: {
    path: "/faq",
    title: "Kinetic FAQ",
    description:
      "Straight answers about Kinetic: what it does, who's behind it, how approvals work, and what's coming soon.",
    kicker: "FAQ",
    priority: 0.6,
  },
  contact: {
    path: "/contact",
    title: "Contact Kinetic",
    description:
      "Talk to the Anth.Tech team behind Kinetic about your business, Kinetic Managed or anything else.",
    kicker: "Contact",
    priority: 0.5,
  },
  privacy: {
    path: "/privacy",
    title: "Privacy on this website",
    description:
      "What this website collects (Google Analytics and standard server logs) and how to reach us about your data.",
    kicker: "Privacy",
    priority: 0.2,
  },
  terms: {
    path: "/terms",
    title: "Website terms of use",
    description:
      "The terms for using gokinetic.tech: what the information on this site means, how you may use it, and who owns what.",
    kicker: "Terms",
    priority: 0.2,
  },
} as const satisfies Record<string, RouteInfo>;

export type RouteKey = keyof typeof routes;

export const allRoutes: readonly RouteInfo[] = Object.values(routes);
