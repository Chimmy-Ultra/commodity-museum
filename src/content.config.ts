import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const rooms = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/rooms' }),
  schema: ({ image }) => z.object({
    // Identity
    name: z.string(),
    nameEn: z.string(),
    slug: z.string(),
    wing: z.enum(['energy', 'metals', 'grains', 'livestock', 'softs', 'historical', 'index']),
    exchange: z.string(),
    tickerSymbol: z.string().optional(),
    status: z.enum(['active', 'delisted', 'historical']).default('active'),
    delistedYear: z.number().optional(),

    // Display
    icon: z.string(),
    accentColor: z.string(),
    roomNumber: z.number(),

    // Summary
    tagline: z.string(),
    taglineEn: z.string(),
    originRegion: z.string(),
    firstFuturesYear: z.number(),
    firstFuturesExchange: z.string(),
    greatestEventName: z.string(),
    greatestEventYear: z.number(),

    // SEO
    description: z.string(),

    // Images
    heroImage: image().optional(),
    heroImageAlt: z.string().optional(),
  }),
});

export const collections = { rooms };
