// ar  = Modern Standard Arabic
// ary = Moroccan Arabic (Darija) — ISO 639-3 code
export const locales = ["ar", "ary", "fr", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "ar";

export const localeLabels: Record<Locale, string> = {
  ar: "ع",
  ary: "دارجة",
  fr: "FR",
  en: "EN",
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function dirOf(locale: Locale): "rtl" | "ltr" {
  return locale === "ar" || locale === "ary" ? "rtl" : "ltr";
}
