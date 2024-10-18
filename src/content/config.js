import { z, defineCollection } from 'astro:content';
import { date } from 'astro:schema';

const blogCollection = defineCollection({
  type: 'content', // v2.5.0 and later
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    image: z.string().optional(),
  }),
});

const newsCollection = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        excerpt: z.string(),
        date: z.date(),
        featured: z.boolean().default(false),
        published: z.boolean().default(true)
    })
});


const partnerCollection = defineCollection({
  type: "content",
  schema: ({image}) => z.object({
    title: z.string(),
    image: image(),
    href: z.string().optional(),
    published: z.boolean().default(true)
  })
});

export const collections = {
  'news': newsCollection,
  "partner": partnerCollection
};