import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import robots from "../src/app/robots";
import { faq } from "../src/content/faq";
import {
  STATUS_LABEL,
  comingFeatures,
  features,
  liveFeatures,
} from "../src/content/features";
import { allRoutes, routes, type RouteKey } from "../src/content/routes";
import {
  COMPANY,
  LEGAL_ENTITY,
  SITE_URL,
  footerNav,
} from "../src/content/site";
import { llmsFullTxt, llmsTxt } from "../src/lib/llms";
import { organizationJsonLd, pageJsonLd } from "../src/lib/structured-data";

const SRC = path.resolve(import.meta.dirname, "..", "src");
const abs = (p: string) => (p === "/" ? SITE_URL : `${SITE_URL}${p}`);

describe("llms.txt (llmstxt.org)", () => {
  const txt = llmsTxt();

  it("opens with the name and a one-line summary", () => {
    const lines = txt.split("\n");
    expect(lines[0]).toBe("# Kinetic");
    expect(lines.find((l) => l.startsWith("> "))).toBeDefined();
  });

  it("links every page with its description", () => {
    for (const route of allRoutes) {
      expect(txt).toContain(`](${abs(route.path)}): ${route.description}`);
    }
  });

  it("names who made Kinetic and points to the full text", () => {
    expect(txt).toContain(`${COMPANY} created Kinetic Agents`);
    expect(txt).toContain(LEGAL_ENTITY);
    expect(txt).toContain(`${SITE_URL}/llms-full.txt`);
  });

  it("never lists a coming feature as available", () => {
    const available = txt.split("## Available now")[1]?.split("\n## ")[0];
    expect(available).toBeDefined();
    for (const f of comingFeatures()) expect(available).not.toContain(f.title);
    for (const f of liveFeatures()) expect(available).toContain(f.title);
  });

  it("is served as a static route", () => {
    for (const file of ["llms.txt", "llms-full.txt"]) {
      const route = readFileSync(
        path.join(SRC, "app", file, "route.ts"),
        "utf8",
      );
      expect(route).toMatch(/export const dynamic = "force-static"/);
    }
  });
});

describe("llms-full.txt", () => {
  const txt = llmsFullTxt();

  it("carries every feature with its honest status", () => {
    for (const f of features) {
      expect(txt).toContain(`### ${f.title}`);
      expect(txt).toContain(`Status: ${STATUS_LABEL[f.status]}`);
    }
  });

  it("carries the FAQ word for word", () => {
    for (const item of faq) {
      expect(txt).toContain(`### ${item.q}\n\n${item.a}`);
    }
  });
});

describe("robots.txt", () => {
  const r = robots();
  const rules = Array.isArray(r.rules) ? r.rules : [r.rules];

  it("lets every crawler read the whole site and points to the sitemap", () => {
    expect(rules.some((x) => x.userAgent === "*" && x.allow === "/")).toBe(
      true,
    );
    expect(rules.every((x) => !x.disallow)).toBe(true);
    expect(r.sitemap).toBe(`${SITE_URL}/sitemap.xml`);
  });

  it("names the AI answer engines' crawlers explicitly", () => {
    const agents = rules.flatMap((x) =>
      Array.isArray(x.userAgent) ? x.userAgent : [x.userAgent],
    );
    for (const bot of [
      "GPTBot",
      "OAI-SearchBot",
      "ChatGPT-User",
      "ClaudeBot",
      "Claude-SearchBot",
      "Claude-User",
      "PerplexityBot",
      "Google-Extended",
      "Applebot-Extended",
    ]) {
      expect(agents, bot).toContain(bot);
    }
  });
});

describe("structured data", () => {
  const graph = organizationJsonLd()["@graph"];

  it("names Kinetic Tech LLC as the legal entity", () => {
    const kinetic = graph.find((n) => n["@id"] === `${SITE_URL}/#org`);
    expect(kinetic).toMatchObject({ legalName: LEGAL_ENTITY });
  });

  it("describes the software with only live features, and no price or rating", () => {
    const app = graph.find((n) => n["@type"] === "SoftwareApplication");
    expect(app).toBeDefined();
    expect(app).toMatchObject({
      publisher: { "@id": `${SITE_URL}/#org` },
      creator: { "@id": expect.stringContaining("anth.tech") as string },
    });
    const list = (app as { featureList: string[] }).featureList;
    expect(list).toEqual(liveFeatures().map((f) => f.title));
    expect(JSON.stringify(app)).not.toMatch(/offers|price|aggregateRating/i);
  });

  it("gives every inner page a WebPage with a breadcrumb back home", () => {
    const keys = Object.keys(routes).filter((k) => k !== "home") as Exclude<
      RouteKey,
      "home"
    >[];
    for (const key of keys) {
      const route = routes[key];
      const data = pageJsonLd(key);
      const page = data["@graph"].find((n) => n["@type"] === "WebPage");
      const crumbs = data["@graph"].find(
        (n) => n["@type"] === "BreadcrumbList",
      );
      expect(page).toMatchObject({
        url: abs(route.path),
        name: route.title,
        description: route.description,
        isPartOf: { "@id": `${SITE_URL}/#website` },
      });
      expect(crumbs).toMatchObject({
        itemListElement: [
          { position: 1, item: SITE_URL },
          { position: 2, item: abs(route.path) },
        ],
      });

      const file = path.join(SRC, "app", route.path, "page.tsx");
      expect(existsSync(file), file).toBe(true);
      expect(readFileSync(file, "utf8"), key).toContain(`pageJsonLd("${key}")`);
    }
  });
});

describe("page descriptions stay true", () => {
  it("says the privacy page covers analytics", () => {
    expect(routes.privacy.description).toMatch(/analytics/i);
  });
});

describe("legal pages", () => {
  const read = (rel: string) =>
    readFileSync(path.join(SRC, "app", rel, "page.tsx"), "utf8");

  it("has a website terms page in the routes and the footer", () => {
    expect(routes.terms.path).toBe("/terms");
    const trust = footerNav.find((c) => c.title === "Trust");
    const hrefs = trust?.links.map((l) => l.href) ?? [];
    expect(hrefs).toContain("/privacy");
    expect(hrefs).toContain("/terms");
  });

  for (const page of ["privacy", "terms"]) {
    it(`dates the ${page} page and names the company behind it`, () => {
      const text =
        read(page) +
        readFileSync(path.join(SRC, "components", "LegalPage.tsx"), "utf8");
      expect(read(page)).toMatch(/<LegalPage/);
      expect(text).toMatch(/Last updated/);
      expect(text).toMatch(/LEGAL_UPDATED/);
      expect(text).toMatch(/LEGAL_ENTITY/);
      expect(text).toMatch(/aria-label="On this page"/);
    });
  }

  it("covers what US privacy law asks a site to say", () => {
    const text = read("privacy");
    for (const topic of [
      /Do Not Track/,
      /California/,
      /children/i,
      /don&apos;t sell/,
      /Google Analytics/,
    ]) {
      expect(text, String(topic)).toMatch(topic);
    }
  });
});
