import type { Metadata, Viewport } from "next";
import { Fraunces, IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import type { ReactNode } from "react";
import CreatorBanner from "@/components/CreatorBanner";
import Footer from "@/components/Footer";
import GoogleTag from "@/components/GoogleTag";
import { JsonLd } from "@/components/JsonLd";
import Nav from "@/components/Nav";
import { routes } from "@/content/routes";
import { SITE_NAME, SITE_URL } from "@/content/site";
import { organizationJsonLd } from "@/lib/structured-data";
import "./globals.css";
import { cx } from "@/lib/cx";

// The fonts are downloaded at build time and served from this site, so loading
// them never calls Google's font servers.
const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
  axes: ["opsz", "SOFT", "WONK"],
});

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
  variable: "--font-plex-sans",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-plex-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: routes.home.title, template: `%s | ${SITE_NAME}` },
  description: routes.home.description,
  applicationName: "Kinetic Agents",
  authors: [{ name: "Anth.Tech", url: "https://anth.tech" }],
  creator: "Anth.Tech",
  publisher: "Anth.Tech",
  robots: { index: true, follow: true },
  formatDetection: { telephone: false, email: false, address: false },
};

export const viewport: Viewport = {
  themeColor: "#08080d",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={cx(fraunces.variable, plexSans.variable, plexMono.variable)}
    >
      <body>
        <a className="skip" href="#main">
          Skip to content
        </a>
        <CreatorBanner />
        <Nav />
        <main id="main" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <JsonLd data={organizationJsonLd()} />
        <GoogleTag />
      </body>
    </html>
  );
}
