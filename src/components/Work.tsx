import type { Dict } from "@/i18n/dictionaries";

export function Work({ t }: { t: Dict["work"] }) {
  return (
    <section id="work" className="grain bg-roast text-cream scroll-mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-2xl">
          <h2 className="display text-4xl sm:text-5xl">{t.heading}</h2>
          <p className="mt-5 text-cream/70 leading-relaxed">{t.intro}</p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {t.items.map((w) => (
            <article key={w.client} className="rounded-2xl border border-cream/15 bg-espresso/40 p-7">
              <div className="flex items-center justify-between text-[13px] text-cream/60">
                <span>{w.client}</span>
                <span>{w.sector}</span>
              </div>
              <div className="display mt-10 text-5xl tabular-nums text-tan">{w.result.split(" ")[0]}</div>
              <div className="text-cream/70 mt-1">{w.result.split(" ").slice(1).join(" ")}</div>
              <p className="mt-6 text-[15px] text-cream/85 leading-relaxed">{w.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
