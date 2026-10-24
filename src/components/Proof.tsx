import type { Dict } from "@/i18n/dictionaries";

export function Proof({ items }: { items: Dict["proof"] }) {
  return (
    <section className="rule">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4">
        {items.map((it, i) => (
          <div
            key={i}
            className={`py-8 lg:py-10 ${i % 2 === 1 ? "ps-6 border-s border-line" : ""} ${
              i >= 2 ? "border-t border-line lg:border-t-0" : ""
            } lg:ps-8 lg:border-s lg:first:border-s-0 lg:first:ps-0`}
          >
            <div className="display text-4xl lg:text-5xl text-snow tabular-nums">{it.value}</div>
            <p className="mt-2 text-[15px] text-mist max-w-[14rem] leading-snug">{it.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
