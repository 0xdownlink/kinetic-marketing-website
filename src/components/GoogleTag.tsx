import Script from "next/script";
import { GOOGLE_TAG_ID } from "@/content/site";

// Google Tag Manager's snippet for this container, loaded on every page from
// the root layout. next/script runs it once after the page is interactive, so
// it never blocks the first paint. As in Google's GTM snippet, the data layer
// gets the gtm.js start event before the container loads: that event is what
// fires the container's tags (GA4 included) on the "All Pages" trigger.
export default function GoogleTag() {
  return (
    <>
      <Script id="google-tag-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
window.dataLayer.push({'gtm.start': new Date().getTime(), event: 'gtm.js'});`}
      </Script>
      <Script
        id="google-tag"
        src={`https://www.googletagmanager.com/gtm.js?id=${GOOGLE_TAG_ID}`}
        strategy="afterInteractive"
      />
    </>
  );
}
