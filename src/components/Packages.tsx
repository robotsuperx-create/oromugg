"use client";

import { useState } from "react";
import type { Dict } from "@/i18n/dictionaries";
import { whatsappLink } from "@/lib/site";

export function Packages({ t }: { t: Dict["packages"] }) {
  const [tab, setTab] = useState<"business" | "individuals">("business");
  const list = t[tab];

  return (
    <section id="packages" className="bg-sand/60 rule scroll-mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="display text-4xl sm:text-5xl text-roast">{t.heading}</h2>
            <p className="mt-5 text-ink/75 leading-relaxed">{t.intro}</p>
          </div>
          <div role="tablist" className="inline-flex self-start rounded-full border border-line-strong p-1 bg-cream">
            {(["business", "individuals"] as const).map((k) => (
              <button
                key={k}
                role="tab"
                type="button"
                aria-selected={tab === k}
                onClick={() => setTab(k)}
                className={`px-5 py-2.5 rounded-full text-[15px] font-medium transition-colors ${
                  tab === k ? "bg-roast text-cream" : "text-roast hover:bg-sand"
                }`}
              >
                {t.tabs[k]}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-2 xl:grid-cols-4 gap-5">
          {list.map((p) => (
            <article
              key={p.name}
              className={`flex flex-col rounded-2xl p-7 ${
                p.featured
                  ? "bg-roast text-cream shadow-[0_30px_60px_-30px_rgba(27,18,11,0.6)]"
                  : "bg-paper text-ink border border-line"
              }`}
            >
              <h3 className="text-xl font-semibold">{p.name}</h3>
              <p className={`mt-1 text-sm ${p.featured ? "text-cream/70" : "text-ink/60"}`}>{p.who}</p>
              <div className="mt-6 flex items-baseline gap-2 flex-wrap">
                <span className="display text-4xl tabular-nums">{p.price}</span>
                {/\d/.test(p.price) && (
                  <span className={`text-sm ${p.featured ? "text-cream/70" : "text-ink/60"}`}>{t.currency}</span>
                )}
              </div>
              <p className={`text-sm ${p.featured ? "text-cream/70" : "text-ink/60"}`}>{p.period}</p>
              <ul className={`mt-6 space-y-2.5 text-[15px] flex-1 ${p.featured ? "text-cream/90" : "text-ink/85"}`}>
                {p.includes.map((it) => (
                  <li key={it} className="flex gap-2.5">
                    <svg className="mt-1 shrink-0" width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ color: p.featured ? "var(--tan)" : "var(--umber)" }}>
                      <path d="M2 7.5l3 3 7-7" />
                    </svg>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
              <a
                href={whatsappLink(`OROM UGG — ${p.name}`)}
                className={`btn mt-8 ${p.featured ? "btn-light" : "btn-outline"}`}
              >
                {t.cta}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
