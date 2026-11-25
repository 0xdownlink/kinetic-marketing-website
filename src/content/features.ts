// Everything Kinetic does, with an honest status for each. The site may only
// say a feature works today when it's switched on in production; everything
// else says "coming soon" (marketing/gokinetic/01-positioning.md §6). Flip a
// status here when its gate opens, and every page follows.

export type FeatureStatus =
  /** In the product and switched on in production today. */
  | "now"
  /** Live today when our team runs it for you (Kinetic Managed). */
  | "managed"
  /** Built, waiting on a switch: an approval, a key or a setup step. */
  | "soon"
  /** Planned, not built yet. */
  | "later";

export const STATUS_LABEL: Record<FeatureStatus, string> = {
  now: "Available now",
  managed: "Now, on Managed",
  soon: "Coming soon",
  later: "Later",
};

export type FeatureArea = "sites" | "social" | "google" | "media" | "control";

export const AREA_LABEL: Record<FeatureArea, string> = {
  sites: "Your website",
  social: "Your social posts",
  google: "Google and reviews",
  media: "Photos and video",
  control: "You stay in control",
};

/** The headline over each area on the features page. */
export const AREA_HEADLINE: Record<FeatureArea, string> = {
  sites: "Drafted from your facts. Changed in a sentence.",
  social: "A month of posts, planned and approved.",
  google: "Your listing and reviews, in step with your site.",
  media: "Your photos, your footage, your brand.",
  control: "Nothing changes without your OK.",
};

export const AREA_ORDER: readonly FeatureArea[] = [
  "sites",
  "social",
  "google",
  "media",
  "control",
];

export interface Feature {
  id: string;
  area: FeatureArea;
  title: string;
  body: string;
  status: FeatureStatus;
  /**
   * Why it isn't live yet, in the owner's words. Internal gate notes stay in
   * code comments, not on the page.
   */
  waitingOn?: string;
}

