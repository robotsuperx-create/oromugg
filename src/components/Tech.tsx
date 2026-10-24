import type { Dict } from "@/i18n/dictionaries";
import { whatsappLink } from "@/lib/site";

const icons = [
  // site
  <svg key="site" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="4" y="6" width="24" height="20" rx="2.5" /><path d="M4 12h24M9 9h1M13 9h1" strokeLinecap="round" /></svg>,
  // store
  <svg key="store" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"><path d="M5 12l2-6h18l2 6M5 12v14h22V12M5 12h22M13 26v-8h6v8" /></svg>,
  // app
  <svg key="app" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="9" y="3" width="14" height="26" rx="3" /><path d="M14 25h4" strokeLinecap="round" /></svg>,
  // automation
  <svg key="auto" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 3L8 18h8l-2 11 10-15h-8z" /></svg>,
  // dashboard
  <svg key="dash" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M5 27h22M9 23V15M15 23V9M21 23v-5M27 23V12" /></svg>,
  // shield
  <svg key="shield" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"><path d="M16 3l11 4v9c0 7-5 11-11 13C10 27 5 23 5 16V7z" /><path d="M11 16l3.5 3.5L21 13" strokeLinecap="round" /></svg>,
];

export function Tech({ t }: { t: Dict["tech"] }) {
  return (
    <section id="tech" className="rule scroll-mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
          <div className="lg:col-span-5">
            <h2 className="display text-4xl sm:text-5xl text-snow">{t.heading}</h2>
            <p className="mt-6 text-mist leading-relaxed">{t.intro}</p>
            <div className="mt-8 rounded-2xl border border-lime/40 bg-lime/5 p-5 text-[15px] leading-relaxed text-snow/90">
              <span className="me-2 inline-block h-2 w-2 rounded-full bg-lime align-middle" aria-hidden="true" />
              {t.proof}
            </div>
            <a href={whatsappLink("OROM UGG — tech")} className="btn btn-primary mt-8">
              {t.cta}
            </a>
          </div>

          <ul className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {t.items.map((it, i) => (
              <li key={it.title} className="rounded-2xl bg-panel border border-line p-6">
                <div className="h-8 w-8 text-lime">{icons[i]}</div>
                <h3 className="mt-4 text-lg font-semibold text-snow">{it.title}</h3>
                <p className="mt-2 text-[15px] text-mist leading-relaxed">{it.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
