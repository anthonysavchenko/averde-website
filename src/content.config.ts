import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const defineArtCollection = (base: string) =>
  defineCollection({
    loader: glob({ base, pattern: "*.{md,mdx}" }),
    schema: ({ image }) =>
      z.object({
        order: z.number(),
        title: z.string(),
        year: z.number(),
        artistId: z.string(),
        technic: z.string(),
        size: z.array(
          z.object({
            a: z.number(),
            b: z.number(),
          })
        ),
        photo: image(),
      }),
  });

const defineArtistCollection = (base: string) =>
  defineCollection({
    loader: glob({ base, pattern: "*.{md,mdx}" }),
    schema: ({ image }) =>
      z.object({
        order: z.number(),
        title: z.string(),
        photo: image(),
      }),
  });

const arts = defineArtCollection("./src/content/arts");
const artsEn = defineArtCollection("./src/content/arts/en");
const artists = defineArtistCollection("./src/content/artists");
const artistsEn = defineArtistCollection("./src/content/artists/en");

export const collections = { arts, artsEn, artists, artistsEn };
