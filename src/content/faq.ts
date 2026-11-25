// The FAQ. The page renders these word for word and the FAQPage structured data
// is built from the same list, so the two can't drift apart.

export interface FaqItem {
  q: string;
  a: string;
}

export const faq: readonly FaqItem[] = [
  {
    q: "What is Kinetic?",
    a: "Kinetic keeps a local business right online: your website, your social posts and, soon, your Google listing and reviews. You run it by talking to the AI app you already use, or our team runs it for you.",
  },
  {
    q: "Who's behind Kinetic?",
    a: "Anth.Tech created Kinetic Agents. Anth.Tech is an AI-first company that builds AI agents, online presence and online marketing for businesses, and it builds, supports and runs Kinetic.",
  },
  {
    q: "Do I need Claude or ChatGPT?",
    a: "No. They're the easiest way to use Kinetic, and on Kinetic Managed our team does the work for you, so you only approve what goes out.",
  },
  {
    q: "Will Kinetic make things up about my business?",
    a: "No. Your facts come only from the business record you approve, and AI isn't allowed to add new ones: no invented reviews, prices, statistics or credentials. See our accuracy promise.",
  },
  {
    q: "Does Kinetic change anything without asking me?",
    a: "No. Every change is shown to you first and needs your approval. You can undo it afterwards.",
  },
  {
    q: "Can I keep my current domain?",
    a: "Yes. You point your domain at your new site, and we walk you through it.",
  },
  {
    q: "Does Kinetic update my Google listing?",
    a: "Coming soon. Kinetic is built to update your Google Business Profile from the same change you approve for your site. We're waiting on Google's approval to switch it on.",
  },
  {
    q: "Can Kinetic reply to my reviews?",
    a: "Coming soon, with the same Google approval. Kinetic will draft a reply to each Google review in your voice, and post it only after you approve it.",
  },
  {
    q: "Can I sign up on my own?",
    a: "Not yet. For now our team sets up each business by hand. Start with the free website check, or email us and we'll set yours up.",
  },
  {
    q: "What does it cost?",
    a: "Pricing is coming soon. Start with the free website check, or talk to us about your business.",
  },
  {
    q: "Is this an AI website builder?",
    a: "It builds your site, but that's the first day. Most of what Kinetic does happens after launch. If a website is all you need, an AI site builder may suit you better, and that's fine.",
  },
  {
    q: "Who is Kinetic not for?",
    a: "People building an app or a software product, people who want to design pages by hand, and large online stores. An app builder or a site builder will suit them better.",
  },
];
