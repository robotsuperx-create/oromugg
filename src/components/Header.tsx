"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "./Logo";
import { locales, localeLabels, type Locale } from "@/i18n/config";
import type { Dict } from "@/i18n/dictionaries";


export function Header({ locale, t }: { locale: Locale; t: Dict["nav"] }) {
  const [open, setOpen] = useState(false);
  const links = [
    ["#services", t.services],
    ["#tech", t.tech],
    ["#creators", t.creators],
    ["#packages", t.packages],
    ["#work", t.work],
    ["#contact", t.contact],
  ] as const;

  return (
    <header className="sticky top-0 z-40 bg-night/85 backdrop-blur-md border-b border-line">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        <Link href={`/${locale}`} aria-label="OROM UGG">
          <Logo />
        </Link>

        <nav className="hidden lg:flex items-center gap-6 text-[15px] text-snow">
          {links.map(([href, label]) => (
            <a key={href} href={href} className="hover:text-lime transition-colors">
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="flex items-center rounded-full border border-line-strong p-0.5 text-[13px]">
            {locales.map((l) => (
              <Link
                key={l}
                href={`/${l}`}
                hrefLang={l}
                className={`px-2.5 py-1 rounded-full transition-colors ${
                  l === locale ? "bg-lime text-abyss" : "text-snow hover:bg-panel"
                }`}
              >
                {localeLabels[l]}
              </Link>
            ))}
          </div>
          <a href="#contact" className="btn btn-primary hidden sm:inline-flex !py-2.5 !px-4 text-sm">
            {t.cta}
          </a>
          <button
            type="button"
            className="lg:hidden p-2 rounded-md text-snow"
            aria-expanded={open}
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              {open ? <path d="M4 4l14 14M18 4L4 18" /> : <path d="M3 6h16M3 11h16M3 16h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav className="lg:hidden border-t border-line bg-night px-4 py-3 flex flex-col">
          {links.map(([href, label]) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="py-3 text-snow border-b border-line last:border-0"
            >
              {label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="btn btn-primary mt-3">
            {t.cta}
          </a>
        </nav>
      )}
    </header>
  );
}
