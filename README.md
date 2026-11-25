# kinetic-marketing-website

The public marketing site for Kinetic Agents at **gokinetic.tech**, created by Anth.Tech. It's a standalone Next.js app with its own dependencies and lockfile: no database, no environment variables, and every page is static. The one third-party script is the Google tag (Google Tag Manager running Google Analytics 4), disclosed on the privacy page.

It moved here from `apps/marketing` in `AnthTech/kinetic-studio` on 2026-11-25 so the site can be worked on without access to the product's code. The app itself didn't change in the move.

The layout system comes from the Kinetic Agents site (`anthbacop/kineticagents-marketing-website`): Fraunces display type, IBM Plex Sans and Mono, hairline rules, `§` section tags and mono "specimen" labels. The colors are the Kinetic app's own (`ka-colors.css` in the studio app): blue-tinted near-black surfaces, indigo for actions and teal for what's live, so the site and the product read as one family. A thin banner above the nav credits Anth.Tech as the creator of Kinetic Agents. Tokens are documented at the top of `src/app/globals.css`.

## Working on it

Node 24 (`.nvmrc`) and pnpm (the version in `packageManager`; `corepack enable` sets it up).

```sh
pnpm install          # first time, and after pulling dependency changes
pnpm dev              # http://localhost:3002
pnpm test             # content and SEO rules (vitest)
pnpm typecheck
pnpm lint
pnpm build
pnpm check            # everything CI runs: format, typecheck, lint, test, build
pnpm format           # Prettier
```

Work on a branch and open a pull request into `main`. CI (`.github/workflows/ci.yml`) runs `pnpm check` on every pull request, and Vercel posts a preview link.

## Where things live

| What                                                 | Where                                                 |
| ---------------------------------------------------- | ----------------------------------------------------- |
| Pages                                                | `src/app/<route>/page.tsx`                            |
| Titles, descriptions, sitemap order                  | `src/content/routes.ts` (one entry per page)          |
| Every feature and its status                         | `src/content/features.ts`                             |
| FAQ (page and FAQPage markup)                        | `src/content/faq.ts`                                  |
| Addresses: site, studio, email, legal name           | `src/content/site.ts`                                 |
| Share images (1200×630, built at build time)         | `src/lib/og.tsx`, one `opengraph-image.tsx` per route |
| Organization, SoftwareApplication, WebSite, FAQPage  | `src/lib/structured-data.ts`                          |
| Per-page WebPage + breadcrumb structured data        | `pageJsonLd` in `src/lib/structured-data.ts`          |
| `/llms.txt` and `/llms-full.txt` (AI answer engines) | `src/lib/llms.ts`, built from the content modules     |
| `robots.txt` (all crawlers, AI crawlers named)       | `src/app/robots.ts`                                   |
| Sitemap                                              | `src/app/sitemap.ts`, from `src/content/routes.ts`    |
| Google tag container ID                              | `GOOGLE_TAG_ID` in `src/content/site.ts`              |

## The truth rules

The site may only say a feature works when it's switched on in production (Kinetic positioning brief, §6). Each feature in `features.ts` has a status:

- `now`: works today.
- `managed`: works today when our team runs it (Kinetic Managed).
- `soon`: built, waiting on a last step. Shown as "Coming soon".
- `later`: planned, not built (Kinetic Agents).

When a gate opens (Google approves API access, self-serve sign-up switches on, video goes live), change that one status and every page follows. `test/content.test.ts` holds the rest in place: no prices, percentages, star ratings, testimonials, hype words or vendor names in the copy; no `[VERIFY]` on a page (it stays in comments); titles ≤ 60 and descriptions ≤ 155 characters; every link points at a real page; the Google features stay "soon"; and Anth.Tech is credited as Kinetic Agents' creator in the top banner, footer, home page, FAQ and structured data.

## Deploying on Vercel

Vercel project in the "AnthTech's projects" team, connected to this repository.

| Setting               | Value                                                           |
| --------------------- | --------------------------------------------------------------- |
| Git repository        | `anthbacop/kinetic-marketing-website`, production branch `main` |
| Root Directory        | empty (the repository root)                                     |
| Framework preset      | Next.js                                                         |
| Install command       | default (Vercel sees `pnpm-lock.yaml` and runs `pnpm install`)  |
| Build command         | `pnpm run build` (runs `next build`)                            |
| Output directory      | default                                                         |
| Node.js version       | 24.x (matches `.nvmrc`)                                         |
| Environment variables | None                                                            |

**Domains**, with DNS on Cloudflare: `gokinetic.tech` is the production domain and `www.gokinetic.tech` redirects (308) to it. Cloudflare holds an `A` record for the apex and a `CNAME` for `www` with the proxy off (grey cloud, "DNS only"). Leave the `studio`, `sites` / `*.sites` records and the Email Routing MX and TXT records (`hello@gokinetic.tech`) alone.
