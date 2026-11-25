import { llmsFullTxt } from "@/lib/llms";

// Built once at build time, like every other page.
export const dynamic = "force-static";

export function GET(): Response {
  return new Response(llmsFullTxt(), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
