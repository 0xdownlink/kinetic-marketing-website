import type { Metadata } from "next";
import { routes, type RouteKey } from "../content/routes";
import { SITE_NAME } from "../content/site";

/**
 * A page's metadata from its entry in routes.ts: title, description, canonical
 * address and the Open Graph and Twitter tags. The share image comes from the
 * route's own opengraph-image file, which Next adds by itself.
 */
export function pageMetadata(key: RouteKey): Metadata {
  const route = routes[key];
  return {
    // The home title is already complete; other pages are used as written too,
    // so the layout's title template never doubles the brand.
    title: { absolute: route.title },
    description: route.description,
    alternates: { canonical: route.path },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      title: route.title,
      description: route.description,
      url: route.path,
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: route.title,
      description: route.description,
    },
  };
}
