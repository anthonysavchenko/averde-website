# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Static website for the "Averde" (Авердизм) art gallery, built with [Astro](https://astro.build) (based on the official blog template) plus Preact for interactive islands. Deployed at https://averdizm.ru. Content and UI copy are primarily in Russian; the codebase itself (comments, identifiers) is in English.

## Commands

- `npm run dev` — start local dev server
- `npm run build` — type-check content collections and build static site to `dist/`
- `npm run preview` — preview the production build locally
- `npm run astro ...` — run arbitrary Astro CLI commands (e.g. `npm run astro check`)

There is no test suite or linter configured in this repo.

## Architecture

### Trilingual content, not Astro i18n routing

`astro.config.mjs` declares `i18n.locales = ["ru", "en", "cn"]` with `ru` as the default locale and `cn` falling back to `en` falling back to `ru`. However, routing is **not** done via Astro's automatic locale-prefixed routing — it's done manually:

- Russian (default) pages live at the root: `src/pages/arts/`, `src/pages/artists/`, `src/pages/about.astro`, etc.
- English pages are hand-duplicated under `src/pages/en/...`
- Chinese pages are hand-duplicated under `src/pages/cn/...`

Each locale's page file is near-identical to its `ru` counterpart except for import paths and which content collection it queries (see below). **When adding a new page or changing an existing one, the same change usually needs to be replicated in all three `src/pages/`, `src/pages/en/`, and `src/pages/cn/` variants.**

`Astro.currentLocale` is used at runtime (e.g. in `Header.astro`, `LanguagePicker.astro`, `ItemLayout.astro`) to pick translated UI strings via `src/ui.ts` and to resolve which content collection to query.

### Content collections are per-locale, not a single localized collection

`src/content.config.ts` defines **separate collections per entity per locale** rather than one collection with locale variants:

- Arts: `arts` (ru) / `artsEn` / `artsCn` — sourced from `src/content/arts/`, `src/content/arts/en/`, `src/content/arts/cn/`
- Artists: `artists` (ru) / `artistsEn` / `artistsCn` — sourced from `src/content/artists/`, `src/content/artists/en/`, `src/content/artists/cn/`

Components that render arts/artists pick the collection name based on `Astro.currentLocale` (see the ternary pattern in `src/layouts/arts/ListLayout.astro` and `src/layouts/arts/ItemLayout.astro`). **Adding a new artwork or artist requires creating a matching `.mdx` file in all three locale folders** with the same `order` (controls sort order within a locale) and `artistId`/`photo` references — translate `title` and body copy per locale, and for arts also translate `technic`.

Each art entry's frontmatter schema (`src/content.config.ts`): `order`, `title`, `year`, `artistId` (must match an artist's collection id/slug), `technic`, `size` (array of `{a, b}` dimension pairs in cm), `photo` (relative path into `src/assets/arts/`). Artist entries: `order`, `title`, `photo` (relative path into `src/assets/artists/`), with the artist's bio as MDX body content.

### UI translation strings

`src/ui.ts` holds a flat dictionary of UI copy (menu labels, "year"/"technique"/"size" labels, footer, Instagram warning) per locale, consumed via `useTranslations(Astro.currentLocale)` → `t("key")`. This is for chrome/UI strings only — actual art/artist content lives in the per-locale MDX collections above, not in `ui.ts`.

### Layouts vs pages

- `src/layouts/BaseLayout.astro` — shared HTML shell (head, header, footer) used by nearly every page.
- `src/layouts/HomeLayout.astro`, `NewsLayout.astro` — specific page layouts.
- `src/layouts/arts/ListLayout.astro` + `ItemLayout.astro`, `src/layouts/artists/ListLayout.astro` + `ItemLayout.astro` — shared between the ru/en/cn page variants; locale branching happens inside these layouts (via `Astro.currentLocale`), so the thin `src/pages/**/arts/[...slug].astro` / `index.astro` files are mostly just `getStaticPaths` + collection name wiring.

### Interactive components

Preact is used only for small interactive islands (mobile menu, Instagram warning dialog): `src/components/mobile-menu/*.tsx` and `src/components/social-links/warning/*.tsx`, each paired with a co-located `.css` file. Everything else is static `.astro` markup/styles (styles are scoped per-component via Astro's `<style>` blocks).

### Images

Art and artist photos live under `src/assets/arts/` and `src/assets/artists/` and are referenced from MDX frontmatter as relative paths, then rendered via Astro's `<Image>` component (`astro:assets`) for optimization — do not reference these images with plain `<img src>` or public URLs.
