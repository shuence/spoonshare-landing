"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { List, X } from "@phosphor-icons/react";
import { ThemeToggle } from "@/components/theme-toggle";
import { APP_URL } from "@/lib/site";

const links = [
  { href: "/#why", label: "Why it matters" },
  { href: "/#how", label: "How it works" },
  { href: "/#impact", label: "Impact" },
  { href: "/#partners", label: "Partners" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;
    const observer = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { threshold: 1 }
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const previous = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.documentElement.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <div ref={sentinelRef} className="nav-sentinel" aria-hidden="true" />
      <header className={`nav${scrolled ? " is-scrolled" : ""}`}>
        <div className="nav__inner shell">
          <Link href="/" className="brand" aria-label="SpoonShare home">
            <Image
              src="/images/logo.png"
              alt=""
              width={38}
              height={38}
              className="brand__mark"
            />
            <span className="brand__name">SpoonShare</span>
          </Link>

          <nav className="nav__links" aria-label="Primary">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="nav__link">
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="nav__actions">
            <ThemeToggle />
            <a className="btn btn--primary btn--nav" href={APP_URL}>
              Get the app
            </a>
            <button
              type="button"
              className="nav__menu"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <X size={22} /> : <List size={22} />}
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div
          id="mobile-menu"
          className="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
        >
          <button
            ref={closeRef}
            type="button"
            className="mobile-menu__close"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          >
            <X size={26} />
          </button>
          <nav className="mobile-menu__links" aria-label="Mobile">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="mobile-menu__link"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <a
            className="btn btn--primary mobile-menu__cta"
            href={APP_URL}
            onClick={() => setOpen(false)}
          >
            Get the app
          </a>
          <a className="mobile-menu__mail" href="mailto:contact@spoonshare.org">
            contact@spoonshare.org
          </a>
        </div>
      )}
    </>
  );
}
