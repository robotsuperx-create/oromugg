import type { Dict } from "@/i18n/dictionaries";

export function Process({ t }: { t: Dict["process"] }) {
  return (
    <section className="rule">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <h2 className="display text-4xl sm:text-5xl text-snow">{t.heading}</h2>
        <ol className="mt-12 grid sm:grid-cols-2 lg:grid-cols-5 gap-x-6 gap-y-10 relative">
          <span className="hidden lg:block absolute top-[11px] inset-x-0 h-px bg-line-strong" aria-hidden="true" />
          {t.steps.map((s, i) => (
            <li key={s.title} className="relative">
              <span className="relative z-10 inline-flex h-6 w-6 items-center justify-center rounded-full bg-lime text-black text-[12px] font-semibold tabular-nums ring-4 ring-night">
                {i + 1}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-snow">{s.title}</h3>
              <p className="mt-2 text-[15px] text-mist leading-relaxed">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
