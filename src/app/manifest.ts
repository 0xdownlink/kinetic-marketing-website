import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Kinetic Agents",
    short_name: "Kinetic",
    description: "Keep your local business right online. Created by Anth.Tech.",
    start_url: "/",
    display: "browser",
    background_color: "#08080d",
    theme_color: "#08080d",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
