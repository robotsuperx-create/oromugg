# OROM UGG — site de l'agence

Next.js 16 · Tailwind 4 · trilingue (ar / fr / en, RTL automatique) · prêt pour Vercel.

## Lancer en local

```bash
npm install
npm run dev
```

Ouvrir http://localhost:3000 — redirige vers `/ar`, `/fr` ou `/en` selon la langue du navigateur.

## Déployer sur Vercel

1. Pousser ce dossier sur un dépôt GitHub.
2. Sur vercel.com → "Add New Project" → importer le dépôt. Aucun réglage spécial.
3. Ajouter les variables d'environnement (voir `.env.example`), puis "Deploy".

## Variables d'environnement

| Variable | Rôle |
|---|---|
| `NEXT_PUBLIC_WHATSAPP` | Numéro WhatsApp de l'agence, chiffres seulement (ex. `2126XXXXXXXX`) |
| `NEXT_PUBLIC_EMAIL` | Email affiché dans la section contact |
| `NEXT_PUBLIC_INSTAGRAM`, `NEXT_PUBLIC_TIKTOK` | Liens des pages |
| `NEXT_PUBLIC_SITE_URL` | URL finale (pour les balises SEO / OpenGraph) |
| `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY` | Enregistrement des demandes du formulaire dans la table `public.leads` (migration dans `supabase/migrations/`). Sans ces clés, les demandes sont écrites dans les logs Vercel. |
| `RESEND_API_KEY`, `LEADS_TO`, `LEADS_FROM` | Notification email optionnelle de chaque demande via resend.com. |

## Modifier les textes

Tout le contenu (titres, offres, prix, créateurs, étapes) est dans `src/i18n/dictionaries.ts`, un bloc par langue. Les prix sont des chaînes libres.

## Structure

```
src/app/[locale]/        page + layout (lang, dir, fonts, SEO)
src/app/api/contact/     réception du formulaire → Supabase (+ email optionnel)
supabase/migrations/     schéma de la table leads
src/components/          Header, Hero, Proof, Services, Creators, Packages, Process, Work, Contact, Footer
src/i18n/                locales + dictionnaires
src/lib/site.ts          coordonnées de l'agence
src/proxy.ts             redirection vers la langue du visiteur
```
