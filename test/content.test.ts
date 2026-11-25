import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import sitemap from "../src/app/sitemap";
import { faq } from "../src/content/faq";
import {
  comingFeatures,
  features,
  liveFeatures,
  roadmap,
} from "../src/content/features";
import { allRoutes } from "../src/content/routes";
import {
  COMPANY,
  GOOGLE_TAG_ID,
  SITE_URL,
  footerNav,
  primaryNav,
  studio,
} from "../src/content/site";
import { faqJsonLd, organizationJsonLd } from "../src/lib/structured-data";

const APP = path.resolve(import.meta.dirname, "..");
const SRC = path.join(APP, "src");

function sourceFiles(dir: string): string[] {
  return readdirSync(dir).flatMap((name) => {
    const full = path.join(dir, name);
    if (statSync(full).isDirectory()) return sourceFiles(full);
    return /\.(ts|tsx)$/.test(name) ? [full] : [];
  });
}

/** A file's text without comments, so notes like [VERIFY] don't count as copy. */
function withoutComments(text: string): string {
  return text
    .replace(/\/\*[\s\S]*?\*\//g, "")
    .replace(/\{\/\*[\s\S]*?\*\/\}/g, "")
    .replace(/(^|[^:"'`])\/\/.*$/gm, "$1");
}

const pageFileFor = (routePath: string) =>
  path.join(SRC, "app", routePath === "/" ? "" : routePath, "page.tsx");

describe("routes", () => {
  it("has a page and a share image for every route", () => {
    for (const route of allRoutes) {
      expect(existsSync(pageFileFor(route.path)), route.path).toBe(true);
      expect(
        existsSync(
          path.join(
            path.dirname(pageFileFor(route.path)),
            "opengraph-image.tsx",
          ),
        ),
        route.path,
      ).toBe(true);
    }
  });

  it("keeps titles and descriptions short enough to show whole in search", () => {
    for (const route of allRoutes) {
      expect(route.title.length, route.title).toBeLessThanOrEqual(60);
      expect(route.description.length, route.path).toBeLessThanOrEqual(155);
    }
  });

  it("uses each path, title and description once", () => {
    for (const key of ["path", "title", "description"] as const) {
      const values = allRoutes.map((r) => r[key]);
      expect(new Set(values).size, key).toBe(values.length);
    }
  });

  it("lists every route in the sitemap, on the production address", () => {
    const urls = sitemap().map((e) => e.url);
    expect(urls).toHaveLength(allRoutes.length);
    for (const route of allRoutes) {
      expect(urls).toContain(
        route.path === "/" ? SITE_URL : `${SITE_URL}${route.path}`,
      );
    }
  });

  it("links only to pages that exist, the Kinetic app, email or a listed outside page", () => {
    const known = new Set(allRoutes.map((r) => r.path));
    const studioPages = new Set<string>(Object.values(studio));
    // Outside pages a page may send people to, each on purpose.
    const outside = new Set<string>([
      "https://tools.google.com/dlpage/gaoptout", // privacy: the GA opt-out add-on
    ]);
    const links = [...primaryNav, ...footerNav.flatMap((c) => c.links)].map(
      (l) => l.href,
    );
    const inPages = sourceFiles(SRC).flatMap((file) =>
      [
        ...withoutComments(readFileSync(file, "utf8")).matchAll(
          /href="([^"]+)"/g,
        ),
      ].map((m) => m[1] ?? ""),
    );
    for (const href of [...links, ...inPages]) {
      if (href.startsWith("#") || href.startsWith("mailto:")) continue;
      if (href.startsWith("/")) {
        expect(known.has(href.split("#")[0] ?? ""), href).toBe(true);
      } else {
        expect(studioPages.has(href) || outside.has(href), href).toBe(true);
      }
    }
  });
});

describe("copy rules (marketing/gokinetic/01-positioning.md §6–7)", () => {
  const copy = sourceFiles(SRC).map((file) => ({
    file: path.relative(APP, file),
    text: withoutComments(readFileSync(file, "utf8")),
  }));

  // The share image's inline styles use percentages for layout, not claims.
  const layoutOnly = new Set(["src/lib/og.tsx"]);

  const banned: readonly [RegExp, string][] = [
    [/trusted by/i, "no social proof we don't have"],
    [/testimonial/i, "no testimonials"],
    [/★/, "no star ratings"],
    [/aggregateRating/, "no rating markup"],
    [/\$\s?\d/, "no prices until they're signed off"],
    [/\b\d+(\.\d+)?\s?%/, "no made-up percentages"],
    [/\b\d+x\b/i, "no 10x claims"],
    [/revolutionary|game-?changing|magic(al)?\b/i, "voice: no hype words"],
    [/AI employees?/i, "Shipper's term, and implies autonomy"],
    [
      /\b(Postiz|Higgsfield|Vercel|OpenAI|Anthropic|Clerk|Inngest)\b/,
      "don't name vendors under the hood",
    ],
    [/\[VERIFY\]/, "unconfirmed notes stay in comments, never on the page"],
    [/Anth\s?Tech|AnthTech/, "Anth.Tech always has its dot"],
  ];

  for (const [pattern, why] of banned) {
    it(`never says ${pattern.source} (${why})`, () => {
      for (const { file, text } of copy) {
        if (pattern.source.includes("%") && layoutOnly.has(file)) continue;
        expect(pattern.test(text), `${file}: ${why}`).toBe(false);
      }
    });
  }
});

describe("feature statuses", () => {
  it("never lists a coming feature as live", () => {
    const live = new Set(liveFeatures().map((f) => f.id));
    for (const f of comingFeatures()) expect(live.has(f.id), f.id).toBe(false);
    expect(liveFeatures().length + comingFeatures().length).toBe(
      features.length,
    );
  });

  it("keeps the Google features coming soon until Google approves access", () => {
    for (const id of ["google-sync", "review-replies"]) {
      expect(features.find((f) => f.id === id)?.status, id).toBe("soon");
    }
  });

  it("marks Kinetic Agents as later: it has no code yet", () => {
    expect(roadmap.find((r) => r.title === "Kinetic Agents")?.status).toBe(
      "later",
    );
  });

  it("gives every feature a unique id", () => {
    expect(new Set(features.map((f) => f.id)).size).toBe(features.length);
  });
});

describe("Anth.Tech created Kinetic Agents", () => {
  it("says so in the top banner, the footer, the home page and the FAQ", () => {
    const read = (rel: string) => readFileSync(path.join(SRC, rel), "utf8");
    expect(read("components/Footer.tsx")).toMatch(
      /Kinetic Agents is created by/,
    );
    expect(read("components/CreatorBanner.tsx")).toMatch(
      /Kinetic Agents is created by <strong>\{COMPANY\}<\/strong>/,
    );
    expect(read("app/layout.tsx")).toMatch(/<CreatorBanner \/>/);
    expect(read("app/page.tsx")).toMatch(/Kinetic Agents is created by/);
    expect(
      faq.some((item) => item.a.includes(`${COMPANY} created Kinetic Agents`)),
    ).toBe(true);
  });

  it("says so in the structured data", () => {
    const graph = organizationJsonLd()["@graph"];
    const kinetic = graph.find(
      (n) => n.name === "Kinetic Agents" && n["@type"] === "Organization",
    );
    const maker = graph.find((n) => n.name === COMPANY);
    expect(maker).toBeDefined();
    expect(kinetic).toMatchObject({ founder: { "@id": maker?.["@id"] } });
  });
});

describe("structured data", () => {
  it("builds the FAQ markup from the page's own questions, word for word", () => {
    const data = faqJsonLd();
    expect(data.mainEntity.map((q) => [q.name, q.acceptedAnswer.text])).toEqual(
      faq.map((item) => [item.q, item.a]),
    );
  });

  it("claims no ratings or reviews", () => {
    const json = JSON.stringify([organizationJsonLd(), faqJsonLd()]);
    expect(json).not.toMatch(/aggregateRating|"review"/i);
  });
});

describe("Google tag (GTM-M3TH3Q9C, Anthony 2026-11-25)", () => {
  const read = (rel: string) => readFileSync(path.join(SRC, rel), "utf8");

  it("loads once, from the root layout, so every page gets it", () => {
    const layout = read("app/layout.tsx");
    expect(layout.match(/<GoogleTag \/>/g)).toHaveLength(1);
    const pagesWithTag = sourceFiles(SRC).filter(
      (file) =>
        !file.endsWith("layout.tsx") &&
        /<GoogleTag \/>/.test(readFileSync(file, "utf8")),
    );
    expect(pagesWithTag).toEqual([]);
  });

  it("keeps the container ID in site.ts only", () => {
    expect(GOOGLE_TAG_ID).toMatch(/^GTM-[A-Z0-9]+$/);
    const mentions = sourceFiles(SRC).filter((file) =>
      readFileSync(file, "utf8").includes(GOOGLE_TAG_ID),
    );
    expect(mentions.map((f) => path.relative(SRC, f))).toEqual([
      "content/site.ts",
    ]);
    expect(read("components/GoogleTag.tsx")).toMatch(/GOOGLE_TAG_ID/);
  });

  it("uses Google Tag Manager's init, which starts the container with the gtm.js event", () => {
    // A GTM- container only runs its tags (the GA4 one included) after the
    // data layer gets {'gtm.start', event: 'gtm.js'}, as in Google's GTM
    // snippet. The gtag.js init (gtag('js', ...)) doesn't send that event.
    const tag = read("components/GoogleTag.tsx");
    expect(tag).toMatch(/['"]gtm\.start['"]\s*:\s*new Date\(\)\.getTime\(\)/);
    expect(tag).toMatch(/event\s*:\s*['"]gtm\.js['"]/);
    expect(tag).not.toMatch(/gtag\(\s*['"]js['"]/);
    expect(tag).toMatch(
      /googletagmanager\.com\/gtm\.js\?id=\$\{GOOGLE_TAG_ID\}/,
    );
  });

  it("is disclosed on the privacy page", () => {
    const privacy = withoutComments(read("app/privacy/page.tsx"));
    expect(privacy).not.toMatch(/no cookies|no analytics/i);
    expect(privacy).toMatch(/Google Analytics/);
    expect(privacy).toMatch(/Google Tag Manager/);
    expect(privacy).toMatch(/cookies/i);
  });
});
