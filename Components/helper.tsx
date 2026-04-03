import type { Locale } from "./i18n";
import { translations } from "./i18n";

export function getDictionary(locale: Locale) {
  return translations[locale] ?? translations.en!;
}