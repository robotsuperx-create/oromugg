-- Allow Moroccan Darija (ary) as a lead locale.
alter table public.leads drop constraint if exists leads_locale_check;
alter table public.leads add constraint leads_locale_check check (locale in ('ar', 'ary', 'fr', 'en'));
