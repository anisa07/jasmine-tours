export type Locale = "ru" | "en" | "nl";
export const locales: Locale[] = ["ru"];
export const defaultLocale: Locale = "ru";

export const localeNames: Record<Locale, string> = {
  ru: "Русский",
  en: "English",
  nl: "Nederlands",
};
