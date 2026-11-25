import type { NextConfig } from "next";

// The public marketing site for Kinetic (gokinetic.tech). It's a standalone app:
// no workspace packages, no database and no environment variables, so it builds
// with Next's defaults (Turbopack) and every page is static.

const nextConfig: NextConfig = {
  // Don't let `next dev` write AGENTS.md / CLAUDE.md into the app: Claude Code
  // would load them as unreviewed instructions. Agent guidance lives in the
  // reviewed root CLAUDE.md.
  agentRules: false,
  reactStrictMode: true,
  poweredByHeader: false,
  // Nothing frames this site, nothing should sniff its types, and other sites
  // only learn the origin as the referrer. The one third-party script is the Google
  // tag (src/components/GoogleTag.tsx); the CSP sets no script-src, so it needs no
  // allowance here. Add one if script-src is ever introduced.
  headers() {
    return Promise.resolve([
      {
        source: "/:path*",
        headers: [
          { key: "Content-Security-Policy", value: "frame-ancestors 'none'" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ]);
  },
};

export default nextConfig;
