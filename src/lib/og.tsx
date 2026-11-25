import { ImageResponse } from "next/og";
import { routes, type RouteKey } from "../content/routes";
import { COMPANY } from "../content/site";

// The share image every page gets (1200×630, Open Graph's large card). Each
// route's opengraph-image.tsx calls shareImage with its key, and Next renders it
// once at build time. Colors match globals.css; the font is next/og's default,
// so the build never fetches one.

export const SHARE_IMAGE_SIZE = { width: 1200, height: 630 } as const;

const NIGHT = "#08080d";
const PAPER = "#e8e8f0";
const MUTE = "#82829a";
const RULE = "#262633";
const ACCENT = "#7c7cff";
const TEAL = "#1fede0";

export function shareImageAlt(key: RouteKey): string {
  return `${routes[key].title}. Kinetic, created by ${COMPANY}.`;
}

export function shareImage(key: RouteKey): ImageResponse {
  const route = routes[key];
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "64px 72px",
        background: NIGHT,
        backgroundImage: `linear-gradient(135deg, rgba(91,91,255,0.30) 0%, rgba(8,8,13,0) 50%)`,
        color: PAPER,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: `1px solid ${RULE}`,
          paddingBottom: 24,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <svg width="52" height="52" viewBox="0 0 26 26" fill="none">
            <circle cx="13" cy="13" r="12" stroke={ACCENT} strokeWidth="1.2" />
            <path
              d="M6 13 L13 6 L20 13 L13 20 Z"
              stroke={ACCENT}
              strokeWidth="1.2"
              fill="none"
            />
            <circle cx="13" cy="13" r="2.2" fill={ACCENT} />
          </svg>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 34, letterSpacing: -0.5 }}>Kinetic</span>
            <span style={{ fontSize: 14, letterSpacing: 5, color: MUTE }}>
              AGENTS
            </span>
          </div>
        </div>
        <span
          style={{
            fontSize: 18,
            letterSpacing: 4,
            color: ACCENT,
            textTransform: "uppercase",
          }}
        >
          {`§ ${route.kicker}`}
        </span>
      </div>

      <div
        style={{
          display: "flex",
          fontSize: route.title.length > 44 ? 64 : 76,
          lineHeight: 1.02,
          letterSpacing: -2,
          maxWidth: 1000,
        }}
      >
        {route.title}
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderTop: `1px solid ${RULE}`,
          paddingTop: 24,
          fontSize: 20,
          color: MUTE,
          letterSpacing: 2,
        }}
      >
        <span>GOKINETIC.TECH</span>
        <span style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <span
            style={{
              width: 10,
              height: 10,
              borderRadius: 10,
              background: TEAL,
            }}
          />
          {`CREATED BY ${COMPANY.toUpperCase()}`}
        </span>
      </div>
    </div>,
    SHARE_IMAGE_SIZE,
  );
}
