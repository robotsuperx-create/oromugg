import type { Dict } from "@/i18n/dictionaries";
import { whatsappLink } from "@/lib/site";

export function Creators({ t, cta }: { t: Dict["creators"]; cta: string }) {
  return (
    <section id="creators" className="scroll-mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <h2 className="display text-4xl sm:text-5xl text-snow">{t.heading}</h2>
            <p className="mt-5 text-mist leading-relaxed">{t.intro}</p>
            <p className="mt-3 text-sm text-dim">{t.note}</p>
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 xl:grid-cols-4 gap-4">
            {t.people.map((p, i) => (
              <article key={p.name} className="group">
                <div className="frame">
                  <span className="frame-perfs" style={{ insetInlineStart: 6 }} aria-hidden="true" />
                  <span className="frame-perfs" style={{ insetInlineEnd: 6 }} aria-hidden="true" />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <span className="h-20 w-20 rounded-full bg-snow/10 border border-lime/50 flex items-center justify-center display text-3xl text-snow">
                      {p.name.slice(0, 1)}
                    </span>
                  </div>
                  <div className="absolute inset-x-5 bottom-5 text-snow">
                    <div className="flex items-baseline justify-between">
                      <span className="text-lg font-semibold">{p.name}</span>
                      <span className="text-[13px] tabular-nums opacity-85">{p.reach}</span>
                    </div>
                    <div className="text-[13px] opacity-75 mt-0.5">{p.city}</div>
                  </div>
                </div>
                <p className="mt-3 text-[15px] text-mist">{p.niche}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-14 rounded-2xl bg-panel p-7 sm:p-9 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-semibold text-snow">{t.join}</h3>
            <p className="mt-2 text-mist max-w-[38rem]">{t.joinText}</p>
          </div>
          <a href={whatsappLink("Creator — OROM UGG")} className="btn btn-primary shrink-0">
            {cta}
          </a>
        </div>
      </div>
    </section>
  );
}
