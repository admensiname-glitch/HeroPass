/**
 * Central place for official HeroPass contact data.
 * WhatsApp number is still being configured: set WHATSAPP_URL to the official
 * "https://wa.me/55XXXXXXXXXXX" link when available. While null, buttons
 * point to the on-page contact section instead of a broken link.
 */
export const WHATSAPP_URL: string | null = null;

export const contactHref = WHATSAPP_URL ?? "#contato";
export const contactIsExternal = WHATSAPP_URL !== null;

export const PLANS = [
  { name: "Individual", people: 1, price: "149,90" },
  { name: "Duplo", people: 2, price: "249,90" },
  { name: "Trio", people: 3, price: "349,90" },
  { name: "Quarteto", people: 4, price: "449,90" },
] as const;
