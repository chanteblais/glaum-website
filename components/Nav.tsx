"use client";

import { useState } from "react";
import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/#testimonials", label: "Testimonials" },
  { href: "/#attunement", label: "Attunement" },
  { href: "/#values", label: "Benefits" },
  { href: "/#tenets", label: "Tenets" },
  { href: "/#policies", label: "Policies" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-plum-deep/90 backdrop-blur-md border-b border-gold/30">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <Link
            href="/"
            className="font-tokyo text-3xl text-cream hover:text-gold transition-colors"
            onClick={() => setOpen(false)}
          >
            Glåüm
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-7">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="font-tokyo text-lg text-cream hover:text-gold transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="md:hidden p-2 text-cream hover:text-gold transition-colors"
            onClick={() => setOpen((v) => !v)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden border-t border-gold/30 py-4 space-y-4">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="block font-tokyo text-lg text-cream hover:text-gold transition-colors"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
