import { Logo } from "./Logo";
import type { Dict } from "@/i18n/dictionaries";

export function Footer({ t }: { t: Dict["footer"] }) {
  return (
    <footer className="grain bg-abyss text-mist">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div>
          <Logo light />
          <p className="mt-3 text-sm max-w-xs">{t.tagline}</p>
        </div>
        <p className="text-sm">© {new Date().getFullYear()} OROM UGG. {t.rights}</p>
      </div>
    </footer>
  );
}
