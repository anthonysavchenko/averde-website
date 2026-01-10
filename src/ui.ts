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
    "menu.news": "Новости",
    "footer.copy": "Авердизм. Все права защищены.",
    "warning.instagram":
      "Instagram — соцсеть, принадлежащая компании Meta, деятельность которой запрещена на территории Российской Федерации.",
  },
  en: {
    "art.year": "year",
    "art.technique": "Technique",
    "art.size": "Size",
    "art.cm": "cm",
    "menu.averdizm": "Averdizm",
    "menu.artists": "Artists",
    "menu.arts": "Arts",
    "menu.news": "News",
    "footer.copy": "Averdizm. All rights reserved.",
    "warning.instagram":
      "Instagram is a social network owned by Meta, whose activities are prohibited on the territory of the Russian Federation.",
  },
  cn: {
    "art.year": "年",
    "art.technique": "技术",
    "art.size": "尺寸",
    "art.cm": "cm",
    "menu.averdizm": "阿威尔第主义",
    "menu.artists": "艺术家",
    "menu.arts": "作品",
    "menu.news": "新闻资讯",
    "footer.copy": "阿威尔第主义版权所有",
    "warning.instagram":
      "Instagram——该社交媒体平台隶属于Meta公司，该公司在俄罗斯联邦境内的活动已被禁止。",
  },
} as const;

export function useTranslations(language: string = defaultLanguage) {
  const currentLanguage =
    language in ui ? (language as keyof typeof ui) : defaultLanguage;

  const t = (key: keyof (typeof ui)[typeof defaultLanguage]) =>
    ui[currentLanguage][key] || ui[defaultLanguage][key];

  return { t };
}
