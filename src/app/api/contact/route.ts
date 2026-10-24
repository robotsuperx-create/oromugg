import { NextResponse } from "next/server";
import { insertLead, supabaseConfigured } from "@/lib/supabase";

type Lead = {
  name?: string;
  phone?: string;
  business?: string;
  need?: string;
  message?: string;
  locale?: string;
  website?: string; // honeypot
};

export async function POST(req: Request) {
  let body: Lead;
  try {
    body = (await req.json()) as Lead;
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  // Bots fill the hidden field; humans don't.
  if (body.website) return NextResponse.json({ ok: true });

  const name = body.name?.trim();
  const phone = body.phone?.trim();
  if (!name || !phone || name.length > 120 || phone.length > 40) {
    return NextResponse.json({ ok: false, error: "missing_fields" }, { status: 400 });
  }

  const lead = {
    name,
    phone,
    business: body.business?.trim().slice(0, 200) ?? "",
    need: body.need?.trim().slice(0, 100) ?? "",
    message: body.message?.trim().slice(0, 2000) ?? "",
    locale: ["ar", "ary", "fr", "en"].includes(body.locale ?? "") ? (body.locale as string) : "ar",
    source: "website",
  };

  // 1) Store in Supabase (table: public.leads) when configured.
  if (supabaseConfigured()) {
    const stored = await insertLead(lead);
    if (!stored.ok) {
      console.error("lead_store_failed", stored.error);
      return NextResponse.json({ ok: false, error: "store_failed" }, { status: 502 });
    }
  } else {
    // Visible in Vercel runtime logs until SUPABASE_* env vars are set.
    console.log("lead", JSON.stringify(lead));
  }

  // 2) Optional email notification through Resend.
  if (process.env.RESEND_API_KEY && process.env.LEADS_TO) {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.LEADS_FROM ?? "OROM UGG <leads@oromugg.com>",
        to: [process.env.LEADS_TO],
        subject: `New lead: ${lead.name} — ${lead.need || "—"}`,
        text: Object.entries(lead)
          .map(([k, v]) => `${k}: ${v}`)
          .join("\n"),
      }),
    });
    if (!res.ok) console.error("resend_failed", await res.text());
  }

  return NextResponse.json({ ok: true });
}
