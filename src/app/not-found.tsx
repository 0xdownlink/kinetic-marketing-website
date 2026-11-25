import Link from "next/link";
import PageHero from "@/components/PageHero";
import { Arrow } from "@/components/Mark";

export default function NotFound() {
  return (
    <PageHero
      section="§ 404"
      kicker="Not found"
      title={
        <>
          This page isn&apos;t here. <em>Nothing made up.</em>
        </>
      }
      subtitle={<p>The address may be old, or mistyped.</p>}
    >
      <Link href="/" className="btn btn--primary">
        Back to the home page <Arrow />
      </Link>
      <Link href="/features" className="btn btn--ghost">
        See what Kinetic does
      </Link>
    </PageHero>
  );
}
