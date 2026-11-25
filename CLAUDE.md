# Kinetic marketing site — house rules

The public site for Kinetic Agents at gokinetic.tech. Kinetic Agents is a Kinetic Tech LLC product, created by Anth.Tech. `README.md` says where everything lives.

## Truth

- Never invent content: no made-up facts, testimonials, reviews, stats, prices, deals, dates or customer names.
- Say a feature works only when its status in `src/content/features.ts` is `now` or `managed`. Don't change a status without Anthony's say-so.
- No prices until Anthony and Brayden sign off on pricing.
- Keep the Anth.Tech credit ("Anth.Tech created Kinetic Agents") in the top banner, footer, home page, FAQ and Organization structured data, and "© Kinetic Tech LLC" in the footer.
- Anything unconfirmed is marked `[VERIFY]` in a code comment or the PR, never on a page.
- `test/content.test.ts` and `test/seo.test.ts` hold these rules. Never weaken a test to make copy pass.

## Keep

- The Google tag (`GOOGLE_TAG_ID`, GTM-M3TH3Q9C), sitemap, robots (AI crawlers allowed), `llms.txt`, structured data, and the privacy and terms pages. A new third-party script must be added to the privacy page first.
- The dark theme and the design tokens in `src/app/globals.css`.
- No cookie banner (Anthony's decision).

## Workflow

- Work on a branch, open a pull request into `main`, and let CI (`pnpm check`) pass. A person merges; Claude never merges its own pull request.
- Never push to `main` or force-push.
- Don't downgrade `next` or `@next/*` below 16.4.1, or `sharp` below 0.35.5.
- Never read, print or commit secrets. The site needs no environment variables.
