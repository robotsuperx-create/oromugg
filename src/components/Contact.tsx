"use client";

import { useState, type FormEvent } from "react";
import type { Dict } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import { site, whatsappLink } from "@/lib/site";

type Status = "idle" | "sending" | "sent" | "error";

export function Contact({ t, locale }: { t: Dict["contact"]; locale: Locale }) {
  const [status, setStatus] = useState<Status>("idle");
  const f = t.form;

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, locale }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="scroll-mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <h2 className="display text-4xl sm:text-5xl text-snow">{t.heading}</h2>
          <p className="mt-5 text-mist leading-relaxed">{t.intro}</p>
          <a href={whatsappLink("Salam, OROM UGG — ")} className="btn btn-primary mt-8">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.6.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.3-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.8 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.1.6a2.6 2.6 0 0 0 1.7-1.2 2.1 2.1 0 0 0 .2-1.2c-.1-.1-.3-.2-.5-.3z" />
            </svg>
            {t.whatsapp}
          </a>
          <dl className="mt-10 space-y-3 text-[15px] text-mist">
            <div className="flex gap-3"><dt className="text-dim w-20 shrink-0">Email</dt><dd><a className="hover:text-lime-ink" href={`mailto:${site.email}`}>{site.email}</a></dd></div>
            <div className="flex gap-3"><dt className="text-dim w-20 shrink-0">Instagram</dt><dd><a className="hover:text-lime-ink" href={site.instagram} target="_blank" rel="noreferrer">@oromugg</a></dd></div>
            <div className="flex gap-3"><dt className="text-dim w-20 shrink-0">TikTok</dt><dd><a className="hover:text-lime-ink" href={site.tiktok} target="_blank" rel="noreferrer">@oromugg</a></dd></div>
            <div className="flex gap-3"><dt className="text-dim w-20 shrink-0">⌖</dt><dd>{t.location}</dd></div>
          </dl>
        </div>

        <form onSubmit={onSubmit} className="lg:col-span-7 grid sm:grid-cols-2 gap-4 rounded-2xl bg-panel border border-line p-6 sm:p-8">
          <label className="block">
            <span className="sr-only">{f.name}</span>
            <input name="name" required placeholder={f.name} className="field" autoComplete="name" />
          </label>
          <label className="block">
            <span className="sr-only">{f.phone}</span>
            <input name="phone" required placeholder={f.phone} className="field" type="tel" inputMode="tel" autoComplete="tel" dir="ltr" />
          </label>
          <label className="block sm:col-span-2">
            <span className="sr-only">{f.business}</span>
            <input name="business" placeholder={f.business} className="field" autoComplete="organization" />
          </label>
          <label className="block sm:col-span-2">
            <span className="sr-only">{f.need}</span>
            <select name="need" required defaultValue="" className="field">
              <option value="" disabled>{f.need}</option>
              {f.needs.map((n) => (
                <option key={n} value={n}>{n}</option>
              ))}
            </select>
          </label>
          <label className="block sm:col-span-2">
            <span className="sr-only">{f.message}</span>
            <textarea name="message" rows={4} placeholder={f.message} className="field resize-y" />
          </label>
          {/* honeypot */}
          <input name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
          <div className="sm:col-span-2 flex flex-wrap items-center gap-4">
            <button type="submit" disabled={status === "sending"} className="btn btn-primary disabled:opacity-60">
              {status === "sending" ? f.sending : f.submit}
            </button>
            <p className={`text-sm ${status === "error" ? "text-red-400" : "text-mist"}`} aria-live="polite">
              {status === "sent" ? f.sent : status === "error" ? f.error : ""}
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
