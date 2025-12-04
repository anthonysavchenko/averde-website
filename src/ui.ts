export const defaultLanguage = "ru";

export const ui = {
  ru: {
    "art.year": "год",
    "art.technique": "Техника",
    "art.size": "Размер",
    "art.cm": "см",
    "menu.averdizm": "Авердизм",
    "menu.artists": "Художники",
    "menu.arts": "Картины",
    "footer.copy": "Авердизм. Все права защищены.",
    "warning.instagram": "Instagram — соцсеть, принадлежащая компании Meta, деятельность которой запрещена на территории Российской Федерации.",
  },
  en: {
    "art.year": "year",
    "art.technique": "Technique",
    "art.size": "Size",
    "art.cm": "cm",
    "menu.averdizm": "Averdizm",
    "menu.artists": "Artists",
    "menu.arts": "Arts",
    "footer.copy": "Averdizm. All rights reserved.",
    "warning.instagram": "Instagram is a social network owned by Meta, whose activities are prohibited on the territory of the Russian Federation.",
  },
} as const;

export function useTranslations(language: string = defaultLanguage) {
  const currentLanguage =
    language in ui ? (language as keyof typeof ui) : defaultLanguage;

  const t = (key: keyof (typeof ui)[typeof defaultLanguage]) =>
    ui[currentLanguage][key] || ui[defaultLanguage][key];

  return { t };
}
