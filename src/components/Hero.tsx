import type { Dict } from "@/i18n/dictionaries";
import { whatsappLink } from "@/lib/site";

function Frame({ label, views, tall }: { label: string; views: string; tall?: boolean }) {
  return (
    <figure className={`frame w-full ${tall ? "" : "scale-[0.96]"}`}>
      <span className="frame-perfs" style={{ insetInlineStart: 6 }} aria-hidden="true" />
      <span className="frame-perfs" style={{ insetInlineEnd: 6 }} aria-hidden="true" />
      <span
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-12 w-12 rounded-full border border-cream/60 flex items-center justify-center"
      >
        <svg width="14" height="16" viewBox="0 0 14 16" fill="var(--cream)">
          <path d="M1 1.5v13l12-6.5z" />
        </svg>
      </span>
      <figcaption className="absolute inset-x-5 bottom-5 flex items-end justify-between text-cream">
        <span className="text-[13px] leading-tight max-w-[70%]">{label}</span>
        <span className="text-[13px] tabular-nums opacity-85">▶ {views}</span>
      </figcaption>
    </figure>
  );
}

export function Hero({ t }: { t: Dict["hero"] }) {
  const reels = t.reels;
  const colA = [...reels, ...reels];
  const colB = [...reels.slice(2), ...reels.slice(0, 2), ...reels.slice(2), ...reels.slice(0, 2)];

  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-10 lg:gap-6 items-center pt-16 pb-10 lg:pt-24 lg:pb-20">
        <div className="lg:col-span-7">
          <p className="eyebrow rise">{t.kicker}</p>
          <h1 className="display mt-5 text-[clamp(3.25rem,9vw,7.5rem)] text-roast rise rise-2">
            {t.title.map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </h1>
          <p className="mt-7 max-w-[34rem] text-[1.0625rem] leading-relaxed text-ink/80 rise rise-3">
            {t.text}
          </p>
          <div className="mt-9 flex flex-wrap gap-3 rise rise-3">
            <a href={whatsappLink("Salam, OROM UGG — ")} className="btn btn-primary">
              {t.primary}
            </a>
            <a href="#packages" className="btn btn-outline">
              {t.secondary}
            </a>
          </div>
        </div>

        <div
          className="lg:col-span-5 relative h-[420px] sm:h-[520px] lg:h-[640px] rise rise-2"
          style={{
            maskImage: "linear-gradient(180deg, transparent 0%, #000 12%, #000 88%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(180deg, transparent 0%, #000 12%, #000 88%, transparent 100%)",
          }}
          aria-hidden="true"
        >
          <div className="absolute inset-0 grid grid-cols-2 gap-4 px-2">
            <div className="overflow-hidden">
              <div className="strip-drift flex flex-col gap-4">
                {colA.map((r, i) => (
                  <Frame key={i} {...r} tall />
                ))}
              </div>
            </div>
            <div className="overflow-hidden pt-16">
              <div className="strip-drift-slow flex flex-col gap-4">
                {colB.map((r, i) => (
                  <Frame key={i} {...r} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
