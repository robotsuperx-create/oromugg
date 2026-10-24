// Server-only helper: inserts rows through Supabase's REST API with the
// service-role key. Never import this from a client component.

export type LeadRow = {
  name: string;
  phone: string;
  business: string;
  need: string;
  message: string;
  locale: string;
  source?: string;
};

export function supabaseConfigured() {
  return Boolean(process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY);
}

export async function insertLead(row: LeadRow): Promise<{ ok: true } | { ok: false; error: string }> {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return { ok: false, error: "supabase_not_configured" };

  const res = await fetch(`${url}/rest/v1/leads`, {
    method: "POST",
    headers: {
      apikey: key,
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify(row),
  });

  if (!res.ok) {
    return { ok: false, error: `supabase_${res.status}: ${(await res.text()).slice(0, 300)}` };
  }
  return { ok: true };
}
