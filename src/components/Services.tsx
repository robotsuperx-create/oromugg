import type { Dict } from "@/i18n/dictionaries";

const icons = [
  // camera
  <svg key="c" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"><path d="M4 11h6l2-3h8l2 3h6v15H4z" /><circle cx="16" cy="18" r="4.5" /></svg>,
  // people
  <svg key="p" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="11" r="4" /><circle cx="22" cy="12" r="3" /><path d="M4 26c0-4.4 3.6-8 8-8s8 3.6 8 8M20 20.5c3.5 0 6.5 2.7 6.5 6" strokeLinecap="round" /></svg>,
  // target
  <svg key="t" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="16" cy="16" r="11" /><circle cx="16" cy="16" r="6" /><circle cx="16" cy="16" r="1.5" fill="currentColor" /><path d="M16 2v5M16 25v5M2 16h5M25 16h5" strokeLinecap="round" /></svg>,
  // browser
  <svg key="b" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="4" y="6" width="24" height="20" rx="2.5" /><path d="M4 12h24M9 9h1M13 9h1" strokeLinecap="round" /><path d="M9 18l3 3-3 3M15 24h6" strokeLinecap="round" strokeLinejoin="round" /></svg>,
];

export function Services({ t }: { t: Dict["services"] }) {
  return (
    <section id="services" className="grain bg-abyss text-snow scroll-mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-2xl">
          <h2 className="display text-4xl sm:text-5xl lg:text-6xl">{t.heading}</h2>
          <p className="mt-5 text-lg text-mist">{t.intro}</p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 border-t border-line">
          {t.items.map((s, i) => (
            <article
              key={s.title}
              className={`py-9 sm:py-11 border-b border-line ${
                i % 2 === 0 ? "sm:pe-10 sm:border-e sm:border-line" : "sm:ps-10"
              }`}
            >
              <div className="h-9 w-9 text-lime">{icons[i]}</div>
              <h3 className="mt-5 text-2xl font-semibold">{s.title}</h3>
              <p className="mt-3 text-mist leading-relaxed max-w-[32rem]">{s.text}</p>
              <ul className="mt-5 space-y-1.5 text-[15px]">
                {s.points.map((p) => (
                  <li key={p} className="flex gap-2.5">
                    <span className="mt-[0.65em] h-1.5 w-1.5 rounded-full bg-lime shrink-0" aria-hidden="true" />
                    <span className="text-snow/85">{p}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
