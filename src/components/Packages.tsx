"use client";

import { useState } from "react";
import type { Dict, Pkg } from "@/i18n/dictionaries";
import { whatsappLink } from "@/lib/site";

type Tab = "business" | "individuals" | "single";
const TABS: Tab[] = ["business", "individuals", "single"];

function Card({ p, t }: { p: Pkg; t: Dict["packages"] }) {
  return (
    <article
      className={`flex flex-col rounded-2xl p-7 border ${
        p.featured
          ? "bg-panel-2 border-lime/60 shadow-[0_0_80px_-30px_rgba(209,254,23,0.45)]"
          : "bg-panel border-line"
      }`}
    >
      <h3 className="text-xl font-semibold text-snow">{p.name}</h3>
      <p className="mt-1 text-sm text-dim">{p.who}</p>
      <div className="mt-6 flex items-baseline gap-2 flex-wrap">
        <span className={`display text-4xl tabular-nums ${p.featured ? "text-lime" : "text-snow"}`}>{p.price}</span>
        {/\d/.test(p.price) && <span className="text-sm text-dim">{t.currency}</span>}
      </div>
      <p className="text-sm text-dim">{p.period}</p>

      <ul className="mt-6 space-y-2.5 text-[15px] text-snow/85">
        {p.includes.map((it) => (
          <li key={it} className="flex gap-2.5">
            <svg className="mt-1 shrink-0 text-lime" width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 7.5l3 3 7-7" />
            </svg>
            <span>{it}</span>
          </li>
        ))}
      </ul>

      {p.tech && (
        <div className="mt-5 rounded-xl border border-lime/35 bg-lime/5 p-3.5">
          <div className="flex items-center gap-2 text-[12px] text-pistachio">
            <svg width="14" height="14" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M11 10l-6 6 6 6M21 10l6 6-6 6M18 6l-4 20" />
            </svg>
            {t.techLabel}
          </div>
          <p className="mt-1 text-[15px] text-snow leading-snug">{p.tech}</p>
        </div>
      )}

      <div className="flex-1" />
      <a
        href={whatsappLink(`OROM UGG — ${p.name}`)}
        className={`btn mt-7 ${p.featured ? "btn-primary" : "btn-outline"}`}
      >
        {t.cta}
      </a>
    </article>
  );
}

export function Packages({ t }: { t: Dict["packages"] }) {
  const [tab, setTab] = useState<Tab>("business");
  const list = t[tab];

  return (
    <section id="packages" className="bg-abyss rule scroll-mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-2xl">
          <h2 className="display text-4xl sm:text-5xl text-snow">{t.heading}</h2>
          <p className="mt-5 text-mist leading-relaxed">{t.intro}</p>
          <p className="mt-3 text-[15px] text-pistachio leading-relaxed">{t.techNote}</p>
        </div>

        <div role="tablist" className="mt-10 inline-flex flex-wrap rounded-full border border-line-strong p-1 bg-night">
          {TABS.map((k) => (
            <button
              key={k}
              role="tab"
              type="button"
              aria-selected={tab === k}
              onClick={() => setTab(k)}
              className={`px-5 py-2.5 rounded-full text-[15px] font-medium transition-colors ${
                tab === k ? "bg-lime text-abyss" : "text-snow hover:bg-panel"
              }`}
            >
              {t.tabs[k]}
            </button>
          ))}
        </div>

        <div className="mt-10 grid md:grid-cols-2 xl:grid-cols-4 gap-5">
          {list.map((p) => (
            <Card key={p.name} p={p} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
