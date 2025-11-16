import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const arts = defineCollection({
  loader: glob({ base: './src/content/arts', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) =>
    z.object({
      order: z.number(),
      title: z.string(),
      year: z.number(),
      artistId: z.string(),
      technic: z.string(),
      size: z.array(z.object({
        a: z.number(),
        b: z.number()
      })),
      photo: image(),
    }),
});

const artists = defineCollection({
  loader: glob({ base: './src/content/artists', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) =>
    z.object({
      order: z.number(),
      title: z.string(),
      photo: image(),
    }),
});

export const collections = { artists, arts };
