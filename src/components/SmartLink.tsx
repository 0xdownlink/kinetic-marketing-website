import Link from "next/link";
import type { ReactNode } from "react";

/**
 * A link that uses next/link for this site's pages and a plain anchor for the
 * Kinetic app and email addresses.
 */
export function SmartLink({
  href,
  className,
  children,
  "aria-current": ariaCurrent,
  onClick,
}: {
  href: string;
  className?: string;
  children: ReactNode;
  "aria-current"?: "page";
  onClick?: () => void;
}) {
  if (href.startsWith("/")) {
    return (
      <Link
        href={href}
        className={className}
        aria-current={ariaCurrent}
        onClick={onClick}
      >
        {children}
      </Link>
    );
  }
  return (
    <a href={href} className={className} onClick={onClick}>
      {children}
    </a>
  );
}
