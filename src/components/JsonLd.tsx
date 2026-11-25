import { jsonLdScript } from "@/lib/structured-data";

export function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      // The content is our own static data, escaped for HTML by jsonLdScript.
      dangerouslySetInnerHTML={{ __html: jsonLdScript(data) }}
    />
  );
}
