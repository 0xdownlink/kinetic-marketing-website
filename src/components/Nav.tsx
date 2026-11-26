"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { COMPANY, primaryNav, studio } from "@/content/site";
import { Arrow, Mark } from "./Mark";
import { SmartLink } from "./SmartLink";
import styles from "./Nav.module.css";
import { cx } from "@/lib/cx";

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Close the menu on navigation and on Escape.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const current = (href: string) =>
    href.startsWith("/") &&
    (pathname === href || pathname.startsWith(`${href}/`))
      ? "page"
      : undefined;

  return (
    <header
      className={cx(styles.nav, scrolled ? styles.navScrolled : "")}
      data-open={open}
    >
      <div className={styles.inner}>
        <SmartLink
          href="/"
          className={styles.brand}
          aria-label="Kinetic Labs home"
        >
          <span className={styles.brandMarkIcon}>
            <Mark />
          </span>
          <span className={styles.brandText}>
            <span className={styles.brandName}>Kinetic</span>
            <span className={styles.brandMark}>Labs</span>
          </span>
        </SmartLink>

        <nav className={styles.links} aria-label="Primary">
          {primaryNav.map((l) => (
            <SmartLink
              key={l.href}
              href={l.href}
              className={styles.link}
              aria-current={current(l.href)}
            >
              {l.label}
            </SmartLink>
          ))}
        </nav>

        <div className={styles.actions}>
          <a
            href={studio.audit}
            className={cx("btn", "btn--primary", styles.cta)}
          >
            Free website check
            <Arrow />
          </a>
          <button
            type="button"
            className={styles.burger}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="site-menu"
            onClick={() => {
              setOpen((v) => !v);
            }}
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      <div id="site-menu" className={styles.drawer} inert={!open}>
        <nav aria-label="Menu">
          {primaryNav.map((l) => (
            <SmartLink
              key={l.href}
              href={l.href}
              className={styles.drawerLink}
              aria-current={current(l.href)}
            >
              {l.label}
            </SmartLink>
          ))}
        </nav>
        <a
          href={studio.audit}
          className={cx("btn", "btn--primary", styles.drawerCta)}
        >
          Free website check
          <Arrow />
        </a>
        <p className={styles.drawerNote}>
          Kinetic Labs is created by {COMPANY}.
        </p>
      </div>
    </header>
  );
}
