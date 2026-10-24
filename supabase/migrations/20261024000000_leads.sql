-- Leads captured by the website contact form (src/app/api/contact/route.ts).
create table if not exists public.leads (
  id          uuid primary key default gen_random_uuid(),
  created_at  timestamptz not null default now(),
  name        text not null check (char_length(name) <= 120),
  phone       text not null check (char_length(phone) <= 40),
  business    text not null default '',
  need        text not null default '',
  message     text not null default '',
  locale      text not null default 'ar' check (locale in ('ar', 'fr', 'en')),
  source      text not null default 'website',
  status      text not null default 'new' check (status in ('new', 'contacted', 'won', 'lost')),
  notes       text not null default ''
);

create index if not exists leads_created_at_idx on public.leads (created_at desc);
create index if not exists leads_status_idx on public.leads (status);

-- Lock the table down: only the service-role key (used server-side by the
-- API route) can read or write. No public access.
alter table public.leads enable row level security;
revoke all on public.leads from anon, authenticated;
