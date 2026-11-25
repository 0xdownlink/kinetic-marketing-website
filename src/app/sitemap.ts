import type { MetadataRoute } from "next";
import { allRoutes } from "@/content/routes";
import { SITE_URL } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return allRoutes.map((route) => ({
    url: route.path === "/" ? SITE_URL : `${SITE_URL}${route.path}`,
    changeFrequency: "monthly",
    priority: route.priority,
  }));
}
