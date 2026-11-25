import type { MetadataRoute } from "next";
import { SITE_URL } from "@/content/site";

// Every crawler may read the whole site. The AI answer engines' crawlers are
// also named one by one, so the choice to be found and quoted by them is
// written down here rather than left to the "*" rule. This includes the
// crawlers that gather training data (GPTBot, Google-Extended,
// Applebot-Extended): for a marketing site, being known to the models helps.
// User-agent names as each vendor documents them (OpenAI: GPTBot, OAI-SearchBot,
// ChatGPT-User; Anthropic: ClaudeBot, Claude-SearchBot, Claude-User; Perplexity;
// Google; Apple). [VERIFY] the names against each vendor's crawler docs when
// adding one.
const AI_CRAWLERS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: AI_CRAWLERS, allow: "/" },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