export const features: readonly Feature[] = [
  // ---- Your website -------------------------------------------------------
  {
    id: "site-from-record",
    area: "sites",
    title: "A site drafted from your own facts",
    body: "Kinetic builds your site from one business record you approve: your name, phone, hours and services, copied exactly. Our team reviews the draft with you before anything goes live.",
    status: "now",
  },
  {
    id: "site-changes",
    area: "sites",
    title: "Changes in plain sentences",
    body: "Say what changed, like “closed Thanksgiving” or “add gutter cleaning”. You see exactly what will change, approve it, and it’s live. Every version is kept, so you can roll back.",
    status: "now",
  },
  {
    id: "fact-check",
    area: "sites",
    title: "A fact-check before every publish",
    body: "Each page is checked against your record before it goes out. Anything that isn’t backed by your facts is flagged for you instead of published.",
    status: "now",
  },
  {
    id: "locations",
    area: "sites",
    title: "Pages for each location",
    body: "More than one location? Each gets its own page with its own address, hours and phone, from the same record.",
    status: "now",
  },
  {
    id: "leads",
    area: "sites",
    title: "Quote requests in one list",
    body: "Requests from your site’s quote form land in one list, and Kinetic emails you when one is waiting.",
    // [VERIFY] FORM_RATE_LIMIT_SECRET is set on the kinetic-sites Vercel project.
    status: "now",
  },
  {
    id: "own-code",
    area: "sites",
    title: "A site that’s yours to keep",
    body: "Your site becomes its own code repository with a license that lets you take it with you if you ever leave. No lock-in.",
    status: "soon",
    // Gate: client-sites GitHub org exists and counsel has reviewed the license.
    waitingOn: "We’re finishing the legal wording.",
  },

  // ---- Social -------------------------------------------------------------
  {
    id: "social-plan",
    area: "social",
    title: "A month of posts, planned for you",
    body: "Kinetic plans a month of posts from your services and the season, writes the captions and makes the images in your brand colors.",
    status: "now",
  },
  {
    id: "social-approval",
    area: "social",
    title: "An approval page for the people who sign off",
    body: "Send the month to whoever approves your posts. They read, comment and approve on one simple page, with no account to set up.",
    status: "now",
  },
  {
    id: "social-publishing",
    area: "social",
    title: "Scheduled to your accounts",
    body: "Approved posts go out on schedule to your connected social accounts, and you can see what went out and how it did.",
    // Only the Postiz-owning tenant may connect accounts today (SELF_SERVE_SOCIAL off).
    status: "managed",
    waitingOn:
      "Connecting your own accounts yourself is coming soon. Today our team connects them for you.",
  },

  // ---- Google -------------------------------------------------------------
  {
    id: "google-sync",
    area: "google",
    title: "Your Google listing, from the same change",
    body: "One approved change updates your website and your Google Business Profile together, so your hours match everywhere.",
    status: "soon",
    // Gate: Google Business Profile API access approval.
    waitingOn: "We’re waiting on Google’s approval.",
  },
  {
    id: "review-replies",
    area: "google",
    title: "Review replies in your voice",
    body: "Kinetic drafts a reply to each new Google review in your voice. You approve or edit it before it posts.",
    status: "soon",
    waitingOn: "We’re waiting on Google’s approval.",
  },
  {
    id: "website-check",
    area: "google",
    title: "A free check of your current site",
    body: "Paste your website and see what customers and Google see: your phone, hours, address, broken links and whether your pages can be listed. No account needed.",
    status: "now",
  },

  // ---- Media --------------------------------------------------------------
  {
    id: "drive-photos",
    area: "media",
    title: "Your photos, from Google Drive",
    body: "Point Kinetic at a Drive folder and use your own photos on your site and in your posts.",
    // [VERIFY] the Google Drive picker is switched on in production (go-live step 8).
    status: "soon",
    waitingOn: "Rolling out with our Google setup.",
  },
  {
    id: "ai-images",
    area: "media",
    title: "Images made for your business",
    body: "When you don’t have the right photo, Kinetic can make an image for a post or a page, checked before it’s used.",
    // [VERIFY] AI images are switched on in production (notes: kinetic-ai-images).
    status: "soon",
  },
  {
    id: "short-video",
    area: "media",
    title: "Short videos from your own footage",
    body: "Drop clips in a folder and Kinetic turns them into short, captioned videos for your social accounts.",
    // Gate: video provider key and price row in production, render service live.
    status: "soon",
  },

  // ---- Control ------------------------------------------------------------
  {
    id: "connector",
    area: "control",
    title: "Run it from Claude or ChatGPT",
    body: "Connect Kinetic to the AI app you already use and run your business online in plain sentences. No new dashboard to learn.",
    // Anthony confirmed 2026-11-25 that the site may say this works today.
    status: "now",
  },
  {
    id: "approve-undo",
    area: "control",
    title: "Propose, approve, undo",
    body: "Kinetic never changes anything on its own. Every change comes back as a card showing what will change and where. Approve it, untick what you don’t want, and undo it later if you change your mind.",
    status: "now",
  },
  {
    id: "report-card",
    area: "control",
    title: "A monthly report card",
    body: "A short summary of what changed, what’s waiting on you and what’s wrong online.",
    // Sent by email only when REPORT_CARD_EMAILS is on; the tool works in the connector.
    status: "now",
  },
  {
    id: "team",
    area: "control",
    title: "Your team, with the right access",
    body: "Add the people who approve your posts and your site, and keep everyone else out.",
    status: "now",
  },
  {
    id: "self-serve",
    area: "control",
    title: "Sign up on your own",
    body: "Create your account, name your business and connect your AI app without waiting for us.",
    // Gate: SELF_SERVE_SIGNUP on, after the MM2 migration and the readiness review.
    status: "soon",
    waitingOn: "Today our team sets up each business by hand.",
  },
];

/** The parts of Kinetic that aren't built yet, said plainly. */
export const roadmap: readonly {
  title: string;
  body: string;
  status: FeatureStatus;
}[] = [
  {
    title: "Kinetic Agents",
    body: "The third part of Kinetic, after Sites and Social: agents that take on more of the day-to-day work behind your business. Same rules as everything else: they propose, you approve.",
    // [VERIFY] Anthony: which agents to name. Agents has no code or plan of record yet.
    status: "later",
  },
];

export const featuresIn = (area: FeatureArea): readonly Feature[] =>
  features.filter((f) => f.area === area);

export const liveFeatures = (): readonly Feature[] =>
  features.filter((f) => f.status === "now" || f.status === "managed");

export const comingFeatures = (): readonly Feature[] =>
  features.filter((f) => f.status === "soon" || f.status === "later");
