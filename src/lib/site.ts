export const site = {
  name: "OROM UGG",
  // Replace with the agency's real WhatsApp number in international format, digits only.
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP ?? "212600000000",
  email: process.env.NEXT_PUBLIC_EMAIL ?? "hello@oromugg.com",
  instagram: process.env.NEXT_PUBLIC_INSTAGRAM ?? "https://instagram.com/",
  tiktok: process.env.NEXT_PUBLIC_TIKTOK ?? "https://tiktok.com/",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://oromugg.com",
};

export function whatsappLink(text: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
}
