/** The Kinetic mark: a diamond in a ring around a core. */
export function Mark({ size = 26 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 26 26"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="13" cy="13" r="12" stroke="currentColor" strokeWidth="1.2" />
      <path
        d="M6 13 L13 6 L20 13 L13 20 Z"
        stroke="currentColor"
        strokeWidth="1.2"
        fill="none"
      />
      <circle cx="13" cy="13" r="2.2" fill="currentColor" />
    </svg>
  );
}

/** The arrow every primary button ends with. */
export function Arrow() {
  return (
    <svg
      width="14"
      height="10"
      viewBox="0 0 14 10"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M1 5h12M9 1l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="square"
      />
    </svg>
  );
}

/** A registration crosshair, for the hero's corners. */
export function Crosshair() {
  return (
    <svg
      width="34"
      height="34"
      viewBox="0 0 34 34"
      fill="none"
      aria-hidden="true"
    >
      <circle
        cx="17"
        cy="17"
        r="16.25"
        stroke="currentColor"
        strokeWidth="0.75"
      />
      <path d="M17 0V34M0 17H34" stroke="currentColor" strokeWidth="0.75" />
      <circle cx="17" cy="17" r="3" fill="currentColor" />
    </svg>
  );
}
