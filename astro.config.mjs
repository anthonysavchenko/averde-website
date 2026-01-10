// @ts-check

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://averdizm.ru",
  integrations: [mdx(), sitemap(), preact()],
  i18n: {
    locales: ["ru", "en", "cn"],
    defaultLocale: "ru",
    fallback: {
      en: "ru",
      cn: "en",
    },
  },
});
